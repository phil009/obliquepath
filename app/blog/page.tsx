"use client";

import { PageLayout } from "@/components/page-layout";
import { ComingSoon } from "@/components/coming-soon";
import { motion } from "framer-motion";
import { FileText, Lightbulb, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BlogPage() {
  const upcomingTopics = [
    {
      icon: Lightbulb,
      title: "AI Automation for Small Businesses",
      description: "Practical ways to implement AI without breaking the bank",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: TrendingUp,
      title: "2025 Automation Trends",
      description: "What's new and what's next in business process automation",
      color: "bg-accent/10 text-accent",
    },
    {
      icon: FileText,
      title: "Case Study Breakdowns",
      description:
        "Behind-the-scenes looks at our most successful client projects",
      color: "bg-primary/10 text-primary",
    },
  ];

  return (
    <PageLayout title="Blog">
      <section className="py-12 md:py-16 px-4 md:px-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-foreground/80 mb-8 text-center"
            >
              Our blog will feature practical insights, automation trends, and
              behind-the-scenes looks at our projects and client success
              stories.
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl font-bold mb-8 text-center"
            >
              Upcoming Topics
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
              {upcomingTopics.map((topic, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                >
                  <Card className="h-full border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-md">
                    <CardHeader>
                      <div
                        className={`w-12 h-12 rounded-lg ${topic.color} flex items-center justify-center mb-4`}
                      >
                        <topic.icon className="h-6 w-6" />
                      </div>
                      <CardTitle>{topic.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/70">{topic.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ComingSoon message="Launching soon." />
    </PageLayout>
  );
}
