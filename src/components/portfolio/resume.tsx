import { motion } from "framer-motion";
import { Download, FileText, CheckCircle2 } from "lucide-react";

import { Section, SectionHeading } from "@/components/portfolio/section";

export function Resume() {
  const resumeUrl = "/resume.pdf";

  return (
    <Section id="resume" labelledBy="resume-heading">
      <SectionHeading
        eyebrow="Curriculum Vitae"
        title="Resume"
        description="A concise overview of my education, technical skills, projects, and problem-solving experience."
        id="resume-heading"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="glass shadow-soft max-w-3xl rounded-2xl border border-border p-6 sm:p-8"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
              <FileText className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-display text-lg font-bold text-foreground">
                Sandeep Jaat — Resume
              </h3>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                Computer Science and Engineering • B.Tech NIT Jalandhar
              </p>
            </div>
          </div>

          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Sandeep_Jaat_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:brightness-110 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download Resume
          </a>
        </div>

        <div className="mt-6 border-t border-border pt-5">
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-3">
            Summary Highlights:
          </p>
          <ul className="grid gap-2 sm:grid-cols-2 text-xs text-muted-foreground">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
              <span>400+ DSA Problems & 100+ Codeforces Solved</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
              <span>B.Tech in CSE at NIT Jalandhar ('29)</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
              <span>Full-Stack Development (React, Node, Express, MongoDB)</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
              <span>Strong foundation in C++ and Core CS concepts</span>
            </li>
          </ul>
        </div>
      </motion.div>
    </Section>
  );
}
