"use client";

import { PageLayout } from "@/components/page-layout";
import { ContactSection } from "@/components/home/contact-section";

export default function ContactPage() {
  return (
    <PageLayout
      title="Contact Us"
      subtitle="Get in touch with our team to discuss how we can help your business."
    >
      <ContactSection />
    </PageLayout>
  );
}
