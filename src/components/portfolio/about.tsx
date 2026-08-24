import { BookOpen, Code, GraduationCap, MapPin } from "lucide-react";

import { Section, SectionHeading } from "@/components/portfolio/section";
import { aboutParagraphs, personalInfo } from "@/data/portfolio";

const highlights = [
  {
    icon: GraduationCap,
    label: "Institution",
    value: personalInfo.education.institute,
  },
  {
    icon: BookOpen,
    label: "Degree & Year",
    value: `${personalInfo.education.degree}, ${personalInfo.education.currentYear}`,
  },
  {
    icon: Code,
    label: "Branch",
    value: personalInfo.education.branch,
  },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
  },
];

export function About() {
  return (
    <Section id="about" labelledBy="about-heading">
      <SectionHeading
        eyebrow="Engineering Background"
        title="About Me"
        description="A look at my academic foundation, current engineering focus, and software interests."
        id="about-heading"
      />
      <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr] lg:gap-12">
        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {aboutParagraphs.map((paragraph, index) => (
            <p
              key={index}
              className="bg-card/30 rounded-xl border border-border/40 p-4 leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <ul className="space-y-3">
          {highlights.map(({ icon: Icon, label, value }) => (
            <li
              key={label}
              className="glass shadow-soft flex items-start gap-4 rounded-xl p-4 transition-colors hover:border-primary/30"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <span className="block font-mono text-[11px] font-medium tracking-wider text-muted-foreground uppercase">
                  {label}
                </span>
                <span className="mt-0.5 block text-sm font-semibold text-foreground">{value}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
