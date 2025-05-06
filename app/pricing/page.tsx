"use client";

import { PageLayout } from "@/components/page-layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckCircle,
  HelpCircle,
  ArrowRight,
  MessageSquare,
  BarChart,
  Users,
  Bot,
  Database,
  Workflow,
  Package,
  LineChart,
  Calendar,
} from "lucide-react";
import { CTA } from "@/components/shared/cta-links";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">(
    "monthly"
  );

  // Define pricing tiers
  const pricingTiers = [
    {
      name: "Starter",
      description:
        "Perfect for small businesses getting started with automation.",
      monthlyPrice: "$250-$500",
      annualPrice: "$2,500-$5,000",
      annualSavings: "Save up to $1,000",
      features: [
        "1-2 automations (e.g. WhatsApp appointment bot or auto-inquiry responder)",
        "Setup + onboarding",
        "Email support",
        "Monthly reporting",
      ],
      icon: MessageSquare,
      color: "bg-primary/10 text-primary",
      popular: false,
      ctaText: "Get Started",
      ctaLink: "/book-demo",
    },
    {
      name: "Growth",
      description:
        "For teams ready to integrate deeper automations into operations.",
      monthlyPrice: "$750-$1,200",
      annualPrice: "$7,500-$12,000",
      annualSavings: "Save up to $2,400",
      features: [
        "Everything in Starter",
        "3-5 custom automations",
        "WhatsApp and CRM integration",
        "Dedicated dashboard (e.g. for leads, bookings, or job tracking)",
        "Priority support",
      ],
      icon: BarChart,
      color: "bg-accent-300/10 text-accent-500",
      popular: true,
      ctaText: "Choose Growth",
      ctaLink: "/book-demo?plan=growth",
    },
    {
      name: "Pro/Enterprise",
      description:
        "For larger businesses or complex use cases (e.g. real estate brokerages, manufacturers, clinics).",
      monthlyPrice: "Custom Quote",
      annualPrice: "Custom Quote",
      annualSavings: "",
      features: [
        "Everything in Growth",
        "Unlimited automations",
        "AI bot + web portal/dashboard",
        "Custom workflows & backend logic",
        "Team training and full support",
      ],
      icon: Users,
      color: "bg-primary/10 text-primary",
      popular: false,
      ctaText: "Contact Sales",
      ctaLink: "/contact?inquiry=enterprise",
    },
  ];

  // FAQ items
  const faqItems = [
    {
      question:
        "How do you determine the exact price within each tier's range?",
      answer:
        "The exact price depends on the complexity of your automation needs, the number of users, and the level of customization required. We'll provide a precise quote after an initial consultation to understand your specific requirements.",
    },
    {
      question: "Can I upgrade or downgrade my plan later?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, we'll prorate the difference. If you downgrade, the changes will take effect at the start of your next billing cycle.",
    },
    {
      question: "Is there a setup fee?",
      answer:
        "No, there are no hidden setup fees. The setup and onboarding process is included in all our pricing tiers.",
    },
    {
      question:
        "Do you offer discounts for non-profits or educational institutions?",
      answer:
        "Yes, we offer special pricing for non-profits, educational institutions, and startups. Please contact our sales team for more information.",
    },
    {
      question: "What happens if I need more automations than my plan allows?",
      answer:
        "If you need additional automations beyond what your current plan offers, we can either upgrade you to the next tier or create a custom plan that fits your specific needs.",
    },
    {
      question: "How long does implementation typically take?",
      answer:
        "Implementation time varies depending on the complexity of your automations. Simple automations can be set up within 1-2 weeks, while more complex systems might take 4-8 weeks. We'll provide a timeline estimate during our initial consultation.",
    },
  ];

  // Feature comparison
  const featureComparison = [
    {
      category: "Automations",
      features: [
        {
          name: "Number of Automations",
          starter: "1-2",
          growth: "3-5",
          enterprise: "Unlimited",
        },
        {
          name: "Custom Automation Development",
          starter: "Basic",
          growth: "Advanced",
          enterprise: "Enterprise-grade",
        },
        {
          name: "Automation Complexity",
          starter: "Simple workflows",
          growth: "Multi-step workflows",
          enterprise: "Complex business logic",
        },
      ],
    },
    {
      category: "Integrations",
      features: [
        {
          name: "WhatsApp Integration",
          starter: "Basic",
          growth: "Advanced",
          enterprise: "Full customization",
        },
        {
          name: "CRM Integration",
          starter: "Limited",
          growth: "Full integration",
          enterprise: "Multiple systems",
        },
        {
          name: "Third-party API Connections",
          starter: "1 connection",
          growth: "Up to 3 connections",
          enterprise: "Unlimited",
        },
      ],
    },
    {
      category: "Support & Training",
      features: [
        {
          name: "Support Channels",
          starter: "Email only",
          growth: "Email & chat",
          enterprise: "Email, chat & phone",
        },
        {
          name: "Response Time",
          starter: "Within 48 hours",
          growth: "Within 24 hours",
          enterprise: "Within 4 hours",
        },
        {
          name: "Training Sessions",
          starter: "1 session",
          growth: "2 sessions",
          enterprise: "Unlimited",
        },
      ],
    },
  ];

  // Use cases for each tier
  const useCases = [
    {
      tier: "Starter",
      cases: [
        {
          title: "Appointment Booking Bot",
          description:
            "Automate appointment scheduling through WhatsApp or your website.",
          icon: Calendar,
        },
        {
          title: "Lead Response Automation",
          description:
            "Auto-respond to inquiries and capture lead information.",
          icon: MessageSquare,
        },
        {
          title: "Basic Reporting Dashboard",
          description: "Track key metrics with a simple reporting dashboard.",
          icon: BarChart,
        },
      ],
    },
    {
      tier: "Growth",
      cases: [
        {
          title: "Customer Journey Automation",
          description:
            "Create multi-step automated workflows for customer onboarding and follow-ups.",
          icon: Workflow,
        },
        {
          title: "CRM-Integrated Dashboard",
          description:
            "Centralized dashboard that connects with your existing CRM system.",
          icon: Database,
        },
        {
          title: "Inventory Management",
          description: "Automated inventory tracking and reordering system.",
          icon: Package,
        },
      ],
    },
    {
      tier: "Pro/Enterprise",
      cases: [
        {
          title: "Custom AI Assistant",
          description:
            "Fully customized AI assistant trained on your business data and processes.",
          icon: Bot,
        },
        {
          title: "End-to-End Workflow Automation",
          description:
            "Comprehensive automation of complex business processes across departments.",
          icon: Workflow,
        },
        {
          title: "Advanced Analytics Platform",
          description:
            "Custom analytics dashboard with predictive insights and business intelligence.",
          icon: LineChart,
        },
      ],
    },
  ];

  return (
    <PageLayout
      title="Pricing"
      subtitle="Transparent pricing plans for businesses of all sizes"
    >
      <section className="py-12 md:py-16 px-4 lg:px-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <p className="text-lg text-foreground/80">
              Choose the plan that fits your business needs. All plans include
              setup, onboarding, and ongoing support.
            </p>

            {/* Billing period toggle */}
            <div className="mt-8">
              <Tabs
                defaultValue="monthly"
                className="w-[300px] mx-auto"
                onValueChange={(value) =>
                  setBillingPeriod(value as "monthly" | "annual")
                }
              >
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  <TabsTrigger value="annual">Annual (Save 15%)</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </motion.div>

          {/* Pricing cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex"
              >
                <Card
                  className={`w-full border ${
                    tier.popular
                      ? "border-accent shadow-lg shadow-accent/10"
                      : "border-border/50"
                  } relative overflow-hidden`}
                >
                  {tier.popular && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                        MOST POPULAR
                      </div>
                    </div>
                  )}
                  <CardHeader>
                    <div
                      className={`w-12 h-12 rounded-lg ${tier.color} flex items-center justify-center mb-4`}
                    >
                      <tier.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                    <CardDescription className="min-h-[50px]">
                      {tier.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <div className="text-3xl font-bold">
                        {billingPeriod === "monthly"
                          ? tier.monthlyPrice
                          : tier.annualPrice}
                        {tier.name !== "Pro/Enterprise" && (
                          <span className="text-sm font-normal text-foreground/60">
                            /month
                          </span>
                        )}
                      </div>
                      {billingPeriod === "annual" && tier.annualSavings && (
                        <p className="text-sm text-accent mt-1">
                          {tier.annualSavings}
                        </p>
                      )}
                    </div>

                    <div className="space-y-3">
                      {tier.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground/80">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href={tier.ctaLink} className="w-full">
                      <Button
                        className={`w-full ${
                          tier.popular
                            ? "bg-accent-300 hover:bg-accent-300/90"
                            : "bg-primary hover:bg-primary/90"
                        }`}
                      >
                        {tier.ctaText}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Feature comparison */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-24 max-w-6xl mx-auto bg-background"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">
              Feature Comparison
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="text-left py-4 px-4 font-medium">Feature</th>
                    <th className="text-center py-4 px-4 font-medium">
                      Starter
                    </th>
                    <th className="text-center py-4 px-4 font-medium">
                      Growth
                    </th>
                    <th className="text-center py-4 px-4 font-medium">
                      Pro/Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {featureComparison.map((category, categoryIndex) => (
                    <>
                      <tr
                        key={`category-${categoryIndex}`}
                        className="bg-background/50"
                      >
                        <td
                          colSpan={4}
                          className="py-3 px-4 font-bold text-primary"
                        >
                          {category.category}
                        </td>
                      </tr>
                      {category.features.map((feature, featureIndex) => (
                        <tr
                          key={`feature-${categoryIndex}-${featureIndex}`}
                          className="border-b border-border/20"
                        >
                          <td className="py-3 px-4">{feature.name}</td>
                          <td className="py-3 px-4 text-center">
                            {feature.starter}
                          </td>
                          <td className="py-3 px-4 text-center">
                            {feature.growth}
                          </td>
                          <td className="py-3 px-4 text-center">
                            {feature.enterprise}
                          </td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Use cases */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-24 max-w-6xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">
              Common Use Cases
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {useCases.map((tierCase, tierIndex) => (
                <div key={tierCase.tier} className="space-y-6">
                  <h3 className="text-xl font-bold text-center">
                    {tierCase.tier}
                  </h3>

                  {tierCase.cases.map((useCase, caseIndex) => (
                    <motion.div
                      key={`case-${tierIndex}-${caseIndex}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * caseIndex }}
                      className="bg-card border border-border/50 rounded-lg p-4 hover:border-primary/50 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <useCase.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">{useCase.title}</h4>
                          <p className="text-sm text-foreground/70">
                            {useCase.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>

          {/* FAQ section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-24 max-w-3xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-2">
                      <HelpCircle className="h-5 w-5 text-primary shrink-0" />
                      <span>{item.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70 pl-7">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* CTA section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-24 max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl font-bold mb-4">
              Not Sure Which Plan Is Right for You?
            </h2>
            <p className="text-foreground/70 mb-8">
              Book a free consultation with our team to discuss your specific
              needs and get a personalized recommendation.
            </p>

            <CTA
              align="center"
              primaryText="Book a Free Consultation"
              primaryLink="/book-demo"
              secondaryText="Contact Sales"
              secondaryLink="/contact"
            />
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
