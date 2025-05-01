"use client";

import { PageLayout } from "@/components/page-layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Users,
  Target,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const values = [
    {
      icon: Users,
      title: "Accessibility",
      description:
        "We make AI automation accessible to businesses of all sizes, not just tech giants",
    },
    {
      icon: Target,
      title: "Practicality",
      description:
        "Our solutions focus on real-world results and tangible business improvements",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We stay at the forefront of AI technology to bring you the best solutions",
    },
  ];

  const benefits = [
    "Custom solutions tailored to your specific business needs",
    "Affordable automation that delivers measurable ROI",
    "Ongoing support and continuous improvement",
    "User-friendly tools that your team will actually use",
    "Scalable systems that grow with your business",
  ];

  const features = [
    "Custom AI solutions tailored to your business needs",
    "Streamlined workflows that save time and reduce errors",
    "Enhanced customer interactions through automation",
    "Data-driven insights to improve decision making",
    "Ongoing support and continuous optimization",
  ];

  return (
    <PageLayout title="About Obliquepath">
      <section className="py-12 md:py-16 px-4 md:px-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base md:text-lg text-foreground/80 mb-8"
            >
              Obliquepath is a modern AI automation company helping small and
              mid-sized businesses save time, scale operations, and work
              smarter. We believe automation should be accessible, affordable,
              and practical — not just for tech giants.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="my-12"
            >
              <h2 className="text-2xl font-bold mb-6">
                Bridging the <span className="gradient-text">Gap</span> Between
                Traditional Business and{" "}
                <span className="gradient-text">AI Automation</span>
              </h2>
              <p className="text-foreground/80 mb-8">
                At Obliquepath, our mission is to make AI accessible,
                affordable, and impactful for everyday business operations. We
                understand the challenges small to mid-sized businesses face and
                provide tailored solutions that deliver real results.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                <div className="bg-card border border-border/50 rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold mb-4">Our Approach</h3>
                  <div className="space-y-3">
                    {features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                        className="flex items-start gap-2"
                      >
                        <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <p className="text-sm text-foreground/80">{feature}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="bg-card border border-border/50 rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold mb-4">Our Impact</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-primary/10 rounded-lg p-4 flex flex-col items-center justify-center text-center">
                      <div className="text-2xl font-bold text-primary mb-1">
                        85%
                      </div>
                      <div className="text-xs text-foreground/70">
                        Time Saved on Admin Tasks
                      </div>
                    </div>
                    <div className="bg-accent/10 rounded-lg p-4 flex flex-col items-center justify-center text-center">
                      <div className="text-2xl font-bold text-accent mb-1">
                        3x
                      </div>
                      <div className="text-xs text-foreground/70">
                        Customer Response Rate
                      </div>
                    </div>
                    <div className="bg-accent/10 rounded-lg p-4 flex flex-col items-center justify-center text-center">
                      <div className="text-2xl font-bold text-accent mb-1">
                        40%
                      </div>
                      <div className="text-xs text-foreground/70">
                        Cost Reduction
                      </div>
                    </div>
                    <div className="bg-primary/10 rounded-lg p-4 flex flex-col items-center justify-center text-center">
                      <div className="text-2xl font-bold text-primary mb-1">
                        24/7
                      </div>
                      <div className="text-xs text-foreground/70">
                        Automated Service
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="my-12"
            >
              <h2 className="text-2xl font-bold mb-8 text-center">
                Our Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                    className="bg-card border border-border/50 rounded-lg p-6 hover:shadow-md transition-shadow text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-foreground/70">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="my-12"
            >
              <h2 className="text-2xl font-bold mb-6">
                Why Choose Obliquepath?
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                    <p className="text-foreground/80">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center mt-16"
            >
              <h3 className="text-2xl font-bold mb-4">Want to learn more?</h3>
              <p className="text-foreground/70 mb-6">
                We&apos;d love to discuss how we can help your business.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Let&apos;s Talk
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
