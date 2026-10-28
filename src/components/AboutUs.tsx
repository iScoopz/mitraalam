"use client";

import Image from "next/image";

export default function AboutUs() {
  const coreValues = [
    {
      title: "Quality",
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
      title: "Precision",
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
      title: "Flexibility",
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
      className="py-20 text-white relative overflow-clip"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        {/* Top Subsection: We Produce High-Quality Frozen Seafood */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Circular Photo */}
          <div className="lg:col-span-4 flex justify-center">
            <div data-reveal className="relative w-60 h-60 sm:w-72 sm:h-72 rounded-full overflow-clip bg-[#072433] group">
              <Image
                src="/assets/4. STORY/IMG_7531.webp"
                alt="CV Mitra Alam Frozen Seafood Quality Inspection and Cold Chain Management"
                fill
                className="object-cover "
              />
            </div>
          </div>

          {/* Right Narrative Text */}
          <div data-reveal className="lg:col-span-8 space-y-5 text-left">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-[-0.02em] leading-[1.02]">
              About CV Mitra Alam
            </h2>

            <div className="space-y-4 text-slate-100 text-base lg:text-lg font-normal leading-relaxed max-w-[65ch]">
              <p>
                <strong className="text-white font-semibold">CV Mitra Alam</strong> (<strong className="text-white font-semibold">Mitra Alam</strong>) was established in 2017 as a premium frozen seafood manufacturer based in Makassar, South Sulawesi. Starting with the Indonesian domestic market specializing in pelagic fish, we have continuously elevated our processing standards.
              </p>
              <p>
                In 2020, CV Mitra Alam expanded into international export markets across Asia and the Americas, diversifying into wild-caught cephalopods (octopus, cuttlefish, squid) and demersal fish. Our certified facilities and strict cold-chain handling ensure the finest Indonesian seafood reaches global tables.
              </p>
            </div>
          </div>
        </div>

        {/* Middle Subsection: Our COMMITMENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pt-8">
          {/* Left Commitment Text */}
          <div data-reveal className="lg:col-span-6 space-y-5 text-left order-2 lg:order-1">
            <h3 className="font-display text-3xl sm:text-4xl font-black text-white tracking-[-0.02em]">
              Our commitment
            </h3>

            <div className="space-y-4 text-slate-100 text-base lg:text-lg font-normal leading-relaxed max-w-[65ch]">
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
          <div data-reveal="shutter" className="lg:col-span-6 order-1 lg:order-2">
            <div
              className="relative h-80 sm:h-96 md:h-[420px] lg:h-[460px] w-full rounded-3xl overflow-clip bg-[#072433] group">
              <Image
                src="/assets/5. COMMITMENT/5-02.webp"
                alt="CV Mitra Alam Export Packaging and Cold Storage Operations in Makassar"
                fill
                className="object-cover object-center "
              />
            </div>
          </div>
        </div>

        {/* Bottom Subsection: Core values as a list set large, heading held on the left */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 pt-8">
          <div className="lg:col-span-4">
            <h3 data-reveal className="lg:sticky lg:top-28 font-display text-5xl sm:text-6xl font-black text-white tracking-[-0.03em] leading-none">
              Our core values
            </h3>
          </div>

          <ul className="lg:col-span-8 space-y-3">
            {coreValues.map((val, i) => (
              <li
                key={val.title}
                data-reveal
                style={{ "--i": i } as React.CSSProperties}
                className="grid sm:grid-cols-12 gap-4 sm:gap-8 items-start rounded-3xl bg-[#051c27]/70 hover:bg-[#051c27] p-6 sm:p-8 transition-colors duration-300 group"
              >
                <div className="sm:col-span-5 flex items-center gap-4">
                  <div className="w-14 h-14 shrink-0 rounded-full bg-[#041722] text-cyan-300 flex items-center justify-center group-hover:scale-105 transition-transform [&_svg]:w-7 [&_svg]:h-7 [&_svg]:text-cyan-300">
                    {val.icon}
                  </div>
                  <h4 className="font-display font-black text-3xl sm:text-4xl tracking-[-0.02em] text-white">
                    {val.title}
                  </h4>
                </div>
                <p className="sm:col-span-7 text-slate-100 text-base sm:text-lg leading-relaxed sm:pt-2">
                  {val.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
