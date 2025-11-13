import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Loader2, Users, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useFeaturedPrograms } from "@/hooks/usePrograms";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const staticPrograms = [
  {
    title: "AI & Robotics Lab for Schools",
    stat: "1,000+ Labs Established",
    description: "L.I.T. LABS AI and Robotics Labs are upgrading ICT labs in schools by integrating modern ICT, coding, AI, and robotics education into the curriculum for classes 3-12.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=500&fit=crop",
  },
  {
    title: "Atal Tinkering Lab in Schools",
    stat: "1,000+ ATL Labs Established",
    description: "L.I.T. LABS offers comprehensive end-to-end assistance in establishing and running Atal Tinkering Labs in schools, providing students with a stimulating environment for exploring STEM.",
    image: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=800&h=500&fit=crop",
  },
  {
    title: "Impact Programs",
    stat: "50+ Programs Executed",
    description: "L.I.T. LABS provides tech, program management, and execution support to help CSR, NGOs, and governments execute impactful programs at a large scale, impacting 500,000+ students.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=500&fit=crop",
  },
];

const ProgramsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const { data: featuredPrograms, isLoading, error } = useFeaturedPrograms(3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          className="text-center mb-12 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            Upgrading Education with Forward-Thinking Initiatives
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            L.I.T. LABS has tailored its products, curricula, and services to meet the needs of schools, 
            government, corporate social responsibility, and impact programs.
          </p>
        </motion.div>

        {/* Featured Programs from API */}
        {isLoading && (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <span className="ml-2 text-muted-foreground">Loading featured programs...</span>
          </div>
        )}

        {featuredPrograms && featuredPrograms.length > 0 && (
          <motion.div 
            className="mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <h3 className="text-2xl font-bold text-center mb-12 text-foreground">Featured Programs</h3>
            <div className="space-y-16">
              {featuredPrograms.map((program, index) => (
                <motion.div 
                  key={program._id}
                  variants={itemVariants}
                  className={`grid md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                    <div className="aspect-video rounded-2xl overflow-hidden shadow-elegant card-modern">
                      <img 
                        src={program.images[0] || "https://via.placeholder.com/800x500/7C3AED/FFFFFF?text=Program"} 
                        alt={program.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </div>
                  
                  <div className={`space-y-4 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                        {program.category}
                      </span>
                      <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm font-medium rounded-full">
                        {program.level}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                      {program.title}
                    </h3>
                    
                    <p className="text-lg text-muted-foreground">
                      {program.shortDescription}
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{program.duration.weeks} weeks</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>{program.enrolledStudents}/{program.maxStudents} students</span>
                        </div>
                        {program.location && (
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{program.isOnline ? 'Online' : program.location}</span>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-primary">₹{program.price}</span>
                          {program.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">₹{program.originalPrice}</span>
                          )}
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-sm font-medium">{program.rating}</span>
                          <span className="text-xs text-muted-foreground">({program.reviewCount})</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 pt-4">
                      <Button variant="secondary" className="gap-2 btn-modern">
                        <Play className="h-4 w-4" />
                        Watch Video
                      </Button>
                      <Button variant="outline" className="gap-2 btn-modern">
                        Enroll Now
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Static Programs */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-foreground">Our Platform Initiatives</h3>
          <div className="space-y-16">
            {staticPrograms.map((program, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="aspect-video rounded-2xl overflow-hidden shadow-elegant card-modern">
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
                
                <div className={`space-y-4 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                    <span className="text-primary font-semibold">{program.stat}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                    {program.title}
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    {program.description}
                  </p>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <Button variant="secondary" className="gap-2 btn-modern">
                      <Play className="h-4 w-4" />
                      Watch Video
                    </Button>
                    <Button variant="outline" className="gap-2 btn-modern">
                      Explore More
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsSection;