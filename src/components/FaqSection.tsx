"use client";

import { useState } from "react";
import { Send, Mail, ChevronDown, HelpCircle } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What seafood products does CV Mitra Alam export from Indonesia?",
      answer:
        "CV Mitra Alam specializes in exporting premium Indonesian frozen seafood including Cephalopods (Octopus cyaneus, Cuttlefish Sepia esculenta, Loligo Squid), Demersal fish (Red Snapper, Grouper, Parrotfish, Leatherjacket, Rabbitfish), and Pelagic fish (Spanish Mackerel Tenggiri, Mackerel Scad). All products are processed under strict HACCP and GMP standards.",
    },
    {
      question: "Is CV Mitra Alam certified for seafood export to the USA, China, and Vietnam?",
      answer:
        "Yes, CV Mitra Alam is fully registered with the US FDA (Registration: 12621818410), China (CIDN18PP2310200112 / CR 999 - 27), Vietnam (VR. A/B-559-27), South Korea (No 25 - 114), and Taiwan (IT 036-27). We also hold official HACCP certifications for Cephalopods, Demersal, and Pelagic fish.",
    },
    {
      question: "What packaging specifications and options are available for export?",
      answer:
        "We accommodate flexible packaging specifications tailored to client requirements, including Individual Quick Freezing (IQF) in plain bags or rider bags, Individually Vacuum Packed (IVP), Individually Wrapped (IWP), Block Quick Frozen (BQF) in master cartons (10 kg / 20 lbs / 30 lbs), and custom private labelling upon agreement.",
    },
    {
      question: "Where is CV Mitra Alam located and what is your cold storage capacity?",
      answer:
        "Our processing plant and cold storage are strategically located at Jl. Lantebung No. 9, Makassar, South Sulawesi 90244, just minutes from the Port of Makassar. Our facilities feature 3 Air Blast Freezers (ABF) (~3.5 tons/cycle) and cold storage capacity of 108 Tons maintained at -20°C to -25°C.",
    },
    {
      question: "How can international buyers request a quote or product catalog?",
      answer:
        "You can contact our export sales division directly via WhatsApp at +6282190931111 / +628114619717, or email us at mitraalam9@gmail.com. We provide comprehensive FOB / CIF quotations and product specification sheets promptly.",
    },
  ];

  return (
    <section
      id="faq"
      className="pt-12 pb-16 text-white relative overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* FAQ Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            Frequently Asked Questions
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-white tracking-wide uppercase drop-shadow-md">
            FAQ &amp; Export <span className="text-cyan-400 drop-shadow-[0_2px_10px_rgba(34,211,238,0.3)]">Information</span>
          </h2>
          <p className="text-slate-200 text-xs sm:text-sm max-w-xl mx-auto font-normal">
            Pertanyaan umum seputar layanan ekspor seafood beku, perizinan, dan fasilitas CV Mitra Alam Makassar.
          </p>
        </div>

        {/* Visible Accordion matching FAQPage Schema */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-cyan-500/20 bg-[#051c27]/85 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-cyan-400/40 shadow-lg"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-sm sm:text-base text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center shrink-0 text-cyan-300 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-cyan-400 text-[#041822]" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 border-t border-cyan-500/10 text-slate-300 text-xs sm:text-sm leading-relaxed font-normal animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Inquiry Call to Action Box */}
        <div
          id="inquiry"
          className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#072433] via-[#083044] to-[#072433] border border-cyan-400/35 text-center space-y-5 shadow-2xl"
        >
          <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-black text-white leading-tight">
            Have a Specific Seafood Specification or Custom Inquiry?
          </h3>
          <p className="text-slate-200 text-xs sm:text-sm md:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            Our export sales team in Makassar is ready to assist you with
            technical product sheets, lab reports, and competitive price quotes.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3.5 pt-3">
            <a
              href="https://wa.me/6282190931111?text=Hello%20CV%20Mitra%20Alam%2C%20I%20have%20an%20export%20inquiry%20regarding%20frozen%20seafood."
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
