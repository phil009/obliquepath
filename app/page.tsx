import { AboutSection } from "@/components/home/about-section";
import { ContactSection } from "@/components/home/contact-section";
import { HeroSection } from "@/components/home/hero-section";
import { ScrollServicesSection } from "@/components/home/scroll-services-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { Footer } from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ScrollServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
