import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Solutions from "@/components/Solutions";
import ShopCarousel from "@/components/ShopCarousel";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen" id="home">
      <Header />
      <HeroSection />
      <AboutSection />
      <Solutions />
      <ShopCarousel />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;