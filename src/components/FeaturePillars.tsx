"use client";

import { Feather, Landmark, Sun, Heart } from "lucide-react";

export default function FeaturePillars() {
  const pillars = [
    {
      icon: Feather,
      title: "PIXEL PERFECTION",
      subtitle: "Fresh Design Tokens",
      description: "We use meticulously crafted UI components for the purest visual harmony.",
    },
    {
      icon: Landmark,
      title: "PROVEN METHOD",
      subtitle: "Authentic Standards",
      description: "Traditional design engineering principles passed down through modern stack evolution.",
    },
    {
      icon: Sun,
      title: "MEDITERRANEAN SPIRIT",
      subtitle: "Warm Tech Vibe",
      description: "A warm, welcoming atmosphere inspired by Greek architecture and seamless UX.",
    },
    {
      icon: Heart,
      title: "MADE WITH LOVE",
      subtitle: "Dedicated Passion",
      description: "Every product and line of code is prepared with care, passion, and detail.",
    },
  ];

  return (
    <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12">
      <div className="bg-[#FDFBF7] rounded-xl border border-[#D4AF37]/30 cream-card-shadow p-6 sm:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#D4AF37]/20">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={`flex items-start gap-4 ${
                  idx !== 0 ? "pt-6 sm:pt-0 sm:pl-6" : ""
                } group hover:translate-y-[-2px] transition-transform duration-300`}
              >
                <div className="w-12 h-12 rounded-full border border-[#D4AF37]/40 bg-[#FAF7F0] flex items-center justify-center shrink-0 group-hover:bg-[#061527] group-hover:border-[#D4AF37] transition-colors duration-300 shadow-sm">
                  <Icon className="w-5 h-5 text-[#D4AF37] group-hover:text-[#E6C875] transition-colors" />
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif-luxury text-xs font-bold tracking-widest text-[#061527] uppercase">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#1E293B] font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
