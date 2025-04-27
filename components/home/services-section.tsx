  "use client";

  import { motion } from "framer-motion";
  import { useInView } from "framer-motion";
  import { useRef } from "react";
  import {
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
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

  const services = [
    {
      title: "AI Chatbots",
      description:
        "Intelligent conversational agents that handle customer inquiries 24/7",
      icon: Bot,
      color: "bg-primary/10 text-primary",
    },
    {
      title: "Custom Web Solutions",
      description:
        "Tailored web applications designed with automation and UX in mind",
      icon: Code,
      color: "bg-accent/10 text-accent",
    },
    {
      title: "Process Optimization",
      description: "Analyzing operations and designing automation strategies",
      icon: LineChart,
      color: "bg-primary/10 text-primary",
    },
    {
      title: "Customer Service Automation",
      description: "Smart systems that route and respond to customer inquiries",
      icon: Headphones,
      color: "bg-accent/10 text-accent",
    },
    {
      title: "Scheduling Systems",
      description: "Automated appointment booking and management tools",
      icon: Calendar,
      color: "bg-primary/10 text-primary",
    },
    {
      title: "Inventory Management",
      description:
        "Smart inventory systems that predict needs and automate ordering",
      icon: ShoppingCart,
      color: "bg-accent/10 text-accent",
    },
    {
      title: "Document Processing",
      description: "AI-powered document analysis and data extraction",
      icon: FileText,
      color: "bg-primary/10 text-primary",
    },
    {
      title: "Tech Support & Integration",
      description: "Ongoing support to keep your systems running smoothly",
      icon: Cog,
      color: "bg-accent/10 text-accent",
    },
  ];

  export function ServicesSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
        },
      },
    };

    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      },
    };

    return (
      <section id="services" className="py-20 px-4 lg:px-16 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">AI-Powered</span> Services
            </h2>
            <p className="text-foreground/70 text-lg">
              We offer a comprehensive suite of automation solutions designed to
              streamline your business operations and boost productivity.
            </p>
          </motion.div>

          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
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
          </motion.div>
        </div>
      </section>
    );
  }
