import React, { useState, useEffect } from "react";
import { 
  X, 
  Github, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  AlertTriangle, 
  Lightbulb, 
  Compass, 
  ArrowRight,
  Play,
  Terminal,
  Activity
} from "lucide-react";
import { ProjectCaseStudy } from "../types";
import { InteractiveNovaSimulator } from "./InteractiveNovaSimulator";
import { InteractiveSkillForgeSimulator } from "./InteractiveSkillForgeSimulator";
import { InteractiveDriveSimulator } from "./InteractiveDriveSimulator";

interface ProjectCaseStudyModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export const ProjectCaseStudyModal: React.FC<ProjectCaseStudyModalProps> = ({
  project,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<"study" | "sandbox" | "architecture">("study");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-6 bg-black/65 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-5xl rounded-3xl bg-[#FFF7E6] border border-[#F7C8D3] shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="p-4 sm:p-6 bg-white border-b border-[#F7C8D3] flex items-center justify-between shrink-0">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono-code px-2.5 py-0.5 rounded-full bg-[#F7C8D3] text-[#2D3A47] font-bold">
                {project.tag}
              </span>
              <span className="text-xs font-mono-code text-[#B46A72] font-semibold">
                {project.category}
              </span>
            </div>
            <h2 className="font-display font-black text-xl sm:text-2xl text-[#2D3A47]">
              {project.title}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-[#FFF7E6] hover:bg-[#F7C8D3]/40 border border-[#F7C8D3] text-[#2D3A47] transition-colors"
                title="GitHub Repo"
              >
                <Github className="w-4 h-4" />
              </a>
            )}

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-[#FFF7E6] hover:bg-[#F7C8D3] text-[#2D3A47] flex items-center justify-center font-bold text-base transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* View Switcher Tabs */}
        <div className="px-6 py-2.5 bg-[#FFFDF9] border-b border-[#F7C8D3]/60 flex items-center gap-2 overflow-x-auto shrink-0">
          <button
            id="modal-tab-study"
            onClick={() => setActiveTab("study")}
            className={`px-4 py-2 rounded-xl text-xs font-mono-code font-bold transition-all cursor-pointer ${
              activeTab === "study"
                ? "bg-[#2D3A47] text-[#FFF7E6] shadow-sm"
                : "bg-white text-[#2D3A47] hover:bg-[#F7C8D3]/30 border border-[#F7C8D3]"
            }`}
          >
            Engineering Case Study
          </button>
          <button
            id="modal-tab-sandbox"
            onClick={() => setActiveTab("sandbox")}
            className={`px-4 py-2 rounded-xl text-xs font-mono-code font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === "sandbox"
                ? "bg-[#2D3A47] text-[#FFF7E6] shadow-sm"
                : "bg-white text-[#2D3A47] hover:bg-[#F7C8D3]/30 border border-[#F7C8D3]"
            }`}
          >
            <Play className="w-3.5 h-3.5 text-[#B46A72] fill-current" />
            <span>Interactive Simulator</span>
          </button>
          <button
            id="modal-tab-arch"
            onClick={() => setActiveTab("architecture")}
            className={`px-4 py-2 rounded-xl text-xs font-mono-code font-bold transition-all cursor-pointer ${
              activeTab === "architecture"
                ? "bg-[#2D3A47] text-[#FFF7E6] shadow-sm"
                : "bg-white text-[#2D3A47] hover:bg-[#F7C8D3]/30 border border-[#F7C8D3]"
            }`}
          >
            System Architecture
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="flex-1 p-6 sm:p-8 overflow-y-auto space-y-8 bg-white">
          
          {/* TAB 1: Case Study */}
          {activeTab === "study" && (
            <div className="space-y-8 animate-fadeIn">
              {/* Problem & Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-3xl bg-[#FFF7E6] border border-[#F7C8D3] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono-code font-bold text-[#B46A72]">
                    <AlertTriangle className="w-4 h-4" />
                    <span>THE PROBLEM STATEMENT</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#2D3A47]/85 font-sans leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="p-5 rounded-3xl bg-[#FFFDF9] border border-[#A8B58A] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono-code font-bold text-[#A8B58A]">
                    <Lightbulb className="w-4 h-4" />
                    <span>THE ARCHITECTED SOLUTION</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#2D3A47]/85 font-sans leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* AI Integration Highlight */}
              {project.aiIntegration && (
                <div className="p-6 rounded-3xl bg-[#F7C8D3]/30 border border-[#B46A72]/30 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono-code font-bold text-[#B46A72]">
                    <Sparkles className="w-4 h-4" />
                    <span>AI ARCHITECTURE: {project.aiIntegration.modelOrApi}</span>
                  </div>
                  <p className="text-sm text-[#2D3A47] font-semibold leading-relaxed">
                    {project.aiIntegration.role}
                  </p>
                  <p className="text-xs text-[#2D3A47]/80 font-sans leading-relaxed">
                    {project.aiIntegration.whyAI}
                  </p>
                  {project.aiIntegration.flow && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
                      {project.aiIntegration.flow.map((step, sIdx) => (
                        <div key={sIdx} className="p-2.5 rounded-xl bg-white text-xs font-mono-code text-[#2D3A47] border border-[#F7C8D3]">
                          <span className="text-[#B46A72] font-bold mr-1">0{sIdx + 1}.</span> {step}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Engineering Challenges & Learnings */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="text-xs font-mono-code font-bold text-[#2D3A47] uppercase tracking-wider">
                    Technical Challenges Solved:
                  </h3>
                  <div className="space-y-2">
                    {project.challenges.map((ch, idx) => (
                      <div key={idx} className="p-3 rounded-2xl bg-[#FFF7E6] border border-[#F7C8D3]/50 text-xs text-[#2D3A47] leading-relaxed">
                        ✦ {ch}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xs font-mono-code font-bold text-[#2D3A47] uppercase tracking-wider">
                    Core Learnings:
                  </h3>
                  <div className="space-y-2">
                    {project.learnings.map((lr, idx) => (
                      <div key={idx} className="p-3 rounded-2xl bg-[#FFFDF9] border border-[#A8B58A]/50 text-xs text-[#2D3A47] leading-relaxed">
                        🌿 {lr}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Interactive Sandbox */}
          {activeTab === "sandbox" && (
            <div className="animate-fadeIn">
              {project.id === "nova-ai" && <InteractiveNovaSimulator />}
              {project.id === "skillforge-ai" && <InteractiveSkillForgeSimulator />}
              {project.id === "drive-storage" && <InteractiveDriveSimulator />}
            </div>
          )}

          {/* TAB 3: System Architecture */}
          {activeTab === "architecture" && (
            <div className="space-y-6 animate-fadeIn">
              <div className="p-5 rounded-3xl bg-[#FFF7E6] border border-[#F7C8D3]">
                <h3 className="font-display font-bold text-base text-[#2D3A47] mb-1">
                  Architecture Overview
                </h3>
                <p className="text-xs sm:text-sm text-[#2D3A47]/80 font-sans leading-relaxed">
                  {project.architectureSummary}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-mono-code font-bold text-[#2D3A47] uppercase tracking-wider">
                  Component Pipeline Nodes:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.architectureNodes.map((node, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#F7C8D3] space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="font-display font-bold text-sm text-[#2D3A47]">{node.name}</span>
                        <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-[#F7C8D3] text-[#2D3A47] font-bold">
                          {node.role}
                        </span>
                      </div>
                      <p className="text-xs font-mono-code text-[#B46A72]">{node.tech}</p>
                      <p className="text-xs text-[#2D3A47]/75 font-sans leading-relaxed">{node.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
