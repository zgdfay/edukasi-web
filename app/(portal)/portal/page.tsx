import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import FAQSection from '../components/FAQSection';

export default function PortalPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ServicesSection />
      <FAQSection />
    </div>
  );
}

