import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useState } from "react";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Building an aircraft model was like living my dream!",
    author: "Rohan",
    role: "Grade 6 Student",
    rating: 5,
  },
  {
    id: 2,
    quote: "The robotics program opened my eyes to a whole new world.",
    author: "Khushbu",
    role: "Grade 11 Student",
    rating: 5,
  },
  {
    id: 3,
    quote: "Students were fully engaged and creative. The hands-on approach made learning come alive.",
    author: "Smt. Pushpinder Kaur",
    role: "Principal",
    rating: 5,
  },
  {
    id: 4,
    quote: "L.I.T. Labs transformed our science education. Students are now excited about learning!",
    author: "Dr. Rajesh Kumar",
    role: "School Director",
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Students & Educators Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from those who have experienced the L.I.T. Labs difference
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card rounded-2xl p-8 md:p-12 shadow-elegant border"
                  >
                    {/* Quote Icon */}
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <Quote className="h-8 w-8 text-primary" />
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-lg md:text-xl text-center mb-8 text-foreground font-medium leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Author */}
                    <div className="text-center">
                      <div className="font-semibold text-foreground">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() =>
              setActiveIndex((prev) =>
                prev === 0 ? testimonials.length - 1 : prev - 1
              )
            }
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 rounded-full bg-card border shadow-md flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            aria-label="Previous testimonial"
          >
            ←
          </button>
          <button
            onClick={() =>
              setActiveIndex((prev) =>
                prev === testimonials.length - 1 ? 0 : prev + 1
              )
            }
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 rounded-full bg-card border shadow-md flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
