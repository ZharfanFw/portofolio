"use client";

import React from "react";
import { MotionReveal } from "@/components/shared/motion-reveal";

interface SectionHeaderProps {
  number: string;   // e.g. "01"
  title: string;    // e.g. "PROFILE"
  subtitle?: string; // e.g. "PERSONAL OVERVIEW & PARAMETERS"
}

export function SectionHeader({ number, title, subtitle }: SectionHeaderProps) {
  return (
    <MotionReveal variant="fade-right" className="flex flex-col gap-2 mb-6 w-full">
      <div className="flex items-center gap-4">
        {/* Slanted Persona 3 Ribbon Banner */}
        <div className="relative inline-flex items-center gap-3 px-5 py-2.5 bg-accent text-accent-ink -skew-x-12 shadow-lg p3-glow-border rounded-sm">
          {/* Number Badge */}
          <span className="skew-x-12 font-mono font-black text-lg tracking-wider border-r border-accent-ink/30 pr-3">
            {number}
          </span>
          {/* Title Text */}
          <h2 className="skew-x-12 font-heading text-2xl sm:text-3xl font-black uppercase tracking-wider">
            {title}
          </h2>
        </div>

        {/* Tactical Cyan Accent Line */}
        <div className="h-[2px] flex-1 bg-gradient-to-r from-accent/60 via-accent/20 to-transparent" />
      </div>

      {subtitle && (
        <p className="font-mono text-xs text-accent/80 tracking-widest uppercase pl-1">
          // {subtitle}
        </p>
      )}
    </MotionReveal>
  );
}
