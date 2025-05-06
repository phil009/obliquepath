"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CTAProps {
  primaryText?: string;
  primaryLink?: string;
  secondaryText?: string;
  secondaryLink?: string;
  delay?: number;
  className?: string;
  align?: "left" | "center" | "right";
}

export function CTA({
  primaryText = "Book a Free Automation Audit",
  primaryLink = "/book-demo",
  secondaryText = "Not Sure? See Use Cases",
  secondaryLink = "/case-studies",
  delay = 0.5,
  className = "",
  align = "left",
}: CTAProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`flex flex-col sm:flex-row gap-4 pt-4 ${
        align === "center"
          ? "justify-center items-center"
          : align === "right"
          ? "justify-end"
          : ""
      } ${className}`}
    >
      <Link href={primaryLink}>
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 w-full sm:w-auto"
        >
          {primaryText}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
      <Link href={secondaryLink}>
        <Button size="lg" variant="outline" className="w-full sm:w-auto">
          {secondaryText}
        </Button>
      </Link>
    </motion.div>
  );
}
