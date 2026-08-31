"use client";

import Image from "next/image";
import { ArrowRight, ShieldCheck, PhoneCall } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] text-white pt-28 pb-16 flex items-center overflow-hidden"
    >
      {/* Official Cover Background Image from Assets */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/1. COVER/BACKGROUND-13.png"
          alt="CV. MITRA ALAM Ocean Background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Deep Ocean Gradient Overlay for high text contrast and visual depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#041822]/95 via-[#041822]/85 to-[#041822]/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headline & Subtitle */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left">
            {/* Top Eyebrow Tag for SEO Keywords */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#072433]/90 border border-cyan-400/30 text-cyan-300 text-xs sm:text-sm font-semibold tracking-wide shadow-md backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Indonesian Seafood Exporter • HACCP, GMP & US FDA Registered</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.12]">
                <span className="silver-text-60deg block drop-shadow-md">
                  Fresh from the Ocean,
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-200 to-sky-300 block">
                  Frozen to Perfection.
                </span>
              </h1>
            </div>

            {/* Subtitle from Mockup */}
            <p className="text-slate-200 text-sm sm:text-lg font-medium max-w-xl leading-relaxed drop-shadow-md">
              High-Quality Indonesian Frozen Seafood for Global Markets. Premier
              processor of wild-caught Octopus, Squid, Cuttlefish, and Demersal
              Fish in Makassar, South Sulawesi.
            </p>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3.5">
              <a
                href="#product"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 text-[#041822] font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-xl shadow-cyan-500/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>View Products Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/6282190931111?text=Hello%20CV.%20Mitra%20Alam%2C%20I%20would%20like%20to%20request%20an%20export%20quotation."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#051c27]/90 hover:bg-[#072d3e] border border-cyan-400/40 text-cyan-300 font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer backdrop-blur-sm"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Request FOB / CIF Quote</span>
              </a>
            </div>
          </div>

          {/* Right Column: Official CV. MITRA ALAM Logo from user upload */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 group flex items-center justify-center">
              {/* Outer Cyan Glow */}
              <div className="absolute inset-0 rounded-full bg-cyan-400/15 blur-3xl animate-pulse" />

              {/* Logo container */}
              <div className="relative w-full h-full hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                <Image
                  src="/assets/1. COVER/logo-01.png"
                  alt="CV. MITRA ALAM - High-Quality Indonesian Frozen Seafood Exporter and Processor Logo"
                  title="CV. MITRA ALAM - Indonesian Frozen Seafood Exporter"
                  fill
                  priority
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
