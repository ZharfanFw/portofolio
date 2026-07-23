"use client";

import React from "react";
import { DiagonalSection } from "@/components/shared/diagonal-section";
import { MotionReveal } from "@/components/shared/motion-reveal";
import { SectionHeader } from "@/components/shared/section-header";

interface ParameterItem {
  name: string;
  level: number;
  maxLevel: number;
  rankName: string;
  description: string;
}

const statusParameters: ParameterItem[] = [
  {
    name: "Academics",
    level: 6,
    maxLevel: 6,
    rankName: "Genius",
    description: "System Architecture",
  },
  {
    name: "Charm",
    level: 5,
    maxLevel: 6,
    rankName: "Charismatic",
    description: "API & Database Design",
  },
  {
    name: "Courage",
    level: 6,
    maxLevel: 6,
    rankName: "Badass",
    description: "Legacy Debugging",
  },
];

export function About() {
  return (
    <DiagonalSection id="about" bgClassName="bg-paper-2" direction="right">
      <div className="flex flex-col gap-6 py-4 w-full">
        {/* Slanted P3 Section Header */}
        <SectionHeader 
          number="01" 
          title="PROFILE" 
          subtitle="PERSONAL OVERVIEW & RPG PARAMETERS" 
        />

        <div className="flex flex-col lg:flex-row gap-12 items-start justify-between w-full">
          {/* Left Column: Clean Instagram 4:5 Aspect Ratio Profile Photo */}
          <MotionReveal
            variant="fade-right"
            delay={0.1}
            className="w-52 aspect-[4/5] sm:w-60 shrink-0 relative group mx-auto lg:mx-0"
          >
            {/* Decorative Offset Border */}
            <div className="absolute inset-0 border border-accent/70 rounded-xl transform translate-x-2.5 translate-y-2.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
            
            {/* Image Container with 4:5 Aspect Ratio */}
            <div className="absolute inset-0 bg-paper-3 border border-rule/50 rounded-xl overflow-hidden p3-glow-border shadow-xl">
              <img 
                src="/images/profile.png" 
                alt="Zharfan Profile" 
                className="w-full h-full object-cover" 
              />
            </div>
          </MotionReveal>

          {/* Middle Column: Professional Bio */}
          <MotionReveal variant="fade-up" delay={0.2} className="flex flex-col gap-5 max-w-xl w-full">
            <p className="font-body text-base text-ink-2 leading-relaxed">
              I am a software engineer focused on building robust, high-performance backend systems and APIs.
              While I handle web frontend basics using modern frameworks like Next.js, my primary expertise lies in database performance, reliable routing, and service design.
            </p>
            <p className="font-body text-base text-ink-2 leading-relaxed">
              My engineering philosophy centers around simplicity, architectural clarity, and precise execution.
              Whether optimizing PostgreSQL queries, writing server controllers, or containerizing microservices with Docker, I approach system design with a rigorous and methodical mindset.
            </p>
          </MotionReveal>

          {/* Right Column: Persona 3 RPG Status Parameters */}
          <MotionReveal 
            variant="fade-left" 
            delay={0.3}
            className="w-full lg:w-72 bg-paper-3 border border-rule/60 p-5 rounded-lg shadow-lg flex flex-col gap-4 p3-glow-border"
          >
            <div className="flex items-center justify-between border-b border-rule pb-2">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent">
                Status Parameters
              </span>
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            </div>

            <div className="flex flex-col gap-4">
              {statusParameters.map((param) => (
                <div key={param.name} className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold uppercase text-ink tracking-wide">{param.name}</span>
                    <span className="text-accent font-semibold">{param.rankName}</span>
                  </div>
                  <div className="text-[10px] font-mono text-ink-2 mb-1">{param.description}</div>
                  {/* Parameter Level Blocks with Shimmer Pulse */}
                  <div className="flex gap-1.5">
                    {Array.from({ length: param.maxLevel }).map((_, idx) => {
                      const isActive = idx < param.level;
                      return (
                        <div
                          key={idx}
                          className={`h-2.5 flex-1 rounded-sm transition-all duration-300 ${
                            isActive
                              ? "bg-accent shadow-[0_0_8px_rgba(47,127,224,0.6)] animate-pulse"
                              : "bg-paper-2 border border-rule/40 opacity-40"
                          }`}
                        />
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </MotionReveal>
        </div>
      </div>
    </DiagonalSection>
  );
}
