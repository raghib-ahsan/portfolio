"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { chapters, type JourneyProject } from "@/lib/journey";
import {
  FaChartLine,
  FaChartBar,
  FaChartPie,
  FaBullhorn,
  FaBullseye,
  FaEnvelope,
  FaMousePointer,
  FaRocket,
  FaShareAlt,
  FaThumbsUp,
  FaSearch,
  FaLightbulb,
  FaHashtag,
  FaUserFriends,
  FaWhatsapp,
} from "react-icons/fa";
import type { IconType } from "react-icons";
const display = Space_Grotesk({ subsets: ["latin"] });
const mono = JetBrains_Mono({ subsets: ["latin"] });
function seeded(i: number, salt: number) {
  const x = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
}
const marketingIcons: IconType[] = [
  FaChartLine, FaChartBar, FaChartPie, FaBullhorn, FaBullseye, FaEnvelope,
  FaMousePointer, FaRocket, FaShareAlt, FaThumbsUp, FaSearch, FaLightbulb,
  FaHashtag, FaUserFriends, FaWhatsapp,
];
const COLS = 8;
const ROWS = 6;
const totalCells = COLS * ROWS;
function shuffledIndices(count: number) {
  const arr = Array.from({ length: count }, (_, i) => i);
  for (let i = count - 1; i > 0; i--) {
    const j = Math.floor(seeded(i, 99) * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
const cellOrder = shuffledIndices(totalCells);
function FloatingIcon({
  seed,
  top,
  left,
  size,
  Icon,
}: {
  seed: number;
  top: string;
  left: string;
  size: number;
  Icon: IconType;
}) {
  const isWhatsapp = Icon === FaWhatsapp;
  const dur = 9 + seeded(seed, 3) * 6;
  const delay = seeded(seed, 4) * 4;
  const driftX = 14 + seeded(seed, 5) * 18;
  const direction = seeded(seed, 6) > 0.5 ? 1 : -1;
  return (
    <motion.div
      className="pointer-events-none absolute"
      style={{ top, left, color: isWhatsapp ? "#25D366" : "#e8c766" }}
      animate={{
        y: [0, -14, 0],
        x: [0, driftX * direction, 0],
        opacity: [0.35, 0.8, 0.35],
      }}
      transition={{ duration: dur, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <Icon size={size} />
    </motion.div>
  );
}
function FloatingIcons() {
  return (
    <>
      {cellOrder.map((cellIndex, orderPos) => {
        const col = cellIndex % COLS;
        const row = Math.floor(cellIndex / COLS);
        const jitterX = (seeded(cellIndex, 7) - 0.5) * 7;
        const jitterY = (seeded(cellIndex, 8) - 0.5) * 7;
        const left = `${(col / (COLS - 1)) * 100 + jitterX}%`;
        const top = `${(row / (ROWS - 1)) * 100 + jitterY}%`;
        const Icon = marketingIcons[orderPos % marketingIcons.length];
        const size = 13 + Math.floor(seeded(cellIndex, 9) * 10);
        return (
          <FloatingIcon key={cellIndex} seed={cellIndex} top={top} left={left} size={size} Icon={Icon} />
        );
      })}
    </>
  );
}
function Stars() {
  const stars = Array.from({ length: 60 }).map((_, i) => ({
    x: seeded(i, 1) * 100,
    y: seeded(i, 2) * 100,
    size: 1 + seeded(i, 3) * 1.8,
    dur: 2 + seeded(i, 4) * 3,
    delay: seeded(i, 5) * 4,
    white: seeded(i, 6) > 0.5,
  }));
  return (
    <div className="pointer-events-none absolute inset-0">
      {stars.map((star, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            top: `${star.y}%`,
            left: `${star.x}%`,
            width: star.size,
            height: star.size,
            background: star.white ? "#ffffff" : "#f4e2a8",
          }}
          animate={{ opacity: [0.15, 1, 0.15] }}
          transition={{ duration: star.dur, repeat: Infinity, ease: "easeInOut", delay: star.delay }}
        />
      ))}
    </div>
  );
}
function ArrowIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}
function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
type ProjectWithMeta = JourneyProject & { period: string; org: string };
function ProjectModal({
  project,
  onClose,
}: {
  project: ProjectWithMeta;
  onClose: () => void;
}) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);
  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative mx-auto my-8 w-full max-w-lg rounded-2xl border border-white/10 bg-neutral-950 p-5 text-white md:my-16 md:p-7"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full border border-white/15 text-neutral-400 transition hover:border-white/40 hover:text-white"
          aria-label="Close"
        >
          <CloseIcon className="size-4" />
        </button>
        <p className={`${mono.className} text-[11px] uppercase tracking-[0.1em] text-white/80`}>
          {project.period} &middot; {project.org}
        </p>
        <h3 className={`${display.className} mt-2 text-2xl font-medium leading-snug text-white`}>
          {project.name}
        </h3>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((tool) => (
            <span
              key={tool}
              className={`${mono.className} rounded-full border border-white/10 px-2 py-0.5 text-[10px] font-medium text-neutral-400`}
            >
              {tool}
            </span>
          ))}
        </div>
        <div className="mt-6">
          <p className={`${mono.className} text-[11px] font-semibold uppercase tracking-[0.2em] text-[#e8c766]`}>
            Why I built this
          </p>
          <p className="mt-2 text-[14px] leading-relaxed text-neutral-300">{project.why}</p>
        </div>
        <div className="mt-6">
          <p className={`${mono.className} text-[11px] font-semibold uppercase tracking-[0.2em] text-[#e8c766]`}>
            Features
          </p>
          <ul className="mt-2 space-y-1.5">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-[14px] leading-relaxed text-neutral-300">
                <CheckIcon className="mt-0.5 size-3.5 shrink-0 text-[#e8c766]" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        {project.link !== "#" ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[13px] font-medium text-neutral-950 transition hover:bg-neutral-200"
          >
            Open project
            <ArrowIcon className="size-3.5" />
          </a>
        ) : (
          <p className="mt-7 text-[13px] text-neutral-500">Live link not public yet.</p>
        )}
      </div>
    </div>
  );
}
const allProjects: ProjectWithMeta[] = chapters.flatMap((chapter) =>
  chapter.projects.map((project) => ({
    ...project,
    period: chapter.period,
    org: chapter.org,
  }))
);
export default function Projects() {
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState<ProjectWithMeta | null>(null);
  useEffect(() => setMounted(true), []);
  return (
    <section
      id="projects"
      className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden bg-neutral-950 py-20 text-white md:py-28"
    >
      {mounted && (
      <>
        <Stars />
        <FloatingIcons />
      </>
      )}
      <div className="relative mx-auto max-w-5xl px-5 sm:px-8 lg:px-12">
        <p className={`${mono.className} text-[11px] font-semibold uppercase tracking-[0.3em] text-[#e8c766]`}>
          Proof of work
        </p>
        <h2 className={`${display.className} mt-3 text-3xl font-medium text-white md:text-4xl`}>
          Projects
        </h2>
        <div className="mt-6 h-px w-16 bg-[#d4af37]" />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {allProjects.map((project) => (
            <button
              key={project.name}
              onClick={() => setActive(project)}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-left backdrop-blur-sm transition-colors duration-300 [-webkit-tap-highlight-color:transparent] hover:border-[#d4af37]/40 hover:bg-white/[0.07] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
            >
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.1em] text-white/80`}>
                {project.period}
              </p>
              <h3 className="mt-2 text-[16px] font-medium leading-snug text-white">
                {project.name}
              </h3>
              <p className="mt-1 text-[13px] text-white">{project.org}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.stack.slice(0, 3).map((tool) => (
                  <span
                    key={tool}
                    className={`${mono.className} rounded-full border border-white/10 px-2 py-0.5 text-[10px] font-medium text-white`}
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <div className="relative mt-4 flex items-center gap-1 text-[12px] font-medium text-white transition group-hover:text-white">
                View details
                <ArrowIcon className="size-3.5" />
              </div>
            </button>
          ))}
        </div>
      </div>
      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  );
}
