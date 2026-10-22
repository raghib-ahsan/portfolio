"use client";
import { useMemo, useState } from "react";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
const display = Space_Grotesk({ subsets: ["latin"] });
const mono = JetBrains_Mono({ subsets: ["latin"] });
const stageMeta = [
  { label: "Inquiries", color: "#38bdf8" },
  { label: "Counselling calls", color: "#818cf8" },
  { label: "Applications", color: "#fbbf24" },
  { label: "Enrolled", color: "#34d399" },
];
export default function FunnelSection() {
  const [inquiries, setInquiries] = useState(500);
  const [callRate, setCallRate] = useState(60);
  const [appRate, setAppRate] = useState(50);
  const [enrollRate, setEnrollRate] = useState(40);
  const values = useMemo(() => {
    const calls = Math.round(inquiries * (callRate / 100));
    const applications = Math.round(calls * (appRate / 100));
    const enrolled = Math.round(applications * (enrollRate / 100));
    return [inquiries, calls, applications, enrolled];
  }, [inquiries, callRate, appRate, enrollRate]);
  const max = values[0] || 1;
  // width of each stage as a % of the funnel's max width, with a visual taper
  // on the final stage so the funnel closes to a narrow base instead of a flat edge.
  const widths = values.map((v, i) => {
    const pct = (v / max) * 100;
    return i === values.length - 1 ? Math.max(pct * 0.6, 14) : Math.max(pct, 18);
  });
  const overallRate = inquiries > 0 ? (values[3] / inquiries) * 100 : 0;
  return (
    <section
      id="funnel-crm"
      className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-gradient-to-br from-indigo-950 via-slate-950 to-indigo-950 py-16 text-white md:py-20"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-12">
        <p className={`${mono.className} text-[11px] uppercase tracking-[0.14em] text-sky-400`}>
          Try it &middot; Admissions CRM
        </p>
        <h2 className={`${display.className} mt-2 text-2xl font-medium text-white md:text-3xl`}>
          Admissions funnel simulator
        </h2>
        <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-indigo-200/70">
          The same funnel logic that runs inside my Admission Planner CRM
          &mdash; wired to Meta Lead Ads and n8n automation. Move the
          sliders and watch the funnel itself narrow in real time.
        </p>
        <div className="mt-10 grid items-center gap-10 md:grid-cols-2 md:gap-14">
          {/* the literal funnel shape */}
          <div className="mx-auto w-full max-w-xs">
            <div className="flex flex-col items-center">
              {values.map((value, i) => {
                const w = widths[i];
                const nextW = i < widths.length - 1 ? widths[i + 1] : w;
                const topLeft = 50 - w / 2;
                const topRight = 50 + w / 2;
                const botLeft = 50 - nextW / 2;
                const botRight = 50 + nextW / 2;
                return (
                  <div key={stageMeta[i].label} className="relative w-full">
                    <div
                      className="relative flex h-[72px] w-full items-center justify-center transition-[clip-path] duration-500 ease-out"
                      style={{
                        clipPath: `polygon(${topLeft}% 0%, ${topRight}% 0%, ${botRight}% 100%, ${botLeft}% 100%)`,
                        background: stageMeta[i].color,
                      }}
                    >
                      <div className="text-center">
                        <p className={`${display.className} text-lg font-semibold text-neutral-900`}>
                          {value.toLocaleString("en-IN")}
                        </p>
                      </div>
                    </div>
                    <p className={`${mono.className} mt-1 text-center text-[10px] uppercase tracking-[0.1em] text-indigo-200/70`}>
                      {stageMeta[i].label}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center backdrop-blur">
              <p className={`${display.className} text-2xl font-semibold text-emerald-400`}>
                {values[3].toLocaleString("en-IN")} enrolled
              </p>
              <p className="mt-0.5 text-[11px] text-indigo-200/60">
                {overallRate.toFixed(1)}% overall inquiry-to-enrollment rate
              </p>
            </div>
          </div>
          {/* controls */}
          <div className="space-y-5">
            <Slider label="Inquiries this month" value={inquiries} min={50} max={2000} step={10} onChange={setInquiries} />
            <Slider label="Inquiry to call rate" value={callRate} min={0} max={100} step={1} suffix="%" onChange={setCallRate} />
            <Slider label="Call to application rate" value={appRate} min={0} max={100} step={1} suffix="%" onChange={setAppRate} />
            <Slider label="Application to enrollment rate" value={enrollRate} min={0} max={100} step={1} suffix="%" onChange={setEnrollRate} />
          </div>
        </div>
      </div>
    </section>
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
      <div className="flex items-center justify-between text-[12px] text-indigo-200/70">
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
