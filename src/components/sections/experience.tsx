import React from "react";
import { DiagonalSection } from "@/components/shared/diagonal-section";

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
    <DiagonalSection id="experience" bgClassName="bg-paper-2">
      <div className="flex flex-col md:flex-row gap-12 py-8">
        {/* Left Column: Heading */}
        <div className="flex flex-col gap-4 md:w-1/3">
          <div className="flex items-center gap-3">
            <div className="w-2 h-6 bg-accent" />
            <h2 className="font-heading text-3xl uppercase tracking-wider text-ink font-bold">
              Experience
            </h2>
          </div>
          <p className="font-body text-sm text-ink-2 max-w-xs leading-relaxed">
            Professional contract roles, full-stack systems development, and database architecture.
          </p>
        </div>

        {/* Right Column: Timeline Cards */}
        <div className="flex flex-col gap-6 md:w-2/3 relative pl-4 border-l border-rule">
          {experienceData.map((item, idx) => (
            <div
              key={idx}
              className="bg-paper-3 border border-rule/50 hover:border-accent/40 rounded-lg p-6 relative transition-all duration-300 shadow-sm flex flex-col gap-3 group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[21px] top-7 w-2.5 h-2.5 rounded-full bg-paper border-2 border-accent transition-transform duration-300 group-hover:scale-125" />

              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                <div>
                  <h3 className="font-heading text-lg font-bold text-ink uppercase tracking-wide">
                    {item.role}
                  </h3>
                  <span className="font-heading text-xs font-semibold text-accent uppercase tracking-widest">
                    {item.company}
                  </span>
                </div>
                <span className="font-body text-xs text-muted font-medium whitespace-nowrap">
                  {item.period}
                </span>
              </div>

              {/* Card Body */}
              <p className="font-body text-xs text-ink-2 leading-relaxed">
                {item.description}
              </p>

              {item.highlights && item.highlights.length > 0 && (
                <ul className="flex flex-col gap-1.5 mt-2 pl-4 list-disc text-[11px] text-muted leading-relaxed font-body">
                  {item.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </DiagonalSection>
  );
}
