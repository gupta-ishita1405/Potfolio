import React, { useState } from "react";
import { 
  Layers, 
  Sparkles, 
  Cpu, 
  Zap, 
  GraduationCap, 
  Code, 
  Heart,
  Target,
  Compass,
  ArrowUpRight,
  Coffee
} from "lucide-react";
import { PORTFOLIO_CONFIG } from "../config/portfolioData";
import { useTheme } from "../context/ThemeContext";
import { soundEngine } from "../utils/audio";

export const AboutSection: React.FC = () => {
  const { palette } = useTheme();
  const [activeTab, setActiveTab] = useState<"pillars" | "story" | "mindset">("pillars");

  const pillars = PORTFOLIO_CONFIG.about.corePillars;

  const iconMap: Record<string, React.ElementType> = {
    Layers,
    Sparkles,
    Cpu,
    Zap,
  };

  return (
    <section id="about" className="relative py-20 lg:py-28 bg-[var(--theme-canvas)] border-t border-[var(--theme-card-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Gen-Z Editorial Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--theme-primary-light)] border border-[var(--theme-card-border)] text-[var(--theme-primary-dark)] text-xs font-mono-code font-bold">
              <span>01 // ABOUT ME</span>
              <span>✦</span>
              <span>IDENTITY & ENGINEERING</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-[var(--theme-text)] tracking-tight max-w-2xl leading-tight">
              {PORTFOLIO_CONFIG.about.heading}
            </h2>
          </div>

          {/* Interactive Tab Switcher */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-white border border-[var(--theme-card-border)] shadow-xs self-start md:self-auto">
            <button
              id="about-tab-pillars"
              onClick={() => {
                soundEngine.playKeyClick();
                setActiveTab("pillars");
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono-code font-bold transition-all cursor-pointer ${
                activeTab === "pillars"
                  ? "bg-[var(--theme-primary)] text-white shadow-xs"
                  : "text-[var(--theme-text-muted)] hover:text-[var(--theme-text)]"
              }`}
            >
              Core Pillars
            </button>
            <button
              id="about-tab-story"
              onClick={() => {
                soundEngine.playKeyClick();
                setActiveTab("story");
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono-code font-bold transition-all cursor-pointer ${
                activeTab === "story"
                  ? "bg-[var(--theme-primary)] text-white shadow-xs"
                  : "text-[var(--theme-text-muted)] hover:text-[var(--theme-text)]"
              }`}
            >
              The Story
            </button>
            <button
              id="about-tab-mindset"
              onClick={() => {
                soundEngine.playKeyClick();
                setActiveTab("mindset");
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono-code font-bold transition-all cursor-pointer ${
                activeTab === "mindset"
                  ? "bg-[var(--theme-primary)] text-white shadow-xs"
                  : "text-[var(--theme-text-muted)] hover:text-[var(--theme-text)]"
              }`}
            >
              Mindset
            </button>
          </div>
        </div>

        {/* Content Views */}
        {activeTab === "pillars" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => {
              const IconComponent = iconMap[pillar.icon] || Layers;

              return (
                <div
                  key={pillar.title}
                  className="group relative p-6 rounded-3xl bg-white border border-[var(--theme-card-border)] hover:border-[var(--theme-primary)] transition-all hover:-translate-y-1 shadow-sm hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    {/* Top Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono-code font-bold bg-[var(--theme-canvas-alt)] text-[var(--theme-text)] border border-[var(--theme-card-border)]">
                        {pillar.tag}
                      </span>
                      <div
                        className="w-10 h-10 rounded-2xl flex items-center justify-center bg-[var(--theme-primary-light)] text-[var(--theme-primary)] shadow-xs group-hover:rotate-6 transition-transform"
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="font-display font-bold text-lg text-[var(--theme-text)] mb-2 leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[var(--theme-text)]/80 font-sans leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[var(--theme-card-border)] flex items-center justify-between text-[11px] font-mono-code text-[var(--theme-primary)] font-semibold">
                    <span>PILLAR 0{idx + 1}</span>
                    <span className="group-hover:translate-x-1 transition-transform">✦</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === "story" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-10 border border-[var(--theme-card-border)] shadow-md">
            <div className="lg:col-span-8 space-y-4">
              <h3 className="font-display font-bold text-2xl text-[var(--theme-text)]">
                Engineering Rigor Meets Generative Intelligence
              </h3>
              {PORTFOLIO_CONFIG.about.paragraphs.map((p, i) => (
                <p key={i} className="text-sm sm:text-base text-[var(--theme-text)]/80 font-sans leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            <div className="lg:col-span-4 space-y-3 p-5 rounded-2xl bg-[var(--theme-canvas-alt)] border border-[var(--theme-card-border)]">
              <div className="flex items-center gap-2 text-xs font-mono-code font-bold text-[var(--theme-primary)]">
                <GraduationCap className="w-4 h-4" />
                <span>ACADEMIC FOUNDATION</span>
              </div>
              <p className="font-display font-bold text-base text-[var(--theme-text)]">
                B.Tech in Computer Science & Engineering
              </p>
              <p className="text-xs text-[var(--theme-text)]/75 font-sans">
                Strong focus on Data Structures & Algorithms, Object Oriented Programming in C++, Database Management Systems, and Operating Systems.
              </p>
              <div className="pt-2 flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 rounded-md bg-white text-[10px] font-mono-code font-bold text-[var(--theme-text)] border border-[var(--theme-card-border)]">
                  DSA / C++
                </span>
                <span className="px-2 py-0.5 rounded-md bg-white text-[10px] font-mono-code font-bold text-[var(--theme-text)] border border-[var(--theme-card-border)]">
                  DBMS & SQL
                </span>
                <span className="px-2 py-0.5 rounded-md bg-white text-[10px] font-mono-code font-bold text-[var(--theme-text)] border border-[var(--theme-card-border)]">
                  System Architecture
                </span>
              </div>
            </div>
          </div>
        )}

        {activeTab === "mindset" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-[var(--theme-card-border)] shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[var(--theme-primary-light)] text-[var(--theme-primary)] flex items-center justify-center font-bold">
                01
              </div>
              <h4 className="font-display font-bold text-lg text-[var(--theme-text)]">
                AI As Architecture
              </h4>
              <p className="text-xs text-[var(--theme-text)]/80 leading-relaxed font-sans">
                Treating AI not as a generic add-on wrapper, but as an orchestrated layer with server-side validation, structured JSON outputs, and graceful fallbacks.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[var(--theme-card-border)] shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[var(--theme-pill-bg)] text-[var(--theme-pill-text)] flex items-center justify-center font-bold">
                02
              </div>
              <h4 className="font-display font-bold text-lg text-[var(--theme-text)]">
                Algorithmic Craft
              </h4>
              <p className="text-xs text-[var(--theme-text)]/80 leading-relaxed font-sans">
                Applying foundational C++ data structures, two-pointer techniques, and asymptotic complexity analysis to keep frontends and backends fast at scale.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[var(--theme-card-border)] shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[var(--theme-canvas-alt)] text-[var(--theme-text)] flex items-center justify-center font-bold">
                03
              </div>
              <h4 className="font-display font-bold text-lg text-[var(--theme-text)]">
                Sensory Polish
              </h4>
              <p className="text-xs text-[var(--theme-text)]/80 leading-relaxed font-sans">
                Obsessing over micro-interactions, soft color harmonies, typography scale, tactile feedback, and accessible responsive performance.
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

