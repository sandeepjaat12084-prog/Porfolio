import { motion } from "framer-motion";
import { CalendarRange, GraduationCap, MapPin } from "lucide-react";

import { Section, SectionHeading } from "@/components/portfolio/section";
import { personalInfo } from "@/data/portfolio";

export function Education() {
  const edu = personalInfo.education;

  return (
    <Section id="education" labelledBy="education-heading">
      <SectionHeading
        eyebrow="Academic Background"
        title="Education"
        description="Formal engineering education and university coursework in Computer Science."
        id="education-heading"
      />

      <div className="relative border-l-2 border-border/80 pl-6 sm:pl-8 max-w-3xl">
        <motion.article
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative"
        >
          {/* Timeline Dot */}
          <span
            className="absolute top-6 -left-[31px] flex h-4 w-4 items-center justify-center rounded-full border-2 border-primary bg-background sm:-left-[39px]"
            aria-hidden="true"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          </span>

          <div className="glass shadow-soft rounded-2xl border border-border p-6 transition-colors hover:border-primary/40 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                  <GraduationCap className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground sm:text-xl">
                    {edu.institute}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-primary">
                    {edu.degree} · {edu.branch}
                  </p>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    Jalandhar, Punjab, India
                  </p>
                </div>
              </div>
              <span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 font-mono text-xs font-semibold text-primary">
                Current: {edu.currentYear}
              </span>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-2 font-mono">
                <CalendarRange className="h-4 w-4 text-primary" aria-hidden="true" />
                {edu.startYear} – {edu.endYear}
              </span>
              <span className="font-mono text-foreground font-medium">
                Expected Graduation: {edu.endYear}
              </span>
            </div>
          </div>
        </motion.article>
      </div>
    </Section>
  );
}
