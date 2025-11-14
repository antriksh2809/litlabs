import { motion } from "framer-motion";
import { Users, School, Award, TrendingUp } from "lucide-react";

const ImpactSection = () => {
  const stats = [
    {
      number: "500+",
      label: "Schools Empowered",
      icon: <School className="h-8 w-8" />,
      description: "Across Tier-1, Tier-2, and Tier-3 cities"
    },
    {
      number: "100,000+",
      label: "Students Impacted",
      icon: <Users className="h-8 w-8" />,
      description: "Engaged in hands-on STEM learning"
    },
    {
      number: "95%",
      label: "Teacher Satisfaction",
      icon: <Award className="h-8 w-8" />,
      description: "Report improved classroom engagement"
    },
    {
      number: "40%",
      label: "Average Improvement",
      icon: <TrendingUp className="h-8 w-8" />,
      description: "In STEM subject performance"
    }
  ];

  const impactImages = [
    "/WhatsApp Image 2025-11-01 at 00.24.00.jpeg",
    "/WhatsApp Image 2025-11-01 at 00.32.32.jpeg",
    "/WhatsApp Image 2025-11-01 at 00.32.33.jpeg",
    "/Learn Innovate Transform.png"
  ];

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
    <section className="py-16 md:py-24 bg-gradient-to-b from-muted/20 to-background" id="impact">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transforming education across India with hands-on STEM learning experiences
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-2xl p-6 border shadow-sm hover:shadow-md transition-shadow"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 rounded-xl bg-[#3BBBF0]/10 flex items-center justify-center mb-4 text-[#3BBBF0]">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{stat.label}</h3>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Image Gallery */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Transforming Classrooms Across India
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {impactImages.map((image, index) => (
              <motion.div
                key={index}
                className="aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={image}
                  alt={`Impact ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial Highlight */}
        <motion.div
          className="bg-gradient-to-r from-[#3BBBF0] to-[#FF822E] rounded-2xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <blockquote className="text-xl md:text-2xl font-medium mb-6 max-w-3xl mx-auto">
            "L.I.T. Labs has transformed our school's approach to STEM education. Our students are now building robots and AI projects with confidence!"
          </blockquote>
          <div className="font-semibold">- Principal, Greenwood High International School</div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;