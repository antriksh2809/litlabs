import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

const AboutSection = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20" id="about">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left: Text Content */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
              variants={itemVariants}
            >
              Transforming Young Minds into Innovators
            </motion.h2>
            
            <motion.div 
              className="text-lg text-foreground/80 space-y-4 leading-relaxed"
              variants={itemVariants}
            >
              <p>
                L.I.T. Labs is an education-innovation company enabling hands-on, experience-based learning in AI, Robotics, IoT, and Coding for K-12. We partner with schools across Tier-1/2/3 cities to deliver plug-and-play tech learning ecosystems—from kits to labs and teacher training—so every young mind can dream, build, and lead.
              </p>
            </motion.div>

            {/* Highlight Points */}
            <motion.div className="space-y-3 pt-4" variants={itemVariants}>
              <motion.div 
                className="flex items-start gap-3 group"
                variants={itemVariants}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#3BBBF0] mt-2 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                <p className="text-foreground/90">Hands-on learning that connects theory with real-world application</p>
              </motion.div>
              <motion.div 
                className="flex items-start gap-3 group"
                variants={itemVariants}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#3BBBF0] mt-2 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                <p className="text-foreground/90">Exposure to AI, Robotics, Drones & more—no extra infra or staff needed</p>
              </motion.div>
              <motion.div 
                className="flex items-start gap-3 group"
                variants={itemVariants}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#3BBBF0] mt-2 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                <p className="text-foreground/90">NEP-aligned; support to become future-ready campuses</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right: Video/Image Placeholder */}
          <motion.div 
            className="relative"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              {/* Custom Video Player */}
              <div className="aspect-[3/4] w-full relative group">
                <video 
                  ref={videoRef}
                  className="w-full h-full object-cover scale-100"
                  autoPlay
                  playsInline
                  loop
                  muted={isMuted}
                  poster="/placeholder-video-poster.jpg"
                >
                  <source src="/WhatsApp Video 2025-10-29 at 12.34.01.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Custom Video Controls */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  {/* Play/Pause Button */}
                  <button
                    onClick={togglePlay}
                    className="w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-all hover:scale-110"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? (
                      <Pause className="h-5 w-5 text-primary" />
                    ) : (
                      <Play className="h-5 w-5 text-primary ml-1" />
                    )}
                  </button>

                  {/* Mute/Unmute Button */}
                  <button
                    onClick={toggleMute}
                    className="w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-all hover:scale-110"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? (
                      <VolumeX className="h-5 w-5 text-primary" />
                    ) : (
                      <Volume2 className="h-5 w-5 text-primary" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Partner Logos Section */}
        <motion.div 
          className="pt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h3 
            className="text-3xl font-bold mb-4 text-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Schools Who Trust Us!
          </motion.h3>
          <motion.p 
            className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Join Us for an Unparalleled Educational Experience!
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            {[
              { name: "DBSE", color: "blue", bgColor: "bg-blue-500" },
              { name: "Kendriya Vidyalaya", color: "green", bgColor: "bg-green-500" },
              { name: "Uttarakhand Board", color: "amber", bgColor: "bg-amber-500" },
              { name: "Jawahar Navodaya Vidyalaya", color: "purple", bgColor: "bg-purple-500" }
            ].map((partner, index) => (
              <motion.div
                key={partner.name}
                className="w-48 h-28 bg-white rounded-xl shadow-lg flex flex-col items-center justify-center px-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <motion.div 
                  className={`w-16 h-16 rounded-lg ${partner.bgColor} flex items-center justify-center mb-3`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="text-white font-bold text-xl">
                    {partner.name.split(' ').map(word => word.charAt(0)).join('')}
                  </span>
                </motion.div>
                <span className="text-sm font-bold text-center text-gray-800">{partner.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;