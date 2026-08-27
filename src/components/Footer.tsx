"use client";

import { MapPin, Phone, Mail, Globe, Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#FAF7F0] border-t border-[#D4AF37]/30 text-gray-700 pt-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Social Column */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#D4AF37] bg-[#061527] flex items-center justify-center">
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
                <span className="font-serif-luxury text-2xl font-bold tracking-widest text-[#061527]">
                  ELIA
                </span>
                <span className="block text-[9px] tracking-[0.25em] text-[#D4AF37] font-semibold uppercase -mt-1">
                  Greek Kitchen & Studio
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-600 font-light leading-relaxed max-w-sm">
              Bringing authentic Mediterranean artistry, warm digital hospitality, and time-honored engineering principles to every project we touch.
            </p>

            {/* Social Media Icons (Custom Inline SVGs matching reference layout) */}
            <div className="flex items-center space-x-3 pt-2">
              {/* Facebook */}
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-[#061527] text-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#061527] transition-colors shadow-sm"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-[#061527] text-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#061527] transition-colors shadow-sm"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-[#061527] text-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#061527] transition-colors shadow-sm"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Website/Globe */}
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-[#061527] text-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#061527] transition-colors shadow-sm"
                aria-label="Global Portfolio"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif-luxury text-xs font-bold tracking-widest text-[#061527] uppercase">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-xs font-light">
              {["Home", "About Us", "Portfolio", "Reservations", "Gallery", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "")}`}
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif-luxury text-xs font-bold tracking-widest text-[#061527] uppercase">
              HOURS & AVAILABILITY
            </h4>
            <ul className="space-y-2 text-xs font-light text-gray-600">
              <li className="flex justify-between border-b border-gray-200 pb-1">
                <span>Mon – Thu</span>
                <span className="font-medium text-[#061527]">11:00 AM – 10:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-gray-200 pb-1">
                <span>Fri – Sat</span>
                <span className="font-medium text-[#061527]">11:00 AM – 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="font-medium text-[#061527]">11:00 AM – 9:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Location & Contact Column */}
          <div className="lg:col-span-3 space-y-3 relative">
            <h4 className="font-serif-luxury text-xs font-bold tracking-widest text-[#061527] uppercase">
              LOCATION & CONTACT
            </h4>
            <ul className="space-y-2.5 text-xs font-light text-gray-600">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>123 Mediterranean Way<br />San Diego, CA 92101</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href="tel:6195551234" className="hover:text-[#D4AF37] transition-colors">
                  (619) 555-1234
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href="mailto:info@eliagreekkitchen.com" className="hover:text-[#D4AF37] transition-colors">
                  info@eliagreekkitchen.com
                </a>
              </li>
            </ul>

            {/* Subtle Olive Vector Art Accent */}
            <div className="absolute right-0 bottom-0 text-[#D4AF37] opacity-25 pointer-events-none hidden sm:block">
              <Leaf className="w-16 h-16 rotate-45" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Greek Key Motif Bar */}
      <div className="bg-[#061527] text-white py-4 relative border-t-2 border-[#D4AF37]">
        {/* Greek Meander Decorative Top Line */}
        <div className="absolute top-0 left-0 right-0 h-1 greek-key-border" />

        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[11px] text-gray-400 font-light tracking-wider">
            &copy; {new Date().getFullYear()} Elia Greek Kitchen & Studio. All Rights Reserved. Crafted with passion & Next.js.
          </p>
        </div>
      </div>
    </footer>
  );
}
