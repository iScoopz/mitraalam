"use client";

import Image from "next/image";
import { ExternalLink, MessageCircle, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="text-white pt-14 relative lg:sticky lg:bottom-0 z-0 overflow-hidden">
      {/* Background Image: BACKGROUND-14.png rotated 180 degrees */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/assets/1. COVER/BACKGROUND-14.webp"
          alt="CV Mitra Alam Footer Ocean Background"
          fill
          className="object-cover object-center rotate-180 scale-105"
        />
        {/* Subtle dark overlay for perfect text contrast while keeping the rotated ocean pattern visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#041822]/40 via-[#041822]/70 to-[#041822]/95 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Column 1: Brand Info & Social Icons */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <div>
              <h3 className="font-display font-black text-2xl text-white uppercase">
                CV MITRA ALAM
              </h3>
            </div>

            <p className="text-base text-slate-100 font-normal leading-relaxed max-w-sm">
              We select raw material carefully, produce high quality frozen seafood, ready to deliver ocean freshness directly to Global Markets.
            </p>

            {/* Social Action Circles with WhatsApp, Instagram, and Direct Email */}
            <div className="flex items-center space-x-3 pt-2">
              {/* WhatsApp */}
              <a
                href="https://wa.me/6282190931111?text=Hello%20CV%20Mitra%20Alam%2C%20I%20would%20like%20to%20inquire%20about%20your%20frozen%20seafood%20export%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#072d3e]/90 text-cyan-300 flex items-center justify-center hover:bg-emerald-600 hover:text-white hover:border-emerald-400 transition-all cursor-pointer"
                aria-label="Contact via WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/cv.mitraalam?igsi=NHR0NDE3bGNxZjli"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#072d3e]/90 text-cyan-300 flex items-center justify-center hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-600 hover:to-purple-600 hover:text-white hover:border-pink-400 transition-all cursor-pointer"
                aria-label="Follow CV Mitra Alam on Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Email Direct Link */}
              <a
                href="mailto:mitraalam9@gmail.com"
                className="w-10 h-10 rounded-full bg-[#072d3e]/90 text-cyan-300 flex items-center justify-center hover:bg-cyan-600 hover:text-white hover:border-cyan-300 transition-all cursor-pointer"
                aria-label="Email CV Mitra Alam directly"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: REAL GOOGLE MAPS EMBED */}
          <div className="lg:col-span-4 space-y-3 text-left">
            <h4 className="font-display font-black text-lg text-cyan-300">
              Map
            </h4>

            {/* Real Interactive Google Maps Embed */}
            <div className="rounded-2xl overflow-hidden relative h-44 bg-[#0d3446] group">
              <iframe
                title="CV MITRA ALAM Real Factory Location Map"
                src="https://maps.google.com/maps?q=Jl.+Lantebung+No.+9,+Makassar,+Sulawesi+Selatan&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              <a
                href="https://maps.google.com/?q=Jl.+Lantebung+No.+9,+Makassar,+Sulawesi+Selatan"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 right-2 px-2.5 py-1 rounded-md bg-[#041822]/90 hover:bg-[#072d3e] text-cyan-300 text-sm font-bold flex items-center gap-1 transition-all cursor-pointer"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Column 3: Location & contact */}
          <div className="lg:col-span-4 space-y-3 text-left">
            <h4 className="font-display font-black text-lg text-cyan-300">
              Location & contact
            </h4>

            {/* Frosted White/Silver Card */}
            <div className="metallic-card rounded-2xl p-5 text-[#072331] space-y-3.5">
              <div className="flex items-start gap-3 text-sm leading-relaxed font-semibold">
                <div className="relative w-5 h-5 shrink-0 mt-0.5">
                  <Image
                    src="/assets/9. CONTACT US/contact us-10.webp"
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

              <div className="flex items-center gap-3 text-sm font-bold pt-1">
                <div className="relative w-5 h-5 shrink-0">
                  <Image
                    src="/assets/9. CONTACT US/contact us-11.webp"
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

              <div className="flex items-center gap-3 text-sm font-bold pt-1">
                <div className="relative w-5 h-5 shrink-0">
                  <Image
                    src="/assets/9. CONTACT US/contact us-12.webp"
                    alt="Email"
                    fill
                    className="object-contain"
                  />
                </div>
                <a
                  href="mailto:mitraalam9@gmail.com"
                  className="hover:text-cyan-800 transition-colors text-sm font-semibold"
                >
                  mitraalam9@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Closing wordmark at full width */}
      <p
        aria-hidden="true"
        className="relative z-10 px-4 sm:px-6 lg:px-8 font-display font-black text-[10.5vw] leading-[0.8] tracking-[-0.04em] text-white/10 whitespace-nowrap text-center select-none translate-y-[0.12em]"
      >
        CV MITRA ALAM
      </p>

      {/* Bottom Copyright Bar */}
      <div className="bg-[#031119]/90 text-center py-4 relative z-10">
        <p className="text-sm text-slate-300 font-medium">
          &copy; 2026 CV Mitra Alam. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
