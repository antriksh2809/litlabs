import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setEmail("");
      
      // Reset after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated with L.I.T. Labs
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
            Get the latest news, resources, and updates on STEM education delivered to your inbox
          </p>

          {submitted ? (
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
              <p className="mb-4">You've been subscribed to our newsletter.</p>
              <p className="text-sm text-white/80">
                Check your email for a confirmation message.
              </p>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address for newsletter subscription
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    required
                    aria-label="Email address for newsletter subscription"
                    aria-required="true"
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-white text-primary hover:bg-white/90 flex items-center gap-2"
                  disabled={loading}
                  aria-label="Subscribe to newsletter"
                >
                  {loading ? (
                    <div className="h-4 w-4 border-2 border-primary border-t-transparent rounded-full animate-spin" aria-hidden="true"></div>
                  ) : (
                    <>
                      <Send className="h-4 w-4" aria-hidden="true" />
                      Subscribe
                    </>
                  )}
                </Button>
              </div>
              <p className="text-xs text-white/70 mt-3 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </motion.form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSignup;