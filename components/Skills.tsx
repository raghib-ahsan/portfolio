import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { skillGroups, accentColors } from "@/lib/journey";
const display = Space_Grotesk({ subsets: ["latin"] });
const mono = JetBrains_Mono({ subsets: ["latin"] });
const groupAccents = ["emerald", "sky", "violet"] as const;
export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-20">
      <p className={`${mono.className} text-[11px] uppercase tracking-[0.14em] text-neutral-400`}>
        Toolkit
      </p>
      <h2 className={`${display.className} mt-2 bg-linear-to-r from-emerald-600 via-sky-600 to-violet-600 bg-clip-text text-3xl font-medium text-transparent md:text-4xl`}>
        Skills
      </h2>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {skillGroups.map((group, index) => {
          const color = accentColors[groupAccents[index % groupAccents.length]];
          return (
            <div
              key={group.title}
              className="relative overflow-hidden rounded-xl bg-black/[0.02] p-5"
              style={{ borderLeft: `2px solid ${color}` }}
            >
              <div
                className="pointer-events-none absolute -right-8 -top-8 size-28 rounded-full opacity-[0.1]"
                style={{ background: color }}
              />
              <p className={`${mono.className} relative text-[12px] uppercase tracking-[0.1em]`} style={{ color }}>
                {group.title}
              </p>
              <div className="relative mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-black/10 px-3 py-1 text-[13px] text-neutral-800"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
