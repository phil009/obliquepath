"use client";

import { PageLayout } from "@/components/page-layout";
import { ComingSoon } from "@/components/coming-soon";
import { motion } from "framer-motion";
import { LineChart, Search, Lightbulb, ArrowUpRight } from "lucide-react";

export default function ProcessOptimizationPage() {
  const steps = [
    {
      icon: Search,
      title: "Analysis",
      description:
        "We examine your current workflows and identify bottlenecks and inefficiencies",
    },
    {
      icon: Lightbulb,
      title: "Solution Design",
      description:
        "Our team creates custom automation strategies tailored to your business",
    },
    {
      icon: LineChart,
      title: "Implementation",
      description:
        "We build and integrate the tools you need to streamline operations",
    },
    {
      icon: ArrowUpRight,
      title: "Continuous Improvement",
      description:
        "Ongoing optimization ensures your processes keep getting better",
    },
  ];

  return (
    <PageLayout title="Process Optimization">
      <section className="py-12 md:py-16 px-4 md:px-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-foreground/80 mb-8"
            >
              We analyze your current workflows and identify ways to improve
              them with AI and automation. Whether it&apos;s reducing manual
              entry, speeding up customer service, or integrating tools —
              Obliquepath helps your business run smoother.
            </motion.p>

            <div className="my-12">
              <h2 className="text-2xl font-bold mb-8 text-center">
                Our Approach
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                    className="bg-card border border-border/50 rounded-lg p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-foreground/70">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ComingSoon message="More insights coming soon." />
    </PageLayout>
  );
}
