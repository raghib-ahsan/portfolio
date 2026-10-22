import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { chapters, accentColors } from "@/lib/journey";
const display = Space_Grotesk({ subsets: ["latin"] });
const mono = JetBrains_Mono({ subsets: ["latin"] });
function ArrowIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}
const allProjects = chapters.flatMap((chapter) =>
  chapter.projects.map((project) => ({
    ...project,
    period: chapter.period,
    org: chapter.org,
    color: accentColors[chapter.accent],
  }))
);
// Every 5th card (0, 5, 10...) is wide (spans 2 columns). All cards share the
// same row height, so nothing breaks the grid alignment — only width varies.
function isWide(index: number) {
  return index % 5 === 0;
}
export default function Projects() {
  return (
    <section
      id="projects"
      className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-gradient-to-b from-neutral-100 to-neutral-50 py-16 md:py-20"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-12">
        <p className={`${mono.className} text-[11px] uppercase tracking-[0.14em] text-neutral-400`}>
          Proof of work
        </p>
        <h2 className={`${display.className} mt-2 bg-linear-to-r from-sky-600 via-violet-600 to-pink-600 bg-clip-text text-3xl font-medium text-transparent md:text-4xl`}>
          Projects
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {allProjects.map((project, index) => {
            const wide = isWide(index);
            return (
              <a
                key={project.name}
                href={project.link}
                className={`group relative flex h-56 flex-col justify-between overflow-hidden rounded-2xl border border-black/25 bg-white/50 p-5 shadow-sm backdrop-blur-md transition hover:border-black/40 hover:bg-white/80 hover:shadow-md ${
                  wide ? "sm:col-span-2" : ""
                }`}
              >
                <div className="relative">
                  <div className="flex items-center gap-2">
                    <span
                      className="size-1.5 rounded-full"
                      style={{ background: project.color }}
                    />
                    <p className={`${mono.className} text-[11px] uppercase tracking-[0.1em] text-neutral-500`}>
                      {project.period}
                    </p>
                  </div>
                  <h3
                    className={`mt-2 font-medium leading-snug text-neutral-900 ${
                      wide ? "text-xl md:text-2xl" : "text-[16px]"
                    }`}
                  >
                    {project.name}
                  </h3>
                  <p className="mt-1 text-[13px] font-medium text-neutral-600">{project.org}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {(wide ? project.stack : project.stack.slice(0, 2)).map((tool) => (
                      <span
                        key={tool}
                        className={`${mono.className} rounded-full border border-black/15 bg-white/60 px-2 py-0.5 text-[10px] font-medium text-neutral-700`}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="relative mt-4 flex items-center gap-1 text-[12px] font-medium text-neutral-500 transition group-hover:text-neutral-900">
                  View project
                  <ArrowIcon className="size-3.5" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
