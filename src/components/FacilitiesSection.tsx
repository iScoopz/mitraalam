"use client";

import Image from "next/image";

export default function FacilitiesSection() {
  const facilityStats = [
    {
      image: "/assets/7. FACILITIES/facilities-06.png",
      metric: "3 UNITS",
      title: "Air Blast Freezer (ABF)",
      detail: "(~3.5 Tons / Freezing Cycle)",
    },
    {
      image: "/assets/7. FACILITIES/facilities-07.png",
      metric: "108 TONS",
      title: "Cold Storage Capacity",
      detail: "108 Tons Max Capacity (~2 FCL Export Standard)",
    },
    {
      image: "/assets/7. FACILITIES/facilities-08.png",
      metric: "UP TO 12 SHIPMENTS / YEAR",
      title: "Annual Export Track Record",
      detail: "Consistently Scaling Year-over-Year",
    },
    {
      image: "/assets/7. FACILITIES/facilities-09.png",
      metric: "HACCP & FDA",
      title: "Certified Processing Plant",
      detail: "Strict Temperature Controlled Processing Line",
    },
  ];

  return (
    <section className="py-14 ocean-teal-section text-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
        {/* Explore Our Facilities Pill Badge matching Mockup */}
        <div className="flex justify-center">
          <div className="inline-flex items-center px-6 py-2 rounded-full bg-[#072433] border border-cyan-400/40 text-cyan-300 text-xs sm:text-sm font-extrabold uppercase tracking-widest shadow-xl">
            Explore Our Facilities
          </div>
        </div>

        {/* 2x2 Grid of Metallic Capacity Cards matching Screenshot 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {facilityStats.map((stat) => (
            <div
              key={stat.title}
              className="metallic-facility-card rounded-2xl p-6 text-[#072331] shadow-xl hover:translate-y-[-4px] hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-between text-center space-y-2.5 border border-white/80 group h-full"
            >
              {/* Icon Image */}
              <div className="w-14 h-14 rounded-full bg-[#072433] flex items-center justify-center p-2.5 shadow-md group-hover:scale-110 transition-transform">
                <div className="relative w-8 h-8">
                  <Image
                    src={stat.image}
                    alt={stat.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Big Metric Headline */}
              <h3 className="font-display font-black text-xl sm:text-2xl text-[#072331] tracking-tight uppercase">
                {stat.metric}
              </h3>

              {/* Title */}
              <h4 className="font-display font-extrabold text-sm text-slate-800 tracking-wide">
                {stat.title}
              </h4>

              {/* Detail Description */}
              <p className="text-xs text-slate-700 font-semibold max-w-xs">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
