import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
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
          Adjust enquiry volume and conversion rates at each stage to see
          how many students actually enroll.
        </p>
        <div className="mt-10 mx-auto max-w-xl">
          <FunnelSimulator />
        </div>
      </div>
    </section>
  );
}
