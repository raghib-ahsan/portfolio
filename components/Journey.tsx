"use client";
import { useMemo } from "react";
import { motion } from "motion/react";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { ArrowUpRight, Award } from "lucide-react";
import { chapters, type Accent } from "@/lib/journey";
const serif = Space_Grotesk({ subsets: ["latin"] });
const mono = JetBrains_Mono({ subsets: ["latin"] });
const accents: Record<Accent, { dot: string; badge: string; text: string }> = {
  sky: { dot: "#0284c7", badge: "bg-sky-50 text-sky-700", text: "text-sky-700" },
  emerald: { dot: "#059669", badge: "bg-emerald-50 text-emerald-700", text: "text-emerald-700" },
  lime: { dot: "#4d7c0f", badge: "bg-lime-50 text-lime-700", text: "text-lime-700" },
  blue: { dot: "#2563eb", badge: "bg-blue-50 text-blue-700", text: "text-blue-700" },
  violet: { dot: "#7c3aed", badge: "bg-violet-50 text-violet-700", text: "text-violet-700" },
  pink: { dot: "#db2777", badge: "bg-pink-50 text-pink-700", text: "text-pink-700" },
};
const WAVE_H = 56;
const PEAK_TOP = 14;
const PEAK_BOTTOM = 42;
const TRACK_W = 1000;
function buildWavePath(count: number) {
  const colW = TRACK_W / count;
  let d = `M 0 ${WAVE_H / 2}`;
  for (let i = 0; i < count; i++) {
    const x0 = i * colW;
    const x1 = (i + 1) * colW;
    const peakY = i % 2 === 0 ? PEAK_TOP : PEAK_BOTTOM;
    d += ` C ${x0 + colW * 0.25} ${peakY}, ${x0 + colW * 0.75} ${peakY}, ${x1} ${WAVE_H / 2}`;
  }
  return d;
}
function ChapterBody({ chapter }: { chapter: (typeof chapters)[number] }) {
  const a = accents[chapter.accent];
  return (
    <>
      <p className={`${mono.className} text-[12px] font-medium text-neutral-700`}>
        {chapter.period}
      </p>
      <span
        className={`${mono.className} mt-2 inline-block rounded-full px-2 py-0.5 text-[10px] uppercase tracking-[0.1em] ${a.badge}`}
      >
        {chapter.era}
      </span>
      <h3 className={`${serif.className} mt-2 text-base font-medium leading-snug text-neutral-900`}>
        {chapter.role}
      </h3>
      <p className={`mt-1 text-[13px] font-medium ${a.text}`}>{chapter.org}</p>
      <p className="mt-2 text-[13px] leading-relaxed text-neutral-600 line-clamp-5">
        {chapter.summary}
      </p>
      {chapter.result && (
        <span
          className={`mt-3 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium ${a.badge}`}
        >
          <Award className="size-3" />
          {chapter.result}
        </span>
      )}
      <div className="mt-3 space-y-1.5">
        {chapter.projects.map((project) => (
          <a
            key={project.name}
            href={project.link}
            className="group flex items-center justify-between gap-2 rounded-lg border border-black/10 px-2.5 py-1.5 transition hover:border-black/25 hover:bg-black/[0.03]"
          >
            <p className="truncate text-[12px] text-neutral-800">{project.name}</p>
            <ArrowUpRight className="size-3 shrink-0 text-neutral-300 transition group-hover:text-neutral-700" />
          </a>
        ))}
      </div>
    </>
  );
}
export default function Journey() {
  const n = chapters.length;
  const pathD = useMemo(() => buildWavePath(n), [n]);
  return (
    <section id="journey" className="pt-6 pb-20 md:pt-10 md:pb-28">
      <div className="border-b-2 border-black/15 pb-6 text-center">
        <p className={`${serif.className} bg-linear-to-r from-emerald-600 via-sky-600 to-violet-600 bg-clip-text text-2xl font-medium text-transparent md:text-3xl`}>
          Professional record
        </p>
        <p className="mt-1 text-sm text-neutral-500">
          2021 to present &middot; education sector
        </p>
      </div>
      <div className="mt-10 hidden -mx-5 px-4 sm:-mx-8 sm:px-6 md:block lg:-mx-12 lg:px-8">
        <div className="relative">
          <svg
            className="pointer-events-none absolute left-0 top-0 w-full"
            height={WAVE_H}
            viewBox={`0 0 ${TRACK_W} ${WAVE_H}`}
            preserveAspectRatio="none"
          >
            <path
              d={pathD}
              fill="none"
              stroke="rgba(0,0,0,0.15)"
              strokeWidth={2}
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <div style={{ height: WAVE_H }} className="relative">
            {chapters.map((chapter, index) => {
              const a = accents[chapter.accent];
              const leftPct = ((index + 0.5) / n) * 100;
              const topPx = index % 2 === 0 ? PEAK_TOP : PEAK_BOTTOM;
              return (
                <motion.div
                  key={chapter.role}
                  className="absolute size-3 -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{ left: `${leftPct}%`, top: topPx, background: a.dot }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.4, ease: "backOut", delay: index * 0.08 }}
                />
              );
            })}
          </div>
          <div
            className="mt-2 grid gap-4"
            style={{ gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` }}
          >
            {chapters.map((chapter, index) => (
              <motion.div
                key={chapter.role}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.08 + 0.1 }}
                className="min-w-0"
              >
                <ChapterBody chapter={chapter} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10 -mx-5 space-y-10 px-1 sm:-mx-8 sm:px-3 md:hidden">
        {chapters.map((chapter, index) => {
          const a = accents[chapter.accent];
          return (
            <motion.div
              key={chapter.role}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="flex gap-3"
            >
              <span
                className="mt-1 size-2.5 shrink-0 rounded-full"
                style={{ background: a.dot }}
              />
              <div className="min-w-0 flex-1">
                <ChapterBody chapter={chapter} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
