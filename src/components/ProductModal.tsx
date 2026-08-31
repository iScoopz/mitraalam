"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, CheckCircle, Package, Scale, Snowflake, Phone, ArrowRight } from "lucide-react";

export interface SeafoodProduct {
  id: string;
  name: string;
  scientificName: string;
  category: "Cephalopod" | "Demersal" | "Pelagic";
  image: string;
  imageClass?: string;
  isComingSoon?: boolean;
  processingTypes: string[];
  freezingMethod: string;
  sizeGrades: string;
  packingSpec: string;
  minOrder: string;
  description: string;
}

interface ProductModalProps {
  product: SeafoodProduct | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (product) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const waMessage = encodeURIComponent(
    `Hello CV. Mitra Alam, I am interested in placing an inquiry for ${product.name} (${product.scientificName}). Available specifications: ${product.sizeGrades}.`
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#041822]/85 backdrop-blur-md p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-[#072433] rounded-2xl border border-cyan-400/40 shadow-2xl overflow-hidden text-white my-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="relative h-60 sm:h-72 w-full bg-[#051c28] flex items-center justify-center overflow-hidden">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className={`object-cover ${product.imageClass || "scale-125 object-center"}`}
              priority
            />
          ) : (
            <div className="flex flex-col items-center justify-center p-6 text-center space-y-2">
              <span className="px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-amber-400 text-slate-900 shadow-lg">
                Coming Soon
              </span>
              <p className="text-slate-300 text-xs font-tech font-semibold">
                Photo currently unavailable &bull; Product details verified
              </p>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#072433] via-transparent to-black/40 pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#041822]/80 text-cyan-300 border border-cyan-400/50 flex items-center justify-center hover:bg-cyan-900/60 hover:text-white transition-colors cursor-pointer shadow-lg z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badges Container */}
          <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/90 text-[#041822] shadow-md">
              {product.category}
            </span>
            {product.isComingSoon && (
              <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-400 text-slate-900 shadow-md">
                Coming Soon
              </span>
            )}
          </div>

          {/* Bottom Title on Image */}
          <div className="absolute bottom-4 left-4 right-4">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-wide">
              {product.name}
            </h2>
            <p className="text-cyan-300 text-sm font-tech italic">
              ( {product.scientificName} )
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          <p className="text-sm text-slate-300 font-light leading-relaxed">
            {product.description}
          </p>

          {/* Technical Specifications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 bg-[#051c28] p-4 rounded-xl border border-cyan-500/20 text-xs">
            <div className="space-y-1">
              <span className="text-cyan-400 font-bold uppercase flex items-center gap-1.5 text-[11px] tracking-wider">
                <Package className="w-3.5 h-3.5" /> Processing Styles
              </span>
              <ul className="text-slate-200 space-y-0.5 pl-5 list-disc">
                {product.processingTypes.map((t, idx) => (
                  <li key={idx}>{t}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-1">
              <span className="text-cyan-400 font-bold uppercase flex items-center gap-1.5 text-[11px] tracking-wider">
                <Snowflake className="w-3.5 h-3.5" /> Freezing Technique
              </span>
              <p className="text-slate-200 font-tech font-medium">
                {product.freezingMethod}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-cyan-400 font-bold uppercase flex items-center gap-1.5 text-[11px] tracking-wider">
                <Scale className="w-3.5 h-3.5" /> Available Sizing
              </span>
              <p className="text-slate-200 font-tech">
                {product.sizeGrades}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-cyan-400 font-bold uppercase flex items-center gap-1.5 text-[11px] tracking-wider">
                <CheckCircle className="w-3.5 h-3.5 text-teal-400" /> Export Packaging
              </span>
              <p className="text-slate-200">
                {product.packingSpec}
              </p>
            </div>
          </div>

          {/* CTA Action */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <span className="text-xs text-slate-400">
              Min. Order: <strong className="text-cyan-300 font-tech">{product.minOrder}</strong>
            </span>

            <a
              href={`https://wa.me/6282190931111?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-[#041822] font-bold text-xs px-6 py-3 rounded-xl uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-transform active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>Inquire via WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
