import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "LITLABS transformed how we teach. Our students are now inventors, not just learners.",
      author: "Principal",
      position: "Jawahar Navodaya Vidyalaya",
      location: "Jharkhand, India",
      metrics: "From 40% to 92% student engagement",
      image: "/WhatsApp Image 2025-10-28 at 21.10.23.jpeg"
    },
    {
      quote: "The Train-the-Trainer program empowered my entire team. We went from tech-anxious to tech-confident in weeks.",
      author: "Innovation Coordinator",
      position: "Kendriya Vidyalaya",
      location: "Delhi, India",
      metrics: "20 teachers trained in one month",
      image: "/WhatsApp Image 2025-11-01 at 00.24.00.jpeg"
    },
    {
      quote: "I thought AI was beyond my reach. LITLABS showed me it's not. I'm now considering a career in tech.",
      author: "Student, Grade 11",
      position: "",
      location: "Bangalore, India",
      metrics: "85% skill improvement in first term",
      image: "/ChatGPT Image Apr 30, 2025, 03_26_54 PM.png"
    }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
            Schools Transformed. Teachers Empowered. Students Inspired.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card primary bg-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="font-bold text-accent">{testimonial.author}</h3>
                  {testimonial.position && (
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  )}
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
              <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
              <div className="text-primary font-semibold">{testimonial.metrics}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;