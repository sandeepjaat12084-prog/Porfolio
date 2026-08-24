import { r as __toESM } from "../_runtime.mjs";
import {
  n as require_jsx_runtime,
  r as require_react,
} from "../_libs/react+tanstack__react-query.mjs";
import {
  n as MotionConfig,
  r as AnimatePresence,
  t as motion,
} from "../_libs/framer-motion+[...].mjs";
import {
  C as Braces,
  D as ArrowDown,
  E as ArrowUpRight,
  S as CalendarRange,
  T as Award,
  _ as Database,
  a as Target,
  b as Code,
  c as Menu,
  d as Layers,
  f as GraduationCap,
  g as Download,
  h as FileText,
  i as Terminal,
  l as MapPin,
  m as Flame,
  n as Wrench,
  o as Sparkles,
  p as FolderGit2,
  r as Trophy,
  s as Phone,
  t as X,
  u as Mail,
  v as Cpu,
  w as BookOpen,
  x as CircleCheck,
  y as CodeXml,
} from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C5-3UiYP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function Section({ id, children, className, labelledBy }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
    id,
    "aria-labelledby": labelledBy,
    className: cn("scroll-mt-24 py-16 sm:py-24", className),
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
      initial: {
        opacity: 0,
        y: 32,
      },
      whileInView: {
        opacity: 1,
        y: 0,
      },
      viewport: {
        once: true,
        margin: "-60px",
      },
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
      className: "mx-auto w-full max-w-6xl px-4 sm:px-6",
      children,
    }),
  });
}
function SectionHeading({ eyebrow, title, description, id }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "mb-10 sm:mb-14",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        className: "font-mono text-xs tracking-[0.25em] text-primary uppercase",
        children: eyebrow,
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
        id,
        className:
          "mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl",
        children: title,
      }),
      description
        ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
            className: "mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base",
            children: description,
          })
        : null,
    ],
  });
}
/**
 * Personal information — Sandeep Jaat Portfolio
 */
var personalInfo = {
  name: "Sandeep Jaat",
  firstName: "Sandeep",
  pronouns: "He/Him",
  location: "Jaipur, Rajasthan, India",
  headline: "Computer Science & Engineering Student",
  status: "Open to Internship Opportunities",
  supportingRoles: "MERN-Stack Developer • Competitive Programmer • CSE '29 @ NITJ",
  credentialsLine:
    "CSE '29 @ NITJ | 1650+ @ LeetCode | Pupil @ Codeforces | 2⭐ @ CodeChef | 5⭐ @ HackerRank | 500+ DSA/CP",
  roles: [
    "Computer Science & Engineering Student",
    "MERN-Stack Web Developer",
    "Competitive Programmer (Pupil @ CF)",
    "DSA Problem Solver (500+ Solved)",
  ],
  intro:
    "I'm a second-year Computer Science student at NIT Jalandhar with a strong interest in software engineering, full-stack development, and competitive programming. I enjoy solving challenging algorithmic problems and building scalable, user-centric applications that solve real-world problems.",
  education: {
    institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
    shortInstitute: "NIT Jalandhar",
    degree: "Bachelor of Technology (B.Tech)",
    branch: "Computer Science and Engineering",
    currentYear: "2nd Year",
    startYear: 2025,
    endYear: 2029,
  },
  academicMilestones: [
    {
      title: "JEE Main",
      highlight: "99.1%ile",
      badge: "99.1 Percentile",
      description: "Achieved 99.1 percentile in JEE Main with top national rank.",
    },
    {
      title: "JEE Advanced",
      highlight: "Qualified",
      badge: "IIT Qualified",
      description: "Qualified in one of the most competitive engineering entrance exams in India.",
    },
    {
      title: "CLC, Rajasthan",
      highlight: "Prep & Foundation",
      badge: "Sikar, Rajasthan",
      description:
        "Intensive 2-year competitive problem-solving foundation at Career Line Coaching (CLC).",
    },
  ],
};
var aboutParagraphs = [
  "I'm a second-year Computer Science student at NIT Jalandhar with a strong interest in software engineering, full-stack development, and competitive programming.",
  "I enjoy solving challenging algorithmic problems and building scalable, user-centric applications that solve real-world problems.",
  "Competitive programming has strengthened my problem-solving skills, analytical thinking, and ability to write efficient, maintainable code.",
];
var highlights = [
  {
    icon: GraduationCap,
    label: "Institution",
    value: personalInfo.education.institute,
  },
  {
    icon: BookOpen,
    label: "Degree & Year",
    value: `${personalInfo.education.degree}, ${personalInfo.education.currentYear}`,
  },
  {
    icon: Code,
    label: "Branch",
    value: personalInfo.education.branch,
  },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
  },
];
function About() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
    id: "about",
    labelledBy: "about-heading",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
        eyebrow: "Engineering Background",
        title: "About Me",
        description:
          "A look at my academic foundation, current engineering focus, and software interests.",
        id: "about-heading",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "grid gap-8 lg:grid-cols-[1.3fr_0.9fr] lg:gap-12",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base",
            children: aboutParagraphs.map((paragraph, index) =>
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "p",
                {
                  className: "bg-card/30 rounded-xl border border-border/40 p-4 leading-relaxed",
                  children: paragraph,
                },
                index,
              ),
            ),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
            className: "space-y-3",
            children: highlights.map(({ icon: Icon, label, value }) =>
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                "li",
                {
                  className:
                    "glass shadow-soft flex items-start gap-4 rounded-xl p-4 transition-colors hover:border-primary/30",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                      className:
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
                        className: "h-5 w-5",
                        "aria-hidden": "true",
                      }),
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          className:
                            "block font-mono text-[11px] font-medium tracking-wider text-muted-foreground uppercase",
                          children: label,
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          className: "mt-0.5 block text-sm font-semibold text-foreground",
                          children: value,
                        }),
                      ],
                    }),
                  ],
                },
                label,
              ),
            ),
          }),
        ],
      }),
    ],
  });
}
/**
 * Competitive programming and DSA metrics for Sandeep Jaat.
 * Strictly using verified statistics: 400+ problems solved, 100+ Codeforces problems.
 */
