import { Bot, Brain, Plane, Printer } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const InnovationLabs = () => {
  const labs = [
    {
      id: "robotics",
      icon: <Bot className="h-12 w-12 text-primary" />,
      title: "Robotics & IoT",
      description: "Build smart devices. Program autonomous systems. Explore Industry 4.0.",
      examples: ["Smart home", "Line-follower robots", "IoT sensors"],
      link: "/transform#robotics",
      image: "/WhatsApp Image 2025-11-01 at 00.24.00.jpeg"
    },
    {
      id: "ai",
      icon: <Brain className="h-12 w-12 text-secondary" />,
      title: "Artificial Intelligence",
      description: "Machine learning basics. Computer vision. NLP. Ethics in AI.",
      examples: ["Image recognition", "Chatbots", "Predictive models"],
      link: "/transform#ai",
      image: "/WhatsApp Image 2025-11-01 at 00.24.00.jpeg"
    },
    {
      id: "drones",
      icon: <Plane className="h-12 w-12 text-blue-500" />,
      title: "Drones & Aeromodelling",
      description: "Design, build, and fly. Autonomous navigation. Real-world applications.",
      examples: ["Drone racing", "Aerial mapping", "Autonomous missions"],
      link: "/transform#drones",
      image: "/WhatsApp Image 2025-11-01 at 00.32.32.jpeg"
    },
    {
      id: "3d-printing",
      icon: <Printer className="h-12 w-12 text-orange-500" />,
      title: "3D Printing & Prototyping",
      description: "CAD design. Rapid prototyping. Maker mindset.",
      examples: ["Custom designs", "Replacement parts", "Entrepreneurship"],
      link: "/transform#3d-printing",
      image: "/WhatsApp Image 2025-11-01 at 00.32.33.jpeg"
    }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
            Innovation Labs Powered by LITLABS
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {labs.map((lab, index) => (
            <motion.div
              key={lab.id}
              className="lab-card bg-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <div className="mb-4">
                <img 
                  src={lab.image} 
                  alt={lab.title} 
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
              <div className="mb-6">
                {lab.icon}
              </div>
              <h3 className="text-xl font-bold text-accent mb-3">{lab.title}</h3>
              <p className="text-muted-foreground mb-4">{lab.description}</p>
              <div className="mb-6">
                <p className="text-sm font-semibold text-primary mb-2">Examples:</p>
                <ul className="space-y-1">
                  {lab.examples.map((example, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start">
                      <span className="mr-2">•</span>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
              <Link 
                to={lab.link}
                className="text-primary font-semibold hover:underline inline-flex items-center"
              >
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnovationLabs;