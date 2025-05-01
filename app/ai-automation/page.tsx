"use client";

import { PageLayout } from "@/components/page-layout";
import { ComingSoon } from "@/components/coming-soon";
import { motion } from "framer-motion";
import { Bot, Zap, Clock, LineChart } from "lucide-react";

export default function AIAutomationPage() {
  const features = [
    {
      icon: Bot,
      title: "Intelligent Chatbots",
      description:
        "24/7 customer service agents that learn from every interaction",
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      description:
        "Streamline repetitive tasks and free up your team's valuable time",
    },
    {
      icon: Clock,
      title: "Time-Saving Tools",
      description:
        "Reduce manual work and focus on what matters most to your business",
    },
    {
      icon: LineChart,
      title: "Efficiency Boost",
      description:
        "Measurable improvements in productivity and operational costs",
    },
  ];

  return (
    <PageLayout title="AI Automation">
      <section className="py-12 md:py-16 px-4 md:px-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base md:text-lg text-foreground/80 mb-8"
            >
              At Obliquepath, we build intelligent automation systems that
              handle repetitive tasks and streamline your business processes.
              From customer chatbots to backend workflows, our AI tools are
              designed to save you time, reduce manual work, and boost
              efficiency.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  className="bg-card border border-border/50 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-foreground/70">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ComingSoon />
    </PageLayout>
  );
}
