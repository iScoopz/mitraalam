"use client";

import { useRef, useState } from "react";
import { flushSync } from "react-dom";
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
import Effects from "@/components/Effects";

// x position, size, rise time and start delay for each bubble
const bubbles = [
  ["4%", "14px", "11s", "-4s"], ["10%", "8px", "9s", "2.5s"], ["17%", "24px", "14s", "-9s"],
  ["25%", "10px", "10s", "1s"], ["33%", "18px", "13s", "-6s"], ["41%", "8px", "8s", "3.5s"],
  ["49%", "28px", "16s", "-11s"], ["57%", "12px", "10s", "-2s"], ["64%", "20px", "12s", "4s"],
  ["71%", "9px", "9s", "-5s"], ["78%", "26px", "15s", "-7s"], ["85%", "11px", "10s", "5.8s"],
  ["91%", "16px", "12s", "-3s"], ["97%", "9px", "9s", "4.6s"],
];

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<SeafoodProduct | null>(null);
  const photoRef = useRef<HTMLElement | null>(null);

  // The card photo and the modal photo share one view-transition name, so the browser morphs one into the other.
  // Only one element may hold the name at a time: the card drops it as the modal takes it, and gets it back on close.
  const morph = (update: () => void) => {
    if (!document.startViewTransition || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      update();
      return null;
    }
    return document.startViewTransition(() => flushSync(update));
  };

  const openProduct = (product: SeafoodProduct, card: HTMLElement) => {
    const photo = card.querySelector<HTMLElement>("[data-photo]");
    photoRef.current = photo;
    if (photo) photo.style.viewTransitionName = "product-photo";
    morph(() => {
      if (photo) photo.style.viewTransitionName = "";
      setSelectedProduct(product);
    });
  };

  const closeProduct = () => {
    const photo = photoRef.current;
    const t = morph(() => {
      setSelectedProduct(null);
      if (photo) photo.style.viewTransitionName = "product-photo";
    });
    const clear = () => { if (photo) photo.style.viewTransitionName = ""; };
    if (t) t.finished.finally(clear); else clear();
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#041822] text-[#f1f5f9]">
      <Effects />

      {/* Fixed Navigation Bar */}
      <Navbar />

      {/* Unified Hero and Certification Cover Section with Seamless BACKGROUND-14.png */}
      <div className="relative z-10 text-white overflow-clip bg-[#051c27]">
        {/* Single continuous background image covering both Hero and Certifications */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/1. COVER/BACKGROUND-14.webp"
            alt="CV Mitra Alam Ocean Cover Background"
            fill
            priority
            className="object-cover object-top"
          />
        </div>
        {/* Subtle natural shading so text is crisp */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#041822]/60 via-transparent to-transparent pointer-events-none" />
        {/* Deep bottom fade mask that seamlessly dissolves BACKGROUND-14.png into the Product section */}
        <div className="absolute bottom-0 left-0 right-0 z-0 h-64 bg-gradient-to-t from-[#051c27] via-[#051c27]/80 to-transparent pointer-events-none" />

        <div className="bubbles z-0" aria-hidden="true">
          {bubbles.map(([x, s, t, delay]) => (
            <span key={x} style={{ "--x": x, "--s": s, "--t": t, "--delay": delay } as React.CSSProperties} />
          ))}
        </div>

        <div className="relative z-10">
          {/* Hero Section */}
          <Hero />

          {/* Export Destinations & HACCP Certifications */}
          <ExportCertifications />
        </div>
      </div>

      {/* Seamless Middle Content Area: Product, About, Facilities, Gallery, Inquiry on a Single Continuous Clean Gradient */}
      <div className="relative z-10 text-white overflow-clip bg-gradient-to-b from-[#051c27] via-[#0c3948] via-[#145366] via-[#0c3948] to-[#06202c]">
        <div className="relative z-10">
          {/* Our Products with Horizontal Side Slider */}
          <ProductShowcase onSelectProduct={openProduct} />

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

      {/* Footer with Maps, Location, Contact & Social: revealed from under the page on desktop */}
      <Footer />

      {/* Floating WhatsApp Quick Action */}
      <FloatingWhatsApp />

      {/* Detailed Product Specifications Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={closeProduct}
      />
    </main>
  );
}
