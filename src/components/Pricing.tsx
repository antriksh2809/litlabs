import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const plans = [
    {
      name: "STARTER",
      description: "Single Pillar Integration",
      price: "₹3-5 Lakhs",
      features: [
        "1 Innovation Station",
        "Basic training",
        "6-month support"
      ],
      cta: "Get Started",
      badge: null,
      popular: false,
      image: "/WhatsApp Image 2025-11-01 at 00.32.32.jpeg"
    },
    {
      name: "GROWTH",
      description: "Dual Pillar Integration",
      price: "₹6-10 Lakhs",
      features: [
        "2 Innovation Stations",
        "Full training",
        "12-month support"
      ],
      cta: "Get Started",
      badge: "POPULAR",
      popular: true,
      image: "/WhatsApp Image 2025-11-01 at 00.24.00.jpeg"
    },
    {
      name: "COMPLETE",
      description: "Full Ecosystem",
      price: "₹12-18 Lakhs",
      features: [
        "All 4 Stations",
        "Premium training",
        "24-month support"
      ],
      cta: "Get Started",
      badge: "RECOMMENDED",
      popular: false,
      image: "/ChatGPT Image Apr 30, 2025, 03_26_54 PM.png"
    }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
            Choose Your Path to Innovation
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-lg shadow-modern p-8 relative ${
                plan.popular ? "ring-2 ring-primary scale-105" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="mb-4">
                <img 
                  src={plan.image} 
                  alt={plan.name} 
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className={`px-4 py-1 rounded-full text-sm font-bold ${
                    plan.popular ? "bg-primary text-white" : "bg-secondary text-white"
                  }`}>
                    {plan.badge}
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-accent mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="text-3xl font-bold text-primary">{plan.price}</div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full ${
                  plan.popular 
                    ? "bg-primary hover:bg-primary/90" 
                    : "bg-accent hover:bg-accent/90 text-white"
                }`}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;