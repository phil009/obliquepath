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
            answer: "The exact price depends on the complexity of your automation needs, the number of users, and the level of customization required. We'll provide a precise quote after an initial consultation to understand your specific requirements.",
        },
        {
            question: "Can I upgrade or downgrade my plan later?",
            answer: "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, we'll prorate the difference. If you downgrade, the changes will take effect at the start of your next billing cycle.",
        },
        {
            question: "Is there a setup fee?",
            answer: "No, there are no hidden setup fees. The setup and onboarding process is included in all our pricing tiers.",
        },
        {
            question:
                "Do you offer discounts for non-profits or educational institutions?",
            answer: "Yes, we offer special pricing for non-profits, educational institutions, and startups. Please contact our sales team for more information.",
        },
        {
            question:
                "What happens if I need more automations than my plan allows?",
            answer: "If you need additional automations beyond what your current plan offers, we can either upgrade you to the next tier or create a custom plan that fits your specific needs.",
        },
        {
            question: "How long does implementation typically take?",
            answer: "Implementation time varies depending on the complexity of your automations. Simple automations can be set up within 1-2 weeks, while more complex systems might take 4-8 weeks. We'll provide a timeline estimate during our initial consultation.",
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
                    description:
                        "Track key metrics with a simple reporting dashboard.",
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
                    description:
                        "Automated inventory tracking and reordering system.",
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
                <div className="container max-w-7xl mx-auto">
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
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                >
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
                            Want to Know More?
                        </h2>
                        <p className="text-foreground/70 mb-8">
                            Book a free consultation with our team to discuss
                            your specific needs and get a personalized
                            recommendation.
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
