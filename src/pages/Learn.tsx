import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Download, BookOpen, Users, Award, Clock, Calendar, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Learn = () => {
  const courses = [
    {
      id: 1,
      title: "Robotics & IoT Fundamentals",
      duration: "8 weeks",
      level: "Beginner",
      students: "1,250+",
      rating: 4.8,
      image: "/WhatsApp Image 2025-06-19 at 14.02.20.jpg",
      description: "Learn the basics of robotics and Internet of Things with hands-on projects."
    },
    {
      id: 2,
      title: "AI & Machine Learning Essentials",
      duration: "10 weeks",
      level: "Intermediate",
      students: "980+",
      rating: 4.9,
      image: "/WhatsApp Image 2025-06-19 at 14.02.19.jpg",
      description: "Dive into artificial intelligence and machine learning concepts with practical applications."
    },
    {
      id: 3,
      title: "Drones & Aeromodelling Mastery",
      duration: "12 weeks",
      level: "Advanced",
      students: "750+",
      rating: 4.7,
      image: "/WhatsApp Image 2025-06-19 at 14.02.18.jpg",
      description: "Master drone technology and aeromodelling with real-world projects."
    },
    {
      id: 4,
      title: "3D Printing & Prototyping",
      duration: "6 weeks",
      level: "Beginner",
      students: "1,100+",
      rating: 4.6,
      image: "/WhatsApp Image 2025-06-19 at 14.02.17.jpg",
      description: "Learn 3D design and printing to bring your ideas to life."
    }
  ];

  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Certified Curriculum",
      description: "Industry-recognized courses aligned with NEP 2020 and NCF 2023 guidelines"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Expert Instructors",
      description: "Learn from industry professionals with real-world experience"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Certification",
      description: "Earn certificates upon course completion to boost your career"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Flexible Learning",
      description: "Self-paced learning options with lifetime access to materials"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-[#0088a8] text-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Learn 21st Century Skills
                </h1>
                <p className="text-xl mb-8 text-foreground/90">
                  Industry-certified courses taught by experts. Available online & offline. 
                  Curriculum aligned with NEP 2020, NCF 2023, CBSE, ICSE.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    className="gap-2 bg-white hover:bg-gray-100 text-primary font-bold"
                    onClick={() => window.open("https://drive.google.com/drive/folders/1IW5wMGqhH7WhapZWU-Ltdhyn7gUgYWpd?usp=drive_link", "_blank")}
                  >
                    <Download className="h-4 w-4" />
                    Download Brochure
                  </Button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="bg-white/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <Calendar className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold">50+</h3>
                      <p className="text-white/80">Courses</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-white/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <Users className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold">2.5M+</h3>
                      <p className="text-white/80">Students</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-white/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <Award className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold">100%</h3>
                      <p className="text-white/80">Certified</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-white/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <FileText className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold">24/7</h3>
                      <p className="text-white/80">Support</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
                Why Learn with L.I.T. Labs?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our unique approach combines theoretical knowledge with hands-on experience
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-modern border border-muted/50 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-primary/10 rounded-full p-3 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-accent mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Courses */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
                Our Popular Courses
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore our most sought-after programs designed for the future
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {courses.map((course, index) => (
                <motion.div
                  key={course.id}
                  className="bg-white rounded-xl overflow-hidden shadow-modern border border-muted/50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-accent">{course.title}</h3>
                      <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full">
                        {course.level}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">{course.description}</p>
                    <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {course.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {course.students}
                      </div>
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Enroll Now
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-primary to-[#0088a8] rounded-2xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Learning Journey?
              </h2>
              <p className="text-xl mb-8 text-foreground/90 max-w-3xl mx-auto">
                Join thousands of students who have transformed their careers with our courses
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  size="lg" 
                  className="gap-2 bg-white hover:bg-gray-100 text-primary font-bold"
                  onClick={() => window.open("https://drive.google.com/drive/folders/1IW5wMGqhH7WhapZWU-Ltdhyn7gUgYWpd?usp=drive_link", "_blank")}
                >
                  <Download className="h-4 w-4" />
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Learn;