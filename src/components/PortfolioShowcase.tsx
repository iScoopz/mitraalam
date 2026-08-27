"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ExternalLink, Sparkles, Tag, Eye } from "lucide-react";

export interface ProjectItem {
  id: string;
  title: string;
  greekName: string;
  category: string;
  image: string;
  description: string;
  priceTag: string;
  metrics: string;
  technologies: string[];
  fullStory: string;
  client: string;
}

interface PortfolioShowcaseProps {
  onSelectProject: (project: ProjectItem) => void;
}

export default function PortfolioShowcase({ onSelectProject }: PortfolioShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const scrollRef = useRef<HTMLDivElement>(null);

  const projects: ProjectItem[] = [
    {
      id: "moussaka",
      title: "MOUSSAKA ARCHITECTURE",
      greekName: "Μουσακάς System",
      category: "WEB APP",
      image: "/images/moussaka.png",
      description: "Multi-layered enterprise application architecture with eggplant-smooth state management & rich béchamel UI.",
      priceTag: "$18.95",
      metrics: "99.9% Uptime • 4.9★",
      technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "GraphQL"],
      fullStory: "Designed for enterprise scale, Moussaka Architecture blends layered microservices with a golden top-layer design system. Optimized for fast rendering and fluid transitions.",
      client: "Olympus Tech Corp",
    },
    {
      id: "souvlaki",
      title: "SOUVLAKI DESIGN SYSTEM",
      greekName: "Σουβλάκι UI Kit",
      category: "DESIGN SYSTEM",
      image: "/images/souvlaki.png",
      description: "Grilled to perfection design tokens, reusable UI components served with hot tzatziki theme provider.",
      priceTag: "$16.95",
      metrics: "+140% Dev Velocity",
      technologies: ["Figma", "React", "Radix UI", "Storybook"],
      fullStory: "A modular, scalable component ecosystem crafted with precision. Includes dark/light mode variants, accessible form inputs, and custom Mediterranean icon set.",
      client: "Aegean Creative Lab",
    },
    {
      id: "salad",
      title: "GREEK SALAD DASHBOARD",
      greekName: "Ελληνική Σαλάτα",
      category: "ANALYTICS",
      image: "/images/salad.png",
      description: "Crisp veggies, Kalamata olive analytics, block of feta widgets & extra virgin olive oil animations.",
      priceTag: "$13.95",
      metrics: "2.4M Daily Active Users",
      technologies: ["React", "Recharts", "Framer Motion", "Zustand"],
      fullStory: "A fresh data analytics suite rendering real-time metrics with organic color schemes and customizable grid widgets. Zero clutter, pure insights.",
      client: "Athena Financial",
    },
    {
      id: "seafood",
      title: "SEAFOOD ORZO PLATFORM",
      greekName: "Κριθαρότο Γαρίδας",
      category: "E-COMMERCE",
      image: "/images/seafood.png",
      description: "Orzo pasta with succulent shrimp, mussels, fresh herbs & real-time checkout garlic sauce.",
      priceTag: "$22.95",
      metrics: "$3.2M GMV Processed",
      technologies: ["Next.js", "Stripe API", "PostgreSQL", "Prisma"],
      fullStory: "A high-conversion luxury e-commerce engine handling thousands of concurrent transactions with instant cart sync and automated inventory tracking.",
      client: "Poseidon Luxury Goods",
    },
    {
      id: "baklava",
      title: "BAKLAVA SUITE",
      greekName: "Μπακλαβάς Experience",
      category: "BRANDING",
      image: "/images/baklava.png",
      description: "Flaky phyllo, walnuts, organic honey syrup animations & a hint of golden cinnamon brand identity.",
      priceTag: "$8.95",
      metrics: "Award Winner 2025",
      technologies: ["Three.js", "WebGL", "GSAP", "Tailwind CSS"],
      fullStory: "An immersive 3D brand presentation featuring interactive sweet micro-interactions, custom soundscapes, and fluid smooth scroll transitions.",
      client: "Hermes Luxury Fragrance",
    },
  ];

  const categories = ["ALL", "WEB APP", "DESIGN SYSTEM", "ANALYTICS", "E-COMMERCE", "BRANDING"];

  const filteredProjects =
    activeCategory === "ALL"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -340, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 340, behavior: "smooth" });
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-[#FAF7F0] border-t border-[#D4AF37]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center justify-center gap-3 text-[#D4AF37] text-xs font-semibold tracking-[0.3em] uppercase">
            <ArrowRight className="w-4 h-4 text-[#D4AF37] rotate-180" />
            <span>OUR MENU HIGHLIGHTS</span>
            <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#061527]">
            Featured Portfolio & Craft
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm max-w-lg mx-auto font-light">
            Select a highlighted project to inspect tech specifications, metrics, and live story breakdown.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-wider transition-all uppercase cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#061527] text-[#E6C875] border border-[#D4AF37] shadow-md"
                    : "bg-[#FDFBF7] text-gray-600 hover:text-[#061527] border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel Container with Arrow Controls */}
        <div className="relative group">
          {/* Scroll Left Button */}
          <button
            onClick={scrollLeft}
            className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#061527] text-[#D4AF37] border border-[#D4AF37]/50 flex items-center justify-center shadow-xl hover:bg-[#0A1D34] hover:scale-110 transition-all cursor-pointer"
            aria-label="Previous Projects"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          {/* Scroll Right Button */}
          <button
            onClick={scrollRight}
            className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#061527] text-[#D4AF37] border border-[#D4AF37]/50 flex items-center justify-center shadow-xl hover:bg-[#0A1D34] hover:scale-110 transition-all cursor-pointer"
            aria-label="Next Projects"
          >
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Cards Track */}
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto scrollbar-none py-4 px-2 scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="w-[280px] sm:w-[320px] shrink-0 bg-[#FDFBF7] rounded-2xl border border-[#D4AF37]/30 cream-card-shadow overflow-hidden group/card hover:translate-y-[-6px] transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Card Image Container */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover/card:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#061527]/85 backdrop-blur-md text-[#E6C875] text-[10px] font-semibold tracking-widest px-3 py-1 rounded-full border border-[#D4AF37]/40 uppercase">
                      {project.category}
                    </div>

                    <div className="absolute inset-0 bg-[#061527]/40 opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <span className="bg-[#D4AF37] text-[#061527] text-xs font-bold px-3 py-1.5 rounded-sm flex items-center gap-1.5 uppercase shadow-md">
                        <Eye className="w-4 h-4" /> View Details
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-serif-luxury text-sm font-bold text-[#061527] tracking-wider group-hover/card:text-[#D4AF37] transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-[11px] text-gray-500 font-script-luxury font-bold block text-[#C5A059]">
                          {project.greekName}
                        </span>
                      </div>
                      <span className="font-serif-luxury text-base font-bold text-[#D4AF37] shrink-0">
                        {project.priceTag}
                      </span>
                    </div>

                    <p className="text-xs text-gray-600 font-light line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer Tag & Button */}
                <div className="p-5 pt-0 flex items-center justify-between border-t border-[#D4AF37]/10 mt-3 pt-3 text-[11px] text-gray-500">
                  <span className="text-[#C5A059] font-medium flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    {project.metrics}
                  </span>
                  <span className="text-[#061527] font-semibold underline group-hover/card:text-[#D4AF37]">
                    Details &rarr;
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
