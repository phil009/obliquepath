"use client"

import React, { useRef, useState, useEffect } from "react"
import { motion, useAnimation, AnimatePresence, type PanInfo } from "framer-motion"
import { Bot, Code, LineChart, Headphones, Calendar, ShoppingCart, FileText, Cog } from "lucide-react"
import { useInView } from "framer-motion"

// Define services with icons
const services = [
  {
    id: "ai-chatbots",
    title: "AI Chatbots",
    description:
      "Intelligent conversational agents that handle customer inquiries 24/7, reducing response times and increasing customer satisfaction while freeing up your team to focus on complex tasks.",
    icon: Bot,
    color: "bg-primary-800/50 text-white",
    iconColor: "text-white",
  },
  {
    id: "web-solutions",
    title: "Custom Web Solutions",
    description:
      "Tailored web applications designed with automation and UX in mind, creating seamless digital experiences that streamline your business processes and delight your customers.",
    icon: Code,
    color: "bg-accent-700/30 text-white",
    iconColor: "text-white",
  },
  {
    id: "process-optimization",
    title: "Process Optimization",
    description:
      "Analyzing operations and designing automation strategies that eliminate bottlenecks, reduce manual work, and create more efficient workflows throughout your organization.",
    icon: LineChart,
    color: "bg-primary-800/50 text-white",
    iconColor: "text-white",
  },
  {
    id: "customer-service",
    title: "Customer Service Automation",
    description:
      "Smart systems that route and respond to customer inquiries, ensuring timely responses and consistent service quality while scaling to handle peak demand periods.",
    icon: Headphones,
    color: "bg-accent-700/30 text-white",
    iconColor: "text-white",
  },
  {
    id: "scheduling",
    title: "Scheduling Systems",
    description:
      "Automated appointment booking and management tools that eliminate double-bookings, reduce no-shows, and optimize your team's availability for maximum productivity.",
    icon: Calendar,
    color: "bg-primary-800/50 text-white",
    iconColor: "text-white",
  },
  {
    id: "inventory",
    title: "Inventory Management",
    description:
      "Smart inventory systems that predict needs and automate ordering, preventing stockouts and overstock situations while optimizing your cash flow and storage requirements.",
    icon: ShoppingCart,
    color: "bg-accent-700/30 text-white",
    iconColor: "text-white",
  },
  {
    id: "document-processing",
    title: "Document Processing",
    description:
      "AI-powered document analysis and data extraction that turns unstructured information into actionable data, saving countless hours of manual data entry and processing.",
    icon: FileText,
    color: "bg-primary-800/50 text-white",
    iconColor: "text-white",
  },
  {
    id: "tech-support",
    title: "Tech Support & Integration",
    description:
      "Ongoing support to keep your systems running smoothly, with proactive monitoring and seamless integration with your existing tools and platforms for a unified workflow.",
    icon: Cog,
    color: "bg-accent-700/30 text-white",
    iconColor: "text-white",
  },
]

// Background decorative elements
const decorativeElements = [
  {
    shape: "circle",
    size: "lg",
    position: "top-[10%] left-[5%]",
    color: "from-primary-500/10 to-primary-700/10",
    animation: { y: [-20, 20], duration: 8 },
  },
  {
    shape: "circle",
    size: "md",
    position: "top-[15%] right-[10%]",
    color: "from-accent-500/10 to-accent-700/10",
    animation: { y: [-15, 15], duration: 7 },
  },
  {
    shape: "square",
    size: "lg",
    position: "bottom-[20%] left-[15%]",
    color: "from-primary-500/5 to-primary-700/5",
    animation: { rotate: [0, 10], duration: 10 },
  },
  {
    shape: "square",
    size: "sm",
    position: "bottom-[10%] right-[5%]",
    color: "from-accent-500/5 to-accent-700/5",
    animation: { rotate: [0, -10], duration: 9 },
  },
  {
    shape: "hexagon",
    size: "xl",
    position: "top-[40%] left-[80%]",
    color: "from-primary-500/5 to-accent-500/5",
    animation: { scale: [0.95, 1.05], duration: 8 },
  },
]

