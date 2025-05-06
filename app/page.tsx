"use client";
import { FloatingElements } from "@/components/floating-elements";
import { AboutSection } from "@/components/home/about-section";
import { ContactSection } from "@/components/home/contact-section";
import { HeroSection } from "@/components/home/hero-section";
import { ServicesSection } from "@/components/home/scroll-services-section";

import { TestimonialsSection } from "@/components/home/testimonials-section";
import { MouseSpotlight } from "@/components/mouse-spotlight";
import { ScrollWatcher } from "@/components/scroll-watcher";
import { TechBackground } from "@/components/tech-background";
import { variants } from "@/lib/motion-variants";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Handle mounting for client-side features
  useEffect(() => {
    setMounted(true);

    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Track scroll position
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Determine background variant based on scroll position
  const getBgVariant = () => {
    if (scrollY < 300) return "grid";
    if (scrollY < 1000) return "particles";
    return "circuits";
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "tween", duration: 0.5 }}
    >
      {/* Tech-inspired animated backgrounds */}
      {mounted && (
        <>
          <AnimatePresence mode="wait">
            <motion.div
              key={getBgVariant()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <TechBackground
                variant={getBgVariant()}
                density={isMobile ? "low" : "medium"}
                interactive={!isMobile}
              />
            </motion.div>
          </AnimatePresence>

          <FloatingElements
            count={isMobile ? 3 : 5}
            variant="mixed"
            opacity={0.3}
          />

          <MouseSpotlight disabled={isMobile} />

          {/* Add ScrollWatcher to all pages */}
          <ScrollWatcher progressPosition="top" scrollToTopThreshold={300} />
        </>
      )}
      <ScrollWatcher progressPosition="top" />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </motion.div>
  );
}
