"use client";

import { useState, useEffect } from "react";
import { Calendar, Menu, X, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "#hero" },
    { name: "ABOUT US", href: "#about" },
    { name: "PORTFOLIO", href: "#portfolio" },
    { name: "RESERVATIONS", href: "#reservations" },
    { name: "GALLERY", href: "#gallery" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#061527]/95 backdrop-blur-md border-b border-[#D4AF37]/20 py-3 shadow-xl"
          : "bg-gradient-to-b from-[#061527]/90 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full border border-[#D4AF37] flex items-center justify-center bg-[#061527] group-hover:scale-105 transition-transform duration-300">
            <svg
              className="w-6 h-6 text-[#D4AF37]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M12 2C8 2 4 6 4 12c0 4 3 8 8 10 5-2 8-6 8-10 0-6-4-10-8-10z" />
              <path d="M12 2v20" />
              <path d="M12 7c-3 0-5 2-5 5" />
              <path d="M12 12c3 0 5 2 5 5" />
            </svg>
          </div>
          <div>
            <span className="font-serif-luxury text-2xl font-bold tracking-widest text-white group-hover:text-[#E6C875] transition-colors">
              ELIA
            </span>
            <span className="block text-[9px] tracking-[0.25em] text-[#D4AF37] font-semibold uppercase -mt-1">
              Studio & Portfolio
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-semibold tracking-widest text-gray-300 hover:text-[#D4AF37] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Header Right Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={onOpenBooking}
            className="gold-button-gradient text-[#061527] px-5 py-2.5 rounded-sm font-semibold text-xs tracking-wider flex items-center gap-2 uppercase shadow-lg shadow-[#D4AF37]/10 cursor-pointer active:scale-95 transition-all"
          >
            <Calendar className="w-4 h-4 text-[#061527]" />
            <span>Book Consultation</span>
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#D4AF37] p-2 rounded-md hover:bg-white/10 transition-colors"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Slide-over Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#061527] border-b border-[#D4AF37]/30 px-6 pt-4 pb-6 space-y-4 animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium tracking-widest text-gray-200 hover:text-[#D4AF37] py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="gold-button-gradient text-[#061527] w-full py-3 rounded-sm font-semibold text-xs tracking-wider flex items-center justify-center gap-2 uppercase mt-2 shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Consultation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