var codingStats = [
  {
    value: "500+",
    label: "Problems Solved",
    description: "DSA & competitive programming problems solved across practice platforms.",
  },
  {
    value: "1650+",
    label: "LeetCode Rating",
    description: "Consistent problem solving and contest performance.",
  },
  {
    value: "Pupil",
    label: "Codeforces Rank",
    description: "Active competitive programming contest participant.",
  },
  {
    value: "2⭐",
    label: "CodeChef Rating",
    description: "Division contest participant and algorithmic problem solver.",
  },
];
var codingPlatforms = [
  {
    platform: "LeetCode",
    url: "",
    handle: "sandeepjaat",
    focus: "1650+ Rating",
    description:
      "Consistent practice in Data Structures & Algorithms with a focus on pattern recognition, interview preparation, and contest solving.",
    metrics: [
      {
        label: "Rating",
        value: "1650+",
      },
      {
        label: "Focus",
        value: "DSA Practice",
      },
    ],
  },
  {
    platform: "Codeforces",
    url: "",
    handle: "sandeepjaat",
    focus: "Pupil Rank",
    description:
      "Building competitive programming fundamentals through regular Div. 2 / Div. 3 problem solving and contest practice.",
    metrics: [
      {
        label: "Rank",
        value: "Pupil",
      },
      {
        label: "Status",
        value: "Active",
      },
    ],
  },
  {
    platform: "CodeChef",
    url: "",
    handle: "sandeepjaat",
    focus: "2⭐ Star Coder",
    description:
      "Participating in rated Starters contests and practicing algorithmic concepts under timed constraints.",
    metrics: [
      {
        label: "Stars",
        value: "2⭐",
      },
      {
        label: "Division",
        value: "Active",
      },
    ],
  },
  {
    platform: "HackerRank",
    url: "",
    handle: "sandeepjaat",
    focus: "5⭐ Gold Badge",
    description:
      "Earned 5-star problem solving badge in core data structures, algorithms, and C++ fundamentals.",
    metrics: [
      {
        label: "Problem Solving",
        value: "5⭐ Star",
      },
      {
        label: "Status",
        value: "Verified",
      },
    ],
  },
];
var dsaTopics = [
  "Arrays",
  "Strings",
  "Linked Lists",
  "Stacks & Queues",
  "Recursion",
  "Binary Search",
  "Sorting",
  "Hashing",
  "Trees",
  "Binary Search Trees",
  "Graphs",
  "Greedy",
  "Dynamic Programming",
  "Bit Manipulation",
  "Two Pointers",
  "Sliding Window",
  "Prefix Sum",
  "Problem Solving",
];
var platformIcons = {
  LeetCode: CodeXml,
  Codeforces: Trophy,
  CodeChef: Flame,
  HackerRank: Target,
};
function Coding() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
    id: "coding",
    labelledBy: "coding-heading",
    className: "relative",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
        eyebrow: "Problem Solving Credibility",
        title: "DSA & Competitive Programming",
        description:
          "Competitive programming has strengthened my problem-solving skills, analytical thinking, and ability to write efficient, maintainable code.",
        id: "coding-heading",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-10",
        children: codingStats.map((stat, i) =>
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            motion.div,
            {
              initial: {
                opacity: 0,
                y: 20,
              },
              whileInView: {
                opacity: 1,
                y: 0,
              },
              viewport: {
                once: true,
                margin: "-40px",
              },
              transition: {
                duration: 0.45,
                delay: i * 0.08,
                ease: "easeOut",
              },
              className:
                "glass shadow-soft relative overflow-hidden rounded-2xl p-5 sm:p-6 transition-colors hover:border-primary/40",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "flex items-center justify-between",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                      className:
                        "font-mono text-[11px] font-semibold tracking-wider text-primary uppercase",
                      children: "Verified Metric",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                      className:
                        "flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary",
                      children:
                        i === 0
                          ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, {
                              className: "h-3.5 w-3.5",
                            })
                          : i === 1
                            ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, {
                                className: "h-3.5 w-3.5",
                              })
                            : i === 2
                              ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, {
                                  className: "h-3.5 w-3.5",
                                })
                              : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, {
                                  className: "h-3.5 w-3.5",
                                }),
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: "mt-3 flex items-baseline gap-2",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    className:
                      "font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl",
                    children: stat.value,
                  }),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                  className: "mt-1 font-display text-base font-semibold text-foreground",
                  children: stat.label,
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "mt-1.5 text-xs leading-relaxed text-muted-foreground",
                  children: stat.description,
                }),
              ],
            },
            stat.label,
          ),
        ),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "mb-12",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
            className:
              "mb-4 font-display text-base font-semibold tracking-tight text-foreground sm:text-lg flex items-center gap-2",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, {
                className: "h-4 w-4 text-primary",
              }),
              "Coding Platforms",
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
            children: codingPlatforms.map((profile, i) => {
              const Icon = platformIcons[profile.platform] ?? CodeXml;
              const card = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
                initial: {
                  opacity: 0,
                  y: 20,
                },
                whileInView: {
                  opacity: 1,
                  y: 0,
                },
                viewport: {
                  once: true,
                  margin: "-40px",
                },
                transition: {
                  duration: 0.45,
                  delay: i * 0.08,
                  ease: "easeOut",
                },
                whileHover: { y: -4 },
                className:
                  "glass shadow-soft group flex h-full flex-col rounded-2xl p-5 sm:p-6 transition-colors hover:border-primary/40",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className:
                          "flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary/10",
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
                          className: "h-5 w-5",
                          "aria-hidden": "true",
                        }),
                      }),
                      profile.url
                        ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
                            className:
                              "h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary",
                            "aria-hidden": "true",
                          })
                        : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            className:
                              "rounded-full bg-secondary px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground",
                            children: "Active",
                          }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
                    className: "mt-4 font-display text-base font-semibold text-foreground",
                    children: profile.platform,
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "mt-1 font-mono text-xs text-primary font-medium",
                    children: profile.focus,
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "mt-3 flex-1 text-xs leading-relaxed text-muted-foreground",
                    children: profile.description,
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    className: "mt-4 border-t border-border pt-3",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
                      className: "grid grid-cols-2 gap-2 text-xs",
                      children: profile.metrics.map((m) =>
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                          "div",
                          {
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
                                className: "text-[11px] text-muted-foreground font-mono",
                                children: m.label,
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
                                className: "font-semibold text-foreground mt-0.5",
                                children: m.value,
                              }),
                            ],
                          },
                          m.label,
                        ),
                      ),
                    }),
                  }),
                ],
              });
              return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "div",
                {
                  children: profile.url
                    ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                        href: profile.url,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "block h-full rounded-2xl focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                        "aria-label": `${profile.platform} profile`,
                        children: card,
                      })
                    : card,
                },
                profile.platform,
              );
            }),
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
        initial: {
          opacity: 0,
          y: 20,
        },
        whileInView: {
          opacity: 1,
          y: 0,
        },
        viewport: {
          once: true,
          margin: "-40px",
        },
        transition: {
          duration: 0.5,
          ease: "easeOut",
        },
        className: "glass shadow-soft rounded-2xl p-6 sm:p-7 border border-border",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className:
              "flex flex-wrap items-center justify-between gap-2 border-b border-border pb-4 mb-5",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, {
                    className: "h-4 w-4 text-primary",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                    className: "font-display text-base font-semibold text-foreground",
                    children: "Core DSA Practice Areas",
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                className: "font-mono text-xs text-muted-foreground",
                children: "18 Topics",
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
            className: "flex flex-wrap gap-2.5",
            children: dsaTopics.map((topic) =>
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "li",
                {
                  className:
                    "rounded-lg border border-border/80 bg-secondary/40 px-3 py-1.5 font-mono text-xs text-foreground/90 transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary",
                  children: topic,
                },
                topic,
              ),
            ),
          }),
        ],
      }),
    ],
  });
}
/**
 * Brand icons (LinkedIn, GitHub) — lucide no longer ships brand icons,
 * so these are small inline SVGs matching the lucide stroke-free look.
 */
function LinkedInIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    className,
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
      d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    }),
  });
}
function GitHubIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    className,
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
      d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
    }),
  });
}
/**
 * Verified contact links for Sandeep Jaat.
 * Strictly limited to Email, Phone, LinkedIn, and GitHub.
 */
var socialLinks = {
  email: "sandeep.cs.25@nitj.ac.in",
  phone: "8769047804",
  phoneDisplay: "+91 8769047804",
  phoneUrl: "tel:+918769047804",
  linkedin: "https://www.linkedin.com/in/sandeep-jaat-04a7043aa/",
  github: "https://github.com/sandeepjaat12084-prog",
};
var contacts = [
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
function Contact() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
    id: "contact",
    labelledBy: "contact-heading",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className:
        "glass shadow-soft relative overflow-hidden rounded-3xl p-6 sm:p-10 border border-border",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className:
            "bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_80%_at_50%_0%,black,transparent)]",
          "aria-hidden": "true",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "relative",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
              eyebrow: "Get In Touch",
              title: "Let's Connect",
              description:
                "Whether you have an internship opportunity, project collaboration, or question, feel free to reach out through any of the channels below.",
              id: "contact-heading",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "grid gap-4 sm:grid-cols-2",
              children: contacts.map((item) => {
                const Icon = item.icon;
                return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  "a",
                  {
                    href: item.href,
                    target: item.external ? "_blank" : void 0,
                    rel: item.external ? "noopener noreferrer" : void 0,
                    className:
                      "group flex flex-col justify-between rounded-2xl border border-border/80 bg-background/50 p-5 transition-all hover:border-primary/40 hover:bg-secondary/40 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                className:
                                  "flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary/10",
                                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
                                  className: "h-5 w-5",
                                  "aria-hidden": "true",
                                }),
                              }),
                              item.external
                                ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
                                    className:
                                      "h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary",
                                  })
                                : null,
                            ],
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            className:
                              "mt-4 block font-mono text-xs font-semibold tracking-wider text-primary uppercase",
                            children: item.label,
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                            className:
                              "mt-1 font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors",
                            children: item.value,
                          }),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "mt-3 text-xs text-muted-foreground",
                        children: item.description,
                      }),
                    ],
                  },
                  item.label,
                );
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
var milestoneIcons = [Trophy, Award, Sparkles];
function Education() {
  const edu = personalInfo.education;
  const milestones = personalInfo.academicMilestones;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
    id: "education",
    labelledBy: "education-heading",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
        eyebrow: "Academic Background",
        title: "Education & Foundations",
        description:
          "Formal university engineering education at NIT Jalandhar along with competitive academic milestones.",
        id: "education-heading",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "space-y-6 max-w-4xl",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
            initial: {
              opacity: 0,
              y: 20,
            },
            whileInView: {
              opacity: 1,
              y: 0,
            },
            viewport: {
              once: true,
              margin: "-40px",
            },
            transition: {
              duration: 0.5,
              ease: "easeOut",
            },
            className:
              "glass shadow-soft rounded-2xl border border-border p-6 transition-colors hover:border-primary/40 sm:p-8",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "flex flex-wrap items-start justify-between gap-4",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "flex items-start gap-4",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className:
                          "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary",
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, {
                          className: "h-6 w-6",
                          "aria-hidden": "true",
                        }),
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                            className: "font-display text-lg font-bold text-foreground sm:text-xl",
                            children: edu.institute,
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                            className: "mt-1 text-sm font-medium text-primary",
                            children: [edu.degree, " · ", edu.branch],
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                            className:
                              "mt-1 flex items-center gap-1.5 text-xs text-muted-foreground",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
                                className: "h-3.5 w-3.5",
                              }),
                              "Jalandhar, Punjab, India",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                    className:
                      "rounded-full border border-primary/25 bg-primary/10 px-3 py-1 font-mono text-xs font-semibold text-primary",
                    children: ["Current: ", edu.currentYear],
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className:
                  "mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4 text-xs text-muted-foreground",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                    className: "flex items-center gap-2 font-mono",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarRange, {
                        className: "h-4 w-4 text-primary",
                        "aria-hidden": "true",
                      }),
                      edu.startYear,
                      " – ",
                      edu.endYear,
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                    className: "font-mono text-foreground font-medium",
                    children: ["Expected Graduation: ", edu.endYear],
                  }),
                ],
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
                className:
                  "mb-3 font-display text-sm font-semibold tracking-wide text-foreground/90 uppercase text-xs text-muted-foreground flex items-center gap-2",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, {
                    className: "h-3.5 w-3.5 text-primary",
                  }),
                  "Competitive Entrance & Foundation",
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "grid gap-4 sm:grid-cols-3",
                children: milestones.map((m, i) => {
                  const Icon = milestoneIcons[i % milestoneIcons.length];
                  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                    motion.div,
                    {
                      initial: {
                        opacity: 0,
                        y: 15,
                      },
                      whileInView: {
                        opacity: 1,
                        y: 0,
                      },
                      viewport: {
                        once: true,
                        margin: "-30px",
                      },
                      transition: {
                        duration: 0.45,
                        delay: i * 0.08,
                        ease: "easeOut",
                      },
                      whileHover: { y: -3 },
                      className:
                        "glass shadow-soft flex flex-col justify-between rounded-xl border border-border/80 bg-card/40 p-5 transition-colors hover:border-primary/40",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                              className: "flex items-center justify-between",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                  className:
                                    "flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-primary",
                                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
                                    className: "h-4.5 w-4.5",
                                    "aria-hidden": "true",
                                  }),
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                  className:
                                    "rounded-md border border-primary/20 bg-primary/10 px-2 py-0.5 font-mono text-[11px] font-semibold text-primary",
                                  children: m.highlight,
                                }),
                              ],
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
                              className:
                                "mt-3 font-display text-base font-semibold text-foreground",
                              children: m.title,
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                              className: "mt-1 font-mono text-xs text-muted-foreground font-medium",
                              children: m.badge,
                            }),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                          className:
                            "mt-3 text-xs leading-relaxed text-muted-foreground border-t border-border/50 pt-2.5",
                          children: m.description,
                        }),
                      ],
                    },
                    m.title,
                  );
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
    className: "border-t border-border py-10 bg-background/80",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className:
        "mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "flex flex-col items-center sm:items-start gap-1",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
              href: "#home",
              className:
                "flex items-center gap-2 rounded-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className:
                    "flex h-7 w-7 items-center justify-center rounded-md border border-border bg-secondary text-primary",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, {
                    className: "h-3.5 w-3.5",
                    "aria-hidden": "true",
                  }),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className: "font-display text-sm font-semibold text-foreground",
                  children: personalInfo.name,
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
              className: "text-xs text-muted-foreground font-mono",
              children: personalInfo.headline,
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
          className: "font-mono text-xs text-muted-foreground text-center",
          children: ["© 2026 ", personalInfo.name, ". All rights reserved."],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
          className: "flex items-center gap-5",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                href: socialLinks.github,
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": "Sandeep on GitHub",
                className:
                  "rounded-sm text-muted-foreground transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitHubIcon, {
                  className: "h-4.5 w-4.5",
                }),
              }),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                href: socialLinks.linkedin,
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": "Sandeep on LinkedIn",
                className:
                  "rounded-sm text-muted-foreground transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkedInIcon, {
                  className: "h-4.5 w-4.5",
                }),
              }),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                href: `mailto:${socialLinks.email}`,
                "aria-label": "Email Sandeep",
                className:
                  "rounded-sm text-muted-foreground transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
                  className: "h-4.5 w-4.5",
                  "aria-hidden": "true",
                }),
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
var container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};
var item = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
function Hero() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
    id: "home",
    "aria-labelledby": "hero-heading",
    className:
      "relative flex min-h-[92vh] items-center overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className:
          "bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,black,transparent)] opacity-70",
        "aria-hidden": "true",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className:
          "absolute top-1/4 left-1/2 -z-10 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px] pointer-events-none",
        "aria-hidden": "true",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "relative mx-auto w-full max-w-6xl px-4 sm:px-6",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
                variants: container,
                initial: "hidden",
                animate: "show",
                className: "flex flex-col",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
                    variants: item,
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                      className:
                        "inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 font-mono text-xs font-medium text-primary",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          className: "h-2 w-2 rounded-full bg-primary animate-pulse",
                          "aria-hidden": "true",
                        }),
                        personalInfo.status,
                      ],
                    }),
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
                    variants: item,
                    className:
                      "mt-6 font-mono text-sm tracking-wide text-muted-foreground sm:text-base",
                    children: "Hello, I'm",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
                    id: "hero-heading",
                    variants: item,
                    className:
                      "mt-1 font-display text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl",
                    children: [
                      "Sandeep ",
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className: "text-gradient",
                        children: "Jaat",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
                    variants: item,
                    className:
                      "mt-4 font-display text-xl font-semibold text-foreground/90 sm:text-2xl",
                    children: personalInfo.headline,
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
                    variants: item,
                    className: "mt-2 font-mono text-xs text-primary font-medium sm:text-sm",
                    children: personalInfo.supportingRoles,
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
                    variants: item,
                    className: "mt-3 flex flex-wrap gap-2",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className:
                          "rounded-md border border-border bg-secondary/40 px-2.5 py-1 font-mono text-[11px] text-foreground/90",
                        children: "⚡ 500+ DSA/CP",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className:
                          "rounded-md border border-border bg-secondary/40 px-2.5 py-1 font-mono text-[11px] text-foreground/90",
                        children: "🏆 1650+ @ LeetCode",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className:
                          "rounded-md border border-border bg-secondary/40 px-2.5 py-1 font-mono text-[11px] text-foreground/90",
                        children: "🎯 Pupil @ Codeforces",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className:
                          "rounded-md border border-border bg-secondary/40 px-2.5 py-1 font-mono text-[11px] text-foreground/90",
                        children: "⭐ 2⭐ CodeChef",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
                    variants: item,
                    className:
                      "mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base",
                    children: personalInfo.intro,
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
                    variants: item,
                    className: "mt-8 flex flex-wrap items-center gap-4",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                        href: "#projects",
                        className:
                          "inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:brightness-110 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                        children: "View Projects",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                        href: "#contact",
                        className:
                          "inline-flex items-center justify-center rounded-lg border border-border bg-secondary/60 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                        children: "Contact Me",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
                    variants: item,
                    className:
                      "mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
                        href: socialLinks.github,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "inline-flex items-center gap-2 transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                        "aria-label": "Sandeep Jaat on GitHub",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitHubIcon, {
                            className: "h-4 w-4",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            children: "GitHub",
                          }),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
                        href: socialLinks.linkedin,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "inline-flex items-center gap-2 transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                        "aria-label": "Sandeep Jaat on LinkedIn",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkedInIcon, {
                            className: "h-4 w-4",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            children: "LinkedIn",
                          }),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
                        href: `mailto:${socialLinks.email}`,
                        className:
                          "inline-flex items-center gap-2 transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                        "aria-label": "Email Sandeep Jaat",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
                            className: "h-4 w-4",
                            "aria-hidden": "true",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            children: "Email",
                          }),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                        className: "inline-flex items-center gap-2",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
                            className: "h-4 w-4 text-primary",
                            "aria-hidden": "true",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            children: personalInfo.location,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
                initial: {
                  opacity: 0,
                  scale: 0.95,
                },
                animate: {
                  opacity: 1,
                  scale: 1,
                },
                transition: {
                  duration: 0.6,
                  delay: 0.2,
                  ease: "easeOut",
                },
                className: "flex justify-center lg:justify-end",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "relative group",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className:
                        "absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary/30 via-primary/10 to-transparent blur-md opacity-60 transition duration-500 group-hover:opacity-100",
                      "aria-hidden": "true",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className:
                        "relative h-72 w-72 sm:h-84 sm:w-84 md:h-96 md:w-96 overflow-hidden rounded-3xl border border-border/80 bg-card p-2 shadow-soft",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                          src: "/sandeep-jaat.jpg",
                          alt: "Sandeep Jaat - Computer Science and Engineering Student",
                          className:
                            "h-full w-full rounded-2xl object-cover object-top transition duration-500 group-hover:scale-[1.02]",
                          loading: "eager",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className:
                            "pointer-events-none absolute inset-x-2 bottom-2 rounded-b-2xl bg-gradient-to-t from-background/90 via-background/30 to-transparent p-4",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                              className: "font-display text-sm font-semibold text-foreground",
                              children: "Sandeep Jaat",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                              className: "font-mono text-xs text-primary",
                              children: personalInfo.education.shortInstitute,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.a, {
            href: "#about",
            "aria-label": "Scroll to About section",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: {
              delay: 1,
              duration: 0.6,
            },
            className:
              "mx-auto mt-14 hidden w-fit items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none sm:flex",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, {
              className: "h-5 w-5 animate-bounce",
              "aria-hidden": "true",
            }),
          }),
        ],
      }),
    ],
  });
}
var navItems = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "DSA & CP",
    href: "#coding",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Education",
    href: "#education",
  },
  {
    label: "Resume",
    href: "#resume",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];
