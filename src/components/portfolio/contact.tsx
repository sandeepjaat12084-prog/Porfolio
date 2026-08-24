import { useState } from "react";
import { ArrowUpRight, Check, Copy, Mail, Phone } from "lucide-react";

import { GitHubIcon, LinkedInIcon } from "@/components/portfolio/brand-icons";
import { Section, SectionHeading } from "@/components/portfolio/section";
import { socialLinks } from "@/data/social-links";

const contacts = [
  {
    label: "Email",
    value: socialLinks.email,
    rawCopy: socialLinks.email,
    href: `mailto:${socialLinks.email}`,
    icon: Mail,
    external: false,
    canCopy: true,
    description: "Best for opportunities, collaborations, and formal inquiries.",
  },
  {
    label: "Phone",
    value: socialLinks.phoneDisplay,
    rawCopy: "+918769047804",
    href: socialLinks.phoneUrl,
    icon: Phone,
    external: false,
    canCopy: true,
    description: "Direct phone contact.",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/sandeep-jaat",
    rawCopy: socialLinks.linkedin,
    href: socialLinks.linkedin,
    icon: LinkedInIcon,
    external: true,
    canCopy: false,
    description: "Professional networking and connect requests.",
  },
  {
    label: "GitHub",
    value: "github.com/sandeepjaat12084-prog",
    rawCopy: socialLinks.github,
    href: socialLinks.github,
    icon: GitHubIcon,
    external: true,
    canCopy: false,
    description: "Code repositories and open-source contributions.",
  },
];

export function Contact() {
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);

  const handleCopy = (e: React.MouseEvent, label: string, text: string) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedLabel(label);
    setTimeout(() => {
      setCopiedLabel(null);
    }, 2000);
  };

  return (
    <Section id="contact" labelledBy="contact-heading">
      <div className="glass shadow-soft relative overflow-hidden rounded-3xl p-6 sm:p-10 border border-border">
        <div
          className="bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_80%_at_50%_0%,black,transparent)]"
          aria-hidden="true"
        />
        <div className="relative">
          <SectionHeading
            eyebrow="Get In Touch"
            title="Let's Connect"
            description="Whether you have an internship opportunity, project collaboration, or question, feel free to reach out through any of the channels below."
            id="contact-heading"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {contacts.map((item) => {
              const Icon = item.icon;
              const isCopied = copiedLabel === item.label;

              return (
                <div
                  key={item.label}
                  className="group relative flex flex-col justify-between rounded-2xl border border-border/80 bg-background/50 p-5 transition-all hover:border-primary/40 hover:bg-secondary/40"
                >
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="absolute inset-0 z-0 rounded-2xl focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                    aria-label={`Open ${item.label}`}
                  />

                  <div className="relative z-10 pointer-events-none">
                    <div className="flex items-center justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary/10">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>

                      <div className="flex items-center gap-2 pointer-events-auto">
                        {item.canCopy ? (
                          <button
                            type="button"
                            onClick={(e) => handleCopy(e, item.label, item.rawCopy)}
                            className="flex items-center gap-1 rounded-lg border border-border/80 bg-secondary/80 px-2.5 py-1 font-mono text-[11px] text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                            title={`Copy ${item.label}`}
                          >
                            {isCopied ? (
                              <>
                                <Check className="h-3 w-3 text-emerald-400" />
                                <span className="text-emerald-400 font-semibold">Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="h-3 w-3" />
                                <span>Copy</span>
                              </>
                            )}
                          </button>
                        ) : null}

                        {item.external ? (
                          <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                        ) : null}
                      </div>
                    </div>

                    <span className="mt-4 block font-mono text-xs font-semibold tracking-wider text-primary uppercase">
                      {item.label}
                    </span>
                    <p className="mt-1 font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>

                  <p className="relative z-10 mt-3 text-xs text-muted-foreground pointer-events-none">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
