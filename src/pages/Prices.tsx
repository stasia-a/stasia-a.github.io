import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Info, Building2, CreditCard, FileText, AlertCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Prices = () => {
  const { t, dir, language } = useLanguage();
  
  // Cardiology prices
  const cardiologyPrices = [
    { service: t('prices.cardiology.cag'), price: '800 – 1 200' },
    { service: t('prices.cardiology.stenting'), price: '2 200 – 3 500' },
    { service: t('prices.cardiology.cabg'), price: '8 000 – 13 000' },
    { service: t('prices.cardiology.valve'), price: '8 700 – 14 000' },
    { service: t('prices.cardiology.pacemaker'), price: '2 100 – 3 300' },
    { service: t('prices.cardiology.ablation'), price: '5 300 – 9 800' },
    { service: t('prices.cardiology.tavi'), price: '22 000 – 32 000' },
  ];

  // Oncology prices
  const oncologyPrices = [
    { service: t('prices.oncology.gastrectomy'), price: '2 800 – 4 600' },
    { service: t('prices.oncology.whipple'), price: '5 800 – 9 600' },
    { service: t('prices.oncology.lobectomy'), price: '2 100 – 3 800' },
    { service: t('prices.oncology.thyroid'), price: '900 – 1 700' },
    { service: t('prices.oncology.radiation'), price: '3 200 – 8 500' },
    { service: t('prices.oncology.chemo'), price: '1 000 – 6 000' },
    { service: t('prices.oncology.cart'), price: '24 000 – 35 000' },
  ];

  // Neurology prices
  const neurologyPrices = [
    { service: t('prices.neuro.mri'), price: '140 – 250' },
    { service: t('prices.neuro.aneurysm'), price: '1 700 – 3 200' },
    { service: t('prices.neuro.avm'), price: '1 900 – 3 600' },
    { service: t('prices.neuro.meningioma'), price: '2 400 – 4 600' },
    { service: t('prices.neuro.dbs'), price: '3 400 – 6 500 + ' + t('prices.device') },
    { service: t('prices.neuro.embolization'), price: '1 200 – 2 400' },
  ];

  // IVF prices
  const ivfPrices = [
    { service: t('prices.ivf.basic'), price: '2 000 – 2 500' },
    { service: t('prices.ivf.icsi'), price: '2 300 – 2 900' },
    { service: t('prices.ivf.donor'), price: '2 600 – 3 000' },
    { service: t('prices.ivf.oncofertility'), price: '700 – 1 000' },
  ];

  // Transplantation prices
  const transplantPrices = [
    { service: t('prices.transplant.kidney'), price: '40 000 – 67 000' },
    { service: t('prices.transplant.liver'), price: '≈ 130 000' },
    { service: t('prices.transplant.heart'), price: t('prices.from') + ' 100 000' },
  ];

  // Coordinator services
  const coordinatorServices = [
    t('prices.coordinator.service1'),
    t('prices.coordinator.service2'),
    t('prices.coordinator.service3'),
    t('prices.coordinator.service4'),
    t('prices.coordinator.service5'),
    t('prices.coordinator.service6'),
  ];

  const renderPriceTable = (title: string, subtitle: string, profile: string, prices: {service: string, price: string}[]) => (
    <div className="bg-card rounded-2xl border border-border overflow-hidden mb-8">
      <div className="bg-primary p-6">
        <h3 className="text-xl font-bold text-primary-foreground">{title}</h3>
        <p className="text-primary-foreground/70 text-sm mt-1">{subtitle}</p>
      </div>
      <div className="p-6">
        <p className="text-muted-foreground text-sm mb-4">
          <strong>{t('prices.profile')}:</strong> {profile}
        </p>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className={`py-3 ${language === 'ar' ? 'text-right pr-4' : 'text-left pl-0'} text-foreground font-semibold`}>{t('prices.service')}</th>
                <th className={`py-3 ${language === 'ar' ? 'text-left pl-4' : 'text-right pr-0'} text-foreground font-semibold`}>{t('prices.cost')}</th>
              </tr>
            </thead>
            <tbody>
              {prices.map((item, index) => (
                <tr key={index} className="border-b border-border/50 last:border-0">
                  <td className={`py-3 ${language === 'ar' ? 'text-right pr-4' : 'text-left pl-0'} text-foreground`}>{item.service}</td>
                  <td className={`py-3 ${language === 'ar' ? 'text-left pl-4' : 'text-right pr-0'} text-gold font-semibold whitespace-nowrap`}>${item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
  
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
              {t('prices.hero.title')}
            </h1>
            <p className="text-xl text-primary-foreground/80">
              {t('prices.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>
      
      {/* Important Note */}
      <section className="py-12 bg-background" dir={dir}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-gold/10 border border-gold/30">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-foreground mb-2">{t('prices.important.title')}</h3>
                <p className="text-foreground/80">{t('prices.important.text')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Price Tables */}
      <section className="py-12 bg-background" dir={dir}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">{t('prices.treatment.title')}</h2>
            
            {/* Cardiology */}
            {renderPriceTable(
              t('prices.cardiology.title'),
              t('prices.cardiology.subtitle'),
              t('prices.cardiology.profile'),
              cardiologyPrices
            )}

            {/* Oncology */}
            {renderPriceTable(
              t('prices.oncology.title'),
              t('prices.oncology.subtitle'),
              t('prices.oncology.profile'),
              oncologyPrices
            )}

            {/* Neurology */}
            {renderPriceTable(
              t('prices.neuro.title'),
              t('prices.neuro.subtitle'),
              t('prices.neuro.profile'),
              neurologyPrices
            )}

            {/* IVF */}
            {renderPriceTable(
              t('prices.ivf.title'),
              t('prices.ivf.subtitle'),
              t('prices.ivf.profile'),
              ivfPrices
            )}

            {/* Transplantation */}
            <div className="bg-card rounded-2xl border border-border overflow-hidden mb-8">
              <div className="bg-primary p-6">
                <h3 className="text-xl font-bold text-primary-foreground">{t('prices.transplant.title')}</h3>
                <p className="text-primary-foreground/70 text-sm mt-1">{t('prices.transplant.subtitle')}</p>
              </div>
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className={`py-3 ${language === 'ar' ? 'text-right pr-4' : 'text-left pl-0'} text-foreground font-semibold`}>{t('prices.transplant.type')}</th>
                        <th className={`py-3 ${language === 'ar' ? 'text-left pl-4' : 'text-right pr-0'} text-foreground font-semibold`}>{t('prices.estimate')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transplantPrices.map((item, index) => (
                        <tr key={index} className="border-b border-border/50 last:border-0">
                          <td className={`py-3 ${language === 'ar' ? 'text-right pr-4' : 'text-left pl-0'} text-foreground`}>{item.service}</td>
                          <td className={`py-3 ${language === 'ar' ? 'text-left pl-4' : 'text-right pr-0'} text-gold font-semibold whitespace-nowrap`}>${item.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-muted-foreground mt-4 italic">
                  * {t('prices.transplant.note')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coordinator Services */}
      <section className="py-16 bg-secondary/50" dir={dir}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="w-8 h-8 text-gold" />
              <h2 className="text-3xl font-bold text-foreground">{t('prices.coordinator.title')}</h2>
            </div>
            
            <p className="text-muted-foreground mb-8">{t('prices.coordinator.intro')}</p>

            {/* Service Fee */}
            <div className="bg-card rounded-2xl border border-border p-6 mb-6">
              <h3 className="text-xl font-bold text-foreground mb-4">{t('prices.coordinator.fee.title')}</h3>
              <p className="text-foreground mb-4">{t('prices.coordinator.fee.text')}</p>
              <div className="space-y-2 mb-4">
                <p className="text-gold font-semibold">{t('prices.coordinator.fee.percent')}</p>
                <p className="text-muted-foreground">{t('prices.or')}</p>
                <p className="text-gold font-semibold">{t('prices.coordinator.fee.fixed')}</p>
              </div>
              <p className="text-sm text-muted-foreground">{t('prices.coordinator.fee.note')}</p>
            </div>

            {/* Services Included */}
            <div className="bg-card rounded-2xl border border-border p-6 mb-6">
              <h3 className="text-xl font-bold text-foreground mb-4">{t('prices.coordinator.services.title')}</h3>
              <div className="space-y-3">
                {coordinatorServices.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald flex-shrink-0" />
                    <span className="text-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Schedule */}
      <section className="py-16 bg-background" dir={dir}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <CreditCard className="w-8 h-8 text-gold" />
              <h2 className="text-3xl font-bold text-foreground">{t('prices.payment.title')}</h2>
            </div>

            {/* Advance Payment */}
            <div className="bg-card rounded-2xl border border-border p-6 mb-6">
              <h3 className="text-xl font-bold text-foreground mb-4">{t('prices.payment.advance.title')}</h3>
              <ul className="space-y-2 text-foreground">
                <li>• {t('prices.payment.advance.item1')}</li>
                <li>• {t('prices.payment.advance.item2')}</li>
                <li>• {t('prices.payment.advance.item3')}</li>
              </ul>
            </div>

            {/* After Diagnostics */}
            <div className="bg-card rounded-2xl border border-border p-6 mb-6">
              <h3 className="text-xl font-bold text-foreground mb-4">{t('prices.payment.after.title')}</h3>
              <ul className="space-y-2 text-foreground">
                <li>• {t('prices.payment.after.item1')}</li>
                <li>• {t('prices.payment.after.item2')}</li>
                <li>• {t('prices.payment.after.item3')}</li>
              </ul>
            </div>

            {/* Payment via Coordinator */}
            <div className="bg-card rounded-2xl border border-border p-6 mb-6">
              <h3 className="text-xl font-bold text-foreground mb-4">{t('prices.payment.via.title')}</h3>
              <ul className="space-y-2 text-foreground">
                <li>• {t('prices.payment.via.item1')}</li>
                <li>• {t('prices.payment.via.item2')}</li>
                <li>• {t('prices.payment.via.item3')}</li>
              </ul>
            </div>

            {/* Cost Adjustment */}
            <div className="bg-card rounded-2xl border border-border p-6 mb-6">
              <h3 className="text-xl font-bold text-foreground mb-4">{t('prices.payment.adjustment.title')}</h3>
              <p className="text-foreground mb-2">{t('prices.payment.adjustment.text')}</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• {t('prices.payment.adjustment.item1')}</li>
                <li>• {t('prices.payment.adjustment.item2')}</li>
              </ul>
            </div>

            {/* Urgent Cases */}
            <div className="bg-gold/10 rounded-2xl border border-gold/30 p-6 mb-6">
              <h3 className="text-xl font-bold text-foreground mb-4">{t('prices.payment.urgent.title')}</h3>
              <p className="text-foreground mb-2">{t('prices.payment.urgent.text')}</p>
              <ul className="space-y-2 text-foreground">
                <li>• {t('prices.payment.urgent.item1')}</li>
                <li>• {t('prices.payment.urgent.item2')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Company */}
      <section className="py-16 bg-secondary/50" dir={dir}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-gold" />
              <h2 className="text-3xl font-bold text-foreground">{t('prices.partner.title')}</h2>
            </div>

            <p className="text-foreground mb-6">{t('prices.partner.intro')}</p>

            <div className="bg-card rounded-2xl border border-border p-6 mb-6">
              <h3 className="text-lg font-bold text-gold mb-4">PROMOTION AND INVESTMENT INCREASED LLC</h3>
              <p className="text-foreground mb-4">{t('prices.partner.usage')}</p>
              <ul className="space-y-2 text-foreground mb-6">
                <li>• {t('prices.partner.item1')}</li>
                <li>• {t('prices.partner.item2')}</li>
                <li>• {t('prices.partner.item3')}</li>
              </ul>
              
              <div className="bg-background rounded-xl p-4 mb-4">
                <p className="text-foreground font-medium mb-2">{t('prices.partner.note.title')}</p>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li>• {t('prices.partner.note.item1')}</li>
                  <li>• {t('prices.partner.note.item2')}</li>
                  <li>• {t('prices.partner.note.item3')}</li>
                </ul>
              </div>
            </div>

            {/* Bank Details Request */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">{t('prices.bank.title')}</h3>
              <p className="text-foreground mb-4">{t('prices.bank.text')}</p>
              {language === 'ar' && (
                <div className="bg-background rounded-xl p-4 mb-4">
                  <p className="text-foreground font-medium" dir="rtl">
                    الموضوع: طلب تأكيد رسمي لبيانات الحساب – شركة PROMOTION AND INVESTMENT INCREASED LLC
                  </p>
                </div>
              )}
              <p className="text-muted-foreground">{t('prices.bank.confirmation')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Important for Patient */}
      <section className="py-16 bg-background" dir={dir}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-primary-foreground mb-6">{t('prices.patient.title')}</h2>
              <div className="space-y-4 text-primary-foreground/80">
                <p>• {t('prices.patient.item1')}</p>
                <p>• {t('prices.patient.item2')}</p>
                <p>• {t('prices.patient.item3')}</p>
              </div>
              <Link to="/apply">
                <Button variant="hero" size="lg" className="mt-8">
                  {t('nav.apply')}
                  <ArrowRight className={`w-5 h-5 ${language === 'ar' ? 'mr-2 rotate-180' : 'ml-2'}`} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Prices;