"use client";

import { PageLayout } from "@/components/page-layout";
import { ComingSoon } from "@/components/coming-soon";
import { motion } from "framer-motion";
import { Building, Utensils, Stethoscope } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CaseStudiesPage() {
  const upcomingCaseStudies = [
    {
      icon: Building,
      title: "Manufacturing Workflow Optimization",
      description:
        "How we reduced production bottlenecks by 35% and increased overall efficiency",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Utensils,
      title: "Restaurant Inventory Management",
      description:
        "Smart inventory system that reduced food waste by 40% for a restaurant chain",
      color: "bg-accent/10 text-accent",
    },
    {
      icon: Stethoscope,
      title: "Dental Clinic Scheduling",
      description:
        "AI appointment system that reduced no-shows by 60% and optimized practitioner time",
      color: "bg-primary/10 text-primary",
    },
  ];

  return (
    <PageLayout title="Case Studies">
      <section className="py-12 md:py-16 px-4 md:px-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-foreground/80 mb-8 text-center"
            >
              We&apos;re currently building out real examples of how Obliquepath
              has transformed business workflows using AI.
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl font-bold mb-8 text-center"
            >
              Upcoming Case Studies
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
              {upcomingCaseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                >
                  <Card className="h-full border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-md">
                    <CardHeader>
                      <div
                        className={`w-12 h-12 rounded-lg ${study.color} flex items-center justify-center mb-4`}
                      >
                        <study.icon className="h-6 w-6" />
                      </div>
                      <CardTitle>{study.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/70">{study.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ComingSoon message="Our first case studies will go live in Q3 2025 — stay tuned!" />
    </PageLayout>
  );
}
