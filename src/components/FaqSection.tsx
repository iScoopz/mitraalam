"use client";

import { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  ShieldCheck,
  Package,
  MapPin,
  FileCheck,
  Send,
  Sparkles,
} from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
  icon: React.ElementType;
  tag: string;
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question:
        "What frozen seafood products does CV. Mitra Alam export from Indonesia?",
      answer:
        "CV. Mitra Alam specializes in exporting premium Indonesian frozen seafood including Cephalopods (Octopus cyaneus, Cuttlefish Sepia esculenta, Loligo Squid), Demersal fish (Red Snapper, Grouper, Parrotfish, Leatherjacket, Rabbitfish), and Pelagic fish (Spanish Mackerel Tenggiri, Mackerel Scad). All products are wild-caught from pristine Indonesian waters and processed under strict HACCP and GMP standards.",
      icon: Package,
      tag: "Products & Sourcing",
    },
    {
      question:
        "Is CV. Mitra Alam certified for seafood export to the USA, China, Vietnam, and EU?",
      answer:
        "Yes. CV. Mitra Alam is fully registered and approved for major international seafood markets: US FDA (Registration: 12621818410), China GACC (CIDN18PP2310200112 / CR 999 - 27), Vietnam (VR. A/B-559-27), South Korea (No 25 - 114), and Taiwan (IT 036-27). We also hold official HACCP certifications for Cephalopods, Demersal, and Pelagic fish issued by the Ministry of Marine Affairs and Fisheries Indonesia.",
      icon: ShieldCheck,
      tag: "Certifications & Compliance",
    },
    {
      question:
        "What packaging specifications and custom options are available for export?",
      answer:
        "We accommodate flexible packaging specifications tailored to client requirements, including Individual Quick Freezing (IQF) in plain bags or rider bags, Individually Vacuum Packed (IVP), Individually Wrapped (IWP), Block Quick Frozen (BQF) in master cartons (10 kg / 20 lbs / 30 lbs), and custom private labelling upon agreement.",
      icon: FileCheck,
      tag: "Packaging & Specs",
    },
    {
      question:
        "Where is CV. Mitra Alam's processing facility and cold storage located?",
      answer:
        "Our headquarters, seafood processing facility, and cold storage are strategically situated in the Makassar Industrial Estate (KIMA) at Jl. Kima 10 Kav E 1A, Makassar, South Sulawesi, Indonesia. This prime location is close to the Port of Makassar (Soekarno-Hatta), ensuring fast loading into reefer containers with zero cold-chain disruption.",
      icon: MapPin,
      tag: "Location & Logistics",
    },
    {
      question:
        "What freezing technologies and storage capacities do you operate?",
      answer:
        "We operate 3 Air Blast Freezers (ABF) capable of rapid freezing down to -35°C to preserve cellular texture and peak natural moisture. Our on-site cold storage warehouse maintains up to 108 Metric Tons at constant -20°C to -25°C temperatures, supported by 24/7 backup power and automated thermal monitoring.",
      icon: Sparkles,
      tag: "Cold Chain & Capacity",
    },
    {
      question:
        "How can international importers and buyers request a formal price quote?",
      answer:
        "Importers, wholesalers, and distributors can contact our export department directly via WhatsApp (+62 821-9093-1111 / +62 811-461-9717) or email (mitraalam017@gmail.com). We provide complete CIF/FOB quotations, current catch pricing, grading sheets, and laboratory inspection certificates promptly.",
      icon: Send,
      tag: "Inquiry & Ordering",
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="py-20 ocean-teal-section text-white relative overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Header Title */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#072433] border border-cyan-400/30 text-cyan-300 text-xs sm:text-sm font-bold uppercase tracking-widest shadow-lg">
            <HelpCircle className="w-4 h-4 text-cyan-400" />
            Frequently Asked Questions
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Export & Seafood Processing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-200 to-sky-300">
              Guide (FAQ)
            </span>
          </h2>

          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto font-normal">
            Everything you need to know about importing premium frozen seafood
            from Indonesia, our HACCP/FDA quality standards, and export logistics.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const Icon = faq.icon;
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#072433] border-cyan-400/60 shadow-[0_4px_24px_rgba(6,182,212,0.15)]"
                    : "bg-[#051c27]/80 border-cyan-500/20 hover:border-cyan-400/40 hover:bg-[#072433]/90 shadow-md"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5 sm:gap-4 flex-1">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? "bg-cyan-400/20 text-cyan-300 border border-cyan-400/40"
                          : "bg-[#041822] text-slate-400 border border-slate-700/50"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="space-y-1">
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-cyan-400 block">
                        {faq.tag}
                      </span>
                      <h3 className="font-display text-base sm:text-lg font-bold text-white leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                      isOpen
                        ? "bg-cyan-400 text-[#041822] border-cyan-300 rotate-180"
                        : "bg-[#041822] text-slate-300 border-slate-700/60 rotate-0"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>

                {/* Answer Content */}
                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-slate-200 text-sm sm:text-base leading-relaxed border-t border-cyan-400/10 space-y-4 animate-in fade-in duration-300">
                    <p className="font-normal text-slate-100">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Contact Box inside FAQ */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#072433] via-[#083044] to-[#072433] border border-cyan-400/30 text-center space-y-4 shadow-xl">
          <h4 className="font-display text-lg sm:text-xl font-black text-white">
            Have a Specific Seafood Specification or Custom Inquiry?
          </h4>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
            Our export sales team in Makassar is ready to assist you with
            technical product sheets, lab reports, and competitive price quotes.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a
              href="https://wa.me/6282190931111?text=Hello%20CV.%20Mitra%20Alam%2C%20I%20have%20an%20export%20inquiry%20regarding%20frozen%20seafood."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white text-xs sm:text-sm font-bold shadow-lg shadow-emerald-500/20 hover:scale-105 transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              Chat on WhatsApp (+62 821-9093-1111)
            </a>
            <a
              href="mailto:mitraalam017@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#041822] hover:bg-[#072d3e] border border-cyan-400/40 text-cyan-300 text-xs sm:text-sm font-bold shadow-md hover:scale-105 transition-all cursor-pointer"
            >
              Email: mitraalam017@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
