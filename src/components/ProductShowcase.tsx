"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Eye, Sparkles } from "lucide-react";
import { SeafoodProduct } from "./ProductModal";

interface ProductShowcaseProps {
  onSelectProduct: (product: SeafoodProduct) => void;
}

export default function ProductShowcase({ onSelectProduct }: ProductShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const scrollRef = useRef<HTMLDivElement>(null);

  const products: SeafoodProduct[] = [
    {
      id: "octopus",
      name: "OCTOPUS",
      scientificName: "Octopus cyaneus",
      category: "Cephalopod",
      image: "/assets/3. PRODUCT/Salinan CEP. OCTOPUS BALL _ 3.jpeg",
      imageClass: "object-cover object-center",
      processingTypes: ["Whole Cleaned Ball", "Whole Block"],
      freezingMethod: "Individual Quick Freezing (IQF) / Air Blast Quick Freezing",
      sizeGrades: "1-2 lbs, 2-4 lbs, 4-6 lbs, 6-8 lbs",
      packingSpec: "IWP (Individually Wrapped) / 30 lbs / Master Carton with Protective Inner PE Liner or Custom Packaging",
    },
    {
      id: "cuttlefish",
      name: "CUTTLEFISH",
      scientificName: "Sepia esculenta",
      category: "Cephalopod",
      image: "/assets/3. PRODUCT/Salinan CEP. CUTTLEFISH WC _ 1.jpeg",
      imageClass: "object-cover object-center",
      processingTypes: ["Whole Cleaned"],
      freezingMethod: "IQF / Air Blast Quick Freezing",
      sizeGrades: "U-1 pcs/kg, 1-2 pcs/kg, 2-4 pcs/kg",
      packingSpec: "IVP (Individually Vacuum); 75% N.W, 25% glazing; 22 lbs / Master Carton with Polybabag Liner or Custom Packaging",
    },
    {
      id: "squid",
      name: "SQUID",
      scientificName: "Loligo sp.",
      category: "Cephalopod",
      image: "/assets/3. PRODUCT/squid.jpeg",
      imageClass: "object-cover object-center",
      processingTypes: ["Whole Block"],
      freezingMethod: "Air Blast Quick Freezing",
      sizeGrades: "Size : *as per request (10-15cm, 15-20cm, 20cm+)",
      packingSpec: "10 kg / Master Carton with Polybag Liner or Custom Packaging",
    },
    {
      id: "redsnapper",
      name: "SNAPPER",
      scientificName: "Lutjanus spp.",
      category: "Demersal",
      image: "/assets/3. PRODUCT/snapper.jpg",
      imageClass: "object-cover object-center",
      processingTypes: ["Whole Round / WGGS / Fillet", "Skin-on Scaled Fillet"],
      freezingMethod: "IQF / Air Blast Quick Freezing",
      sizeGrades: "0.5-1 lbs, 1-1.5 lbs, 1.5-2 lbs, 2-3 lbs, 3-4 lbs, 4+ lbs",
      packingSpec: "IVP (Individually Vacuum) / 10 lbs / Master Carton with Polybag Liner or Custom Packaging",
    },
    {
      id: "grouper",
      name: "GROUPER",
      scientificName: "Epinephelus spp.",
      category: "Demersal",
      image: "/assets/3. PRODUCT/grouper.jpg",
      imageClass: "object-cover object-center",
      processingTypes: ["Whole Round / WGGS", "Head Only"],
      freezingMethod: "Air Blast Quick Freezing",
      sizeGrades: " Head only > 500-1000g, 1000-2000g, 2000-3000g",
      packingSpec: "IWP (Individually Wrapped) / 30 lbs / Master Carton with Polybag Liner or Custom Packaging",
    },
    {
      id: "parrotfish",
      name: "PARROT FISH",
      scientificName: "Scarus spp.",
      category: "Demersal",
      image: "/assets/3. PRODUCT/Salinan DEM. PARROT WGGS _ 7.jpeg",
      imageClass: "object-cover object-center",
      processingTypes: ["Whole, Gilled, Gutted, Scaled (WGGS)", "Whole Round"],
      freezingMethod: "Individual Quick Freezing (IQF) with Glazing",
      sizeGrades: "0.5-1 lbs, 1-2 lbs, 2-3 lbs",
      packingSpec: "IVP (Individually Vacuum) / 10 lbs / Master Carton with Polybag Liner or Custom Packaging",
    },
    {
      id: "rabbitfish",
      name: "RABBIT FISH",
      scientificName: "Siganus spp.",
      category: "Demersal",
      image: "/assets/3. PRODUCT/rabbit fish-1.jpg",
      imageClass: "object-cover object-center",
      processingTypes: ["Whole Round"],
      freezingMethod: "IQF / Air Blast Quick Freezing",
      sizeGrades: "300-500g, 500-800g, 800+g",
      packingSpec: "IVP (Individually Vacuum) / 20 lbs / Master Carton with Polybag Liner or Custom Packaging",
    },
    {
      id: "leatherjacket",
      name: "LEATHER JACKET",
      scientificName: "Aluterus monoceros",
      category: "Demersal",
      image: "/assets/3. PRODUCT/leather jacket.jpg",
      imageClass: "object-cover object-center",
      isComingSoon: true,
      processingTypes: [],
      freezingMethod: "",
      sizeGrades: "",
      packingSpec: "",
    },
    {
      id: "mackerel",
      name: "MACKEREL SCAD",
      scientificName: "Decapterus spp.",
      category: "Pelagic",
      image: "/assets/3. PRODUCT/Salinan PEL. MACKEREL SCAD _ 1.jpeg",
      imageClass: "object-cover object-center",
      processingTypes: ["Whole Round"],
      freezingMethod: "Block in Air Blast Quick Freezer",
      sizeGrades: "4-6 pcs/kg, 6-8 pcs/kg, 8-10 pcs/kg, 10-12 pcs/kg",
      packingSpec: "Bulk Pack) / 2*10pack / 20 lbs / Master Carton with Polybag Liner or Custom Packaging",
    },
    {
      id: "spanishmackerel",
      name: "SPANISH MACKEREL",
      scientificName: "Scomberomorus commerson",
      category: "Pelagic",
      image: "/assets/3. PRODUCT/spanish mackerel.jpeg",
      imageClass: "object-cover object-center",
      isComingSoon: true,
      processingTypes: [],
      freezingMethod: "",
      sizeGrades: "",
      packingSpec: "",
    },
    {
      id: "largeheadhairtail",
      name: "LARGEHEAD HAIRTAIL",
      scientificName: "Trichiurus lepturus",
      category: "Pelagic",
      image: "",
      imageClass: "object-cover object-center",
      isComingSoon: true,
      processingTypes: [],
      freezingMethod: "",
      sizeGrades: "",
      packingSpec: "",
    },
  ];

  const categories = [
    { label: "All", value: "All" },
    { label: "Cephalopod", value: "Cephalopod" },
    { label: "Demersal Fish", value: "Demersal" },
    { label: "Pelagic Fish", value: "Pelagic" },
  ];

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <section
      id="product"
      className="py-16 sm:py-24 ocean-teal-section text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        {/* Section Header matching Screenshot 1 */}
        <div className="text-center space-y-3">
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white tracking-wide uppercase drop-shadow-md">
            Our <span className="text-[#072433]">PRODUCT</span>
          </h2>
          <p className="text-slate-100 text-xs sm:text-sm max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-sm">
            We specialize in processing high-quality seafood, freezing fresh raw materials at peak freshness.
          </p>

          {/* Filter Tabs matching Mockup Pill Style */}
          <div className="flex flex-wrap justify-center gap-2.5 pt-3">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.value;
              return (
                <button
                  key={cat.label}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-5 py-2 rounded-full text-xs font-extrabold tracking-wider transition-all duration-200 uppercase cursor-pointer ${
                    isActive
                      ? "bg-[#062432] text-cyan-300 border-2 border-cyan-400/80 shadow-lg scale-105"
                      : "bg-[#062432]/70 text-slate-200 hover:bg-[#062432] hover:text-white border border-cyan-500/30"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Horizontal Slider Track with Side Arrow Controls */}
        <div className="relative group/carousel px-2">
          {/* Scroll Left Button */}
          <button
            onClick={scrollLeft}
            className="absolute -left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#062432] text-cyan-300 border-2 border-cyan-400 flex items-center justify-center shadow-2xl hover:bg-[#0a3548] hover:scale-110 active:scale-95 transition-all cursor-pointer"
            aria-label="Scroll Left"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Scroll Right Button */}
          <button
            onClick={scrollRight}
            className="absolute -right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#062432] text-cyan-300 border-2 border-cyan-400 flex items-center justify-center shadow-2xl hover:bg-[#0a3548] hover:scale-110 active:scale-95 transition-all cursor-pointer"
            aria-label="Scroll Right"
          >
            <ChevronRight className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Side Scrolling Slider Track */}
          <div
            ref={scrollRef}
            className="flex space-x-5 sm:space-x-6 overflow-x-auto no-scrollbar py-6 px-3 scroll-smooth"
          >
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                onClick={() => onSelectProduct(prod)}
                className="w-[260px] sm:w-[290px] shrink-0 metallic-card rounded-2xl p-4 sm:p-5 text-[#072331] shadow-xl hover:translate-y-[-6px] hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between group/card border border-white/80"
              >
                <div>
                  {/* Category Pill on Card Header */}
                  <div className="flex justify-between items-center mb-3">
                    <span className="bg-[#072433] text-cyan-300 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-inner">
                      {prod.category}
                    </span>
                    {prod.isComingSoon && (
                      <span className="bg-amber-400 text-slate-900 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                        Coming Soon
                      </span>
                    )}
                  </div>

                  {/* Seafood Image Container or Clean Coming Soon Box */}
                  {prod.image ? (
                    <div className="relative h-40 sm:h-44 w-full rounded-xl overflow-hidden bg-slate-100/90 shadow-inner border border-slate-300/80 mb-4">
                      <Image
                        src={prod.image}
                        alt={`Frozen ${prod.name} (${prod.scientificName}) - CV. MITRA ALAM Indonesian Seafood Exporter`}
                        title={`Indonesian Frozen ${prod.name} (${prod.scientificName})`}
                        fill
                        className={`object-cover group-hover/card:brightness-105 transition-all duration-500 ${prod.imageClass || "object-cover object-center"}`}
                      />
                      <div className="absolute inset-0 bg-[#072433]/30 opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="bg-[#072433] text-cyan-300 text-[11px] font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 shadow-md">
                          <Eye className="w-3.5 h-3.5" /> View Specs
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="relative h-40 sm:h-44 w-full rounded-xl overflow-hidden bg-gradient-to-br from-[#062432] via-[#093549] to-[#041a24] shadow-inner border border-cyan-500/30 mb-4 flex flex-col items-center justify-center p-4 text-center group-hover/card:border-amber-400/60 transition-colors">
                      <span className="bg-amber-400 text-slate-900 font-black text-[10px] uppercase px-3 py-1 rounded-full tracking-widest shadow-md mb-1.5">
                        Coming Soon
                      </span>
                      <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">
                        Image Unavailable
                      </span>
                      <div className="absolute inset-0 bg-[#072433]/40 opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="bg-[#072433] text-cyan-300 text-[11px] font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 shadow-md">
                          <Eye className="w-3.5 h-3.5" /> View Specs
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Product Title & Latin Name */}
                  <div className="space-y-0.5 mb-3 text-left">
                    <h3 className="font-display font-extrabold text-base sm:text-lg text-[#072331] tracking-wide uppercase leading-tight group-hover/card:text-[#0b485e] transition-colors">
                      {prod.name}
                    </h3>
                    <p className="text-[11px] text-slate-600 font-tech italic font-semibold">
                      ( {prod.scientificName} )
                    </p>
                  </div>

                  {/* Technical Specifications from Mockup */}
                  <div className="space-y-1.5 text-[11px] text-slate-700 font-medium text-left border-t border-slate-300/60 pt-2.5">
                    {prod.processingTypes
                      ?.filter((pt) => pt && pt.trim() !== "")
                      .map((pt, idx) => (
                        <p key={idx} className="leading-tight text-slate-800">
                          {pt}
                        </p>
                      ))}
                    {prod.sizeGrades && prod.sizeGrades.trim() !== "" && (
                      <p className="font-tech text-slate-900 font-semibold pt-1">
                        {prod.sizeGrades}
                      </p>
                    )}
                    {(!prod.processingTypes?.some((pt) => pt && pt.trim() !== "") &&
                      (!prod.sizeGrades || prod.sizeGrades.trim() === "")) && (
                      <p className="font-tech text-slate-500 italic">
                        Specs available on request
                      </p>
                    )}
                  </div>
                </div>

                {/* Card Bottom Inquire Hint */}
                <div className="mt-4 pt-3 border-t border-slate-300/80 flex items-center justify-between text-[11px] font-bold text-[#083c4e]">
                  <span>Export Specs</span>
                  <span className="group-hover/card:translate-x-1 transition-transform">
                    Inquire &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
