import { Book, Code, Trophy, Users, Shapes, GraduationCap, Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useFeaturedProducts } from "@/hooks/useProducts";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const staticProducts = [
  {
    title: "Educational Kits",
    description: "Hands-on learning kits for AI, Robotics, and IoT projects",
    icon: Shapes,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
  },
  {
    title: "PictoBlox Platform",
    description: "AI-powered graphical programming software for K-12 students",
    icon: Code,
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&h=300&fit=crop",
  },
  {
    title: "Curriculum & Books",
    description: "Comprehensive curriculum for grades 3-12 covering AI, coding, and robotics",
    icon: Book,
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=300&fit=crop",
  },
  {
    title: "Teacher Training",
    description: "Professional development programs for educators",
    icon: Users,
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop",
  },
  {
    title: "Codeavour Competition",
    description: "International AI and Robotics competition for students",
    icon: Trophy,
    image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=400&h=300&fit=crop",
  },
  {
    title: "Lab Ecosystem",
    description: "Complete AI & Robotics Lab setup for schools",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
  },
];

const ProductsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const { data: featuredProducts, isLoading, error } = useFeaturedProducts(6);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          className="text-center mb-12 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            A Complete Platform for AI and Robotics Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            L.I.T. LABS is an innovative tech-education ecosystem that is highly recommended by teachers 
            and embraced by students for classroom learning.
          </p>
        </motion.div>

        {/* Featured Products from API */}
        {isLoading && (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <span className="ml-2 text-muted-foreground">Loading featured products...</span>
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Unable to load featured products. Showing static content.</p>
          </div>
        )}

        {featuredProducts && featuredProducts.length > 0 && (
          <motion.div 
            className="mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Featured Products</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.map((product, index) => (
                <motion.div key={product._id} variants={itemVariants}>
                  <Card className="overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 card-modern">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={product.images[0] || "https://via.placeholder.com/400x300/4F46E5/FFFFFF?text=Product"} 
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                            {product.category}
                          </span>
                          <div className="flex items-center gap-1">
                            <span className="text-sm font-medium">{product.rating}</span>
                            <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold">{product.name}</h3>
                        <p className="text-muted-foreground text-sm line-clamp-2">{product.shortDescription}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-bold text-primary">₹{product.price}</span>
                            {product.originalPrice && (
                              <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice}</span>
                            )}
                          </div>
                          <Button size="sm" className="btn-modern">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Static Products */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Our Platform Features</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {staticProducts.map((product, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 card-modern">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <product.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                        <p className="text-muted-foreground">{product.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;