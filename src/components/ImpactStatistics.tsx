import { motion } from "framer-motion";

const ImpactStatistics = () => {
  const stats = [
    {
      number: "50+",
      label: "Schools Reached",
      description: "Innovation Leaders"
    },
    {
      number: "2000+",
      label: "Teachers Trained",
      description: "Empowered Educators"
    },
    {
      number: "5000+",
      label: "Students Impacted",
      description: "Future Ready"
    },
    {
      number: "10+",
      label: "Years Experience",
      description: "Industry Trusted"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-accent to-[#0f2a46] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Impact. Your Future.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="text-5xl md:text-6xl font-bold mb-2 text-secondary">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold mb-1">{stat.label}</div>
                <div className="text-muted">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/20 rounded-2xl p-8 backdrop-blur-sm">
              <img 
                src="/WhatsApp Image 2025-10-14 at 00.29.18.jpg" 
                alt="Our Impact" 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStatistics;