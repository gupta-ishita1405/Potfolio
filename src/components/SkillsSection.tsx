import React, { useState } from "react";
import { 
  Code2, 
  Layers, 
  Server, 
  Database, 
  Sparkles, 
  Cpu, 
  Wrench, 
  ArrowRight, 
  Info, 
  CheckCircle2, 
  ExternalLink 
} from "lucide-react";
import { PORTFOLIO_CONFIG } from "../config/portfolioData";
import { SkillCategory, SkillItem } from "../types";
import { useTheme } from "../context/ThemeContext";
import { soundEngine } from "../utils/audio";

interface SkillsSectionProps {
  onSelectProject: (projectId: string) => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ onSelectProject }) => {
  const { palette } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>("All");
  const [selectedSkill, setSelectedSkill] = useState<SkillItem>(
    PORTFOLIO_CONFIG.skills.find((s) => s.id === "react") || PORTFOLIO_CONFIG.skills[0]
  );

  const categories: { label: SkillCategory; icon: React.ElementType }[] = [
    { label: "All", icon: Code2 },
    { label: "Languages", icon: Code2 },
    { label: "Frontend", icon: Layers },
    { label: "Backend", icon: Server },
    { label: "Database", icon: Database },
    { label: "AI / ML", icon: Sparkles },
    { label: "Computer Science", icon: Cpu },
    { label: "Tools", icon: Wrench },
  ];

  const filteredSkills = selectedCategory === "All"
    ? PORTFOLIO_CONFIG.skills
    : PORTFOLIO_CONFIG.skills.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="relative py-20 lg:py-28 bg-[var(--theme-canvas-alt)] border-t border-[var(--theme-card-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--theme-primary-light)] border border-[var(--theme-card-border)] text-[var(--theme-primary-dark)] text-xs font-mono-code font-bold">
              <span>02 // SKILL ECOSYSTEM</span>
              <span>✦</span>
              <span>KNOWLEDGE & APPLICATION</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-[var(--theme-text)] tracking-tight leading-tight">
              Interactive Technology Ecosystem
            </h2>
            <p className="text-[var(--theme-text)]/75 text-sm sm:text-base max-w-xl font-sans">
              Not just an arbitrary list of badges. Click any technology to see its exact engineering purpose and where it powers my full-stack projects.
            </p>
          </div>

          <div className="text-xs font-mono-code text-[var(--theme-text)] p-2.5 rounded-2xl bg-white border border-[var(--theme-card-border)] shadow-2xs">
            TOTAL TECHNOLOGIES: <span className="text-[var(--theme-primary)] font-bold">{PORTFOLIO_CONFIG.skills.length}</span>
          </div>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const IconComp = cat.icon;
            const isSelected = selectedCategory === cat.label;
            return (
              <button
                key={cat.label}
                id={`skill-cat-${cat.label.toLowerCase().replace(/[^a-z]/g, "")}`}
                onClick={() => {
                  soundEngine.playKeyClick();
                  setSelectedCategory(cat.label);
                }}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-2xl text-xs font-mono-code whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[var(--theme-primary)] text-white font-bold shadow-xs scale-102"
                    : "bg-white hover:bg-[var(--theme-primary-light)]/50 text-[var(--theme-text)] border border-[var(--theme-card-border)]"
                }`}
              >
                <IconComp className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid + Interactive Details Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Skills Chips Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {filteredSkills.map((skill) => {
              const isSelected = selectedSkill.id === skill.id;

              return (
                <div
                  key={skill.id}
                  id={`skill-item-${skill.id}`}
                  onClick={() => {
                    soundEngine.playPop();
                    setSelectedSkill(skill);
                  }}
                  className={`group relative cursor-pointer p-4 rounded-2xl border transition-all flex flex-col justify-between min-h-[95px] ${
                    isSelected
                      ? "bg-white border-[var(--theme-primary)] shadow-md scale-102 ring-2 ring-[var(--theme-primary)]/40"
                      : "bg-white/80 hover:bg-white border-[var(--theme-card-border)] hover:border-[var(--theme-primary)] shadow-2xs"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-sm text-[var(--theme-text)]">
                      {skill.name}
                    </span>
                    <span
                      className={`text-[10px] font-mono-code font-bold px-1.5 py-0.5 rounded-md ${
                        skill.level === "Advanced"
                          ? "bg-[var(--theme-primary-light)] text-[var(--theme-primary-dark)]"
                          : skill.level === "Proficient"
                          ? "bg-[var(--theme-pill-bg)] text-[var(--theme-pill-text)]"
                          : "bg-[var(--theme-canvas-alt)] text-[var(--theme-text)]"
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>

                  <div className="mt-2 flex items-center justify-between text-[11px] text-[var(--theme-text-muted)] font-mono-code">
                    <span className="truncate max-w-[120px]">{skill.category}</span>
                    <span className="text-[var(--theme-primary)] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                      Inspect →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Selected Skill Deep-Dive Inspector */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="rounded-3xl bg-white border border-[var(--theme-card-border)] p-6 sm:p-7 shadow-lg space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--theme-card-border)]">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-[var(--theme-primary-light)] flex items-center justify-center font-bold text-sm text-[var(--theme-primary)]">
                    {selectedSkill.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-[var(--theme-text)]">
                      {selectedSkill.name}
                    </h3>
                    <p className="text-xs font-mono-code text-[var(--theme-primary)] font-semibold">
                      {selectedSkill.category} ✦ {selectedSkill.level}
                    </p>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-xl bg-[var(--theme-primary-light)] text-xs font-mono-code font-bold text-[var(--theme-primary-dark)] border border-[var(--theme-card-border)]">
                  ACTIVE
                </span>
              </div>

              {/* What I Use It For */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-mono-code font-bold text-[var(--theme-text)] flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-[var(--theme-primary)]" />
                  <span>Engineering Purpose & Usage:</span>
                </h4>
                <p className="text-xs sm:text-sm text-[var(--theme-text)]/85 leading-relaxed bg-[var(--theme-canvas)] p-3.5 rounded-2xl border border-[var(--theme-card-border)]">
                  {selectedSkill.whatIUseItFor}
                </p>
              </div>

              {/* Where It Appears */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-mono-code font-bold text-[var(--theme-text)] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--theme-secondary)]" />
                  <span>Project & Architecture Context:</span>
                </h4>
                <p className="text-xs sm:text-sm text-[var(--theme-text)]/85 leading-relaxed bg-[var(--theme-canvas-alt)] p-3.5 rounded-2xl border border-[var(--theme-card-border)]">
                  {selectedSkill.whereItAppears}
                </p>
              </div>

              {/* Linked Projects */}
              {selectedSkill.projectIds && selectedSkill.projectIds.length > 0 && (
                <div className="pt-2">
                  <h4 className="text-xs font-mono-code font-bold text-[var(--theme-text)] mb-2">
                    Linked Flagship Projects:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedSkill.projectIds.map((pId) => (
                      <button
                        key={pId}
                        onClick={() => {
                          soundEngine.playPop();
                          onSelectProject(pId);
                        }}
                        className="px-3 py-1.5 rounded-xl bg-[var(--theme-primary)] hover:bg-[var(--theme-primary-dark)] text-white text-xs font-mono-code font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
                      >
                        <span>{pId.toUpperCase()}</span>
                        <ArrowRight className="w-3 h-3 text-yellow-200" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
