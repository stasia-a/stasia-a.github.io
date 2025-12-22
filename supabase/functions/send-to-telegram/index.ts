import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ApplicationRequest {
  type: "standard" | "vip";
  name: string;
  email: string;
  phone?: string;
  whatsapp?: string;
  telegram?: string;
  diagnosis?: string;
  message?: string;
  readiness?: string;
  vipPackage?: string;
  country?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const botToken = Deno.env.get("TELEGRAM_BOT_TOKEN");
    const chatId = Deno.env.get("TELEGRAM_CHAT_ID");

    if (!botToken || !chatId) {
      console.error("Missing Telegram configuration");
      throw new Error("Telegram configuration not set");
    }

    const data: ApplicationRequest = await req.json();
    console.log("Received application data:", data);

    // Build message text based on application type
    let messageText = "";
    
    if (data.type === "vip") {
      messageText = `🌟 *НОВАЯ VIP ЗАЯВКА*\n\n`;
      messageText += `👤 *Имя:* ${data.name}\n`;
      messageText += `📧 *Email:* ${data.email}\n`;
      if (data.phone) messageText += `📞 *Телефон:* ${data.phone}\n`;
      if (data.whatsapp) messageText += `💬 *WhatsApp:* ${data.whatsapp}\n`;
      if (data.country) messageText += `🌍 *Страна:* ${data.country}\n`;
      if (data.vipPackage) messageText += `💎 *Пакет:* ${data.vipPackage.toUpperCase()}\n`;
      if (data.diagnosis) messageText += `🏥 *Диагноз:* ${data.diagnosis}\n`;
      if (data.message) messageText += `💬 *Сообщение:* ${data.message}\n`;
    } else {
      messageText = `📋 *НОВАЯ ЗАЯВКА*\n\n`;
      messageText += `👤 *Имя:* ${data.name}\n`;
      messageText += `📧 *Email:* ${data.email}\n`;
      if (data.phone) messageText += `📞 *Телефон:* ${data.phone}\n`;
      if (data.whatsapp) messageText += `💬 *WhatsApp:* ${data.whatsapp}\n`;
      if (data.telegram) messageText += `✈️ *Telegram:* ${data.telegram}\n`;
      if (data.diagnosis) messageText += `🏥 *Диагноз:* ${data.diagnosis}\n`;
      if (data.readiness) messageText += `⏰ *Готовность:* ${data.readiness}\n`;
      if (data.message) messageText += `💬 *Сообщение:* ${data.message}\n`;
    }

    messageText += `\n📅 *Дата:* ${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Minsk" })}`;

    // Send message to Telegram
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    
    const telegramResponse = await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: messageText,
        parse_mode: "Markdown",
      }),
    });

    const telegramResult = await telegramResponse.json();
    console.log("Telegram API response:", telegramResult);

    if (!telegramResponse.ok) {
      console.error("Telegram API error:", telegramResult);
      throw new Error(`Telegram API error: ${telegramResult.description}`);
    }

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
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
