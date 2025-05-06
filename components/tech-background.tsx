"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

interface TechBackgroundProps {
  variant?: "grid" | "particles" | "circuits";
  density?: "low" | "medium" | "high";
  opacity?: number;
  interactive?: boolean;
}

export function TechBackground({
  variant = "grid",
  density = "medium",
  opacity = 0.05,
  interactive = true,
}: TechBackgroundProps) {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const isDark = theme === "dark";

  // Update dimensions on resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Track mouse position for interactive effects
  useEffect(() => {
    if (!interactive) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [interactive]);

  // Determine number of elements based on density
  const getCount = () => {
    switch (density) {
      case "low":
        return variant === "particles" ? 30 : 10;
      case "high":
        return variant === "particles" ? 100 : 30;
      case "medium":
      default:
        return variant === "particles" ? 60 : 20;
    }
  };

  const count = getCount();

  // Render grid background
  if (variant === "grid") {
    return (
      <div
        ref={containerRef}
        className="absolute inset-0 overflow-hidden pointer-events-none z-0"
        style={{ opacity }}
      >
        <div className="absolute inset-0 h-full w-full">
          {/* Horizontal lines */}
          {[...Array(count)].map((_, i) => (
            <motion.div
              key={`h-${i}`}
              className="absolute left-0 right-0 h-px bg-current"
              style={{
                top: `${(i + 1) * (100 / count)}%`,
                opacity: interactive
                  ? 0.3 +
                    Math.max(
                      0,
                      1 -
                        Math.abs(
                          mousePosition.y -
                            (i + 1) * (window.innerHeight / count)
                        ) /
                          200
                    ) *
                      0.7
                  : undefined,
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: i * 0.05, ease: "easeOut" }}
            />
          ))}

          {/* Vertical lines */}
          {[...Array(count)].map((_, i) => (
            <motion.div
              key={`v-${i}`}
              className="absolute top-0 bottom-0 w-px bg-current"
              style={{
                left: `${(i + 1) * (100 / count)}%`,
                opacity: interactive
                  ? 0.3 +
                    Math.max(
                      0,
                      1 -
                        Math.abs(
                          mousePosition.x -
                            (i + 1) * (window.innerWidth / count)
                        ) /
                          200
                    ) *
                      0.7
                  : undefined,
              }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.5, delay: i * 0.05, ease: "easeOut" }}
            />
          ))}
        </div>
      </div>
    );
  }

  // Render particles background
  if (variant === "particles") {
    return (
      <div
        ref={containerRef}
        className="absolute inset-0 overflow-hidden pointer-events-none z-0"
        style={{ opacity: opacity * 2 }}
      >
        {[...Array(count)].map((_, i) => {
          const size = Math.random() * 4 + 2;
          const initialX = Math.random() * 100;
          const initialY = Math.random() * 100;
          const duration = Math.random() * 20 + 10;
          const delay = Math.random() * 5;

          return (
            <motion.div
              key={i}
              className={`absolute rounded-full ${
                isDark ? "bg-primary/30" : "bg-primary/20"
              }`}
              style={{
                width: size,
                height: size,
                left: `${initialX}%`,
                top: `${initialY}%`,
                opacity: interactive
                  ? 0.3 +
                    Math.max(
                      0,
                      1 -
                        Math.sqrt(
                          Math.pow(
                            mousePosition.x -
                              (initialX * window.innerWidth) / 100,
                            2
                          ) +
                            Math.pow(
                              mousePosition.y -
                                (initialY * window.innerHeight) / 100,
                              2
                            )
                        ) /
                          300
                    ) *
                      0.7
                  : undefined,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: interactive ? [1, 1.2, 1] : [1, 1.1, 1],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration,
                delay,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>
    );
  }

  // Render circuits background
  if (variant === "circuits") {
    return (
      <div
        ref={containerRef}
        className="absolute inset-0 overflow-hidden pointer-events-none z-0"
        style={{ opacity }}
      >
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Circuit paths */}
          {[...Array(Math.floor(count / 2))].map((_, i) => {
            const startX = Math.random() * 100;
            const startY = Math.random() * 100;
            const endX = Math.random() * 100;
            const endY = Math.random() * 100;
            const controlX1 = (startX + endX) / 2 + (Math.random() - 0.5) * 30;
            const controlY1 = (startY + endY) / 2 + (Math.random() - 0.5) * 30;

            return (
              <motion.path
                key={`circuit-${i}`}
                d={`M${startX},${startY} Q${controlX1},${controlY1} ${endX},${endY}`}
                fill="none"
                stroke={`url(#gradient${i % 2})`}
                strokeWidth="1"
                strokeDasharray="5,5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{
                  duration: 3 + i * 0.5,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              />
            );
          })}

          {/* Circuit nodes */}
          {[...Array(count)].map((_, i) => {
            const cx = Math.random() * 100;
            const cy = Math.random() * 100;
            const r = Math.random() * 3 + 1;

            return (
              <motion.circle
                key={`node-${i}`}
                cx={cx}
                cy={cy}
                r={r}
                fill={
                  isDark ? "hsl(var(--primary-500))" : "hsl(var(--primary-600))"
                }
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.7, scale: 1 }}
                transition={{ duration: 1, delay: i * 0.1 }}
                style={{
                  opacity: interactive
                    ? 0.3 +
                      Math.max(
                        0,
                        1 -
                          Math.sqrt(
                            Math.pow(
                              mousePosition.x - (cx * window.innerWidth) / 100,
                              2
                            ) +
                              Math.pow(
                                mousePosition.y -
                                  (cy * window.innerHeight) / 100,
                                2
                              )
                          ) /
                            300
                      ) *
                        0.7
                    : 0.7,
                }}
              />
            );
          })}

          <defs>
            <linearGradient id="gradient0" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                stopColor="hsl(var(--primary-500))"
                stopOpacity="0.2"
              />
              <stop
                offset="50%"
                stopColor="hsl(var(--accent-500))"
                stopOpacity="0.5"
              />
              <stop
                offset="100%"
                stopColor="hsl(var(--primary-500))"
                stopOpacity="0.2"
              />
            </linearGradient>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                stopColor="hsl(var(--accent-500))"
                stopOpacity="0.2"
              />
              <stop
                offset="50%"
                stopColor="hsl(var(--primary-500))"
                stopOpacity="0.5"
              />
              <stop
                offset="100%"
                stopColor="hsl(var(--accent-500))"
                stopOpacity="0.2"
              />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  return null;
}
