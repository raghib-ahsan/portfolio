export type Project = {
  name: string;
  stack: string[];
  link: string;
};
export type Chapter = {
  period: string;
  role: string;
  org: string;
  summary: string;
  stamp?: string;
  projects: Project[];
};
export const journeyData: Chapter[] = [
  {
    period: "2021",
    role: "Graduation & First Freelance Build",
    org: "B.A. English (Hons), Patliputra University",
    summary:
      "Finished my degree, learned WordPress and the basics of digital marketing, and shipped my first freelance client website.",
    stamp: "First client",
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
    role: "Admissions Coordinator",
    org: "Khadimul Islam",
    summary:
      "Ran day-to-day admissions: counselling calls, enrollment tracking and weekly reports for management.",
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
    role: "Business Development Executive",
    org: "Self Prep IAS",
    summary:
      "Restructured the admissions funnel and moved lead tracking out of scattered sheets into an automated system.",
    stamp: "+18% admissions revenue",
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
    role: "Senior Associate, Outreach & Partnerships",
    org: "Hi-Tech Institute of Engineering & Technology",
    summary:
      "Built a school and college partnership pipeline from zero, and moved my builds onto a real developer stack.",
    stamp: "40+ partnerships \u00b7 80% close",
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
    role: "Growth Marketing Specialist",
    org: "Bismil International Academy",
    summary:
      "Own the admissions growth engine, from the systems staff use every day to the tracking behind every campaign.",
    stamp: "+20% admissions",
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
  {
    period: "Now",
    role: "AI-assisted Full-Stack Development",
    org: "Claude AI",
    summary:
      "Building production web apps with AI-assisted development (Claude AI), starting with this portfolio.",
    projects: [
      {
        name: "This portfolio",
        stack: ["Next.js", "Tailwind CSS", "Neon", "Vercel"],
        link: "#",
      },
    ],
  },
];
export type ExperienceRole = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};
export const experienceData: ExperienceRole[] = [
  {
    role: "Growth Marketing Specialist",
    company: "Bismil International Academy",
    period: "Mar 2026 - Present",
    bullets: [
      "Ran full-funnel Meta Ads (FB/IG Lead Gen), cutting lead cycle from 14 to 6 days, driving 20% admissions growth (600+ students)",
      "Built a CRM from scratch (Google Apps Script), replacing 12 spreadsheets, cutting manual work by 65%",
      "Deployed GA4, Microsoft Clarity, and Meta Pixel tracking; built landing pages using VS Code, GitHub, and Cloudflare",
    ],
  },
  {
    role: "Senior Associate - Outreach and Partnership Marketing",
    company: "Hi-Tech Institute of Engineering and Technology",
    period: "Oct 2025 - Mar 2026",
    bullets: [
      "Built an institutional outreach pipeline from scratch - secured 40+ school/college tie-ups at an 80% close rate",
      "Ran career workshops for 500+ students using IISDT counselling methods",
      "Built automated Google Apps Script dashboards for real-time lead conversion visibility",
    ],
  },
  {
    role: "Business Development Executive",
    company: "Self Prep IAS",
    period: "Oct 2023 - Sep 2025",
    bullets: [
      "Restructured the sales funnel - drove an 18% increase in monthly admissions revenue",
      "Converted 100+ high-intent leads through consultative counselling at a 70% close rate",
      "Formed coaching-centre alliances, expanding market reach by 30%",
    ],
  },
  {
    role: "Admissions Coordinator",
    company: "Khadimul Islam",
    period: "Mar 2022 - Oct 2023",
    bullets: [
      "Managed full-lifecycle admissions operations, conducting high-volume advisory calls",
      "Streamlined student records and admissions pipelines in Excel with weekly leadership reporting",
    ],
  },
];
