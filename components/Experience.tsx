import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { chapters, accentColors } from "@/lib/journey";
const display = Space_Grotesk({ subsets: ["latin"] });
const mono = JetBrains_Mono({ subsets: ["latin"] });
const experience = [...chapters].reverse();
function initials(name: string) {
  return name
    .split(" ")
    .filter((w) => w[0] === w[0]?.toUpperCase())
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}
export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-20">
      <p className={`${mono.className} text-[11px] uppercase tracking-[0.14em] text-neutral-400`}>
        Track record
      </p>
      <h2 className={`${display.className} mt-2 bg-linear-to-r from-blue-600 via-violet-600 to-pink-600 bg-clip-text text-3xl font-medium text-transparent md:text-4xl`}>
        Work experience
      </h2>
      <div className="mt-10 space-y-10">
        {experience.map((item, index) => {
          const color = accentColors[item.accent];
          const flip = index % 2 === 1;
          return (
            <div
              key={item.role}
              className={`grid items-center gap-6 md:grid-cols-5 md:gap-10 ${
                flip ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Photo + logo badge placeholder.
                  Swap the gradient div below for:
                  <Image src="/images/exp-<n>-photo.jpg" alt={item.org} fill className="object-cover" />
                  and the small circle for:
                  <Image src="/images/exp-<n>-logo.png" alt={item.org} fill className="object-contain p-1.5" /> */}
              <div className="relative md:col-span-2">
                <div
                  className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${color}33, ${color}0d)`,
                    border: `1px solid ${color}40`,
                  }}
                >
                  <span
                    className={`${display.className} text-4xl font-semibold opacity-40`}
                    style={{ color }}
                  >
                    {initials(item.org)}
                  </span>
                  <span className="absolute bottom-2 right-2 text-[10px] text-neutral-400/70">
                    photo
                  </span>
                </div>
                <div
                  className="absolute -bottom-4 -right-4 flex size-14 items-center justify-center rounded-xl border-2 border-white bg-white shadow-md"
                  title={`${item.org} logo`}
                >
                  <span
                    className={`${mono.className} text-[11px] font-bold`}
                    style={{ color }}
                  >
                    {initials(item.org).slice(0, 2)}
                  </span>
                </div>
              </div>
              <div className="md:col-span-3">
                <p className={`${mono.className} text-[12px] text-neutral-500`}>{item.period}</p>
                <h3 className="mt-1 text-lg font-medium text-neutral-900">{item.role}</h3>
                <p className="mt-0.5 text-[13px] font-medium" style={{ color }}>
                  {item.org}
                </p>
                <p className="mt-2 text-[14px] leading-relaxed text-neutral-600">{item.summary}</p>
                {item.result && (
                  <span
                    className="mt-3 inline-block rounded-full px-2.5 py-1 text-[11px] font-medium"
                    style={{ background: `${color}1a`, color }}
                  >
                    {item.result}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
