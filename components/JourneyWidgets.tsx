"use client";
import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "motion/react";
import { ChevronRight } from "lucide-react";
export function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);
  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}
export function SkillTrack({ skills }: { skills: string[] }) {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-x-1.5 gap-y-2.5">
        {skills.map((skill, i) => {
          const isLast = i === skills.length - 1;
          return (
            <motion.span
              key={skill}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="inline-flex items-center gap-1.5"
            >
              <span
                className={
                  isLast
                    ? "rounded-full border border-pink-300/40 bg-pink-400/15 px-3 py-1 text-xs font-medium text-pink-100"
                    : "rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75"
                }
              >
                {skill}
              </span>
              {!isLast && <ChevronRight className="size-3.5 text-white/30" />}
            </motion.span>
          );
        })}
      </div>
      <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-linear-to-r from-sky-400 via-violet-400 to-pink-400"
        />
      </div>
      <div className="mt-2 flex justify-between text-[11px] text-white/45">
        <span>2021</span>
        <span>Today</span>
      </div>
    </div>
  );
}
