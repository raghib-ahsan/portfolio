import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import CplCalculator from "@/components/CplCalculator";
import FunnelSimulator from "@/components/FunnelSimulator";
const display = Space_Grotesk({ subsets: ["latin"] });
const mono = JetBrains_Mono({ subsets: ["latin"] });
export default function Widgets() {
  return (
    <section
      id="try-it"
      className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-neutral-950 py-16 text-white md:py-20"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-12">
        <p className={`${mono.className} text-[11px] uppercase tracking-[0.14em] text-neutral-500`}>
          Interactive
        </p>
        <h2 className={`${display.className} mt-2 text-3xl font-medium text-white md:text-4xl`}>
          Try it yourself
        </h2>
        <p className="mt-1 text-sm text-neutral-400">
          Two small live tools, built the same way as the projects above &mdash;
          move the inputs and watch the numbers react.
        </p>
        {/* Row 1: content left, calculator right */}
        <div className="mt-12 grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.14em] text-emerald-400`}>
              01 &middot; Media buying
            </p>
            <h3 className={`${display.className} mt-2 text-2xl font-medium text-white`}>
              Ad spend &rarr; CPL / CPA / ROAS
            </h3>
            <p className="mt-3 text-[14px] leading-relaxed text-neutral-400">
              The same back-of-envelope math I run on every live Meta Ads
              campaign before reporting results to a client. Plug in a
              budget, your lead and conversion counts, and what a sale is
              worth &mdash; the cost and return figures update instantly.
            </p>
          </div>
          <CplCalculator />
        </div>
        {/* Row 2: calculator left, content right */}
        <div className="mt-14 grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div className="md:order-2">
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.14em] text-sky-400`}>
              02 &middot; Admissions ops
            </p>
            <h3 className={`${display.className} mt-2 text-2xl font-medium text-white`}>
              Admissions funnel simulator
            </h3>
            <p className="mt-3 text-[14px] leading-relaxed text-neutral-400">
              The same funnel logic behind my Admission Planner CRM. Adjust
              inquiry volume and conversion rates at each stage to see how
              many students actually enroll &mdash; and where the funnel leaks
              the most.
            </p>
          </div>
          <div className="md:order-1">
            <FunnelSimulator />
          </div>
        </div>
      </div>
    </section>
  );
}
