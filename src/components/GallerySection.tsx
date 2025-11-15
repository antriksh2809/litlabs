import { motion } from "framer-motion";
import { Award, Users, School, Trophy, Calendar } from "lucide-react";

const GallerySection = () => {
  const achievements = [
    {
      id: 1,
      title: "ISO 9001:2015 Certified",
      description: "Quality Management Systems Certification",
      icon: <Award className="h-8 w-8" />,
      color: "bg-blue-100 text-blue-800"
    },
    {
      id: 2,
      title: "AICTE Approved",
      description: "All India Council for Technical Education",
      icon: <Trophy className="h-8 w-8" />,
      color: "bg-green-100 text-green-800"
    },
    {
      id: 3,
      title: "CBSE Partner",
      description: "Official partner for STEM education initiatives",
      icon: <School className="h-8 w-8" />,
      color: "bg-purple-100 text-purple-800"
    },
    {
      id: 4,
      title: "500+ Schools",
      description: "Trusted by educational institutions across India",
      icon: <Users className="h-8 w-8" />,
      color: "bg-amber-100 text-amber-800"
    }
  ];

  const galleryImages = [
    { id: 1, src: "/WhatsApp Image 2025-11-01 at 00.24.00.jpeg", alt: "Students working on robotics project in a classroom" },
    { id: 2, src: "/WhatsApp Image 2025-11-01 at 00.32.32.jpeg", alt: "AI workshop with students and teachers" },
    { id: 3, src: "/WhatsApp Image 2025-11-01 at 00.32.33.jpeg", alt: "Teachers training session on STEM education" },
    { id: 4, src: "/WhatsApp Image 2025-10-28 at 21.10.23.jpeg", alt: "Science exhibition showcasing student projects" },
    { id: 5, src: "/Learn Innovate Transform.png", alt: "Innovation lab setup with modern equipment" },
    { id: 6, src: "/WhatsApp Image 2025-11-01 at 00.24.00.jpeg", alt: "Students presenting their STEM projects" }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Achievements Showcase */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Achievements & Recognition
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            Awards, certifications, and partnerships that validate our commitment to excellence
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                className="bg-card rounded-2xl p-6 border shadow-sm hover:shadow-md transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 rounded-xl ${achievement.color} flex items-center justify-center mb-4 mx-auto`}>
                  {achievement.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Event Gallery */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Innovation in Action
              </h3>
              <p className="text-muted-foreground">
                Moments from our events, competitions, and classroom transformations
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>2025 Gallery</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partnership Logos */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-foreground">
            Trusted by Leading Educational Institutions
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {[
              { name: "DBSE", logo: "D", alt: "DBSE educational board" },
              { name: "Kendriya Vidyalaya", logo: "KV", alt: "Kendriya Vidyalaya school system" },
              { name: "Uttarakhand Board", logo: "UB", alt: "Uttarakhand State Board" },
              { name: "Jawahar Navodaya Vidyalaya", logo: "JNV", alt: "Jawahar Navodaya Vidyalaya" },
              { name: "CBSE", logo: "C", alt: "Central Board of Secondary Education" },
              { name: "ICSE", logo: "I", alt: "Indian Certificate of Secondary Education" }
            ].map((partner, index) => (
              <motion.div
                key={partner.name}
                className="w-32 h-20 bg-white rounded-xl shadow-lg flex items-center justify-center px-4 hover:shadow-xl transition-all duration-300 border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <span className="text-2xl font-bold text-gray-800" aria-label={partner.alt}>
                  {partner.logo}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;