function Navbar() {
  const [scrolled, setScrolled] = (0, import_react.useState)(false);
  const [open, setOpen] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.header, {
    initial: {
      y: -64,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
    className: cn(
      "fixed inset-x-0 top-0 z-50 transition-all duration-300",
      scrolled ? "glass shadow-soft" : "border-b border-transparent bg-transparent",
    ),
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
        "aria-label": "Primary",
        className: "mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
            href: "#home",
            className:
              "group flex items-center gap-2 rounded-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                className:
                  "flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-secondary text-primary transition-colors group-hover:border-primary/40",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, {
                  className: "h-4 w-4",
                  "aria-hidden": "true",
                }),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                className: "font-display text-sm font-semibold tracking-tight text-foreground",
                children: [
                  "Sandeep",
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    className: "text-primary",
                    children: ".jaat",
                  }),
                ],
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
            className: "hidden items-center gap-1 lg:flex",
            children: navItems.map((item) =>
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "li",
                {
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                    href: item.href,
                    className:
                      "rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                    children: item.label,
                  }),
                },
                item.href,
              ),
            ),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
            type: "button",
            onClick: () => setOpen((v) => !v),
            "aria-expanded": open,
            "aria-label": open ? "Close menu" : "Open menu",
            className:
              "flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none lg:hidden",
            children: open
              ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
                  className: "h-5 w-5",
                  "aria-hidden": "true",
                })
              : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
                  className: "h-5 w-5",
                  "aria-hidden": "true",
                }),
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
        children:
          open &&
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.nav, {
            "aria-label": "Mobile",
            initial: {
              height: 0,
              opacity: 0,
            },
            animate: {
              height: "auto",
              opacity: 1,
            },
            exit: {
              height: 0,
              opacity: 0,
            },
            transition: {
              duration: 0.25,
              ease: "easeOut",
            },
            className:
              "overflow-hidden border-b border-border bg-background/95 backdrop-blur-xl lg:hidden",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
              className: "space-y-1 px-4 py-4",
              children: navItems.map((item) =>
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "li",
                  {
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                      href: item.href,
                      onClick: () => setOpen(false),
                      className:
                        "block rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                      children: item.label,
                    }),
                  },
                  item.href,
                ),
              ),
            }),
          }),
      }),
    ],
  });
}
var projects = [];
function ProjectCard({ project, index }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
    initial: {
      opacity: 0,
      y: 24,
    },
    whileInView: {
      opacity: 1,
      y: 0,
    },
    viewport: {
      once: true,
      margin: "-40px",
    },
    transition: {
      duration: 0.5,
      delay: index * 0.08,
      ease: "easeOut",
    },
    whileHover: { y: -6 },
    className:
      "glass shadow-soft group flex h-full flex-col overflow-hidden rounded-2xl border border-border transition-colors hover:border-primary/40",
    children: [
      project.image
        ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "relative h-48 overflow-hidden border-b border-border bg-secondary/40",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
              src: project.image,
              alt: `Preview of ${project.title}`,
              loading: "lazy",
              className:
                "h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105",
            }),
          })
        : null,
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "flex flex-1 flex-col p-6 sm:p-7",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "flex items-start justify-between gap-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                    className: "font-display text-xl font-bold tracking-tight text-foreground",
                    children: project.title,
                  }),
                  project.tagline
                    ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "mt-1 font-mono text-xs text-primary",
                        children: project.tagline,
                      })
                    : null,
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                className:
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderGit2, {
                  className: "h-5 w-5",
                  "aria-hidden": "true",
                }),
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "mt-4 space-y-3 text-xs leading-relaxed sm:text-sm",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "rounded-lg bg-background/50 p-3 border border-border/40",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    className: "font-mono text-[11px] font-semibold text-primary uppercase block",
                    children: "Problem:",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "mt-0.5 text-muted-foreground",
                    children: project.problem,
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "rounded-lg bg-background/50 p-3 border border-border/40",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    className: "font-mono text-[11px] font-semibold text-primary uppercase block",
                    children: "Solution:",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "mt-0.5 text-muted-foreground",
                    children: project.solution,
                  }),
                ],
              }),
              project.impact
                ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "rounded-lg bg-background/50 p-3 border border-border/40",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className:
                          "font-mono text-[11px] font-semibold text-primary uppercase block",
                        children: "Impact:",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "mt-0.5 text-muted-foreground",
                        children: project.impact,
                      }),
                    ],
                  })
                : null,
            ],
          }),
          project.keyWork && project.keyWork.length > 0
            ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "mt-4",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    className:
                      "font-mono text-[11px] font-semibold text-foreground uppercase tracking-wider block mb-2",
                    children: "Key Work",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
                    className: "space-y-1.5",
                    children: project.keyWork.map((item, idx) =>
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                        "li",
                        {
                          className: "flex items-start gap-2 text-xs text-muted-foreground",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
                              className: "h-3.5 w-3.5 text-primary shrink-0 mt-0.5",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item }),
                          ],
                        },
                        idx,
                      ),
                    ),
                  }),
                ],
              })
            : null,
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "mt-5",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
              className: "flex flex-wrap gap-1.5",
              "aria-label": "Technology stack",
              children: project.tech.map((tech) =>
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "li",
                  {
                    className:
                      "rounded-md border border-border bg-secondary/50 px-2.5 py-1 font-mono text-[11px] text-muted-foreground",
                    children: tech,
                  },
                  tech,
                ),
              ),
            }),
          }),
          project.github || project.demo
            ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "mt-6 flex items-center gap-5 border-t border-border pt-4 text-sm",
                children: [
                  project.github
                    ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
                        href: project.github,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "inline-flex items-center gap-1.5 rounded-sm font-medium text-muted-foreground transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitHubIcon, {
                            className: "h-4 w-4",
                          }),
                          "GitHub",
                        ],
                      })
                    : null,
                  project.demo
                    ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
                        href: project.demo,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "inline-flex items-center gap-1.5 rounded-sm font-medium text-muted-foreground transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
                            className: "h-4 w-4",
                            "aria-hidden": "true",
                          }),
                          "Live Demo",
                        ],
                      })
                    : null,
                ],
              })
            : null,
        ],
      }),
    ],
  });
}
function EmptyProjects() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
    children: [
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
    ].map((card, i) =>
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        motion.div,
        {
          initial: {
            opacity: 0,
            y: 20,
          },
          whileInView: {
            opacity: 1,
            y: 0,
          },
          viewport: {
            once: true,
            margin: "-40px",
          },
          transition: {
            duration: 0.45,
            delay: i * 0.08,
            ease: "easeOut",
          },
          className:
            "glass shadow-soft flex flex-col justify-between rounded-2xl border border-border/80 p-6 sm:p-7",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "flex items-center justify-between",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                      className:
                        "flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
                        className: "h-5 w-5",
                        "aria-hidden": "true",
                      }),
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                      className: "font-mono text-xs text-primary font-medium",
                      children: card.category,
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
                  className: "mt-4 font-display text-base font-semibold text-foreground",
                  children: card.title,
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "mt-2 text-xs leading-relaxed text-muted-foreground",
                  children: card.description,
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "mt-6 border-t border-border pt-4",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                className: "font-mono text-[11px] text-muted-foreground",
                children: [
                  "Configured via ",
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    className: "text-primary",
                    children: "src/data/projects.ts",
                  }),
                ],
              }),
            }),
          ],
        },
        card.title,
      ),
    ),
  });
}
function Projects() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
    id: "projects",
    labelledBy: "projects-heading",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
        eyebrow: "Featured Projects",
        title: "Featured Projects",
        description:
          "Structured software projects highlighting problem definition, technical architecture, and implementation details.",
        id: "projects-heading",
      }),
      projects.length > 0
        ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
            children: projects.map((project, i) =>
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                ProjectCard,
                {
                  project,
                  index: i,
                },
                project.title,
              ),
            ),
          })
        : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyProjects, {}),
    ],
  });
}
function Resume() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
    id: "resume",
    labelledBy: "resume-heading",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
        eyebrow: "Curriculum Vitae",
        title: "Resume",
        description:
          "A concise overview of my education, technical skills, projects, and problem-solving experience.",
        id: "resume-heading",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
        initial: {
          opacity: 0,
          y: 20,
        },
        whileInView: {
          opacity: 1,
          y: 0,
        },
        viewport: {
          once: true,
          margin: "-40px",
        },
        transition: {
          duration: 0.45,
          ease: "easeOut",
        },
        className: "glass shadow-soft max-w-3xl rounded-2xl border border-border p-6 sm:p-8",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className:
              "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "flex items-start gap-4",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    className:
                      "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
                      className: "h-6 w-6",
                      "aria-hidden": "true",
                    }),
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                        className: "font-display text-lg font-bold text-foreground",
                        children: "Sandeep Jaat — Resume",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "mt-1 text-xs text-muted-foreground sm:text-sm",
                        children: "Computer Science and Engineering • B.Tech NIT Jalandhar",
                      }),
                    ],
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
                href: "/resume.pdf",
                target: "_blank",
                rel: "noopener noreferrer",
                download: "Sandeep_Jaat_Resume.pdf",
                className:
                  "inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:brightness-110 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
                    className: "h-4 w-4",
                    "aria-hidden": "true",
                  }),
                  "Download Resume",
                ],
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "mt-6 border-t border-border pt-5",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "font-mono text-xs text-muted-foreground uppercase tracking-wider mb-3",
                children: "Summary Highlights:",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
                className: "grid gap-2 sm:grid-cols-2 text-xs text-muted-foreground",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                    className: "flex items-center gap-2",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
                        className: "h-3.5 w-3.5 text-primary shrink-0",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        children: "500+ DSA/CP Problems Solved (1650+ @ LeetCode)",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                    className: "flex items-center gap-2",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
                        className: "h-3.5 w-3.5 text-primary shrink-0",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        children: "Pupil @ Codeforces • 2⭐ @ CodeChef • 5⭐ @ HackerRank",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                    className: "flex items-center gap-2",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
                        className: "h-3.5 w-3.5 text-primary shrink-0",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        children: "B.Tech in CSE at NIT Jalandhar ('29) • 99.1%ile JEE Main",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                    className: "flex items-center gap-2",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
                        className: "h-3.5 w-3.5 text-primary shrink-0",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        children: "Full-Stack MERN Stack (React, Next.js, Node, Express, MongoDB)",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
