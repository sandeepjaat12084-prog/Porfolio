import { Mail, Terminal } from "lucide-react";

import { GitHubIcon, LinkedInIcon } from "@/components/portfolio/brand-icons";
import { personalInfo } from "@/data/portfolio";
import { socialLinks } from "@/data/social-links";

export function Footer() {
  return (
    <footer className="border-t border-border py-10 bg-background/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <a
            href="#home"
            className="flex items-center gap-2 rounded-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-secondary text-primary">
              <Terminal className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
            <span className="font-display text-sm font-semibold text-foreground">
              {personalInfo.name}
            </span>
          </a>
          <p className="text-xs text-muted-foreground font-mono">{personalInfo.headline}</p>
        </div>

        <p className="font-mono text-xs text-muted-foreground text-center">
          © 2026 {personalInfo.name}. All rights reserved.
        </p>

        <ul className="flex items-center gap-5">
          <li>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sandeep on GitHub"
              className="rounded-sm text-muted-foreground transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              <GitHubIcon className="h-4.5 w-4.5" />
            </a>
          </li>
          <li>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sandeep on LinkedIn"
              className="rounded-sm text-muted-foreground transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              <LinkedInIcon className="h-4.5 w-4.5" />
            </a>
          </li>
          <li>
            <a
              href={`mailto:${socialLinks.email}`}
              aria-label="Email Sandeep"
              className="rounded-sm text-muted-foreground transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              <Mail className="h-4.5 w-4.5" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
