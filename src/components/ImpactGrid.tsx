import { motion } from "framer-motion";
import { Camera, Users, Award, GraduationCap, Lightbulb, Trophy } from "lucide-react";

interface ImpactItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  image?: string;
  category: string;
}

const impactItems: ImpactItem[] = [
  {
    id: 1,
    title: "National Innovation Challenge 2024",
    description: "Over 500 students participated in our annual robotics competition, showcasing cutting-edge AI projects.",
    icon: <Trophy className="h-6 w-6" />,
    category: "Events",
  },
  {
    id: 2,
    title: "School Lab Setup - Delhi Public School",
    description: "Successfully implemented a complete AI & Robotics lab serving 1000+ students.",
    icon: <GraduationCap className="h-6 w-6" />,
    category: "Case Study",
  },
  {
    id: 3,
    title: "Teacher Training Workshop",
    description: "Conducted intensive 5-day training for 200+ educators across 50 schools.",
    icon: <Users className="h-6 w-6" />,
    category: "Training",
  },
  {
    id: 4,
    title: "Student Innovation Showcase",
    description: "Amazing projects created by students using our AI and robotics platform.",
    icon: <Lightbulb className="h-6 w-6" />,
    category: "Gallery",
  },
  {
    id: 5,
    title: "Award-Winning Curriculum",
    description: "Our educational content recognized by leading education boards worldwide.",
    icon: <Award className="h-6 w-6" />,
    category: "Recognition",
  },
  {
    id: 6,
    title: "Community Workshops",
    description: "Free coding and robotics workshops reaching underserved communities.",
    icon: <Camera className="h-6 w-6" />,
    category: "Social Impact",
  },
];

export default function ImpactGrid() {
  return (
    <section className="bg-white dark:bg-background py-16">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Transforming Young Minds into Innovators
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Empowering the next generation with cutting-edge AI and Robotics education
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {impactItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-2xl overflow-hidden border bg-card hover-lift shadow-modern"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/90 dark:bg-gray-800/90 text-foreground">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {item.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center mt-4 text-sm text-primary hover:underline font-medium"
                >
                  Learn more →
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            View All Impact Stories
          </motion.button>
        </div>
      </div>
    </section>
  );
}
