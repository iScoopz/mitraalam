"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

interface GalleryItem {
  src: string;
  title: string;
  caption: string;
}

interface GallerySlide {
  id: number;
  items: GalleryItem[];
}

export default function GallerySlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const slides: GallerySlide[] = [
    {
      id: 1,
      items: [
        {
          src: "/assets/8. GALLERY/gallery-13.png",
          title: "Processing & Freezing Operations",
          caption: "Daily processing line operations under strict hygiene protocols.",
        },
        {
          src: "/assets/8. GALLERY/gallery-14.png",
          title: "Cold Chain Temperature Control",
          caption: "Maintaining core temperatures throughout handling and staging.",
        },
        {
          src: "/assets/8. GALLERY/gallery-15.png",
          title: "Air Blast Freezing Facilities",
          caption: "Rapid flash-freezing preserving moisture and cellular integrity.",
        },
        {
          src: "/assets/8. GALLERY/gallery-16.png",
          title: "Raw Material Grading",
          caption: "Detailed size and quality inspection upon dock landing.",
        },
        {
          src: "/assets/8. GALLERY/gallery-17.png",
          title: "Clean Processing Environment",
          caption: "Sanitized stainless steel workstations meeting international HACCP standards.",
        },
        {
          src: "/assets/8. GALLERY/gallery-18.png",
          title: "Cold Storage Warehouse",
          caption: "Organized racking and palletized storage at -20°C to -25°C.",
        },
      ],
    },
    {
      id: 2,
      items: [
        {
          src: "/assets/8. GALLERY/gallery-19.png",
          title: "Seafood Selection & Sizing",
          caption: "Precision sorting and manual quality inspection.",
        },
        {
          src: "/assets/8. GALLERY/gallery-20.png",
          title: "Packaging & Sealing",
          caption: "Vacuum sealing and protective carton packing.",
        },
        {
          src: "/assets/8. GALLERY/gallery-21.png",
          title: "Staff Hygiene & GMP Protocols",
          caption: "Fully geared processing staff following strict GMP standards.",
        },
        {
          src: "/assets/8. GALLERY/gallery-22.png",
          title: "Dockside Landing Inspection",
          caption: "Fresh raw seafood inspection directly at Makassar harbor.",
        },
        {
          src: "/assets/8. GALLERY/gallery-23.png",
          title: "Cephalopod Preparation",
          caption: "Specialized cleaning and ball-rolling for export octopus.",
        },
        {
          src: "/assets/8. GALLERY/gallery-24.png",
          title: "Block Quick Freezing (BQF)",
          caption: "Uniform block freezing for industrial and culinary export.",
        },
      ],
    },
    {
      id: 3,
      items: [
        {
          src: "/assets/8. GALLERY/gallery-25.png",
          title: "Demersal Fish Filleting",
          caption: "Careful precision filleting and skinning processes.",
        },
        {
          src: "/assets/8. GALLERY/gallery-26.png",
          title: "Export Inspection Verification",
          caption: "Verification of export specifications prior to container loading.",
        },
        {
          src: "/assets/8. GALLERY/gallery-27.png",
          title: "Glazing & Protective Layer",
          caption: "Uniform ice glazing ensuring extended shelf life.",
        },
        {
          src: "/assets/8. GALLERY/gallery-28.png",
          title: "Cold Storage Staging",
          caption: "Master cartons organized for seamless reefer container loading.",
        },
        {
          src: "/assets/8. GALLERY/gallery-29.png",
          title: "Quality Control Laboratory",
          caption: "Microbiological and chemical testing for food safety compliance.",
        },
        {
          src: "/assets/8. GALLERY/gallery-30.png",
          title: "Factory Facility View",
          caption: "Modern seafood processing facility in KIMA Industrial Estate.",
        },
      ],
    },
    {
      id: 4,
      items: [
        {
          src: "/assets/8. GALLERY/gallery-31.png",
          title: "Staff Training & QC Briefing",
          caption: "Continuous quality training for export processing personnel.",
        },
        {
          src: "/assets/8. GALLERY/gallery-32.png",
          title: "Weighing & Verification",
          caption: "Precision digital weighing per packaging batch.",
        },
        {
          src: "/assets/8. GALLERY/gallery-33.png",
          title: "Inner Polybag Sealing",
          caption: "Moisture-proof inner liners protecting frozen seafood.",
        },
        {
          src: "/assets/8. GALLERY/gallery-34.png",
          title: "Cold Storage Inventory",
          caption: "108 Tons cold storage warehouse operation in Makassar.",
        },
        {
          src: "/assets/8. GALLERY/gallery-35.png",
          title: "Reefer Container Loading",
          caption: "Direct plug-in cold chain loading for international shipments.",
        },
        {
          src: "/assets/8. GALLERY/gallery-36.png",
          title: "Finished Export Ready Products",
          caption: "Certified premium frozen seafood ready for global delivery.",
        },
      ],
    },
  ];

  // Flatten all 24 items into a single array for sequential navigation
  const allGalleryItems = slides.flatMap((s) => s.items);

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Lightbox sequential navigation
  const handlePrevLightbox = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      const newIdx = prev === 0 ? allGalleryItems.length - 1 : prev - 1;
      setActiveSlide(Math.floor(newIdx / 6));
      return newIdx;
    });
  }, [allGalleryItems.length]);

  const handleNextLightbox = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      const newIdx = prev === allGalleryItems.length - 1 ? 0 : prev + 1;
      setActiveSlide(Math.floor(newIdx / 6));
      return newIdx;
    });
  }, [allGalleryItems.length]);

  // Touch swipe handling for mobile gestures
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;

    if (diff > minSwipeDistance) {
      // Swiped Left -> Go Next
      handleNextLightbox();
    } else if (diff < -minSwipeDistance) {
      // Swiped Right -> Go Previous
      handlePrevLightbox();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") handlePrevLightbox();
      if (e.key === "ArrowRight") handleNextLightbox();
    };

    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex, handlePrevLightbox, handleNextLightbox]);

  const currentLightboxItem =
    lightboxIndex !== null ? allGalleryItems[lightboxIndex] : null;

  return (
    <section
      id="gallery"
      className="pt-16 pb-10 text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8 text-center">
        {/* Section Title */}
        <div className="space-y-1">
          <span className="text-[11px] sm:text-xs font-black tracking-[0.25em] text-cyan-300 uppercase block drop-shadow-sm">
            VISUAL ATMOSPHERE
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white tracking-wider uppercase drop-shadow-md">
            GALLERY
          </h2>
          <p className="text-slate-100 text-xs sm:text-sm max-w-xl mx-auto font-medium">
            Explore our daily seafood processing, cold chain storage, and export logistics in Makassar.
          </p>
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

          {/* Current Gallery Slide: 2 rows x 3 columns Grid */}
          <div className="transition-all duration-500 ease-in-out">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-5">
              {slides[activeSlide].items.map((item, idx) => {
                const flatIndex = activeSlide * 6 + idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setLightboxIndex(flatIndex)}
                    className="relative h-44 sm:h-56 md:h-64 rounded-2xl overflow-hidden shadow-lg border-2 border-white/70 bg-[#072433] group/item cursor-pointer hover:border-cyan-300 transition-all duration-300"
                  >
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-cover group-hover/item:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[#041822]/30 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="w-10 h-10 rounded-full bg-[#072433]/85 text-cyan-300 border border-cyan-400/60 flex items-center justify-center shadow-lg backdrop-blur-sm group-hover/item:scale-110 transition-transform">
                        <Maximize2 className="w-5 h-5" />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Slide Indicator Dots (4 Slides for all 24 photos) */}
          <div className="flex justify-center items-center gap-2 pt-6">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeSlide === i
                    ? "w-8 bg-[#072433] border border-cyan-400"
                    : "w-2.5 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Fullscreen Modal with Swipe & Next/Prev Controls */}
      {currentLightboxItem && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#041822]/95 backdrop-blur-md p-3 sm:p-6 animate-in fade-in duration-200 select-none"
          onClick={() => setLightboxIndex(null)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="relative max-w-4xl w-full max-h-[95vh] flex flex-col items-center justify-center space-y-3 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with Title, Counter Badge, and Close Button */}
            <div className="w-full flex items-center justify-between text-white border-b border-cyan-500/30 pb-3 px-1">
              <div className="flex items-center gap-3">
                <h3 className="font-display text-sm sm:text-lg font-bold text-cyan-300 truncate max-w-[200px] sm:max-w-md">
                  {currentLightboxItem.title}
                </h3>
                <span className="text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-400/40">
                  {lightboxIndex + 1} / {allGalleryItems.length}
                </span>
              </div>

              <button
                onClick={() => setLightboxIndex(null)}
                className="w-9 h-9 rounded-full bg-[#072433] text-cyan-300 border border-cyan-400/50 flex items-center justify-center hover:bg-cyan-900/60 hover:scale-105 active:scale-95 transition-all cursor-pointer shrink-0"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Lightbox Image Stage with Interactive Navigation Arrows */}
            <div className="relative w-full h-[58vh] sm:h-[68vh] rounded-2xl overflow-hidden border-2 border-cyan-400/50 shadow-2xl bg-[#041822] flex items-center justify-center group/lightbox">
              <Image
                src={currentLightboxItem.src}
                alt={currentLightboxItem.title}
                fill
                sizes="(max-width: 1024px) 100vw, 85vw"
                className="object-contain p-1 sm:p-2"
                priority
              />

              {/* Lightbox Previous (<) Floating Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevLightbox();
                }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#062432]/90 text-cyan-300 border border-cyan-400 flex items-center justify-center shadow-2xl hover:bg-[#0a3548] hover:scale-110 active:scale-95 transition-all cursor-pointer backdrop-blur-sm"
                aria-label="Previous Photo"
              >
                <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
              </button>

              {/* Lightbox Next (>) Floating Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextLightbox();
                }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#062432]/90 text-cyan-300 border border-cyan-400 flex items-center justify-center shadow-2xl hover:bg-[#0a3548] hover:scale-110 active:scale-95 transition-all cursor-pointer backdrop-blur-sm"
                aria-label="Next Photo"
              >
                <ChevronRight className="w-6 h-6 stroke-[2.5]" />
              </button>
            </div>

            {/* Bottom Swipe Hint */}
            <div className="flex flex-col items-center space-y-1 px-2 pt-1">
              <span className="text-[10px] text-cyan-400/80 font-medium tracking-wide">
                Geser (swipe) atau gunakan panah keyboard untuk melihat foto lainnya
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
