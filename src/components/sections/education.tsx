"use client";

import React from "react";
import { DiagonalSection } from "@/components/shared/diagonal-section";
import { MotionReveal, MotionStaggerContainer, MotionStaggerItem } from "@/components/shared/motion-reveal";

interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  description: string;
  gpa?: string;
  highlights?: string[];
}

const educationData: EducationItem[] = [
  {
    institution: "Universitas Pendidikan Indonesia",
    degree: "Bachelor of Computer Science",
    period: "2024 — Present",
    description: "Focusing on software development, database systems, and backend engineering. Actively developing web and mobile applications.",
    gpa: "GPA: 3.47 / 4.00",
  },
  {
    institution: "SMA Negeri 24 Bandung",
    degree: "Mathematics and Science",
    period: "2021 — 2024",
    description: "Completed high school education in the Natural Sciences major, establishing a strong foundation in logic, mathematics, and science.",
  }
];

export function Education() {
  return (
    <DiagonalSection id="education" bgClassName="bg-paper">
      <div className="flex flex-col md:flex-row gap-12 py-8">
        {/* Left Column: Heading */}
        <MotionReveal variant="fade-right" className="flex flex-col gap-4 md:w-1/3">
          <div className="flex items-center gap-3">
            <div className="w-2 h-6 bg-accent" />
            <h2 className="font-heading text-3xl uppercase tracking-wider text-ink font-bold">
              Education
            </h2>
          </div>
          <p className="font-body text-sm text-ink-2 max-w-xs leading-relaxed">
            Formal education history laying the foundation for computer science and systems development.
          </p>
        </MotionReveal>

        {/* Right Column: Timeline Cards */}
        <MotionStaggerContainer staggerDelay={0.15} className="flex flex-col gap-6 md:w-2/3 relative pl-4 border-l border-rule">
          {educationData.map((item, idx) => (
            <MotionStaggerItem
              key={idx}
              className="bg-paper-2 border border-rule/50 hover:border-accent/40 rounded-lg p-6 relative transition-all duration-300 shadow-sm flex flex-col gap-3 group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[21px] top-7 w-2.5 h-2.5 rounded-full bg-paper border-2 border-accent transition-transform duration-300 group-hover:scale-125 p3-glow" />

              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                <div>
                  <h3 className="font-heading text-lg font-bold text-ink uppercase tracking-wide">
                    {item.degree}
                  </h3>
                  <span className="font-heading text-xs font-semibold text-accent uppercase tracking-widest">
                    {item.institution}
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

              {item.gpa && (
                <span className="font-heading text-xs font-bold text-ink uppercase tracking-wider bg-paper-3 border border-rule px-2.5 py-1 rounded w-fit">
                  {item.gpa}
                </span>
              )}

              {item.highlights && item.highlights.length > 0 && (
                <ul className="flex flex-col gap-1.5 mt-2 pl-4 list-disc text-[11px] text-muted leading-relaxed font-body">
                  {item.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              )}
            </MotionStaggerItem>
          ))}
        </MotionStaggerContainer>
      </div>
    </DiagonalSection>
  );
}
