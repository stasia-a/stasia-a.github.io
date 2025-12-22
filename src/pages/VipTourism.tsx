import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Crown, Shield, Clock, Users, Lock, Home, Utensils, Car, Star, Sparkles, Heart, FileText, AlertTriangle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import VipApplicationForm from '@/components/forms/VipApplicationForm';

const VipTourism = () => {
  const { t, dir } = useLanguage();
  
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-32 gradient-hero relative overflow-hidden" dir={dir}>
        <div className="absolute inset-0 arabic-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/20 text-gold text-sm font-medium mb-4">
              <Crown className="w-4 h-4" />
              {t('vip.hero.badge')}
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              {t('vip.hero.title')}
            </h1>
            <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              {t('vip.hero.description')}
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
      
      {/* Target Audience */}
      <section className="py-20 bg-background" dir={dir}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{t('vip.target.title')}</h2>
              <p className="text-lg text-muted-foreground">{t('vip.target.subtitle')}</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { key: 'quality', icon: Star },
                { key: 'hnwi', icon: Crown },
                { key: 'cultural', icon: Heart },
              ].map((item, index) => (
                <div key={index} className="p-6 rounded-2xl bg-card border border-border card-hover text-center">
                  <div className="w-14 h-14 mb-4 mx-auto rounded-xl bg-gold/10 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-gold" />
                  </div>
                  <p className="text-foreground font-medium">{t(`vip.target.${item.key}`)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Principles */}
      <section className="py-20 bg-secondary/50" dir={dir}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">{t('vip.principles.title')}</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { key: 'coordinator', icon: Users },
                { key: 'priority', icon: Clock },
                { key: 'confidentiality', icon: Lock },
                { key: 'comfort', icon: Home },
                { key: 'cultural', icon: Heart },
                { key: 'security', icon: Shield },
              ].map((item, index) => (
                <div key={index} className="p-6 rounded-2xl bg-card border border-border card-hover">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{t(`vip.principles.${item.key}.title`)}</h3>
                      <p className="text-sm text-muted-foreground">{t(`vip.principles.${item.key}.desc`)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Service Structure */}
      <section className="py-20 bg-background" dir={dir}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">{t('vip.structure.title')}</h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Stage 1 */}
            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-primary-foreground font-bold text-xl">1</div>
                <h3 className="text-xl font-bold text-foreground">{t('vip.structure.stage1.title')}</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {['docs', 'route', 'doctor', 'estimate', 'visa'].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{t(`vip.structure.stage1.${item}`)}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Stage 2 */}
            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-primary-foreground font-bold text-xl">2</div>
                <h3 className="text-xl font-bold text-foreground">{t('vip.structure.stage2.title')}</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-3 mb-6">
                {['diagnostics', 'hospitalization', 'doctor', 'consilium', 'surgery', 'translator'].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{t(`vip.structure.stage2.${item}`)}</span>
                  </div>
                ))}
              </div>
              <div className="p-4 rounded-lg bg-gold/10 border border-gold/20">
                <p className="text-foreground text-sm">{t('vip.structure.stage2.note')}</p>
              </div>
            </div>
            
            {/* Stage 3 */}
            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-primary-foreground font-bold text-xl">3</div>
                <h3 className="text-xl font-bold text-foreground">{t('vip.structure.stage3.title')}</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Car className="w-5 h-5 text-primary" />
                    <span className="font-medium text-foreground">{t('vip.structure.stage3.transfer')}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Home className="w-5 h-5 text-primary" />
                    <span className="font-medium text-foreground">{t('vip.structure.stage3.accommodation.title')}</span>
                  </div>
                  <ul className="space-y-1 ml-7 text-sm text-muted-foreground">
                    <li>{t('vip.structure.stage3.accommodation.hotel')}</li>
                    <li>{t('vip.structure.stage3.accommodation.sanatorium')}</li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Utensils className="w-5 h-5 text-primary" />
                    <span className="font-medium text-foreground">{t('vip.structure.stage3.food.title')}</span>
                  </div>
                  <ul className="space-y-1 ml-7 text-sm text-muted-foreground">
                    <li>{t('vip.structure.stage3.food.menu')}</li>
                    <li>{t('vip.structure.stage3.food.halal')}</li>
                  </ul>
                  <div className="flex items-center gap-2 mt-3">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="font-medium text-foreground">{t('vip.structure.stage3.assistant')}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stage 4 */}
            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-primary-foreground font-bold text-xl">4</div>
                <h3 className="text-xl font-bold text-foreground">{t('vip.structure.stage4.title')}</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {['excursions', 'family', 'spa', 'religious'].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{t(`vip.structure.stage4.${item}`)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* VIP Packages */}
      <section className="py-20 bg-secondary/50" dir={dir}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">{t('vip.packages.title')}</h2>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Silver */}
            <div className="p-8 rounded-2xl bg-card border border-border card-hover relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-300 to-gray-400" />
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                  <Crown className="w-8 h-8 text-gray-500" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{t('vip.packages.silver.title')}</h3>
                <p className="text-sm text-muted-foreground">{t('vip.packages.silver.subtitle')}</p>
              </div>
              <ul className="space-y-3 mb-6">
                {['coordinator', 'priority', 'translation', 'transfer', 'accommodation'].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald flex-shrink-0 mt-1" />
                    <span className="text-sm text-foreground">{t(`vip.packages.silver.${item}`)}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center p-4 rounded-lg bg-secondary/50">
                <p className="text-sm text-muted-foreground mb-1">{t('vip.packages.price')}</p>
                <p className="text-2xl font-bold text-foreground">{t('vip.packages.silver.price')}</p>
              </div>
            </div>
            
            {/* Gold */}
            <div className="p-8 rounded-2xl bg-card border-2 border-gold card-hover relative overflow-hidden transform lg:scale-105">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600" />
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-medium">{t('vip.packages.popular')}</span>
              </div>
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/20 flex items-center justify-center">
                  <Crown className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{t('vip.packages.gold.title')}</h3>
                <p className="text-sm text-muted-foreground">{t('vip.packages.gold.subtitle')}</p>
              </div>
              <ul className="space-y-3 mb-6">
                {['route', 'hospitalization', 'room', 'coordinator', 'accommodation', 'family'].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
                    <span className="text-sm text-foreground">{t(`vip.packages.gold.${item}`)}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center p-4 rounded-lg bg-gold/10">
                <p className="text-sm text-muted-foreground mb-1">{t('vip.packages.price')}</p>
                <p className="text-2xl font-bold text-gold">{t('vip.packages.gold.price')}</p>
              </div>
            </div>
            
            {/* Platinum */}
            <div className="p-8 rounded-2xl bg-card border border-border card-hover relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-purple-600" />
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{t('vip.packages.platinum.title')}</h3>
                <p className="text-sm text-muted-foreground">{t('vip.packages.platinum.subtitle')}</p>
              </div>
              <ul className="space-y-3 mb-6">
                {['curator', 'consultations', 'priority', 'logistics', 'confidentiality', 'cultural', 'extended'].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-500 flex-shrink-0 mt-1" />
                    <span className="text-sm text-foreground">{t(`vip.packages.platinum.${item}`)}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center p-4 rounded-lg bg-purple-50">
                <p className="text-sm text-muted-foreground mb-1">{t('vip.packages.price')}</p>
                <p className="text-2xl font-bold text-purple-600">{t('vip.packages.platinum.price')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* What's NOT included */}
      <section className="py-20 bg-background" dir={dir}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">{t('vip.excluded.title')}</h2>
            
            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="space-y-4">
                {['medical', 'implants', 'emergency'].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{t(`vip.excluded.${item}`)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Payment Order */}
      <section className="py-20 bg-secondary/50" dir={dir}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">{t('vip.payment.title')}</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {['prepayment', 'medical', 'partner', 'documents'].map((item, index) => (
                <div key={index} className="p-6 rounded-2xl bg-card border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-foreground">{t(`vip.payment.${item}`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Legal Note */}
      <section className="py-20 bg-background" dir={dir}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">{t('vip.legal.title')}</h2>
            
            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="grid md:grid-cols-2 gap-4">
                {['notMedical', 'noInfluence', 'noResponsibility', 'organizer'].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{t(`vip.legal.${item}`)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* VIP Application Form */}
      <section className="py-20 gradient-hero relative overflow-hidden" dir={dir} id="vip-form">
        <div className="absolute inset-0 arabic-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/20 text-gold text-sm font-medium mb-4">
                <Crown className="w-4 h-4" />
                {t('vipForm.badge')}
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">{t('vipForm.title')}</h2>
              <p className="text-lg text-primary-foreground/90">{t('vipForm.subtitle')}</p>
            </div>
            
            <div className="p-8 rounded-2xl bg-card border border-border shadow-xl">
              <VipApplicationForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-16 bg-background" dir={dir}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">{t('vip.cta.title')}</h2>
            <p className="text-muted-foreground mb-6">{t('vip.cta.description')}</p>
            <a href="#vip-form">
              <Button variant="gold" size="lg" className="gap-2">
                {t('vipForm.scrollToForm')}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VipTourism;
