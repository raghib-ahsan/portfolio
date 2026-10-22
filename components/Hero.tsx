"use client";
import { useEffect, useRef, useState } from "react";
import { Space_Grotesk } from "next/font/google";
import { Sparkles } from "lucide-react";
import { journeyStats } from "@/lib/journey";
import Reveal from "@/components/Reveal";
const display = Space_Grotesk({ subsets: ["latin"] });
const tileAccents = [
  { bg: "from-sky-50 to-white", text: "text-sky-600" },
  { bg: "from-violet-50 to-white", text: "text-violet-600" },
  { bg: "from-emerald-50 to-white", text: "text-emerald-600" },
  { bg: "from-pink-50 to-white", text: "text-pink-600" },
  { bg: "from-amber-50 to-white", text: "text-amber-600" },
  { bg: "from-indigo-50 to-white", text: "text-indigo-600" },
];
function useCountUp(target: number, duration = 1400) {
  const [value, setValue] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (started.current) return;
    started.current = true;
    const start = performance.now();
    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setValue(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [target, duration]);
  return value;
}
function StatTile({
  value,
  suffix,
  label,
  accent,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  accent: (typeof tileAccents)[number];
  delay: number;
}) {
  const count = useCountUp(value);
  return (
    <div
      className={`rounded-2xl border border-black/10 bg-gradient-to-br ${accent.bg} p-5 shadow-sm`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <p className={`${display.className} text-3xl font-bold ${accent.text}`}>
        {count}
        {suffix}
      </p>
      <p className="mt-1 text-[12px] leading-snug text-neutral-500">{label}</p>
    </div>
  );
}
export default function Hero() {
  return (
    <div className="grid gap-10 py-20 md:grid-cols-2 md:items-center md:py-28">
      <div className="md:order-2">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-neutral-700 backdrop-blur">
            <Sparkles className="size-3.5 text-amber-500" />
            My journey &middot; 2021 &ndash; today
          </span>
          <h1
            className={`${display.className} mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-neutral-900 sm:text-5xl md:text-6xl`}
          >
            From Excel sheets to{" "}
            <span className="bg-linear-to-r from-sky-600 via-violet-600 to-pink-600 bg-clip-text text-transparent">
              production systems.
            </span>
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-neutral-600 md:text-base">
            Every year in the education sector, I picked up a sharper tool and
            used it to ship a real system for real admissions teams.
          </p>
        </Reveal>
      </div>
      <div className="md:order-1">
        <Reveal delay={0.15}>
          <div className="grid grid-cols-2 gap-3">
            {journeyStats.map((stat, i) => (
              <StatTile
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                accent={tileAccents[i % tileAccents.length]}
                delay={i * 100}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
