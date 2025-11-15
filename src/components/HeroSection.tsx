import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import BookDemoDialog from "./BookDemoDialog";
import HeroWelcomeBox from "./HeroWelcomeBox";

const HeroSection = () => {
  const [demoDialogOpen, setDemoDialogOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/WhatsApp Image 2025-11-12 at 18.54.30.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-secondary/60"></div>
      
      {/* Welcome Box */}
      <HeroWelcomeBox />
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start pt-8">
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

          {/* Right Content - Hero Video */}
          <motion.div 
            className="relative mt-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="relative w-full max-w-lg mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <video 
                  ref={videoRef}
                  src="/WhatsApp Video 2025-10-29 at 12.34.01.mp4" 
                  autoPlay 
                  loop 
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Play/Pause Button */}
                <button 
                  onClick={togglePlayPause}
                  className="absolute top-4 right-16 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-all duration-300"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? (
                    <Pause className="h-6 w-6 text-white" />
                  ) : (
                    <Play className="h-6 w-6 text-white" />
                  )}
                </button>
                
                {/* Mute/Unmute Button */}
                <button 
                  onClick={toggleMute}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-all duration-300"
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                  {isMuted ? (
                    <VolumeX className="h-6 w-6 text-white" />
                  ) : (
                    <Volume2 className="h-6 w-6 text-white" />
                  )}
                </button>
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-white rounded-full p-2">
                      <img 
                        src="/Gemini_Generated_Image_mey00qmey00qmey0-removebg-preview.png" 
                        alt="L.I.T. Labs Logo" 
                        className="h-8 w-auto"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Experience L.I.T. Labs</h3>
                      <p className="text-sm opacity-90">See how we transform classrooms</p>
                    </div>
                  </div>
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