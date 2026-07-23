"use client";

import React from "react";
import { motion } from "framer-motion";
import { DiagonalSection } from "@/components/shared/diagonal-section";
import { MotionReveal } from "@/components/shared/motion-reveal";

interface StatItem {
  name: string;
  p3Name: string;
  level: number;
  maxLevel: number;
  rankName: string;
}

const stats: StatItem[] = [
  {
    name: "System Architecture",
    p3Name: "Academics",
    level: 5,
    maxLevel: 6,
    rankName: "Genius",
  },
  {
    name: "API & Database Design",
    p3Name: "Charm",
    level: 5,
    maxLevel: 6,
    rankName: "Charismatic",
  },
  {
    name: "Legacy Debugging",
    p3Name: "Courage",
    level: 6,
    maxLevel: 6,
    rankName: "Badass",
  },
];

export function About() {
  return (
    <DiagonalSection id="about" bgClassName="bg-paper-2">
      <div className="flex flex-col lg:flex-row gap-12 items-start justify-between py-8 w-full">
        {/* Left Column: Styled Profile Avatar */}
        <MotionReveal variant="fade-right" delay={0.1} className="w-48 h-48 sm:w-56 sm:h-56 shrink-0 relative group mx-auto lg:mx-0">
          {/* Decorative offset border behind the image */}
          <div className="absolute inset-0 border border-accent/70 rounded-lg transform translate-x-2.5 translate-y-2.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
          {/* Image container */}
          <div className="absolute inset-0 bg-paper-3 border border-rule/50 rounded-lg overflow-hidden p3-glow-border">
            <img 
              src="/images/profile.png" 
              alt="Zharfan Profile" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </MotionReveal>

        {/* Middle Column: Professional Bio */}
        <MotionReveal variant="fade-up" delay={0.2} className="flex flex-col gap-6 max-w-xl w-full">
          <div className="flex items-center gap-3">
            <div className="w-2 h-6 bg-accent" />
            <h2 className="font-heading text-3xl uppercase tracking-wider text-ink font-bold">
              Profile
            </h2>
          </div>
          <p className="font-body text-base text-ink-2 leading-relaxed">
            I am a software engineer focused on building robust, high-performance backend systems and APIs.
            While I handle web frontend basics using modern frameworks like Next.js, my primary expertise lies in database performance, reliable routing, and service design.
          </p>
          <p className="font-body text-base text-ink-2 leading-relaxed">
            My engineering philosophy centers around simplicity, architectural clarity, and precise execution.
            Whether optimizing PostgreSQL queries, writing server controllers, or containerizing microservices with Docker, I approach system design with a rigorous and methodical mindset.
          </p>
        </MotionReveal>

        {/* Right Column: Persona 3 Parameters Visualizer */}
        <MotionReveal variant="fade-left" delay={0.3} className="w-full lg:w-80 p-6 bg-paper-3 border border-rule/50 rounded-lg flex flex-col gap-6 p3-glow-border mx-auto lg:mx-0">
          <span className="text-xs uppercase tracking-widest text-accent font-semibold">
            Status Parameters
          </span>
          <div className="flex flex-col gap-5">
            {stats.map((s, sIdx) => (
              <div key={s.name} className="flex flex-col gap-2">
                <div className="flex justify-between items-end text-xs uppercase tracking-wider">
                  <span className="font-semibold text-ink">{s.p3Name}</span>
                  <span className="text-accent text-[10px]">{s.rankName}</span>
                </div>
                <div className="flex items-center gap-1.5 justify-between">
                  <span className="text-xs font-body font-medium text-ink-2 truncate mr-1.5">
                    {s.name}
                  </span>
                  <div className="flex gap-1 shrink-0">
                    {Array.from({ length: s.maxLevel }).map((_, idx) => {
                      const isActive = idx < s.level;
                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: sIdx * 0.15 + idx * 0.05 }}
                          className={`h-3 w-3 transform -skew-x-12 transition-all duration-300 ${
                            isActive
                              ? "bg-accent p3-glow-border"
                              : "bg-paper-2 border border-rule"
                          }`}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </MotionReveal>
      </div>
    </DiagonalSection>
  );
}
