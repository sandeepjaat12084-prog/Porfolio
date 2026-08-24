/**
 * Technical Arsenal — categorized skills for Sandeep Jaat.
 * Focuses on practical engineering competence without fabricated rating percentages.
 */
export type SkillCategory = {
  id: string;
  title: string;
  description: string;
  icon: "fullstack" | "dsa" | "database" | "tools";
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "fullstack",
    title: "Full-Stack Development",
    description: "Building responsive frontends and reliable backend services.",
    icon: "fullstack",
    skills: [
      "React",
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