// Grid pattern for background
const GridPattern = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-[0.03] pointer-events-none">
      <div className="absolute inset-0 h-full w-full">
        {[...Array(20)].map((_, i) => (
          <div key={`h-${i}`} className="absolute left-0 right-0 h-px bg-current" style={{ top: `${(i + 1) * 5}%` }} />
        ))}
        {[...Array(20)].map((_, i) => (
          <div key={`v-${i}`} className="absolute top-0 bottom-0 w-px bg-current" style={{ left: `${(i + 1) * 5}%` }} />
        ))}
      </div>
    </div>
  )
}

// Hexagon SVG shape
const Hexagon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <polygon
      points="50 0, 93.3 25, 93.3 75, 50 100, 6.7 75, 6.7 25"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
    />
  </svg>
)

export function AutoServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [isWheelDragging, setIsWheelDragging] = useState(false)
  const [wheelRotation, setWheelRotation] = useState(0)
  const [autoRotate, setAutoRotate] = useState(true)
  const [direction, setDirection] = useState(0)

  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const wheelRef = useRef<HTMLDivElement>(null)

  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })
  const wheelControls = useAnimation()

  // Update viewport height and check if mobile on mount and resize
  useEffect(() => {
    const updateDimensions = () => {
      setIsMobile(window.innerWidth < 768) // 768px is typical md breakpoint
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  // Auto-rotate the wheel and change active service
  useEffect(() => {
    if (!isInView || isDragging || isWheelDragging || !autoRotate) return

    const interval = setInterval(() => {
      setDirection(1)
      setActiveIndex((prev) => (prev + 1) % services.length)
    }, 5000) // Change service every 5 seconds

    return () => clearInterval(interval)
  }, [isInView, isDragging, isWheelDragging, autoRotate])

  // Animate wheel rotation when active index changes
  useEffect(() => {
    const rotationAngle = (activeIndex * 360) / services.length
    setWheelRotation(rotationAngle)

    wheelControls.start({
      rotate: rotationAngle,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 20,
      },
    })
  }, [activeIndex, wheelControls])

  // Handle manual service selection
  const selectService = (index: number) => {
    setActiveIndex(index)
  }

  const nextService = () => {
    setDirection(1)
    setActiveIndex((prev) => (prev + 1) % services.length)
  }

  const prevService = () => {
    setDirection(-1)
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length)
  }

  // Handle swipe gesture on content
  const handleContentDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false)

    // Determine swipe direction based on velocity or offset
    const swipeThreshold = 50
    if (info.offset.x < -swipeThreshold) {
      setDirection(1)
      setActiveIndex((prev) => (prev + 1) % services.length)
    } else if (info.offset.x > swipeThreshold) {
      setDirection(-1)
      setActiveIndex((prev) => (prev - 1 + services.length) % services.length)
    }
  }

  // Handle wheel drag
  const handleWheelDragStart = () => {
    setIsWheelDragging(true)
    setAutoRotate(false) // Disable auto-rotation when user interacts with wheel
  }

  // Add event listener for pointer move to handle wheel rotation
  useEffect(() => {
    if (!isWheelDragging || !wheelRef.current) return

    const wheelElement = wheelRef.current
    const rect = wheelElement.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const handlePointerMove = (e: PointerEvent) => {
      // Calculate angle between center and pointer
      const deltaX = e.clientX - centerX
      const deltaY = e.clientY - centerY
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)

      // Convert to positive angle (0-360)
      const positiveAngle = (angle + 360) % 360

      // Calculate which service this angle corresponds to
      const segmentSize = 360 / services.length
      const serviceIndex = Math.round(positiveAngle / segmentSize) % services.length

      // Only update if the service has changed
      if (serviceIndex !== activeIndex) {
        setDirection(serviceIndex > activeIndex ? 1 : -1)
        setActiveIndex(serviceIndex)
      }
    }

    document.addEventListener("pointermove", handlePointerMove)

    return () => {
      document.removeEventListener("pointermove", handlePointerMove)
    }
  }, [isWheelDragging, activeIndex, services.length])

  const handleWheelDragEnd = () => {
    setIsWheelDragging(false)

    // Re-enable auto-rotation after a delay
    setTimeout(() => {
      setAutoRotate(true)
    }, 5000)
  }

  // Handle wheel icon click
  const handleWheelIconClick = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1)
    setActiveIndex(index)
    setAutoRotate(false)

    // Re-enable auto-rotation after a delay
    setTimeout(() => {
      setAutoRotate(true)
    }, 5000)
  }

  return (
    <section id="services" ref={sectionRef} className="relative bg-background py-20 min-h-screen flex items-center">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <GridPattern />

        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background opacity-90" />

        {/* Animated background elements */}
        <div className="absolute inset-0">
          {decorativeElements.map((elem, index) => {
            // Determine size class based on screen size
            const sizeClass = {
              sm: isMobile ? "w-16 h-16" : "w-24 h-24",
              md: isMobile ? "w-24 h-24" : "w-40 h-40",
              lg: isMobile ? "w-32 h-32" : "w-64 h-64",
              xl: isMobile ? "w-48 h-48" : "w-96 h-96",
            }[elem.size]

            // Determine shape component
            let ShapeComponent
            if (elem.shape === "circle") {
              ShapeComponent = <div className={`rounded-full bg-gradient-to-br ${elem.color} blur-3xl`} />
            } else if (elem.shape === "square") {
              ShapeComponent = <div className={`rounded-lg bg-gradient-to-br ${elem.color} blur-3xl`} />
            } else if (elem.shape === "hexagon") {
              ShapeComponent = <Hexagon className={`text-gradient-to-br ${elem.color} blur-3xl`} />
            }

            return (
              <motion.div
                key={index}
                className={`absolute ${elem.position} ${sizeClass} opacity-30`}
                animate={elem.animation}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: elem.animation.duration,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                {ShapeComponent}
              </motion.div>
            )
          })}

          {/* Floating particles - fewer on mobile */}
          <div className="absolute inset-0">
            {[...Array(isMobile ? 15 : 30)].map((_, i) => {
              const size = Math.random() * 4 + 2
              const initialX = Math.random() * 100
              const initialY = Math.random() * 100
              const duration = Math.random() * 20 + 10
              const delay = Math.random() * 5

              return (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-primary/10 dark:bg-primary/20"
                  style={{
                    width: size,
                    height: size,
                    left: `${initialX}%`,
                    top: `${initialY}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.2, 0.8, 0.2],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration,
                    delay,
                    ease: "easeInOut",
                  }}
                />
              )
            })}
          </div>

          {/* Animated lines - simplified on mobile */}
          <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M0,100 Q250,0 500,100 T1000,100"
              fill="none"
              stroke="url(#gradient1)"
              strokeWidth={isMobile ? "1" : "2"}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
            />
            {!isMobile && (
              <motion.path
                d="M0,200 Q250,300 500,200 T1000,200"
                fill="none"
                stroke="url(#gradient2)"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.5 }}
                transition={{ duration: 5, delay: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
              />
            )}
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary-500))" stopOpacity="0.2" />
                <stop offset="50%" stopColor="hsl(var(--accent-500))" stopOpacity="0.5" />
                <stop offset="100%" stopColor="hsl(var(--primary-500))" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--accent-500))" stopOpacity="0.2" />
                <stop offset="50%" stopColor="hsl(var(--primary-500))" stopOpacity="0.5" />
                <stop offset="100%" stopColor="hsl(var(--accent-500))" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Content container */}
      <div className="container mx-auto relative z-10 px-4 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-8 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            Our <span className="gradient-text">AI-Powered</span> Services
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-foreground/70">
            We offer a comprehensive suite of automation solutions designed to streamline your business operations and
            boost productivity.
          </p>
        </motion.div>

        {/* Mobile layout (stacked) */}
        {isMobile ? (
          <div className="flex flex-col h-[70vh] justify-between">
            {/* Service descriptions - top half */}
            <motion.div
              className="relative h-[40vh] flex items-center mb-4 touch-pan-x"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={handleContentDragEnd}
              ref={contentRef}
            >
              <AnimatePresence custom={direction} mode="wait">
                {services.map(
                  (service, index) =>
                    index === activeIndex && (
                      <motion.div
                        key={service.id}
                        className="absolute inset-0 flex flex-col justify-center"
                        custom={direction}
                        variants={{
                          enter: (direction) => ({ opacity: 0, x: direction > 0 ? 50 : -50 }),
                          center: { opacity: 1, x: 0 },
                          exit: (direction) => ({ opacity: 0, x: direction < 0 ? 50 : -50 }),
                        }}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.5 }}
                      >
                        <div className="backdrop-blur-sm bg-background/30 p-4 rounded-xl border border-border/10">
                          <div
                            className={`w-10 h-10 rounded-lg ${service.color} flex items-center justify-center mb-3`}
                          >
                            {React.createElement(service.icon, {
                              className: "h-5 w-5",
                            })}
                          </div>
                          <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                          <p className="text-sm text-foreground/70">{service.description}</p>
                        </div>
                      </motion.div>
                    ),
                )}
              </AnimatePresence>
            </motion.div>

            {/* Wheel - bottom half */}
            <div className="relative h-[30vh] flex items-center justify-center">
              {/* Rotating wheel - smaller on mobile */}
              <motion.div
                className="relative w-[250px] h-[250px] cursor-grab active:cursor-grabbing touch-none"
                animate={wheelControls}
                ref={wheelRef}
                onPointerDown={handleWheelDragStart}
                onPointerUp={handleWheelDragEnd}
                style={{ rotate: wheelRotation }}
              >
                {/* Wheel background circle */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 250 250">
                  <motion.circle
                    cx="125"
                    cy="125"
                    r="100"
                    fill="none"
                    stroke="currentColor"
                    strokeOpacity="0.1"
                    strokeWidth="1"
                    strokeDasharray="5 5"
                  />
                </svg>

                {/* Icons on the wheel */}
                {services.map((service, index) => {
                  // Calculate position on the wheel
                  const angle = (index * 360) / services.length
                  const radian = (angle * Math.PI) / 180
                  const radius = 100 // Half of wheel width for mobile

                  const x = Math.cos(radian) * radius
                  const y = Math.sin(radian) * radius

                  // Determine if this is the active icon
                  const isActive = index === activeIndex

                  return (
                    <motion.div
                      key={service.id}
                      className={`absolute rounded-full ${
                        isActive ? "opacity-0" : service.color
                      } flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 cursor-pointer`}
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        width: "40px",
                        height: "40px",
                        transition: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                      }}
                      onClick={() => handleWheelIconClick(index)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {!isActive &&
                        React.createElement(service.icon, {
                          className: "h-5 w-5",
                        })}
                    </motion.div>
                  )
                })}

                {/* Connecting lines from center to each icon */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 250 250">
                  {services.map((_, index) => {
                    const angle = (index * 360) / services.length
                    const radian = (angle * Math.PI) / 180
                    const radius = 100
                    const x = Math.cos(radian) * radius
                    const y = Math.sin(radian) * radius

                    const isActive = index === activeIndex
                    const opacity = isActive ? 0.3 : 0.1

                    return (
                      <motion.line
                        key={`line-${index}`}
                        x1="125"
                        y1="125"
                        x2={125 + x}
                        y2={125 + y}
                        stroke="currentColor"
                        strokeOpacity={opacity}
                        strokeWidth={isActive ? 2 : 1}
                        strokeDasharray={isActive ? "none" : "5 5"}
                      />
                    )
                  })}
                </svg>
              </motion.div>

              {/* Fixed center icon (outside the rotating wheel) */}
              {services[activeIndex] && (
                <motion.div
                  key={`center-${activeIndex}`}
                  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-[8px] flex items-center justify-center">
                    <motion.div
                      className={`w-[90px] h-[90px] rounded-full ${services[activeIndex].color} flex flex-col items-center justify-center`}
                      animate={{
                        scale: [1, 1.05, 1],
                        boxShadow: [
                          "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                          "0 20px 35px -5px rgba(0, 0, 0, 0.2)",
                          "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                        ],
                      }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 3,
                        ease: "easeInOut",
                      }}
                    >
                      {React.createElement(services[activeIndex].icon, {
                        className: `h-8 w-8 ${services[activeIndex].iconColor} mb-1`,
                      })}
                      <span className="text-xs font-medium text-center px-1">{services[activeIndex].title}</span>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Service navigation dots */}
            <div className="flex justify-center gap-2 mt-4">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => selectService(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === activeIndex ? "bg-primary" : "bg-primary/30"
                  }`}
                  aria-label={`Go to service ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          // Desktop layout (side by side)
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Service descriptions */}
            <motion.div
              className="relative h-[50vh] flex items-center touch-pan-x"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={handleContentDragEnd}
              ref={contentRef}
            >
              <AnimatePresence custom={direction} mode="wait">
                {services.map(
                  (service, index) =>
                    index === activeIndex && (
                      <motion.div
                        key={service.id}
                        className="absolute inset-0 flex flex-col justify-center"
                        custom={direction}
                        variants={{
                          enter: (direction) => ({ opacity: 0, x: direction > 0 ? 50 : -50 }),
                          center: { opacity: 1, x: 0 },
                          exit: (direction) => ({ opacity: 0, x: direction < 0 ? 50 : -50 }),
                        }}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.5 }}
                      >
                        <div className="max-w-lg backdrop-blur-sm bg-background/30 p-6 rounded-xl border border-border/10">
                          <div
                            className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4`}
                          >
                            {React.createElement(service.icon, {
                              className: "h-6 w-6",
                            })}
                          </div>
                          <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                          <p className="text-foreground/70">{service.description}</p>
                        </div>
                      </motion.div>
                    ),
                )}
              </AnimatePresence>
            </motion.div>

            {/* Right column - Rotating wheel of icons with fixed center icon */}
            <div className="relative h-[50vh] flex items-center justify-center">
              {/* Rotating wheel */}
              <motion.div
                className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] cursor-grab active:cursor-grabbing touch-none"
                animate={wheelControls}
                ref={wheelRef}
                onPointerDown={handleWheelDragStart}
                onPointerUp={handleWheelDragEnd}
                style={{ rotate: wheelRotation }}
              >
                {/* Wheel background circle */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <motion.circle
                    cx="200"
                    cy="200"
                    r="150"
                    fill="none"
                    stroke="currentColor"
                    strokeOpacity="0.1"
                    strokeWidth="1"
                    strokeDasharray="5 5"
                  />
                </svg>

                {/* Icons on the wheel */}
                {services.map((service, index) => {
                  // Calculate position on the wheel
                  const angle = (index * 360) / services.length
                  const radian = (angle * Math.PI) / 180
                  const radius = 150 // Half of wheel width

                  const x = Math.cos(radian) * radius
                  const y = Math.sin(radian) * radius

                  // Determine if this is the active icon
                  const isActive = index === activeIndex

                  return (
                    <motion.div
                      key={service.id}
                      className={`absolute rounded-full ${
                        isActive ? "opacity-0" : service.color
                      } flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 cursor-pointer`}
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        width: "60px",
                        height: "60px",
                        transition: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                      }}
                      onClick={() => handleWheelIconClick(index)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {!isActive &&
                        React.createElement(service.icon, {
                          className: "h-6 w-6",
                        })}
                    </motion.div>
                  )
                })}

                {/* Connecting lines from center to each icon */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  {services.map((_, index) => {
                    const angle = (index * 360) / services.length
                    const radian = (angle * Math.PI) / 180
                    const radius = 150
                    const x = Math.cos(radian) * radius
                    const y = Math.sin(radian) * radius

                    const isActive = index === activeIndex
                    const opacity = isActive ? 0.3 : 0.1

                    return (
                      <motion.line
                        key={`line-${index}`}
                        x1="200"
                        y1="200"
                        x2={200 + x}
                        y2={200 + y}
                        stroke="currentColor"
                        strokeOpacity={opacity}
                        strokeWidth={isActive ? 2 : 1}
                        strokeDasharray={isActive ? "none" : "5 5"}
                      />
                    )
                  })}
                </svg>
              </motion.div>

              {/* Fixed center icon (outside the rotating wheel) */}
              {services[activeIndex] && (
                <motion.div
                  key={`center-${activeIndex}`}
                  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-[10px] flex items-center justify-center">
                    <motion.div
                      className={`w-[120px] h-[120px] rounded-full ${services[activeIndex].color} flex flex-col items-center justify-center`}
                      animate={{
                        scale: [1, 1.05, 1],
                        boxShadow: [
                          "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                          "0 20px 35px -5px rgba(0, 0, 0, 0.2)",
                          "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                        ],
                      }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 3,
                        ease: "easeInOut",
                      }}
                    >
                      {React.createElement(services[activeIndex].icon, {
                        className: `h-12 w-12 ${services[activeIndex].iconColor} mb-2`,
                      })}
                      <span className="text-xs font-medium text-center">{services[activeIndex].title}</span>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        )}

        {/* Service progress indicator */}
        <motion.div
          className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-foreground/60 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span className="text-primary font-bold">{activeIndex + 1}</span>
          <span> / {services.length}</span>
        </motion.div>
      </div>
    </section>
  )
}
