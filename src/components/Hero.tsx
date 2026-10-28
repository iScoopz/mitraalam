"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative text-white min-h-[100svh] pt-24 pb-10 flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headline & Subtitle */}
          <div className="lg:col-span-8 space-y-6 text-left">
            {/* Main Headline with Brand Entity for Google SEO */}
            <div className="space-y-1">
              <h1 className="font-display text-5xl sm:text-6xl xl:text-7xl font-black tracking-[-0.03em] leading-[0.95] lines">
                <span className="line text-white"><span data-line style={{ "--i": 0 } as React.CSSProperties}>Fresh from the Ocean,</span></span>
                <span className="line text-cyan-300"><span data-line style={{ "--i": 1 } as React.CSSProperties}><span className="frost">Frozen to Perfection.</span></span></span>
              </h1>
            </div>

            {/* Subtitle with High-Density Search Intent Keywords */}
            <p data-load className="text-slate-100 text-base lg:text-lg font-medium max-w-xl leading-relaxed">
              <strong className="text-white font-semibold">CV Mitra Alam</strong> (<strong className="text-cyan-300 font-semibold">Mitra Alam</strong>) is a trusted frozen seafood exporter and processor in Makassar, South Sulawesi, certified to HACCP, GMP &amp; US FDA standards. We specialise in octopus, squid, cuttlefish, red snapper and grouper for international and domestic markets.
            </p>

            <div data-load style={{ "--d": "520ms" } as React.CSSProperties} className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://wa.me/6282190931111?text=Hello%20CV%20Mitra%20Alam%2C%20I%20have%20an%20export%20inquiry%20regarding%20frozen%20seafood."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3.5 rounded-full bg-cyan-300 text-[#041822] text-base font-bold hover:bg-white active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200 transition"
              >
                Request a quote
              </a>
              <a
                href="#product"
                className="inline-flex items-center px-6 py-3.5 rounded-full bg-white/10 text-white text-base font-semibold hover:bg-white/20 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200 transition"
              >
                See our products
              </a>
            </div>
          </div>

          {/* Right Column: Official CV MITRA ALAM Logo */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-48 h-48 sm:w-80 sm:h-80 lg:w-[28rem] lg:h-[28rem] lg:-mr-10 group flex items-center justify-center">
              {/* Logo container */}
              <div data-tilt className="float relative w-full h-full flex items-center justify-center">
                <Image
                  src="/assets/1. COVER/logo-01.png"
                  alt="CV Mitra Alam - Mitra Alam High-Quality Indonesian Frozen Seafood Exporter and Processor Logo"
                  title="CV Mitra Alam - Indonesian Frozen Seafood Exporter"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
