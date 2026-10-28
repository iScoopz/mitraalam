"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Eye, Sparkles } from "lucide-react";
import { SeafoodProduct } from "./ProductModal";

interface ProductShowcaseProps {
  onSelectProduct: (product: SeafoodProduct, card: HTMLElement) => void;
}

export default function ProductShowcase({ onSelectProduct }: ProductShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const products: SeafoodProduct[] = [
    {
      id: "octopus",
      name: "OCTOPUS",
      scientificName: "Octopus cyaneus",
      category: "Cephalopod",
      image: "/assets/3. PRODUCT/Salinan CEP. OCTOPUS BALL _ 3.webp",
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
      image: "/assets/3. PRODUCT/cuttlefish-png.webp",
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
      image: "/assets/3. PRODUCT/squid-png.webp",
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
      image: "/assets/3. PRODUCT/snapper-png.webp",
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
      image: "/assets/3. PRODUCT/grouper-png.webp",
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
      image: "/assets/3. PRODUCT/parrot fish.webp",
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
      image: "/assets/3. PRODUCT/rabbit fish.webp",
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
      image: "/assets/3. PRODUCT/leather jacket.webp",
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
      image: "/assets/3. PRODUCT/mackerel scad.webp",
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
      image: "/assets/3. PRODUCT/spanish mackerel-png.webp",
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

  // Auto reset scroll position and active index when category tab changes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      setActiveIndex(0);
    }
  }, [activeCategory]);

  // Update active dot indicator dynamically on scroll
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) {
      setActiveIndex(0);
      return;
    }
    const total = filteredProducts.length;
    const index = Math.min(
      Math.max(0, Math.round((scrollLeft / maxScroll) * (total - 1))),
      total - 1
    );
    setActiveIndex(index);
  };

  // Scroll left with wrap-around to end when reaching the start
  const scrollLeft = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (scrollLeft <= 20) {
        // Wrap around to end
        scrollRef.current.scrollTo({ left: scrollWidth - clientWidth, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
      }
    }
  };

  // Scroll right with wrap-around to beginning when reaching the end
  const scrollRight = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 20) {
        // Wrap around to start
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
      }
    }
  };

  // Click on a specific dot to scroll directly to that product
  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const { scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const total = filteredProducts.length;
      if (total <= 1) return;
      const targetLeft = (maxScroll / (total - 1)) * index;
      scrollRef.current.scrollTo({ left: targetLeft, behavior: "smooth" });
    }
  };

  return (
    <section
      id="product"
      className="pt-16 pb-20 text-white relative overflow-clip"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        {/* Section Header matching Screenshot 1 */}
        <div data-reveal className="grid lg:grid-cols-12 gap-x-10 gap-y-5 items-end">
          <h2 className="lg:col-span-7 font-display text-5xl sm:text-6xl font-black text-white tracking-[-0.03em] leading-none">
            Our products
          </h2>
          <p className="lg:col-span-5 text-slate-100 text-base sm:text-lg font-medium leading-relaxed">
            We specialize in processing high-quality seafood, freezing fresh raw materials at peak freshness.
          </p>

          {/* Filter Tabs matching Mockup Pill Style */}
          <div className="lg:col-span-12 flex flex-wrap gap-2.5">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.value;
              return (
                <button
                  key={cat.label}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 cursor-pointer ${isActive
                    ? "bg-cyan-300 text-[#041822]"
                    : "bg-[#062432]/70 text-slate-100 hover:bg-[#062432] hover:text-white"
                    }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Horizontal Slider Track with Side Arrow Controls matching Screenshot */}
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
            onScroll={handleScroll}
            className="flex space-x-5 sm:space-x-6 overflow-x-auto no-scrollbar py-6 px-3 scroll-smooth"
          >
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                onClick={(e) => onSelectProduct(prod, e.currentTarget)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onSelectProduct(prod, e.currentTarget); } }}
                data-tilt
                className="sheen w-[260px] sm:w-[290px] shrink-0 metallic-card rounded-2xl p-4 sm:p-5 text-[#072331] hover:translate-y-[-6px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 transition-all duration-300 cursor-pointer flex flex-col justify-between group/card"
              >
                <div>
                  {/* Category Pill on Card Header */}
                  <div className="flex justify-between items-center mb-3.5">
                    <span className="bg-[#072433] text-cyan-300 text-xs font-semibold px-3 py-1 rounded-full">
                      {prod.category}
                    </span>
                    {prod.isComingSoon && (
                      <span className="bg-amber-400 text-slate-900 text-xs font-bold px-2.5 py-0.5 rounded-full">
                        Coming Soon
                      </span>
                    )}
                  </div>

                  {/* Seafood Image Container */}
                  {prod.image ? (
                    <div data-photo className="relative h-44 w-full rounded-xl overflow-hidden bg-slate-100 mb-4">
                      <Image
                        src={prod.image}
                        alt={`Frozen ${prod.name} (${prod.scientificName}) - CV MITRA ALAM Indonesian Seafood Exporter`}
                        title={`Indonesian Frozen ${prod.name} (${prod.scientificName})`}
                        fill
                        className={`object-cover group-hover/card:scale-105 group-hover/card:brightness-105 transition-all duration-500 ${prod.imageClass || "object-cover object-center"}`}
                      />
                      <div className="absolute inset-0 bg-[#072433]/30 opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="bg-[#072433] text-cyan-300 text-sm font-bold px-3.5 py-1.5 rounded-lg flex items-center gap-1">
                          <Eye className="w-3.5 h-3.5" /> View Specs
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="relative h-44 w-full rounded-xl overflow-hidden bg-[#062432] mb-4 flex flex-col items-center justify-center p-4 text-center group-hover/card:border-amber-400/60 transition-colors">
                      <span className="bg-amber-400 text-slate-900 font-bold text-xs px-3 py-1 rounded-full mb-1.5">
                        Coming Soon
                      </span>
                      <span className="text-sm font-semibold text-slate-200">
                        Image Unavailable
                      </span>
                      <div className="absolute inset-0 bg-[#072433]/40 opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="bg-[#072433] text-cyan-300 text-sm font-bold px-3.5 py-1.5 rounded-lg flex items-center gap-1">
                          <Eye className="w-3.5 h-3.5" /> View Specs
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Product Title & Latin Name */}
                  <div className="space-y-1 mb-3.5 text-left">
                    <h3 className="font-display font-extrabold text-base sm:text-lg text-[#072331] uppercase leading-tight group-hover/card:text-[#0b485e] transition-colors">
                      {prod.name}
                    </h3>
                    <p className="text-sm text-slate-600 italic font-medium">
                      ( {prod.scientificName} )
                    </p>
                  </div>

                  {/* Technical Specifications */}
                  <div className="space-y-1.5 text-sm text-slate-700 font-medium text-left">
                    {prod.processingTypes
                      ?.filter((pt) => pt && pt.trim() !== "")
                      .map((pt, idx) => (
                        <p key={idx} className="leading-snug text-slate-800 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#08485e] shrink-0"></span>
                          <span>{pt}</span>
                        </p>
                      ))}
                    {prod.sizeGrades && prod.sizeGrades.trim() !== "" && (
                      <p className="font-tech text-slate-900 font-bold pt-1 text-sm">
                        {prod.sizeGrades}
                      </p>
                    )}
                    {(!prod.processingTypes?.some((pt) => pt && pt.trim() !== "") &&
                      (!prod.sizeGrades || prod.sizeGrades.trim() === "")) && (
                        <p className="text-slate-600 italic text-sm">
                          Specs available on request
                        </p>
                      )}
                  </div>
                </div>

                {/* Card Bottom Inquire Hint */}
                <div className="mt-5 pt-1 flex items-center justify-between text-sm font-bold text-[#083c4e]">
                  <span className="underline underline-offset-4 decoration-[#083c4e]/30 group-hover/card:decoration-[#083c4e]">View specs</span>
                  <a
                    href={`https://wa.me/6282190931111?text=${encodeURIComponent(`Hello CV Mitra Alam, I am interested in ${prod.name} (${prod.scientificName}). Could you share price and specifications?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    onKeyDown={(e) => e.stopPropagation()}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-[#072433] text-cyan-300 hover:bg-[#0b485e] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#072433] transition-colors"
                    aria-label={`Inquire about ${prod.name} on WhatsApp`}
                  >
                    Inquire
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Slide Indicator Dots (Penanda Scroll seperti di Gallery) */}
          <div className="flex justify-center items-center gap-2 pt-6">
            {filteredProducts.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === i
                    ? "w-8 bg-[#072433] border border-cyan-400 shadow-md"
                    : "w-2.5 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to product ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
