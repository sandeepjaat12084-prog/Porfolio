import { motion } from "framer-motion";
import { ArrowDown, Mail, MapPin } from "lucide-react";

import { GitHubIcon, LinkedInIcon } from "@/components/portfolio/brand-icons";
import { personalInfo } from "@/data/portfolio";
import { socialLinks } from "@/data/social-links";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20"
    >
      {/* Background subtle grid and restrained ambient light */}
      <div
        className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,black,transparent)] opacity-70"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 left-1/2 -z-10 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          {/* Left Column: Intro & Details */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col"
          >
            {/* Status Badge */}
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 font-mono text-xs font-medium text-primary">
                <span
                  className="h-2 w-2 rounded-full bg-primary animate-pulse"
                  aria-hidden="true"
                />
                {personalInfo.status}
              </span>
            </motion.div>

            {/* Small introduction */}
            <motion.p
              variants={item}
              className="mt-6 font-mono text-sm tracking-wide text-muted-foreground sm:text-base"
            >
              Hello, I'm
            </motion.p>

            {/* Main Name Heading */}
            <motion.h1
              id="hero-heading"
              variants={item}
              className="mt-1 font-display text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
            >
              Sandeep <span className="text-gradient">Jaat</span>
            </motion.h1>

            {/* Primary Role */}
            <motion.p
              variants={item}
              className="mt-4 font-display text-xl font-semibold text-foreground/90 sm:text-2xl"
            >
              {personalInfo.headline}
            </motion.p>

            {/* Supporting Roles */}
            <motion.p
              variants={item}
              className="mt-2 font-mono text-xs text-primary font-medium sm:text-sm"
            >
              {personalInfo.supportingRoles}
            </motion.p>

            {/* Quick Credibility Pill */}
            <motion.div variants={item} className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-md border border-border bg-secondary/40 px-2.5 py-1 font-mono text-[11px] text-foreground/90">
                ⚡ 500+ DSA/CP
              </span>
              <span className="rounded-md border border-border bg-secondary/40 px-2.5 py-1 font-mono text-[11px] text-foreground/90">
                🏆 1650+ @ LeetCode
              </span>
              <span className="rounded-md border border-border bg-secondary/40 px-2.5 py-1 font-mono text-[11px] text-foreground/90">
                🎯 Pupil @ Codeforces
              </span>
              <span className="rounded-md border border-border bg-secondary/40 px-2.5 py-1 font-mono text-[11px] text-foreground/90">
                ⭐ 2⭐ CodeChef
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={item}
              className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base"
            >
              {personalInfo.intro}
            </motion.p>

            {/* Action Buttons */}
            <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:brightness-110 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-secondary/60 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Social and Location meta */}
            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground"
            >
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                aria-label="Sandeep Jaat on GitHub"
              >
                <GitHubIcon className="h-4 w-4" />
                <span>GitHub</span>
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                aria-label="Sandeep Jaat on LinkedIn"
              >
                <LinkedInIcon className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${socialLinks.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                aria-label="Email Sandeep Jaat"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>Email</span>
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                <span>{personalInfo.location}</span>
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column: Actual Uploaded Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Subtle ambient border glow */}
              <div
                className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary/30 via-primary/10 to-transparent blur-md opacity-60 transition duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />

              {/* Photo Frame Container */}
              <div className="relative h-72 w-72 sm:h-84 sm:w-84 md:h-96 md:w-96 overflow-hidden rounded-3xl border border-border/80 bg-card p-2 shadow-soft">
                <img
                  src="/sandeep-jaat.jpg"
                  alt="Sandeep Jaat - Computer Science and Engineering Student"
                  className="h-full w-full rounded-2xl object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                  loading="eager"
                />
                <div className="pointer-events-none absolute inset-x-2 bottom-2 rounded-b-2xl bg-gradient-to-t from-background/90 via-background/30 to-transparent p-4">
                  <p className="font-display text-sm font-semibold text-foreground">Sandeep Jaat</p>
                  <p className="font-mono text-xs text-primary">
                    {personalInfo.education.shortInstitute}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          aria-label="Scroll to About section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mx-auto mt-14 hidden w-fit items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none sm:flex"
        >
          <ArrowDown className="h-5 w-5 animate-bounce" aria-hidden="true" />
        </motion.a>
      </div>
    </section>
  );
}
