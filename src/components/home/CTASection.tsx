import { Phone, MessageCircle, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ApplicationForm from '@/components/forms/ApplicationForm';

const CTASection = () => {
  const { t, dir } = useLanguage();
  
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden" dir={dir}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-gold/5" />
      <div className="absolute inset-0 arabic-pattern opacity-10" />
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gold/20 rounded-full blur-2xl" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-emerald/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 backdrop-blur-sm mb-6">
              <MessageCircle className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-gold">{t('form.title')}</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t('form.title')}
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('form.subtitle')}
            </p>
          </div>
          
          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-card rounded-2xl p-6 border border-border shadow-lg">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {t('contact.title')}
                </h3>
                
                <div className="space-y-4">
                  <a 
                    href="tel:+375296532951" 
                    className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{t('contact.phone')}</div>
                      <div className="font-medium text-foreground">+375 29 653-29-51</div>
                    </div>
                  </a>
                  
                  <a 
                    href="https://wa.me/375296532951" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-emerald/5 hover:bg-emerald/10 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-emerald/10 flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-emerald" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">WhatsApp</div>
                      <div className="font-medium text-foreground">+375 29 653-29-51</div>
                    </div>
                  </a>
                  
                  <a 
                    href="mailto:charusin@mail.ru"
                    className="flex items-center gap-3 p-3 rounded-lg bg-gold/5 hover:bg-gold/10 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{t('contact.email')}</div>
                      <div className="font-medium text-foreground">charusin@mail.ru</div>
                    </div>
                  </a>
                </div>
                
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="text-sm text-muted-foreground mb-2">{t('contact.hours')}</div>
                  <div className="font-medium text-foreground">{t('contact.hours.value')}</div>
                </div>
              </div>
            </div>
            
            {/* Application Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg">
                <ApplicationForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;