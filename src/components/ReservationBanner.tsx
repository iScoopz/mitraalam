"use client";

import { useState } from "react";
import Image from "next/image";
import { Calendar, Clock, Users, Sparkles, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

interface ReservationBannerProps {
  onBookingSuccess: (bookingDetails: {
    date: string;
    time: string;
    guests: string;
    name: string;
  }) => void;
}

export default function ReservationBanner({ onBookingSuccess }: ReservationBannerProps) {
  const [date, setDate] = useState("2026-09-01");
  const [time, setTime] = useState("7:00 PM");
  const [guests, setGuests] = useState("2 People / Scope");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Fire confetti for celebration
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#D4AF37", "#E6C875", "#061527", "#FFFFFF"],
      });
    } catch (err) {
      console.log("Confetti triggered");
    }

    setTimeout(() => {
      setIsSubmitting(false);
      onBookingSuccess({
        date,
        time,
        guests,
        name: name || "Honored Guest",
      });
    }, 600);
  };

  return (
    <section id="reservations" className="py-16 bg-[#FAF7F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#061527] rounded-3xl p-6 sm:p-10 border-2 border-[#D4AF37]/40 navy-card-shadow text-white relative overflow-hidden">
          {/* Subtle Greek Pattern Overlay */}
          <div className="absolute inset-0 greek-pattern-bg opacity-15 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Image Column */}
            <div className="lg:col-span-4 relative">
              <div className="relative h-44 sm:h-52 lg:h-60 rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-lg">
                <Image
                  src="/images/candle.png"
                  alt="Cozy Ambient Candlelight Setting"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061527] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <span className="font-script-luxury text-2xl text-[#E6C875]">
                    Atmospheric Excellence
                  </span>
                </div>
              </div>
            </div>

            {/* Right Form & Content Column */}
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-2">
                <span className="text-[#D4AF37] text-[11px] font-semibold tracking-[0.3em] uppercase block">
                  JOIN US
                </span>
                <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white">
                  Reserve Your Table <span className="text-[#E6C875] font-normal font-playfair">& Consultation</span>
                </h2>
                <p className="text-gray-300 text-xs sm:text-sm font-light">
                  We can't wait to welcome you to Elia Studio. Book your project slot or private consultation.
                </p>
              </div>

              {/* Form Input Bar matching reference design */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 bg-[#0A1D34]/80 p-3 rounded-2xl border border-[#D4AF37]/30">
                  {/* Date Input */}
                  <div className="space-y-1 bg-[#061527] p-2.5 rounded-xl border border-white/10">
                    <label className="text-[10px] tracking-widest text-[#D4AF37] font-semibold uppercase flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" /> Date
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="bg-transparent text-white text-xs w-full focus:outline-none cursor-pointer"
                      required
                    />
                  </div>

                  {/* Time Input */}
                  <div className="space-y-1 bg-[#061527] p-2.5 rounded-xl border border-white/10">
                    <label className="text-[10px] tracking-widest text-[#D4AF37] font-semibold uppercase flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" /> Time
                    </label>
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="bg-[#061527] text-white text-xs w-full focus:outline-none cursor-pointer"
                    >
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="5:00 PM">5:00 PM</option>
                      <option value="7:00 PM">7:00 PM</option>
                      <option value="9:00 PM">9:00 PM</option>
                    </select>
                  </div>

                  {/* Guests / Scope Selector */}
                  <div className="space-y-1 bg-[#061527] p-2.5 rounded-xl border border-white/10">
                    <label className="text-[10px] tracking-widest text-[#D4AF37] font-semibold uppercase flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5" /> Scope / Guests
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="bg-[#061527] text-white text-xs w-full focus:outline-none cursor-pointer"
                    >
                      <option value="2 People">2 People (Standard Table)</option>
                      <option value="4 People">4 People (Family & Team)</option>
                      <option value="Design System Project">Design System Project</option>
                      <option value="Full Web Application">Full Web Application</option>
                      <option value="Consultation & Strategy">Consultation & Strategy</option>
                    </select>
                  </div>

                  {/* Action Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="gold-button-gradient text-[#061527] h-full min-h-[44px] rounded-xl font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg cursor-pointer hover:scale-102 active:scale-95 transition-all"
                  >
                    {isSubmitting ? (
                      <span className="animate-spin text-[#061527]">⏳</span>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 text-[#061527]" />
                        <span>Find A Table</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
