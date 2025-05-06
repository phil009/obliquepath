"use client";

import React from "react";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import {
  Bot,
  Code,
  LineChart,
  Headphones,
  Calendar,
  ShoppingCart,
  FileText,
  Cog,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
];

export function ServicesSlider() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div ref={ref} className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletActiveClass: "swiper-pagination-bullet-active bg-primary",
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          640: {
            slidesPerView: 1.5,
            centeredSlides: true,
          },
          1024: {
            slidesPerView: 3,
            centeredSlides: true,
          },
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="services-slider"
      >
        {services.map((service, index) => (
          <SwiperSlide key={service.id}>
            {({ isActive, isNext, isPrev }) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 rounded-xl transition-all duration-300 h-full flex flex-col ${
                  isActive
                    ? "scale-100 opacity-100 bg-background/80 backdrop-blur-sm border border-primary/20 shadow-lg"
                    : isNext || isPrev
                    ? "scale-90 opacity-80 bg-background/50 backdrop-blur-sm border border-border/20"
                    : "scale-80 opacity-60 bg-background/30 backdrop-blur-sm"
                }`}
              >
                <div
                  className={`w-16 h-16 rounded-lg ${service.color} flex items-center justify-center mb-6`}
                >
                  {React.createElement(service.icon, {
                    className: "h-8 w-8",
                  })}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p
                  className={`text-foreground/80 ${
                    isActive ? "" : "line-clamp-3 md:line-clamp-4"
                  }`}
                >
                  {service.description}
                </p>
              </motion.div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation buttons */}
      {/* <div className="flex justify-center mt-8 gap-4">
        <button className="swiper-button-prev !static !w-10 !h-10 !mt-0 rounded-full bg-background border border-border/50 flex items-center justify-center shadow-sm hover:border-primary/50 transition-colors">
          <span className="sr-only">Previous</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <button className="swiper-button-next !static !w-10 !h-10 !mt-0 rounded-full bg-background border border-border/50 flex items-center justify-center shadow-sm hover:border-primary/50 transition-colors">
          <span className="sr-only">Next</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div> */}
    </div>
  );
}
