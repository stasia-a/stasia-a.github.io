import { Link } from 'react-router-dom';
import { Award, Clock, GraduationCap, Building2, ArrowRight, MapPin } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import ostrovskyPhoto from '@/assets/doctors/ostrovsky.jpg';
import shketPhoto from '@/assets/doctors/shket.jpg';
import karanikPhoto from '@/assets/doctors/karanik.jpg';
import gubarPhoto from '@/assets/doctors/gubar.jpg';
import talabaevPhoto from '@/assets/doctors/talabaev.jpg';
import aleinikovaPhoto from '@/assets/doctors/aleinikova.jpg';
import sidorovichPhoto from '@/assets/doctors/sidorovich.jpg';
import vasilevichPhoto from '@/assets/doctors/vasilevich.jpg';
import burkoPhoto from '@/assets/doctors/burko.jpg';
import geynoPhoto from '@/assets/doctors/geyno.jpg';
import volkovPhoto from '@/assets/doctors/volkov.jpg';
import olikhverPhoto from '@/assets/doctors/olikhver.jpg';

const Doctors = () => {
  const { t, dir } = useLanguage();
  
  // Clinics grouped by department
  const clinicGroups = [
    {
      clinicKey: 'cardiology',
      doctors: [
        {
          nameKey: 'doctors.ostrovsky.name',
          degreeKey: 'doctors.ostrovsky.degree',
          specialtyKey: 'doctors.ostrovsky.specialty',
          experienceKey: 'doctors.ostrovsky.experience',
          clinicKey: 'doctors.ostrovsky.clinic',
          photo: ostrovskyPhoto,
        },
        {
          nameKey: 'doctors.shket.name',
          degreeKey: 'doctors.shket.degree',
          specialtyKey: 'doctors.shket.specialty',
          experienceKey: 'doctors.shket.experience',
          clinicKey: 'doctors.shket.clinic',
          photo: shketPhoto,
        },
        {
          nameKey: 'doctors.gubar.name',
          degreeKey: 'doctors.gubar.degree',
          specialtyKey: 'doctors.gubar.specialty',
          experienceKey: 'doctors.gubar.experience',
          clinicKey: 'doctors.gubar.clinic',
          photo: gubarPhoto,
        },
        {
          nameKey: 'doctors.dovnar.name',
          degreeKey: 'doctors.dovnar.degree',
          specialtyKey: 'doctors.dovnar.specialty',
          experienceKey: 'doctors.dovnar.experience',
          clinicKey: 'doctors.dovnar.clinic',
        },
      ],
    },
    {
      clinicKey: 'oncology',
      doctors: [
        {
          nameKey: 'doctors.karanik.name',
          degreeKey: 'doctors.karanik.degree',
          specialtyKey: 'doctors.karanik.specialty',
          experienceKey: 'doctors.karanik.experience',
          clinicKey: 'doctors.karanik.clinic',
          photo: karanikPhoto,
        },
        {
          nameKey: 'doctors.gizemova.name',
          degreeKey: 'doctors.gizemova.degree',
          specialtyKey: 'doctors.gizemova.specialty',
          experienceKey: 'doctors.gizemova.experience',
          clinicKey: 'doctors.gizemova.clinic',
        },
        {
          nameKey: 'doctors.aleinikova.name',
          degreeKey: 'doctors.aleinikova.degree',
          specialtyKey: 'doctors.aleinikova.specialty',
          experienceKey: 'doctors.aleinikova.experience',
          clinicKey: 'doctors.aleinikova.clinic',
          photo: aleinikovaPhoto,
        },
      ],
    },
    {
      clinicKey: 'neurosurgery',
      doctors: [
        {
          nameKey: 'doctors.sidorovich.name',
          degreeKey: 'doctors.sidorovich.degree',
          specialtyKey: 'doctors.sidorovich.specialty',
          experienceKey: 'doctors.sidorovich.experience',
          clinicKey: 'doctors.sidorovich.clinic',
          photo: sidorovichPhoto,
        },
        {
          nameKey: 'doctors.talabaev.name',
          degreeKey: 'doctors.talabaev.degree',
          specialtyKey: 'doctors.talabaev.specialty',
          experienceKey: 'doctors.talabaev.experience',
          clinicKey: 'doctors.talabaev.clinic',
          photo: talabaevPhoto,
        },
        {
          nameKey: 'doctors.vasilevich.name',
          degreeKey: 'doctors.vasilevich.degree',
          specialtyKey: 'doctors.vasilevich.specialty',
          experienceKey: 'doctors.vasilevich.experience',
          clinicKey: 'doctors.vasilevich.clinic',
          photo: vasilevichPhoto,
        },
        {
          nameKey: 'doctors.bunyak.name',
          degreeKey: 'doctors.bunyak.degree',
          specialtyKey: 'doctors.bunyak.specialty',
          experienceKey: 'doctors.bunyak.experience',
          clinicKey: 'doctors.bunyak.clinic',
        },
      ],
    },
    {
      clinicKey: 'vip',
      doctors: [
        {
          nameKey: 'doctors.burko.name',
          degreeKey: 'doctors.burko.degree',
          specialtyKey: 'doctors.burko.specialty',
          experienceKey: 'doctors.burko.experience',
          clinicKey: 'doctors.burko.clinic',
          photo: burkoPhoto,
        },
        {
          nameKey: 'doctors.geyno.name',
          degreeKey: 'doctors.geyno.degree',
          specialtyKey: 'doctors.geyno.specialty',
          experienceKey: 'doctors.geyno.experience',
          clinicKey: 'doctors.geyno.clinic',
          photo: geynoPhoto,
        },
        {
          nameKey: 'doctors.olikhver.name',
          degreeKey: 'doctors.olikhver.degree',
          specialtyKey: 'doctors.olikhver.specialty',
          experienceKey: 'doctors.olikhver.experience',
          clinicKey: 'doctors.olikhver.clinic',
          photo: olikhverPhoto,
        },
        {
          nameKey: 'doctors.glybovskaya.name',
          degreeKey: 'doctors.glybovskaya.degree',
          specialtyKey: 'doctors.glybovskaya.specialty',
          experienceKey: 'doctors.glybovskaya.experience',
          clinicKey: 'doctors.glybovskaya.clinic',
        },
      ],
    },
    {
      clinicKey: 'orthopedics',
      doctors: [
        {
          nameKey: 'doctors.volkov.name',
          degreeKey: 'doctors.volkov.degree',
          specialtyKey: 'doctors.volkov.specialty',
          experienceKey: 'doctors.volkov.experience',
          clinicKey: 'doctors.volkov.clinic',
          photo: volkovPhoto,
        },
      ],
    },
    {
      clinicKey: 'reproductive',
      doctors: [
        {
          nameKey: 'doctors.kuznetsova.name',
          degreeKey: 'doctors.kuznetsova.degree',
          specialtyKey: 'doctors.kuznetsova.specialty',
          experienceKey: 'doctors.kuznetsova.experience',
          clinicKey: 'doctors.kuznetsova.clinic',
        },
      ],
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
      
      {/* Doctors by Clinic */}
      <section className="py-20 bg-background" dir={dir}>
        <div className="container mx-auto px-4">
          {clinicGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="mb-16 last:mb-0">
              {/* Clinic Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">
                    {t(`doctors.clinic.${group.clinicKey}.name`)}
                  </h2>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {t(`doctors.clinic.${group.clinicKey}.address`)}
                  </p>
                </div>
              </div>
              
              {/* Doctors Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {group.doctors.map((doctor, index) => (
                  <div key={index} className="p-6 rounded-2xl bg-card border border-border card-hover">
                    {/* Avatar */}
                    {doctor.photo ? (
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-gold">
                        <img src={doctor.photo} alt={t(doctor.nameKey)} className="w-full h-full object-cover" />
                      </div>
                    ) : (
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                        <span className="text-2xl font-bold text-gold">
                          {t(doctor.nameKey).split(' ').slice(0, 2).map(n => n[0]).join('')}
                        </span>
                      </div>
                    )}
                    
                    {/* Name & Degree */}
                    <h3 className="font-bold text-lg text-foreground text-center mb-1">
                      {t(doctor.nameKey)}
                    </h3>
                    <div className="flex items-center justify-center gap-1 mb-2">
                      <GraduationCap className="w-4 h-4 text-gold" />
                      <p className="text-xs text-muted-foreground">{t(doctor.degreeKey)}</p>
                    </div>
                    
                    {/* Specialty */}
                    <p className="text-sm text-primary font-medium text-center mb-3">
                      {t(doctor.specialtyKey)}
                    </p>
                    
                    {/* Experience */}
                    <div className="p-3 rounded-lg bg-secondary/50 mb-3">
                      <div className="flex items-center justify-center gap-2 text-gold">
                        <Clock className="w-4 h-4" />
                        <span className="font-bold text-sm">{t(doctor.experienceKey)}</span>
                      </div>
                      <p className="text-xs text-muted-foreground text-center">{t('doctors.experience')}</p>
                    </div>
                    
                    {/* Clinic */}
                    <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                      <Building2 className="w-3 h-3" />
                      <span>{t(doctor.clinicKey)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
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
