"use client";

import Image from "next/image";
import { ArrowRight, Leaf, Sparkles } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] bg-[#061527] text-white pt-28 pb-16 flex items-center overflow-hidden"
    >
      {/* Background Image with Ambient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Santorini Mediterranean Background"
          fill
          className="object-cover object-center opacity-40 scale-105 animate-pulse duration-10000"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061527] via-[#061527]/85 to-[#061527]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061527] via-transparent to-[#061527]/40" />
        <div className="absolute inset-0 greek-pattern-bg opacity-30 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-3 text-[#D4AF37] text-xs font-semibold tracking-[0.3em] uppercase">
              <span className="h-[1px] w-8 bg-[#D4AF37]" />
              <span>WELCOME TO ELIA PORTFOLIO</span>
              <span className="h-[1px] w-8 bg-[#D4AF37]" />
            </div>

            {/* Main Headline with Serif + Script Hybrid */}
            <div className="space-y-1">
              <h1 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                A Taste of
              </h1>
              <div className="font-script-luxury text-5xl sm:text-7xl lg:text-8xl text-[#E6C875] -mt-2 sm:-mt-4 ml-2 drop-shadow-lg">
                Excellence
              </div>
              <div className="font-script-luxury text-4xl sm:text-6xl lg:text-7xl text-[#D4AF37] ml-6">
                Made with Love
              </div>
            </div>

            {/* Olive Leaf Line Divider */}
            <div className="flex items-center gap-2 py-2">
              <div className="h-[1px] w-12 bg-gradient-to-r from-[#D4AF37] to-transparent" />
              <Leaf className="w-4 h-4 text-[#D4AF37] rotate-45" />
              <div className="h-[1px] w-24 bg-[#D4AF37]/30" />
            </div>

            {/* Subtitle Description */}
            <p className="text-gray-300 text-sm sm:text-base max-w-xl font-light leading-relaxed">
              Authentic digital craft made with pixel perfection, time-honored architectural principles, and a true passion for memorable web hospitality.
            </p>

            {/* Action CTA Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#portfolio"
                className="gold-button-gradient text-[#061527] px-7 py-3.5 rounded-sm font-semibold text-xs tracking-widest uppercase flex items-center gap-2 shadow-xl hover:translate-y-[-2px] transition-transform"
              >
                <span>View My Works</span>
                <Leaf className="w-4 h-4 text-[#061527]" />
              </a>

              <a
                href="#about"
                className="border border-[#D4AF37]/60 hover:border-[#D4AF37] text-white hover:text-[#E6C875] bg-[#061527]/60 hover:bg-[#061527] px-7 py-3.5 rounded-sm font-semibold text-xs tracking-widest uppercase flex items-center gap-2 transition-all"
              >
                <span>Our Story</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </a>
            </div>
          </div>

          {/* Right Column Seal & Visual Accent */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            {/* Circular Rotating Seal Badge */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56">
              {/* Outer Glowing Ring */}
              <div className="absolute inset-0 rounded-full border border-[#D4AF37]/40 animate-ping opacity-25" />
              
              {/* Main Circular Seal Container */}
              <div className="w-full h-full rounded-full border-2 border-[#D4AF37] bg-[#061527]/90 backdrop-blur-md p-3 flex items-center justify-center shadow-2xl relative">
                {/* Rotating Text Ring */}
                <div className="absolute inset-0 animate-spin-slow p-2 flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <path
                      id="textPath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="none"
                    />
                    <text className="text-[7.5px] font-semibold tracking-[0.25em] fill-[#D4AF37] uppercase">
                      <textPath href="#textPath" startOffset="0%">
                        • AUTHENTIC CRAFT SINCE 2020 • MADE WITH LOVE
                      </textPath>
                    </text>
                  </svg>
                </div>

                {/* Inner Crest Content */}
                <div className="text-center z-10 space-y-0.5">
                  <span className="block text-[10px] tracking-widest text-gray-400 uppercase">
                    Established
                  </span>
                  <span className="font-serif-luxury text-3xl font-bold text-[#E6C875]">
                    2020
                  </span>
                  <div className="flex justify-center text-[#D4AF37]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="block text-[9px] tracking-wider text-[#D4AF37] uppercase font-medium">
                    Masterpiece
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
