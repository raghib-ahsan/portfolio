import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import CplCalculator from "@/components/CplCalculator";
const display = Space_Grotesk({ subsets: ["latin"] });
const mono = JetBrains_Mono({ subsets: ["latin"] });
export default function AdSpendSection() {
  return (
    <section
      id="ad-calculator"
      className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-neutral-950 py-16 text-white md:py-20"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.14em] text-emerald-400`}>
              Try it &middot; Media buying
            </p>
            <h2 className={`${display.className} mt-2 text-2xl font-medium text-white md:text-3xl`}>
              Ad spend &rarr; CPL / CPA / ROAS
            </h2>
            <p className="mt-3 text-[14px] leading-relaxed text-neutral-400">
              The same back-of-envelope math I run on every live Meta Ads
              campaign before reporting results to a client. Plug in a
              budget, your lead and conversion counts, and what a sale is
              worth &mdash; the cost and return figures update instantly.
            </p>
          </div>
          <CplCalculator />
        </div>
      </div>
    </section>
  );
}
