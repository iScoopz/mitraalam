"use client";

import { CheckCircle2, Calendar, Clock, Users, X, Sparkles, PhoneCall } from "lucide-react";

interface BookingModalProps {
  details: {
    date: string;
    time: string;
    guests: string;
    name: string;
  } | null;
  onClose: () => void;
}

export default function BookingModal({ details, onClose }: BookingModalProps) {
  if (!details) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#061527]/80 backdrop-blur-md animate-in fade-in duration-300">
      <div
        className="relative w-full max-w-md bg-[#061527] rounded-3xl border-2 border-[#D4AF37] text-white p-6 sm:p-8 shadow-2xl space-y-6 text-center animate-in zoom-in-95 duration-300 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Greek Pattern Background Accent */}
        <div className="absolute inset-0 greek-pattern-bg opacity-20 pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-[#D4AF37] transition-colors p-1"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Animated Success Seal */}
        <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] mx-auto flex items-center justify-center text-[#D4AF37] shadow-lg">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <div className="space-y-1">
          <span className="text-[10px] tracking-[0.25em] text-[#D4AF37] uppercase font-semibold">
            RESERVATION CONFIRMED
          </span>
          <h3 className="font-serif-luxury text-2xl font-bold text-white">
            Efharisto, {details.name}!
          </h3>
          <p className="text-xs text-gray-300 font-light">
            Your table consultation has been reserved at Elia Studio. We look forward to meeting you!
          </p>
        </div>

        {/* Summary Receipt Box */}
        <div className="bg-[#0A1D34] rounded-2xl p-4 border border-[#D4AF37]/30 text-left space-y-3 text-xs">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-gray-400 flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#D4AF37]" /> Date:
            </span>
            <span className="font-semibold text-[#E6C875]">{details.date}</span>
          </div>

          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-gray-400 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#D4AF37]" /> Time Slot:
            </span>
            <span className="font-semibold text-[#E6C875]">{details.time}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-400 flex items-center gap-1.5">
              <Users className="w-4 h-4 text-[#D4AF37]" /> Scope / Guests:
            </span>
            <span className="font-semibold text-[#E6C875]">{details.guests}</span>
          </div>
        </div>

        <div className="pt-2">
          <button
            onClick={onClose}
            className="gold-button-gradient text-[#061527] w-full py-3 rounded-xl font-bold text-xs tracking-wider uppercase shadow-lg cursor-pointer"
          >
            Done & Return to Site
          </button>
        </div>
      </div>
    </div>
  );
}
