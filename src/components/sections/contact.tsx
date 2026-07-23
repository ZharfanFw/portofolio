"use client";

import React from "react";
import { DiagonalSection } from "@/components/shared/diagonal-section";
import { MotionReveal } from "@/components/shared/motion-reveal";
import { SectionHeader } from "@/components/shared/section-header";

export function Contact() {
  return (
    <DiagonalSection id="contact" cutBottom={false} bgClassName="bg-paper">
      <div className="flex flex-col gap-6 py-4 w-full">
        {/* Slanted P3 Section Header */}
        <SectionHeader 
          number="06" 
          title="CONTACT" 
          subtitle="COMMUNICATION & DIRECT INQUIRIES" 
        />

        {/* Terminal Prompt Mockup */}
        <MotionReveal variant="scale-up" delay={0.15} className="max-w-2xl mx-auto w-full border border-rule/50 bg-paper-3 rounded-lg overflow-hidden shadow-lg p3-glow-border">
          {/* Window Header */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-rule bg-paper-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            </div>
            <span className="text-[10px] font-heading font-bold text-muted uppercase tracking-widest">
              dark-hour-sh.json
            </span>
            <div className="w-10" />
          </div>

          {/* Window Body */}
          <div className="p-6 font-mono text-xs md:text-sm flex flex-col gap-4 text-ink-2 select-text">
            <div>
              <span className="text-accent">zharfanfw@dark-hour</span>
              <span className="text-ink">:</span>
              <span className="text-muted">~</span>
              <span className="text-ink">$ cat contact.json</span>
            </div>
            <div className="pl-4 border-l border-white/30 flex flex-col gap-2">
              <span>&#123;</span>
              <span className="pl-4">
                <span className="text-accent">"status"</span>: <span className="text-ink">"Available for Projects"</span>,
              </span>
              <span className="pl-4">
                <span className="text-accent">"email"</span>:{" "}
                <a
                  href="mailto:zharfanfw.dev@gmail.com"
                  className="text-ink hover:text-accent transition-colors underline decoration-accent/30 hover:decoration-accent"
                >
                  "zharfanfw.dev@gmail.com"
                </a>,
              </span>
              <span className="pl-4">
                <span className="text-accent">"github"</span>:{" "}
                <a
                  href="https://github.com/zharfanfw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink hover:text-accent transition-colors underline decoration-accent/30 hover:decoration-accent"
                >
                  "github.com/zharfanfw"
                </a>,
              </span>
              <span className="pl-4">
                <span className="text-accent">"linkedin"</span>:{" "}
                <a
                  href="https://linkedin.com/in/zharfanfw"
                  className="text-ink hover:text-accent transition-colors underline decoration-accent/30 hover:decoration-accent"
                >
                  "Zharfan Faza Wibawa"
                </a>
              </span>
              <span>&#125;</span>
            </div>
            <div className="animate-pulse w-2 h-4 bg-accent mt-2" />
          </div>
        </MotionReveal>
      </div>
    </DiagonalSection>
  );
}
