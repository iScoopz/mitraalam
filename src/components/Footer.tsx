"use client";

import Image from "next/image";
import { ExternalLink, MessageCircle, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#051c27] text-white pt-12 relative overflow-hidden">
      {/* Top Wave Divider */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-[#3a8b94] to-transparent opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Column 1: Brand Info & Social Icons matching Screenshot 4 */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <div>
              <h3 className="font-display font-extrabold text-xl text-white tracking-wider uppercase">
                CV. MITRA ALAM
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed max-w-sm">
              We select raw material carefully, produce high quality frozen seafood, ready to deliver ocean freshness directly to Global Markets.
            </p>

            {/* Social Action Circles matching Screenshot 4 */}
            <div className="flex items-center space-x-3 pt-2">
              {/* WhatsApp */}
              <a
                href="https://wa.me/6282190931111?text=Hello%20CV.%20Mitra%20Alam%2C%20I%20would%20like%20to%20inquire%20about%20your%20frozen%20seafood%20export%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#072d3e] text-cyan-300 border border-cyan-400/40 flex items-center justify-center hover:bg-emerald-600 hover:text-white hover:border-emerald-400 transition-all shadow-md cursor-pointer"
                aria-label="Contact via WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#072d3e] text-cyan-300 border border-cyan-400/40 flex items-center justify-center hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-600 hover:to-purple-600 hover:text-white hover:border-pink-400 transition-all shadow-md cursor-pointer"
                aria-label="Follow on Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: MAPS */}
          <div className="lg:col-span-4 space-y-3 text-left">
            <h4 className="font-display font-black text-sm tracking-wider uppercase text-cyan-300">
              MAPS
            </h4>

            {/* Map Preview Card with Location Pin */}
            <a
              href="https://maps.google.com/?q=Jl.+Lantebung+No.+9,+Makassar,+Sulawesi+Selatan"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl overflow-hidden border-2 border-cyan-400/40 shadow-lg relative h-40 bg-[#0d3446] group cursor-pointer"
            >
              {/* Stylized Vector Map Background */}
              <div className="absolute inset-0 bg-[#cce3de] p-3 flex flex-col justify-between">
                <div className="space-y-1">
                  <div className="h-3 w-28 bg-[#a3c9c2] rounded-full" />
                  <div className="h-2 w-44 bg-[#b5d8d1] rounded-full" />
                  <div className="h-2 w-32 bg-[#b5d8d1] rounded-full" />
                </div>

                {/* Animated Pin */}
                <div className="flex items-center justify-center -mt-4">
                  <div className="flex flex-col items-center">
                    <div className="w-7 h-7 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg animate-bounce">
                      <MapPin className="w-4 h-4 fill-white" />
                    </div>
                    <span className="text-[9px] font-bold bg-[#041822] text-white px-2 py-0.5 rounded shadow mt-1">
                      CV. MITRA ALAM
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[10px] text-slate-700 font-bold">
                  <span>Makassar, Sulawesi Selatan</span>
                  <span className="flex items-center gap-1 text-cyan-800">
                    Open in Maps <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </a>
          </div>

          {/* Column 3: LOCATION & CONTACT */}
          <div className="lg:col-span-4 space-y-3 text-left">
            <h4 className="font-display font-black text-sm tracking-wider uppercase text-cyan-300">
              LOCATION & CONTACT
            </h4>

            {/* Frosted White/Silver Card matching Screenshot 4 */}
            <div className="metallic-card rounded-2xl p-5 text-[#072331] shadow-xl space-y-3.5 border border-white/80">
              <div className="flex items-start gap-3 text-xs leading-relaxed font-semibold">
                <div className="relative w-5 h-5 shrink-0 mt-0.5">
                  <Image
                    src="/assets/9. CONTACT US/contact us-10.png"
                    alt="Location"
                    fill
                    className="object-contain"
                  />
                </div>
                <span>
                  Jl. Lantebung No. 9, <br />
                  Kota Makassar, Sulawesi Selatan, 90244, Indonesia
                </span>
              </div>

              <div className="flex items-center gap-3 text-xs font-bold border-t border-slate-300/60 pt-2.5">
                <div className="relative w-5 h-5 shrink-0">
                  <Image
                    src="/assets/9. CONTACT US/contact us-11.png"
                    alt="Phone"
                    fill
                    className="object-contain"
                  />
                </div>
                <a
                  href="tel:+6282190931111"
                  className="hover:text-cyan-800 transition-colors font-tech text-sm"
                >
                  +62 82190931111
                </a>
              </div>

              <div className="flex items-center gap-3 text-xs font-bold border-t border-slate-300/60 pt-2.5">
                <div className="relative w-5 h-5 shrink-0">
                  <Image
                    src="/assets/9. CONTACT US/contact us-12.png"
                    alt="Email"
                    fill
                    className="object-contain"
                  />
                </div>
                <a
                  href="mailto:mitraalam9@gmail.com"
                  className="hover:text-cyan-800 transition-colors text-xs font-medium"
                >
                  mitraalam9@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar matching Screenshot 4 */}
      <div className="bg-[#031119] text-center py-4 border-t border-cyan-500/20">
        <p className="text-[11px] text-slate-400 font-medium tracking-wider">
          &copy;2026 by CV. Mitra Alam. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
