import { AboutSection } from "@/components/home/about-section";
import { HeroSection } from "@/components/home/hero-section";
import { ScrollServicesSection } from "@/components/home/scroll-services-section";
import { Footer } from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ScrollServicesSection />
      <AboutSection />
      <Footer />
    </>
  );
}
