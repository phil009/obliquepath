"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const features = [
  "Custom AI solutions tailored to your business needs",
  "Streamlined workflows that save time and reduce errors",
  "Enhanced customer interactions through automation",
  "Data-driven insights to improve decision making",
  "Ongoing support and continuous optimization",
];

export function AboutSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content - Order 1 on mobile, 2 on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-4 sm:space-y-6 order-2 lg:order-1"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Bridging the Gap Between{" "}
              <span className="gradient-text">Traditional Business</span> and{" "}
              <span className="gradient-text">AI Automation</span>
            </h2>

            <p className="text-base sm:text-lg text-foreground/80">
              At Obliquepath, our mission is to make AI accessible, affordable,
              and impactful for everyday business operations. We understand the
              challenges small to mid-sized businesses face and provide tailored
              solutions that deliver real results.
            </p>

            <div className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-2 sm:gap-3"
                >
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-accent shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-foreground/80">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="pt-2 sm:pt-4"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 w-full sm:w-auto text-sm sm:text-base py-2 sm:py-2.5"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
          {/* Stats Card - Order 2 on mobile, 1 on desktop */}
          <motion.div
            style={{ opacity, y }}
            className="relative order-1 lg:order-2 mt-8 lg:mt-0"
          >
            <div className="relative w-full aspect-square max-w-sm sm:max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-700/20 to-accent-500/20 rounded-2xl blur-xl" />
              <div className="absolute inset-2 sm:inset-4 bg-card rounded-xl shadow-lg border overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
                <div className="relative p-3 sm:p-4 md:p-6 h-full flex flex-col">
                  <div className="grid grid-cols-2 gap-2 sm:gap-4 h-full">
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 3,
                        delay: 0.2,
                      }}
                      className="bg-primary/10 rounded-lg p-2 sm:p-4 flex flex-col items-center justify-center text-center"
                    >
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2">
                        85%
                      </div>
                      <div className="text-xs sm:text-sm text-foreground/70">
                        Time Saved on Admin Tasks
                      </div>
                    </motion.div>

                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 3,
                        delay: 0.4,
                      }}
                      className="bg-accent/10 rounded-lg p-2 sm:p-4 flex flex-col items-center justify-center text-center"
                    >
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-1 sm:mb-2">
                        3x
                      </div>
                      <div className="text-xs sm:text-sm text-foreground/70">
                        Customer Response Rate
                      </div>
                    </motion.div>

                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 3,
                        delay: 0.6,
                      }}
                      className="bg-accent/10 rounded-lg p-2 sm:p-4 flex flex-col items-center justify-center text-center"
                    >
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-1 sm:mb-2">
                        40%
                      </div>
                      <div className="text-xs sm:text-sm text-foreground/70">
                        Cost Reduction
                      </div>
                    </motion.div>

                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 3,
                        delay: 0.8,
                      }}
                      className="bg-primary/10 rounded-lg p-2 sm:p-4 flex flex-col items-center justify-center text-center"
                    >
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2">
                        24/7
                      </div>
                      <div className="text-xs sm:text-sm text-foreground/70">
                        Automated Service
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
