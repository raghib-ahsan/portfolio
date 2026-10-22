import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { certifications, accentColors } from "@/lib/journey";
const display = Space_Grotesk({ subsets: ["latin"] });
const mono = JetBrains_Mono({ subsets: ["latin"] });
const badgeAccents = ["sky", "emerald", "lime", "blue", "violet", "pink"] as const;
export default function Certifications() {
  return (
    <section id="certifications" className="py-16 md:py-20">
      <p className={`${mono.className} text-[11px] uppercase tracking-[0.14em] text-neutral-400`}>
        Credentials
      </p>
      <h2 className={`${display.className} mt-2 bg-linear-to-r from-pink-600 via-violet-600 to-sky-600 bg-clip-text text-3xl font-medium text-transparent md:text-4xl`}>
        Certifications
      </h2>
      <div className="mt-8 flex flex-wrap gap-3">
        {certifications.map((cert, index) => {
          const color = accentColors[badgeAccents[index % badgeAccents.length]];
          return (
            <div
              key={cert.name}
              className="relative overflow-hidden rounded-xl bg-black/[0.02] px-4 py-3"
              style={{ borderLeft: `2px solid ${color}` }}
            >
              <div
                className="pointer-events-none absolute -right-6 -top-6 size-20 rounded-full opacity-[0.1]"
                style={{ background: color }}
              />
              <p className="relative text-[13px] font-medium text-neutral-900">{cert.name}</p>
              <p className={`${mono.className} relative mt-1 text-[11px] text-neutral-500`}>
                {cert.issuer}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
