"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function DarkHourIntro({ onComplete }: { onComplete: () => void }) {
  const [seconds, setSeconds] = useState(55);
  const [isDarkHour, setIsDarkHour] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Lock scroll during intro
    document.body.style.overflow = "hidden";

    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev >= 59) {
          clearInterval(interval);
          setIsDarkHour(true);

          // After showing 24:00:00 for 1.2 seconds, exit intro
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => {
              document.body.style.overflow = "";
              onComplete();
            }, 800);
          }, 1200);

          return 0; // 24:00:00 (represented by 00 seconds)
        }
        return prev + 1;
      });
    }, 800);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  const formattedSeconds = seconds === 0 ? "00" : seconds.toString().padStart(2, "0");
  const displayTime = isDarkHour ? "24:00:00" : `23:59:${formattedSeconds}`;
  const secondRotation = (seconds / 60) * 360;

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="dark-hour-splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[9999] bg-paper flex flex-col items-center justify-center select-none overflow-hidden"
        >
          {/* Background Radial Glow */}
          <motion.div
            animate={{
              scale: isDarkHour ? [1, 1.4, 1.2] : [1, 1.1, 1],
              opacity: isDarkHour ? [0.3, 0.8, 0.4] : [0.15, 0.25, 0.15],
            }}
            transition={{ duration: isDarkHour ? 0.8 : 2, repeat: isDarkHour ? 0 : Infinity }}
            className="absolute w-[500px] h-[500px] rounded-full bg-accent/20 blur-3xl pointer-events-none"
          />

          {/* Clock Container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={
              isDarkHour
                ? { scale: [1, 1.12, 1], opacity: 1 }
                : { scale: 1, opacity: 1 }
            }
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col items-center gap-6"
          >
            {/* Massive SVG Clock */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              <svg viewBox="0 0 200 200" className="w-full h-full relative z-10">
                {/* Clock Face Background */}
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="var(--color-paper-3)"
                  stroke="var(--color-accent)"
                  strokeWidth="3"
                  className={isDarkHour ? "p3-glow-border" : ""}
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

                {/* Hour Markers */}
                <text x="100" y="32" textAnchor="middle" className="font-heading text-sm font-bold fill-ink select-none tracking-tighter">XII</text>
                <text x="174" y="105" textAnchor="middle" className="font-heading text-sm font-bold fill-ink select-none">III</text>
                <text x="100" y="178" textAnchor="middle" className="font-heading text-sm font-bold fill-ink select-none">VI</text>
                <text x="26" y="105" textAnchor="middle" className="font-heading text-sm font-bold fill-ink select-none">IX</text>

                {/* Ticks */}
                {[30, 60, 120, 150, 210, 240, 300, 330].map((deg) => {
                  const rad = (deg * Math.PI) / 180;
                  const x1 = 100 + 72 * Math.sin(rad);
                  const y1 = 100 - 72 * Math.cos(rad);
                  const x2 = 100 + 78 * Math.sin(rad);
                  const y2 = 100 - 78 * Math.cos(rad);
                  return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--color-muted)" strokeWidth="1" />;
                })}

                {/* Butterfly Silhouettes */}
                <motion.path
                  d="M 65 65 Q 60 55 52 62 Q 48 68 56 70 Q 52 76 60 74 Q 63 70 65 65 Z"
                  fill="var(--color-accent)"
                  animate={{ opacity: isDarkHour ? 0.8 : 0.2 }}
                />
                <motion.path
                  d="M 135 135 Q 140 125 148 132 Q 152 138 144 140 Q 148 146 140 144 Q 137 140 135 135 Z"
                  fill="var(--color-accent)"
                  animate={{ opacity: isDarkHour ? 0.8 : 0.25 }}
                  transform="rotate(15, 135, 135)"
                />

                {/* Hands */}
                <g transform="translate(100, 100)">
                  {/* Hour Hand pointing near XII */}
                  <line x1="0" y1="0" x2="0" y2="-42" stroke="var(--color-ink)" strokeWidth="3.5" strokeLinecap="round" />
                  {/* Minute Hand pointing near 59m */}
                  <line
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="-62"
                    stroke="var(--color-ink)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    transform={isDarkHour ? "rotate(0)" : "rotate(-6)"}
                  />
                  {/* Ticking Second Hand */}
                  <line
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="-72"
                    stroke="var(--color-accent)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    style={{ transformOrigin: "0 0" }}
                    transform={`rotate(${secondRotation})`}
                  />
                  <circle cx="0" cy="0" r="4.5" fill="var(--color-paper)" stroke="var(--color-accent)" strokeWidth="2" />
                </g>
              </svg>

              <div className="absolute inset-4 rounded-full border border-accent/20 pointer-events-none p3-glow-border" />
            </div>

            {/* Digital Clock Readout & Subtitle */}
            <div className="flex flex-col items-center gap-2">
              <motion.span
                key={displayTime}
                initial={{ opacity: 0.7, y: 3 }}
                animate={{ opacity: 1, y: 0 }}
                className={`font-mono text-3xl sm:text-4xl font-bold tracking-widest ${
                  isDarkHour ? "text-accent p3-glow scale-110" : "text-ink"
                }`}
              >
                {displayTime}
              </motion.span>

              <motion.span
                animate={{ opacity: isDarkHour ? [0.6, 1, 0.6] : 0.7 }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="font-heading text-xs sm:text-sm uppercase tracking-widest text-accent font-semibold"
              >
                {isDarkHour ? "THE DARK HOUR HAS ARRIVED" : "APPROACHING THE DARK HOUR..."}
              </motion.span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
