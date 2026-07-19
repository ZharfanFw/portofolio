import { DiagonalSection } from "@/components/shared/diagonal-section";

const skills = ["Next.js", "Elysia", "Drizzle ORM", "PostgreSQL", "Docker", "Tailwind"];

export function Skills() {
  return (
    <DiagonalSection id="skills" bgClassName="bg-navy-950">
      <h2 className="font-heading mb-6 text-2xl uppercase italic">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((s) => (
          <span
            key={s}
            className="font-body rounded-full border border-silver-400/30 px-4 py-1 text-sm text-silver-400"
          >
            {s}
          </span>
        ))}
      </div>
    </DiagonalSection>
  );
}
