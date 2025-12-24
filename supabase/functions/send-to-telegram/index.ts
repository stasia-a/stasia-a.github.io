import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

// Allowed origins - add your production domain here
const ALLOWED_ORIGINS = [
  "https://belmed.life",
  "https://www.belmed.life",
  "http://localhost:5173",
  "http://localhost:8080",
];

// Simple in-memory rate limiting (resets on function cold start)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 60000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 5; // Max 5 requests per minute per IP

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Server-side validation schema
const applicationSchema = z.object({
  type: z.enum(["standard", "vip"]),
  name: z.string().min(2, "Name too short").max(100, "Name too long").transform(sanitizeInput),
  email: z.string().email("Invalid email").max(255, "Email too long").transform(sanitizeInput),
  phone: z.string().max(30, "Phone too long").optional().transform(val => val ? sanitizeInput(val) : undefined),
  whatsapp: z.string().max(30, "WhatsApp too long").optional().transform(val => val ? sanitizeInput(val) : undefined),
  telegram: z.string().max(50, "Telegram too long").optional().transform(val => val ? sanitizeInput(val) : undefined),
  diagnosis: z.string().max(1000, "Diagnosis too long").optional().transform(val => val ? sanitizeInput(val) : undefined),
  message: z.string().max(2000, "Message too long").optional().transform(val => val ? sanitizeInput(val) : undefined),
  readiness: z.string().max(100, "Readiness too long").optional().transform(val => val ? sanitizeInput(val) : undefined),
  vipPackage: z.enum(["basic", "premium", "exclusive"]).optional(),
  country: z.string().max(100, "Country too long").optional().transform(val => val ? sanitizeInput(val) : undefined),
});

// Sanitize input to prevent Markdown injection in Telegram
function sanitizeInput(input: string): string {
  return input
    .replace(/[*_`\[\]()~>#+\-=|{}.!\\]/g, '') // Remove Markdown special characters
    .replace(/\n{3,}/g, '\n\n') // Limit consecutive newlines
    .trim();
}

// Check rate limit for an IP
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  record.count++;
  return true;
}

// Validate request origin
function isValidOrigin(origin: string | null): boolean {
  if (!origin) return false;
  
  // Check if origin matches any allowed origin or is a Lovable preview
  return ALLOWED_ORIGINS.some(allowed => origin === allowed) ||
    origin.includes('.lovable.app') ||
    origin.includes('.lovableproject.com');
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Only allow POST requests
  if (req.method !== "POST") {
    console.warn(`Rejected non-POST request: ${req.method}`);
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      {
        status: 405,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }

  try {
    // Get client IP for rate limiting
    const clientIP = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
                     req.headers.get("x-real-ip") || 
                     "unknown";
    
    // Check origin
    const origin = req.headers.get("origin");
    if (!isValidOrigin(origin)) {
      console.warn(`Rejected request from invalid origin: ${origin}, IP: ${clientIP}`);
      return new Response(
        JSON.stringify({ error: "Request not allowed from this origin" }),
        {
          status: 403,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Check rate limit
    if (!checkRateLimit(clientIP)) {
      console.warn(`Rate limit exceeded for IP: ${clientIP}`);
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        {
          status: 429,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const botToken = Deno.env.get("TELEGRAM_BOT_TOKEN");
    const chatId = Deno.env.get("TELEGRAM_CHAT_ID");

    if (!botToken || !chatId) {
      console.error("Missing Telegram configuration: botToken or chatId not set");
      return new Response(
        JSON.stringify({ error: "Unable to process request. Please try again later." }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Parse and validate request body
    let rawData;
    try {
      rawData = await req.json();
    } catch {
      console.warn(`Invalid JSON from IP: ${clientIP}`);
      return new Response(
        JSON.stringify({ error: "Invalid request format" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate with Zod schema
    const validationResult = applicationSchema.safeParse(rawData);
    if (!validationResult.success) {
      console.warn(`Validation failed for IP: ${clientIP}`, validationResult.error.errors);
      return new Response(
        JSON.stringify({ error: "Invalid input data. Please check your form and try again." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const data = validationResult.data;
    console.log(`Processing application from IP: ${clientIP}, type: ${data.type}`);

    // Build message text based on application type (using sanitized data)
    let messageText = "";
    
    if (data.type === "vip") {
      messageText = `🌟 НОВАЯ VIP ЗАЯВКА\n\n`;
      messageText += `👤 Имя: ${data.name}\n`;
      messageText += `📧 Email: ${data.email}\n`;
      if (data.phone) messageText += `📞 Телефон: ${data.phone}\n`;
      if (data.whatsapp) messageText += `💬 WhatsApp: ${data.whatsapp}\n`;
      if (data.country) messageText += `🌍 Страна: ${data.country}\n`;
      if (data.vipPackage) messageText += `💎 Пакет: ${data.vipPackage.toUpperCase()}\n`;
      if (data.diagnosis) messageText += `🏥 Диагноз: ${data.diagnosis}\n`;
      if (data.message) messageText += `💬 Сообщение: ${data.message}\n`;
    } else {
      messageText = `📋 НОВАЯ ЗАЯВКА\n\n`;
      messageText += `👤 Имя: ${data.name}\n`;
      messageText += `📧 Email: ${data.email}\n`;
      if (data.phone) messageText += `📞 Телефон: ${data.phone}\n`;
      if (data.whatsapp) messageText += `💬 WhatsApp: ${data.whatsapp}\n`;
      if (data.telegram) messageText += `✈️ Telegram: ${data.telegram}\n`;
      if (data.diagnosis) messageText += `🏥 Диагноз: ${data.diagnosis}\n`;
      if (data.readiness) messageText += `⏰ Готовность: ${data.readiness}\n`;
      if (data.message) messageText += `💬 Сообщение: ${data.message}\n`;
    }

    messageText += `\n📅 Дата: ${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Minsk" })}`;
    messageText += `\n🌐 IP: ${clientIP}`;

    // Send message to Telegram (no Markdown to avoid injection issues)
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    
    const telegramResponse = await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: messageText,
      }),
    });

    const telegramResult = await telegramResponse.json();
    console.log("Telegram API response status:", telegramResponse.status);

    if (!telegramResponse.ok) {
      console.error("Telegram API error:", telegramResult);
      return new Response(
        JSON.stringify({ error: "Unable to process request. Please try again later." }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log(`Application successfully sent for IP: ${clientIP}`);
    return new Response(
      JSON.stringify({ success: true, message: "Application sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-to-telegram function:", error);
    return new Response(
      JSON.stringify({ error: "Unable to process request. Please try again later." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
