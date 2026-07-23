"use client";

import React from "react";
import { DiagonalSection } from "@/components/shared/diagonal-section";
import { MotionReveal, MotionStaggerContainer, MotionStaggerItem } from "@/components/shared/motion-reveal";
import { SectionHeader } from "@/components/shared/section-header";

interface SkillGroup {
  category: string;
  items: string[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "Frontend (Basic)",
    items: ["Next.js", "React", "TypeScript", "TailwindCSS"],
  },
  {
    category: "Backend Dev",
    items: ["Elysia", "Drizzle ORM", "Node.js", "REST APIs"],
  },
  {
    category: "Infrastructure",
    items: ["PostgreSQL", "Docker", "Git", "Linux"],
  },
];

export function Skills() {
  return (
    <DiagonalSection id="skills" bgClassName="bg-paper-2" direction="right">
      <div className="flex flex-col gap-6 py-4 w-full">
        {/* Slanted P3 Section Header */}
        <SectionHeader 
          number="05" 
          title="SKILLS" 
          subtitle="TECHNICAL STACK & INFRASTRUCTURE CAPABILITIES" 
        />

        {/* Categories Grid */}
        <MotionStaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto w-full">
          {skillGroups.map((group) => (
            <MotionStaggerItem 
              key={group.category} 
              className="flex flex-col gap-4 p-6 bg-paper-3 border border-rule/50 rounded-lg hover:border-accent/40 transition-colors duration-300 shadow-sm"
            >
              <h3 className="font-body text-xs tracking-widest text-accent uppercase font-bold">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((s) => (
                  <span
                    key={s}
                    className="font-body text-xs font-medium rounded-md border border-rule bg-paper-2 px-3 py-1.5 text-ink-2 hover:text-ink hover:border-accent transition-all duration-200 select-none"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </MotionStaggerItem>
          ))}
        </MotionStaggerContainer>
      </div>
    </DiagonalSection>
  );
}
