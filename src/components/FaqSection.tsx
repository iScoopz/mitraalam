"use client";

import { Send, Mail } from "lucide-react";

export default function FaqSection() {
  return (
    <section
      id="inquiry"
      className="pt-4 pb-16 text-white relative overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Inquiry Call to Action Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#072433] via-[#083044] to-[#072433] border border-cyan-400/35 text-center space-y-5 shadow-2xl">
          <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-black text-white leading-tight">
            Have a Specific Seafood Specification or Custom Inquiry?
          </h3>
          <p className="text-slate-200 text-xs sm:text-sm md:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            Our export sales team in Makassar is ready to assist you with
            technical product sheets, lab reports, and competitive price quotes.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3.5 pt-3">
            <a
              href="https://wa.me/6282190931111?text=Hello%20CV.%20Mitra%20Alam%2C%20I%20have%20an%20export%20inquiry%20regarding%20frozen%20seafood."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white text-xs sm:text-sm font-bold shadow-lg shadow-emerald-500/25 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Chat on WhatsApp (+62 821-9093-1111)</span>
            </a>
            <a
              href="mailto:mitraalam9@gmail.com"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#041822] hover:bg-[#072d3e] border border-cyan-400/40 text-cyan-300 text-xs sm:text-sm font-bold shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Email: mitraalam9@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
