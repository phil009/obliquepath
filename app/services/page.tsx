"use client";

import { PageLayout } from "@/components/page-layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Bot,
  Code,
  LineChart,
  Headphones,
  Calendar,
  ShoppingCart,
  FileText,
  Cog,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Link from "next/link";

export default function ServicesPage() {
  const serviceCategories = [
    {
      id: "ai-automation",
      title: "AI Automation",
      description:
        "Intelligent automation systems that handle repetitive tasks and streamline your business processes.",
      icon: Bot,
      color: "bg-primary/10 text-primary",
      services: [
        {
          title: "AI Chatbots",
          description:
            "Intelligent conversational agents that handle customer inquiries 24/7",
        },
        {
          title: "Process Automation",
          description: "Streamline repetitive tasks with intelligent workflows",
        },
        {
          title: "Data Analysis",
          description:
            "Extract insights from your business data with AI-powered analytics",
        },
      ],
    },
    {
      id: "custom-web-solutions",
      title: "Custom Web Solutions",
      description:
        "Websites and web applications with automation built-in to save your team hours every week.",
      icon: Code,
      color: "bg-accent-200/10 text-accent-500",
      services: [
        {
          title: "Custom Web Development",
          description:
            "Tailored websites and applications designed for your specific needs",
        },
        {
          title: "Automated Forms & Workflows",
          description:
            "Online forms that trigger intelligent workflows and processes",
        },
        {
          title: "Customer Portals",
          description:
            "Self-service portals that reduce manual customer service tasks",
        },
      ],
    },
    {
      id: "process-optimization",
      title: "Process Optimization",
      description:
        "Analysis and improvement of your current workflows with AI and automation technologies.",
      icon: LineChart,
      color: "bg-primary/10 text-primary",
      services: [
        {
          title: "Workflow Analysis",
          description:
            "Identify bottlenecks and inefficiencies in your current processes",
        },
        {
          title: "System Integration",
          description: "Connect your existing tools into a seamless workflow",
        },
        {
          title: "Automation Strategy",
          description:
            "Develop a roadmap for implementing automation across your business",
        },
      ],
    },
    {
      id: "tech-support",
      title: "Tech Support",
      description:
        "Ongoing support and maintenance for all our automation systems to ensure reliability.",
      icon: Cog,
      color: "bg-accent-200/10 text-accent-500",
      services: [
        {
          title: "Maintenance & Updates",
          description:
            "Regular updates and improvements to your automation systems",
        },
        {
          title: "Technical Support",
          description: "Responsive assistance for any issues or questions",
        },
        {
          title: "Performance Monitoring",
          description:
            "Proactive monitoring to ensure optimal system performance",
        },
      ],
    },
  ];

  const specializedServices = [
    {
      icon: Calendar,
      title: "Scheduling Systems",
      description: "Automated appointment booking and management tools",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: ShoppingCart,
      title: "Inventory Management",
      description:
        "Smart inventory systems that predict needs and automate ordering",
      color: "bg-accent-200/10 text-accent-500",
    },
    {
      icon: FileText,
      title: "Document Processing",
      description: "AI-powered document analysis and data extraction",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Headphones,
      title: "Customer Service Automation",
      description: "Smart systems that route and respond to customer inquiries",
      color: "bg-accent-200/10 text-accent-500",
    },
  ];

  return (
    <PageLayout
      title="Our Services"
      subtitle="Comprehensive AI automation solutions to streamline your business operations"
    >
      <section className="py-12 md:py-16 px-4 md:px-16">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto mb-12 text-center"
          >
            <p className="text-lg text-foreground/80">
              At Obliquepath, we offer a range of AI-powered automation services
              designed to help small and mid-sized businesses save time, reduce
              costs, and improve efficiency. Explore our services below to see
              how we can help your business.
            </p>
          </motion.div>

          <div className="space-y-24">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                {/* Content - alternating left/right */}
                <div
                  className={`flex flex-col space-y-6 ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div
                    className={`w-16 h-16 rounded-2xl ${category.color} flex items-center justify-center`}
                  >
                    <category.icon className="h-8 w-8" />
                  </div>

                  <h2 className="text-3xl font-bold">{category.title}</h2>
                  <p className="text-lg text-foreground/80">
                    {category.description}
                  </p>

                  <div className="space-y-4 mt-4">
                    {category.services.map((service, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 shrink-0">
                          <ArrowRight className="h-3 w-3 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold">{service.title}</h3>
                          <p className="text-foreground/70 text-sm">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link href={`/${category.id}`}>
                      <Button className="bg-primary hover:bg-primary/90">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Image/Card - alternating left/right */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative w-full aspect-square max-w-md mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl" />
                    <div className="absolute inset-4 bg-card rounded-xl shadow-lg border overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
                      <div className="relative p-6 h-full flex flex-col">
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-2">
                            <category.icon className="h-6 w-6 text-primary" />
                            <h3 className="font-semibold">{category.title}</h3>
                          </div>
                        </div>

                        <div className="space-y-4 flex-1">
                          {category.services.map((service, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.1 * idx }}
                              viewport={{ once: true }}
                              className="bg-background/50 p-3 rounded-lg"
                            >
                              <p className="text-sm font-medium">
                                {service.title}
                              </p>
                            </motion.div>
                          ))}
                        </div>

                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{
                            repeat: Number.POSITIVE_INFINITY,
                            duration: 2,
                          }}
                          className="mt-4 bg-primary/10 p-3 rounded-lg"
                        >
                          <p className="text-sm font-medium text-center">
                            Customized for your business needs
                          </p>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16  px-4 md:px-16 bg-background/50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Specialized Solutions</h2>
            <p className="text-foreground/70">
              In addition to our core services, we offer specialized solutions
              tailored to specific business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {specializedServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card className="h-full border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-md">
                  <CardHeader>
                    <div
                      className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4`}
                    >
                      <service.icon className="h-6 w-6" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-foreground/70">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 md:px-16">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-foreground/80 mb-8">
              Book a free demo to see how our AI automation solutions can help
              your business save time and boost productivity.
            </p>
            <Link href="/book-demo">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Book a Free Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
