"use client";
import { AboutSection } from "@/components/home/about-section";
import { variants } from "@/lib/motion-variants";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "tween", duration: 0.5 }}
      className="py-8 md:py-20"
    >
      <AboutSection />
    </motion.div>
  );
}
