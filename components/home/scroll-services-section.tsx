"use client";

import { motion } from "framer-motion";
import { ServicesSlider } from "@/components/services-slider";

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-background px-4 lg:px-16">
      <div className="container max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">AI-Powered</span> Services
          </h2>
          <p className="text-foreground/70 text-lg">
            We offer a comprehensive suite of automation solutions designed to
            streamline your business operations and boost productivity.
          </p>
        </motion.div>

        <ServicesSlider />
      </div>
    </section>
  );
}
