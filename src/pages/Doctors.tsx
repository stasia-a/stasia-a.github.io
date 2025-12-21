import { Link } from 'react-router-dom';
import { Award, Clock, Users, ArrowRight, Star } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Doctors = () => {
  const { t, dir } = useLanguage();
  
  const doctors = [
    {
      name: 'Prof. Alexander Mrochek',
      specialty: 'Cardiac Surgery',
      experience: 35,
      operations: 8000,
      education: 'MD, PhD, Professor',
      languages: ['Russian', 'English'],
    },
    {
      name: 'Dr. Sergey Krasny',
      specialty: 'Oncology',
      experience: 28,
      operations: 5500,
      education: 'MD, PhD',
      languages: ['Russian', 'English'],
    },
    {
      name: 'Dr. Alexander Beletsky',
      specialty: 'Orthopedics',
      experience: 25,
      operations: 4200,
      education: 'MD, PhD, Professor',
      languages: ['Russian', 'English', 'German'],
    },
    {
      name: 'Dr. Tatiana Pavlovich',
      specialty: 'Reproductive Medicine',
      experience: 20,
      operations: 3000,
      education: 'MD, PhD',
      languages: ['Russian', 'English'],
    },
    {
      name: 'Prof. Arseny Fedorov',
      specialty: 'Neurosurgery',
      experience: 30,
      operations: 6000,
      education: 'MD, PhD, Professor',
      languages: ['Russian', 'English'],
    },
    {
      name: 'Dr. Oleg Korolev',
      specialty: 'Transplantology',
      experience: 22,
      operations: 1800,
      education: 'MD, PhD',
      languages: ['Russian', 'English'],
    },
    {
      name: 'Dr. Marina Sidorenko',
      specialty: 'Cardiology',
      experience: 18,
      operations: 2500,
      education: 'MD, PhD',
      languages: ['Russian', 'English', 'Arabic'],
    },
    {
      name: 'Prof. Vladimir Pilotovich',
      specialty: 'Nephrology',
      experience: 32,
      operations: 4800,
      education: 'MD, PhD, Professor',
      languages: ['Russian', 'English'],
    },
  ];
  
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-32 gradient-hero relative overflow-hidden" dir={dir}>
        <div className="absolute inset-0 arabic-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/20 text-gold text-sm font-medium mb-4">
              {t('nav.doctors')}
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              {t('doctors.title')}
            </h1>
            <p className="text-xl text-primary-foreground/80">
              {t('doctors.subtitle')}
            </p>
          </div>
        </div>
      </section>
      
      {/* Doctors Grid */}
      <section className="py-20 bg-background" dir={dir}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((doctor, index) => (
              <div key={index} className="p-6 rounded-2xl bg-card border border-border card-hover text-center">
                {/* Avatar */}
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                  <span className="text-3xl font-bold text-gold">
                    {doctor.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                
                {/* Name & Specialty */}
                <h3 className="font-bold text-lg text-foreground mb-1">{doctor.name}</h3>
                <p className="text-sm text-primary font-medium mb-2">{doctor.specialty}</p>
                <p className="text-xs text-muted-foreground mb-4">{doctor.education}</p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="p-2 rounded-lg bg-secondary/50">
                    <div className="flex items-center justify-center gap-1 text-gold">
                      <Clock className="w-3 h-3" />
                      <span className="font-bold text-sm">{doctor.experience}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{t('doctors.experience')}</p>
                  </div>
                  <div className="p-2 rounded-lg bg-secondary/50">
                    <div className="flex items-center justify-center gap-1 text-emerald">
                      <Award className="w-3 h-3" />
                      <span className="font-bold text-sm">{doctor.operations.toLocaleString()}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{t('doctors.operations')}</p>
                  </div>
                </div>
                
                {/* Languages */}
                <div className="flex flex-wrap justify-center gap-1">
                  {doctor.languages.map((lang, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-gold/10 text-xs font-medium text-gold-dark">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="text-center mt-12">
            <Link to="/apply">
              <Button variant="gold" size="lg" className="gap-2">
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

export default Doctors;
