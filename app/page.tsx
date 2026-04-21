import { ParticlesBackground } from "@/components/particles-background";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { TimelineSection } from "@/components/sections/timeline-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { ContactSection } from "@/components/sections/contact-section";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ParticlesBackground />
      <Navbar />
      
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <TimelineSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
