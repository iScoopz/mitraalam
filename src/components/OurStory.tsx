"use client";

import Image from "next/image";
import { ArrowLeft, Leaf } from "lucide-react";

export default function OurStory() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FAF7F0] relative overflow-hidden">
      {/* Background Architectural Vector Overlay */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-10 pointer-events-none flex items-center justify-end pr-10">
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full text-[#061527] stroke-current fill-none stroke-[0.8]"
        >
          {/* Architectural Greek Dome & Building Sketch Lines */}
          <path d="M100 400 L400 400 M150 400 L150 250 L350 250 L350 400 M200 250 A50 50 0 0 1 300 250 M250 150 A50 50 0 0 0 200 200 L300 200 A50 50 0 0 0 250 150 Z" />
          <circle cx="250" cy="180" r="10" />
          <path d="M120 400 L120 280 L140 280 M360 400 L360 280 L380 280 M180 250 L180 200 M320 250 L320 200" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Dual Image Layout */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Studio Frame */}
              <div className="relative h-[340px] sm:h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/story.png"
                  alt="Elia Studio Interior"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Inset Decorative Corner Card */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#061527] text-white p-5 rounded-xl border border-[#D4AF37]/40 shadow-xl max-w-[220px] hidden sm:block">
                <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-1">
                  <Leaf className="w-4 h-4" />
                  <span>Heritage Craft</span>
                </div>
                <p className="text-[11px] text-gray-300 font-light">
                  Bridging ancient Greek aesthetic harmony with state-of-the-art web technology.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Text & Narrative Content */}
          <div className="lg:col-span-6 space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 text-[#D4AF37] text-xs font-semibold tracking-[0.25em] uppercase">
              <span>OUR STORY</span>
              <ArrowLeft className="w-4 h-4 text-[#D4AF37]" />
            </div>

            {/* Section Headline */}
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#061527] leading-tight">
              Rooted in Tradition. <br />
              Inspired by <span className="text-[#061527] italic font-playfair font-normal">Excellence.</span>
            </h2>

            {/* Narrative Body */}
            <div className="space-y-4 text-gray-700 text-sm sm:text-base font-light leading-relaxed">
              <p>
                At Elia Studio, we bring the essence of Mediterranean craftsmanship to your digital footprint. From architectural elegance to our warm hospitality-driven design process, our mission is to create unforgettable experiences through the joy of extraordinary web design.
              </p>
              <p>
                Every project is treated like a signature masterpiece—seasoned with fresh ideas, structured with time-tested engineering, and delivered with genuine care for your success.
              </p>
            </div>

            {/* Handwritten Signature & Leaf Line Art */}
            <div className="pt-4 flex items-center justify-between border-t border-[#D4AF37]/20">
              <div className="space-y-1">
                <span className="font-script-luxury text-4xl sm:text-5xl text-[#061527]">
                  Efharisto!
                </span>
                <span className="block text-[10px] tracking-widest text-[#D4AF37] font-semibold uppercase">
                  Thank You & Warm Regards
                </span>
              </div>

              {/* Line Art Olive Branch */}
              <div className="text-[#D4AF37] opacity-80">
                <svg className="w-16 h-12" viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M10 30 C 40 10, 60 50, 90 30" />
                  <path d="M25 25 C 20 15, 30 15, 25 25" fill="currentColor" />
                  <path d="M45 28 C 40 18, 50 18, 45 28" fill="currentColor" />
                  <path d="M65 32 C 60 22, 70 22, 65 32" fill="currentColor" />
                  <path d="M80 30 C 75 20, 85 20, 80 30" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
