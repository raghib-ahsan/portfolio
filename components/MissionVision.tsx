import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
const display = Space_Grotesk({ subsets: ["latin"] });
const mono = JetBrains_Mono({ subsets: ["latin"] });
function TargetIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}
function TelescopeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 10.5 19 5l1.2 3.7L4.2 14.2Z" />
      <path d="m9 11.5 1.8 5.6" />
      <path d="M7.5 19.5 10 18l1.6 1.2-1.1 2.3Z" />
      <circle cx="18.5" cy="6.5" r="1.4" />
    </svg>
  );
}
function FlagIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 3v18" />
      <path d="M5 4h12l-3 4 3 4H5" />
    </svg>
  );
}
const pillars = [
  {
    key: "mission",
    label: "Mission",
    Icon: TargetIcon,
    pos: { left: "50%", top: "6%" },
    text: "Replace guesswork in educational institution admissions with systems that work \u2014 automated lead tracking, CRM pipelines, and Meta Ads performance dashboards that turn enquiries into enrolled students.",
  },
  {
    key: "vision",
    label: "Vision",
    Icon: TelescopeIcon,
    pos: { left: "8%", top: "90%" },
    text: "Become the growth marketer institutions trust to own their admissions funnel end to end \u2014 from the first ad impression to the signed enrollment, every stage measured and optimized.",
  },
  {
    key: "goal",
    label: "Goal",
    Icon: FlagIcon,
    pos: { left: "92%", top: "90%" },
    text: "Keep compounding results \u2014 deeper institutional partnerships, faster lead cycles, and admissions growth that scales with every educational institution I work with.",
  },
];
export default function MissionVision() {
  return (
    <section
      id="mission-vision"
      className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-visible bg-neutral-950 py-24 text-white md:py-32"
    >
      <style>{`
        @keyframes flow-dash {
          to { stroke-dashoffset: -24; }
        }
        .flow-line {
          stroke-dasharray: 6 6;
          animation: flow-dash 1.2s linear infinite;
        }
      `}</style>
      <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[560px] w-[820px] -translate-x-1/2 rounded-full bg-[#d4af37]/10 blur-[160px]" />
      <div className="relative mx-auto max-w-5xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className={`${mono.className} text-[11px] font-semibold uppercase tracking-[0.3em] text-[#e8c766]`}>
            What drives the work
          </p>
          <h2 className={`${display.className} mt-5 text-4xl font-medium leading-[1.1] text-white md:text-5xl`}>
            Mission, vision &amp; goal.
          </h2>
        </div>
        <div className="mt-16 grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="relative mx-auto h-[380px] w-full max-w-md md:h-[460px]">
            <svg
              viewBox="0 0 400 340"
              preserveAspectRatio="xMidYMid meet"
              className="absolute inset-0 h-full w-full overflow-visible"
            >
              <line x1="200" y1="20" x2="40" y2="306" stroke="#d4af37" strokeOpacity="0.9" strokeWidth="2" className="flow-line" />
              <line x1="200" y1="20" x2="360" y2="306" stroke="#d4af37" strokeOpacity="0.9" strokeWidth="2" className="flow-line" />
              <line x1="40" y1="306" x2="360" y2="306" stroke="#d4af37" strokeOpacity="0.8" strokeWidth="2" className="flow-line" />
            </svg>
            {pillars.map((pillar) => (
              <div
                key={pillar.key}
                className="absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2"
                style={{ left: pillar.pos.left, top: pillar.pos.top }}
              >
                <div className="flex size-20 items-center justify-center rounded-full border border-[#d4af37]/50 bg-neutral-950 shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-transform duration-300 hover:scale-110">
                  <pillar.Icon className="size-9 text-[#e8c766]" />
                </div>
                <span className={`${mono.className} text-[12px] font-semibold uppercase tracking-[0.2em] text-[#e8c766]`}>
                  {pillar.label}
                </span>
              </div>
            ))}
          </div>
          <div className="flex h-full flex-col justify-center gap-5">
            {pillars.map((pillar) => (
              <div
                key={pillar.key}
                className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-[#d4af37]/40 hover:bg-white/[0.07]"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10">
                  <pillar.Icon className="size-5 text-[#e8c766]" />
                </div>
                <div>
                  <p className={`${mono.className} text-[11px] font-semibold uppercase tracking-[0.25em] text-[#e8c766]`}>
                    {pillar.label}
                  </p>
                  <p className="mt-2 text-[14px] leading-relaxed text-neutral-300">
                    {pillar.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
