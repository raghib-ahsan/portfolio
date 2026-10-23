import Image from "next/image";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
const serif = Space_Grotesk({ subsets: ["latin"] });
const mono = JetBrains_Mono({ subsets: ["latin"] });
export default function Intro() {
  return (
    <section className="grid items-center gap-8 pt-6 pb-6 md:grid-cols-2 md:gap-12 md:pt-8">
      <div>
        <p
          className={`${mono.className} text-[12px] font-medium uppercase tracking-[0.18em] text-emerald-600`}
        >
          Growth Marketing Specialist, Education Sector
        </p>
        <h1
          className={`${serif.className} mt-4 bg-linear-to-r from-sky-600 via-violet-600 to-pink-600 bg-clip-text text-4xl font-medium leading-[1.1] text-transparent md:text-5xl`}
        >
          Turning enquiries
          <br />
          into enrollments.
        </h1>
        <p className="mt-5 max-w-md text-[15px] leading-relaxed text-neutral-600">
          Mahmood Raghib Ahsan, growth marketer with 3.5+ years scaling
          educational admissions through marketing analytics, institutional
          outreach, and CRM automation: 20% admissions growth and 40+
          educational partnerships closed at an 80% success rate.
        </p>
      </div>
      <div className="relative mx-auto w-full max-w-sm">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
          <Image
            src="/images/profile.jpg"
            alt="Mahmood Raghib Ahsan"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute right-5 top-5 flex size-9 items-center justify-center rounded-full bg-amber-400 text-sm font-bold text-emerald-950">
            &rdquo;
          </div>
        </div>
        <p className="mt-2 text-center text-[13px] font-medium text-neutral-600">
          Mahmood Raghib Ahsan &middot; Growth Marketing Specialist
        </p>
      </div>
    </section>
  );
}
