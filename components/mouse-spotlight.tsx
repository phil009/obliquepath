"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface MouseSpotlightProps {
  size?: number
  opacity?: number
  color?: string
  blur?: number
  disabled?: boolean
}

export function MouseSpotlight({
  size = 400,
  opacity = 0.07,
  color = "hsl(var(--primary-500))",
  blur = 100,
  disabled = false,
}: MouseSpotlightProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (disabled) return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [disabled, isVisible])

  if (disabled) return null

  return (
    <motion.div
      className="fixed pointer-events-none z-0"
      animate={{
        x: mousePosition.x - size / 2,
        y: mousePosition.y - size / 2,
        opacity: isVisible ? opacity : 0,
      }}
      transition={{ type: "spring", mass: 0.1, stiffness: 800, damping: 30 }}
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: color,
        filter: `blur(${blur}px)`,
      }}
    />
  )
}
