import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Brain, Zap, BarChart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Innovate = () => {
  const features = [
    {
      icon: <Brain className="h-12 w-12 text-primary" />,
      title: "Adaptive Learning Paths",
      description: "Our AI creates personalized learning journeys for each student based on their strengths, weaknesses, and learning pace."
    },
    {
      icon: <Zap className="h-12 w-12 text-secondary" />,
      title: "Real-time Assessment",
      description: "Instant feedback and assessment that adapts to student responses, providing deeper insights into understanding."
    },
    {
      icon: <BarChart className="h-12 w-12 text-orange-500" />,
      title: "Performance Analytics",
      description: "Comprehensive dashboards for teachers and administrators to track progress and identify areas for improvement."
    },
    {
      icon: <Users className="h-12 w-12 text-blue-500" />,
      title: "Collaborative Learning",
      description: "AI-powered group formation and project recommendations to enhance peer-to-peer learning experiences."
    }
  ];

  const benefits = [
    "Personalized learning paths for each student",
    "Real-time performance insights and analytics",
    "Dynamic content adaptation based on learning progress",
    "Automated assessment and feedback",
    "Teacher dashboards for progress tracking",
    "Integration with existing school systems",
    "Multilingual support for diverse classrooms",
    "Accessibility features for all learners"
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
              Intelligence-Powered Personalized Learning
            </motion.h1>
            <motion.p 
              className="text-xl max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              AI-powered software that adapts to each student's unique learning style, pace, and needs. 
              Real-time performance insights and intelligent recommendations guide every learner.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold">
                Request a Demo
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
                AI-Powered Learning Features
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Cutting-edge technology that transforms how students learn and teachers teach
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-modern text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <div className="flex justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-accent mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
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
                  Transform Education with AI
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our AI-powered platform goes beyond traditional learning management systems to 
                  create truly personalized educational experiences that adapt in real-time to 
                  each student's needs.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                    >
                      <span className="text-primary mr-3 mt-1">✓</span>
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
                      src="/ChatGPT Image Apr 30, 2025, 03_26_54 PM.png" 
                      alt="AI Learning Dashboard" 
                      className="h-full w-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
                Powered by Advanced Technology
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our platform leverages cutting-edge technologies to deliver exceptional learning experiences
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                className="bg-white p-8 rounded-lg shadow-modern text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-2xl font-bold text-primary">ML</div>
                </div>
                <h3 className="text-xl font-bold text-accent mb-4">Machine Learning</h3>
                <p className="text-muted-foreground">
                  Advanced algorithms that continuously learn from student interactions to improve personalization.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-8 rounded-lg shadow-modern text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-2xl font-bold text-secondary">NLP</div>
                </div>
                <h3 className="text-xl font-bold text-accent mb-4">Natural Language Processing</h3>
                <p className="text-muted-foreground">
                  Intelligent text analysis and generation for automated assessment and feedback.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-8 rounded-lg shadow-modern text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-2xl font-bold text-orange-500">CV</div>
                </div>
                <h3 className="text-xl font-bold text-accent mb-4">Computer Vision</h3>
                <p className="text-muted-foreground">
                  Image and video analysis for hands-on project assessment and safety monitoring.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Innovate;