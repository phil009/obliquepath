"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

interface ScrollIndicatorProps {
  fadeOutAfter?: number; // Percentage of scroll progress to fade out (0-1)
}

export function ScrollIndicator({ fadeOutAfter = 0.1 }: ScrollIndicatorProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress as percentage of page height
      const scrollProgress =
        window.scrollY / (document.body.scrollHeight - window.innerHeight);

      // Hide indicator after scrolling past the threshold
      if (scrollProgress > fadeOutAfter) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [fadeOutAfter]);

  return (
    <motion.div
      className="fixed opacity-50 bottom-8 right-8 transform z-40 flex flex-col items-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.p
        className="text-sm text-foreground/70 mb-2 font-medium"
        initial={{ opacity: 0.7 }}
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        Scroll to explore
      </motion.p>

      <motion.div
        className="flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="h-5 w-5 text-primary" />
        </motion.div>

        <motion.div
          className="w-6 h-6 mt-1 rounded-full bg-primary/5 flex items-center justify-center opacity-80"
          animate={{ scale: [1, 1.1, 1], y: [0, 5, 0] }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.1,
          }}
        >
          <ChevronDown className="h-4 w-4 text-primary/80" />
        </motion.div>

        <motion.div
          className="w-4 h-4 mt-1 rounded-full bg-primary/5 flex items-center justify-center opacity-60"
          animate={{ scale: [1, 1.1, 1], y: [0, 5, 0] }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.2,
          }}
        >
          <ChevronDown className="h-3 w-3 text-primary/60" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
