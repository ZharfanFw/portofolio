"use client";

import React from "react";
import { DiagonalSection } from "@/components/shared/diagonal-section";
import { MotionReveal, MotionStaggerContainer, MotionStaggerItem } from "@/components/shared/motion-reveal";
import { SectionHeader } from "@/components/shared/section-header";

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
      <div className="flex flex-col gap-6 py-4 w-full">
        {/* Slanted P3 Section Header */}
        <SectionHeader 
          number="02" 
          title="EDUCATION" 
          subtitle="ACADEMIC BACKGROUND & FOUNDATIONAL STUDIES" 
        />

        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Column: Brief Context */}
          <MotionReveal variant="fade-right" className="flex flex-col gap-4 md:w-1/3">
            <p className="font-body text-sm text-ink-2 max-w-xs leading-relaxed">
              Formal education history laying the foundation for computer science, mathematics, and systems development.
            </p>
          </MotionReveal>

          {/* Right Column: Timeline Cards */}
          <MotionStaggerContainer staggerDelay={0.15} className="flex flex-col gap-6 md:w-2/3 relative pl-6 border-l-2 border-rule">
            {educationData.map((item, idx) => (
              <MotionStaggerItem
                key={idx}
                className="bg-paper-2 border border-rule/70 hover:border-accent/60 rounded-xl p-6 relative transition-all duration-300 shadow-md flex flex-col gap-3 group"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[31px] top-7 w-3 h-3 rounded-full bg-paper border-2 border-accent transition-transform duration-300 group-hover:scale-125 p3-glow" />

                {/* Card Header */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 border-b border-rule/50 pb-3">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-ink uppercase tracking-wide">
                      {item.degree}
                    </h3>
                    <span className="font-mono text-xs sm:text-sm font-semibold text-accent uppercase tracking-wider">
                      {item.institution}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-muted font-medium whitespace-nowrap bg-paper-3 px-2.5 py-1 rounded-md border border-rule/50">
                    {item.period}
                  </span>
                </div>

                {/* Card Body */}
                <p className="font-body text-sm sm:text-base text-ink-2 leading-relaxed">
                  {item.description}
                </p>

                {item.gpa && (
                  <span className="font-mono text-xs font-bold text-ink uppercase tracking-wider bg-paper-3 border border-rule/70 px-3 py-1.5 rounded-md w-fit">
                    {item.gpa}
                  </span>
                )}
              </MotionStaggerItem>
            ))}
          </MotionStaggerContainer>
        </div>
      </div>
    </DiagonalSection>
  );
}
