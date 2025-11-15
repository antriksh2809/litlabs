import { motion } from "framer-motion";
import { Play } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background" id="about">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Video/Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden shadow-lg">
              <div className="aspect-video flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                <div className="relative z-10 text-center p-8">
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Play className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Our Mission</h3>
                  <p className="text-foreground/80">Transforming education through hands-on learning</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Empowering the Next Generation of Innovators
            </motion.h2>
            
            <motion.p 
              className="text-lg text-foreground/80 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              L.I.T. Labs is revolutionizing K-12 education by making cutting-edge technology accessible to every student. 
              We provide schools with comprehensive AI, Robotics, and IoT learning solutions that are easy to implement 
              and aligned with national education policies.
            </motion.p>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-foreground/70">Schools</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">2.5M+</div>
                <div className="text-sm text-foreground/70">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-foreground/70">Cities</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;