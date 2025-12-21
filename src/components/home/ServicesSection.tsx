import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Pill, Bone, Baby, Brain, Activity, ArrowRight, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog';

const ServicesSection = () => {
  const { t, dir } = useLanguage();
  const [openDialog, setOpenDialog] = useState<string | null>(null);
  
  const services = [
    {
      id: 'cardiology',
      icon: Heart,
      title: t('services.cardiology'),
      description: t('services.cardiology.desc'),
      details: t('services.cardiology.details'),
      color: 'text-red-500',
      bgColor: 'bg-red-500/10',
      hasDetails: true,
    },
    {
      id: 'oncology',
      icon: Pill,
      title: t('services.oncology'),
      description: t('services.oncology.desc'),
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      hasDetails: false,
    },
    {
      id: 'orthopedics',
      icon: Bone,
      title: t('services.orthopedics'),
      description: t('services.orthopedics.desc'),
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
      hasDetails: false,
    },
    {
      id: 'ivf',
      icon: Baby,
      title: t('services.ivf'),
      description: t('services.ivf.desc'),
      color: 'text-pink-500',
      bgColor: 'bg-pink-500/10',
      hasDetails: false,
    },
    {
      id: 'neurology',
      icon: Brain,
      title: t('services.neurology'),
      description: t('services.neurology.desc'),
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      hasDetails: false,
    },
    {
      id: 'transplant',
      icon: Activity,
      title: t('services.transplant'),
      description: t('services.transplant.desc'),
      color: 'text-emerald',
      bgColor: 'bg-emerald/10',
      hasDetails: false,
    },
  ];

  const handleLearnMore = (service: typeof services[0]) => {
    if (service.hasDetails) {
      setOpenDialog(service.id);
    }
  };

  const currentService = services.find(s => s.id === openDialog);
  
  return (
    <section className="py-20 lg:py-32 bg-background" dir={dir}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {t('services.title')}
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('services.subtitle')}
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-xl ${service.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className={`w-7 h-7 ${service.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>
              {service.hasDetails ? (
                <button
                  onClick={() => handleLearnMore(service)}
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  {t('hero.learn')}
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <Link
                  to="/tourism"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  {t('hero.learn')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/tourism">
            <Button variant="gold" size="lg" className="gap-2">
              {t('hero.learn')}
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Cardiology Details Dialog */}
      <Dialog open={openDialog === 'cardiology'} onOpenChange={(open) => !open && setOpenDialog(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto" dir={dir}>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 text-2xl">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                <Heart className="w-6 h-6 text-red-500" />
              </div>
              {currentService?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4 text-muted-foreground leading-relaxed whitespace-pre-line">
            {currentService?.details}
          </div>
          <div className="mt-6">
            <Link to="/apply">
              <Button variant="gold" className="w-full gap-2">
                {t('hero.cta')}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ServicesSection;
