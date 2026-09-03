import React from "react";
import { 
  ArrowRight, 
  Play, 
  Github, 
  Sparkles, 
  Layers, 
  Database, 
  ShieldCheck, 
  Cpu,
  BrainCircuit,
  Bot,
  HardDrive
} from "lucide-react";
import { PORTFOLIO_CONFIG } from "../config/portfolioData";
import { ProjectCaseStudy } from "../types";
import { useTheme } from "../context/ThemeContext";
import { soundEngine } from "../utils/audio";

interface FeaturedProjectsSectionProps {
  onSelectProject: (projectId: string) => void;
  onLaunchSimulator: (projectId: string) => void;
}

export const FeaturedProjectsSection: React.FC<FeaturedProjectsSectionProps> = ({
  onSelectProject,
  onLaunchSimulator,
}) => {
  const { palette } = useTheme();
  const projects = PORTFOLIO_CONFIG.projects;

  const projectIcons: Record<string, React.ElementType> = {
    "nova-ai": Bot,
    "skillforge-ai": BrainCircuit,
    "drive-storage": HardDrive,
  };

  return (
    <section id="projects" className="relative py-20 lg:py-28 bg-[var(--theme-canvas)] border-t border-[var(--theme-card-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--theme-primary-light)] border border-[var(--theme-card-border)] text-[var(--theme-primary-dark)] text-xs font-mono-code font-bold">
              <span>03 // FEATURED WORK</span>
              <span>✦</span>
              <span>SYSTEMS & PRODUCTS</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-[var(--theme-text)] tracking-tight leading-tight">
              Flagship Engineering Projects
            </h2>
            <p className="text-[var(--theme-text)]/75 text-sm sm:text-base max-w-2xl font-sans">
              Every project is an end-to-end engineered system with modular backend controllers, intelligent AI integration, and production-grade state management.
            </p>
          </div>

          <div className="text-xs font-mono-code text-[var(--theme-text)] p-2.5 rounded-2xl bg-white border border-[var(--theme-card-border)] shadow-2xs">
            SHOWCASING <span className="text-[var(--theme-primary)] font-bold">3 FLAGSHIP ARCHITECTURES</span>
          </div>
        </div>

        {/* Projects Showcase Cards */}
        <div className="space-y-10">
          {projects.map((project, idx) => {
            const IconComp = projectIcons[project.id] || Layers;

            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="group relative rounded-3xl bg-white border border-[var(--theme-card-border)] hover:border-[var(--theme-primary)] p-6 sm:p-8 lg:p-10 shadow-md hover:shadow-xl transition-all overflow-hidden"
              >
                {/* Accent glow corner */}
                <div
                  className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[100px] pointer-events-none -z-10 opacity-20"
                  style={{ backgroundColor: palette.colors.primaryLight }}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left info column */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-mono-code font-bold bg-[var(--theme-primary-light)] text-[var(--theme-primary-dark)] border border-[var(--theme-card-border)]">
                        {project.id === "nova-ai" ? "AI CHAT ENGINE" : project.id === "skillforge-ai" ? "SKILL DIAGNOSTICS" : "SECURE VAULT"}
                      </span>
                      <span className="text-xs font-mono-code text-[var(--theme-primary)] font-bold">
                        PROJECT 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="font-display font-black text-2xl sm:text-4xl text-[var(--theme-text)] tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono-code text-[var(--theme-primary)] font-semibold">
                      {project.shortTagline}
                    </p>

                    <p className="text-xs sm:text-base text-[var(--theme-text)]/80 leading-relaxed font-sans">
                      {project.overview}
                    </p>

                    {/* Features checklist */}
                    <div className="space-y-2 pt-2">
                      <span className="text-xs font-mono-code font-bold text-[var(--theme-text)] uppercase tracking-wider">
                        Key Capabilities:
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.features.slice(0, 4).map((feat, fIdx) => (
                          <li
                            key={fIdx}
                            className="flex items-start gap-2 text-xs text-[var(--theme-text)]/85 font-sans"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--theme-primary)] mt-1.5 flex-shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.techStack.frontend.concat(project.techStack.backend).slice(0, 6).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-xl bg-[var(--theme-canvas-alt)] text-[11px] font-mono-code font-bold text-[var(--theme-text)] border border-[var(--theme-card-border)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap items-center gap-3 pt-4">
                      <button
                        id={`btn-case-study-${project.id}`}
                        onClick={() => {
                          soundEngine.playPop();
                          onSelectProject(project.id);
                        }}
                        className="px-5 py-3 rounded-2xl bg-[var(--theme-primary)] hover:bg-[var(--theme-primary-dark)] text-white font-mono-code font-bold text-xs transition-all flex items-center gap-2 cursor-pointer shadow-xs hover:scale-102"
                      >
                        <span>Full Case Study & Architecture</span>
                        <ArrowRight className="w-3.5 h-3.5 text-yellow-200" />
                      </button>

                      <button
                        id={`btn-simulator-${project.id}`}
                        onClick={() => {
                          soundEngine.playPop();
                          onLaunchSimulator(project.id);
                        }}
                        className="px-5 py-3 rounded-2xl bg-white hover:bg-[var(--theme-primary-light)] text-[var(--theme-text)] border border-[var(--theme-card-border)] font-mono-code font-bold text-xs transition-all flex items-center gap-2 cursor-pointer shadow-2xs"
                      >
                        <Play className="w-3.5 h-3.5 fill-current text-[var(--theme-primary)]" />
                        <span>Launch Live Simulator</span>
                      </button>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-3 rounded-2xl bg-white hover:bg-[var(--theme-canvas-alt)] border border-[var(--theme-card-border)] text-[var(--theme-text)] transition-colors"
                          title="View on GitHub"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Architecture preview box */}
                  <div className="lg:col-span-5 rounded-2xl bg-[var(--theme-canvas-alt)] border border-[var(--theme-card-border)] p-5 space-y-4">
                    <div className="flex items-center justify-between pb-2 border-b border-[var(--theme-card-border)]">
                      <span className="text-xs font-mono-code font-bold text-[var(--theme-text)] flex items-center gap-1.5">
                        <IconComp className="w-4 h-4 text-[var(--theme-primary)]" />
                        <span>ARCHITECTURE SCHEMATIC</span>
                      </span>
                      <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-white text-[var(--theme-primary)] font-bold border border-[var(--theme-card-border)]">
                        VERIFIED
                      </span>
                    </div>

                    <div className="space-y-2">
                      {project.architectureNodes.slice(0, 3).map((node, nIdx) => (
                        <div
                          key={nIdx}
                          className="p-3 rounded-xl bg-white border border-[var(--theme-card-border)] shadow-2xs space-y-1"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-display font-bold text-xs text-[var(--theme-text)]">
                              {node.name}
                            </span>
                            <span className="text-[10px] font-mono-code text-[var(--theme-primary)] font-semibold">
                              {node.tech}
                            </span>
                          </div>
                          <p className="text-[11px] text-[var(--theme-text)]/75 font-sans">
                            {node.details}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* AI Highlight Banner */}
                    {project.aiIntegration && (
                      <div className="p-3 rounded-xl bg-white border border-[var(--theme-card-border)] space-y-1">
                        <div className="flex items-center gap-1 text-[11px] font-mono-code font-bold text-[var(--theme-primary)]">
                          <Sparkles className="w-3 h-3 text-[var(--theme-primary)]" />
                          <span>AI IN THE LOOP:</span>
                        </div>
                        <p className="text-[11px] text-[var(--theme-text)]/85 font-sans leading-relaxed">
                          {project.aiIntegration.role}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
