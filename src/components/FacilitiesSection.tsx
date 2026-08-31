"use client";

import { Snowflake, Warehouse, Ship } from "lucide-react";

export default function FacilitiesSection() {
  const facilityStats = [
    {
      icon: Snowflake,
      metric: "3 UNITS",
      title: "Air Blast Freezer (ABF)",
      detail: "(~3.5 Tons / Freezing Cycle)",
    },
    {
      icon: Warehouse,
      metric: "108 TONS",
      title: "Cold Storage Capacity",
      detail: "108 Tons Max Capacity (~2 FCL Export Standard)",
    },
    {
      icon: Ship,
      metric: "UP TO 12 SHIPMENTS / YEAR",
      title: "Annual Export Track Record",
      detail: "Consistently Scaling Year-over-Year",
    },
  ];

  return (
    <section className="py-14 text-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
        {/* Explore Our Facilities Pill Badge matching Mockup */}
        <div className="flex justify-center">
          <div className="inline-flex items-center px-6 py-2 rounded-full bg-[#072433] border border-cyan-400/40 text-cyan-300 text-xs sm:text-sm font-extrabold uppercase tracking-widest shadow-xl">
            Explore Our Facilities
          </div>
        </div>

        {/* 3-Column Grid of Metallic Capacity Cards matching Mockup */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {facilityStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.title}
                className="metallic-facility-card rounded-2xl p-6 sm:p-7 text-[#072331] shadow-xl hover:translate-y-[-4px] hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center text-center space-y-2.5 border border-white/80 group"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-[#072433] text-cyan-300 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 stroke-[2.2]" />
                </div>

                {/* Big Metric Headline */}
                <h3 className="font-display font-black text-2xl sm:text-3xl text-[#072331] tracking-tight uppercase">
                  {stat.metric}
                </h3>

                {/* Title */}
                <h4 className="font-display font-extrabold text-sm sm:text-base text-slate-800 tracking-wide">
                  {stat.title}
                </h4>

                {/* Detail Description */}
                <p className="text-xs text-slate-700 font-semibold max-w-xs">
                  {stat.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
