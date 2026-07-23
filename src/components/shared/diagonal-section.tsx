import { ReactNode } from "react";

type DiagonalSectionProps = {
  children: ReactNode;
  id?: string;
  bgClassName?: string;
  cutTop?: boolean;
  cutBottom?: boolean;
  cutSize?: number;
  direction?: "left" | "right";
};

export function DiagonalSection({
  children,
  id,
  bgClassName = "bg-navy-950",
  cutTop = true,
  cutBottom = false,
  cutSize = 60,
  direction = "left",
}: DiagonalSectionProps) {
  const isLeft = direction === "left";

  const clipPath = isLeft
    ? `polygon(
        0 ${cutTop ? cutSize : 0}px,
        100% 0,
        100% calc(100% - ${cutBottom ? cutSize : 0}px),
        0 100%
      )`
    : `polygon(
        0 0,
        100% ${cutTop ? cutSize : 0}px,
        100% calc(100% - ${cutBottom ? cutSize : 0}px),
        0 100%
      )`;

  return (
    <section 
      id={id} 
      className="relative"
      style={{
        marginTop: cutTop ? `-${cutSize}px` : 0,
      }}
    >
      <div
        className={`absolute inset-0 ${bgClassName}`}
        style={{ clipPath }}
      />

      {/* Top Glowing Diagonal Cyan Seam Line */}
      {cutTop && (
        <div 
          className="absolute top-0 left-0 right-0 z-20 pointer-events-none overflow-hidden"
          style={{ height: `${cutSize}px` }}
        >
          <svg viewBox="0 0 1000 60" preserveAspectRatio="none" className="w-full h-full">
            <line
              x1="0"
              y1={isLeft ? "60" : "0"}
              x2="1000"
              y2={isLeft ? "0" : "60"}
              stroke="var(--color-accent)"
              strokeWidth="2.5"
              className="opacity-70 p3-glow"
            />
          </svg>
        </div>
      )}

      <div
        className="relative z-10"
        style={{
          paddingTop: cutTop ? cutSize + 85 : 60,
          paddingBottom: cutSize + 80,
        }}
      >
        <div className="mx-auto max-w-5xl px-6">{children}</div>
      </div>
    </section>
  );
}
