/**
 * Featured Projects data for Sandeep Jaat.
 * Follows the Problem -> Solution -> Impact -> Key Work architecture.
 * Real links only — empty strings hide links automatically.
 */
export type Project = {
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  impact?: string;
  keyWork: string[];
  tech: string[];
  image?: string;
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  // Real projects can be added here following the schema above.
];
