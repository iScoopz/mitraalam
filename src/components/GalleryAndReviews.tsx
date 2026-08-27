"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Star, Quote, ArrowLeft, ArrowRight, Sparkles, X, Maximize2 } from "lucide-react";

export default function GalleryAndReviews() {
  const [activeReview, setActiveReview] = useState(0);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const galleryImages = [
    { src: "/images/story.png", alt: "Studio Interior", title: "Atmospheric Studio", category: "Interior Craft" },
    { src: "/images/hero.png", alt: "Santorini Aegean View", title: "Mediterranean Vista", category: "Santorini Vibe" },
    { src: "/images/moussaka.png", alt: "Moussaka Craft", title: "Moussaka System", category: "Culinary & Code" },
    { src: "/images/seafood.png", alt: "Seafood Orzo", title: "Seafood Platform", category: "E-Commerce Luxury" },
    { src: "/images/candle.png", alt: "Candlelight Ambience", title: "Private Dining", category: "Ambient Lighting" },
    { src: "/images/baklava.png", alt: "Baklava Suite", title: "Golden Desserts", category: "Interactive 3D" },
  ];

  const reviews = [
    {
      name: "Sophia Alexiou",
      role: "CEO, Aegean Luxury Group",
      quote: "Elia Studio transformed our brand identity into a digital masterwork. Their attention to detail and Mediterranean architectural feel is unparalleled.",
      rating: 5,
    },
    {
      name: "Marcus Vance",
      role: "VP of Product, Athena Financial",
      quote: "Working with Elia feels like dining at a 3-star Michelin restaurant—every deliverable is seasoned to perfection, delivered on time, and stunning.",
      rating: 5,
    },
    {
      name: "Elena Rostova",
      role: "Founder, Poseidon E-Commerce",
      quote: "The reservation widget and menu highlight design increased our conversion rates by 68%. Truly extraordinary software craftsmanship!",
      rating: 5,
    },
  ];

  const handlePrevImage = useCallback(() => {
    setActiveLightboxIndex((prev) =>
      prev === null ? null : prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  }, [galleryImages.length]);

  const handleNextImage = useCallback(() => {
    setActiveLightboxIndex((prev) =>
      prev === null ? null : prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  }, [galleryImages.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === "Escape") setActiveLightboxIndex(null);
      if (e.key === "ArrowLeft") handlePrevImage();
      if (e.key === "ArrowRight") handleNextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeLightboxIndex, handlePrevImage, handleNextImage]);

  return (
    <section id="gallery" className="py-20 bg-[#FAF7F0] border-t border-[#D4AF37]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-3 text-[#D4AF37] text-xs font-semibold tracking-[0.3em] uppercase">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>VISUAL ATMOSPHERE</span>
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#061527]">
            Gallery & Guest Experiences
          </h2>
          <p className="text-xs text-gray-500 font-light">
            Click any photo to view in high-resolution full screen lightbox.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setActiveLightboxIndex(idx)}
              className="relative h-48 sm:h-64 rounded-2xl overflow-hidden group shadow-md border border-[#D4AF37]/30 cursor-pointer bg-[#061527] transition-all hover:shadow-2xl hover:border-[#D4AF37]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Hover Overlay with Zoom Icon */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#061527]/90 via-[#061527]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5">
                <div className="flex justify-end">
                  <span className="w-9 h-9 rounded-full bg-[#061527]/80 text-[#D4AF37] border border-[#D4AF37]/50 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>

                <div>
                  <span className="text-[10px] tracking-widest text-[#D4AF37] font-semibold uppercase block">
                    {img.category}
                  </span>
                  <h4 className="font-serif-luxury text-base font-bold text-white">
                    {img.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Banner */}
        <div className="bg-[#061527] rounded-3xl p-8 sm:p-12 text-white border border-[#D4AF37]/40 relative overflow-hidden cream-card-shadow">
          <div className="absolute inset-0 greek-pattern-bg opacity-15 pointer-events-none" />

          <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
            <Quote className="w-12 h-12 text-[#D4AF37] mx-auto opacity-80" />

            {/* Stars */}
            <div className="flex justify-center space-x-1 text-[#D4AF37]">
              {[...Array(reviews[activeReview].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#D4AF37]" />
              ))}
            </div>

            {/* Quote Text */}
            <p className="font-serif-luxury text-lg sm:text-2xl font-light text-gray-200 italic leading-relaxed">
              "{reviews[activeReview].quote}"
            </p>

            {/* Author Info */}
            <div>
              <h4 className="font-serif-luxury text-base font-bold text-[#E6C875]">
                {reviews[activeReview].name}
              </h4>
              <span className="text-xs text-gray-400 font-light">
                {reviews[activeReview].role}
              </span>
            </div>

            {/* Carousel Controls */}
            <div className="flex justify-center items-center gap-4 pt-4">
              <button
                onClick={() =>
                  setActiveReview((prev) =>
                    prev === 0 ? reviews.length - 1 : prev - 1
                  )
                }
                className="p-2 rounded-full border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors"
                aria-label="Previous Review"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              <div className="flex space-x-2">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveReview(i)}
                    className={`h-2 rounded-full transition-all ${
                      activeReview === i ? "w-6 bg-[#D4AF37]" : "w-2 bg-white/20"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() =>
                  setActiveReview((prev) =>
                    prev === reviews.length - 1 ? 0 : prev + 1
                  )
                }
                className="p-2 rounded-full border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors"
                aria-label="Next Review"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FULL SCREEN LIGHTBOX MODAL */}
      {activeLightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#061527]/95 backdrop-blur-md p-4 sm:p-8 animate-in fade-in duration-300"
          onClick={() => setActiveLightboxIndex(null)}
        >
          {/* Lightbox Container */}
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center space-y-4 animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with Counter & Close */}
            <div className="w-full flex items-center justify-between text-white border-b border-[#D4AF37]/30 pb-3">
              <div>
                <span className="text-[10px] tracking-widest text-[#D4AF37] uppercase font-semibold block">
                  {galleryImages[activeLightboxIndex].category}
                </span>
                <h3 className="font-serif-luxury text-lg font-bold text-white">
                  {galleryImages[activeLightboxIndex].title}
                </h3>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-xs text-gray-400 font-light">
                  {activeLightboxIndex + 1} of {galleryImages.length}
                </span>
                <button
                  onClick={() => setActiveLightboxIndex(null)}
                  className="w-10 h-10 rounded-full bg-[#061527] text-[#D4AF37] border border-[#D4AF37]/50 flex items-center justify-center hover:bg-[#0A1D34] hover:scale-110 transition-all cursor-pointer shadow-lg"
                  aria-label="Close Lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Image Stage with Navigation Buttons */}
            <div className="relative w-full h-[60vh] sm:h-[70vh] rounded-2xl overflow-hidden border-2 border-[#D4AF37]/50 shadow-2xl bg-[#061527]">
              <Image
                src={galleryImages[activeLightboxIndex].src}
                alt={galleryImages[activeLightboxIndex].alt}
                fill
                className="object-contain p-2"
                priority
              />

              {/* Prev Button */}
              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#061527]/80 text-[#D4AF37] border border-[#D4AF37] flex items-center justify-center shadow-xl hover:bg-[#0A1D34] hover:scale-110 transition-all cursor-pointer"
                aria-label="Previous Image"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#061527]/80 text-[#D4AF37] border border-[#D4AF37] flex items-center justify-center shadow-xl hover:bg-[#0A1D34] hover:scale-110 transition-all cursor-pointer"
                aria-label="Next Image"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
