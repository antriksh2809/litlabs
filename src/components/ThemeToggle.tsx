import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(prefersDark);
    
    // Apply theme
    if (prefersDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="relative overflow-hidden btn-modern"
      >
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotate: isDark ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {isDark ? (
            <Moon className="h-5 w-5 text-blue-400" />
          ) : (
            <Sun className="h-5 w-5 text-yellow-500" />
          )}
        </motion.div>
      </Button>
    </motion.div>
  );
};

export default ThemeToggle;
