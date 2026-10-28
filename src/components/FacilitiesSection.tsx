"use client";

import { Snowflake, Warehouse, Ship } from "lucide-react";
import { RollingNumber } from "@/components/Effects";

export default function FacilitiesSection() {
  const facilityStats = [
    {
      icon: Snowflake,
      metric: "3", unit: "units",
      title: "Air Blast Freezer (ABF)",
      detail: "(~3.5 Tons / Freezing Cycle)",
    },
    {
      icon: Warehouse,
      metric: "108", unit: "tons",
      title: "Cold Storage Capacity",
      detail: "108 Tons Max Capacity (~2 FCL Export Standard)",
    },
    {
      icon: Ship,
      metric: "12", unit: "/ year",
      title: "Up to 12 Export Shipments a Year",
      detail: "Consistently Scaling Year-over-Year",
    },
  ];

  return (
    <section className="py-14 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div data-reveal className="grid lg:grid-cols-12 gap-x-10 gap-y-4 items-end">
          <h2 className="lg:col-span-7 font-display text-5xl sm:text-6xl font-black text-white tracking-[-0.03em] leading-none">
            Our facilities
          </h2>
          <p className="lg:col-span-5 text-slate-100 text-base sm:text-lg font-medium leading-relaxed">
            Processing, blast freezing and cold storage under one roof at Jl. Lantebung, minutes from the Port of Makassar.
          </p>
        </div>

        {/* 3-Column Grid of Metallic Capacity Cards matching Mockup */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {facilityStats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.title}
                data-reveal
                data-tilt
                style={{ "--i": i } as React.CSSProperties}
                className="sheen metallic-facility-card rounded-2xl p-6 sm:p-7 text-[#072331] hover:translate-y-[-4px] transition-all duration-300 flex flex-col items-center justify-center text-center space-y-2.5 border border-white/80 group"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-[#072433] text-cyan-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 stroke-[2.2]" />
                </div>

                {/* Big Metric Headline */}
                <p className="font-display font-black text-4xl sm:text-5xl text-[#072331] tracking-tight">
                  <RollingNumber value={stat.metric} /> <span className="text-xl sm:text-2xl">{stat.unit}</span>
                </p>

                {/* Title */}
                <h3 className="font-display font-extrabold text-base text-slate-800">
                  {stat.title}
                </h3>

                {/* Detail Description */}
                <p className="text-sm text-slate-700 font-semibold max-w-xs">
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
