"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative text-white pt-28 pb-10 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headline & Subtitle */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left">
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

            {/* Subtitle */}
            <p className="text-slate-200 text-sm sm:text-lg font-medium max-w-xl leading-relaxed drop-shadow-md">
              High-Quality Indonesian Frozen Seafood for Global Markets. Premier
              processor of wild-caught Octopus, Squid, Cuttlefish, and Demersal
              Fish in Makassar, South Sulawesi.
            </p>
          </div>

          {/* Right Column: Official CV. MITRA ALAM Logo */}
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
