import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Info } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Prices = () => {
  const { t, dir } = useLanguage();
  
  const packages = [
    {
      name: 'Diagnostic Package',
      price: '$500',
      priceNote: 'Starting from',
      description: 'Complete medical examination',
      features: [
        'Full blood panel',
        'Ultrasound examinations',
        'CT/MRI scans',
        'Specialist consultations',
        'Medical report in Arabic',
        'Treatment recommendations',
      ],
      popular: false,
    },
    {
      name: 'Cardiology Package',
      price: '$3,500',
      priceNote: 'Starting from',
      description: 'Heart diagnostics and treatment',
      features: [
        'ECG & Echo',
        'Coronary angiography',
        'Cardiac consultations',
        'Medication plan',
        'Hospital stay (3 days)',
        'Follow-up consultation',
      ],
      popular: true,
    },
    {
      name: 'Orthopedics Package',
      price: '$8,000',
      priceNote: 'Starting from',
      description: 'Joint replacement surgery',
      features: [
        'Pre-operative tests',
        'Hip/Knee replacement',
        'Implant (premium quality)',
        'Hospital stay (7 days)',
        'Rehabilitation program',
        'Post-op follow-up',
      ],
      popular: false,
    },
    {
      name: 'Oncology Package',
      price: '$5,000',
      priceNote: 'Starting from',
      description: 'Cancer diagnosis and treatment',
      features: [
        'PET-CT scan',
        'Biopsy & analysis',
        'Tumor board review',
        'Treatment plan',
        'Chemotherapy/Radiation',
        'Ongoing monitoring',
      ],
      popular: false,
    },
    {
      name: 'IVF Package',
      price: '$4,500',
      priceNote: 'Full cycle',
      description: 'In-vitro fertilization',
      features: [
        'Initial consultation',
        'Hormone testing',
        'Egg retrieval',
        'Embryo transfer',
        'Medications included',
        'Pregnancy test',
      ],
      popular: true,
    },
    {
      name: 'VIP Check-up',
      price: '$2,000',
      priceNote: 'Complete package',
      description: 'Executive health screening',
      features: [
        'Full body MRI',
        'All blood tests',
        'Cardio screening',
        'Cancer markers',
        'Personal coordinator',
        'Luxury accommodation',
      ],
      popular: false,
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
              {t('nav.prices')}
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              {t('prices.title')}
            </h1>
            <p className="text-xl text-primary-foreground/80">
              {t('prices.subtitle')}
            </p>
          </div>
        </div>
      </section>
      
      {/* Prices Grid */}
      <section className="py-20 bg-background" dir={dir}>
        <div className="container mx-auto px-4">
          {/* Note */}
          <div className="max-w-3xl mx-auto mb-12 p-4 rounded-xl bg-gold/10 border border-gold/20 flex items-start gap-3">
            <Info className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
            <p className="text-sm text-foreground">
              All prices are indicative and may vary based on individual medical needs. 
              Final pricing will be provided after reviewing your medical documents. 
              All packages include Arabic-speaking coordination.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className={`relative p-6 rounded-2xl border card-hover ${
                  pkg.popular 
                    ? 'bg-gradient-to-br from-primary to-primary-dark border-gold text-primary-foreground' 
                    : 'bg-card border-border'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gold text-primary text-sm font-semibold">
                    Popular
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className={`font-bold text-xl mb-2 ${pkg.popular ? 'text-primary-foreground' : 'text-foreground'}`}>
                    {pkg.name}
                  </h3>
                  <p className={`text-sm mb-4 ${pkg.popular ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                    {pkg.description}
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className={`text-4xl font-bold ${pkg.popular ? 'text-gold' : 'text-primary'}`}>
                      {pkg.price}
                    </span>
                  </div>
                  <p className={`text-xs mt-1 ${pkg.popular ? 'text-primary-foreground/60' : 'text-muted-foreground'}`}>
                    {pkg.priceNote}
                  </p>
                </div>
                
                <div className="space-y-3 mb-6">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className={`w-4 h-4 flex-shrink-0 ${pkg.popular ? 'text-gold' : 'text-emerald'}`} />
                      <span className={`text-sm ${pkg.popular ? 'text-primary-foreground/80' : 'text-foreground'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                
                <Link to="/apply">
                  <Button 
                    variant={pkg.popular ? 'hero' : 'gold'} 
                    className="w-full"
                  >
                    {t('nav.apply')}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Comparison */}
      <section className="py-20 bg-secondary/50" dir={dir}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">Price Comparison</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-card rounded-xl overflow-hidden">
                <thead className="bg-primary text-primary-foreground">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Procedure</th>
                    <th className="px-6 py-4 text-center font-semibold">Belarus</th>
                    <th className="px-6 py-4 text-center font-semibold">Germany</th>
                    <th className="px-6 py-4 text-center font-semibold">Savings</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-6 py-4 font-medium text-foreground">Hip Replacement</td>
                    <td className="px-6 py-4 text-center text-gold font-bold">$8,000</td>
                    <td className="px-6 py-4 text-center text-muted-foreground">$25,000</td>
                    <td className="px-6 py-4 text-center text-emerald font-bold">68%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-foreground">Heart Bypass</td>
                    <td className="px-6 py-4 text-center text-gold font-bold">$15,000</td>
                    <td className="px-6 py-4 text-center text-muted-foreground">$45,000</td>
                    <td className="px-6 py-4 text-center text-emerald font-bold">67%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-foreground">IVF Cycle</td>
                    <td className="px-6 py-4 text-center text-gold font-bold">$4,500</td>
                    <td className="px-6 py-4 text-center text-muted-foreground">$12,000</td>
                    <td className="px-6 py-4 text-center text-emerald font-bold">63%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-foreground">Spine Surgery</td>
                    <td className="px-6 py-4 text-center text-gold font-bold">$12,000</td>
                    <td className="px-6 py-4 text-center text-muted-foreground">$35,000</td>
                    <td className="px-6 py-4 text-center text-emerald font-bold">66%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Prices;
