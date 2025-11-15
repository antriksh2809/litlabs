import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Users, Target, Lightbulb, Heart, Award, BookOpen, Users2, Globe } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Founder & CEO",
      image: "/WhatsApp Image 2025-11-01 at 00.24.00.jpeg",
      bio: "Former NASA engineer with 15+ years in STEM education. Passionate about making technology accessible to all students."
    },
    {
      id: 2,
      name: "Prof. Raj Patel",
      role: "Chief Innovation Officer",
      image: "/WhatsApp Image 2025-11-01 at 00.32.32.jpeg",
      bio: "IIT Bombay graduate with expertise in AI and robotics. Leads our curriculum development team."
    },
    {
      id: 3,
      name: "Ms. Emily Chen",
      role: "Head of Education",
      image: "/WhatsApp Image 2025-11-01 at 00.32.33.jpeg",
      bio: "Harvard Graduate School of Education alumna. Specializes in experiential learning methodologies."
    },
    {
      id: 4,
      name: "Mr. David Kumar",
      role: "Director of Partnerships",
      image: "/WhatsApp Image 2025-10-28 at 21.10.23.jpeg",
      bio: "Former school administrator with deep understanding of NEP 2020 implementation challenges."
    }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Vision-Driven",
      description: "We're committed to transforming education through innovative technology solutions."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Innovation First",
      description: "Constantly pushing boundaries to deliver cutting-edge learning experiences."
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Student-Centric",
      description: "Every solution we create puts students' learning outcomes at the center."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Community Focused",
      description: "Building strong partnerships with educators, schools, and communities."
    }
  ];

  const stats = [
    { number: "2.5M+", label: "Students Impacted" },
    { number: "500+", label: "Schools Partnered" },
    { number: "50+", label: "Countries Reached" },
    { number: "100+", label: "Awards Won" }
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
              About L.I.T. Labs
            </motion.h1>
            <motion.p 
              className="text-xl max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Pioneering the future of education with cutting-edge technology and innovative learning solutions.
            </motion.p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-accent mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-6">
                  Founded in 2015 by a team of passionate educators and technologists, L.I.T. Labs began with a simple 
                  mission: to make high-quality STEM education accessible to every student, regardless of their background 
                  or geographic location.
                </p>
                <p className="text-muted-foreground mb-6">
                  What started as a small initiative in a garage has now grown into a global movement, impacting over 
                  2.5 million students across 500+ schools in 50+ countries. Our innovative approach combines hands-on 
                  learning with cutting-edge technology to create truly transformative educational experiences.
                </p>
                <p className="text-muted-foreground">
                  Today, we continue to push boundaries with our AI-powered learning platform, state-of-the-art 
                  innovation labs, and NEP 2020-aligned curriculum, ensuring that every student is equipped with the 
                  skills needed to thrive in the 21st century.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 h-full flex items-center justify-center">
                  <img 
                    src="/Learn Innovate Transform.png" 
                    alt="L.I.T. Labs Team" 
                    className="rounded-xl shadow-lg w-full h-auto"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">Our Core Values</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The principles that guide everything we do at L.I.T. Labs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-modern border border-muted/50 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-primary/10 rounded-full p-3 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-accent mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">Meet Our Team</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The passionate individuals driving innovation at L.I.T. Labs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  className="bg-white rounded-xl overflow-hidden shadow-modern border border-muted/50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-accent mb-1">{member.name}</h3>
                    <p className="text-primary mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 h-full flex items-center justify-center">
                  <img 
                    src="/WhatsApp Image 2025-11-01 at 00.24.00.jpeg" 
                    alt="Our Mission" 
                    className="rounded-xl shadow-lg w-full h-auto"
                  />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-accent mb-6">Our Mission</h2>
                <p className="text-muted-foreground mb-6">
                  At L.I.T. Labs, our mission is to democratize access to high-quality STEM education by creating 
                  immersive, technology-driven learning experiences that prepare students for the challenges and 
                  opportunities of the 21st century.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary/10 rounded-full p-2 mr-4">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-accent mb-1">Experiential Learning</h3>
                      <p className="text-muted-foreground text-sm">
                        Hands-on experiences that make learning engaging and memorable
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 rounded-full p-2 mr-4">
                      <Users2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-accent mb-1">Inclusive Education</h3>
                      <p className="text-muted-foreground text-sm">
                        Ensuring every student has access to cutting-edge learning opportunities
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 rounded-full p-2 mr-4">
                      <Globe className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-accent mb-1">Global Impact</h3>
                      <p className="text-muted-foreground text-sm">
                        Expanding our reach to transform education worldwide
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;