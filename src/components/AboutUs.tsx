"use client";

import Image from "next/image";

export default function AboutUs() {
  const coreValues = [
    {
      title: "QUALITY",
      description:
        "Raw materials sourced exclusively from certified suppliers with proven cold–chain handling expertise.",
      icon: (
        <svg
          className="w-8 h-8 text-white stroke-[1.8]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Certificate Badge Ribbon with Checkmark */}
          <circle cx="12" cy="9" r="6" />
          <path d="m9 9 2 2 4-4" />
          <path d="M8.21 13.89 7 22l5-3 5 3-1.21-8.12" />
        </svg>
      ),
    },
    {
      title: "PRECISION",
      description:
        "Delivering the highest quality products with minimal failure tolerance and strict QC standards.",
      icon: (
        <svg
          className="w-8 h-8 text-white stroke-[1.8]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Target Bullseye with Arrow hitting Top-Right */}
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
          <path d="m19 5-6.5 6.5" />
          <path d="M15 5h4v4" />
        </svg>
      ),
    },
    {
      title: "FLEXIBILITY",
      description:
        "Specializing in custom product specifications and open to discussing unique client needs.",
      icon: (
        <svg
          className="w-8 h-8 text-white stroke-[1.8]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Handshake Icon */}
          <path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.3-4.3a1 1 0 0 0 0-1.4L15 10" />
          <path d="m18 11 3.3-3.3a1 1 0 0 0 0-1.4L18 3" />
          <path d="m14 7 3-3" />
          <path d="M3 13.5 7.5 9a1 1 0 0 1 1.4 0L13 13" />
          <path d="m2 18 4.5 4.5a1 1 0 0 0 1.4 0L12 18" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="about"
      className="py-20 text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        {/* Top Subsection: We Produce High-Quality Frozen Seafood */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Circular Photo */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-60 h-60 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-cyan-300 shadow-2xl bg-[#072433] group">
              <Image
                src="/assets/4. STORY/IMG_7531.JPG"
                alt="CV. Mitra Alam Frozen Seafood Quality Inspection and Cold Chain Management"
                fill
                className="object-cover group-hover:scale-108 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right Narrative Text */}
          <div className="lg:col-span-8 space-y-5 text-left">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight drop-shadow-md">
              We Produce <span className="text-[#072433]">High-Quality</span> Frozen Seafood
            </h2>

            <div className="space-y-4 text-slate-100 text-sm sm:text-base font-normal leading-relaxed">
              <p>
                Established in 2017 as a small frozen seafood manufacturer based in Makassar, initially serving the Indonesian domestic market as a specialist in mackerel scad, mackerel tuna, and skipjack tuna.
              </p>
              <p>
                In 2020, amidst the pandemic, we expanded our operations into the international export market and diversified our product range to include cephalopods and demersal fish. We remain fully committed to delivering exceptional production quality to ensure total customer satisfaction.
              </p>
            </div>
          </div>
        </div>

        {/* Middle Subsection: Our COMMITMENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pt-8 border-t border-cyan-200/20">
          {/* Left Commitment Text */}
          <div className="lg:col-span-6 space-y-5 text-left order-2 lg:order-1">
            <h3 className="font-display text-3xl sm:text-4xl font-black text-white uppercase drop-shadow-md">
              Our <span className="text-cyan-400 drop-shadow-[0_2px_10px_rgba(34,211,238,0.3)]">COMMITMENT</span>
            </h3>

            <div className="space-y-4 text-slate-100 text-sm sm:text-base font-normal leading-relaxed">
              <p>
                We started as a small operation and steadily expanded our facilities, workforce, and product range. We never imagined our manufacturing capabilities would grow to where they are today.
              </p>
              <p>
                From this journey, our commitment lies in delivering the highest quality seafood products while maintaining sustainable practices. We aim to provide the needs of our customers worldwide and establish Indonesia's name in the eyes of the world.
              </p>
              <p className="font-medium text-white">
                Our dedication to excellence, integrity, and environmental responsibility drives us to shape a brighter, healthier future for the seafood industry.
              </p>
            </div>
          </div>

          {/* Right Factory Packaging Photo - Enlarged and fully visible */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative h-80 sm:h-96 md:h-[420px] lg:h-[460px] w-full rounded-3xl overflow-hidden border-4 border-cyan-300 shadow-2xl bg-[#072433] group">
              <Image
                src="/assets/5. COMMITMENT/5-02.png"
                alt="CV. Mitra Alam Export Packaging and Cold Storage Operations in Makassar"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* Bottom Subsection: Our CORE VALUES matching User's Mockup */}
        <div className="space-y-8 pt-8 border-t border-cyan-200/20 text-center">
          <h3 className="font-display text-3xl sm:text-4xl font-black text-white uppercase drop-shadow-md">
            Our <span className="text-cyan-400 drop-shadow-[0_2px_10px_rgba(34,211,238,0.3)]">CORE VALUES</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {coreValues.map((val) => (
              <div
                key={val.title}
                className="bg-[#051c27] rounded-3xl p-6 sm:p-8 text-center space-y-4 shadow-2xl border border-cyan-500/20 hover:border-cyan-400/50 hover:translate-y-[-4px] transition-all duration-300 flex flex-col items-center justify-start h-full group"
              >
                {/* Circular Icon with Cyan Border matching Screenshot */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#041722] border-2 border-cyan-400 flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(6,182,212,0.25)] group-hover:scale-105 transition-transform">
                  {val.icon}
                </div>

                {/* Core Value Title in Cyan */}
                <h4 className="font-display font-black text-lg sm:text-xl text-cyan-300 tracking-wider uppercase">
                  {val.title}
                </h4>

                {/* Core Value Narrative Description */}
                <p className="text-slate-200 text-xs sm:text-sm font-normal leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
