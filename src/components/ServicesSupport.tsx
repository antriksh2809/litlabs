import { GraduationCap, BookOpen, Wrench, Trophy } from "lucide-react";
import { motion } from "framer-motion";

const ServicesSupport = () => {
  const services = [
    {
      icon: <GraduationCap className="h-12 w-12 text-primary" />,
      title: "Certified Training Programs",
      description: "Expert-led courses in 21st century skills. Available online and offline.",
      image: "/Learn Innovate Transform.png"
    },
    {
      icon: <BookOpen className="h-12 w-12 text-secondary" />,
      title: "Curriculum & Assessments",
      description: "NEP/NCF aligned lesson plans. Regular curriculum updates.",
      image: "/ChatGPT Image Apr 30, 2025, 03_26_54 PM.png"
    },
    {
      icon: <Wrench className="h-12 w-12 text-blue-500" />,
      title: "Technical Support",
      description: "24/7 helpdesk. Equipment maintenance. Consumable replenishment.",
      image: "/WhatsApp Image 2025-11-01 at 00.24.00.jpeg"
    },
    {
      icon: <Trophy className="h-12 w-12 text-orange-500" />,
      title: "Competitions & Showcases",
      description: "Inter-school competitions. Innovation festivals. Certification programs.",
      image: "/WhatsApp Image 2025-11-01 at 00.24.00.jpeg"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
            Complete Support Every Step of the Way
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="text-center p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="mb-4">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
              <div className="flex justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-accent mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSupport;