import { Phone, MessageCircle, Mail } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ApplicationForm from '@/components/forms/ApplicationForm';
import { useLanguage } from '@/contexts/LanguageContext';

const Apply = () => {
  const { t, dir } = useLanguage();
  
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-24 gradient-hero relative overflow-hidden" dir={dir}>
        <div className="absolute inset-0 arabic-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/20 text-gold text-sm font-medium mb-4">
              {t('nav.apply')}
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              {t('form.title')}
            </h1>
            <p className="text-xl text-primary-foreground/80">
              {t('form.subtitle')}
            </p>
          </div>
        </div>
      </section>
      
      {/* Form Section */}
      <section className="py-20 bg-background" dir={dir}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <h3 className="font-semibold text-foreground mb-4">Quick Contact</h3>
                  
                  <div className="space-y-4">
                    <a href="tel:+375291234567" className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{t('contact.phone')}</p>
                        <p className="font-medium text-foreground">+375 29 123-45-67</p>
                      </div>
                    </a>
                    
                    <a href="https://wa.me/375291234567" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-emerald/10 flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-emerald" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">WhatsApp</p>
                        <p className="font-medium text-foreground">Chat with us</p>
                      </div>
                    </a>
                    
                    <a href="mailto:info@medbelarus.com" className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{t('contact.email')}</p>
                        <p className="font-medium text-foreground">info@medbelarus.com</p>
                      </div>
                    </a>
                  </div>
                </div>
                
                <div className="p-6 rounded-2xl bg-gold/10 border border-gold/20">
                  <h3 className="font-semibold text-foreground mb-2">Response Time</h3>
                  <p className="text-sm text-muted-foreground">
                    We respond to all inquiries within 24 hours. For urgent matters, please call us directly.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="p-8 rounded-2xl bg-card border border-border shadow-lg">
                <ApplicationForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Apply;
