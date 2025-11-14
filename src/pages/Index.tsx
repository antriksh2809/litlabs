import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Solutions from "@/components/Solutions";
import ShopCarousel from "@/components/ShopCarousel";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import ImpactSection from "@/components/ImpactSection";
import ApiTest from "@/components/ApiTest";

const Index = () => {
  return (
    <div className="min-h-screen" id="home">
      <Header />
      <HeroSection />
      <AboutSection />
      <ImpactSection />
      <Solutions />
      <ShopCarousel />
      <Testimonials />
      <ApiTest />
      <Footer />
    </div>
  );
};

export default Index;