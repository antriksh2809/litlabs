import { motion } from "framer-motion";

const WhyLITLABS = () => {
  const features = [
    {
      title: "Complete Ecosystem",
      description: "Certified courses + AI software + Innovation labs integrated into one platform",
      image: "/Learn Innovate Transform.png"
    },
    {
      title: "Industry-Certified",
      description: "Designed by industry leaders. Delivered by certified trainers.",
      image: "/ChatGPT Image Apr 30, 2025, 03_26_54 PM.png"
    },
    {
      title: "AI-Powered Personalization",
      description: "Each student gets unique learning path. Software adapts teaching style and pace.",
      image: "/WhatsApp Image 2025-11-01 at 00.24.00.jpeg"
    },
    {
      title: "Hands-On Transformation",
      description: "Learn theory, then build real projects. Ideas become reality.",
      image: "/WhatsApp Image 2025-11-01 at 00.24.00.jpeg"
    },
    {
      title: "Teacher Empowerment",
      description: "Comprehensive training. 24/7 support. Teachers become innovation leaders.",
      image: "/WhatsApp Image 2025-11-01 at 00.32.32.jpeg"
    },
    {
      title: "Proven Track Record",
      description: "50+ schools transformed. Student engagement up 85%. Skill development measurable.",
      image: "/WhatsApp Image 2025-11-01 at 00.32.33.jpeg"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
            What Makes LITLABS Different?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-modern border-t-4 border-primary"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-accent mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyLITLABS;