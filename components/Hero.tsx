"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Space_Grotesk } from "next/font/google";
import { Sparkles } from "lucide-react";
import { journeyStats } from "@/lib/journey";
import Reveal from "@/components/Reveal";
import HeroChart from "@/components/HeroChart";
const display = Space_Grotesk({ subsets: ["latin"] });
export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setI((v) => (v + 1) % journeyStats.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);
  const stat = journeyStats[i];
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
        <div className="mt-8 h-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <p
                className={`${display.className} text-3xl font-bold text-neutral-900 md:text-4xl`}
              >
                {stat.value}
                {stat.suffix}
              </p>
              <p className="mt-1 text-sm text-neutral-500">{stat.label}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </Reveal>
      </div>
      <div className="md:order-1">
      <Reveal delay={0.15}>
        <HeroChart />
      </Reveal>
      </div>
    </div>
  );
}
