"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturePillars from "@/components/FeaturePillars";
import OurStory from "@/components/OurStory";
import PortfolioShowcase, { ProjectItem } from "@/components/PortfolioShowcase";
import ReservationBanner from "@/components/ReservationBanner";
import GalleryAndReviews from "@/components/GalleryAndReviews";
import Footer from "@/components/Footer";
import ProjectModal from "@/components/ProjectModal";
import BookingModal from "@/components/BookingModal";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [bookingDetails, setBookingDetails] = useState<{
    date: string;
    time: string;
    guests: string;
    name: string;
  } | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenGeneralBooking = () => {
    // Scroll to reservations section
    const el = document.getElementById("reservations");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#FAF7F0]">
      {/* Fixed Navbar */}
      <Navbar onOpenBooking={handleOpenGeneralBooking} />

      {/* Main Sections */}
      <Hero onOpenBooking={handleOpenGeneralBooking} />
      <FeaturePillars />
      <OurStory />
      <PortfolioShowcase onSelectProject={(p) => setSelectedProject(p)} />
      <ReservationBanner
        onBookingSuccess={(details) => setBookingDetails(details)}
      />
      <GalleryAndReviews />

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onBookCall={handleOpenGeneralBooking}
      />

      <BookingModal
        details={bookingDetails}
        onClose={() => setBookingDetails(null)}
      />
    </main>
  );
}
