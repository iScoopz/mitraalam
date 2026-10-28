"use client";

import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navRef = useRef<HTMLElement>(null);
  const [indicator, setIndicator] = useState({ x: 0, w: 0 });

  // Slide the underline to the active link; re-measure when fonts or the window change link widths
  useLayoutEffect(() => {
    const measure = () => {
      const link = navRef.current?.querySelector<HTMLElement>(`[data-id="${activeSection}"]`);
      if (link) setIndicator({ x: link.offsetLeft + 12, w: link.offsetWidth - 24 });
    };
    measure();
    document.fonts?.ready.then(measure);
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [activeSection]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // If scrolled to the bottom of the page, highlight Contact Us
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 150;
      if (isAtBottom) {
        setActiveSection("contact");
        return;
      }

      // Section spy based on viewport position
      const sections = ["home", "about", "certification", "product", "gallery", "contact"];
      let currentSection = "home";

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250) {
            currentSection = section;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileMenuOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About us", href: "#about", id: "about" },
    { name: "Certification", href: "#certification", id: "certification" },
    { name: "Products", href: "#product", id: "product" },
    { name: "Gallery", href: "#gallery", id: "gallery" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#041822] py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="scroll-progress" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Name */}
        <a href="#home" className="flex items-center group">
          <span className="font-display font-black text-xl sm:text-2xl tracking-tight text-cyan-300 group-hover:text-white transition-colors uppercase">
            CV MITRA ALAM
          </span>
        </a>

        {/* Desktop Nav Items */}
        <nav ref={navRef} className="relative hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                data-id={link.id}
                aria-current={isActive ? "true" : undefined}
                onClick={() => setActiveSection(link.id)}
                className={`px-3 py-2 rounded-full text-[15px] font-semibold transition-colors duration-200 ${
                  isActive
                    ? "text-cyan-300"
                    : "text-slate-200 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <span
            aria-hidden="true"
            className="nav-indicator"
            style={{ width: indicator.w, transform: `translateX(${indicator.x}px)` }}
          />
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-cyan-400 p-2 rounded-full bg-[#072433] hover:bg-[#0b3548] transition-colors cursor-pointer"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile full-screen menu: large links for the thumb, the inquiry at the foot */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="modal-backdrop md:hidden fixed inset-0 -z-10 bg-[#041822] pt-24 pb-10 px-6 flex flex-col justify-between overflow-y-auto">
          <nav className="flex flex-col" aria-label="Mobile">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{ "--d": `${60 + i * 50}ms` } as React.CSSProperties}
                data-load
                className={`font-display text-4xl font-black tracking-[-0.02em] py-2.5 transition-colors ${
                  activeSection === link.id ? "text-cyan-300" : "text-white hover:text-cyan-300"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <a
            href="https://wa.me/6282190931111?text=Hello%20CV%20Mitra%20Alam%2C%20I%20have%20an%20export%20inquiry%20regarding%20frozen%20seafood."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex justify-center px-6 py-4 rounded-full bg-cyan-300 text-[#041822] text-base font-bold"
          >
            Request a quote
          </a>
        </div>
      )}
    </header>
  );
}
