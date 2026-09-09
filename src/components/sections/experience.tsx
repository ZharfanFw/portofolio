"use client";

import React from "react";
import { DiagonalSection } from "@/components/shared/diagonal-section";
import { MotionReveal, MotionStaggerContainer, MotionStaggerItem } from "@/components/shared/motion-reveal";
import { SectionHeader } from "@/components/shared/section-header";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights?: string[];
}

const experienceData: ExperienceItem[] = [
  {
    company: "Wargi Kopi | WarKop (Contract)",
    role: "Full Stack Engineer",
    period: "May 2026 — Present",
    description: "Designed and developed a full-featured Point of Sale and Admin Dashboard system for coffee shop operations — from database schema to frontend UI and REST API. The system handles daily cashier transactions, order queue management, thermal receipt printing, and administrative analytics.",
    highlights: [
      "Built a modular REST API with Elysia (Bun-native framework) following clean architecture with JWT authentication and role-based access control.",
      "Designed a PostgreSQL schema with Drizzle ORM using an order snapshot pattern to preserve historical transaction accuracy.",
      "Developed a responsive POS app with Next.js and Tailwind featuring menu browsing, cart management, and CSS Print API thermal receipt integration.",
      "Implemented Progressive Web App (PWA) support to enable offline-capable, standalone tablet installations for cashiers.",
      "Built an admin dashboard with interactive analytics (revenue trends, peak hours, menu profitability) using custom SVG charts.",
      "Created a dual-phase order workflow (unpaid kitchen slips to paid customer receipts) matching real-world cafe operations."
    ]
  }
];

export function Experience() {
  return (
    <DiagonalSection id="experience" bgClassName="bg-paper-2" direction="right">
      <div className="flex flex-col gap-6 py-4 w-full">
        {/* Slanted P3 Section Header */}
        <SectionHeader 
          number="03" 
          title="EXPERIENCE" 
          subtitle="CONTRACT ROLES & SYSTEMS DEVELOPMENT" 
        />

        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Column: Brief Context */}
          <MotionReveal variant="fade-right" className="flex flex-col gap-4 md:w-1/3">
            <p className="font-body text-sm text-ink-2 max-w-xs leading-relaxed">
              Professional contract roles, full-stack systems development, database architecture, and API design.
            </p>
          </MotionReveal>

          {/* Right Column: Timeline Cards */}
          <MotionStaggerContainer staggerDelay={0.15} className="flex flex-col gap-6 md:w-2/3 relative pl-6 border-l-2 border-rule">
            {experienceData.map((item, idx) => (
              <MotionStaggerItem
                key={idx}
                className="bg-paper-3 border border-rule/70 hover:border-accent/60 rounded-xl p-6 relative transition-all duration-300 shadow-md flex flex-col gap-4 group"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[31px] top-7 w-3 h-3 rounded-full bg-paper border-2 border-accent transition-transform duration-300 group-hover:scale-125 p3-glow" />

                {/* Card Header */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 border-b border-rule/50 pb-3">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-ink uppercase tracking-wide">
                      {item.role}
                    </h3>
                    <span className="font-mono text-xs sm:text-sm font-semibold text-accent uppercase tracking-wider">
                      {item.company}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-muted font-medium whitespace-nowrap bg-paper-2 px-2.5 py-1 rounded-md border border-rule/50">
                    {item.period}
                  </span>
                </div>

                {/* Card Body */}
                <p className="font-body text-sm sm:text-base text-ink-2 leading-relaxed">
                  {item.description}
                </p>

                {item.highlights && item.highlights.length > 0 && (
                  <div className="flex flex-col gap-2 mt-2 pt-3 border-t border-rule/40">
                    <span className="font-mono text-xs font-bold text-accent uppercase tracking-wider">
                      Key Highlights & Architecture:
                    </span>
                    <ul className="flex flex-col gap-2 pl-4 list-disc text-xs sm:text-sm text-ink-2/90 leading-relaxed font-body">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="pl-1">
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </MotionStaggerItem>
            ))}
          </MotionStaggerContainer>
        </div>
      </div>
    </DiagonalSection>
  );
}
