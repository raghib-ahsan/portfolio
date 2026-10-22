import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Journey from "@/components/Journey";
import MissionVision from "@/components/MissionVision";
import Projects from "@/components/Projects";
import Widgets from "@/components/Widgets";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <main className="relative min-h-screen bg-white text-neutral-900">
      <div className="relative mx-auto max-w-5xl px-5 sm:px-8 lg:px-12">
        <Intro />
        <Hero />
        <Journey />
        <MissionVision />
        <Projects />
        <Widgets />
        <Experience />
        <Skills />
        <Certifications />
        <Contact />
      </div>
    </main>
  );
}
