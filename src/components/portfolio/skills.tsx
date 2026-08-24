import { motion } from "framer-motion";
import { Braces, Code, Database, Layers, Wrench, type LucideIcon } from "lucide-react";

import { Section, SectionHeading } from "@/components/portfolio/section";
import { skillCategories, type SkillCategory } from "@/data/skills";

const iconMap: Record<SkillCategory["icon"], LucideIcon> = {
  fullstack: Layers,
  dsa: Code,
  database: Database,
  tools: Wrench,
};

export function Skills() {
  return (
    <Section id="skills" labelledBy="skills-heading">
      <SectionHeading
        eyebrow="Skills & Core Competencies"
        title="Technical Arsenal"
        description="The primary languages, engineering tools, database systems, and technologies I work with."
        id="skills-heading"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {skillCategories.map((category, i) => {
          const Icon = iconMap[category.icon] ?? Braces;
          return (
            <motion.article
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="glass shadow-soft group flex flex-col justify-between rounded-2xl border border-border p-6 transition-colors hover:border-primary/40 sm:p-7"
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary/10">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold tracking-tight text-foreground sm:text-lg">
                      {category.title}
                    </h3>
                    <p className="mt-0.5 text-xs text-muted-foreground">{category.description}</p>
                  </div>
                </div>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.li
                      key={skill}
                      whileHover={{ scale: 1.08, y: -2 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      className="cursor-default rounded-lg border border-border/80 bg-background/60 px-3 py-1.5 font-mono text-xs text-foreground/90 transition-colors group-hover:border-primary/30 hover:border-primary hover:bg-primary/10 hover:text-primary"
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
