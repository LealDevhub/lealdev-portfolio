import { ParticlesBackground } from "@/components/particles-background";
import { IntroSection } from "@/components/intro-section";
import { TimelineSection } from "@/components/timeline-section";
import { ProjectsSection } from "@/components/projects-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ParticlesBackground />
      <main className="relative">
        <IntroSection />
        
        {/* Divider */}
        <div className="h-0.5 w-full gradient-divider" />
        
        <TimelineSection />
        <ProjectsSection />
      </main>
    </div>
  );
}
