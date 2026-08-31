"use client";

import Image from "next/image";
import { Globe2, FileCheck } from "lucide-react";

export default function ExportCertifications() {
  const exportDestinations = [
    { country: "China", code: "CIDN18PP2310200112 (CR 999 - 27)" },
    { country: "Vietnam", code: "VR. A/B-559-27" },
    { country: "South Korea", code: "No 25 - 114" },
    { country: "Taiwan", code: "IT 036-27" },
    { country: "USA ( FDA )", code: "12621818410" },
  ];

  const haccpCertifications = [
    { type: "Frozen Cephalopod", certNo: "095/PM/HACCP/PB/07/26" },
    { type: "Frozen Demersal", certNo: "096/PM/HACCP/PB/07/26" },
    { type: "Frozen Pelagic", certNo: "097/PM/HACCP/PB/07/26" },
  ];

  return (
    <section id="certification" className="text-white relative pt-12 pb-20 overflow-hidden">
      {/* Official Cover Background Image BACKGROUND-14.png */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/1. COVER/BACKGROUND-14.png"
          alt="CV. MITRA ALAM Export Destinations and Certifications Background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Subtle overlay so the beautiful BACKGROUND-14.png image is fully visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#041822]/35 via-transparent to-[#041822]/40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        {/* Two-Column Specification Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Column: Export Destination Registration Numbers */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-cyan-300 pb-1 border-b border-cyan-400/20">
              <Globe2 className="w-5 h-5 text-cyan-400" />
              <h3 className="font-display font-bold text-base sm:text-lg tracking-wider uppercase text-white">
                Export Destinations & Registrations
              </h3>
            </div>

            <div className="space-y-2.5">
              {exportDestinations.map((item) => (
                <div
                  key={item.country}
                  className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm bg-[#051c27]/85 px-4 py-2.5 rounded-lg border border-cyan-500/20 hover:border-cyan-400/40 transition-colors shadow-sm backdrop-blur-sm"
                >
                  <span className="font-bold text-cyan-200 tracking-wide">
                    {item.country}
                  </span>
                  <span className="font-tech text-white font-medium sm:text-right tracking-wider">
                    {item.code}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: HACCP Certifications */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-cyan-300 pb-1 border-b border-cyan-400/20">
              <FileCheck className="w-5 h-5 text-cyan-400" />
              <h3 className="font-display font-bold text-base sm:text-lg tracking-wider uppercase text-white">
                HACCP Standards & Certification
              </h3>
            </div>

            <div className="space-y-2.5">
              {haccpCertifications.map((item) => (
                <div
                  key={item.type}
                  className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm bg-[#051c27]/85 px-4 py-2.5 rounded-lg border border-cyan-500/20 hover:border-cyan-400/40 transition-colors shadow-sm backdrop-blur-sm"
                >
                  <span className="font-bold text-cyan-200 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    {item.type}
                  </span>
                  <span className="font-tech text-white font-medium sm:text-right tracking-wider">
                    {item.certNo}
                  </span>
                </div>
              ))}
            </div>

            {/* Ministry Compliance Badge */}
            <div className="mt-3 p-3 rounded-lg bg-[#051c27]/85 border border-cyan-400/20 flex items-center gap-2.5 text-xs text-slate-300 backdrop-blur-sm">
              <div className="w-5 h-5 rounded-full bg-cyan-400/20 text-cyan-300 flex items-center justify-center shrink-0">
                <svg
                  className="w-3 h-3 text-cyan-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span>
                Fully verified and compliant under Indonesian Ministry of Marine Affairs & Fisheries (KKP) export protocols.
              </span>
            </div>
          </div>
        </div>

        {/* Stainless Steel Metallic Gradient Banner for the 3 Certificates */}
        <div className="stainless-steel-ribbon rounded-2xl p-6 sm:p-7 text-slate-900 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 justify-items-center items-center">
            {/* Official GMP Quality Badge */}
            <div className="flex items-center gap-4 group w-full max-w-[280px] md:max-w-none md:justify-center">
              <div className="relative w-20 h-16 sm:w-24 sm:h-20 shrink-0 drop-shadow-md group-hover:scale-105 transition-transform flex items-center justify-center">
                <Image
                  src="/assets/2. CERTIFICATE/GMP.png"
                  alt="GMP Certified Indonesian Seafood Processing Facility - CV. Mitra Alam"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-left flex-1 min-w-0">
                <span className="font-display font-black text-sm sm:text-base text-slate-900 uppercase block tracking-wider leading-tight">
                  GMP Certified
                </span>
                <span className="text-[11px] text-slate-700 font-bold block pt-0.5">
                  Good Manufacturing Practice
                </span>
              </div>
            </div>

            {/* Official FDA Badge */}
            <div className="flex items-center gap-4 group w-full max-w-[280px] md:max-w-none md:justify-center">
              <div className="relative w-20 h-16 sm:w-24 sm:h-20 shrink-0 drop-shadow-md group-hover:scale-105 transition-transform flex items-center justify-center">
                <Image
                  src="/assets/2. CERTIFICATE/Food_and_Drug_Administration_logo.svg.png"
                  alt="US FDA Registered Seafood Facility No 12621818410 - CV. Mitra Alam"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-left flex-1 min-w-0">
                <span className="font-display font-black text-sm sm:text-base text-slate-900 uppercase block tracking-wider leading-tight">
                  US FDA Registered
                </span>
                <span className="text-[11px] text-slate-700 font-bold block pt-0.5">
                  Reg No: 12621818410
                </span>
              </div>
            </div>

            {/* Official HACCP Certified Medal Badge */}
            <div className="flex items-center gap-4 group w-full max-w-[280px] md:max-w-none md:justify-center">
              <div className="relative w-20 h-16 sm:w-24 sm:h-20 shrink-0 drop-shadow-md group-hover:scale-105 transition-transform flex items-center justify-center">
                <Image
                  src="/assets/2. CERTIFICATE/haccp-removebg-preview.png"
                  alt="HACCP Certified Indonesian Frozen Seafood Exporter - CV. Mitra Alam"
                  fill
                  style={{ transform: "scale(2.2)" }}
                  className="object-contain"
                />
              </div>
              <div className="text-left flex-1 min-w-0">
                <span className="font-display font-black text-sm sm:text-base text-slate-900 uppercase block tracking-wider leading-tight">
                  HACCP Verified
                </span>
                <span className="text-[11px] text-slate-700 font-bold block pt-0.5">
                  Food Safety Management
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
