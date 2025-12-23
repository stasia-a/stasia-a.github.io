import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import EquipmentGallery from '@/components/home/EquipmentGallery';
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
      <EquipmentGallery />
      <WhyBelarusSection />
      <VipPromoSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
