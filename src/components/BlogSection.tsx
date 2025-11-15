import { motion } from "framer-motion";
import { Calendar, User, Clock, ArrowRight, BookOpen, Lightbulb, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Implementing NEP 2020 through Hands-On STEM Learning",
      excerpt: "How our experiential learning approach aligns with the National Education Policy's vision for holistic education.",
      author: "Dr. Priya Sharma",
      date: "May 15, 2025",
      readTime: "5 min read",
      category: "Policy",
      image: "/WhatsApp Image 2025-11-01 at 00.24.00.jpeg"
    },
    {
      id: 2,
      title: "5 Classroom Projects That Spark Innovation",
      excerpt: "Engaging activities that combine creativity, technology, and problem-solving for students of all ages.",
      author: "Rajesh Kumar",
      date: "Apr 28, 2025",
      readTime: "7 min read",
      category: "Projects",
      image: "/WhatsApp Image 2025-11-01 at 00.32.32.jpeg"
    },
    {
      id: 3,
      title: "The Future of Teacher Training in STEM Education",
      excerpt: "Exploring new methodologies and technologies that empower educators to deliver impactful STEM lessons.",
      author: "Anjali Mehta",
      date: "Apr 12, 2025",
      readTime: "6 min read",
      category: "Education",
      image: "/WhatsApp Image 2025-11-01 at 00.32.33.jpeg"
    }
  ];

  const categories = [
    { name: "All", icon: <BookOpen className="h-4 w-4" /> },
    { name: "Policy", icon: <GraduationCap className="h-4 w-4" /> },
    { name: "Projects", icon: <Lightbulb className="h-4 w-4" /> },
    { name: "Education", icon: <User className="h-4 w-4" /> }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Resources & Insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest in STEM education, pedagogy, and innovation
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {categories.map((category, index) => (
            <Button
              key={category.name}
              variant={category.name === "All" ? "default" : "outline"}
              className="flex items-center gap-2"
              aria-label={`Filter by ${category.name} category`}
            >
              {category.icon}
              {category.name}
            </Button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="bg-card rounded-2xl border overflow-hidden shadow-sm hover:shadow-md transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Post Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={`Blog post: ${post.title} - ${post.excerpt}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Post Content */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="inline-flex items-center gap-2 text-xs px-3 py-1 bg-primary/10 text-primary rounded-full mb-3">
                  <BookOpen className="h-3 w-3" />
                  <span>{post.category}</span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-foreground hover:text-primary transition-colors">
                  {post.title}
                </h3>

                <p className="text-muted-foreground mb-4">
                  {post.excerpt}
                </p>

                {/* Post Meta */}
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Read More Button */}
                <Button variant="ghost" className="p-0 h-auto font-medium group" aria-label={`Read more about ${post.title}`}>
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button size="lg" className="bg-[#3BBBF0] hover:bg-[#3BBBF0]/90 text-white px-8" aria-label="View all blog posts">
            View All Resources
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;