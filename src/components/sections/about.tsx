import { DiagonalSection } from "@/components/shared/diagonal-section";

export function About() {
  return (
    <DiagonalSection id="about" bgClassName="bg-navy-900">
      <h2 className="font-heading mb-4 text-2xl uppercase italic">About</h2>
      <p className="font-body max-w-2xl text-silver-400">
        Isi bio singkat di sini. Bisa tambah stat bar (skill level) seperti
        yang dibahas di wireframe.
      </p>
    </DiagonalSection>
  );
}
