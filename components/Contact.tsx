import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
const display = Space_Grotesk({ subsets: ["latin"] });
const mono = JetBrains_Mono({ subsets: ["latin"] });
function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.56V9h3.554v11.452z" />
    </svg>
  );
}
function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.683-.217.683-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.455-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.338-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  );
}
function DownloadIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 15V3" />
      <path d="m7 10 5 5 5-5" />
      <path d="M21 21H3" />
    </svg>
  );
}
export default function Contact() {
  return (
    <section
      id="contact"
      className="relative left-1/2 right-1/2 -mx-[50vw] mt-16 w-screen bg-neutral-950 py-20 text-white md:mt-20 md:py-28"
    >
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <p className={`${mono.className} text-[11px] uppercase tracking-[0.18em] text-neutral-400`}>
          Get in touch
        </p>
        <h2 className={`${display.className} mt-3 text-3xl font-medium md:text-4xl`}>
          Let&apos;s build something.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-neutral-400">
          Open to growth marketing and performance marketing roles in the
          education sector: admissions growth, EdTech, and institutional
          partnerships.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:ahsan.raghib28@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[13px] text-white transition hover:bg-white/10"
          >
            <MailIcon className="size-4" />
            ahsan.raghib28@gmail.com
          </a>
          <a
            href="tel:+917870666032"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[13px] text-white transition hover:bg-white/10"
          >
            +91 7870666032
          </a>
          <a
            href="https://linkedin.com/in/mahmood-raghib-ahsan-47890b1a0"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[13px] text-white transition hover:bg-white/10"
          >
            <LinkedinIcon className="size-4" />
            LinkedIn
          </a>
          <a
            href="https://github.com/raghib-ahsan"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[13px] text-white transition hover:bg-white/10"
          >
            <GithubIcon className="size-4" />
            GitHub
          </a>
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[13px] font-medium text-neutral-950 transition hover:bg-neutral-200"
          >
            <DownloadIcon className="size-4" />
            Resume
          </a>
        </div>
        <p className="mt-12 text-[12px] text-neutral-500">
          &copy; 2026 Mahmood Raghib Ahsan
        </p>
      </div>
    </section>
  );
}
