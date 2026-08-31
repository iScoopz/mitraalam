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
      image: "/assets/3. PRODUCT/octopus.jpeg",
      processingTypes: ["Whole Cleaned Ball | IQF", "Whole Block | Block Quick Frozen (BQF)"],
      freezingMethod: "Individual Quick Freezing (IQF) / Air Blast Quick Freeze",
      sizeGrades: "1-2 lbs, 2-4 lbs, 4-6 lbs, 6-8 lbs",
      packingSpec: "10 kg / Master Carton or Custom Packaging",
      minOrder: "1 x 20ft FCL (~12-14 MT)",
      description: "Wild-caught premium grade Indonesian octopus, thoroughly gutted, eye & beak removed, and ball-rolled or block frozen at peak freshness.",
    },
    {
      id: "cuttlefish",
      name: "CUTTLEFISH",
      scientificName: "Sepia esculenta",
      category: "Cephalopod",
      image: "/assets/3. PRODUCT/cuttlefish.jpeg",
      processingTypes: ["Whole Cleaned | IQF", "Skin-on / Skinless Fillet | IQF"],
      freezingMethod: "IQF / Contact Plate Freeze",
      sizeGrades: "0/1 pcs/kg, 1-2 pcs/kg, 2-4 pcs/kg",
      packingSpec: "1 kg plain bag x 10 / Master Carton",
      minOrder: "1 x 20ft FCL (~12 MT)",
      description: "Tender, snow-white wild cuttlefish, expertly skinned, deseeded, and flash frozen to maintain delicate texture and sweet flavor.",
    },
    {
      id: "squid",
      name: "SQUID",
      scientificName: "Loligo sp.",
      category: "Cephalopod",
      image: "/assets/3. PRODUCT/squid.jpeg",
      processingTypes: ["Whole Block | Block Quick Frozen", "Whole Cleaned Tube & Tentacle | IQF"],
      freezingMethod: "Block Quick Frozen (BQF) / IQF",
      sizeGrades: "Size : *as per request (10-15cm, 15-20cm, 20cm+)",
      packingSpec: "2 kg block x 6 / Master Carton (12 kg net)",
      minOrder: "1 x 20ft / 40ft FCL",
      description: "Directly sourced from Indonesian clean waters, fresh Loligo squid packed in pristine quick-frozen blocks for industrial and culinary export.",
    },
    {
      id: "redsnapper",
      name: "RED SNAPPER",
      scientificName: "Lutjanus campechanus",
      category: "Demersal",
      image: "/assets/3. PRODUCT/snapper.jpg",
      processingTypes: ["Whole Round / GGS / Fillet | IQF", "Skin-on Scaled Fillet"],
      freezingMethod: "IQF / Air Blast Frozen (-35°C)",
      sizeGrades: "300-500g, 500-800g, 800-1000g, 1000g+",
      packingSpec: "10 kg Master Carton with polybag liner",
      minOrder: "1 x 20ft FCL",
      description: "Prime red snapper sustainably harvested from Indonesian archipelago waters, celebrated worldwide for delicate flaky texture and mild sweet taste.",
    },
    {
      id: "grouper",
      name: "GROUPER",
      scientificName: "Epinephelus spp.",
      category: "Demersal",
      image: "/assets/3. PRODUCT/grouper.jpg",
      processingTypes: ["Whole Round / Gilled & Gutted | IQF", "Head-on / Headless Fillet"],
      freezingMethod: "Air Blast Quick Freeze (-35°C)",
      sizeGrades: "500-1000g, 1000-2000g, 2000-3000g",
      packingSpec: "Individually wrapped / 15 kg Master Carton",
      minOrder: "1 x 20ft FCL",
      description: "Rich and firm white meat grouper, carefully handled and fast-chilled immediately after dock landing in Makassar.",
    },
    {
      id: "parrotfish",
      name: "PARROT FISH",
      scientificName: "Scarus spp.",
      category: "Demersal",
      image: "/assets/3. PRODUCT/parrot fish.jpg",
      processingTypes: ["Whole, Gilled, Gutted, Scaled (GGS) | IQF", "Whole Round | IQF"],
      freezingMethod: "Individual Quick Freezing (IQF) with Glazing",
      sizeGrades: "0.5-1 lbs, 1-2 lbs, 2-3 lbs",
      packingSpec: "IWP (Individually Wrapped) / 10 kg Carton",
      minOrder: "1 x 20ft FCL",
      description: "Vibrant coral reef demersal fish with firm white flesh, cleaned to international export food safety standards.",
    },
    {
      id: "rabbitfish",
      name: "RABBIT FISH",
      scientificName: "Siganus spp.",
      category: "Demersal",
      image: "/assets/3. PRODUCT/rabbit fish.jpg",
      processingTypes: ["Whole Round | IQF", "Gilled & Gutted | IQF"],
      freezingMethod: "IQF / Air Blast Frozen (-35°C)",
      sizeGrades: "200-300g, 300-500g, 500-800g",
      packingSpec: "10 kg Master Carton",
      minOrder: "1 x 20ft FCL",
      description: "Fresh white meat rabbit fish (Ikan Baronang), highly regarded for tender texture and delicate sweet seafood taste.",
    },
    {
      id: "leatherjacket",
      name: "LEATHER JACKET",
      scientificName: "Monacanthidae",
      category: "Demersal",
      image: "/assets/3. PRODUCT/leather jacket.jpg",
      isComingSoon: true,
      processingTypes: ["Headless, Gutted, Skinless (HGT) | IQF", "Whole Cleaned"],
      freezingMethod: "IQF / BQF",
      sizeGrades: "100-200g, 200-300g, 300-500g",
      packingSpec: "10 kg Master Carton",
      minOrder: "1 x 20ft FCL",
      description: "Carefully skinned and cleaned leather jacket fish with lean, firm white meat ideal for Asian and global retail markets.",
    },
    {
      id: "mackerel",
      name: "MACKEREL SCAD",
      scientificName: "Decapterus macarellus",
      category: "Pelagic",
      image: "/assets/3. PRODUCT/mackerel scad.jpg",
      processingTypes: ["Whole Round | Block Quick Frozen (BQF)", "Whole Round | IQF"],
      freezingMethod: "BQF 10kg/15kg block in Air Blast Freezer",
      sizeGrades: "4-6 pcs/kg, 6-8 pcs/kg, 8-10 pcs/kg, 10-12 pcs/kg",
      packingSpec: "10 kg / 15 kg net weight carton block",
      minOrder: "1 x 40ft FCL (~27 MT)",
      description: "High oil-content pelagic fish (Ikan Layang), high protein and nutrient rich, popular across Asian and global canned/frozen markets.",
    },
    {
      id: "spanishmackerel",
      name: "SPANISH MACKEREL",
      scientificName: "Scomberomorus commerson",
      category: "Pelagic",
      image: "/assets/3. PRODUCT/spanish mackerel.jpeg",
      isComingSoon: true,
      processingTypes: ["Whole Round / Steak / Fillet | IQF", "Gilled & Gutted"],
      freezingMethod: "Air Blast Quick Freeze (-35°C)",
      sizeGrades: "1-2 kg, 2-3 kg, 3-5 kg, 5kg+",
      packingSpec: "15 kg / 20 kg Master Carton",
      minOrder: "1 x 20ft FCL",
      description: "Premium grade Spanish Mackerel (Ikan Tenggiri), richly flavored and firm, renowned for export culinary and surimi applications.",
    },
    {
      id: "largeheadhairtail",
      name: "LARGEHEAD HAIRTAIL",
      scientificName: "Trichiurus lepturus",
      category: "Pelagic",
      image: "",
      isComingSoon: true,
      processingTypes: ["Whole Round | IQF / Block", "Headless, Gutted (HGT)"],
      freezingMethod: "Air Blast Quick Freeze (-35°C) / IQF",
      sizeGrades: "200-300g, 300-500g, 500-700g, 700g+",
      packingSpec: "10 kg Master Carton",
      minOrder: "1 x 20ft / 40ft FCL",
      description: "Indonesian Ribbonfish (Ikan Layur), elongated silver pelagic fish, celebrated across global markets for lean and delicate white meat.",
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
                    <div className="relative h-40 sm:h-44 w-full rounded-xl overflow-hidden bg-white/70 shadow-sm border border-slate-200/80 mb-4">
                      <Image
                        src={prod.image}
                        alt={prod.name}
                        fill
                        className="object-cover group-hover/card:scale-108 transition-transform duration-500"
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
                    {prod.processingTypes.map((pt, idx) => (
                      <p key={idx} className="leading-tight text-slate-800">
                        {pt}
                      </p>
                    ))}
                    <p className="font-tech text-slate-900 font-semibold pt-1">
                      {prod.sizeGrades}
                    </p>
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
