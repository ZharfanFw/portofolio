import { ReactNode } from "react";

type DiagonalSectionProps = {
  children: ReactNode;
  id?: string;
  bgClassName?: string;
  cutTop?: boolean;
  cutBottom?: boolean;
  cutSize?: number;
};

export function DiagonalSection({
  children,
  id,
  bgClassName = "bg-navy-950",
  cutTop = true,
  cutBottom = true,
  cutSize = 60,
}: DiagonalSectionProps) {
  const clipPath = `polygon(
    0 ${cutTop ? cutSize : 0}px,
    100% 0,
    100% calc(100% - ${cutBottom ? cutSize : 0}px),
    0 100%
  )`;

  return (
    <section id={id} className="relative">
      <div
        className={`absolute inset-0 ${bgClassName}`}
        style={{ clipPath }}
      />
      <div
        className="relative z-10"
        style={{
          paddingTop: cutTop ? cutSize + 40 : 40,
          paddingBottom: cutBottom ? cutSize + 40 : 40,
        }}
      >
        <div className="mx-auto max-w-5xl px-6">{children}</div>
      </div>
    </section>
  );
}
