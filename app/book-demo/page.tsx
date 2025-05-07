"use client";

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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { bookDemo } from "@/api/api";
import { toast } from "sonner";

// Define the form schema with Zod
const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  company: z.string().min(1, {
    message: "Company name is required.",
  }),
  service: z.string({
    required_error: "Please select a service.",
  }),
  companySize: z.enum(["small", "medium", "large"], {
    required_error: "Please select your company size.",
  }),
  message: z.string().optional(),
});

// Define the form values type
type FormValues = z.infer<typeof formSchema>;

export default function BookDemoPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Initialize the form with react-hook-form and zod resolver
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      service: "",
      companySize: "small",
      message: "",
    },
  });

  // Handle form submission
  async function onSubmit(data: FormValues) {
    setIsSubmitted(false);
    setIsLoading(true);
    const res = await bookDemo(data);
    if (res === null) {
      toast.error("Failed to send demo request. Please try again later.");
      setIsLoading(false);
      return;
    }
    toast.success("Demo request sent successfully!");
    setIsSubmitted(true);
    form.reset();
  }

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
        <div className="container max-w-7xl mx-auto">
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
                </motion.div>
              ) : (
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your first name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your last name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="your.email@example.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel>Company</FormLabel>
                          <FormControl>
                            <Input placeholder="Your company name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel>Service of Interest</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
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
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="companySize"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel>Company Size</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-wrap gap-4"
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="small" id="small" />
                                <FormLabel
                                  htmlFor="small"
                                  className="font-normal"
                                >
                                  1-10 employees
                                </FormLabel>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="medium" id="medium" />
                                <FormLabel
                                  htmlFor="medium"
                                  className="font-normal"
                                >
                                  11-50 employees
                                </FormLabel>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="large" id="large" />
                                <FormLabel
                                  htmlFor="large"
                                  className="font-normal"
                                >
                                  51+ employees
                                </FormLabel>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel>Tell us about your needs</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="What challenges are you looking to solve with automation?"
                              rows={4}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/50"
                      disabled={isLoading}
                    >
                      Request Demo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </Form>
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
                  <CheckCircle2 className="h-5 w-5 text-accent mr-2" />
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
