import { motion } from "framer-motion";

const CompleteEcosystem = () => {
  const benefits = [
    "No fragmented solutions—everything integrated",
    "Industry-certified content + AI personalization + hands-on labs",
    "Proven with 50+ schools, 2000+ teachers, 5000+ students",
    "Flexible delivery (online, offline, hybrid)",
    "Complete teacher support & training",
    "Affordable, transparent pricing"
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
            Why Choose LITLABS? The Only Complete Solution
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Circular diagram */}
              <div className="relative w-80 h-80 mx-auto">
                {/* Center circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                        <span className="text-white font-bold text-sm text-center">21st Century<br />Skills</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Pillar 1 - Learn */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-24 h-24 rounded-full bg-blue-100 flex flex-col items-center justify-center p-2 text-center">
                    <div className="w-8 h-8 rounded-full bg-primary mb-2 flex items-center justify-center">
                      <span className="text-white font-bold text-xs">📚</span>
                    </div>
                    <span className="text-xs font-semibold">LEARN</span>
                  </div>
                </div>
                
                {/* Pillar 2 - Innovate */}
                <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-24 h-24 rounded-full bg-yellow-100 flex flex-col items-center justify-center p-2 text-center">
                    <div className="w-8 h-8 rounded-full bg-secondary mb-2 flex items-center justify-center">
                      <span className="text-white font-bold text-xs">🧠</span>
                    </div>
                    <span className="text-xs font-semibold">INNOVATE</span>
                  </div>
                </div>
                
                {/* Pillar 3 - Transform */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                  <div className="w-24 h-24 rounded-full bg-orange-100 flex flex-col items-center justify-center p-2 text-center">
                    <div className="w-8 h-8 rounded-full bg-orange-500 mb-2 flex items-center justify-center">
                      <span className="text-white font-bold text-xs">🚀</span>
                    </div>
                    <span className="text-xs font-semibold">TRANSFORM</span>
                  </div>
                </div>
                
                {/* Arrows */}
                <div className="absolute top-1/4 left-1/4 w-24 h-1 bg-primary transform rotate-45"></div>
                <div className="absolute top-1/4 right-1/4 w-24 h-1 bg-secondary transform -rotate-45"></div>
                <div className="absolute bottom-1/4 left-1/2 w-24 h-1 bg-orange-500 transform -translate-x-1/2"></div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              <div className="mb-8">
                <img 
                  src="/WhatsApp Image 2025-10-14 at 00.13.57.jpg" 
                  alt="Complete Ecosystem" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    <span className="text-primary mr-3 mt-1">✓</span>
                    <span className="text-lg text-muted-foreground">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompleteEcosystem;