import { DiagonalSection } from "@/components/shared/diagonal-section";
import { TarotCard } from "@/components/shared/tarot-card";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <DiagonalSection id="projects" bgClassName="bg-navy-950">
      <h2 className="font-heading mb-8 text-2xl uppercase italic">
        Projects
      </h2>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
        {projects.map((p) => (
          <TarotCard
            key={p.slug}
            numeral={p.numeral}
            arcanaName={p.arcanaName}
            projectName={p.name}
            projectDesc={p.desc}
          />
        ))}
      </div>
    </DiagonalSection>
  );
}
