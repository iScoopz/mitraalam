"use client";

import { useState } from "react";
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

      {/* Hero Section */}
      <Hero />

      {/* Export Destinations & HACCP Certifications */}
      <ExportCertifications />

      {/* Our Products with Horizontal Side Slider */}
      <ProductShowcase onSelectProduct={(p) => setSelectedProduct(p)} />

      {/* About Us, Commitment & Core Values */}
      <AboutUs />

      {/* Processing Capacity & Cold Storage Facilities Stats */}
      <FacilitiesSection />

      {/* Visual Atmosphere & Facility Gallery Horizontal Slider */}
      <GallerySlider />

      {/* FAQ & Export Guide for Google Rich Snippets */}
      <FaqSection />

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
