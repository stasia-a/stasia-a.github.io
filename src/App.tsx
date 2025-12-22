import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Tourism from "./pages/Tourism";
import VipTourism from "./pages/VipTourism";
import Institutions from "./pages/Institutions";
import Doctors from "./pages/Doctors";
import Prices from "./pages/Prices";
import Contacts from "./pages/Contacts";
import Apply from "./pages/Apply";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/tourism" element={<Tourism />} />
              <Route path="/vip-tourism" element={<VipTourism />} />
              <Route path="/institutions" element={<Institutions />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/prices" element={<Prices />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/apply" element={<Apply />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
