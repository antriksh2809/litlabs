import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import BookDemoDialog from "./BookDemoDialog";
import HeroWelcomeBox from "./HeroWelcomeBox";

const HeroSection = () => {
  const [demoDialogOpen, setDemoDialogOpen] = useState(false);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary to-[#0088a8] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20"></div>
      
      {/* Welcome Box */}
      <HeroWelcomeBox />
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="text-sm font-medium">NEP-Aligned Experiential Learning</span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              The Complete 21st Century Skills Ecosystem
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-foreground/80 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Learn from industry experts. Innovate with AI-powered personalization. Transform with hands-on labs. One complete ecosystem. Infinite possibilities.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Button 
                size="lg" 
                className="gap-2 bg-white hover:bg-gray-100 text-primary font-bold"
                onClick={() => setDemoDialogOpen(true)}
              >
                Schedule Your Free Demo
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                className="gap-2 bg-transparent border-2 border-white text-white hover:bg-white/10"
                onClick={() => window.open("https://drive.google.com/drive/folders/1IW5wMGqhH7WhapZWU-Ltdhyn7gUgYWpd?usp=drive_link", "_blank")}
              >
                <Download className="h-4 w-4" />
                Download Brochure
              </Button>
            </motion.div>
          </div>

          {/* Right Content - Hero Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="relative w-full max-w-lg mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="bg-white/20 rounded-full p-6 w-32 h-32 flex items-center justify-center mx-auto mb-6">
                    <div className="bg-white rounded-full p-4">
                      <img 
                        src="/Gemini_Generated_Image_mey00qmey00qmey0-removebg-preview.png" 
                        alt="L.I.T. Labs Logo" 
                        className="h-16 w-auto"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Experience L.I.T. Labs</h3>
                  <p className="text-white/90">See how we transform classrooms</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <BookDemoDialog open={demoDialogOpen} onClose={() => setDemoDialogOpen(false)} />
    </section>
  );
};

export default HeroSection;