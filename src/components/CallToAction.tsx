import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import BookDemoDialog from "./BookDemoDialog";

const CallToAction = () => {
  const [demoDialogOpen, setDemoDialogOpen] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-[#0088a8] text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your School Into an Innovation Hub?
            </h2>
            <p className="text-xl mb-8 max-w-2xl">
              Schedule your free 30-minute consultation today. No commitment. No catch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100 font-bold"
                onClick={() => setDemoDialogOpen(true)}
              >
                Schedule Your Demo
              </Button>
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 gap-2"
              >
                <Phone className="h-4 w-4" />
                Chat on WhatsApp
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/20 rounded-2xl p-8 backdrop-blur-sm">
              <img 
                src="/Learn Innovate Transform.png" 
                alt="LITLABS Innovation" 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <BookDemoDialog open={demoDialogOpen} onClose={() => setDemoDialogOpen(false)} />
    </section>
  );
};

export default CallToAction;