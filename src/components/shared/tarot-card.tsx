"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="aspect-[2/3.2] cursor-pointer [perspective:1000px] group select-none"
      onClick={() => setFlipped((f) => !f)}
    >
      <div
        className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d]"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* Card Front Face: The Mystery Arcana */}
        <div className="absolute inset-0 flex flex-col items-center justify-between p-6 rounded-xl border border-rule/70 bg-paper-3 [backface-visibility:hidden] transition-colors duration-300 group-hover:border-accent/60 shadow-md">
          {/* Decorative Corner Ornaments */}
          <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t border-l border-muted/50 group-hover:border-accent/80 transition-colors" />
          <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t border-r border-muted/50 group-hover:border-accent/80 transition-colors" />
          <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b border-l border-muted/50 group-hover:border-accent/80 transition-colors" />
          <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b border-r border-muted/50 group-hover:border-accent/80 transition-colors" />

          {/* Tiny Arcana Number Top */}
          <span className="font-mono text-xs tracking-widest text-muted uppercase font-medium">{numeral}</span>

          {/* Center Numeral Symbol */}
          <div className="flex flex-col items-center gap-1 my-auto">
            <span className="font-heading text-5xl sm:text-6xl font-bold text-ink tracking-widest transition-transform duration-300 group-hover:scale-105 p3-glow">
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
          className="absolute inset-0 flex flex-col items-center justify-between p-5 sm:p-6 rounded-xl border border-accent bg-paper-3 text-center [backface-visibility:hidden] shadow-lg p3-glow-border"
          style={{ transform: "rotateY(180deg)" }}
        >
          {/* Decorative back framing */}
          <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-accent/40" />
          <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-accent/40" />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-accent/40" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-accent/40" />

          {/* Title header */}
          <div className="flex flex-col gap-1 w-full border-b border-rule/60 pb-2">
            <span className="font-heading text-xs tracking-widest text-accent uppercase font-bold">
              Arcana {numeral}
            </span>
            <span className="font-mono text-[11px] text-muted font-medium tracking-wide">
              {period}
            </span>
          </div>

          <div className="flex flex-col gap-2.5 my-auto w-full">
            <h3 className="font-heading text-lg font-bold text-ink uppercase tracking-wide leading-snug">
              {projectName}
            </h3>
            <p className="font-body text-xs sm:text-[13px] text-ink-2 leading-relaxed px-1 font-normal">
              {projectDesc}
            </p>
            <div className="text-xs font-mono font-medium text-accent mt-1 bg-paper-2 border border-rule/70 rounded-md py-1.5 px-2.5 select-none truncate">
              {tech}
            </div>
          </div>

          {/* Action Link */}
          {projectLink && (
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-xs font-heading font-bold text-accent hover:text-ink-2 hover:bg-accent/10 uppercase tracking-wider border border-accent/50 hover:border-accent py-2 rounded-md transition-all duration-200"
              onClick={(e) => e.stopPropagation()} // Prevent reflipping card when clicking the link
            >
              View Repository →
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
