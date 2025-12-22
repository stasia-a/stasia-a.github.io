import { Link } from 'react-router-dom';
import { Crown, ArrowRight, Shield, Clock, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const VipPromoSection = () => {
  const { t, dir } = useLanguage();
  
  const features = [
    { icon: Users, key: 'coordinator' },
    { icon: Clock, key: 'priority' },
    { icon: Shield, key: 'confidentiality' },
    { icon: Star, key: 'comfort' },
  ];
  
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden" dir={dir}>
      {/* Decorative elements */}
      <div className="absolute inset-0 arabic-pattern opacity-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-start">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/20 text-gold text-sm font-medium mb-6">
                <Crown className="w-4 h-4" />
                {t('vipPromo.badge')}
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
                {t('vipPromo.title')}
              </h2>
              
              <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
                {t('vipPromo.description')}
              </p>
              
              <Link to="/vip-tourism">
                <Button variant="hero" size="xl" className="gap-2">
                  {t('vipPromo.cta')}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
            
            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-semibold text-primary-foreground mb-1">
                    {t(`vipPromo.features.${feature.key}.title`)}
                  </h3>
                  <p className="text-sm text-primary-foreground/70">
                    {t(`vipPromo.features.${feature.key}.desc`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* VIP Packages Preview */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {['silver', 'gold', 'platinum'].map((pkg) => (
              <div
                key={pkg}
                className={`p-6 rounded-2xl backdrop-blur-sm border transition-all hover:scale-[1.02] ${
                  pkg === 'gold' 
                    ? 'bg-gold/20 border-gold/40' 
                    : 'bg-primary-foreground/5 border-primary-foreground/20'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-bold ${pkg === 'gold' ? 'text-gold' : 'text-primary-foreground'}`}>
                    VIP {pkg.toUpperCase()}
                  </span>
                  {pkg === 'gold' && (
                    <span className="px-2 py-0.5 rounded-full bg-gold/30 text-gold text-xs">
                      {t('vip.packages.popular')}
                    </span>
                  )}
                </div>
                <p className="text-sm text-primary-foreground/70 mb-2">
                  {t(`vip.packages.${pkg}.subtitle`)}
                </p>
                <p className={`font-semibold ${pkg === 'gold' ? 'text-gold' : 'text-primary-foreground/90'}`}>
                  {t(`vip.packages.${pkg}.price`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VipPromoSection;