var skillCategories = [
  {
    id: "fullstack",
    title: "Full-Stack Development",
    description: "Building responsive frontends and reliable backend services.",
    icon: "fullstack",
    skills: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "REST APIs",
    ],
  },
  {
    id: "dsa",
    title: "Problem Solving & DSA",
    description: "Core algorithmic thinking and high-efficiency programming in C/C++.",
    icon: "dsa",
    skills: ["C++", "C", "Data Structures", "Algorithms", "Competitive Programming"],
  },
  {
    id: "database",
    title: "Databases",
    description: "Relational and document data modeling and queries.",
    icon: "database",
    skills: ["MongoDB", "SQL"],
  },
  {
    id: "tools",
    title: "Developer Tools",
    description: "Essential tooling for version control, collaboration, and environment workflow.",
    icon: "tools",
    skills: ["Git", "GitHub", "VS Code"],
  },
];
var iconMap = {
  fullstack: Layers,
  dsa: Code,
  database: Database,
  tools: Wrench,
};
function Skills() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
    id: "skills",
    labelledBy: "skills-heading",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
        eyebrow: "Skills & Core Competencies",
        title: "Technical Arsenal",
        description:
          "The primary languages, engineering tools, database systems, and technologies I work with.",
        id: "skills-heading",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-2",
        children: skillCategories.map((category, i) => {
          const Icon = iconMap[category.icon] ?? Braces;
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            motion.article,
            {
              initial: {
                opacity: 0,
                y: 20,
              },
              whileInView: {
                opacity: 1,
                y: 0,
              },
              viewport: {
                once: true,
                margin: "-40px",
              },
              transition: {
                duration: 0.45,
                delay: i * 0.08,
                ease: "easeOut",
              },
              whileHover: { y: -4 },
              className:
                "glass shadow-soft group flex flex-col justify-between rounded-2xl border border-border p-6 transition-colors hover:border-primary/40 sm:p-7",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "flex items-center gap-3",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className:
                          "flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary/10",
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
                          className: "h-5 w-5",
                          "aria-hidden": "true",
                        }),
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                            className:
                              "font-display text-base font-semibold tracking-tight text-foreground sm:text-lg",
                            children: category.title,
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                            className: "mt-0.5 text-xs text-muted-foreground",
                            children: category.description,
                          }),
                        ],
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
                    className: "mt-6 flex flex-wrap gap-2",
                    children: category.skills.map((skill) =>
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        "li",
                        {
                          className:
                            "rounded-lg border border-border/80 bg-background/60 px-3 py-1.5 font-mono text-xs text-foreground/90 transition-colors group-hover:border-primary/30 hover:border-primary/60 hover:text-primary",
                          children: skill,
                        },
                        skill,
                      ),
                    ),
                  }),
                ],
              }),
            },
            category.id,
          );
        }),
      }),
    ],
  });
}
function HomePage() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MotionConfig, {
    reducedMotion: "user",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className:
        "min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coding, {}),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {}),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Education, {}),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Resume, {}),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {}),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
      ],
    }),
  });
}
//#endregion
export { HomePage as component };
