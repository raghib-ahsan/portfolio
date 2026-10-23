"use client";
import { useMemo, useState } from "react";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
const display = Space_Grotesk({ subsets: ["latin"] });
const mono = JetBrains_Mono({ subsets: ["latin"] });
export default function CplCalculator() {
  const [spend, setSpend] = useState("20000");
  const [leads, setLeads] = useState("150");
  const [conversions, setConversions] = useState("30");
  const [revenuePerSale, setRevenuePerSale] = useState("8000");
  const { cpl, cpa, revenue, roas } = useMemo(() => {
    const spendNum = Number(spend) || 0;
    const leadsNum = Number(leads) || 0;
    const conversionsNum = Number(conversions) || 0;
    const revenuePerSaleNum = Number(revenuePerSale) || 0;
    const cpl = leadsNum > 0 ? spendNum / leadsNum : 0;
    const cpa = conversionsNum > 0 ? spendNum / conversionsNum : 0;
    const revenue = conversionsNum * revenuePerSaleNum;
    const roas = spendNum > 0 ? revenue / spendNum : 0;
    return { cpl, cpa, revenue, roas };
  }, [spend, leads, conversions, revenuePerSale]);
  const fmt = (n: number) => Math.round(n).toLocaleString("en-IN");
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <p className={`${mono.className} text-[11px] uppercase tracking-[0.14em] text-emerald-400`}>
        Try it
      </p>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <Field label="Ad spend (Rs.)" value={spend} onChange={setSpend} />
        <Field label="Leads generated" value={leads} onChange={setLeads} />
        <Field label="Conversions" value={conversions} onChange={setConversions} />
        <Field label="Revenue / sale (Rs.)" value={revenuePerSale} onChange={setRevenuePerSale} />
      </div>
      <div className="mt-6 grid grid-cols-2 gap-3">
        <Stat label="Cost per lead" value={`Rs. ${fmt(cpl)}`} accent="text-sky-400" />
        <Stat label="Cost per acquisition" value={`Rs. ${fmt(cpa)}`} accent="text-violet-400" />
        <Stat label="Revenue generated" value={`Rs. ${fmt(revenue)}`} accent="text-emerald-400" />
        <Stat label="Return on ad spend" value={`${roas.toFixed(1)}x`} accent="text-amber-400" />
      </div>
    </div>
  );
}
function Field({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="block">
      <span className="text-[11px] text-neutral-400">{label}</span>
      <input
        type="text"
        inputMode="numeric"
        value={value}
        onChange={(e) => {
          const next = e.target.value;
          if (next === "" || /^[0-9]+$/.test(next)) {
            onChange(next);
          }
        }}
        onBlur={() => {
          if (value === "") onChange("0");
        }}
        className={`${mono.className} mt-1 w-full rounded-lg border border-white/10 bg-white px-3 py-2 text-[14px] text-neutral-900 outline-none transition focus:border-emerald-400/60`}
      />
    </label>
  );
}
function Stat({ label, value, accent }: { label: string; value: string; accent: string }) {
  return (
    <div className="rounded-xl border border-white/5 bg-black/20 px-3 py-3">
      <p className={`${display.className} text-xl font-semibold ${accent}`}>{value}</p>
      <p className="mt-0.5 text-[11px] text-neutral-500">{label}</p>
    </div>
  );
}
