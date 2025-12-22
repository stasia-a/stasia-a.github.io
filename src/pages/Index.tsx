import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import WhyBelarusSection from '@/components/home/WhyBelarusSection';
import VipPromoSection from '@/components/home/VipPromoSection';
import CTASection from '@/components/home/CTASection';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { t } = useLanguage();
  
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <WhyBelarusSection />
      <VipPromoSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
