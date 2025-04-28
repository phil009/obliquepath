"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Zap, LineChart } from "lucide-react";
import { TypewriterEffect } from "./typewriter-effect";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-4 lg:px-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium w-fit"
            >
              <Zap className="mr-1 h-3.5 w-3.5" />
              <span>AI-Powered Business Automation</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-[55px] font-bold leading-tight"
            >
              <span className="gradient-text">
                <TypewriterEffect />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base md:text-lg text-foreground/80 max-w-xl"
            >
              Obliquepath helps businesses streamline operations with smart AI
              automation solutions — saving time, boosting productivity,
              and driving growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button
                size="lg"
                className="bg-primary-600 text-white hover:bg-primary-600/90"
              >
                Let&apos;s Automate Your Business
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                See Our Solutions
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-4 pt-6"
            >
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-background bg-accent-100 dark:bg-accent-600"
                  />
                ))}
              </div>
              <p className="text-sm text-foreground/70">
                <span className="font-semibold">100+ businesses</span> are
                already saving time
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-accent-500/20 rounded-2xl blur-xl" />
              <div className="absolute inset-4 bg-card rounded-xl shadow-lg border overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
                <div className="relative p-6 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-2 md:mb-6">
                    <div className="flex items-center gap-2">
                      <Bot className="h-6 w-6 text-primary" />
                      <h3 className="font-semibold">AI Assistant</h3>
                    </div>
                    <div className="h-3 w-3 rounded-full bg-accent-500 animate-pulse" />
                  </div>

                  <div className="space-y-2 md:space-y-4 flex-1">
                    <div className="bg-background/50 p-2 md:p-3 rounded-lg max-w-[80%]">
                      <p className="text-[9px] sm:text-sm">
                        How can I help optimize your customer service workflow?
                      </p>
                    </div>

                    <div className="bg-primary/10 p-2 md:p-3 rounded-lg max-w-[80%] ml-auto">
                      <p className="text-[9px] sm:text-sm">
                        We need to reduce response time and handle more
                        inquiries.
                      </p>
                    </div>

                    <div className="bg-background/50 p-2 md:p-3 rounded-lg max-w-[80%]">
                      <p className="text-[9px] sm:text-sm">
                        I&apos;ll create an automated response system with smart
                        routing based on inquiry type.
                      </p>
                    </div>
                  </div>

                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 2,
                    }}
                    className="md:mt-4 bg-accent/10 p-2 md:p-3 rounded-lg"
                  >
                    <div className="flex items-center gap-2">
                      <LineChart className="h-5 w-5 text-accent" />
                      <p className="text-[9px] sm:text-sm font-medium">
                        Projected time savings: 15 hours/week
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 3,
                ease: "easeInOut",
              }}
              className="absolute -top-6 -right-6 bg-bg-dark dark:bg-accent text-white p-3 rounded-lg shadow-lg"
            >
              <Zap className="h-5 w-5" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 4,
                ease: "easeInOut",
              }}
              className="absolute -bottom-6 -left-6 bg-primary-500 text-white p-3 rounded-lg shadow-lg"
            >
              <Bot className="h-5 w-5" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
