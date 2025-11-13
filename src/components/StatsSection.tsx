import { Globe, School, Users, GraduationCap } from "lucide-react";

const stats = [
  {
    icon: Globe,
    number: "5,000+",
    label: "Students Impacted",
  },
  {
    icon: School,
    number: "50+",
    label: "Schools Reached",
  },
  {
    icon: Users,
    number: "200+",
    label: "Teachers Trained",
  },
  {
    icon: GraduationCap,
    number: "2,000+",
    label: "Students Certified",
  },
];

const StatsSection = () => {
  return (
    <section className="relative -mt-16 pb-16">
      <div className="container mx-auto px-4">
        <div className="bg-card rounded-3xl shadow-elegant p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center space-y-4 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <stat.icon className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-foreground">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground mt-2">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
