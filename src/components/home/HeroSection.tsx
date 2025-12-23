import { Link } from 'react-router-dom';
import { ArrowRight, Play, Shield, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

// Import equipment images
import petMriBlue from '@/assets/equipment/pet-mri-blue.jpg';
import petMrtPatient from '@/assets/equipment/pet-mrt-patient.jpg';

const HeroSection = () => {
  const { t, dir } = useLanguage();
  
  const stats = [
    { value: '15,000+', label: t('stats.patients'), icon: Users },
    { value: '500+', label: t('stats.doctors'), icon: Award },
    { value: '50+', label: t('stats.clinics'), icon: Shield },
    { value: '98%', label: t('stats.satisfaction'), icon: Award },
  ];
  
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden" dir={dir}>
      {/* Background with image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 gradient-hero" />
        <div 
          className="absolute inset-0 opacity-15 bg-cover bg-center"
          style={{ backgroundImage: `url(${petMriBlue})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
      </div>
      <div className="absolute inset-0 arabic-pattern opacity-20" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-gold/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-start space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 border border-gold/30 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-sm font-medium text-gold">{t('nav.tourism')}</span>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              {t('hero.title')}
              <span className="block text-gradient mt-2">{t('hero.subtitle')}</span>
            </h1>
            
            {/* Description */}
            <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {t('hero.description')}
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/apply">
                <Button variant="hero" size="xl" className="gap-2 w-full sm:w-auto">
                  {t('hero.cta')}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/tourism">
                <Button variant="heroOutline" size="xl" className="gap-2 w-full sm:w-auto">
                  <Play className="w-5 h-5" />
                  {t('hero.learn')}
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Image/Visual */}
          <div className="relative hidden lg:block">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main equipment image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={petMrtPatient}
                  alt="Modern medical equipment"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              </div>
              
              {/* Floating certification badge */}
              <div className="absolute -top-6 -right-6 p-4 rounded-2xl bg-card/95 backdrop-blur-sm shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">ISO 9001</p>
                    <p className="text-xs text-muted-foreground">Certified</p>
                  </div>
                </div>
              </div>
              
              {/* Floating stats cards */}
              <div className="absolute -bottom-4 -left-4 p-4 rounded-xl bg-card/95 backdrop-blur-sm shadow-lg animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald/20 flex items-center justify-center">
                    <Award className="w-5 h-5 text-emerald" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">500+</p>
                    <p className="text-xs text-muted-foreground">{t('stats.doctors')}</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-1/2 -right-8 p-4 rounded-xl bg-card/95 backdrop-blur-sm shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                    <Users className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">15,000+</p>
                    <p className="text-xs text-muted-foreground">{t('stats.patients')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Bar */}
        <div className="mt-16 lg:mt-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-gold" />
                <div className="text-2xl lg:text-3xl font-bold text-primary-foreground">{stat.value}</div>
                <div className="text-sm text-primary-foreground/70 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
