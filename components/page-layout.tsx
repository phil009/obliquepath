"use client";

import { type ReactNode, useState, useEffect } from "react";
import { PageHeader } from "@/components/page-header";
import { motion, AnimatePresence } from "framer-motion";
import { variants, staggerContainer, fadeInUp } from "@/lib/motion-variants";
import { TechBackground } from "@/components/tech-background";
import { MouseSpotlight } from "@/components/mouse-spotlight";
import { FloatingElements } from "@/components/floating-elements";
import { ScrollWatcher } from "@/components/scroll-watcher";

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

export function PageLayout({ children, title, subtitle }: PageLayoutProps) {
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
    <>
      {/* Tech-inspired animated backgrounds */}
      {mounted && (
        <>
          <div className="fixed inset-0 z-0 overflow-hidden">
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
          </div>
          <ScrollWatcher progressPosition="top" scrollToTopThreshold={300} />
        </>
      )}
      <div className="relative">
        {/* Main content with animations */}
        <motion.div
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ type: "tween", duration: 0.5 }}
          className="relative z-10"
        >
          <main className="min-h-screen">
            <PageHeader title={title} subtitle={subtitle} />

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="enter"
              className="page-content"
            >
              <motion.div variants={fadeInUp}>{children}</motion.div>
            </motion.div>
          </main>
        </motion.div>
      </div>
    </>
  );
}
