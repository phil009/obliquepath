"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
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
import { contactUs } from "@/api/api";
import { toast } from "sonner";

// Define the form schema with Zod
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  company: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

// Define the form values type
type FormValues = z.infer<typeof formSchema>;

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Initialize the form with react-hook-form and zod resolver
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  // Handle form submission
  async function onSubmit(data: FormValues) {
    setIsSubmitted(false);
    setIsLoading(true);
    const res = await contactUs(data);
    if (res === null) {
      toast.error("Failed to message. Please try again later.");
      setIsLoading(false);
      return;
    }
    toast.success("Message sent successfully!");
    setIsSubmitted(true);
    form.reset();
  }

  return (
    <section
      id="contact"
      className="py-20 px-4 lg:px-16 bg-background/5 overflow-hidden"
    >
      <div className="container max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to <span className="gradient-text">Transform</span> Your
            Business?
          </h2>
          <p className="text-foreground/70 text-lg">
            Get in touch with us to discuss how our AI automation solutions can
            help your business save time and boost productivity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-card border border-border/50 rounded-xl p-8 shadow-md"
          >
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-[320px] text-center"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-8 w-8 text-accent-300" />
                </div>
                <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                <p className="text-foreground/70">
                  Thank you for reaching out. We&apos;ll get back to you
                  shortly.
                </p>
              </motion.div>
            ) : (
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

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
                  </div>

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
                    name="message"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your automation needs"
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
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </Form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="text-foreground/70 mb-8">
                  Our team is ready to answer your questions and discuss how we
                  can help your business leverage AI automation.
                </p>
              </div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email Us</h4>
                  <a
                    href="mailto:info@obliquepath.dev"
                    className="text-foreground/70"
                  >
                    info@obliquepath.dev
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Call Us</h4>
                  <a href="tel:+16476790535" className="text-foreground/70">
                    (+1)-647-679-0535
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Visit Us</h4>
                  <a
                    href="https://maps.app.goo.gl/2XUkCGTVxzbHbyMX7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70"
                  >
                    Windsor, Ontario
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
