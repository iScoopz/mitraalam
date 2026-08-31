"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExportCertifications from "@/components/ExportCertifications";
import ProductShowcase from "@/components/ProductShowcase";
import AboutUs from "@/components/AboutUs";
import FacilitiesSection from "@/components/FacilitiesSection";
import GallerySlider from "@/components/GallerySlider";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import ProductModal, { SeafoodProduct } from "@/components/ProductModal";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<SeafoodProduct | null>(null);

  return (
    <main className="min-h-screen flex flex-col bg-[#041822] text-[#f1f5f9]">
      {/* Fixed Navigation Bar */}
      <Navbar />

      {/* Unified Hero and Certification Cover Section with Seamless BACKGROUND-14.png */}
      <div className="relative text-white overflow-hidden">
        {/* Single continuous background image covering both Hero and Certifications */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/1. COVER/BACKGROUND-14.png"
            alt="CV. MITRA ALAM Ocean Cover Background"
            fill
            priority
            className="object-cover object-top"
          />
          {/* Subtle natural shading so text is crisp */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#041822]/60 via-transparent to-transparent pointer-events-none" />
          {/* Deep bottom fade mask that seamlessly dissolves BACKGROUND-14.png into the Product section */}
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#051c27] via-[#051c27]/80 to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10">
          {/* Hero Section */}
          <Hero />

          {/* Export Destinations & HACCP Certifications */}
          <ExportCertifications />
        </div>
      </div>

      {/* Seamless Middle Content Area: Product, About, Facilities, Gallery, Inquiry on a Single Continuous Clean Gradient */}
      <div className="relative text-white overflow-hidden bg-gradient-to-b from-[#051c27] via-[#0c3948] via-[#145366] via-[#0c3948] to-[#06202c]">
        {/* Soft atmospheric ambient radial glow for rich depth */}
        <div className="absolute top-[18%] left-[-10%] w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none" />
        <div className="absolute top-[62%] right-[-10%] w-[600px] h-[600px] rounded-full bg-teal-500/10 blur-[130px] pointer-events-none" />

        <div className="relative z-10">
          {/* Our Products with Horizontal Side Slider */}
          <ProductShowcase onSelectProduct={(p) => setSelectedProduct(p)} />

          {/* About Us, Commitment & Core Values */}
          <AboutUs />

          {/* Processing Capacity & Cold Storage Facilities Stats */}
          <FacilitiesSection />

          {/* Visual Atmosphere & Facility Gallery Horizontal Slider */}
          <GallerySlider />

          {/* Inquiry & Export CTA */}
          <FaqSection />
        </div>
      </div>

      {/* Footer with Maps, Location, Contact & Social */}
      <Footer />

      {/* Floating WhatsApp Quick Action */}
      <FloatingWhatsApp />

      {/* Detailed Product Specifications Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </main>
  );
}
