import { Navbar } from '@/src/components/ui/Navbar';
import { HeroSection } from '@/src/components/sections/HeroSection';
import { AboutSection } from '@/src/components/sections/AboutSection';
import { TechStackSection } from '@/src/components/sections/TechStackSection';
import { ProjectsSection } from '@/src/components/sections/ProjectsSection';
import { ExperienceSection } from '@/src/components/sections/ExperienceSection';
import { ContactSection } from '@/src/components/sections/ContactSection';
import { Footer } from '@/src/components/sections/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#09090B] text-[#FAFAFA]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-[#3B82F6] focus:px-4 focus:py-2 focus:text-xs focus:font-semibold focus:text-[#FAFAFA]"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
