import { motion } from "framer-motion";
import { Bot, Cpu, Users, BookOpen, Wrench, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Solution {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  cta: string;
  ctaLink: string;
  image: string; // Added image property
}

const solutions: Solution[] = [
  {
    id: 1,
    title: "AI & Robotics Lab for Schools",
    description: "Upgrade ICT labs with modern AI, Coding, and Robotics; get class-wise curriculum, teacher training, and ongoing support.",
    icon: <Bot className="h-8 w-8" />,
    features: ["Complete Lab Setup", "Class-wise Curriculum", "Teacher Training", "Ongoing Support"],
    cta: "Explore More →",
    ctaLink: "/programs/ai-robotics-lab",
    image: "/WhatsApp Image 2025-10-28 at 21.10.23.jpeg", // Updated to use public path
  },
  {
    id: 2,
    title: "L.I.T. AI Tinker Kit",
    description: "70+ components; block-coding; teacher-ready manuals; 100+ robotics & IoT projects—plug-and-play.",
    icon: <Cpu className="h-8 w-8" />,
    features: [
      "70+ components; block-coding; teacher-ready manuals",
      "100+ robotics & IoT projects; plug-and-play",
      "Build facial recognition, smart locks, IoT tracking"
    ],
    cta: "View Kit →",
    ctaLink: "/products/ai-tinker-kit",
    image: "/WhatsApp Image 2025-11-01 at 00.24.00.jpeg", // Updated to use public path
  },
  {
    id: 3,
    title: "L.I.T. AI Innovate Kit",
    description: "Raspberry Pi 5 + camera; ML/CV-ready; ideal for classroom demos & student challenges; guided manuals included.",
    icon: <Cpu className="h-8 w-8" />,
    features: [
      "Raspberry Pi 5 + camera module",
      "ML/CV-ready; classroom demos & challenges",
      "Guided manuals; scalable learning"
    ],
    cta: "View Kit →",
    ctaLink: "/products/ai-innovate-kit",
    image: "/WhatsApp Image 2025-11-01 at 00.32.33.jpeg", // Updated to use local image
  },
  {
    id: 4,
    title: "Workshops & Teacher Training",
    description: "Student bootcamps (1-day/3-day/5-day) and teacher training in AI, IoT, Robotics, 3D Printing—NEP-aligned.",
    icon: <Users className="h-8 w-8" />,
    features: ["Student Bootcamps (1/3/5-day)", "Teacher Training", "NEP-aligned", "Certification Programs"],
    cta: "See Workshops →",
    ctaLink: "/workshops",
    image: "/WhatsApp Image 2025-11-01 at 00.32.32.jpeg", // Updated to use local image
  },

];

export default function Solutions() {
  return (
    <section className="bg-neutral-50 dark:bg-gray-900 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            A Complete Platform for AI & Robotics Education
          </h2>
          <p className="mt-4 text-muted-foreground max-w-3xl mx-auto text-lg">
            From plug-and-play kits and innovation labs to workshops and teacher training, we deliver the full stack for schools to integrate future-tech learning—sustainably and at any scale.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="rounded-2xl border bg-white dark:bg-card p-6 hover-lift shadow-modern group relative overflow-hidden"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={solution.image} 
                  alt={solution.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-900/90 dark:to-gray-900/70"></div>
              </div>
              
              {/* Content with higher z-index to appear above background */}
              <div className="relative z-10">
                {/* Icon */}
                <motion.div 
                  className="h-16 w-16 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <div className="text-primary">{solution.icon}</div>
                </motion.div>

                {/* Content */}
                <motion.h3 
                  className="font-bold text-xl mb-2 text-foreground"
                  whileHover={{ x: 5 }}
                >
                  {solution.title}
                </motion.h3>
                <motion.p 
                  className="text-sm text-foreground font-medium mb-4"
                  whileHover={{ x: 3 }}
                >
                  {solution.description}
                </motion.p>

                {/* Features */}
                <ul className="space-y-1.5 mb-6">
                  {solution.features.map((feature, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-center text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.05 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
                      <span className="text-foreground font-medium">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.a
                  href={solution.ctaLink}
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 group-hover:translate-x-1 transition-transform"
                  whileHover={{ x: 5 }}
                >
                  {solution.cta} →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Button
              size="lg"
              className="rounded-full bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))]/90 text-white px-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Book a Demo
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}