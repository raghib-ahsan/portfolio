"use client";
import { motion } from "motion/react";
import { JetBrains_Mono } from "next/font/google";
import { growthByYear } from "@/lib/journey";
const mono = JetBrains_Mono({ subsets: ["latin"] });
const WIDTH = 300;
const HEIGHT = 120;
const PAD_X = 14;
const PAD_TOP = 14;
const PAD_BOTTOM = 14;
function buildPath() {
  const max = Math.max(...growthByYear.map((d) => d.value));
  const min = Math.min(...growthByYear.map((d) => d.value));
  const n = growthByYear.length;
  const usableW = WIDTH - PAD_X * 2;
  const usableH = HEIGHT - PAD_TOP - PAD_BOTTOM;
  const points = growthByYear.map((d, i) => {
    const x = PAD_X + (usableW * i) / (n - 1);
    const t = (d.value - min) / (max - min || 1);
    const y = PAD_TOP + usableH * (1 - t);
    return { x, y };
  });
  const d = points
    .map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`))
    .join(" ");
  const areaD = `${d} L ${points[points.length - 1].x} ${HEIGHT - PAD_BOTTOM} L ${points[0].x} ${HEIGHT - PAD_BOTTOM} Z`;
  return { lineD: d, areaD, points };
}
export default function HeroChart() {
  const { lineD, areaD, points } = buildPath();
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-md">
      <p
        className={`${mono.className} mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-white/55`}
      >
        Growth, year on year
      </p>
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="w-full"
        style={{ height: 130 }}
      >
        <defs>
          <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d={areaD}
          fill="url(#areaFill)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        <motion.path
          d={lineD}
          fill="none"
          stroke="#7dd3fc"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
        {points.map((p, i) => (
          <motion.circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={3}
            fill="#38bdf8"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.12, duration: 0.3 }}
          />
        ))}
        <circle r={5} fill="#e0f2fe">
          <animateMotion
            dur="3.5s"
            repeatCount="indefinite"
            path={lineD}
          />
        </circle>
      </svg>
      <div className="mt-1 flex justify-between">
        {growthByYear.map((d) => (
          <span key={d.year} className="text-[10px] text-white/50">
            {d.year}
          </span>
        ))}
      </div>
    </div>
  );
}
