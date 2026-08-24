import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, FolderGit2, Sparkles } from "lucide-react";

import { GitHubIcon } from "@/components/portfolio/brand-icons";
import { Section, SectionHeading } from "@/components/portfolio/section";
import { projects, type Project } from "@/data/projects";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="glass shadow-soft group flex h-full flex-col overflow-hidden rounded-2xl border border-border transition-colors hover:border-primary/40"
    >
      {/* Optional Preview Image or Header Banner */}
      {project.image ? (
        <div className="relative h-48 overflow-hidden border-b border-border bg-secondary/40">
          <img
            src={project.image}
            alt={`Preview of ${project.title}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        {/* Title & Tagline */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-xl font-bold tracking-tight text-foreground">
              {project.title}
            </h3>
            {project.tagline ? (
              <p className="mt-1 font-mono text-xs text-primary">{project.tagline}</p>
            ) : null}
          </div>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
            <FolderGit2 className="h-5 w-5" aria-hidden="true" />
          </span>
        </div>

        {/* Problem & Solution */}
        <div className="mt-4 space-y-3 text-xs leading-relaxed sm:text-sm">
          <div className="rounded-lg bg-background/50 p-3 border border-border/40">
            <span className="font-mono text-[11px] font-semibold text-primary uppercase block">
              Problem:
            </span>
            <p className="mt-0.5 text-muted-foreground">{project.problem}</p>
          </div>

          <div className="rounded-lg bg-background/50 p-3 border border-border/40">
            <span className="font-mono text-[11px] font-semibold text-primary uppercase block">
              Solution:
            </span>
            <p className="mt-0.5 text-muted-foreground">{project.solution}</p>
          </div>

          {project.impact ? (
            <div className="rounded-lg bg-background/50 p-3 border border-border/40">
              <span className="font-mono text-[11px] font-semibold text-primary uppercase block">
                Impact:
              </span>
              <p className="mt-0.5 text-muted-foreground">{project.impact}</p>
            </div>
          ) : null}
        </div>

        {/* Key Work */}
        {project.keyWork && project.keyWork.length > 0 ? (
          <div className="mt-4">
            <span className="font-mono text-[11px] font-semibold text-foreground uppercase tracking-wider block mb-2">
              Key Work
            </span>
            <ul className="space-y-1.5">
              {project.keyWork.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {/* Tech Stack */}
        <div className="mt-5">
          <ul className="flex flex-wrap gap-1.5" aria-label="Technology stack">
            {project.tech.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* Real Links Only */}
        {project.github || project.demo ? (
          <div className="mt-6 flex items-center gap-5 border-t border-border pt-4 text-sm">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-sm font-medium text-muted-foreground transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                <GitHubIcon className="h-4 w-4" />
                GitHub
              </a>
            ) : null}
            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-sm font-medium text-muted-foreground transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                Live Demo
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}

function EmptyProjects() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "Full-Stack Web App",
          category: "Web Engineering",
          description:
            "Production-ready architectures with modern frontend frameworks, secure backend APIs, and database modeling.",
        },
        {
          title: "Algorithmic & Systems Project",
          category: "C++ / Systems",
          description:
            "High-performance implementations focusing on optimized data structures, concurrency, and memory efficiency.",
        },
        {
          title: "Developer Tool / Automation",
          category: "Tools & Utilities",
          description:
            "Utility tools and scripts solving practical developer friction and workflows.",
        },
      ].map((card, i) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
          className="glass shadow-soft flex flex-col justify-between rounded-2xl border border-border/80 p-6 sm:p-7"
        >
          <div>
            <div className="flex items-center justify-between">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary">
                <Sparkles className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-mono text-xs text-primary font-medium">{card.category}</span>
            </div>
            <h4 className="mt-4 font-display text-base font-semibold text-foreground">
              {card.title}
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{card.description}</p>
          </div>

          <div className="mt-6 border-t border-border pt-4">
            <p className="font-mono text-[11px] text-muted-foreground">
              Configured via <span className="text-primary">src/data/projects.ts</span>
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function Projects() {
  return (
    <Section id="projects" labelledBy="projects-heading">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Featured Projects"
        description="Structured software projects highlighting problem definition, technical architecture, and implementation details."
        id="projects-heading"
      />
      {projects.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      ) : (
        <EmptyProjects />
      )}
    </Section>
  );
}
