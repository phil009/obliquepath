"use client";
import { AboutSection } from "@/components/home/about-section";
import { ContactSection } from "@/components/home/contact-section";
import { HeroSection } from "@/components/home/hero-section";
import { AutoServicesSection } from "@/components/home/scroll-services-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { variants } from "@/lib/motion-variants";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "tween", duration: 0.5 }}
    >
      <HeroSection />
      <AutoServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </motion.div>
  );
}
