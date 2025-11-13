import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Bot, Wrench, Users, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const programs = [
  {
    id: 1,
    title: "AI & Robotics Lab",
    slug: "ai-robotics-lab",
    icon: <Bot className="h-8 w-8" />,
    summary: "Turn classrooms into innovation hubs with kits, curriculum, and training",
    features: [
      "Complete lab infrastructure setup",
      "100+ projects curriculum",
      "Teacher training & certification",
      "Ongoing technical support",
      "NEP-aligned lesson plans",
      "Student assessment tools"
    ],
    outcomes: ["Hands-on project experience", "Critical thinking development", "NEP curriculum alignment"],
  },
  {
    id: 2,
    title: "Atal Tinkering Lab",
    slug: "atl",
    icon: <Wrench className="h-8 w-8" />,
    summary: "ATL-compliant solution with complete equipment, training & mentorship",
    features: [
      "ATL-compliant equipment",
      "DIY kits & materials",
      "Mentor training programs",
      "Competition support",
      "Regular workshops",
      "Innovation tracking"
    ],
    outcomes: ["Government compliance", "Student innovation", "National recognition"],
    hasBooklet: true,
  },
  {
    id: 3,
    title: "Implementation Support",
    slug: "implementation",
    icon: <Users className="h-8 w-8" />,
    summary: "End-to-end support from setup to execution",
    features: [
      "Teacher training workshops",
      "Curriculum integration",
      "Annual maintenance contract",
      "Regular upskilling sessions",
      "Technical helpdesk",
      "Performance analytics"
    ],
    outcomes: ["Smooth deployment", "Teacher confidence", "Sustained engagement"],
  },
];

export default function Programs() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#3BBBF0]/10 to-[#FF822E]/10 py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                School Programs
              </h1>
              <p className="text-lg text-muted-foreground">
                Plug-and-play learning ecosystems for K-12 schools—complete labs, training, and ongoing support
              </p>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-16" id="atl">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {programs.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl border bg-card p-8 hover-lift shadow-modern"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#3BBBF0]/10 to-[#FF822E]/10 flex items-center justify-center mb-6">
                    <div className="text-[#3BBBF0]">{program.icon}</div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-3">{program.title}</h3>
                  <p className="text-muted-foreground mb-6">{program.summary}</p>

                  <div className="space-y-3 mb-6">
                    {program.features.slice(0, 4).map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#3BBBF0] flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={program.hasBooklet ? "/labs" : `/programs/${program.slug}`}
                    className="inline-flex items-center text-[#3BBBF0] font-medium hover:gap-3 transition-all"
                  >
                    {program.hasBooklet ? "View Digital Booklet" : "Learn More"}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Comparison Table */}
            <div className="rounded-2xl border bg-card overflow-hidden">
              <div className="p-6 border-b bg-gradient-to-r from-[#3BBBF0]/5 to-[#FF822E]/5">
                <h2 className="text-2xl font-bold">Program Comparison</h2>
                <p className="text-muted-foreground mt-1">Choose the right solution for your school</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-semibold">Feature</th>
                      <th className="text-center p-4 font-semibold">AI & Robotics Lab</th>
                      <th className="text-center p-4 font-semibold">Atal Tinkering Lab</th>
                      <th className="text-center p-4 font-semibold">Implementation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4">Infrastructure Setup</td>
                      <td className="text-center p-4">✓</td>
                      <td className="text-center p-4">✓</td>
                      <td className="text-center p-4">Support</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">Teacher Training</td>
                      <td className="text-center p-4">✓</td>
                      <td className="text-center p-4">✓</td>
                      <td className="text-center p-4">✓</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">Curriculum</td>
                      <td className="text-center p-4">✓</td>
                      <td className="text-center p-4">Basic</td>
                      <td className="text-center p-4">Integration</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">Annual Support</td>
                      <td className="text-center p-4">Optional</td>
                      <td className="text-center p-4">Optional</td>
                      <td className="text-center p-4">✓</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-[#3BBBF0] to-[#FF822E] text-white" id="quote">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your School?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Get a customized quote for your institution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#3BBBF0] hover:bg-gray-100">
                Get a Quote
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Schedule Demo
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
