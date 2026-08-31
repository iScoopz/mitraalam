"use client";

import Image from "next/image";

export default function AboutUs() {
  const coreValues = [
    {
      title: "QUALITY",
      image: "/assets/6. CORE VALUES/core-03.png",
      description:
        "Raw materials sourced exclusively from certified suppliers with proven cold-chain handling expertise.",
    },
    {
      title: "PRECISION",
      image: "/assets/6. CORE VALUES/core-04.png",
      description:
        "Delivering the highest quality products with minimal failure tolerance and strict QC standards.",
    },
    {
      title: "FLEXIBILITY",
      image: "/assets/6. CORE VALUES/core-1-05.png",
      description:
        "Specializing in custom product specifications and open to discussing unique client needs.",
    },
  ];

  return (
    <section id="about" className="py-20 ocean-teal-section text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        {/* Top Subsection: We Produce High-Quality Frozen Seafood */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Circular Photo */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-60 h-60 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-cyan-300 shadow-2xl bg-[#072433] group">
              <Image
                src="/assets/4. STORY/IMG_7531.JPG"
                alt="Seafood Quality Inspection Story"
                fill
                className="object-cover group-hover:scale-108 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#072433]/70 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-3 left-0 right-0 text-center">
                <span className="text-[10px] font-bold tracking-widest uppercase bg-[#072433]/90 text-cyan-300 px-3 py-1 rounded-full border border-cyan-400/40">
                  Strict QC Inspection
                </span>
              </div>
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
          <div className="lg:col-span-7 space-y-5 text-left order-2 lg:order-1">
            <h3 className="font-display text-3xl sm:text-4xl font-black text-white uppercase drop-shadow-md">
              Our <span className="text-[#072433]">COMMITMENT</span>
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

          {/* Right Factory Packaging Photo */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative h-72 sm:h-84 w-full rounded-2xl overflow-hidden border-4 border-cyan-300 shadow-2xl bg-[#072433] group">
              <Image
                src="/assets/5. COMMITMENT/5-02.png"
                alt="Mitra Alam Export Commitment"
                fill
                className="object-cover object-[center_40%] group-hover:scale-108 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#072433]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 drop-shadow">
                  Export Packaging & Cold Storage Operations
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Subsection: Our CORE VALUES */}
        <div className="space-y-8 pt-8 border-t border-cyan-200/20 text-center">
          <h3 className="font-display text-3xl sm:text-4xl font-black text-white uppercase drop-shadow-md">
            Our <span className="text-[#072433]">CORE VALUES</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {coreValues.map((val) => (
              <div
                key={val.title}
                className="ocean-teal-card rounded-2xl p-6 sm:p-8 text-center space-y-4 hover:translate-y-[-4px] hover:border-cyan-400 transition-all duration-300 flex flex-col items-center justify-start h-full"
              >
                <div className="w-16 h-16 rounded-full bg-cyan-500/15 border border-cyan-400/40 flex items-center justify-center mx-auto shadow-inner p-2 shrink-0">
                  <div className="relative w-10 h-10">
                    <Image
                      src={val.image}
                      alt={val.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <h4 className="font-display font-extrabold text-lg sm:text-xl text-cyan-300 tracking-wider uppercase">
                  {val.title}
                </h4>

                <p className="text-slate-300 text-xs sm:text-sm font-normal leading-relaxed">
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
