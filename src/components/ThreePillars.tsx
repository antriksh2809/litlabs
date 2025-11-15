import { BookOpen, Brain, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ThreePillars = () => {
  const pillars = [
    {
      id: "learn",
      icon: <BookOpen className="h-12 w-12 text-primary" />,
      title: "LEARN",
      subtitle: "Certified Knowledge from Industry Experts",
      description: "Industry-certified 21st-century skills courses taught by certified trainers. Available online & offline. Curriculum aligned with NEP 2020, NCF 2023, CBSE, ICSE.",
      features: [
        "Certified curriculum",
        "Industry expert trainers",
        "Online & offline delivery",
        "Global standards aligned"
      ],
      cta: "Explore Courses",
      link: "/learn",
      image: "/Learn Innovate Transform.png"
    },
    {
      id: "innovate",
      icon: <Brain className="h-12 w-12 text-secondary" />,
      title: "INNOVATE",
      subtitle: "Intelligence-Powered Personalized Learning",
      description: "AI-powered software that adapts to each student's unique learning style, pace, and needs. Real-time performance insights and intelligent recommendations guide every learner.",
      features: [
        "Personalized learning paths",
        "AI-adaptive assessment",
        "Real-time performance insights",
        "Dynamic progression tracking"
      ],
      cta: "See AI in Action",
      link: "/innovate",
      image: "/WhatsApp Image 2025-11-01 at 00.24.00.jpeg"
    },
    {
      id: "transform",
      icon: <Rocket className="h-12 w-12 text-orange-500" />,
      title: "TRANSFORM",
      subtitle: "Turn Ideas Into Reality",
      description: "Complete innovation ecosystem with ready-to-deploy labs for Robotics, AI, Drones, and 3D Printing. DIY kits and maker equipment for hands-on experiential learning.",
      features: [
        "Innovation labs setup",
        "21st century DIY kits",
        "Hands-on projects",
        "Student showcases & competitions"
      ],
      cta: "Tour Innovation Labs",
      link: "/transform",
      image: "/WhatsApp Image 2025-11-01 at 00.24.00.jpeg"
    }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
            Learn. Innovate. Transform. Complete Ecosystem.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            LITLABS integrates three powerful pillars into one unified platform for 21st century education.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              className={`pillar-card ${pillar.id}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <div className="mb-4">
                <img 
                  src={pillar.image} 
                  alt={pillar.title} 
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
              <div className="mb-6">
                {pillar.icon}
              </div>
              <h3 className="text-2xl font-bold text-accent mb-2">{pillar.title}</h3>
              <h4 className="text-lg font-semibold text-primary mb-4">{pillar.subtitle}</h4>
              <p className="text-muted-foreground mb-6">{pillar.description}</p>
              <ul className="space-y-2 mb-8">
                {pillar.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to={pillar.link}
                className="text-primary font-semibold hover:underline inline-flex items-center"
              >
                {pillar.cta} →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreePillars;