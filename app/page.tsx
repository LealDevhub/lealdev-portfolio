import { ParticlesBackground } from "@/components/particles-background";
import { IntroSection } from "@/components/intro-section";
import { TimelineSection } from "@/components/timeline-section";
import { ProjectsSection } from "@/components/projects-section";

export default function Home() {
  return (
    <>
      <ParticlesBackground />
      <main className="relative z-10">
        <IntroSection />
        
        {/* Divider */}
        <div className="h-0.5 w-full gradient-divider" />
        
        <TimelineSection />
        <ProjectsSection />
      </main>
    </>
  );
}
