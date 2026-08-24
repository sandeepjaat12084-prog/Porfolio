import { ArrowUpRight, Mail, Phone } from "lucide-react";

import { GitHubIcon, LinkedInIcon } from "@/components/portfolio/brand-icons";
import { Section, SectionHeading } from "@/components/portfolio/section";
import { socialLinks } from "@/data/social-links";

const contacts = [
  {
    label: "Email",
    value: socialLinks.email,
    href: `mailto:${socialLinks.email}`,
    icon: Mail,
    external: false,
    description: "Best for opportunities, collaborations, and formal inquiries.",
  },
  {
    label: "Phone",
    value: socialLinks.phoneDisplay,
    href: socialLinks.phoneUrl,
    icon: Phone,
    external: false,
    description: "Direct phone contact.",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/sandeep-jaat",
    href: socialLinks.linkedin,
    icon: LinkedInIcon,
    external: true,
    description: "Professional networking and connect requests.",
  },
  {
    label: "GitHub",
    value: "github.com/sandeepjaat12084-prog",
    href: socialLinks.github,
    icon: GitHubIcon,
    external: true,
    description: "Code repositories and open-source contributions.",
  },
];

export function Contact() {
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
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="group flex flex-col justify-between rounded-2xl border border-border/80 bg-background/50 p-5 transition-all hover:border-primary/40 hover:bg-secondary/40 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary/10">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      {item.external ? (
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                      ) : null}
                    </div>
                    <span className="mt-4 block font-mono text-xs font-semibold tracking-wider text-primary uppercase">
                      {item.label}
                    </span>
                    <p className="mt-1 font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                  <p className="mt-3 text-xs text-muted-foreground">{item.description}</p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
