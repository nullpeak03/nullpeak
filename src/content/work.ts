// Data-driven work. Add a project here — it appears on /work + home.
export type Project = {
  slug: string;
  name: string;
  status: "live" | "in-progress";
  url?: string;
  category: string;
  summary: string;
  problem: string;
  built: string[];
  result: string;
};

export const projects: Project[] = [
  {
    slug: "muscle-mania-fitness-center",
    name: "Muscle Mania Fitness Center",
    status: "live",
    url: "https://musclemaniafitnesscenter.com.np/",
    category: "Gym website + Google presence",
    summary:
      "Full digital presence from zero: website, Search Console, reviews on site.",
    problem:
      "A strong local gym that customers could not find online. No website, weak Google presence.",
    built: [
      "4–5 page fast mobile website",
      ".com.np domain + hosting",
      "Google Search Console setup",
      "Google reviews on the website + WhatsApp button",
    ],
    result:
      "Found on Google. New members say they discovered the gym online and walked in.",
  },
  {
    slug: "hipath-ai",
    name: "HiPath AI",
    status: "live",
    url: "https://www.hipathai.me/",
    category: "AI learning platform · Web app",
    summary:
      "AI-powered learning platform: personalized roadmaps, AI tutor, quizzes and streaks.",
    problem:
      "Learners get lost in random tutorials with no plan, no feedback, and no consistency.",
    built: [
      "Personalized AI roadmaps (goal → phases → lessons)",
      "AI tutor with weakness tracking + adaptive quizzes",
      "Auth, streaks, spaced reviews, free roadmap library",
    ],
    result:
      "Live at hipathai.me — free to use, no credit card. (TODO: add measured outcome when available.)",
  },
  {
    slug: "prime-tech",
    name: "Prime Tech",
    status: "in-progress",
    category: "Business website",
    summary: "New business site — currently in build.",
    problem: "Needed a clean, fast site to explain services and win trust.",
    built: ["Site structure + design in progress"],
    result: "In progress — launching soon.",
  },
];

export const stats = [
  { value: 15, suffix: "+", label: "projects shipped" },
  { value: 2, prefix: "<", suffix: "s", label: "load time target", decimals: 0 },
  { value: 100, suffix: "%", label: "satisfaction" },
] as const;
