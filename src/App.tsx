import React, { useState, useEffect } from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { Navbar } from "./components/Navbar";
import { UIDesignStudioBar } from "./components/UIDesignStudioBar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { FeaturedProjectsSection } from "./components/FeaturedProjectsSection";
import { HowIThinkSection } from "./components/HowIThinkSection";
import { AISection } from "./components/AISection";
import { DSASection } from "./components/DSASection";
import { ExperienceSection } from "./components/ExperienceSection";
import { InteractiveTerminal } from "./components/InteractiveTerminal";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { ProjectCaseStudyModal } from "./components/ProjectCaseStudyModal";
import { AITwinModal } from "./components/AITwinModal";
import { ResumeModal } from "./components/ResumeModal";
import { CanvasPetals } from "./components/CanvasPetals";
import { GenZDraggableStickers } from "./components/GenZDraggableStickers";
import { LofiVibePlayer } from "./components/LofiVibePlayer";
import { GsapMagneticCursor } from "./components/GsapMagneticCursor";
import { PORTFOLIO_CONFIG } from "./config/portfolioData";
import { ProjectCaseStudy } from "./types";

function PortfolioContent() {
  const { uiMode } = useTheme();
  const [activeSection, setActiveSection] = useState("hero");
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [isAITwinOpen, setIsAITwinOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Track active scroll section for Navbar highlight
  useEffect(() => {
    const sectionIds = [
      "hero",
      "about",
      "skills",
      "projects",
      "thinking",
      "ai",
      "dsa",
      "experience",
      "contact",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25, rootMargin: "-80px 0px -40% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSelectProject = (projectId: string) => {
    const found = PORTFOLIO_CONFIG.projects.find((p) => p.id === projectId);
    if (found) {
      setSelectedProject(found);
    }
  };

  const handleLaunchSimulator = (projectId: string) => {
    const found = PORTFOLIO_CONFIG.projects.find((p) => p.id === projectId);
    if (found) {
      setSelectedProject(found);
    }
  };

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`relative min-h-screen bg-[var(--theme-canvas)] text-[var(--theme-text)] selection:bg-[var(--theme-primary-light)] selection:text-[var(--theme-primary-dark)] antialiased overflow-x-hidden ${
      uiMode === "editorial" ? "font-serif-editorial" : ""
    }`}>
      
      {/* Background Soft Particles Canvas */}
      <CanvasPetals />

      {/* GSAP Magnetic Fluid Cursor (desktop) */}
      <GsapMagneticCursor />

      {/* Interactive Draggable Gen-Z Stickers */}
      <GenZDraggableStickers />

      {/* Top Fixed Navigation */}
      <Navbar
        activeSection={activeSection}
        onOpenAITwin={() => setIsAITwinOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Dynamic Aesthetic Studio Bar (Live soft color & layout picker) */}
      <UIDesignStudioBar />

      {/* Main Sections */}
      <main className="relative z-10">
        {/* 00: Hero Section with Soft Palette & Aesthetic Photo Place */}
        <HeroSection
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenAITwin={() => setIsAITwinOpen(true)}
          onExploreProjects={scrollToProjects}
        />

        {/* 01: About Section */}
        <AboutSection />

        {/* 02: Interactive Skills Matrix */}
        <SkillsSection onSelectProject={handleSelectProject} />

        {/* 03: Flagship Projects with Simulators */}
        <FeaturedProjectsSection
          onSelectProject={handleSelectProject}
          onLaunchSimulator={handleLaunchSimulator}
        />

        {/* 04: How I Think / Engineering Methodology */}
        <HowIThinkSection />

        {/* 05: AI & Generative Engineering */}
        <AISection />

        {/* 06: DSA & Algorithmic Excellence in C++ */}
        <DSASection />

        {/* 07: Trajectory, Experience (Sheriyans) & Education */}
        <ExperienceSection />

        {/* 08: Interactive Gen-Z CLI Terminal */}
        <section className="py-16 bg-[var(--theme-canvas-alt)] border-t border-[var(--theme-card-border)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-2 mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--theme-primary-light)] border border-[var(--theme-card-border)] text-xs font-mono-code text-[var(--theme-primary-dark)] font-bold">
                <span>TERMINAL ACCESS // SHELL</span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-[var(--theme-text)]">
                Interactive Developer CLI
              </h3>
              <p className="text-xs text-[var(--theme-text-muted)] font-sans">
                Prefer the command line? Run interactive commands directly in the embedded shell below.
              </p>
            </div>
            <InteractiveTerminal />
          </div>
        </section>

        {/* 09: Contact & Dispatch */}
        <ContactSection />
      </main>

      {/* Footer with Soft Theme Credits */}
      <Footer />

      {/* Modals & Overlays */}
      <ProjectCaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <AITwinModal
        isOpen={isAITwinOpen}
        onClose={() => setIsAITwinOpen(false)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Floating Lo-Fi Audio Synthesizer Widget */}
      <LofiVibePlayer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}
