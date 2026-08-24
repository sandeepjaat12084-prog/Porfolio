import { motion } from "framer-motion";
import { Award, CalendarRange, GraduationCap, MapPin, Sparkles, Trophy } from "lucide-react";

import { Section, SectionHeading } from "@/components/portfolio/section";
import { personalInfo } from "@/data/portfolio";

const milestoneIcons = [Trophy, Award, Sparkles];

export function Education() {
  const edu = personalInfo.education;
  const milestones = personalInfo.academicMilestones;

  return (
    <Section id="education" labelledBy="education-heading">
      <SectionHeading
        eyebrow="Academic Background"
        title="Education & Foundations"
        description="Formal university engineering education at NIT Jalandhar along with competitive academic milestones."
        id="education-heading"
      />

      <div className="space-y-6 max-w-4xl">
        {/* Primary University Card: NIT Jalandhar */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="glass shadow-soft rounded-2xl border border-border p-6 transition-colors hover:border-primary/40 sm:p-8"
        >
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
        </motion.article>

        {/* Academic & Entrance Foundation Cards: Below NIT Jalandhar */}
        <div>
          <h4 className="mb-3 font-display text-sm font-semibold tracking-wide text-foreground/90 uppercase text-xs text-muted-foreground flex items-center gap-2">
            <Trophy className="h-3.5 w-3.5 text-primary" />
            Competitive Entrance & Foundation
          </h4>

          <div className="grid gap-4 sm:grid-cols-3">
            {milestones.map((m, i) => {
              const Icon = milestoneIcons[i % milestoneIcons.length];
              return (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
                  whileHover={{ y: -3 }}
                  className="glass shadow-soft flex flex-col justify-between rounded-xl border border-border/80 bg-card/40 p-5 transition-colors hover:border-primary/40"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-primary">
                        <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                      </span>
                      <span className="rounded-md border border-primary/20 bg-primary/10 px-2 py-0.5 font-mono text-[11px] font-semibold text-primary">
                        {m.highlight}
                      </span>
                    </div>

                    <h5 className="mt-3 font-display text-base font-semibold text-foreground">
                      {m.title}
                    </h5>
                    <p className="mt-1 font-mono text-xs text-muted-foreground font-medium">
                      {m.badge}
                    </p>
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground border-t border-border/50 pt-2.5">
                    {m.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
