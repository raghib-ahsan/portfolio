"use client";
import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
const display = Space_Grotesk({ subsets: ["latin"] });
const mono = JetBrains_Mono({ subsets: ["latin"] });
const stageColors = ["bg-sky-400", "bg-violet-400", "bg-amber-400", "bg-emerald-400"];
export default function FunnelSimulator() {
  const [inquiries, setInquiries] = useState(500);
  const [callRate, setCallRate] = useState(60);
  const [appRate, setAppRate] = useState(50);
  const [enrollRate, setEnrollRate] = useState(40);
  const stages = useMemo(() => {
    const calls = Math.round(inquiries * (callRate / 100));
    const applications = Math.round(calls * (appRate / 100));
    const enrolled = Math.round(applications * (enrollRate / 100));
    return [
      { label: "Enquiries", value: inquiries },
      { label: "Counselling calls", value: calls },
      { label: "Applications", value: applications },
      { label: "Enrolled", value: enrolled },
    ];
  }, [inquiries, callRate, appRate, enrollRate]);
  const enrolled = stages[3].value;
  const overallRate = inquiries > 0 ? (enrolled / inquiries) * 100 : 0;
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <p className={`${mono.className} text-[11px] uppercase tracking-[0.14em] text-sky-400`}>
        Try it
      </p>
      <h3 className={`${display.className} mt-1 text-lg font-medium text-white`}>
        Admissions funnel simulator
      </h3>
      <p className="mt-1 text-[13px] text-neutral-400">
        The same funnel logic behind my Admission Planner CRM.
      </p>
      <div className="mt-5 space-y-4">
        <Slider label="Enquiries this month" value={inquiries} min={50} max={2000} step={10} onChange={setInquiries} />
        <Slider label="Enquiry to call rate" value={callRate} min={0} max={100} step={1} suffix="%" onChange={setCallRate} />
        <Slider label="Call to application rate" value={appRate} min={0} max={100} step={1} suffix="%" onChange={setAppRate} />
        <Slider label="Application to enrollment rate" value={enrollRate} min={0} max={100} step={1} suffix="%" onChange={setEnrollRate} />
      </div>
      <div className="mt-6 rounded-xl border border-white/5 bg-black/20 px-4 py-3 text-center">
        <p className={`${display.className} text-2xl font-semibold text-emerald-400`}>
          {enrolled.toLocaleString("en-IN")} enrolled
        </p>
        <p className="mt-0.5 text-[11px] text-neutral-500">
          {overallRate.toFixed(1)}% overall enquiry-to-enrollment rate
        </p>
      </div>
      <div className="mt-5 space-y-2.5">
        {stages.map((stage, i) => {
          const pct = inquiries > 0 ? (stage.value / inquiries) * 100 : 0;
          return (
            <div key={stage.label}>
              <div className="flex items-center justify-between text-[12px] text-neutral-400">
                <span>{stage.label}</span>
                <span className={`${mono.className} text-neutral-200`}>
                  {stage.value.toLocaleString("en-IN")}
                </span>
              </div>
              <div className="mt-1 h-2 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  key={stage.value}
                  className={`h-full rounded-full ${stageColors[i]}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${pct}%` }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
function Slider({
  label,
  value,
  min,
  max,
  step,
  suffix = "",
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  suffix?: string;
  onChange: (n: number) => void;
}) {
  return (
    <label className="block">
      <div className="flex items-center justify-between text-[12px] text-neutral-400">
        <span>{label}</span>
        <span className={`${display.className} text-[13px] font-medium text-white`}>
          {value}
          {suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-1.5 w-full accent-sky-400"
      />
    </label>
  );
}
