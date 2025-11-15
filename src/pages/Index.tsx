import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ThreePillars from "@/components/ThreePillars";
import CompleteEcosystem from "@/components/CompleteEcosystem";
import InnovationLabs from "@/components/InnovationLabs";
import ImpactStatistics from "@/components/ImpactStatistics";
import WhyLITLABS from "@/components/WhyLITLABS";
import Testimonials from "@/components/Testimonials";
import ServicesSupport from "@/components/ServicesSupport";
import Pricing from "@/components/Pricing";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        
        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        
        <ThreePillars />
        
        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        
        <CompleteEcosystem />
        
        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        
        <InnovationLabs />
        
        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        
        <ImpactStatistics />
        
        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        
        <WhyLITLABS />
        
        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        
        <Testimonials />
        
        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        
        <ServicesSupport />
        
        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        
        <Pricing />
        
        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;