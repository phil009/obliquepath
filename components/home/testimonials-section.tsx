"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView, PanInfo } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  Link2Icon,
} from "lucide-react";
import Image from "next/image";

// Define testimonials with company info
const testimonials = [
  {
    id: 1,
    company: "Immaculatus Cleaning",
    link: "https://immaculatuscleaners.com/",
    logo: "/clients-logo/immaculatus-cleaning.svg",
    quote:
      "Obliquepath's scheduling automation transformed our business. We've reduced no-shows by 70% and our team can focus on delivering exceptional service instead of administrative tasks.",
    author: "Maria Rodriguez",
    position: "Operations Director",
    rating: 5,
    industry: "Cleaning Services",
    results: [
      { label: "Scheduling Efficiency", value: "+65%" },
      { label: "Customer Satisfaction", value: "+42%" },
      { label: "Time Saved Weekly", value: "24 hours" },
    ],
  },
  {
    id: 2,
    company: "BuildPath Canada",
    link: "https://www.buildpathcanada.com/",
    logo: "/clients-logo/buildpath.svg",
    quote:
      "The custom project management AI that Obliquepath built for us has revolutionized how we track construction projects. Real-time updates and predictive analytics have given us a competitive edge.",
    author: "Thomas Chen",
    position: "Project Manager",
    rating: 5,
    industry: "Construction",
    results: [
      { label: "Project Completion", value: "12% faster" },
      { label: "Budget Accuracy", value: "+28%" },
      { label: "Client Retention", value: "95%" },
    ],
  },
  {
    id: 3,
    company: "Anitrous.ca",
    link: "https://anitrous.ca/",
    logo: "/clients-logo/anitrous.svg",
    quote:
      "Our e-commerce operations needed serious automation. Obliquepath delivered a solution that seamlessly integrated with our existing systems and dramatically improved our inventory management.",
    author: "Sarah Johnson",
    position: "E-commerce Director",
    rating: 5,
    industry: "E-commerce",
    results: [
      { label: "Order Processing", value: "3x faster" },
      { label: "Inventory Accuracy", value: "99.8%" },
      { label: "Return Rate", value: "-15%" },
    ],
  },
  {
    id: 4,
    company: "Errand",
    logo: "/clients-logo/errand.svg",
    quote:
      "The AI chatbot Obliquepath developed for our service has handled over 80% of customer inquiries automatically. Our customer satisfaction scores have never been higher.",
    author: "Alex Patel",
    position: "Customer Experience Lead",
    rating: 4,
    industry: "On-demand Services",
    results: [
      { label: "Response Time", value: "-85%" },
      { label: "Support Tickets", value: "-62%" },
      { label: "Customer Retention", value: "+38%" },
    ],
  },
  {
    id: 5,
    company: "Harbor One Capital",
    link: "https://www.harboronecapital.com/",
    logo: "/clients-logo/hoc.svg",
    quote:
      "In the financial sector, accuracy and security are paramount. Obliquepath's document processing automation has transformed our workflow while maintaining the highest standards of data protection.",
    author: "Michael Winters",
    position: "Chief Technology Officer",
    rating: 5,
    industry: "Financial Services",
    results: [
      { label: "Document Processing", value: "5x faster" },
      { label: "Error Rate", value: "-92%" },
      { label: "Compliance Score", value: "100%" },
    ],
  },
  {
    id: 6,
    company: "Junk Cycle",
    link: "https://junkcycle.ca/",
    logo: "/clients-logo/junk-cycle 1.jpg",
    quote:
      "Before Obliq Path, we were juggling messages across five platforms. Now, everything just runs. Bookings come in, reminders go out, and we show up. Simple and solid.",
    author: "Daniel Olayiwola",
    position: "Owner",
    rating: 5,
    industry: "Junk Removal & Waste Services",
    results: [
      { label: "Scheduling Time Reduced", value: "-60%" },
      { label: "No-Show Rate", value: "↓ significantly" },
      { label: "Team Coordination", value: "↑ improved flow" },
    ],
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const constraintsRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const nextTestimonial = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // Auto-advance testimonials (only when not dragging)
  useEffect(() => {
    if (!isInView || isDragging) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => clearInterval(interval);
  }, [isInView, activeIndex, isDragging]);

  // Handle swipe gesture
  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    setIsDragging(false);

    // Determine swipe direction based on velocity or offset
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      nextTestimonial();
    } else if (info.offset.x > swipeThreshold) {
      prevTestimonial();
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  // Background decorative elements
  const decorativeElements = [
    {
      type: "circle",
      position: "top-[10%] right-[10%]",
      size: "w-64 h-64 md:w-96 md:h-96",
      color: "from-primary/5 to-primary/10",
      animation: { scale: [0.9, 1.1, 0.9], duration: 15 },
    },
    {
      type: "circle",
      position: "bottom-[10%] left-[5%]",
      size: "w-48 h-48 md:w-80 md:h-80",
      color: "from-accent/5 to-accent/10",
      animation: { scale: [1.1, 0.9, 1.1], duration: 12 },
    },
  ];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-20 px-4 md:px-16 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        {decorativeElements.map((elem, index) => (
          <motion.div
            key={index}
            className={`absolute ${elem.position} ${elem.size} rounded-full bg-gradient-to-br ${elem.color} blur-3xl opacity-70`}
            animate={elem.animation}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: elem.animation.duration,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full">
            {[...Array(10)].map((_, i) => (
              <div
                key={`h-${i}`}
                className="absolute left-0 right-0 h-px bg-current"
                style={{ top: `${(i + 1) * 10}%` }}
              />
            ))}
            {[...Array(10)].map((_, i) => (
              <div
                key={`v-${i}`}
                className="absolute top-0 bottom-0 w-px bg-current"
                style={{ left: `${(i + 1) * 10}%` }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="gradient-text">Clients</span> Say
          </h2>
          <p className="text-foreground/70 text-lg">
            Discover how our AI automation solutions have helped businesses
            across different industries achieve remarkable results.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto" ref={constraintsRef}>
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-full touch-pan-y"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={handleDragEnd}
              whileTap={{ cursor: "grabbing" }}
            >
              <Card className="border border-border/50 shadow-md overflow-hidden bg-card/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                    {/* Left column - Company info and logo */}
                    <div className="lg:col-span-2 p-6 md:p-8 flex flex-col justify-between bg-gradient-to-br from-primary/5 to-accent/5">
                      <div className="flex items-center mb-4">
                        <Image
                          src={
                            testimonials[activeIndex].logo || "/placeholder.svg"
                          }
                          alt={testimonials[activeIndex].company}
                          width={120}
                          height={48}
                          className="w-24 h-auto grayscale rounded object-contain"
                        />
                      </div>
                      <div>
                        <a
                          href={testimonials[activeIndex].link}
                          className="text-xl md:text-2xl font-bold mb-2 flex items-center gap-2 hover:text-primary-400 transition-colors "
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {testimonials[activeIndex].company}
                          <Link2Icon className="h-4 w-4 text-primary" />
                        </a>

                        <p className="text-foreground/70 mb-4">
                          {testimonials[activeIndex].industry}
                        </p>

                        <div className="flex items-center mb-6">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${
                                i < testimonials[activeIndex].rating
                                  ? "text-primary fill-primary"
                                  : "text-foreground/20"
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      {!isMobile && (
                        <div className="grid grid-cols-3 gap-2">
                          {testimonials[activeIndex].results.map(
                            (result, index) => (
                              <div
                                key={index}
                                className="text-center p-3 bg-background/50 rounded-lg"
                              >
                                <p className="text-sm text-foreground/70">
                                  {result.label}
                                </p>
                                <p className="text-lg font-bold text-primary">
                                  {result.value}
                                </p>
                              </div>
                            )
                          )}
                        </div>
                      )}
                    </div>

                    {/* Right column - Testimonial quote */}
                    <div className="lg:col-span-3 p-6 md:p-8 flex flex-col justify-between">
                      <div>
                        <div className="mb-6 relative">
                          <Quote className="absolute -top-4 -left-2 h-8 w-8 text-primary/20 rotate-180" />
                          <p className="text-lg md:text-lg font-normal text-foreground/90 italic relative z-10 pl-6">
                            &quot;{testimonials[activeIndex].quote}&quot;
                          </p>
                        </div>
                      </div>

                      {isMobile && (
                        <div className="grid grid-cols-3 gap-2 mt-6">
                          {testimonials[activeIndex].results.map(
                            (result, index) => (
                              <div
                                key={index}
                                className="text-center p-2 bg-background/50 rounded-lg"
                              >
                                <p className="text-xs text-foreground/70">
                                  {result.label}
                                </p>
                                <p className="text-sm font-bold text-primary">
                                  {result.value}
                                </p>
                              </div>
                            )
                          )}
                        </div>
                      )}

                      <div className="flex justify-between items-center mt-8">
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={prevTestimonial}
                            aria-label="Previous testimonial"
                          >
                            <ChevronLeft className="h-5 w-5" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={nextTestimonial}
                            aria-label="Next testimonial"
                          >
                            <ChevronRight className="h-5 w-5" />
                          </Button>
                        </div>

                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 }}
                          className="flex items-center gap-1"
                        >
                          {testimonials.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => {
                                setDirection(index > activeIndex ? 1 : -1);
                                setActiveIndex(index);
                              }}
                              className={`w-2 h-2 rounded-full transition-colors ${
                                index === activeIndex
                                  ? "bg-primary"
                                  : "bg-primary/30"
                              }`}
                              aria-label={`Go to testimonial ${index + 1}`}
                            />
                          ))}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Swipe hint indicator (mobile only) */}
          {isMobile && (
            <div className="flex justify-center mt-4 text-xs text-foreground/50 items-center gap-2">
              <ChevronLeft className="h-3 w-3" />
              <span>Swipe to navigate</span>
              <ChevronRight className="h-3 w-3" />
            </div>
          )}

          {/* Floating elements */}
          <motion.div
            className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 3,
              ease: "easeInOut",
            }}
          >
            <Quote className="h-6 w-6 text-primary rotate-180" />
          </motion.div>

          <motion.div
            className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 4,
              ease: "easeInOut",
            }}
          >
            <Star className="h-6 w-6 text-accent" />
          </motion.div>
        </div>

        {/* Client logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-border/30"
        >
          <p className="text-center text-foreground/60 mb-8">
            Trusted by innovative companies
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="overflow-hidden max-w-28 md:max-w-36 rounded grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={testimonial.logo || "/placeholder.svg"}
                  alt={testimonial.company}
                  width={120}
                  height={48}
                  className="w-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
