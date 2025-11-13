import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Sparkles, Heart, Smile, Star } from "lucide-react";
import { motion, Transition, Variants } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ParticleBackground from "./ParticleBackground";
import heroImage from "@/assets/hero-robotics.jpg";
import { useState, useEffect } from "react";
import BookDemoDialog from "./BookDemoDialog";

const HeroSection = () => {
  const { ref: heroRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [userName, setUserName] = useState("");
  const [showPersonalization, setShowPersonalization] = useState(false);
  const [demoDialogOpen, setDemoDialogOpen] = useState(false);

  useEffect(() => {
    const savedName = localStorage.getItem("userName");
    if (savedName) {
      setUserName(savedName);
    } else {
      setShowPersonalization(true);
    }
  }, []);

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userName.trim()) {
      localStorage.setItem("userName", userName.trim());
      setShowPersonalization(false);
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants: Variants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      } as Transition,
    },
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary via-secondary to-accent overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 animate-pulse-slow" />
      
      {/* Decorative wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-background" 
        style={{
          clipPath: "ellipse(100% 100% at 50% 100%)",
          transform: "translateY(50%)"
        }}
      />

      {/* Joyful floating elements */}
      <div className="absolute top-1/4 left-1/4 w-8 h-8 text-yellow-300 animate-bounce">
        <Star className="w-full h-full" />
      </div>
      <div className="absolute top-1/3 right-1/3 w-6 h-6 text-pink-300 animate-pulse">
        <Heart className="w-full h-full" />
      </div>
      <div className="absolute bottom-1/3 left-1/3 w-7 h-7 text-blue-300 animate-bounce" style={{ animationDelay: "1s" }}>
        <Smile className="w-full h-full" />
      </div>
      <div className="absolute bottom-1/4 right-1/4 w-5 h-5 text-green-300 animate-pulse" style={{ animationDelay: "2s" }}>
        <Sparkles className="w-full h-full" />
      </div>

      {/* Animated blobs for joyful effect */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" style={{ animationDelay: "4s" }}></div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <motion.div 
          ref={(el) => {
            if (el) {
              (heroRef as React.MutableRefObject<HTMLDivElement>).current = el;
            }
          }}
          className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh]"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Left Content */}
          <motion.div 
            className="text-white space-y-8"
            variants={itemVariants}
          >
            {/* Personalization Form */}
            {showPersonalization && (
              <motion.form 
                onSubmit={handleNameSubmit}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6 border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-bold mb-3">Welcome to L.I.T. Labs!</h3>
                <p className="text-white/90 mb-4">What's your name?</p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Enter your name"
                    className="flex-1 px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <Button 
                    type="submit"
                    className="bg-white text-primary hover:bg-white/90"
                  >
                    Go
                  </Button>
                </div>
              </motion.form>
            )}

            {/* Personalized Greeting */}
            {userName && !showPersonalization && (
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Sparkles className="h-4 w-4 text-yellow-300" />
                <span className="text-sm font-medium">Hello, {userName}! 👋</span>
              </motion.div>
            )}

            {/* Animated badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Sparkles className="h-4 w-4 text-yellow-300" />
              <span className="text-sm font-medium">NEP-Aligned Experiential Learning</span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              variants={itemVariants}
            >
              Next-Gen Learning with{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent font-extrabold">
                AI, Robotics & Hands-On STEM!
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              L.I.T. Labs builds future-ready schools with plug-and-play kits, innovation labs, and NEP-aligned teacher training—so students learn by doing and thrive in 21st-century skills.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 pt-4"
              variants={itemVariants}
            >
              <Button 
                size="lg" 
                className="gap-2 btn-modern hover-lift shadow-glow bg-[#FF822E] hover:bg-[#FF822E]/90 text-white"
                onClick={() => setDemoDialogOpen(true)}
              >
                Book a Demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                className="btn-modern hover-lift glass"
              >
                Explore Our Kits
              </Button>
            </motion.div>

            {/* Stats */}
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div 
            className="relative"
            variants={imageVariants}
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main circular image with modern effects */}
              <motion.div 
                className="relative rounded-full overflow-hidden shadow-elegant aspect-square card-modern"
                variants={floatingVariants}
                animate="animate"
              >
                <img 
                  src={heroImage} 
                  alt="Students learning with STEM robotics" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </motion.div>
              
              {/* Floating decorative elements */}
              <motion.div 
                className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-yellow-300/30 to-pink-300/30 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <motion.div 
                className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-300/30 to-purple-300/30 rounded-full blur-xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.6, 0.3, 0.6],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Floating icons */}
              <motion.div 
                className="absolute top-1/4 -left-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20"
                animate={{
                  y: [-5, 5, -5],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Sparkles className="h-6 w-6 text-yellow-300" />
              </motion.div>

              <motion.div 
                className="absolute bottom-1/4 -right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20"
                animate={{
                  y: [5, -5, 5],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Play className="h-6 w-6 text-pink-300" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
      `}</style>
      <BookDemoDialog open={demoDialogOpen} onClose={() => setDemoDialogOpen(false)} />
    </section>
  );
};

export default HeroSection;