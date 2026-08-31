"use client";

import { useState, useEffect } from "react";
import { Menu, X, Globe, Phone, Mail } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Section spy
      const sections = ["home", "about", "certification", "product", "gallery", "faq", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "#home", id: "home" },
    { name: "ABOUT US", href: "#about", id: "about" },
    { name: "CERTIFICATION", href: "#certification", id: "certification" },
    { name: "PRODUCT", href: "#product", id: "product" },
    { name: "GALLERY", href: "#gallery", id: "gallery" },
    { name: "FAQ", href: "#faq", id: "faq" },
    { name: "CONTACT US", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-[#041822]/95 backdrop-blur-md py-3 shadow-2xl"
        : "bg-gradient-to-b from-[#041822] via-[#041822]/80 to-transparent py-4 sm:py-5"
        }`}
    >
      {/* Stainless Steel Metallic Gradient Bottom Line on Scroll */}
      {scrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] stainless-steel-line pointer-events-none shadow-[0_1px_4px_rgba(255,255,255,0.3)]" />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Name */}
        <a href="#home" className="flex items-center group">
          <div>
            <span className="font-display font-extrabold text-lg sm:text-xl tracking-wider text-cyan-400 group-hover:text-cyan-300 transition-colors uppercase drop-shadow-md">
              CV. MITRA ALAM
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-sm text-xs font-bold tracking-wider transition-all duration-200 uppercase ${isActive
                  ? "bg-cyan-500/20 text-cyan-300 border-b-2 border-cyan-400 shadow-sm"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Header Right Export Inquire Button */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/6282190931111?text=Hello%20CV.%20Mitra%20Alam%2C%20I%20would%20like%20to%20inquire%20about%20your%20frozen%20seafood%20products."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-[#041822] font-bold text-xs px-4 py-2 rounded-full tracking-wider uppercase shadow-lg shadow-cyan-500/20 active:scale-95 transition-all flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Export Inquiry</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-cyan-400 p-2 rounded-lg bg-[#072433]/80 border border-cyan-500/30 hover:bg-cyan-900/30 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Slide-over Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#041822] border-b border-cyan-500/30 px-6 pt-4 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-300 shadow-2xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-semibold tracking-wider py-2.5 px-3 rounded-md transition-colors ${activeSection === link.id
                  ? "bg-cyan-500/20 text-cyan-300 border-l-4 border-cyan-400"
                  : "text-gray-200 hover:text-cyan-400 hover:bg-white/5"
                  }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/6282190931111?text=Hello%20CV.%20Mitra%20Alam%2C%20I%20would%20like%20to%20inquire%20about%20your%20frozen%20seafood%20products."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-[#041822] font-bold text-xs py-3 rounded-lg text-center uppercase tracking-wider shadow-md flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Contact via WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
