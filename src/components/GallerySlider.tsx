"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X, Sparkles } from "lucide-react";

interface GallerySlide {
  id: number;
  items: {
    src: string;
    title: string;
    caption: string;
  }[];
}

export default function GallerySlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    title: string;
    caption: string;
  } | null>(null);

  const slides: GallerySlide[] = [
    {
      id: 1,
      items: [
        {
          src: "/images/sorting_line.jpg",
          title: "HACCP Processing Line",
          caption: "Sanitary processing line with certified food grade stainless steel sorting tables.",
        },
        {
          src: "/images/qc_temp.jpg",
          title: "Quality & Core Temperature Control",
          caption: "Precision core temperature verification on octopus before flash freezing.",
        },
        {
          src: "/images/weighing_scale.jpg",
          title: "Precision Sizing & Weighing",
          caption: "Digital scale calibration ensuring uniform export weight grading.",
        },
        {
          src: "/images/packing_room.jpg",
          title: "Packaging & Cold Staging",
          caption: "Export-grade carton packaging under constant -18°C temperature chain.",
        },
        {
          src: "/images/cuttlefish.jpg",
          title: "Cleaned Cuttlefish Prep",
          caption: "Pristine white cleaned cuttlefish prepared for individual quick freezing.",
        },
        {
          src: "/images/redsnapper.jpg",
          title: "Fresh Demersal Fish Landing",
          caption: "Direct landing dock inspection of fresh wild-caught red snapper.",
        },
      ],
    },
    {
      id: 2,
      items: [
        {
          src: "/images/container_loading.jpg",
          title: "Refrigerated Container Loading",
          caption: "Direct containerization into 40ft High Cube reefer containers for international shipment.",
        },
        {
          src: "/images/parrotfish.jpg",
          title: "Parrot Fish Processing",
          caption: "Gilled, gutted, scaled, and glazed parrot fish ready for freezing.",
        },
        {
          src: "/images/grouper.jpg",
          title: "Whole Grouper Inspection",
          caption: "Export grade whole fresh grouper sourced from sustainable local fisheries.",
        },
        {
          src: "/images/mackerel.jpg",
          title: "Mackerel Scad Block Freezing",
          caption: "High quality pelagic mackerel prepared for high capacity block air blast freezing.",
        },
        {
          src: "/images/squid.jpg",
          title: "Loligo Squid Processing",
          caption: "Wild caught Loligo squid selected for block quick freezing.",
        },
        {
          src: "/images/octopus.jpg",
          title: "Whole Cleaned Octopus",
          caption: "Cleaned ball octopus packed for premium sushi and gourmet export markets.",
        },
      ],
    },
  ];

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxImage(null);
    };
    if (lightboxImage) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxImage]);

  return (
    <section
      id="gallery"
      className="py-16 sm:py-24 ocean-teal-section text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8 text-center">
        {/* Section Title matching Mockup */}
        <div className="space-y-1">
          <span className="text-[11px] sm:text-xs font-black tracking-[0.25em] text-[#072433] uppercase block">
            VISUAL ATMOSPHERE
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white tracking-wider uppercase drop-shadow-md">
            GALLERY
          </h2>
        </div>

        {/* Multi-Slide Carousel Container with Left/Right Navigation Arrows */}
        <div className="relative group/gallery">
          {/* Scroll Left Button */}
          <button
            onClick={handlePrevSlide}
            className="absolute -left-2 sm:-left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#062432] text-cyan-300 border-2 border-cyan-400 flex items-center justify-center shadow-2xl hover:bg-[#0a3548] hover:scale-110 active:scale-95 transition-all cursor-pointer"
            aria-label="Previous Gallery Slide"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Scroll Right Button */}
          <button
            onClick={handleNextSlide}
            className="absolute -right-2 sm:-right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#062432] text-cyan-300 border-2 border-cyan-400 flex items-center justify-center shadow-2xl hover:bg-[#0a3548] hover:scale-110 active:scale-95 transition-all cursor-pointer"
            aria-label="Next Gallery Slide"
          >
            <ChevronRight className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Current Gallery Slide: 2 rows x 3 columns Grid matching Screenshot 3 & 4 */}
          <div className="transition-all duration-500 ease-in-out">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-5">
              {slides[activeSlide].items.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setLightboxImage(item)}
                  className="relative h-44 sm:h-56 md:h-64 rounded-2xl overflow-hidden shadow-lg border-2 border-white/70 bg-[#072433] group/item cursor-pointer hover:border-cyan-300 transition-all duration-300"
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover group-hover/item:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#041822]/90 via-[#041822]/30 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-left">
                    <div className="flex justify-end">
                      <span className="w-8 h-8 rounded-full bg-[#072433]/80 text-cyan-300 flex items-center justify-center shadow-md">
                        <Maximize2 className="w-4 h-4" />
                      </span>
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-xs sm:text-sm text-white drop-shadow">
                        {item.title}
                      </h4>
                      <p className="text-[10px] text-slate-300 line-clamp-1 font-light">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicator Dots */}
          <div className="flex justify-center items-center gap-2 pt-6">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeSlide === i ? "w-8 bg-[#072433] border border-cyan-400" : "w-2.5 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Fullscreen Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#041822]/95 backdrop-blur-md p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center space-y-4 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="w-full flex items-center justify-between text-white border-b border-cyan-500/30 pb-3">
              <h3 className="font-display text-base sm:text-lg font-bold text-cyan-300">
                {lightboxImage.title}
              </h3>
              <button
                onClick={() => setLightboxImage(null)}
                className="w-9 h-9 rounded-full bg-[#072433] text-cyan-300 border border-cyan-400/50 flex items-center justify-center hover:bg-cyan-900/60 transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Lightbox Image Stage */}
            <div className="relative w-full h-[55vh] sm:h-[65vh] rounded-2xl overflow-hidden border-2 border-cyan-400/50 shadow-2xl bg-[#041822]">
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.title}
                fill
                className="object-contain p-2"
                priority
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-300 font-light text-center max-w-xl">
              {lightboxImage.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
