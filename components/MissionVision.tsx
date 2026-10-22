import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Target, Telescope, Compass } from "lucide-react";
const serif = Space_Grotesk({ subsets: ["latin"] });
const mono = JetBrains_Mono({ subsets: ["latin"] });
export default function MissionVision() {
  return (
    <section id="mission-vision" className="py-16 md:py-20">
      <div className="border-b-2 border-black/15 pb-6 text-center">
        <p className={`${serif.className} bg-linear-to-r from-violet-600 via-pink-600 to-amber-600 bg-clip-text text-2xl font-medium text-transparent md:text-3xl`}>
          Mission, vision &amp; goals
        </p>
      </div>
      <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-6">
        <div className="rounded-2xl border border-black/10 p-6">
          <div className="flex items-center gap-2">
            <Target className="size-4 text-emerald-600" />
            <p className={`${mono.className} text-[12px] uppercase tracking-[0.14em] text-emerald-600`}>
              Mission
            </p>
          </div>
          <p className="mt-4 text-[15px] leading-relaxed text-neutral-700">
            Replace the spreadsheets, paperwork, and guesswork that slow
            schools and institutes down with systems that are simple enough
            for staff to actually use and solid enough to trust with real
            admissions and growth decisions.
          </p>
        </div>
        <div className="rounded-2xl border border-black/10 p-6">
          <div className="flex items-center gap-2">
            <Telescope className="size-4 text-sky-600" />
            <p className={`${mono.className} text-[12px] uppercase tracking-[0.14em] text-sky-600`}>
              Vision
            </p>
          </div>
          <p className="mt-4 text-[15px] leading-relaxed text-neutral-700">
            Grow from solving one institute&apos;s admissions problem at a
            time into building the full-stack growth and product
            infrastructure that EdTech teams run on &mdash; and scale HDWARE
            Premium Solutions into a multi-vertical platform doing the same
            for construction, real estate, and beyond.
          </p>
        </div>
        <div className="rounded-2xl border border-black/10 p-6">
          <div className="flex items-center gap-2">
            <Compass className="size-4 text-violet-600" />
            <p className={`${mono.className} text-[12px] uppercase tracking-[0.14em] text-violet-600`}>
              Life goals
            </p>
          </div>
          <p className="mt-4 text-[15px] leading-relaxed text-neutral-700">
            Build HDWARE Premium Solutions into a company that creates real
            jobs in Patna, keep learning hands-on &mdash; from Excel to
            Apps Script to full-stack AI-assisted development &mdash; and
            stay close to the education sector where this all started.
          </p>
        </div>
      </div>
    </section>
  );
}
