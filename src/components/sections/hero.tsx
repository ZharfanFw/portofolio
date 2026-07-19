import { DiagonalSection } from "@/components/shared/diagonal-section";

export function Hero() {
  return (
    <DiagonalSection id="hero" cutTop={false} bgClassName="bg-navy-900">
      <div className="flex min-h-[60vh] flex-col justify-center gap-4">
        <h1 className="font-heading text-5xl uppercase italic">Zharfan</h1>
        <p className="font-body text-lg text-silver-400">
          full-stack developer in training
        </p>
      </div>
    </DiagonalSection>
  );
}
