import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const CTASection = () => {
  const { t, dir } = useLanguage();
  
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden" dir={dir}>
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 arabic-pattern opacity-20" />
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gold/30 rounded-full blur-2xl" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-emerald/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 border border-gold/30 backdrop-blur-sm mb-6">
            <MessageCircle className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-gold">{t('form.title')}</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            {t('form.title')}
          </h2>
          
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            {t('form.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/apply">
              <Button variant="hero" size="xl" className="gap-2 w-full sm:w-auto">
                {t('hero.cta')}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:+375296532951">
              <Button variant="heroOutline" size="xl" className="gap-2 w-full sm:w-auto">
                <Phone className="w-5 h-5" />
                +375 29 653-29-51
              </Button>
            </a>
          </div>
          
          <p className="mt-6 text-sm text-primary-foreground/60">
            {t('form.subtitle')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
