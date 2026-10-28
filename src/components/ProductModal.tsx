"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { X, CheckCircle, Package, Scale, Snowflake, Phone } from "lucide-react";

export interface SeafoodProduct {
  id: string;
  name: string;
  scientificName: string;
  category: "Cephalopod" | "Demersal" | "Pelagic";
  image: string;
  imageClass?: string;
  isComingSoon?: boolean;
  processingTypes?: string[];
  freezingMethod?: string;
  sizeGrades?: string;
  packingSpec?: string;
  description?: string;
}

interface ProductModalProps {
  product: SeafoodProduct | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (product) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      closeRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const waMessage = encodeURIComponent(
    `Hello CV Mitra Alam, I am interested in placing an inquiry for ${product.name} (${product.scientificName}).`
  );

  const validProcessingTypes = product.processingTypes?.filter((t) => t && t.trim() !== "") || [];
  const hasFreezingMethod = product.freezingMethod && product.freezingMethod.trim() !== "";
  const hasSizeGrades = product.sizeGrades && product.sizeGrades.trim() !== "";
  const hasPackingSpec = product.packingSpec && product.packingSpec.trim() !== "";
  const hasAnySpec = validProcessingTypes.length > 0 || hasFreezingMethod || hasSizeGrades || hasPackingSpec;

  return (
    <div
      className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center bg-[#041822]/90 p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
    >
      <div
        className="modal-panel relative max-w-2xl w-full bg-[#072433] rounded-3xl shadow-2xl overflow-hidden text-white my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div style={product.image ? { viewTransitionName: "product-photo" } : undefined} className="relative h-60 sm:h-72 w-full bg-[#051c28] flex items-center justify-center overflow-hidden">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className={`object-cover ${product.imageClass || "object-center"}`}
              priority
            />
          ) : (
            <div className="flex flex-col items-center justify-center p-6 text-center space-y-2">
              <span className="px-4 py-1.5 rounded-full text-sm font-bold bg-amber-400 text-slate-900">
                Coming Soon
              </span>
              <p className="text-slate-200 text-sm font-medium">
                Photo currently unavailable &bull; Product details verified
              </p>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#072433] via-transparent to-black/40 pointer-events-none" />

          {/* Close Button */}
          <button
            ref={closeRef}
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#041822]/85 text-cyan-300 flex items-center justify-center hover:bg-[#041822] hover:text-white focus-visible:outline-2 focus-visible:outline-cyan-300 transition-colors cursor-pointer z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badges Container */}
          <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
            <span className="px-3 py-1 rounded-full text-sm font-semibold bg-cyan-300 text-[#041822]">
              {product.category}
            </span>
            {product.isComingSoon && (
              <span className="px-3 py-1 rounded-full text-sm font-bold bg-amber-400 text-slate-900">
                Coming Soon
              </span>
            )}
          </div>

          {/* Bottom Title on Image */}
          <div className="absolute bottom-4 left-4 right-4">
            <h2 id="product-modal-title" className="font-display text-3xl sm:text-4xl font-black text-white tracking-[-0.02em]">
              {product.name}
            </h2>
            <p className="text-cyan-300 text-base italic">
              ( {product.scientificName} )
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          {product.description && product.description.trim() !== "" && (
            <p className="text-base text-slate-100 leading-relaxed">
              {product.description}
            </p>
          )}

          {/* Technical Specifications Grid */}
          {hasAnySpec && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 bg-[#051c28] p-5 rounded-2xl text-base">
              {validProcessingTypes.length > 0 && (
                <div className="space-y-1">
                  <span className="text-cyan-300 font-semibold flex items-center gap-2 text-sm">
                    <Package className="w-3.5 h-3.5" /> Processing Styles
                  </span>
                  <ul className="text-slate-100 space-y-0.5 pl-5 list-disc">
                    {validProcessingTypes.map((t, idx) => (
                      <li key={idx}>{t}</li>
                    ))}
                  </ul>
                </div>
              )}

              {hasFreezingMethod && (
                <div className="space-y-1">
                  <span className="text-cyan-300 font-semibold flex items-center gap-2 text-sm">
                    <Snowflake className="w-3.5 h-3.5" /> Freezing Technique
                  </span>
                  <p className="text-slate-100 font-medium">
                    {product.freezingMethod}
                  </p>
                </div>
              )}

              {hasSizeGrades && (
                <div className="space-y-1">
                  <span className="text-cyan-300 font-semibold flex items-center gap-2 text-sm">
                    <Scale className="w-3.5 h-3.5" /> Available Sizing
                  </span>
                  <p className="text-slate-100 font-tech">
                    {product.sizeGrades}
                  </p>
                </div>
              )}

              {hasPackingSpec && (
                <div className="space-y-1">
                  <span className="text-cyan-300 font-semibold flex items-center gap-2 text-sm">
                    <CheckCircle className="w-3.5 h-3.5 text-teal-400" /> Export Packaging
                  </span>
                  <p className="text-slate-100">
                    {product.packingSpec}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* CTA Action */}
          <div className="pt-2 flex justify-end">
            <a
              href={`https://wa.me/6282190931111?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-cyan-300 hover:bg-white text-[#041822] font-bold text-base px-6 py-3.5 rounded-full flex items-center justify-center gap-2 transition active:scale-95 cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>Inquire about {product.name}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
