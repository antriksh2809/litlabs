import { motion } from "framer-motion";
import { Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import BookDemoDialog from "@/components/BookDemoDialog";

const StickyCTA = () => {
  const [demoDialogOpen, setDemoDialogOpen] = useState(false);

  return (
    <>
      <motion.div
        className="fixed bottom-6 right-6 z-40 flex flex-col gap-3"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        {/* Contact Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            className="w-14 h-14 rounded-full bg-white text-primary shadow-lg hover:shadow-xl border border-gray-200"
            onClick={() => window.location.href = 'tel:+919876543210'}
            aria-label="Contact us"
          >
            <Phone className="h-6 w-6" />
          </Button>
        </motion.div>

        {/* Book Demo Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="animate-bounce"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Button
            className="w-14 h-14 rounded-full bg-[#FF822E] text-white shadow-lg hover:shadow-xl hover:bg-[#FF822E]/90"
            onClick={() => setDemoDialogOpen(true)}
            aria-label="Book a demo"
          >
            <Calendar className="h-6 w-6" />
          </Button>
        </motion.div>
      </motion.div>

      {/* Book Demo Dialog */}
      <BookDemoDialog open={demoDialogOpen} onClose={() => setDemoDialogOpen(false)} />
    </>
  );
};

export default StickyCTA;