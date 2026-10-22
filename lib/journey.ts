export type Accent = "sky" | "emerald" | "lime" | "blue" | "violet" | "pink";
export type JourneyProject = {
  name: string;
  stack: string[];
  link: string;
};
export type JourneyChapter = {
  period: string;
  era: string;
  accent: Accent;
  role: string;
  org: string;
  summary: string;
  result?: string;
  projects: JourneyProject[];
};
export const journeyStats = [
  { value: 600, suffix: "+", label: "Students enrolled" },
  { value: 40, suffix: "+", label: "School and college partnerships" },
  { value: 20, suffix: "%", label: "Admissions growth" },
  { value: 6, suffix: " days", label: "Lead cycle, down from 14" },
];
export const skillPath = [
  "WordPress",
  "Excel",
  "Google Sheets",
  "Apps Script",
  "VS Code & GitHub",
  "Vercel",
  "Cloudflare & Neon",
  "Meta for Developers",
  "Claude AI",
];
export const chapters: JourneyChapter[] = [
  {
    period: "2021",
    era: "Web basics",
    accent: "sky",
    role: "Graduation & first freelance build",
    org: "B.A. English (Hons), Patliputra University",
    summary:
      "Finished my degree, learned WordPress and digital marketing basics, and shipped my first client website.",
    result: "First client delivered",
    projects: [
      {
        name: "fakhruddinaliahmad.com \u2014 advocate website",
        stack: ["WordPress", "Digital Marketing"],
        link: "#",
      },
    ],
  },
  {
    period: "2022 \u2013 2023",
    era: "Spreadsheets",
    accent: "emerald",
    role: "Admissions Coordinator",
    org: "Khadimul Islam",
    summary:
      "Ran day-to-day admissions \u2014 counselling calls, enrollment tracking and weekly reports for management.",
    projects: [
      {
        name: "Admissions tracking & weekly reporting",
        stack: ["Excel", "PowerPoint"],
        link: "#",
      },
    ],
  },
  {
    period: "2023 \u2013 2025",
    era: "Automation",
    accent: "lime",
    role: "Business Development Executive",
    org: "Self Prep IAS",
    summary:
      "Restructured the admissions funnel and replaced scattered sheets with an automated lead-tracking system.",
    result: "+18% admissions revenue",
    projects: [
      {
        name: "Admission Planner CRM \u2014 v1",
        stack: ["Google Sheets", "Apps Script"],
        link: "#",
      },
    ],
  },
  {
    period: "2025 \u2013 2026",
    era: "Developer stack",
    accent: "blue",
    role: "Senior Associate, Outreach & Partnerships",
    org: "Hi-Tech Institute of Engineering & Technology",
    summary:
      "Built a school and college partnership pipeline from zero, and moved my builds onto a real developer stack.",
    result: "40+ partnerships \u00b7 80% close rate",
    projects: [
      {
        name: "knowurself.in \u2014 career assessment platform",
        stack: ["VS Code", "GitHub", "Vercel"],
        link: "#",
      },
      {
        name: "Admission Planner \u2014 rebuilt as a web app",
        stack: ["VS Code", "GitHub", "Vercel"],
        link: "#",
      },
    ],
  },
  {
    period: "Mar 2026 \u2013 Present",
    era: "Growth engine",
    accent: "violet",
    role: "Growth Marketing Specialist",
    org: "Bismil International Academy",
    summary:
      "Own the school's admissions growth engine \u2014 from the systems staff use daily to the tracking behind every campaign.",
    result: "+20% admissions \u00b7 600+ students",
    projects: [
      {
        name: "School Management System \u2014 v1",
        stack: ["Google Apps Script"],
        link: "#",
      },
      {
        name: "School Management System \u2014 rebuilt",
        stack: ["VS Code", "GitHub", "Cloudflare", "Neon"],
        link: "#",
      },
      {
        name: "Meta Developer app \u2014 Facebook Login",
        stack: ["Meta for Developers", "OAuth"],
        link: "#",
      },
      {
        name: "Website analytics & behaviour tracking",
        stack: ["GA4", "Microsoft Clarity"],
        link: "#",
      },
      {
        name: "Meta Ads performance sheet \u2014 CPL, CPA, ROAS, CAC",
        stack: ["Google Sheets", "Meta Ads Manager"],
        link: "#",
      },
    ],
  },
];
export const growthByYear = [
  { year: "2021", value: 1 },
  { year: "2022", value: 2 },
  { year: "2023", value: 4 },
  { year: "2024", value: 7 },
  { year: "2025", value: 9 },
  { year: "2026", value: 10 },
];

export type SkillGroup = {
  title: string;
  items: string[];
};
export const skillGroups: SkillGroup[] = [
  {
    title: "Meta Ads & Growth",
    items: [
      "Meta Ads Manager",
      "Meta for Developers (OAuth / Facebook Login)",
      "GA4",
      "Microsoft Clarity",
      "CPL / CPA / ROAS tracking",
    ],
  },
  {
    title: "Performance Marketing",
    items: [
      "Funnel analysis",
      "A/B testing",
      "Google Sheets & Apps Script automation",
      "Campaign budget planning",
    ],
  },
  {
    title: "Full Stack Development",
    items: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "GitHub",
      "Vercel",
      "Neon",
      "Cloudflare",
      "WordPress & PHP",
    ],
  },
];
export type Certification = {
  name: string;
  issuer: string;
};
export const certifications: Certification[] = [
  { name: "Career & Education Counselor", issuer: "IISDT, Govt of India" },
  { name: "Product Management: Understanding the Market", issuer: "UpGrad" },
  { name: "Generative AI Foundation", issuer: "UpGrad" },
  { name: "Generative AI Master", issuer: "Great Learning" },
  { name: "Marketing Management & Strategies", issuer: "Great Learning" },
];
export const accentColors: Record<Accent, string> = {
  sky: "#38bdf8",
  emerald: "#34d399",
  lime: "#a3e635",
  blue: "#60a5fa",
  violet: "#a78bfa",
  pink: "#f472b6",
};
