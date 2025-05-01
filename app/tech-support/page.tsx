"use client"

import { PageLayout } from "@/components/page-layout"
import { ComingSoon } from "@/components/coming-soon"
import { motion } from "framer-motion"
import { Headphones, Shield, RefreshCw, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TechSupportPage() {
  const supportFeatures = [
    {
      icon: Headphones,
      title: "Responsive Support",
      description: "Quick response times and dedicated assistance for all your technical needs",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Shield,
      title: "Proactive Monitoring",
      description: "We identify and resolve potential issues before they impact your business",
      color: "bg-accent/10 text-accent",
    },
    {
      icon: RefreshCw,
      title: "Regular Updates",
      description: "Continuous improvements to keep your systems running at peak performance",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Fine-tuning your automation tools for maximum efficiency and speed",
      color: "bg-accent/10 text-accent",
    },
  ]

  return (
    <PageLayout title="Tech Support">
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-foreground/80 mb-8"
            >
              We provide ongoing support and maintenance for all our automation systems. From bug fixes to performance
              upgrades, we&apos;re here to ensure your tools stay efficient and reliable.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
              {supportFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                >
                  <Card className="h-full border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-md">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                        <feature.icon className="h-6 w-6" />
                      </div>
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/70">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ComingSoon message="Our support plans will be available shortly." />
    </PageLayout>
  )
}
