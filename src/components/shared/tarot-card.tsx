"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type TarotCardProps = {
  numeral: string;
  arcanaName: string;
  projectName: string;
  projectDesc: string;
  tech: string;
  period: string;
  projectLink?: string;
};

export function TarotCard({
  numeral,
  arcanaName,
  projectName,
  projectDesc,
  tech,
  period,
  projectLink = "#",
}: TarotCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="aspect-[2/3.2] cursor-pointer [perspective:1000px] group select-none"
      onClick={() => setFlipped((f) => !f)}
    >
      <div
        className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d]"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* Card Front Face: The Mystery Arcana */}
        <div className="absolute inset-0 flex flex-col items-center justify-between p-6 rounded-lg border border-rule bg-paper-3 [backface-visibility:hidden] transition-colors duration-300 group-hover:border-accent/40 shadow-md">
          {/* Decorative Corner Ornaments */}
          <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t border-l border-muted/50 group-hover:border-accent/80 transition-colors" />
          <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t border-r border-muted/50 group-hover:border-accent/80 transition-colors" />
          <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b border-l border-muted/50 group-hover:border-accent/80 transition-colors" />
          <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b border-r border-muted/50 group-hover:border-accent/80 transition-colors" />

          {/* Tiny Arcana Number Top */}
          <span className="text-[10px] tracking-widest text-muted uppercase">{numeral}</span>

          {/* Center Numeral Symbol */}
          <div className="flex flex-col items-center gap-1 my-auto">
            <span className="font-heading text-5xl font-bold text-ink tracking-widest transition-transform duration-300 group-hover:scale-110 p3-glow">
              {numeral}
            </span>
          </div>

          {/* Arcana Name Bottom */}
          <span className="font-heading text-xs uppercase tracking-widest text-accent font-semibold">
            {arcanaName}
          </span>
        </div>

        {/* Card Back Face: Project Details */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-between p-5 rounded-lg border border-accent bg-paper-3 text-center [backface-visibility:hidden] shadow-lg p3-glow-border"
          style={{ transform: "rotateY(180deg)" }}
        >
          {/* Decorative back framing */}
          <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-accent/40" />
          <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-accent/40" />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-accent/40" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-accent/40" />

          {/* Title header */}
          <div className="flex flex-col gap-0.5">
            <span className="font-heading text-[10px] tracking-widest text-accent uppercase font-bold">
              Arcana {numeral}
            </span>
            <span className="font-body text-[9px] text-muted italic font-medium uppercase tracking-wide">
              {period}
            </span>
          </div>

          <div className="flex flex-col gap-2 my-auto">
            <h3 className="font-heading text-base font-bold text-ink uppercase tracking-wide leading-snug">
              {projectName}
            </h3>
            <p className="font-body text-[11px] text-ink-2 leading-relaxed px-0.5">
              {projectDesc}
            </p>
            <div className="text-[10px] font-body font-semibold text-accent/90 mt-1 uppercase tracking-wider bg-paper-2 border border-rule/50 rounded py-1 px-2 select-none truncate">
              {tech}
            </div>
          </div>

          {/* Action Link */}
          {projectLink && (
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[9px] font-heading font-bold text-accent hover:text-ink uppercase tracking-widest border border-accent/30 hover:border-accent px-4 py-1.5 rounded transition-all duration-200"
              onClick={(e) => e.stopPropagation()} // Prevent reflipping card when clicking the link
            >
              View Repository
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
