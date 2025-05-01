"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock } from "lucide-react"
import Link from "next/link"

interface ComingSoonProps {
  message?: string
}

export function ComingSoon({ message = "More details coming soon." }: ComingSoonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-col items-center justify-center py-12 px-4 text-center"
    >
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
        <Clock className="h-8 w-8 text-primary" />
      </div>
      <h3 className="text-xl md:text-2xl font-bold mb-4">{message}</h3>
      <p className="text-foreground/70 mb-8 max-w-md">
        We're working hard to bring you more information. In the meantime, feel free to contact us with any questions.
      </p>
      <Link href="/contact">
        <Button className="bg-primary hover:bg-primary/90">
          Get in Touch
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    </motion.div>
  )
}
