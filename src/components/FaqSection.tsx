"use client";

import { useState } from "react";
import { Send, Mail, ChevronDown } from "lucide-react";

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
      className="pt-12 pb-16 text-white relative overflow-clip"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* FAQ Header */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-8">
          <div data-reveal className="space-y-4">
            <h2 className="font-display text-5xl sm:text-6xl font-black text-white tracking-[-0.03em] leading-none">
              Export FAQ
            </h2>
            <p className="text-slate-100 text-base sm:text-lg font-normal leading-relaxed">
              Common questions about our frozen seafood exports, licensing and facilities in Makassar.
            </p>
          </div>

          {/* Inquiry Call to Action Box */}
          <div
            id="inquiry"
            data-reveal
            className="p-7 sm:p-8 rounded-3xl bg-[#072433] space-y-4"
          >
            <h3 className="font-display text-2xl sm:text-3xl font-black text-white tracking-[-0.02em] leading-tight">
              Need a custom specification?
            </h3>
            <p className="text-slate-100 text-base font-normal leading-relaxed">
              Our export sales team in Makassar is ready to assist you with
              technical product sheets, lab reports, and competitive price quotes.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://wa.me/6282190931111?text=Hello%20CV%20Mitra%20Alam%2C%20I%20have%20an%20export%20inquiry%20regarding%20frozen%20seafood."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-[#041822] text-sm sm:text-base font-bold hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Chat on WhatsApp (+62 821-9093-1111)</span>
              </a>
              <a
                href="mailto:mitraalam9@gmail.com"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#041822] hover:bg-[#0b3548] text-cyan-300 text-sm sm:text-base font-bold hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Email: mitraalam9@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Visible Accordion matching FAQPage Schema */}
        <div className="lg:col-span-7 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-[#051c27]/85 overflow-hidden transition-colors duration-300 hover:bg-[#062636]"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-base sm:text-lg text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-cyan-500/15 flex items-center justify-center shrink-0 text-cyan-300 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-cyan-400 text-[#041822]" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                <div className={`acc__panel${isOpen ? " is-open" : ""}`}>
                  <div>
                    <p className="px-5 sm:px-6 pb-5 pt-1 text-slate-100 text-base leading-relaxed max-w-[70ch] font-normal">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
