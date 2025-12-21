import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, Pill, Bone, Baby, Brain, Activity, ArrowRight, X,
  Stethoscope, Eye, Ear, Syringe, Scissors, Wind, Bug,
  Search, RefreshCw, BrainCircuit, Sparkles, Smile, Radiation,
  Globe, Users
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
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
      details: t('services.oncology.details'),
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      hasDetails: true,
    },
    {
      id: 'neurosurgery',
      icon: Brain,
      title: t('services.neurosurgery'),
      description: t('services.neurosurgery.desc'),
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      hasDetails: false,
    },
    {
      id: 'traumatology',
      icon: Bone,
      title: t('services.traumatology'),
      description: t('services.traumatology.desc'),
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
      hasDetails: false,
    },
    {
      id: 'transplant',
      icon: Activity,
      title: t('services.transplant'),
      description: t('services.transplant.desc'),
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10',
      hasDetails: false,
    },
    {
      id: 'surgery',
      icon: Scissors,
      title: t('services.surgery'),
      description: t('services.surgery.desc'),
      color: 'text-slate-500',
      bgColor: 'bg-slate-500/10',
      hasDetails: false,
    },
    {
      id: 'anesthesiology',
      icon: Syringe,
      title: t('services.anesthesiology'),
      description: t('services.anesthesiology.desc'),
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-500/10',
      hasDetails: false,
    },
    {
      id: 'ophthalmology',
      icon: Eye,
      title: t('services.ophthalmology'),
      description: t('services.ophthalmology.desc'),
      color: 'text-sky-500',
      bgColor: 'bg-sky-500/10',
      hasDetails: false,
    },
    {
      id: 'ent',
      icon: Ear,
      title: t('services.ent'),
      description: t('services.ent.desc'),
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/10',
      hasDetails: false,
    },
    {
      id: 'pediatrics',
      icon: Baby,
      title: t('services.pediatrics'),
      description: t('services.pediatrics.desc'),
      color: 'text-pink-500',
      bgColor: 'bg-pink-500/10',
      hasDetails: false,
    },
    {
      id: 'gynecology',
      icon: Users,
      title: t('services.gynecology'),
      description: t('services.gynecology.desc'),
      color: 'text-rose-500',
      bgColor: 'bg-rose-500/10',
      hasDetails: false,
    },
    {
      id: 'urology',
      icon: Stethoscope,
      title: t('services.urology'),
      description: t('services.urology.desc'),
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-500/10',
      hasDetails: false,
    },
    {
      id: 'endocrinology',
      icon: Activity,
      title: t('services.endocrinology'),
      description: t('services.endocrinology.desc'),
      color: 'text-teal-500',
      bgColor: 'bg-teal-500/10',
      hasDetails: false,
    },
    {
      id: 'pulmonology',
      icon: Wind,
      title: t('services.pulmonology'),
      description: t('services.pulmonology.desc'),
      color: 'text-sky-600',
      bgColor: 'bg-sky-600/10',
      hasDetails: false,
    },
    {
      id: 'infectious',
      icon: Bug,
      title: t('services.infectious'),
      description: t('services.infectious.desc'),
      color: 'text-lime-600',
      bgColor: 'bg-lime-600/10',
      hasDetails: false,
    },
    {
      id: 'diagnostics',
      icon: Search,
      title: t('services.diagnostics'),
      description: t('services.diagnostics.desc'),
      color: 'text-violet-500',
      bgColor: 'bg-violet-500/10',
      hasDetails: false,
    },
    {
      id: 'rehabilitation',
      icon: RefreshCw,
      title: t('services.rehabilitation'),
      description: t('services.rehabilitation.desc'),
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      hasDetails: false,
    },
    {
      id: 'psychiatry',
      icon: BrainCircuit,
      title: t('services.psychiatry'),
      description: t('services.psychiatry.desc'),
      color: 'text-fuchsia-500',
      bgColor: 'bg-fuchsia-500/10',
      hasDetails: false,
    },
    {
      id: 'plastic',
      icon: Sparkles,
      title: t('services.plastic'),
      description: t('services.plastic.desc'),
      color: 'text-pink-400',
      bgColor: 'bg-pink-400/10',
      hasDetails: false,
    },
    {
      id: 'reproductive',
      icon: Heart,
      title: t('services.reproductive'),
      description: t('services.reproductive.desc'),
      color: 'text-red-400',
      bgColor: 'bg-red-400/10',
      hasDetails: false,
    },
    {
      id: 'dentistry',
      icon: Smile,
      title: t('services.dentistry'),
      description: t('services.dentistry.desc'),
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-600/10',
      hasDetails: false,
    },
    {
      id: 'radiology',
      icon: Radiation,
      title: t('services.radiology'),
      description: t('services.radiology.desc'),
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
      hasDetails: false,
    },
    {
      id: 'international',
      icon: Globe,
      title: t('services.international'),
      description: t('services.international.desc'),
      color: 'text-blue-600',
      bgColor: 'bg-blue-600/10',
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border card-hover"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className={`w-12 h-12 rounded-xl ${service.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <service.icon className={`w-6 h-6 ${service.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                {service.description}
              </p>
              {service.hasDetails ? (
                <button
                  onClick={() => handleLearnMore(service)}
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all"
                >
                  {t('hero.learn')}
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <Link
                  to="/apply"
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all"
                >
                  {t('hero.cta')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Notes Section */}
        <div className="mt-12 p-6 rounded-2xl bg-muted/50 border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            {t('services.notes.title')}
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              {t('services.notes.1')}
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              {t('services.notes.2')}
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              {t('services.notes.3')}
            </li>
          </ul>
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

      {/* Service Details Dialog */}
      <Dialog open={openDialog !== null} onOpenChange={(open) => !open && setOpenDialog(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto" dir={dir}>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 text-2xl">
              <div className={`w-12 h-12 rounded-xl ${currentService?.bgColor} flex items-center justify-center`}>
                {currentService && <currentService.icon className={`w-6 h-6 ${currentService.color}`} />}
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
