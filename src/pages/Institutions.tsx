import { Link } from 'react-router-dom';
import { MapPin, Award, Users, ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Institutions = () => {
  const { t, dir } = useLanguage();
  
  const institutions = [
    {
      name: 'Republican Scientific and Practical Center for Cardiology',
      location: 'Minsk',
      specialty: 'Cardiology & Cardiac Surgery',
      beds: 450,
      certifications: ['ISO 9001', 'JCI'],
      description: 'Leading cardiac center in Eastern Europe with advanced heart surgery capabilities.',
    },
    {
      name: 'N.N. Alexandrov National Cancer Centre',
      location: 'Minsk',
      specialty: 'Oncology',
      beds: 1200,
      certifications: ['ISO 9001', 'European Guidelines'],
      description: 'The largest oncology center in Belarus with cutting-edge radiation therapy.',
    },
    {
      name: 'Republican Scientific and Practical Center for Traumatology and Orthopedics',
      location: 'Minsk',
      specialty: 'Orthopedics & Spine Surgery',
      beds: 380,
      certifications: ['ISO 9001'],
      description: 'Specializing in joint replacement and complex spine surgeries.',
    },
    {
      name: 'Minsk City Clinical Hospital №6',
      location: 'Minsk',
      specialty: 'Multi-specialty',
      beds: 600,
      certifications: ['ISO 9001'],
      description: 'Modern multi-disciplinary hospital with comprehensive diagnostic capabilities.',
    },
    {
      name: 'RSPC Mother and Child',
      location: 'Minsk',
      specialty: 'IVF & Reproductive Medicine',
      beds: 200,
      certifications: ['ISO 9001', 'ESHRE'],
      description: 'Leading fertility center with high success rates in IVF procedures.',
    },
    {
      name: 'Republican Scientific Center for Neurology and Neurosurgery',
      location: 'Minsk',
      specialty: 'Neurology & Neurosurgery',
      beds: 300,
      certifications: ['ISO 9001'],
      description: 'Advanced brain and spine surgery center with modern equipment.',
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
              {t('nav.institutions')}
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              {t('institutions.title')}
            </h1>
            <p className="text-xl text-primary-foreground/80">
              {t('institutions.subtitle')}
            </p>
          </div>
        </div>
      </section>
      
      {/* Institutions Grid */}
      <section className="py-20 bg-background" dir={dir}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {institutions.map((inst, index) => (
              <div key={index} className="p-6 rounded-2xl bg-card border border-border card-hover">
                {/* Header */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <MapPin className="w-4 h-4" />
                    {inst.location}
                  </div>
                  <h3 className="font-bold text-lg text-foreground leading-tight">{inst.name}</h3>
                </div>
                
                {/* Specialty Badge */}
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  {inst.specialty}
                </div>
                
                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {inst.description}
                </p>
                
                {/* Stats */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    {inst.beds} beds
                  </div>
                </div>
                
                {/* Certifications */}
                <div className="flex flex-wrap gap-2">
                  {inst.certifications.map((cert, i) => (
                    <div key={i} className="flex items-center gap-1 px-2 py-1 rounded bg-gold/10 text-xs font-medium text-gold-dark">
                      <Award className="w-3 h-3" />
                      {cert}
                    </div>
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

export default Institutions;
