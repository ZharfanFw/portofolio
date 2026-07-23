"use client";

import React, { useState, useEffect } from "react";
import { DiagonalSection } from "@/components/shared/diagonal-section";
import { TarotCard } from "@/components/shared/tarot-card";
import { projects } from "@/data/projects";
import { MotionReveal } from "@/components/shared/motion-reveal";

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, projects.length - visibleCount);

  // Clamp active index if resize makes it out of bounds
  useEffect(() => {
    setActiveIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  return (
    <DiagonalSection id="projects" bgClassName="bg-paper">
      <div className="flex flex-col gap-8 py-8 w-full">
        {/* Section Title */}
        <MotionReveal variant="fade-up" className="flex items-center gap-3">
          <div className="w-2 h-6 bg-accent" />
          <h2 className="font-heading text-3xl uppercase tracking-wider text-ink font-bold">
            Projects
          </h2>
        </MotionReveal>

        {/* Unified Responsive Carousel */}
        <MotionReveal variant="fade-up" delay={0.15} className="w-full max-w-6xl mx-auto px-1 sm:px-4">
          <div className="relative overflow-hidden w-full py-4">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ 
                transform: mounted 
                  ? `translateX(-${activeIndex * (100 / visibleCount)}%)` 
                  : "translateX(0%)" 
              }}
            >
              {projects.map((p) => (
                <div 
                  key={p.slug} 
                  className="w-full sm:w-1/2 lg:w-1/3 shrink-0 px-3"
                >
                  <TarotCard
                    numeral={p.numeral}
                    arcanaName={p.arcanaName}
                    projectName={p.name}
                    projectDesc={p.desc}
                    tech={p.tech}
                    period={p.period}
                    projectLink={p.link}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-6 max-w-md mx-auto px-4">
            <button
              onClick={handlePrev}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-rule bg-paper-3/90 text-ink hover:text-accent hover:border-accent active:scale-95 transition-all duration-200"
              aria-label="Previous Projects"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeIndex ? "w-6 bg-accent" : "w-2 bg-rule"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-rule bg-paper-3/90 text-ink hover:text-accent hover:border-accent active:scale-95 transition-all duration-200"
              aria-label="Next Projects"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </MotionReveal>
      </div>
    </DiagonalSection>
  );
}
