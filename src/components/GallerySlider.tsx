"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
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
          src: "/assets/8. GALLERY/gallery-13.webp",
          title: "Processing & Freezing Operations",
          caption: "Daily processing line operations under strict hygiene protocols.",
        },
        {
          src: "/assets/8. GALLERY/gallery-14.webp",
          title: "Cold Chain Temperature Control",
          caption: "Maintaining core temperatures throughout handling and staging.",
        },
        {
          src: "/assets/8. GALLERY/gallery-15.webp",
          title: "Air Blast Freezing Facilities",
          caption: "Rapid flash-freezing preserving moisture and cellular integrity.",
        },
        {
          src: "/assets/8. GALLERY/gallery-16.webp",
          title: "Raw Material Grading",
          caption: "Detailed size and quality inspection upon dock landing.",
        },
        {
          src: "/assets/8. GALLERY/gallery-17.webp",
          title: "Clean Processing Environment",
          caption: "Sanitized stainless steel workstations meeting international HACCP standards.",
        },
        {
          src: "/assets/8. GALLERY/gallery-18.webp",
          title: "Cold Storage Warehouse",
          caption: "Organized racking and palletized storage at -20°C to -25°C.",
        },
      ],
    },
    {
      id: 2,
      items: [
        {
          src: "/assets/8. GALLERY/gallery-19.webp",
          title: "Seafood Selection & Sizing",
          caption: "Precision sorting and manual quality inspection.",
        },
        {
          src: "/assets/8. GALLERY/gallery-20.webp",
          title: "Packaging & Sealing",
          caption: "Vacuum sealing and protective carton packing.",
        },
        {
          src: "/assets/8. GALLERY/gallery-21.webp",
          title: "Staff Hygiene & GMP Protocols",
          caption: "Fully geared processing staff following strict GMP standards.",
        },
        {
          src: "/assets/8. GALLERY/gallery-22.webp",
          title: "Dockside Landing Inspection",
          caption: "Fresh raw seafood inspection directly at Makassar harbor.",
        },
        {
          src: "/assets/8. GALLERY/gallery-23.webp",
          title: "Cephalopod Preparation",
          caption: "Specialized cleaning and ball-rolling for export octopus.",
        },
        {
          src: "/assets/8. GALLERY/gallery-24.webp",
          title: "Block Quick Freezing (BQF)",
          caption: "Uniform block freezing for industrial and culinary export.",
        },
      ],
    },
    {
      id: 3,
      items: [
        {
          src: "/assets/8. GALLERY/gallery-25.webp",
          title: "Demersal Fish Filleting",
          caption: "Careful precision filleting and skinning processes.",
        },
        {
          src: "/assets/8. GALLERY/gallery-26.webp",
          title: "Export Inspection Verification",
          caption: "Verification of export specifications prior to container loading.",
        },
        {
          src: "/assets/8. GALLERY/gallery-27.webp",
          title: "Glazing & Protective Layer",
          caption: "Uniform ice glazing ensuring extended shelf life.",
        },
        {
          src: "/assets/8. GALLERY/gallery-28.webp",
          title: "Cold Storage Staging",
          caption: "Master cartons organized for seamless reefer container loading.",
        },
        {
          src: "/assets/8. GALLERY/gallery-29.webp",
          title: "Quality Control Laboratory",
          caption: "Microbiological and chemical testing for food safety compliance.",
        },
        {
          src: "/assets/8. GALLERY/gallery-30.webp",
          title: "Factory Facility View",
          caption: "Modern seafood processing facility in KIMA Industrial Estate.",
        },
      ],
    },
    {
      id: 4,
      items: [
        {
          src: "/assets/8. GALLERY/gallery-31.webp",
          title: "Staff Training & QC Briefing",
          caption: "Continuous quality training for export processing personnel.",
        },
        {
          src: "/assets/8. GALLERY/gallery-32.webp",
          title: "Weighing & Verification",
          caption: "Precision digital weighing per packaging batch.",
        },
        {
          src: "/assets/8. GALLERY/gallery-33.webp",
          title: "Inner Polybag Sealing",
          caption: "Moisture-proof inner liners protecting frozen seafood.",
        },
        {
          src: "/assets/8. GALLERY/gallery-34.webp",
          title: "Cold Storage Inventory",
          caption: "108 Tons cold storage warehouse operation in Makassar.",
        },
        {
          src: "/assets/8. GALLERY/gallery-35.webp",
          title: "Reefer Container Loading",
          caption: "Direct plug-in cold chain loading for international shipments.",
        },
        {
          src: "/assets/8. GALLERY/gallery-36.webp",
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

  // Touch swipe handling for main gallery grid slides (tablet & mobile)
  const slideTouchStartX = useRef<number | null>(null);
  const slideTouchEndX = useRef<number | null>(null);

  const handleSlideTouchStart = (e: React.TouchEvent) => {
    slideTouchStartX.current = e.targetTouches[0].clientX;
    slideTouchEndX.current = null;
  };

  const handleSlideTouchMove = (e: React.TouchEvent) => {
    slideTouchEndX.current = e.targetTouches[0].clientX;
  };

  const handleSlideTouchEnd = () => {
    if (slideTouchStartX.current === null || slideTouchEndX.current === null) return;
    const diff = slideTouchStartX.current - slideTouchEndX.current;
    const minSwipeDistance = 40;

    if (diff > minSwipeDistance) {
      // Swiped Left -> Go Next Slide
      handleNextSlide();
    } else if (diff < -minSwipeDistance) {
      // Swiped Right -> Go Previous Slide
      handlePrevSlide();
    }

    slideTouchStartX.current = null;
    slideTouchEndX.current = null;
  };

  // Touch swipe handling for lightbox fullscreen modal
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
      className="pt-16 pb-10 text-white relative overflow-clip"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        {/* Section Title */}
        <div data-reveal className="grid lg:grid-cols-12 gap-x-10 gap-y-4 items-end">
          <h2 className="lg:col-span-7 font-display text-5xl sm:text-6xl font-black text-white tracking-[-0.03em] leading-none">
            Gallery
          </h2>
          <p className="lg:col-span-5 text-slate-100 text-base sm:text-lg font-medium leading-relaxed">
            Explore our daily seafood processing, cold chain storage, and export logistics in Makassar.
          </p>
        </div>

        {/* Multi-Slide Carousel Container with Left/Right Navigation Arrows & Touch Gestures */}
        <div
          className="relative group/gallery touch-pan-y select-none"
          onTouchStart={handleSlideTouchStart}
          onTouchMove={handleSlideTouchMove}
          onTouchEnd={handleSlideTouchEnd}
        >
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
            <div key={activeSlide} className="grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-5">
              {slides[activeSlide].items.map((item, idx) => {
                const flatIndex = activeSlide * 6 + idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setLightboxIndex(flatIndex)}
                    style={{ "--i": idx } as React.CSSProperties}
                    className="tile-in relative h-44 sm:h-56 md:h-64 rounded-2xl overflow-hidden bg-[#072433] group/item cursor-pointer"
                  >
                    <Image
                      src={item.src}
                      alt={`${item.title} - CV MITRA ALAM Indonesian Frozen Seafood Processing Plant Makassar`}
                      title={`${item.title} - CV MITRA ALAM`}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-cover group-hover/item:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    {/* Neutral scrim so the caption reads on any photo */}
                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#041822]/90 to-transparent pointer-events-none" />
                    <p className="absolute left-3 right-3 bottom-3 sm:left-4 sm:bottom-4 text-left text-sm sm:text-base font-semibold text-white leading-snug translate-y-1 group-hover/item:translate-y-0 transition-transform duration-300">
                      {item.title}
                    </p>
                    <span className="absolute top-3 right-3 w-9 h-9 rounded-full bg-[#072433]/90 text-cyan-300 flex items-center justify-center opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                      <Maximize2 className="w-4 h-4" />
                    </span>
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
      {/* Portalled to body so it sits above the fixed navbar instead of inside this section's stacking context */}
      {currentLightboxItem && lightboxIndex !== null && createPortal(
        <div
          className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center bg-[#041822]/95 p-3 sm:p-6 select-none"
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label={currentLightboxItem.title}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="modal-panel relative max-w-5xl w-full max-h-[95vh] flex flex-col items-center justify-center space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with Title, Counter Badge, and Close Button */}
            <div className="w-full flex items-center justify-between text-white px-1">
              <div className="flex items-center gap-3">
                <h3 className="font-display text-lg sm:text-2xl font-black tracking-[-0.01em] text-white truncate max-w-[220px] sm:max-w-xl">
                  {currentLightboxItem.title}
                </h3>
                <span className="text-sm font-semibold text-slate-300 tabular-nums">
                  {lightboxIndex + 1} / {allGalleryItems.length}
                </span>
              </div>

              <button
                onClick={() => setLightboxIndex(null)}
                className="w-10 h-10 rounded-full bg-[#072433] text-cyan-300 flex items-center justify-center hover:bg-[#0b3548] hover:text-white active:scale-95 focus-visible:outline-2 focus-visible:outline-cyan-300 transition cursor-pointer shrink-0"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Lightbox Image Stage with Interactive Navigation Arrows */}
            <div className="relative w-full h-[60vh] sm:h-[70vh] rounded-2xl overflow-hidden bg-[#041822] flex items-center justify-center group/lightbox">
              <Image
                src={currentLightboxItem.src}
                alt={`${currentLightboxItem.title} - CV MITRA ALAM Makassar`}
                title={`${currentLightboxItem.title} - CV MITRA ALAM`}
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
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#062432]/90 text-cyan-300 flex items-center justify-center hover:bg-[#0a3548] hover:scale-110 active:scale-95 transition-all cursor-pointer"
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
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#062432]/90 text-cyan-300 flex items-center justify-center hover:bg-[#0a3548] hover:scale-110 active:scale-95 transition-all cursor-pointer"
                aria-label="Next Photo"
              >
                <ChevronRight className="w-6 h-6 stroke-[2.5]" />
              </button>
            </div>

            <p className="w-full px-1 text-base text-slate-200 leading-relaxed">
              {currentLightboxItem.caption}
            </p>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
