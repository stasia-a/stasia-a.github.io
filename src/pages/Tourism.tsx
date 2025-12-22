import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Heart, Activity, Eye, Baby, Bone, TrendingUp, DollarSign, Shield, Clock, Building2 } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Tourism = () => {
  const { t, dir } = useLanguage();
  
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-32 gradient-hero relative overflow-hidden" dir={dir}>
        <div className="absolute inset-0 arabic-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/20 text-gold text-sm font-medium mb-4">
              {t('tourism.hero.badge')}
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              {t('tourism.hero.title')}
            </h1>
            <p className="text-lg text-primary-foreground/90 mb-6 leading-relaxed">
              {t('tourism.hero.intro')}
            </p>
            <p className="text-base text-primary-foreground/80 mb-8 leading-relaxed">
              {t('tourism.hero.gap')}
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
      
      {/* ARABIA.BY Project */}
      <section className="py-20 bg-background" dir={dir}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{t('tourism.project.title')}</h2>
              <p className="text-lg text-muted-foreground">{t('tourism.project.desc')}</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { key: 'point1', icon: Heart },
                { key: 'point2', icon: Shield },
                { key: 'point3', icon: Activity },
              ].map((item, index) => (
                <div key={index} className="p-6 rounded-2xl bg-card border border-border card-hover text-center">
                  <div className="w-14 h-14 mb-4 mx-auto rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <p className="text-foreground font-medium">{t(`tourism.project.${item.key}`)}</p>
                </div>
              ))}
            </div>
            
            <div className="p-6 rounded-2xl bg-gold/10 border border-gold/20 text-center">
              <p className="text-foreground font-medium">{t('tourism.project.value')}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* State of Medical Tourism */}
      <section className="py-20 bg-secondary/50" dir={dir}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-center">{t('tourism.state.title')}</h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">{t('tourism.state.desc')}</p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-emerald" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">{t('tourism.state.flow')}</p>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Activity className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">{t('tourism.state.recovery')}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8 rounded-2xl bg-card border border-border mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">{t('tourism.state.factors.title')}</h3>
              <div className="space-y-3">
                {['factor1', 'factor2', 'factor3'].map((factor, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{t(`tourism.state.${factor}`)}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
              <p className="text-foreground font-medium text-center">{t('tourism.state.feature')}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Medical Directions */}
      <section className="py-20 bg-background" dir={dir}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">{t('tourism.directions.title')}</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Oncology */}
            <div className="p-8 rounded-2xl bg-card border border-border card-hover">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-rose-500/10 flex items-center justify-center">
                  <Activity className="w-7 h-7 text-rose-500" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{t('tourism.directions.oncology.title')}</h3>
              </div>
              <p className="text-muted-foreground mb-4">{t('tourism.directions.oncology.desc')}</p>
              <ul className="space-y-2 mb-4">
                {['point1', 'point2', 'point3'].map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald flex-shrink-0 mt-1" />
                    <span className="text-foreground text-sm">{t(`tourism.directions.oncology.${point}`)}</span>
                  </li>
                ))}
              </ul>
              <div className="p-4 rounded-lg bg-secondary/50">
                <p className="text-sm font-medium text-foreground mb-2">{t('tourism.directions.oncology.centers')}</p>
                <p className="text-sm text-muted-foreground">{t('tourism.directions.oncology.center1')}</p>
                <p className="text-sm text-muted-foreground">{t('tourism.directions.oncology.center2')}</p>
              </div>
            </div>
            
            {/* Cardiology */}
            <div className="p-8 rounded-2xl bg-card border border-border card-hover">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-red-500/10 flex items-center justify-center">
                  <Heart className="w-7 h-7 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{t('tourism.directions.cardiology.title')}</h3>
              </div>
              <ul className="space-y-2 mb-4">
                {['point1', 'point2', 'point3'].map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald flex-shrink-0 mt-1" />
                    <span className="text-foreground text-sm">{t(`tourism.directions.cardiology.${point}`)}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gold font-medium mb-4">{t('tourism.directions.cardiology.price')}</p>
              <div className="p-4 rounded-lg bg-secondary/50">
                <p className="text-sm text-muted-foreground">{t('tourism.directions.cardiology.center')}</p>
              </div>
            </div>
            
            {/* Orthopedics */}
            <div className="p-8 rounded-2xl bg-card border border-border card-hover">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <Bone className="w-7 h-7 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{t('tourism.directions.orthopedics.title')}</h3>
              </div>
              <ul className="space-y-2 mb-4">
                {['point1', 'point2', 'point3'].map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald flex-shrink-0 mt-1" />
                    <span className="text-foreground text-sm">{t(`tourism.directions.orthopedics.${point}`)}</span>
                  </li>
                ))}
              </ul>
              <div className="p-4 rounded-lg bg-secondary/50">
                <p className="text-sm font-medium text-foreground mb-2">{t('tourism.directions.orthopedics.centers')}</p>
                <p className="text-sm text-muted-foreground">{t('tourism.directions.orthopedics.center1')}</p>
                <p className="text-sm text-muted-foreground">{t('tourism.directions.orthopedics.center2')}</p>
              </div>
            </div>
            
            {/* IVF */}
            <div className="p-8 rounded-2xl bg-card border border-border card-hover">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-pink-500/10 flex items-center justify-center">
                  <Baby className="w-7 h-7 text-pink-500" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{t('tourism.directions.ivf.title')}</h3>
              </div>
              <ul className="space-y-2 mb-4">
                {['point1', 'point2', 'point3'].map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald flex-shrink-0 mt-1" />
                    <span className="text-foreground text-sm">{t(`tourism.directions.ivf.${point}`)}</span>
                  </li>
                ))}
              </ul>
              <div className="p-4 rounded-lg bg-secondary/50">
                <p className="text-sm font-medium text-foreground mb-2">{t('tourism.directions.ivf.centers')}</p>
                <p className="text-sm text-muted-foreground">{t('tourism.directions.ivf.center1')}</p>
                <p className="text-sm text-muted-foreground">{t('tourism.directions.ivf.center2')}</p>
              </div>
            </div>
            
            {/* Ophthalmology */}
            <div className="p-8 rounded-2xl bg-card border border-border card-hover lg:col-span-2 max-w-xl mx-auto w-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                  <Eye className="w-7 h-7 text-cyan-500" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{t('tourism.directions.ophthalmology.title')}</h3>
              </div>
              <ul className="space-y-2 mb-4">
                {['point1', 'point2', 'point3'].map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald flex-shrink-0 mt-1" />
                    <span className="text-foreground text-sm">{t(`tourism.directions.ophthalmology.${point}`)}</span>
                  </li>
                ))}
              </ul>
              <div className="p-4 rounded-lg bg-secondary/50">
                <p className="text-sm text-muted-foreground">{t('tourism.directions.ophthalmology.center')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Patients Choose Belarus */}
      <section className="py-20 bg-secondary/50" dir={dir}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">{t('tourism.why.title')}</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Prices */}
            <div className="p-6 rounded-2xl bg-card border border-border card-hover">
              <div className="w-12 h-12 mb-4 rounded-xl bg-emerald/10 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-emerald" />
              </div>
              <h3 className="font-bold text-foreground mb-4">{t('tourism.why.prices.title')}</h3>
              <ul className="space-y-2">
                {['point1', 'point2', 'point3'].map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{t(`tourism.why.prices.${point}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Quality */}
            <div className="p-6 rounded-2xl bg-card border border-border card-hover">
              <div className="w-12 h-12 mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                <Activity className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-4">{t('tourism.why.quality.title')}</h3>
              <ul className="space-y-2">
                {['point1', 'point2', 'point3', 'point4'].map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{t(`tourism.why.quality.${point}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Safety */}
            <div className="p-6 rounded-2xl bg-card border border-border card-hover">
              <div className="w-12 h-12 mb-4 rounded-xl bg-gold/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-bold text-foreground mb-4">{t('tourism.why.safety.title')}</h3>
              <ul className="space-y-2">
                {['point1', 'point2', 'point3', 'point4'].map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{t(`tourism.why.safety.${point}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Convenience */}
            <div className="p-6 rounded-2xl bg-card border border-border card-hover">
              <div className="w-12 h-12 mb-4 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="font-bold text-foreground mb-4">{t('tourism.why.convenience.title')}</h3>
              <ul className="space-y-2">
                {['point1', 'point2', 'point3'].map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{t(`tourism.why.convenience.${point}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Development Prospects */}
      <section className="py-20 bg-background" dir={dir}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-center">{t('tourism.prospects.title')}</h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">{t('tourism.prospects.desc')}</p>
            
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="text-xl font-bold text-foreground mb-6">{t('tourism.prospects.factors.title')}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {['factor1', 'factor2', 'factor3', 'factor4'].map((factor, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-foreground">{t(`tourism.prospects.${factor}`)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Conclusion */}
      <section className="py-20 bg-secondary/50" dir={dir}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-center">{t('tourism.conclusion.title')}</h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">{t('tourism.conclusion.text1')}</p>
            
            <div className="p-8 rounded-2xl bg-card border border-border mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">{t('tourism.conclusion.project')}</h3>
              <div className="space-y-3">
                {['point1', 'point2', 'point3'].map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{t(`tourism.conclusion.${point}`)}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-6 rounded-2xl bg-gold/10 border border-gold/20 text-center">
              <p className="text-lg font-bold text-foreground">{t('tourism.conclusion.final')}</p>
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
              {t('tourism.project.title')}
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              {t('tourism.conclusion.final')}
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
