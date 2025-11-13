import { ShoppingCart, User, Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass backdrop-blur-md border-b border-white/10 shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Main Navigation */}
      <div className="flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <motion.a 
          href="/" 
          className="flex items-center gap-3 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div 
            className="w-6 h-6 flex items-center justify-center"
            whileHover={{ rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            <img 
              src="C:\Users\faisa\Downloads\stem-clone-spark-main (2) (1)\public\Learn_Innovate_Transform-removebg-preview.png" 
              alt="L.I.T. Labs Logo" 
              className="h-[90%] w-[90%] object-contain"
            />
          </motion.div>
          <span className="text-2xl font-bold text-foreground group-hover:gradient-text transition-all duration-300">
            L.I.T. LABS
          </span>
        </motion.a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </a>
            <a href="#innovation-labs" className="text-sm font-medium hover:text-primary transition-colors">
              Innovation Labs
            </a>
            <a href="#kits" className="text-sm font-medium hover:text-primary transition-colors">
              AI & Robotics Kits
            </a>
            <a href="#workshops" className="text-sm font-medium hover:text-primary transition-colors">
              Workshops
            </a>
            <a href="#teacher-training" className="text-sm font-medium hover:text-primary transition-colors">
              Teacher Training
            </a>
            <a href="#science-parks" className="text-sm font-medium hover:text-primary transition-colors">
              Science Parks
            </a>
            <a href="/programs#atl" className="text-sm font-medium hover:text-primary transition-colors">
              ATL Labs
            </a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About Us
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Button 
              className="btn-modern hover-lift bg-[#FF822E] hover:bg-[#FF822E]/90 text-white"
              size="sm"
            >
              Book a Demo
            </Button>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <motion.div 
          className="md:hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="h-6 w-6" />
            </motion.div>
          </Button>
        </motion.div>
      </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4 border-t border-white/10">
                <div className="space-y-2">
                  <a href="#home" className="block px-4 py-2 text-sm font-medium hover:text-primary transition-colors">
                    Home
                  </a>
                  <a href="#innovation-labs" className="block px-4 py-2 text-sm font-medium hover:text-primary transition-colors">
                    Innovation Labs
                  </a>
                  <a href="#kits" className="block px-4 py-2 text-sm font-medium hover:text-primary transition-colors">
                    AI & Robotics Kits
                  </a>
                  <a href="#workshops" className="block px-4 py-2 text-sm font-medium hover:text-primary transition-colors">
                    Workshops
                  </a>
                  <a href="#teacher-training" className="block px-4 py-2 text-sm font-medium hover:text-primary transition-colors">
                    Teacher Training
                  </a>
                  <a href="#science-parks" className="block px-4 py-2 text-sm font-medium hover:text-primary transition-colors">
                    Science Parks
                  </a>
                  <a href="/programs#atl" className="block px-4 py-2 text-sm font-medium hover:text-primary transition-colors">
                    ATL Labs
                  </a>
                  <a href="#about" className="block px-4 py-2 text-sm font-medium hover:text-primary transition-colors">
                    About Us
                  </a>
                  <a href="#contact" className="block px-4 py-2 text-sm font-medium hover:text-primary transition-colors">
                    Contact
                  </a>
                </div>
                <div className="flex flex-col gap-2 px-4">
                  <Button 
                    className="btn-modern bg-[#FF822E] hover:bg-[#FF822E]/90 text-white"
                    size="sm"
                  >
                    Book a Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;