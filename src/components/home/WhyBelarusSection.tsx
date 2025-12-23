import { Award, DollarSign, Plane, Languages, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Import equipment image
import mrtPhilips from '@/assets/equipment/mrt-philips.jpg';

const WhyBelarusSection = () => {
  const { t, dir } = useLanguage();
  
  const reasons = [
    {
      icon: Award,
      title: t('why.quality'),
      description: t('why.quality.desc'),
    },
    {
      icon: DollarSign,
      title: t('why.price'),
      description: t('why.price.desc'),
    },
    {
      icon: Plane,
      title: t('why.visa'),
      description: t('why.visa.desc'),
    },
    {
      icon: Languages,
      title: t('why.arabic'),
      description: t('why.arabic.desc'),
    },
  ];
  
  const benefits = [
    'ISO 9001 Certified Hospitals',
    'JCI Accredited Centers',
    'Modern Equipment',
    '24/7 Patient Support',
    'Airport Transfer',
    'Hotel Accommodation',
  ];
  
  return (
    <section className="py-20 lg:py-32 bg-secondary/50 relative overflow-hidden" dir={dir}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold-dark text-sm font-medium mb-4">
              {t('why.title')}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              {t('why.title')}
            </h2>
            
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                    <reason.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{reason.title}</h3>
                    <p className="text-muted-foreground">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right - Image and Benefits Card */}
          <div className="relative">
            {/* Equipment Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-6">
              <img 
                src={mrtPhilips}
                alt="МРТ оборудование Philips 3T"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-semibold">MRI Philips 3T</p>
                <p className="text-white/80 text-sm">High-precision diagnostics</p>
              </div>
            </div>
            
            {/* Benefits Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark rounded-3xl transform rotate-2" />
              <div className="relative bg-card rounded-3xl p-8 shadow-lg">
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gold rounded-2xl flex items-center justify-center shadow-gold">
                  <span className="text-xl font-bold text-primary">✓</span>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Premium Benefits
                </h3>
                
                <div className="grid grid-cols-1 gap-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Savings up to</p>
                      <p className="text-2xl font-bold text-gold">70%</p>
                    </div>
                    <div className="text-end">
                      <p className="text-sm text-muted-foreground">vs Western Europe</p>
                      <p className="text-lg font-semibold text-foreground">Same Quality</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBelarusSection;
