"use client";

import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] ocean-hero-gradient text-white pt-28 pb-16 flex items-center overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headline & Subtitle */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left">
            {/* Top Eyebrow Tag */}

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.12]">
                Fresh from the Ocean, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-200 to-sky-300">
                  Frozen to Perfection.
                </span>
              </h1>
            </div>

            {/* Subtitle from Mockup */}
            <p className="text-slate-200 text-sm sm:text-lg font-medium max-w-xl leading-relaxed drop-shadow-md">
              High-Quality Indonesian Seafood for Global Markets.
            </p>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
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
                  src="/images/logo_mitra_alam_transparent.png"
                  alt="CV. Mitra Alam Logo"
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
