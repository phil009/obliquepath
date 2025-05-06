"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, BarChart } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScrollWatcherProps {
  showProgress?: boolean;
  showScrollToTop?: boolean;
  progressColor?: string;
  progressPosition?: "top" | "bottom" | "left" | "right";
  scrollToTopThreshold?: number;
  className?: string;
}

export function ScrollWatcher({
  showProgress = true,
  showScrollToTop = true,
  progressColor = "bg-gradient-to-r from-primary-300/30 to-accent-300/30",
  progressPosition = "top",
  scrollToTopThreshold = 300,
  className,
}: ScrollWatcherProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      // Calculate how far down the page the user has scrolled
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      // Calculate scroll percentage
      const scrollPercentage =
        (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(Math.min(scrollPercentage, 100));

      // Show/hide scroll to top button based on threshold
      setShowScrollButton(scrollTop > scrollToTopThreshold);
    };

    // Initial calculation
    handleScroll();

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollToTopThreshold]);

  // Handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Determine progress bar styles based on position
  const getProgressStyles = () => {
    switch (progressPosition) {
      case "left":
        return {
          left: 0,
          top: 0,
          width: "4px",
          height: `${scrollProgress}%`,
        };
      case "right":
        return {
          right: 0,
          top: 0,
          width: "4px",
          height: `${scrollProgress}%`,
        };
      case "bottom":
        return {
          bottom: 0,
          left: 0,
          height: "4px",
          width: `${scrollProgress}%`,
        };
      case "top":
      default:
        return {
          top: 0,
          left: 0,
          height: "4px",
          width: `${scrollProgress}%`,
        };
    }
  };

  return (
    <>
      {/* Progress bar */}
      {showProgress && (
        <div
          className={cn("fixed z-50 pointer-events-none", className)}
          style={{
            [progressPosition]: 0,
            left:
              progressPosition === "left" || progressPosition === "right"
                ? undefined
                : 0,
            right: progressPosition === "right" ? 0 : undefined,
            top:
              progressPosition === "top" ||
              progressPosition === "left" ||
              progressPosition === "right"
                ? 0
                : undefined,
            bottom: progressPosition === "bottom" ? 0 : undefined,
            width:
              progressPosition === "left" || progressPosition === "right"
                ? "4px"
                : "100%",
            height:
              progressPosition === "top" || progressPosition === "bottom"
                ? "4px"
                : "100%",
          }}
        >
          <motion.div
            className={cn(progressColor, "absolute")}
            style={getProgressStyles()}
            initial={{ opacity: 0 }}
            animate={{ opacity: scrollProgress > 0 ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollToTop && showScrollButton && (
          <motion.button
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg bg-card border border-border/50 hover:border-primary/50 transition-colors"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={scrollToTop}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            aria-label="Scroll to top"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: isHovering ? 1 : 0,
                  scale: isHovering ? 1 : 0,
                  rotate: isHovering ? 0 : -90,
                }}
                transition={{ duration: 0.2 }}
              >
                <ChevronUp className="h-5 w-5 text-primary" />
              </motion.div>

              <motion.div
                className="flex items-center justify-center"
                animate={{
                  opacity: isHovering ? 0 : 1,
                  scale: isHovering ? 0 : 1,
                  rotate: isHovering ? 90 : 0,
                }}
                transition={{ duration: 0.2 }}
              >
                <BarChart className="h-5 w-5" />
              </motion.div>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Scroll percentage indicator */}
      <AnimatePresence>
        {showScrollToTop && showScrollButton && (
          <motion.div
            className="fixed bottom-6 left-6 z-50 p-2 rounded-full shadow-lg bg-card border border-border/50 text-xs font-mono"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span>{Math.round(scrollProgress)}%</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
