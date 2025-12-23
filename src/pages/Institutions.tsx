import { Link } from 'react-router-dom';
import { MapPin, Building2, ArrowRight, Phone, Mail, CheckCircle2, Users } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import cardiologyCenter from '@/assets/institutions/cardiology-center.jpg';
const Institutions = () => {
  const { t, dir } = useLanguage();
  
  const institutions = [
    {
      id: 'cardiology',
      nameKey: 'institutions.cardiology.name',
      type: 'state',
      addressKey: 'institutions.cardiology.address',
      image: cardiologyCenter,
      profileKeys: [
        'institutions.cardiology.profile1',
        'institutions.cardiology.profile2',
        'institutions.cardiology.profile3',
        'institutions.cardiology.profile4',
        'institutions.cardiology.profile5',
      ],
      foreignersKeys: [
        'institutions.cardiology.foreign1',
        'institutions.cardiology.foreign2',
        'institutions.cardiology.foreign3',
        'institutions.cardiology.foreign4',
      ],
    },
    {
      id: 'oncology',
      nameKey: 'institutions.oncology.name',
      type: 'state',
      addressKey: 'institutions.oncology.address',
      profileKeys: [
        'institutions.oncology.profile1',
        'institutions.oncology.profile2',
        'institutions.oncology.profile3',
        'institutions.oncology.profile4',
      ],
      foreignersKeys: [
        'institutions.oncology.foreign1',
        'institutions.oncology.foreign2',
        'institutions.oncology.foreign3',
      ],
    },
    {
      id: 'transplant',
      nameKey: 'institutions.transplant.name',
      type: 'state',
      addressKey: 'institutions.transplant.address',
      profileKeys: [
        'institutions.transplant.profile1',
        'institutions.transplant.profile2',
        'institutions.transplant.profile3',
        'institutions.transplant.profile4',
      ],
      foreignersKeys: [
        'institutions.transplant.foreign1',
        'institutions.transplant.foreign2',
        'institutions.transplant.foreign3',
      ],
    },
    {
      id: 'neuro',
      nameKey: 'institutions.neuro.name',
      type: 'state',
      addressKey: 'institutions.neuro.address',
      profileKeys: [
        'institutions.neuro.profile1',
        'institutions.neuro.profile2',
        'institutions.neuro.profile3',
        'institutions.neuro.profile4',
        'institutions.neuro.profile5',
      ],
      foreignersKeys: [
        'institutions.neuro.foreign1',
        'institutions.neuro.foreign2',
        'institutions.neuro.foreign3',
      ],
    },
    {
      id: 'ortho',
      nameKey: 'institutions.ortho.name',
      type: 'state',
      addressKey: 'institutions.ortho.address',
      profileKeys: [
        'institutions.ortho.profile1',
        'institutions.ortho.profile2',
        'institutions.ortho.profile3',
      ],
      foreignersKeys: [
        'institutions.ortho.foreign1',
        'institutions.ortho.foreign2',
        'institutions.ortho.foreign3',
      ],
    },
    {
      id: 'prosthetic',
      nameKey: 'institutions.prosthetic.name',
      type: 'state',
      addressKey: 'institutions.prosthetic.address',
      profileKeys: [
        'institutions.prosthetic.profile1',
        'institutions.prosthetic.profile2',
      ],
      foreignersKeys: [
        'institutions.prosthetic.foreign1',
        'institutions.prosthetic.foreign2',
      ],
    },
    {
      id: 'bina',
      nameKey: 'institutions.bina.name',
      type: 'private',
      addressKey: 'institutions.bina.address',
      profileKeys: [
        'institutions.bina.profile1',
        'institutions.bina.profile2',
        'institutions.bina.profile3',
      ],
      foreignersKeys: [
        'institutions.bina.foreign1',
        'institutions.bina.foreign2',
        'institutions.bina.foreign3',
      ],
    },
    {
      id: 'mother',
      nameKey: 'institutions.mother.name',
      type: 'state',
      addressKey: 'institutions.mother.address',
      profileKeys: [
        'institutions.mother.profile1',
        'institutions.mother.profile2',
      ],
      foreignersKeys: [
        'institutions.mother.foreign1',
        'institutions.mother.foreign2',
      ],
    },
    {
      id: 'ophthalmology',
      nameKey: 'institutions.ophthalmology.name',
      type: 'private',
      addressKey: 'institutions.ophthalmology.address',
      profileKeys: [
        'institutions.ophthalmology.profile1',
        'institutions.ophthalmology.profile2',
        'institutions.ophthalmology.profile3',
      ],
      foreignersKeys: [
        'institutions.ophthalmology.foreign1',
        'institutions.ophthalmology.foreign2',
        'institutions.ophthalmology.foreign3',
      ],
    },
    {
      id: 'eye',
      nameKey: 'institutions.eye.name',
      type: 'state',
      addressKey: 'institutions.eye.address',
      profileKeys: [
        'institutions.eye.profile1',
        'institutions.eye.profile2',
      ],
      foreignersKeys: [],
    },
    {
      id: 'vip',
      nameKey: 'institutions.vip.name',
      type: 'state',
      addressKey: 'institutions.vip.address',
      profileKeys: [
        'institutions.vip.profile1',
        'institutions.vip.profile2',
        'institutions.vip.profile3',
      ],
      foreignersKeys: [
        'institutions.vip.foreign1',
        'institutions.vip.foreign2',
        'institutions.vip.foreign3',
      ],
    },
    {
      id: 'hospital5',
      nameKey: 'institutions.hospital5.name',
      type: 'state',
      addressKey: 'institutions.hospital5.address',
      profileKeys: [
        'institutions.hospital5.profile1',
        'institutions.hospital5.profile2',
        'institutions.hospital5.profile3',
      ],
      foreignersKeys: [
        'institutions.hospital5.foreign1',
        'institutions.hospital5.foreign2',
        'institutions.hospital5.foreign3',
      ],
    },
    {
      id: 'yunost',
      nameKey: 'institutions.yunost.name',
      type: 'state',
      addressKey: 'institutions.yunost.address',
      profileKeys: [
        'institutions.yunost.profile1',
        'institutions.yunost.profile2',
        'institutions.yunost.profile3',
      ],
      foreignersKeys: [
        'institutions.yunost.foreign1',
        'institutions.yunost.foreign2',
        'institutions.yunost.foreign3',
      ],
    },
  ];

  const categories = [
    { id: 'cardiology', titleKey: 'institutions.category.cardiology', institutions: ['cardiology'] },
    { id: 'oncology', titleKey: 'institutions.category.oncology', institutions: ['oncology'] },
    { id: 'transplant', titleKey: 'institutions.category.transplant', institutions: ['transplant'] },
    { id: 'neuro', titleKey: 'institutions.category.neuro', institutions: ['neuro'] },
    { id: 'ortho', titleKey: 'institutions.category.ortho', institutions: ['ortho', 'prosthetic'] },
    { id: 'ivf', titleKey: 'institutions.category.ivf', institutions: ['bina', 'mother'] },
    { id: 'eye', titleKey: 'institutions.category.eye', institutions: ['ophthalmology', 'eye'] },
    { id: 'vip', titleKey: 'institutions.category.vip', institutions: ['vip'] },
    { id: 'multi', titleKey: 'institutions.category.multi', institutions: ['hospital5'] },
    { id: 'rehab', titleKey: 'institutions.category.rehab', institutions: ['yunost'] },
  ];
  
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-32 gradient-hero relative overflow-hidden" dir={dir}>
        <div className="absolute inset-0 arabic-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/20 text-gold text-sm font-medium mb-4">
              {t('institutions.hero.badge')}
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              {t('institutions.hero.title')}
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-4">
              {t('institutions.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>
      
      {/* Institutions by Category */}
      <section className="py-20 bg-background" dir={dir}>
        <div className="container mx-auto px-4">
          {categories.map((category, catIndex) => (
            <div key={category.id} className={catIndex > 0 ? 'mt-16' : ''}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-primary rounded-full" />
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                  {catIndex + 1}. {t(category.titleKey)}
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {category.institutions.map((instId) => {
                  const inst = institutions.find(i => i.id === instId);
                  if (!inst) return null;
                  
                  return (
                    <div key={inst.id} className="p-6 rounded-2xl bg-card border border-border card-hover">
                      {/* Image */}
                      {inst.image && (
                        <div className="mb-4 -mx-6 -mt-6">
                          <img 
                            src={inst.image} 
                            alt={t(inst.nameKey)} 
                            className="w-full h-48 object-cover rounded-t-2xl"
                          />
                        </div>
                      )}
                      
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            inst.type === 'state' 
                              ? 'bg-primary/10 text-primary' 
                              : 'bg-gold/10 text-gold-dark'
                          }`}>
                            {t(inst.type === 'state' ? 'institutions.type.state' : 'institutions.type.private')}
                          </span>
                        </div>
                        <h3 className="font-bold text-lg text-foreground leading-tight mb-2">
                          {t(inst.nameKey)}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4 flex-shrink-0" />
                          <span>{t(inst.addressKey)}</span>
                        </div>
                      </div>
                      
                      {/* Profile */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-foreground mb-2">
                          {t('institutions.profile.title')}
                        </h4>
                        <ul className="space-y-1">
                          {inst.profileKeys.map((key, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                              <span>{t(key)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* For Foreigners */}
                      {inst.foreignersKeys.length > 0 && (
                        <div className="pt-4 border-t border-border">
                          <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                            <Users className="w-4 h-4 text-gold" />
                            {t('institutions.foreigners.title')}
                          </h4>
                          <ul className="space-y-1">
                            {inst.foreignersKeys.map((key, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="text-gold">•</span>
                                <span>{t(key)}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
          
          {/* Summary */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-gold/5 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              {t('institutions.summary.title')}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-background">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                <span className="text-sm text-foreground">{t('institutions.summary.point1')}</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-background">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                <span className="text-sm text-foreground">{t('institutions.summary.point2')}</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-background">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                <span className="text-sm text-foreground">{t('institutions.summary.point3')}</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-background">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                <span className="text-sm text-foreground">{t('institutions.summary.point4')}</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-background">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                <span className="text-sm text-foreground">{t('institutions.summary.point5')}</span>
              </div>
            </div>
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
