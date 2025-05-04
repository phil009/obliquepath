"use client";

import type React from "react";

import { useState } from "react";
import { PageLayout } from "@/components/page-layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2, Calendar, Clock, Users, ArrowRight } from "lucide-react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function BookDemoPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would handle the form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const demoFeatures = [
    {
      icon: Calendar,
      title: "30-Minute Session",
      description:
        "A focused demonstration of our solutions relevant to your business",
    },
    {
      icon: Users,
      title: "Personalized Demo",
      description: "Tailored to your specific industry and business challenges",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Choose a time that works best for your team",
    },
  ];

  return (
    <PageLayout
      title="Book a Free Demo"
      subtitle="See how our AI automation solutions can transform your business"
    >
      <section className="py-12 md:py-16 px-4 md:px-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Left column - Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border/50 rounded-xl p-8 shadow-md"
            >
              <h3 className="text-lg sm:text-2xl font-bold mb-6">
                Request Your Free Demo
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-[400px] text-center"
                >
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-8 w-8 text-accent-300" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">
                    Demo Request Received!
                  </h4>
                  <p className="text-foreground/70 mb-4">
                    Thank you for your interest. One of our team members will
                    contact you shortly to schedule your personalized demo.
                  </p>
                  <p className="text-sm text-foreground/60">
                    Please check your email for a confirmation of your request.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="Your first name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Your last name"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      placeholder="Your company name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service of Interest</Label>
                    <Select
                      value={selectedService}
                      onValueChange={setSelectedService}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ai-automation">
                          AI Automation
                        </SelectItem>
                        <SelectItem value="custom-web-solutions">
                          Custom Web Solutions
                        </SelectItem>
                        <SelectItem value="process-optimization">
                          Process Optimization
                        </SelectItem>
                        <SelectItem value="tech-support">
                          Tech Support
                        </SelectItem>
                        <SelectItem value="multiple">
                          Multiple Services
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Company Size</Label>
                    <RadioGroup
                      defaultValue="small"
                      className="flex flex-wrap gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="small" id="small" />
                        <Label htmlFor="small">1-10 employees</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="medium" id="medium" />
                        <Label htmlFor="medium">11-50 employees</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="large" id="large" />
                        <Label htmlFor="large">51+ employees</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Tell us about your needs</Label>
                    <Textarea
                      id="message"
                      placeholder="What challenges are you looking to solve with automation?"
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    Request Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Right column - Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">What to Expect</h3>
                <p className="text-foreground/80 mb-6">
                  Our free demo is a personalized session where we&apos;ll show
                  you how our AI automation solutions can address your specific
                  business challenges. You&apos;ll get a chance to see our tools
                  in action and ask any questions you might have.
                </p>

                <div className="space-y-6 mt-8">
                  {demoFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <feature.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">{feature.title}</h4>
                        <p className="text-foreground/70">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
                <h4 className="font-bold mb-2 flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-accent-300 mr-2" />
                  No Obligation
                </h4>
                <p className="text-foreground/70 text-sm">
                  Our demo is completely free with no obligation to purchase.
                  We&apos;re confident in the value our solutions provide and
                  want to show you how they can benefit your business.
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <h4 className="font-bold mb-2">Frequently Asked Questions</h4>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-medium">How long is the demo?</p>
                    <p className="text-foreground/70">
                      Our demos typically last 30 minutes, with additional time
                      for questions.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">
                      Do I need to prepare anything?
                    </p>
                    <p className="text-foreground/70">
                      Just come with your questions and challenges. We&apos;ll
                      handle the rest.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Can I invite my team?</p>
                    <p className="text-foreground/70">
                      We encourage you to invite anyone who would benefit from
                      seeing the demo.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
