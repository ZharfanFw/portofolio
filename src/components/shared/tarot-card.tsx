"use client";

import { useState } from "react";

type TarotCardProps = {
  numeral: string;
  arcanaName: string;
  projectName: string;
  projectDesc: string;
};

export function TarotCard({
  numeral,
  arcanaName,
  projectName,
  projectDesc,
}: TarotCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="aspect-[2/3] cursor-pointer [perspective:1000px]"
      onClick={() => setFlipped((f) => !f)}
    >
      <div
        className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d]"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-lg border border-silver-400/30 bg-navy-900 [backface-visibility:hidden]">
          <span className="font-heading text-3xl">{numeral}</span>
          <span className="font-body text-xs uppercase tracking-wide text-silver-400">
            {arcanaName}
          </span>
        </div>

        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-lg border border-accent-400/40 bg-accent-600 p-4 text-center [backface-visibility:hidden]"
          style={{ transform: "rotateY(180deg)" }}
        >
          <span className="font-heading text-sm">{projectName}</span>
          <span className="font-body text-xs text-navy-950/80">
            {projectDesc}
          </span>
        </div>
      </div>
    </div>
  );
}
