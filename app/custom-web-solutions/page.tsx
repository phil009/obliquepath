"use client";

import { PageLayout } from "@/components/page-layout";
import { ComingSoon } from "@/components/coming-soon";
import { motion } from "framer-motion";
import { Code, Workflow, Layers, Rocket } from "lucide-react";

export default function CustomWebSolutionsPage() {
  const solutions = [
    {
      icon: Code,
      title: "Custom Development",
      description:
        "Tailored web applications built specifically for your business needs",
    },
    {
      icon: Workflow,
      title: "Automated Workflows",
      description:
        "Forms and processes that trigger actions and save manual steps",
    },
    {
      icon: Layers,
      title: "Integration Systems",
      description:
        "Connect your existing tools and create a unified business ecosystem",
    },
    {
      icon: Rocket,
      title: "Performance Optimization",
      description:
        "Fast, responsive websites that provide excellent user experience",
    },
  ];

  return (
    <PageLayout title="Custom Web Solutions">
      <section className="py-12 md:py-16 px-4 md:px-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-foreground/80 mb-8"
            >
              Need a website that works smarter, not harder? We create websites
              with automation built-in — from online forms that trigger
              workflows to dynamic portals that save your team hours every week.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  className="bg-card border border-border/50 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <solution.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                  <p className="text-foreground/70">{solution.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ComingSoon message="Stay tuned — case studies and demos launching soon." />
    </PageLayout>
  );
}
