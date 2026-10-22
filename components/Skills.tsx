import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import {
  SiMeta,
  SiGoogleanalytics,
  SiGooglesearchconsole,
  SiCanvas,
  SiNotion,
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiTailwindcss,
  SiPhp,
  SiWordpress,
  SiMysql,
  SiSupabase,
  SiVercel,
  SiGithub,
  SiRazorpay,
  SiN8N,
} from "react-icons/si";
import { FaShieldAlt, FaMicrosoft, FaBolt, FaServer } from "react-icons/fa";
import type { IconType } from "react-icons";
const display = Space_Grotesk({ subsets: ["latin"] });
const mono = JetBrains_Mono({ subsets: ["latin"] });
type Skill = { name: string; Icon: IconType; color: string };
type Group = { title: string; items: Skill[] };
const groups: Group[] = [
  {
    title: "Growth & marketing",
    items: [
      { name: "Meta Ads Manager", Icon: SiMeta, color: "#0866ff" },
      { name: "Google Analytics", Icon: SiGoogleanalytics, color: "#e37400" },
      { name: "Search Console", Icon: SiGooglesearchconsole, color: "#458cf5" },
      { name: "Microsoft Clarity", Icon: FaMicrosoft, color: "#2563eb" },
      { name: "Canva", Icon: SiCanvas, color: "#00c4cc" },
      { name: "Notion", Icon: SiNotion, color: "#171717" },
    ],
  },
  {
    title: "Full stack development",
    items: [
      { name: "Next.js", Icon: SiNextdotjs, color: "#171717" },
      { name: "React", Icon: SiReact, color: "#61dafb" },
      { name: "Node.js", Icon: SiNodedotjs, color: "#5fa04e" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178c6" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38bdf8" },
      { name: "PHP", Icon: SiPhp, color: "#777bb4" },
      { name: "WordPress", Icon: SiWordpress, color: "#21759b" },
      { name: "MySQL", Icon: SiMysql, color: "#4479a1" },
    ],
  },
  {
    title: "Platforms, infra & security",
    items: [
      { name: "Supabase", Icon: SiSupabase, color: "#3ecf8e" },
      { name: "Neon", Icon: FaBolt, color: "#00e599" },
      { name: "Vercel", Icon: SiVercel, color: "#171717" },
      { name: "Hostinger", Icon: FaServer, color: "#673de6" },
      { name: "GitHub", Icon: SiGithub, color: "#171717" },
      { name: "Razorpay", Icon: SiRazorpay, color: "#528ff0" },
      { name: "n8n", Icon: SiN8N, color: "#ea4b71" },
      { name: "Security", Icon: FaShieldAlt, color: "#d4af37" },
    ],
  },
];
function SkillChip({ skill }: { skill: Skill }) {
  const { Icon } = skill;
  return (
    <div className="flex shrink-0 items-center gap-2.5 rounded-full border border-black/10 bg-white px-4 py-2.5 shadow-sm transition hover:border-black/25 hover:shadow-md">
      <Icon size={18} color={skill.color} className="shrink-0" />
      <span className="whitespace-nowrap text-[13px] font-medium text-neutral-800">
        {skill.name}
      </span>
    </div>
  );
}
function FloatingRow({ items, reverse = false }: { items: Skill[]; reverse?: boolean }) {
  const loop = [...items, ...items];
  return (
    <div className="group relative overflow-hidden py-2">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />
      <div
        className="marquee-track flex w-max gap-3 group-hover:[animation-play-state:paused]"
        style={{ animationDirection: reverse ? "reverse" : "normal" }}
      >
        {loop.map((skill, i) => (
          <SkillChip key={`${skill.name}-${i}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}
export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-20">
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee-scroll 24s linear infinite;
        }
      `}</style>
      <p className={`${mono.className} text-[11px] uppercase tracking-[0.14em] text-neutral-400`}>
        Toolkit
      </p>
      <h2 className={`${display.className} mt-2 bg-linear-to-r from-emerald-600 via-sky-600 to-violet-600 bg-clip-text text-3xl font-medium text-transparent md:text-4xl`}>
        Skills
      </h2>
      <p className="mt-1 text-sm text-neutral-500">Hover a row to pause it.</p>
      <div className="mt-8 space-y-5">
        {groups.map((group, index) => (
          <div key={group.title}>
            <p className={`${mono.className} mb-2 text-[11px] uppercase tracking-[0.1em] text-neutral-400`}>
              {group.title}
            </p>
            <FloatingRow items={group.items} reverse={index % 2 === 1} />
          </div>
        ))}
      </div>
    </section>
  );
}
