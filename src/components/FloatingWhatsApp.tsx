"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="Floating WhatsApp Inquiry" className="fixed bottom-6 right-6 z-40">
      <a
        href="https://wa.me/6282190931111?text=Hello%20CV.%20Mitra%20Alam%2C%20I%20would%20like%20to%20inquire%20about%20your%20frozen%20seafood%20export%20products."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-[#041822] px-4 py-3 rounded-full font-bold text-xs sm:text-sm shadow-2xl shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all cursor-pointer border border-white/40"
        aria-label="Chat with CV. Mitra Alam on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-current text-[#041822]" />
        <span className="hidden sm:inline font-extrabold">Inquire via WhatsApp</span>
      </a>
    </aside>
  );
}
