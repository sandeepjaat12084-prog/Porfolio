import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Cpu, Flame, Layers, Trophy, type LucideIcon } from "lucide-react";

import { Section, SectionHeading } from "@/components/portfolio/section";
import { codingPlatforms, codingStats, dsaTopics } from "@/data/coding";

const platformIcons: Record<string, LucideIcon> = {
  LeetCode: Code2,
  Codeforces: Trophy,
  CodeChef: Flame,
};

export function Coding() {
  return (
    <Section id="coding" labelledBy="coding-heading" className="relative">
      <SectionHeading
        eyebrow="Problem Solving Credibility"
        title="DSA & Competitive Programming"
        description="Consistent practice in algorithmic problem solving, pattern mastery, and competitive programming fundamentals."
        id="coding-heading"
      />

      {/* Primary Verified Metrics */}
      <div className="grid gap-5 sm:grid-cols-2 mb-10">
        {codingStats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: i * 0.1, ease: "easeOut" }}
            className="glass shadow-soft relative overflow-hidden rounded-2xl p-6 sm:p-7 transition-colors hover:border-primary/40"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold tracking-wider text-primary uppercase">
                Verified Metric
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                {i === 0 ? <Code2 className="h-4 w-4" /> : <Trophy className="h-4 w-4" />}
              </span>
            </div>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                {stat.value}
              </span>
            </div>
            <h3 className="mt-1 font-display text-lg font-semibold text-foreground">
              {stat.label}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              {stat.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Platform Cards */}
      <div className="mb-12">
        <h3 className="mb-4 font-display text-base font-semibold tracking-tight text-foreground sm:text-lg flex items-center gap-2">
          <Layers className="h-4 w-4 text-primary" />
          Coding Platforms
        </h3>
        <div className="grid gap-5 sm:grid-cols-3">
          {codingPlatforms.map((profile, i) => {
            const Icon = platformIcons[profile.platform] ?? Code2;
            const card = (
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className="glass shadow-soft group flex h-full flex-col rounded-2xl p-5 sm:p-6 transition-colors hover:border-primary/40"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary/10">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  {profile.url ? (
                    <ArrowUpRight
                      className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary"
                      aria-hidden="true"
                    />
                  ) : (
                    <span className="rounded-full bg-secondary px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground">
                      Active
                    </span>
                  )}
                </div>

                <h4 className="mt-4 font-display text-base font-semibold text-foreground">
                  {profile.platform}
                </h4>
                <p className="mt-1 font-mono text-xs text-primary font-medium">{profile.focus}</p>

                <p className="mt-3 flex-1 text-xs leading-relaxed text-muted-foreground">
                  {profile.description}
                </p>

                <div className="mt-4 border-t border-border pt-3">
                  <dl className="grid grid-cols-2 gap-2 text-xs">
                    {profile.metrics.map((m) => (
                      <div key={m.label}>
                        <dt className="text-[11px] text-muted-foreground font-mono">{m.label}</dt>
                        <dd className="font-semibold text-foreground mt-0.5">{m.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </motion.article>
            );

            return (
              <div key={profile.platform}>
                {profile.url ? (
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full rounded-2xl focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                    aria-label={`${profile.platform} profile`}
                  >
                    {card}
                  </a>
                ) : (
                  card
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Core DSA Areas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="glass shadow-soft rounded-2xl p-6 sm:p-7 border border-border"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-4 mb-5">
          <div className="flex items-center gap-2">
            <Cpu className="h-4 w-4 text-primary" />
            <h3 className="font-display text-base font-semibold text-foreground">
              Core DSA Practice Areas
            </h3>
          </div>
          <span className="font-mono text-xs text-muted-foreground">18 Topics</span>
        </div>

        <ul className="flex flex-wrap gap-2.5">
          {dsaTopics.map((topic) => (
            <li
              key={topic}
              className="rounded-lg border border-border/80 bg-secondary/40 px-3 py-1.5 font-mono text-xs text-foreground/90 transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
            >
              {topic}
            </li>
          ))}
        </ul>
      </motion.div>
    </Section>
  );
}
