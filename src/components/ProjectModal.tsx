"use client";

import Image from "next/image";
import { X, Sparkles, ExternalLink, CheckCircle2, User, Code2 } from "lucide-react";
import { ProjectItem } from "./PortfolioShowcase";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onBookCall: () => void;
}

export default function ProjectModal({ project, onClose, onBookCall }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#061527]/80 backdrop-blur-md animate-in fade-in duration-300">
      <div
        className="relative w-full max-w-2xl bg-[#FDFBF7] rounded-3xl border border-[#D4AF37]/50 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#061527] text-[#D4AF37] flex items-center justify-center hover:bg-[#0A1D34] hover:scale-110 transition-all cursor-pointer border border-[#D4AF37]/40 shadow-md"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Image */}
        <div className="relative h-60 sm:h-72 w-full bg-[#061527]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061527] via-[#061527]/40 to-transparent" />

          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
            <div>
              <span className="bg-[#D4AF37] text-[#061527] text-[10px] font-bold tracking-widest px-3 py-1 rounded-full uppercase">
                {project.category}
              </span>
              <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white mt-1">
                {project.title}
              </h2>
              <p className="font-script-luxury text-xl text-[#E6C875]">
                {project.greekName}
              </p>
            </div>
            <div className="font-serif-luxury text-xl font-bold text-[#D4AF37]">
              {project.priceTag}
            </div>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Key Metrics Pill */}
          <div className="flex items-center gap-4 bg-[#FAF7F0] p-4 rounded-xl border border-[#D4AF37]/20 text-xs">
            <div className="flex items-center gap-2 text-[#061527] font-semibold">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>{project.metrics}</span>
            </div>
            <div className="h-4 w-[1px] bg-gray-300" />
            <div className="flex items-center gap-2 text-gray-600">
              <User className="w-4 h-4 text-[#D4AF37]" />
              <span>Client: {project.client}</span>
            </div>
          </div>

          {/* Full Narrative Story */}
          <div className="space-y-2">
            <h4 className="font-serif-luxury text-xs font-bold tracking-widest text-[#061527] uppercase">
              Project Architecture & Story
            </h4>
            <p className="text-xs sm:text-sm text-gray-700 font-light leading-relaxed">
              {project.fullStory}
            </p>
          </div>

          {/* Tech Stack Badges */}
          <div className="space-y-2">
            <h4 className="font-serif-luxury text-xs font-bold tracking-widest text-[#061527] uppercase flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-[#D4AF37]" /> Tech Stack & Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-[#061527] text-[#E6C875] text-[11px] font-medium px-3 py-1 rounded-md border border-[#D4AF37]/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Action Buttons */}
          <div className="pt-4 flex flex-wrap items-center justify-end gap-3 border-t border-[#D4AF37]/20">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-sm border border-gray-300 text-gray-700 text-xs font-semibold uppercase tracking-wider hover:bg-gray-100 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookCall();
              }}
              className="gold-button-gradient text-[#061527] px-6 py-2.5 rounded-sm font-semibold text-xs tracking-wider uppercase flex items-center gap-2 shadow-md cursor-pointer"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Book Similar Project</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
