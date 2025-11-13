import { motion } from "framer-motion";
import { Sparkles, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function ComingSoon() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl"
      >
        {/* Animated Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <motion.div
              animate={{
                rotate: [0, 10, -10, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
              className="w-24 h-24 bg-gradient-to-br from-[#FF822E] to-[#FFA55E] rounded-full flex items-center justify-center shadow-xl"
            >
              <Sparkles className="w-12 h-12 text-white" />
            </motion.div>
            
            {/* Orbiting particles */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0"
            >
              <div className="absolute top-0 left-1/2 w-3 h-3 bg-[#3BBBF0] rounded-full -translate-x-1/2 -translate-y-1/2" />
            </motion.div>
            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0"
            >
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-orange-400 rounded-full" />
            </motion.div>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          <span className="bg-gradient-to-r from-[#FF822E] to-[#3BBBF0] bg-clip-text text-transparent">
            Coming Soon!
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-gray-600 dark:text-gray-300 mb-8"
        >
          We're working hard to bring you something amazing.
          <br />
          <span className="text-lg">Stay tuned for exciting updates! 🚀</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            onClick={() => navigate("/")}
            size="lg"
            className="bg-[#FF822E] hover:bg-[#FF822E]/90 text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <Button
            onClick={() => navigate("/shop")}
            size="lg"
            variant="outline"
            className="border-[#FF822E] text-[#FF822E] hover:bg-[#FF822E]/10"
          >
            Explore Our Shop
          </Button>
        </motion.div>

        {/* Loading Bar Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
            Building progress...
          </p>
          <div className="w-full max-w-md mx-auto h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "65%" }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
              className="h-full bg-gradient-to-r from-[#FF822E] to-[#3BBBF0]"
            />
          </div>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
            65% complete
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
