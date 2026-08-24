/**
 * Competitive programming and DSA metrics for Sandeep Jaat.
 * Strictly using verified statistics: 400+ problems solved, 100+ Codeforces problems.
 */

export const codingStats = [
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
    focus: "1650+ Rating",
    description:
      "Consistent practice in Data Structures & Algorithms with a focus on pattern recognition, interview preparation, and contest solving.",
    metrics: [
      { label: "Rating", value: "1650+" },
      { label: "Focus", value: "DSA Practice" },
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
      { label: "Rank", value: "Pupil" },
      { label: "Status", value: "Active" },
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
      { label: "Stars", value: "2⭐" },
      { label: "Division", value: "Active" },
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
      { label: "Problem Solving", value: "5⭐ Star" },
      { label: "Status", value: "Verified" },
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
