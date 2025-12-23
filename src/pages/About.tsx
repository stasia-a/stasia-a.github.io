import { Target, Heart, Users, Award, Globe, Shield, Eye, Building, MapPin, Phone, Mail, Clock, CheckCircle, Stethoscope, Laptop, UserCheck, Star, Plane, Home, Utensils } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Separator } from '@/components/ui/separator';

// Import equipment images
import petMriBlue from '@/assets/equipment/pet-mri-blue.jpg';
import ctScanner from '@/assets/equipment/ct-scanner.jpg';
import mrtOpen from '@/assets/equipment/mrt-open.jpg';

const About = () => {
  const { t, dir, language } = useLanguage();
  
  const values = [
    { 
      icon: Heart, 
      titleKey: 'about.values.patient.title',
      descKey: 'about.values.patient.desc'
    },
    { 
      icon: Eye, 
      titleKey: 'about.values.transparency.title',
      descKey: 'about.values.transparency.desc'
    },
    { 
      icon: Shield, 
      titleKey: 'about.values.confidentiality.title',
      descKey: 'about.values.confidentiality.desc'
    },
    { 
      icon: Globe, 
      titleKey: 'about.values.standards.title',
      descKey: 'about.values.standards.desc'
    },
  ];

  const strategicGoals = [
    {
      icon: CheckCircle,
      titleKey: 'about.strategy.turnkey.title',
      descKey: 'about.strategy.turnkey.desc'
    },
    {
      icon: Globe,
      titleKey: 'about.strategy.cooperation.title',
      descKey: 'about.strategy.cooperation.desc'
    },
    {
      icon: Star,
      titleKey: 'about.strategy.reputation.title',
      descKey: 'about.strategy.reputation.desc'
    },
  ];

  const qualityPoints = [
    'about.quality.protocols',
    'about.quality.equipment',
    'about.quality.doctors',
    'about.quality.training',
  ];

  const reputationPoints = [
    'about.reputation.oncology',
    'about.reputation.diagnostics',
    'about.reputation.complications',
    'about.reputation.ethics',
  ];

  const comfortPoints = [
    'about.comfort.safety',
    'about.comfort.cities',
    'about.comfort.languages',
  ];

  const medicalCenters = [
    { name: 'about.centers.cardiology.name', profile: 'about.centers.cardiology.profile' },
    { name: 'about.centers.oncology.name', profile: 'about.centers.oncology.profile' },
    { name: 'about.centers.neurosurgery.name', profile: 'about.centers.neurosurgery.profile' },
    { name: 'about.centers.lode.name', profile: 'about.centers.lode.profile' },
    { name: 'about.centers.newmed.name', profile: 'about.centers.newmed.profile' },
    { name: 'about.centers.ophthalmology.name', profile: 'about.centers.ophthalmology.profile' },
    { name: 'about.centers.yunost.name', profile: 'about.centers.yunost.profile' },
  ];

  const tourismPrograms = [
    { icon: Building, key: 'about.tourism.historical' },
    { icon: Globe, key: 'about.tourism.parks' },
    { icon: Home, key: 'about.tourism.spa' },
    { icon: Utensils, key: 'about.tourism.gastro' },
  ];

  const companyServices = [
    'about.services.clinic',
    'about.services.cost',
    'about.services.arrival',
    'about.services.accommodation',
    'about.services.leisure',
    'about.services.transfers',
    'about.services.communication',
  ];
  
  return (
    <Layout>
      {/* Hero with background image */}
      <section className="py-20 lg:py-32 relative overflow-hidden" dir={dir}>
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${petMriBlue})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/85" />
        <div className="absolute inset-0 arabic-pattern opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/20 text-gold text-sm font-medium mb-4">
              {t('nav.about')}
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              {t('about.hero.title')}
            </h1>
            <p className="text-xl text-primary-foreground/80">
              {t('about.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission */}
      <section className="py-20 bg-background" dir={dir}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                {t('about.mission.badge')}
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                {t('about.mission.title')}
              </h2>
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>{t('about.mission.text1')}</p>
              <p>{t('about.mission.text2')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary/50" dir={dir}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{t('about.values.title')}</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="p-6 rounded-2xl bg-card border border-border card-hover text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gold/10 flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{t(value.titleKey)}</h3>
                <p className="text-sm text-muted-foreground">{t(value.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Vision */}
      <section className="py-20 bg-background" dir={dir}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{t('about.strategy.title')}</h2>
            <p className="text-lg text-muted-foreground">{t('about.strategy.subtitle')}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {strategicGoals.map((goal, index) => (
              <div key={index} className="p-8 rounded-2xl bg-card border border-border card-hover">
                <div className="w-12 h-12 mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <goal.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{t(goal.titleKey)}</h3>
                <p className="text-muted-foreground">{t(goal.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-secondary/50" dir={dir}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Company Info */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">{t('about.company.title')}</h2>
              
              <div className="p-6 rounded-2xl bg-card border border-border mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">{t('about.company.legal')}</h3>
                <p className="text-muted-foreground mb-2">{t('about.company.name')}</p>
                <p className="text-sm text-muted-foreground">(LLC "Stanoprint")</p>
                
                <Separator className="my-4" />
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gold mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">{t('about.company.address.label')}</p>
                      <p className="text-sm text-muted-foreground">{t('about.company.address.value')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-gold mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">{t('about.company.phone.label')}</p>
                      <p className="text-sm text-muted-foreground">+375 17 249 80 17</p>
                      <p className="text-sm text-muted-foreground">+375 29 653 29 51</p>
                      <p className="text-sm text-muted-foreground">+420 792 472 363</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-gold mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">E-mail</p>
                      <p className="text-sm text-muted-foreground">charusin@mail.ru</p>
                      <p className="text-sm text-muted-foreground">charusin@tut.by</p>
                      <p className="text-sm text-muted-foreground">nerfreezon@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Role */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">{t('about.role.title')}</h2>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <p className="text-muted-foreground mb-4">{t('about.role.text1')}</p>
                <p className="text-muted-foreground">{t('about.role.text2')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Belarus */}
      <section className="py-20 bg-background" dir={dir}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{t('about.whybelarus.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t('about.whybelarus.subtitle')}</p>
          </div>

          {/* Equipment Images Showcase */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <img 
                src={ctScanner}
                alt="CT Scanner"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-semibold text-lg">CT Scanner GE</p>
                <p className="text-sm text-white/80">Fast and accurate diagnostics</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <img 
                src={mrtOpen}
                alt="Open MRI"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-semibold text-lg">Open MRI</p>
                <p className="text-sm text-white/80">Comfortable examination for all patients</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="p-6 rounded-2xl bg-card border border-border text-center">
              <Stethoscope className="w-10 h-10 text-gold mx-auto mb-3" />
              <p className="font-semibold text-foreground">{t('about.whybelarus.specialists')}</p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border text-center">
              <Laptop className="w-10 h-10 text-gold mx-auto mb-3" />
              <p className="font-semibold text-foreground">{t('about.whybelarus.equipment')}</p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border text-center">
              <Building className="w-10 h-10 text-gold mx-auto mb-3" />
              <p className="font-semibold text-foreground">{t('about.whybelarus.system')}</p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border text-center">
              <CheckCircle className="w-10 h-10 text-gold mx-auto mb-3" />
              <p className="font-semibold text-foreground">{t('about.whybelarus.prices')}</p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 mb-12">
            <h3 className="text-xl font-semibold text-foreground mb-4">{t('about.whybelarus.directions')}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              <p className="text-muted-foreground">• {t('about.whybelarus.dir.oncology')}</p>
              <p className="text-muted-foreground">• {t('about.whybelarus.dir.cardiology')}</p>
              <p className="text-muted-foreground">• {t('about.whybelarus.dir.ophthalmology')}</p>
              <p className="text-muted-foreground">• {t('about.whybelarus.dir.endocrinology')}</p>
              <p className="text-muted-foreground">• {t('about.whybelarus.dir.diagnostics')}</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-gold/10 rounded-2xl p-8 text-center">
            <p className="text-lg text-foreground">{t('about.whybelarus.stats')}</p>
          </div>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-20 bg-secondary/50" dir={dir}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{t('about.advantages.title')}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Quality */}
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Award className="w-6 h-6 text-gold" />
                {t('about.advantages.quality.title')}
              </h3>
              <ul className="space-y-2">
                {qualityPoints.map((point, index) => (
                  <li key={index} className="text-muted-foreground flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald mt-1 flex-shrink-0" />
                    {t(point)}
                  </li>
                ))}
              </ul>
            </div>

            {/* Reputation */}
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Star className="w-6 h-6 text-gold" />
                {t('about.advantages.reputation.title')}
              </h3>
              <ul className="space-y-2">
                {reputationPoints.map((point, index) => (
                  <li key={index} className="text-muted-foreground flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald mt-1 flex-shrink-0" />
                    {t(point)}
                  </li>
                ))}
              </ul>
            </div>

            {/* Comfort */}
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-gold" />
                {t('about.advantages.comfort.title')}
              </h3>
              <ul className="space-y-2">
                {comfortPoints.map((point, index) => (
                  <li key={index} className="text-muted-foreground flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald mt-1 flex-shrink-0" />
                    {t(point)}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-muted-foreground italic">{t('about.advantages.duration')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leading Medical Centers */}
      <section className="py-20 bg-background" dir={dir}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{t('about.centers.title')}</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-card rounded-2xl overflow-hidden border border-border">
              <thead className="bg-primary/10">
                <tr>
                  <th className="px-6 py-4 text-start font-semibold text-foreground">{t('about.centers.table.name')}</th>
                  <th className="px-6 py-4 text-start font-semibold text-foreground">{t('about.centers.table.profile')}</th>
                </tr>
              </thead>
              <tbody>
                {medicalCenters.map((center, index) => (
                  <tr key={index} className="border-t border-border">
                    <td className="px-6 py-4 font-medium text-foreground">{t(center.name)}</td>
                    <td className="px-6 py-4 text-muted-foreground">{t(center.profile)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Tourism Programs */}
      <section className="py-20 bg-secondary/50" dir={dir}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{t('about.tourism.title')}</h2>
            <p className="text-lg text-muted-foreground">{t('about.tourism.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {tourismPrograms.map((program, index) => (
              <div key={index} className="p-6 rounded-2xl bg-card border border-border text-center card-hover">
                <program.icon className="w-10 h-10 text-gold mx-auto mb-3" />
                <p className="text-foreground">{t(program.key)}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground italic">{t('about.tourism.note')}</p>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-background" dir={dir}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{t('about.ourservices.title')}</h2>
            <p className="text-lg text-muted-foreground">{t('about.ourservices.subtitle')}</p>
          </div>

          <div className="max-w-3xl mx-auto bg-card rounded-2xl border border-border p-8">
            <ul className="space-y-3">
              {companyServices.map((service, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                  {t(service)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="py-20 bg-secondary/50" dir={dir}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">{t('about.disclaimer.title')}</h2>
            
            <div className="bg-card rounded-2xl border border-border p-8 space-y-4">
              <p className="text-muted-foreground">{t('about.disclaimer.text1')}</p>
              <p className="text-muted-foreground">{t('about.disclaimer.text2')}</p>
              
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
                <p className="text-foreground font-medium">{t('about.disclaimer.important')}</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>• {t('about.disclaimer.point1')}</li>
                  <li>• {t('about.disclaimer.point2')}</li>
                  <li>• {t('about.disclaimer.point3')}</li>
                  <li>• {t('about.disclaimer.point4')}</li>
                </ul>
              </div>
              
              <p className="text-sm text-muted-foreground italic">{t('about.disclaimer.permits')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-20 bg-background" dir={dir}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{t('about.offices.title')}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Belarus Office */}
            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{t('about.offices.belarus.title')}</h3>
                  <p className="text-sm text-muted-foreground">{t('about.offices.headquarters')}</p>
                </div>
              </div>
              
              <p className="text-muted-foreground">{t('about.company.address.value')}</p>
            </div>

            {/* Oman Office */}
            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{t('about.offices.oman.title')}</h3>
                  <p className="text-sm text-muted-foreground">{t('about.offices.representation')}</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-2">Promotion and Investment Increased LLC</p>
              <p className="text-sm text-muted-foreground mb-2">{t('about.offices.oman.reg')}: 1548836</p>
              <p className="text-sm text-muted-foreground mb-4">{t('about.offices.oman.address')}</p>
              
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">WhatsApp / IMO / Telegram:</span> +46 703 355 011, +420 792 472 363
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">E-mail:</span> nadim.chami@icloud.com, nerfreezon@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;