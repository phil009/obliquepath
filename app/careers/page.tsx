"use client";

import type React from "react";

import { PageLayout } from "@/components/page-layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function CareersPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const values = [
    "Passion for automation and problem-solving",
    "Commitment to practical, user-friendly solutions",
    "Collaborative approach to client projects",
    "Continuous learning and improvement",
    "Dedication to making technology accessible",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would handle the form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <PageLayout title="Careers at Obliquepath">
      <section className="py-12 md:py-16 px-4 md:px-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-foreground/80 mb-8"
            >
              We&apos;re always on the lookout for talented people who are
              passionate about automation, problem-solving, and helping
              businesses grow smarter.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="my-12"
            >
              <h2 className="text-2xl font-bold mb-6">What We Look For</h2>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                    <p className="text-foreground/80">{value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="my-12 bg-card border border-border/50 rounded-xl p-8 shadow-md"
            >
              <h3 className="text-2xl font-bold mb-6">Send Us Your Resume</h3>
              <p className="text-foreground/70 mb-6">
                No openings right now — but send us your resume and we&apos;ll
                keep you in mind!
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-[320px] text-center"
                >
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-accent" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Resume Received!</h4>
                  <p className="text-foreground/70">
                    Thank you for your interest. We&apos;ll reach out if
                    there&apos;s a good fit.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="position" className="text-sm font-medium">
                      Position of Interest
                    </label>
                    <Input
                      id="position"
                      placeholder="What role are you interested in?"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Cover Letter
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about yourself and why you're interested in Obliquepath"
                      rows={4}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="resume" className="text-sm font-medium">
                      Resume Link
                    </label>
                    <Input
                      id="resume"
                      placeholder="Link to your resume (Google Drive, Dropbox, etc.)"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    Submit Application
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
