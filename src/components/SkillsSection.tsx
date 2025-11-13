import { Code, Brain, Car, Bot, Glasses, Wifi, Cpu, Cog } from "lucide-react";

const skills = [
  {
    title: "Coding - Graphical & Python",
    icon: Code,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
  },
  {
    title: "Artificial Intelligence",
    icon: Brain,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
  },
  {
    title: "Machine Learning",
    icon: Car,
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=300&fit=crop",
  },
  {
    title: "Robotics",
    icon: Bot,
    image: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?w=400&h=300&fit=crop",
  },
  {
    title: "AR & VR Tech",
    icon: Glasses,
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=400&h=300&fit=crop",
  },
  {
    title: "Internet of Things (IoT)",
    icon: Wifi,
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=400&h=300&fit=crop",
  },
  {
    title: "Biomimetic Robot",
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
  },
  {
    title: "Advanced Robotics",
    icon: Cog,
    image: "https://images.unsplash.com/photo-1563207153-f403bf289096?w=400&h=300&fit=crop",
  },
];

const SkillsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            Empowering Kids with the Right Future Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            With the hands-on approach to AI, Coding, Robotics, and STEM, we cultivate a generation 
            of innovators by providing the 21st-century skills to unleash the true potential of young minds.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <img
                src={skill.image}
                alt={skill.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-end p-4 text-white">
                <skill.icon className="h-8 w-8 mb-2 group-hover:scale-110 transition-transform" />
                <h3 className="text-sm md:text-base font-semibold text-center">
                  {skill.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;