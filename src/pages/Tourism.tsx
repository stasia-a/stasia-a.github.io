import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Plane, Hotel, Stethoscope, HeartPulse, FileCheck, Car } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Tourism = () => {
  const { t, dir } = useLanguage();
  
  const steps = [
    { icon: FileCheck, title: 'Application', desc: 'Submit your medical documents and get a free consultation' },
    { icon: Stethoscope, title: 'Diagnosis', desc: 'Our doctors review your case and create a treatment plan' },
    { icon: Plane, title: 'Arrival', desc: 'Visa-free entry, airport pickup, and hotel accommodation' },
    { icon: HeartPulse, title: 'Treatment', desc: 'Receive world-class medical care at leading hospitals' },
    { icon: Hotel, title: 'Recovery', desc: 'Comfortable recovery with full medical supervision' },
    { icon: Car, title: 'Follow-up', desc: 'Post-treatment support and remote consultations' },
  ];
  
  const services = [
    'Visa support and documentation',
    'Airport transfer services',
    'Hotel accommodation arrangements',
    'Professional medical translation',
    'Halal food options',
    'Prayer facilities',
    '24/7 patient coordination',
    'Post-treatment remote follow-up',
  ];
  
  const countries = [
    { name: 'Libya', flag: '🇱🇾' },
    { name: 'Iraq', flag: '🇮🇶' },
    { name: 'Lebanon', flag: '🇱🇧' },
    { name: 'UAE', flag: '🇦🇪' },
    { name: 'Saudi Arabia', flag: '🇸🇦' },
    { name: 'Kuwait', flag: '🇰🇼' },
    { name: 'Qatar', flag: '🇶🇦' },
    { name: 'Bahrain', flag: '🇧🇭' },
  ];
  
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-32 gradient-hero relative overflow-hidden" dir={dir}>
        <div className="absolute inset-0 arabic-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/20 text-gold text-sm font-medium mb-4">
              {t('nav.tourism')}
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              {t('nav.tourism')}
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Complete medical tourism packages with professional support at every step
            </p>
            <Link to="/apply">
              <Button variant="hero" size="xl" className="gap-2">
                {t('hero.cta')}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Process */}
      <section className="py-20 bg-background" dir={dir}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">Your journey to better health in 6 simple steps</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative p-6 rounded-2xl bg-card border border-border card-hover">
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gold text-primary font-bold flex items-center justify-center">
                  {index + 1}
                </div>
                <div className="w-14 h-14 mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Included */}
      <section className="py-20 bg-secondary/50" dir={dir}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Services Included</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We take care of everything so you can focus on your health and recovery.
              </p>
              
              <div className="grid grid-cols-1 gap-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald flex-shrink-0" />
                    <span className="text-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-card rounded-3xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-foreground mb-6">We Welcome Patients From</h3>
              <div className="grid grid-cols-2 gap-4">
                {countries.map((country, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                    <span className="text-2xl">{country.flag}</span>
                    <span className="font-medium text-foreground">{country.name}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-muted-foreground text-center">
                And patients from all other countries are welcome!
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 gradient-hero relative overflow-hidden" dir={dir}>
        <div className="absolute inset-0 arabic-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Start Your Medical Journey?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Get a free consultation and personalized treatment plan today.
            </p>
            <Link to="/apply">
              <Button variant="hero" size="xl" className="gap-2">
                {t('hero.cta')}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Tourism;
