"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

interface FloatingElementsProps {
  count?: number;
  variant?: "circles" | "squares" | "mixed";
  opacity?: number;
}

export function FloatingElements({
  count = 5,
  variant = "mixed",
  opacity = 0.5,
}: FloatingElementsProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [elements, setElements] = useState<Array<any>>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Generate elements only once on component mount
  useEffect(() => {
    const newElements = Array.from({ length: count }).map((_, index) => {
      const size = Math.floor(Math.random() * 100) + 50;
      const positionX = Math.floor(Math.random() * 100);
      const positionY = Math.floor(Math.random() * 100);
      const duration = Math.floor(Math.random() * 20) + 10;
      const delay = Math.floor(Math.random() * 5);
      const entranceDelay = Math.random() * 0.8; // Staggered entrance

      const shape =
        variant === "mixed"
          ? Math.random() > 0.5
            ? "circle"
            : "square"
          : variant;

      const isPrimary = Math.random() > 0.5;
      const colorClass = isPrimary
        ? isDark
          ? "from-primary-800/20 to-primary-600/10"
          : "from-primary-200/20 to-primary-400/10"
        : isDark
        ? "from-accent-800/20 to-accent-600/10"
        : "from-accent-200/20 to-accent-400/10";

      return {
        id: index,
        size,
        positionX,
        positionY,
        duration,
        delay,
        entranceDelay,
        shape,
        colorClass,
      };
    });

    setElements(newElements);
    setIsInitialized(true);
  }, [count, variant, isDark]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {isInitialized &&
        elements.map((element) => (
          <motion.div
            key={element.id}
            className={`absolute bg-gradient-to-br ${element.colorClass} ${
              element.shape === "circle" ? "rounded-full" : "rounded-lg"
            }`}
            style={{
              width: element.size,
              height: element.size,
              left: `${element.positionX}%`,
              top: `${element.positionY}%`,
            }}
            initial={{
              opacity: 0,
              scale: 0.3,
              y: 20,
            }}
            animate={{
              opacity: opacity,
              scale: 1,
              y: 0,
            }}
            transition={{
              opacity: {
                duration: 1.2,
                ease: "easeOut",
                delay: element.entranceDelay,
              },
              scale: {
                duration: 1.5,
                ease: "easeOut",
                delay: element.entranceDelay,
              },
              y: {
                duration: 1.2,
                ease: "easeOut",
                delay: element.entranceDelay,
              },
            }}
            whileInView={{
              y: [0, -30, 0],
              rotate: element.shape === "square" ? [0, 15, 0] : 0,
            }}
            viewport={{ once: false, margin: "-100px" }}
          />
        ))}
    </div>
  );
}
