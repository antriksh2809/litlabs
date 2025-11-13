import { Award, Trophy, Star } from "lucide-react";

const awards = [
  {
    title: "GES Awards at Bett Event",
    category: "Emerging Markets",
    icon: Trophy,
  },
  {
    title: "Innovation in Education",
    category: "EdTech Excellence",
    icon: Award,
  },
  {
    title: "Best STEM Platform",
    category: "K-12 Education",
    icon: Star,
  },
  {
    title: "Impact Leadership Award",
    category: "Global Recognition",
    icon: Trophy,
  },
];

const AwardsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            Awards and Recognitions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leading the Way, our impact is recognized globally with Prestigious Awards and Accolades.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 text-center space-y-4 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <award.icon className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{award.title}</h3>
                <p className="text-muted-foreground">{award.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;