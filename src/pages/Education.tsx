import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, FileText, Lightbulb, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const educationSections = [
  {
    title: "Courses",
    description: "Class-wise curriculum from Grade 1-12 aligned with NEP",
    icon: <BookOpen className="h-8 w-8" />,
    href: "/education/courses",
    features: ["Class 1-2: Basics", "Class 3-5: Foundations", "Class 6-8: Intermediate", "Class 9-12: Advanced"],
  },
  {
    title: "Documentation",
    description: "Product manuals, quick start guides & technical docs",
    icon: <FileText className="h-8 w-8" />,
    href: "/education/docs",
    features: ["Product Manuals", "Quick Start Guides", "Software Setup", "Troubleshooting"],
  },
  {
    title: "Tutorials",
    description: "Step-by-step project guides and learning resources",
    icon: <Lightbulb className="h-8 w-8" />,
    href: "/education/tutorials",
    features: ["Beginner Projects", "AI & ML Examples", "IoT Applications", "Robotics Challenges"],
  },
];

export default function Education() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#3BBBF0]/10 to-[#FF822E]/10 py-16">
          <div className="container mx-auto px-4 max-w-7xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Education Hub
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive learning resources for students and educators—from structured courses to hands-on tutorials
            </p>
          </div>
        </section>

        {/* Main Sections */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-3 gap-8">
              {educationSections.map((section, index) => (
                <motion.a
                  key={section.title}
                  href={section.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group rounded-2xl border bg-card p-8 hover-lift shadow-modern"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#3BBBF0]/10 to-[#FF822E]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <div className="text-[#3BBBF0]">{section.icon}</div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-[#3BBBF0] transition-colors">
                    {section.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6">
                    {section.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {section.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#3BBBF0] mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center text-[#3BBBF0] font-medium group-hover:translate-x-2 transition-transform">
                    Explore {section.title}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-[#3BBBF0] to-[#FF822E] text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              Need Help Getting Started?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Our team is ready to guide you through our education resources and curriculum
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-[#3BBBF0] font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
