export type Accent = "sky" | "emerald" | "lime" | "blue" | "violet" | "pink";
export type JourneyProject = {
  name: string;
  stack: string[];
  link: string;
  why: string;
  features: string[];
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
    projects: [],
  },
  {
    period: "Mar 2022 \u2013 Oct 2023",
    era: "Spreadsheets",
    accent: "emerald",
    role: "Admissions Coordinator",
    org: "Khadimul Islam",
    summary:
      "Owned full-lifecycle admissions operations for the institute \u2014 high-volume advisory calls, candidate tracking pipelines and consultative counselling that guided families through enrollment requirements and onboarding. Streamlined student records and admissions pipelines in Excel, with weekly progress reporting to senior management.",
    projects: [],
  },
  {
    period: "Oct 2023 \u2013 Sep 2025",
    era: "Automation",
    accent: "lime",
    role: "Business Development Executive \u2014 Outreach & Collaboration",
    org: "Self Prep IAS",
    summary:
      "Restructured the admissions sales funnel and expanded institutional channels, converting 100+ high-intent leads through consultative counselling sessions at a consistent 70% closing rate. Formed coaching-centre alliances that grew market reach by 30%, and automated spreadsheet-based reporting to cut turnaround time by 70%.",
    result: "+18% admissions revenue \u00b7 70% close rate",
    projects: [
      {
        name: "Admission Planner CRM \u2014 Staff Portal",
        stack: ["Google Apps Script", "Google Sheets"],
        link: "https://script.google.com/macros/s/AKfycbyJZKyHjifov1u2ykN2PUHrSuMJ4aBO3dnjLG6nb6x24drtV4M8Tg_u2xlz4YVsztg/exec",
        why: "Self Prep IAS tracked every admission lead by hand across scattered registers and calls. I built a lightweight CRM counsellors could log into daily to see assigned leads, call outcomes, and follow-up dates \u2014 no training overhead.",
        features: [
          "Lead assignment per counsellor",
          "Call outcome logging",
          "Automated follow-up reminders",
          "Individual staff login",
        ],
      },
      {
        name: "Admission Planner CRM \u2014 Admin Portal",
        stack: ["Google Apps Script", "Google Sheets"],
        link: "https://script.google.com/macros/s/AKfycbyJZKyHjifov1u2ykN2PUHrSuMJ4aBO3dnjLG6nb6x24drtV4M8Tg_u2xlz4YVsztg/exec?admin=1",
        why: "Management had to ask each counsellor individually for updates. I split out an admin layer with one team-wide view of lead status and conversion performance.",
        features: [
          "Team-wide lead dashboard",
          "Conversion funnel view",
          "Daily activity summary",
          "Admin-only access",
        ],
      },
    ],
  },
  {
    period: "Oct 2025 \u2013 Mar 2026",
    era: "Outreach & partnerships",
    accent: "blue",
    role: "Senior Associate \u2014 Outreach & Partnership Marketing",
    org: "Hi-Tech Institute of Engineering & Technology",
    summary:
      "Built an institutional outreach pipeline from zero \u2014 school and college partnerships across Delhi NCR \u2014 and ran IISDT-method career workshops for 500+ prospective students to resolve hesitation barriers and accelerate admissions decisions. Automated Google Apps Script dashboards gave leadership real-time visibility into regional lead conversion velocity and outreach ROI.",
    result: "40+ partnerships \u00b7 80% close rate",
    projects: [
      {
        name: "knowurself.in \u2014 career assessment platform",
        stack: ["VS Code", "GitHub", "Vercel"],
        link: "https://knowurself.in/",
        why: "Students were picking streams and courses based on peer pressure and guesswork. I built an AI-powered assessment to give them a structured answer \u2014 and turned that clarity into a qualified lead source for partner institutes.",
        features: [
          "AI-powered career assessment",
          "Student + institute dashboards",
          "Lead capture for partner schools/colleges",
          "Hosted on Vercel with a Neon database",
        ],
      },
      {
        name: "Admission Planner \u2014 rebuilt as a web app",
        stack: ["VS Code", "GitHub", "Vercel"],
        link: "#",
        why: "The original Apps Script CRM worked but got slow as lead volume grew. I rebuilt it as a proper web app so counsellors had a faster, more reliable tool.",
        features: [
          "Faster lead search & filtering",
          "Role-based staff/admin access",
          "Built on a real developer stack",
          "Replaces the spreadsheet-based original",
        ],
      },
    ],
  },
  {
    period: "Apr 2026 \u2013 Present",
    era: "Growth engine",
    accent: "violet",
    role: "Growth Marketing Specialist",
    org: "Bismil International Academy",
    summary:
      "Run full-funnel Meta Ads (Facebook & Instagram lead generation) end to end, applying student decision psychology to ad copy, landing pages and lead follow-up to maximize inquiry-to-campus-visit conversion. Engineered a centralized admissions CRM from scratch in Google Apps Script, replacing 12 disparate spreadsheets and cutting manual tasks by 65%. Instrumented GA4, Microsoft Clarity and Meta Pixel/CAPI tracking across high-speed landing pages built on VS Code, GitHub and Cloudflare.",
    result: "+20% admissions \u00b7 600+ students \u00b7 14\u21926 day lead cycle",
    projects: [
      {
        name: "School Management System \u2014 v1",
        stack: ["Google Apps Script"],
        link: "https://script.google.com/macros/s/AKfycbzLrGxDsEmKzbki2k-OYplF_OruuOqNVRZFRpVmfHxUgyU4nK3ZF_8zjHDlKGtcKBxyXg/exec",
        why: "Bismil International Academy ran fee tracking and admin work across 12 different spreadsheets. I built this to pull all of that into one tool staff could actually use without retraining.",
        features: [
          "Single source of truth for staff records",
          "Fee tracking",
          "Built fast on Google Apps Script",
          "No new software for staff to learn",
        ],
      },
      {
        name: "School Management System \u2014 rebuilt",
        stack: ["VS Code", "GitHub", "Cloudflare", "Neon"],
        link: "#",
        why: "Once the Apps Script version proved the workflow, I rebuilt it as a real website with a proper database \u2014 scaling past what spreadsheets could handle and doubling as the school's public site.",
        features: [
          "Public website + internal admin tools",
          "Neon Postgres database",
          "Deployed on Cloudflare",
          "Built with VS Code & GitHub",
        ],
      },
      {
        name: "Website analytics & behaviour tracking",
        stack: ["GA4", "Microsoft Clarity"],
        link: "https://bismilinternationalacademy.com",
        why: "I needed to see exactly where visitors dropped off on admission pages instead of guessing, so I wired up analytics and session recordings to diagnose the funnel.",
        features: [
          "GA4 event tracking",
          "Microsoft Clarity session recordings",
          "Funnel drop-off analysis",
          "Feeds directly into ad optimization",
        ],
      },
      {
        name: "Meta Ads performance sheet \u2014 CPL, CPA, ROAS, CAC",
        stack: ["Google Sheets", "Meta Ads Manager"],
        link: "#",
        why: "Ad spend was going out without a clear read on what it was returning. I built a live tracking sheet pulling Meta Ads data to see cost-per-lead and return on spend at a glance.",
        features: [
          "Live CPL / CPA / ROAS / CAC tracking",
          "Pulled from Meta Ads Manager data",
          "Guides budget reallocation",
          "Built in Google Sheets",
        ],
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
