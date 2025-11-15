import { motion } from "framer-motion";
import { Bot, Cpu, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    id: 1,
    title: "AI & Robotics Labs",
    description: "Complete lab solutions with curriculum, training, and ongoing support for schools.",
    icon: <Bot className="h-8 w-8" />,
    features: ["Complete Lab Setup", "Class-wise Curriculum", "Teacher Training"],
    cta: "Learn More",
    ctaLink: "/programs/ai-robotics-lab",
  },
  {
    id: 2,
    title: "STEM Kits",
    description: "Plug-and-play kits for hands-on learning in AI, Robotics, and IoT.",
    icon: <Cpu className="h-8 w-8" />,
    features: ["70+ Components", "100+ Projects", "Block Coding"],
    cta: "View Kits",
    ctaLink: "/products",
  },
  {
    id: 3,
    title: "Teacher Training",
    description: "NEP-aligned professional development for educators.",
    icon: <Users className="h-8 w-8" />,
    features: ["Workshops", "Certification", "Ongoing Support"],
    cta: "See Programs",
    ctaLink: "/workshops",
  },
  {
    id: 4,
    title: "Curriculum Resources",
    description: "Comprehensive learning materials for all grade levels.",
    icon: <BookOpen className="h-8 w-8" />,
    features: ["Lesson Plans", "Assessments", "Project Guides"],
    cta: "Explore Resources",
    ctaLink: "/education",
  },
];

export default function Solutions() {
  return (
    <section className="py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive STEM Education Platform
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Everything schools need to implement cutting-edge technology education
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-card rounded-2xl border p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <div className="text-primary">{solution.icon}</div>
              </div>

              <h3 className="font-bold text-xl mb-3 text-foreground">
                {solution.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4">
                {solution.description}
              </p>

              <ul className="space-y-2 mb-6">
                {solution.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant="outline" 
                size="sm" 
                className="w-full"
                onClick={() => window.location.href = solution.ctaLink}
              >
                {solution.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}