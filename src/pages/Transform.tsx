import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Bot, Brain, Plane, Printer, Wrench, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

const Transform = () => {
  const labs = [
    {
      id: "robotics",
      icon: <Bot className="h-12 w-12 text-primary" />,
      title: "Robotics & IoT Lab",
      description: "Build smart devices. Program autonomous systems. Explore Industry 4.0.",
      features: [
        "Modular robotics kits for all grade levels",
        "IoT sensors and actuators",
        "Programming with Python and Scratch",
        "Competition-ready platforms"
      ]
    },
    {
      id: "ai",
      icon: <Brain className="h-12 w-12 text-secondary" />,
      title: "Artificial Intelligence Lab",
      description: "Machine learning basics. Computer vision. NLP. Ethics in AI.",
      features: [
        "AI learning platforms",
        "Computer vision kits",
        "Natural language processing tools",
        "Ethics in AI curriculum"
      ]
    },
    {
      id: "drones",
      icon: <Plane className="h-12 w-12 text-blue-500" />,
      title: "Drones & Aeromodelling Lab",
      description: "Design, build, and fly. Autonomous navigation. Real-world applications.",
      features: [
        "Drone building kits",
        "Flight simulators",
        "Autonomous navigation systems",
        "Aeromodelling tools"
      ]
    },
    {
      id: "3d-printing",
      icon: <Printer className="h-12 w-12 text-orange-500" />,
      title: "3D Printing & Prototyping Lab",
      description: "CAD design. Rapid prototyping. Maker mindset.",
      features: [
        "3D printers and scanners",
        "CAD design software",
        "Rapid prototyping materials",
        "Maker space equipment"
      ]
    }
  ];

  const equipment = [
    {
      category: "Robotics",
      items: [
        "Arduino-based microcontrollers",
        "Raspberry Pi kits",
        "Sensor arrays (ultrasonic, IR, light, etc.)",
        "Motor drivers and actuators",
        "Robotic arms and chassis"
      ]
    },
    {
      category: "AI & Computing",
      items: [
        "GPU-accelerated workstations",
        "AI learning platforms",
        "Computer vision cameras",
        "Speech recognition kits",
        "Edge computing devices"
      ]
    },
    {
      category: "Drones & Aeromodelling",
      items: [
        "Drone building kits",
        "Flight controllers",
        "Propellers and motors",
        "FPV equipment",
        "Aeromodelling materials"
      ]
    },
    {
      category: "3D Printing",
      items: [
        "FDM 3D printers",
        "SLA 3D printers",
        "3D scanners",
        "Filament materials",
        "Post-processing tools"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-[#0088a8] text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Turn Ideas Into Reality
            </motion.h1>
            <motion.p 
              className="text-xl max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Complete innovation ecosystem with ready-to-deploy labs for Robotics, AI, Drones, 
              and 3D Printing. DIY kits and maker equipment for hands-on experiential learning.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold">
                Tour Our Labs
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Labs Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
                Our Innovation Labs
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive labs designed to transform your school into a hub of innovation
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {labs.map((lab, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-modern p-8 border-t-4 border-primary"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <div className="flex items-center mb-6">
                    <div className="mr-4">
                      {lab.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-accent">{lab.title}</h3>
                      <p className="text-muted-foreground">{lab.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {lab.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline">Learn More</Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipment Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
                Lab Equipment & Specifications
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                State-of-the-art equipment for hands-on learning experiences
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {equipment.map((category, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-modern p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <h3 className="text-xl font-bold text-accent mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <Wrench className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
                Student Project Showcase
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real projects created by students in our innovation labs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                className="bg-white rounded-lg shadow-modern overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                <div className="h-48 bg-gradient-to-r from-primary to-[#0088a8] flex items-center justify-center">
                  <img 
                    src="/WhatsApp Image 2025-11-01 at 00.24.00.jpeg" 
                    alt="Smart Agriculture Robot" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-accent mb-2">Smart Agriculture Robot</h3>
                  <p className="text-muted-foreground mb-4">
                    A robot that monitors soil moisture and automatically waters plants.
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Lightbulb className="h-4 w-4 mr-1" />
                    <span>Robotics Lab, Grade 9</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-white rounded-lg shadow-modern overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="h-48 bg-gradient-to-r from-secondary to-[#ffc847] flex items-center justify-center">
                  <img 
                    src="/WhatsApp Image 2025-11-01 at 00.32.32.jpeg" 
                    alt="Autonomous Delivery Drone" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-accent mb-2">Autonomous Delivery Drone</h3>
                  <p className="text-muted-foreground mb-4">
                    A drone that can deliver small packages to specific GPS coordinates.
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Lightbulb className="h-4 w-4 mr-1" />
                    <span>Drones Lab, Grade 11</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-white rounded-lg shadow-modern overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="h-48 bg-gradient-to-r from-orange-500 to-[#ff9e47] flex items-center justify-center">
                  <img 
                    src="/WhatsApp Image 2025-11-01 at 00.32.33.jpeg" 
                    alt="Prosthetic Hand" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-accent mb-2">Prosthetic Hand</h3>
                  <p className="text-muted-foreground mb-4">
                    A 3D-printed prosthetic hand controlled by muscle sensors.
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Lightbulb className="h-4 w-4 mr-1" />
                    <span>3D Printing Lab, Grade 12</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Transform;