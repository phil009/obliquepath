import type { ReactNode } from "react";
import { PageHeader } from "@/components/page-header";
import { motion } from "framer-motion";
import { variants } from "@/lib/motion-variants";

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

export function PageLayout({ children, title, subtitle }: PageLayoutProps) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "tween", duration: 0.5 }}
      className="py-8 md:py-20"
    >
      <main className="min-h-screen">
        <PageHeader title={title} subtitle={subtitle} />
        {children}
      </main>
    </motion.div>
  );
}
