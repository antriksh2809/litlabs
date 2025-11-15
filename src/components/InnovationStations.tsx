import { motion } from "framer-motion";
import { Bot, Cpu, Navigation, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

const InnovationStations = () => {
  const stations = [
    {
      id: 1,
      title: "Robotics & IoT Station",
      description: "Hands-on learning with programmable robots and IoT devices",
      icon: <Bot className="h-8 w-8" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "AI & Machine Learning Station",
      description: "Explore artificial intelligence with visual programming",
      icon: <Cpu className="h-8 w-8" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      title: "Drones & Aviation Station",
      description: "Learn aerodynamics and drone programming",
      icon: <Navigation className="h-8 w-8" />,
      color: "from-amber-500 to-orange-500",
    },
    {
      id: 4,
      title: "3D Printing & Design Station",
      description: "Design and prototype innovative solutions",
      icon: <Printer className="h-8 w-8" />,
      color: "from-green-500 to-teal-500",
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background" id="innovation-stations">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Innovation Stations
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hands-on learning experiences in cutting-edge technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stations.map((station, index) => (
            <motion.div
              key={station.id}
              className="bg-card rounded-2xl border shadow-sm overflow-hidden hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className={`bg-gradient-to-r ${station.color} p-6 text-white`}>
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    {station.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{station.title}</h3>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-foreground/90 mb-6">{station.description}</p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnovationStations;