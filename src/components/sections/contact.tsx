import { DiagonalSection } from "@/components/shared/diagonal-section";

export function Contact() {
  return (
    <DiagonalSection id="contact" cutBottom={false} bgClassName="bg-navy-900">
      <h2 className="font-heading mb-4 text-2xl uppercase italic">Contact</h2>
      <div className="font-body flex flex-col gap-2 text-silver-400">
        <a href="mailto:you@example.com" className="hover:text-accent-400">
          email@example.com
        </a>
        <a href="https://github.com" className="hover:text-accent-400">
          github
        </a>
      </div>
    </DiagonalSection>
  );
}
