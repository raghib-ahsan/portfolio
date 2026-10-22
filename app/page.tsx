import Hero from "@/components/Hero";
import AdSpendSection from "@/components/AdSpendSection";
import Intro from "@/components/Intro";
import Journey from "@/components/Journey";
import MissionVision from "@/components/MissionVision";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import FunnelSection from "@/components/FunnelSection";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <main className="relative min-h-screen bg-white text-neutral-900">
      <div className="relative mx-auto max-w-5xl px-5 sm:px-8 lg:px-12">
        <Intro />
        <Skills />
        <Hero />
        <AdSpendSection />
        <Journey />
        <MissionVision />
        <Projects />
        <Experience />
        <FunnelSection />
        <Certifications />
        <Contact />
      </div>
    </main>
  );
}
