import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/hero/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { AmbientBackground } from "@/components/layout/AmbientBackground";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#0a0e27]">
      <AmbientBackground />
      <Header />
      <main className="relative z-10 flex-1">
        <HeroSection />
        <div className="section-shell"><AboutSection /></div>
        <div className="section-shell"><ProjectsSection /></div>
        <div className="section-shell"><SkillsSection /></div>
        <div className="section-shell"><ExperienceSection /></div>
        <div className="section-shell"><ContactSection /></div>
      </main>
      <Footer />
    </div>
  );
}
