import React from "react";
import { DiagonalSection } from "@/components/shared/diagonal-section";

export function Hero() {
  return (
    <DiagonalSection id="home" cutTop={false} bgClassName="bg-paper">
      <div className="flex min-h-[90vh] flex-col md:flex-row items-center justify-between gap-12 pt-20 pb-12">
        {/* Left Side: Headline and Subtext */}
        <div className="flex flex-col gap-6 max-w-xl text-left">
          <span className="text-xs uppercase tracking-widest text-accent font-semibold p3-glow">
            Dark Hour Developer
          </span>
          <h1 className="font-heading text-6xl md:text-8xl font-bold uppercase tracking-tight leading-none text-ink">
            ZHARFAN
          </h1>
          <p className="font-body text-base md:text-lg text-ink-2 max-w-md leading-relaxed">
            Crafting high-performance backend systems with Elysia and PostgreSQL, 
            backed by clean frontend integrations in Next.js.
          </p>
        </div>

        {/* Right Side: Tier A CSS Art - The Clock of the Dark Hour */}
        <div className="relative flex items-center justify-center w-72 h-72 md:w-96 md:h-96">
          {/* Clock Outer Glow and Radial Aura */}
          <div className="absolute inset-0 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
          
          {/* SVG Clock Frame */}
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full relative z-10 transition-transform duration-700 hover:scale-105"
          >
            {/* Clock Face Background */}
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="var(--color-paper-3)"
              stroke="var(--color-accent)"
              strokeWidth="2.5"
              className="p3-glow-border opacity-95"
            />
            
            {/* Inner Ring */}
            <circle
              cx="100"
              cy="100"
              r="78"
              fill="var(--color-paper-2)"
              stroke="var(--color-rule)"
              strokeWidth="1"
              strokeDasharray="4,4"
            />
            
            {/* Hour Markers (XII, III, VI, IX) */}
            <text x="100" y="32" textAnchor="middle" className="font-heading text-sm font-bold fill-ink select-none tracking-tighter">XII</text>
            <text x="174" y="105" textAnchor="middle" className="font-heading text-sm font-bold fill-ink select-none">III</text>
            <text x="100" y="178" textAnchor="middle" className="font-heading text-sm font-bold fill-ink select-none">VI</text>
            <text x="26" y="105" textAnchor="middle" className="font-heading text-sm font-bold fill-ink select-none">IX</text>

            {/* Smaller Tick marks */}
            {[30, 60, 120, 150, 210, 240, 300, 330].map((deg) => {
              const rad = (deg * Math.PI) / 180;
              const x1 = 100 + 72 * Math.sin(rad);
              const y1 = 100 - 72 * Math.cos(rad);
              const x2 = 100 + 78 * Math.sin(rad);
              const y2 = 100 - 78 * Math.cos(rad);
              return (
                <line
                  key={deg}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="var(--color-muted)"
                  strokeWidth="1"
                />
              );
            })}

            {/* Glowing Blue Butterflies Silhouettes in Clock Face */}
            <path
              d="M 65 65 Q 60 55 52 62 Q 48 68 56 70 Q 52 76 60 74 Q 63 70 65 65 Z"
              fill="var(--color-accent)"
              className="opacity-20 animate-pulse"
            />
            <path
              d="M 135 135 Q 140 125 148 132 Q 152 138 144 140 Q 148 146 140 144 Q 137 140 135 135 Z"
              fill="var(--color-accent)"
              className="opacity-25"
              transform="rotate(15, 135, 135)"
            />

            {/* Clock Hands Group (origin centered) */}
            <g transform="translate(100, 100)">
              {/* Hour Hand */}
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="-42"
                stroke="var(--color-ink)"
                strokeWidth="3.5"
                strokeLinecap="round"
                className="hand-hours"
                style={{ transformOrigin: "0 0" }}
              />
              
              {/* Minute Hand */}
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="-62"
                stroke="var(--color-ink)"
                strokeWidth="2"
                strokeLinecap="round"
                className="hand-minutes"
                style={{ transformOrigin: "0 0" }}
              />
              
              {/* Second Hand (Electric Blue Accent) */}
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="-72"
                stroke="var(--color-accent)"
                strokeWidth="1"
                strokeLinecap="round"
                className="hand-seconds"
                style={{ transformOrigin: "0 0" }}
              />
              
              {/* Center Pin */}
              <circle cx="0" cy="0" r="4.5" fill="var(--color-paper)" stroke="var(--color-accent)" strokeWidth="2" />
            </g>
          </svg>

          {/* Glowing Ring around the Clock */}
          <div className="absolute inset-4 rounded-full border border-accent/10 pointer-events-none p3-glow-border" />
        </div>
      </div>
    </DiagonalSection>
  );
}
