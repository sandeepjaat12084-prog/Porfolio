/**
 * Competitive programming and DSA metrics for Sandeep Jaat.
 * Strictly using verified statistics: 400+ problems solved, 100+ Codeforces problems.
 */

export const codingStats = [
  {
    value: "400+",
    label: "Problems Solved",
    description: "DSA & competitive programming problems solved across practice platforms.",
  },
  {
    value: "100+",
    label: "Codeforces Problems",
    description: "Algorithmic problems solved with a focus on contest problem solving.",
  },
] as const;

export type CodingPlatform = {
  platform: string;
  url: string;
  handle: string;
  focus: string;
  description: string;
  metrics: { label: string; value: string }[];
};

export const codingPlatforms: CodingPlatform[] = [
  {
    platform: "LeetCode",
    url: "",
    handle: "sandeepjaat",
    focus: "Data Structures & Algorithms",
    description:
      "Consistent practice in Data Structures & Algorithms with a focus on pattern recognition, efficient problem solving, and interview preparation.",
    metrics: [
      { label: "Focus", value: "DSA Practice" },
      { label: "Status", value: "Active" },
    ],
  },
  {
    platform: "Codeforces",
    url: "",
    handle: "sandeepjaat",
    focus: "Competitive Programming",
    description:
      "Building competitive programming fundamentals through regular problem solving and contest practice.",
    metrics: [
      { label: "Problems", value: "100+" },
      { label: "Status", value: "Active" },
    ],
  },
  {
    platform: "CodeChef",
    url: "",
    handle: "sandeepjaat",
    focus: "Contest Problem Solving",
    description:
      "Participating in timed contests and practicing algorithmic concepts under time constraints.",
    metrics: [
      { label: "Focus", value: "Contests & Practice" },
      { label: "Status", value: "Active" },
    ],
  },
];

export const dsaTopics = [
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
] as const;

export const codingFocus = [
  "Data Structures & Algorithms",
  "Competitive Programming",
  "Pattern Recognition",
  "Time & Space Optimization",
] as const;
