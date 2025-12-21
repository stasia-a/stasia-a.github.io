import { Target, Heart, Users, Award, Clock, Globe } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t, dir } = useLanguage();
  
  const values = [
    { icon: Heart, title: 'Patient-Centered Care', desc: 'Your health and comfort are our top priorities' },
    { icon: Award, title: 'Excellence', desc: 'We partner only with the best medical institutions' },
    { icon: Users, title: 'Personal Approach', desc: 'Individual treatment plans for every patient' },
    { icon: Globe, title: 'International Standards', desc: 'ISO and JCI certified partner hospitals' },
  ];
  
  const team = [
    { name: 'Dr. Ahmed Hassan', role: 'Medical Director', exp: '25+' },
    { name: 'Maria Petrova', role: 'Patient Coordinator', exp: '15+' },
    { name: 'Khalid Al-Rashid', role: 'Arabic Liaison', exp: '10+' },
    { name: 'Dr. Elena Kowalski', role: 'Chief Medical Advisor', exp: '20+' },
  ];
  
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-32 gradient-hero relative overflow-hidden" dir={dir}>
        <div className="absolute inset-0 arabic-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/20 text-gold text-sm font-medium mb-4">
              {t('nav.about')}
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl text-primary-foreground/80">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission */}
      <section className="py-20 bg-background" dir={dir}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                {t('about.mission')}
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                {t('about.mission')}
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {t('about.mission.text')}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Since 2015, we have been helping patients from Libya, Iraq, Lebanon, UAE, and other Arab countries 
                access world-class medical care in Belarus. Our team of dedicated professionals ensures a seamless 
                experience from the first consultation to post-treatment care.
              </p>
              
              <div className="mt-8 flex gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold">9+</div>
                  <div className="text-sm text-muted-foreground">{t('about.experience')}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold">15,000+</div>
                  <div className="text-sm text-muted-foreground">{t('stats.patients')}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold">98%</div>
                  <div className="text-sm text-muted-foreground">{t('stats.satisfaction')}</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-gold/20 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gold flex items-center justify-center">
                  <Target className="w-16 h-16 text-primary" />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 p-6 rounded-2xl bg-card shadow-lg">
                <Clock className="w-8 h-8 text-emerald mb-2" />
                <p className="font-semibold text-foreground">24/7 Support</p>
                <p className="text-sm text-muted-foreground">Always available</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-20 bg-secondary/50" dir={dir}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground">What drives us every day</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="p-6 rounded-2xl bg-card border border-border card-hover text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gold/10 flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="py-20 bg-background" dir={dir}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{t('about.team')}</h2>
            <p className="text-lg text-muted-foreground">{t('about.team.text')}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="p-6 rounded-2xl bg-card border border-border card-hover text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                  <span className="text-2xl font-bold text-gold">{member.name.charAt(0)}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{member.role}</p>
                <p className="text-xs text-gold font-medium">{member.exp} years experience</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
