import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { School, Calendar, Users, FileText, BarChart, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const Solutions = () => {
  const implementationSteps = [
    {
      step: "1",
      title: "Needs Assessment",
      description: "We evaluate your school's current infrastructure, curriculum, and goals to create a customized implementation plan."
    },
    {
      step: "2",
      title: "Solution Design",
      description: "Our experts design a tailored solution that aligns with your school's specific requirements and budget."
    },
    {
      step: "3",
      title: "Infrastructure Setup",
      description: "We install and configure all necessary hardware, software, and networking components for your labs."
    },
    {
      step: "4",
      title: "Teacher Training",
      description: "Comprehensive training programs for your teachers to ensure successful adoption of our solutions."
    },
    {
      step: "5",
      title: "Student Onboarding",
      description: "We help your students get started with hands-on learning experiences from day one."
    },
    {
      step: "6",
      title: "Ongoing Support",
      description: "Continuous technical support, curriculum updates, and performance monitoring to ensure long-term success."
    }
  ];

  const roiBenefits = [
    "85% increase in student engagement",
    "70% improvement in critical thinking skills",
    "60% boost in STEM subject performance",
    "40% reduction in teacher workload through automation",
    "30% increase in school enrollment due to enhanced reputation",
    "25% improvement in standardized test scores"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-[#0088a8] text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Complete School Implementation Solutions
            </motion.h1>
            <motion.p 
              className="text-xl max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Everything your school needs to transform education with our integrated ecosystem of 
              certified courses, AI software, and innovation labs.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold">
                Download Implementation Guide
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
                Our Implementation Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A structured approach to ensure successful transformation of your school
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden md:block"></div>
              
              <div className="space-y-12">
                {implementationSteps.map((item, index) => (
                  <motion.div
                    key={index}
                    className={`flex flex-col md:flex-row items-center ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <div className="md:w-1/2 mb-6 md:mb-0">
                      <div className="bg-white rounded-lg shadow-modern p-8 md:mx-8">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold mr-4">
                            {item.step}
                          </div>
                          <h3 className="text-xl font-bold text-accent">{item.title}</h3>
                        </div>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                    
                    <div className="md:w-1/2 flex justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        {index % 4 === 0 && <School className="h-8 w-8 text-primary" />}
                        {index % 4 === 1 && <FileText className="h-8 w-8 text-primary" />}
                        {index % 4 === 2 && <Users className="h-8 w-8 text-primary" />}
                        {index % 4 === 3 && <BarChart className="h-8 w-8 text-primary" />}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ROI Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">
                  Measurable Return on Investment
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our solutions deliver quantifiable benefits that impact your school's performance, 
                  reputation, and student outcomes.
                </p>
                <ul className="space-y-4">
                  {roiBenefits.map((benefit, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                    >
                      <Award className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-white rounded-lg shadow-modern p-8">
                  <div className="aspect-video bg-gradient-to-r from-primary to-[#0088a8] rounded-lg flex items-center justify-center">
                    <img 
                      src="/WhatsApp Image 2025-11-01 at 00.24.00.jpeg" 
                      alt="ROI Calculator" 
                      className="h-full w-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Package Comparison */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
                Solution Packages
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Flexible packages to suit schools of all sizes and requirements
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                className="bg-white rounded-lg shadow-modern p-8 border-t-4 border-blue-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-accent mb-2">Starter</h3>
                  <p className="text-muted-foreground">Single Pillar Integration</p>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-primary">₹3-5 Lakhs</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-muted-foreground">1 Innovation Station</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-muted-foreground">Basic teacher training</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-muted-foreground">6-month support</span>
                  </li>
                  <li className="flex items-start text-muted-foreground/50">
                    <span className="mr-2">✗</span>
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-start text-muted-foreground/50">
                    <span className="mr-2">✗</span>
                    <span>Curriculum customization</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Get Started</Button>
              </motion.div>

              <motion.div
                className="bg-white rounded-lg shadow-modern p-8 border-t-4 border-primary ring-2 ring-primary scale-105 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </span>
                </div>
                <div className="text-center mb-6 pt-4">
                  <h3 className="text-2xl font-bold text-accent mb-2">Growth</h3>
                  <p className="text-muted-foreground">Dual Pillar Integration</p>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-primary">₹6-10 Lakhs</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-muted-foreground">2 Innovation Stations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-muted-foreground">Full teacher training</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-muted-foreground">12-month support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-muted-foreground">Advanced analytics</span>
                  </li>
                  <li className="flex items-start text-muted-foreground/50">
                    <span className="mr-2">✗</span>
                    <span>Curriculum customization</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90">Get Started</Button>
              </motion.div>

              <motion.div
                className="bg-white rounded-lg shadow-modern p-8 border-t-4 border-orange-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-accent mb-2">Complete</h3>
                  <p className="text-muted-foreground">Full Ecosystem</p>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-primary">₹12-18 Lakhs</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-muted-foreground">All 4 Innovation Stations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-muted-foreground">Premium teacher training</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-muted-foreground">24-month support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-muted-foreground">Advanced analytics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-muted-foreground">Curriculum customization</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Get Started</Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Solutions;