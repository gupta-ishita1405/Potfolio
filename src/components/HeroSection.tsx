import React, { useState, useEffect, useRef } from "react";
import { 
  ArrowRight, 
  FileText, 
  Github, 
  Sparkles, 
  Terminal, 
  Cpu, 
  Layers, 
  Database, 
  Code2, 
  Zap, 
  Boxes,
  CheckCircle2,
  Play,
  RotateCcw,
  MessageSquare,
  Flame,
  CornerDownRight,
  Heart,
  Palette
} from "lucide-react";
import { PORTFOLIO_CONFIG } from "../config/portfolioData";
import { AestheticPhotoPlace } from "./AestheticPhotoPlace";
import { attachMagneticEffect, triggerPastelConfetti } from "../utils/animations";
import { soundEngine } from "../utils/audio";
import { useTheme } from "../context/ThemeContext";

interface HeroSectionProps {
  onOpenResume: () => void;
  onOpenAITwin: () => void;
  onExploreProjects: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenResume,
  onOpenAITwin,
  onExploreProjects,
}) => {
  const { palette, uiMode } = useTheme();
  const [activeKeywordIndex, setActiveKeywordIndex] = useState(0);
  const [activePipelineStep, setActivePipelineStep] = useState(2); // default on AI node
  const [isAutoCycling, setIsAutoCycling] = useState(true);

  const primaryBtnRef = useRef<HTMLButtonElement>(null);
  const aiTwinBtnRef = useRef<HTMLButtonElement>(null);
  const resumeBtnRef = useRef<HTMLButtonElement>(null);

  const keywords = PORTFOLIO_CONFIG.personal.rotatingKeywords;

  // Auto-cycle keywords
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveKeywordIndex((prev) => (prev + 1) % keywords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [keywords.length]);

  // Auto-cycle system pipeline nodes
  useEffect(() => {
    if (!isAutoCycling) return;
    const interval = setInterval(() => {
      setActivePipelineStep((prev) => (prev + 1) % 5);
    }, 3500);
    return () => clearInterval(interval);
  }, [isAutoCycling]);

  // Attach magnetic physics to CTA buttons using GSAP
  useEffect(() => {
    const cleanups: Array<(() => void) | undefined> = [];
    cleanups.push(attachMagneticEffect(primaryBtnRef.current, 0.25));
    cleanups.push(attachMagneticEffect(aiTwinBtnRef.current, 0.25));
    cleanups.push(attachMagneticEffect(resumeBtnRef.current, 0.2));

    return () => {
      cleanups.forEach((fn) => fn && fn());
    };
  }, []);

  const pipelineNodes = [
    {
      id: "idea",
      label: "01. ARCHITECTURE",
      subtitle: "System Discovery",
      tech: "Problem Discovery & API Contracts",
      icon: Zap,
      accent: palette.colors.primary,
      code: `const systemBlueprint = {
  problem: "Static learning curricula",
  solution: "AI-driven skill-gap engine",
  stack: ["Next.js", "Express", "Gemini 3.7", "MongoDB"]
};`
    },
    {
      id: "code",
      label: "02. CONTROLLER",
      subtitle: "Modular API & Auth",
      tech: "React 19, TypeScript, Express, JWT",
      icon: Code2,
      accent: palette.colors.secondary,
      code: `// Modular Controller & Route Guard
export const secureRouter = express.Router();
secureRouter.post('/api/analyze', verifyJWT, async (req, res) => {
  const skillGap = await computeVectorGap(req.body);
  return res.json({ status: "ok", gap: skillGap });
});`
    },
    {
      id: "ai",
      label: "03. INFERENCE",
      subtitle: "Reasoning & Pipelines",
      tech: "Gemini 3.7 Flash, SSE Streaming",
      icon: Sparkles,
      accent: palette.colors.primary,
      code: `// Server-side AI Inference
const response = await ai.models.generateContent({
  model: 'gemini-3.7-flash',
  contents: promptPayload,
  config: { systemInstruction: "Output validated JSON" }
});`
    },
    {
      id: "system",
      label: "04. PERSISTENCE",
      subtitle: "Indexing & Schemas",
      tech: "MongoDB, PostgreSQL, Isolation",
      icon: Database,
      accent: palette.colors.accent,
      code: `// Schema indexing & state isolation
const UserMilestoneSchema = new Schema({
  userId: { type: ObjectId, ref: 'User', index: true },
  milestones: [{ id: String, verifiedAt: Date }]
});`
    },
    {
      id: "ui",
      label: "05. EXPERIENCE",
      subtitle: "Reactive Interfaces",
      tech: "60fps GSAP Motion, Responsive UI",
      icon: Boxes,
      accent: palette.colors.secondary,
      code: `// Reactive GSAP Physics & Interactive UI
gsap.to('.magnetic-node', {
  x: targetX,
  y: targetY,
  ease: 'power3.out',
  duration: 0.35
});`
    }
  ];

  const currentNode = pipelineNodes[activePipelineStep];

  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center pt-8 pb-16 overflow-hidden bg-grid-soft">
      
      {/* Background Soft Pastel Ambient Orbs */}
      <div 
        className="absolute top-1/4 -left-20 w-96 h-96 rounded-full blur-[140px] pointer-events-none -z-10 opacity-50 transition-all duration-700" 
        style={{ backgroundColor: palette.colors.softPillBg }}
      />
      <div 
        className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full blur-[140px] pointer-events-none -z-10 opacity-40 transition-all duration-700"
        style={{ backgroundColor: palette.colors.secondary }}
      />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[180px] pointer-events-none -z-10 opacity-30 transition-all duration-700"
        style={{ backgroundColor: palette.colors.primaryLight }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Main Grid: Left Identity & Pitch + Right Profile Card & Interactive Pipeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Identity, Rotating Pills & Magnetic CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Status & Gen-Z Pill Badge */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--theme-primary-light)] border border-[var(--theme-card-border)] text-xs font-mono-code font-bold text-[var(--theme-primary-dark)]">
                <Sparkles className="w-3.5 h-3.5 text-[var(--theme-primary)]" />
                <span>AI-INTEGRATED FULL-STACK DEVELOPER</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--theme-card-bg)] border border-[var(--theme-card-border)] text-xs font-mono-code font-bold text-[var(--theme-text)] shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[var(--theme-secondary)] animate-ping" />
                <span>OPEN FOR HIGH-IMPACT ROLES</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-[var(--theme-text)] tracking-tight leading-[1.08]">
                Building systems that{" "}
                <span className="font-serif-editorial italic font-normal text-[var(--theme-primary)] underline decoration-[var(--theme-card-border)] underline-offset-8">
                  think, interact
                </span>{" "}
                & solve problems.
              </h1>

              {/* Dynamic Rotating Pill */}
              <div className="flex items-center gap-2 pt-1">
                <span className="text-xs sm:text-sm font-mono-code text-[var(--theme-text-muted)] font-semibold uppercase">
                  SPECIALIZED IN:
                </span>
                <div className="px-3 py-1 rounded-xl bg-[var(--theme-pill-bg)] border border-[var(--theme-card-border)] text-xs sm:text-sm font-mono-code font-bold text-[var(--theme-pill-text)] transition-all shadow-xs">
                  {keywords[activeKeywordIndex]}
                </div>
              </div>
            </div>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[var(--theme-text)]/80 font-sans max-w-xl leading-relaxed">
              Hey, I'm <span className="font-bold text-[var(--theme-text)]">Ishita Gupta</span>. I engineer full-stack applications with modular Node.js/Express architectures, C++ algorithmic precision, and production-grade Generative AI pipelines.
            </p>

            {/* Quick Micro-Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                { label: "C++ & DSA", color: "bg-[var(--theme-primary-light)] text-[var(--theme-primary-dark)] border-[var(--theme-card-border)]" },
                { label: "React 19 & Next.js", color: "bg-white text-[var(--theme-text)] border-[var(--theme-card-border)]" },
                { label: "Node.js & JWT APIs", color: "bg-[var(--theme-canvas-alt)] text-[var(--theme-text)] border-[var(--theme-card-border)]" },
                { label: "Gemini 3.7 LLM Pipelines", color: "bg-[var(--theme-pill-bg)] text-[var(--theme-pill-text)] border-[var(--theme-card-border)]" },
              ].map((pill) => (
                <span
                  key={pill.label}
                  className={`px-3 py-1 rounded-xl text-xs font-mono-code font-semibold border ${pill.color} shadow-2xs`}
                >
                  {pill.label}
                </span>
              ))}
            </div>

            {/* Magnetic CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <button
                ref={primaryBtnRef}
                id="hero-explore-projects-btn"
                onClick={() => {
                  soundEngine.playPop();
                  onExploreProjects();
                }}
                className="magnetic-item group px-6 py-3.5 rounded-2xl bg-[var(--theme-primary)] hover:bg-[var(--theme-primary-dark)] text-white font-mono-code font-bold text-sm shadow-md transition-all flex items-center gap-2.5 cursor-pointer"
              >
                <span>Explore Flagship Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                ref={aiTwinBtnRef}
                id="hero-open-ai-twin-btn"
                onClick={() => {
                  soundEngine.playPop();
                  onOpenAITwin();
                }}
                className="magnetic-item px-5 py-3.5 rounded-2xl bg-white hover:bg-[var(--theme-primary-light)] border border-[var(--theme-card-border)] text-[var(--theme-text)] font-mono-code font-bold text-sm transition-all flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[var(--theme-primary)] animate-pulse" />
                <span>Chat with AI Twin</span>
              </button>

              <button
                ref={resumeBtnRef}
                id="hero-view-resume-btn"
                onClick={() => {
                  soundEngine.playPop();
                  onOpenResume();
                }}
                className="magnetic-item px-4 py-3.5 rounded-2xl bg-white/70 hover:bg-white border border-[var(--theme-card-border)] text-[var(--theme-text)] font-mono-code text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs"
              >
                <FileText className="w-4 h-4 text-[var(--theme-primary)]" />
                <span>Resume</span>
              </button>
            </div>

            {/* Location & Status Line */}
            <div className="flex items-center gap-3 pt-2 text-xs font-mono-code text-[var(--theme-text-muted)]">
              <span className="flex items-center gap-1">📍 Bhopal, India</span>
              <span>•</span>
              <span className="text-[var(--theme-primary)] font-semibold">Internship at Sheriyans (Nov '25 – Feb '26)</span>
            </div>

          </div>

          {/* Right Column: Aesthetic Photo Frame & Interactive System Pipeline */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Aesthetic Photo Placement with Polaroid & Stickers */}
            <AestheticPhotoPlace />

            {/* Interactive Architecture Flow Sandbox */}
            <div className="p-4 sm:p-5 rounded-3xl bg-white border border-[var(--theme-card-border)] shadow-lg space-y-3">
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[var(--theme-primary)]" />
                  <span className="text-xs font-mono-code font-bold text-[var(--theme-text)] uppercase tracking-wider">
                    Interactive Engineering Pipeline
                  </span>
                </div>
                <button
                  onClick={() => setIsAutoCycling(!isAutoCycling)}
                  className={`text-[10px] font-mono-code px-2 py-0.5 rounded-md border transition-all cursor-pointer ${
                    isAutoCycling
                      ? "bg-[var(--theme-primary-light)] text-[var(--theme-primary-dark)] border-[var(--theme-card-border)]"
                      : "bg-gray-100 text-gray-500 border-gray-200"
                  }`}
                >
                  {isAutoCycling ? "Auto Loop: ON" : "Paused"}
                </button>
              </div>

              {/* Pipeline Step Tabs */}
              <div className="grid grid-cols-5 gap-1 p-1 rounded-xl bg-[var(--theme-canvas-alt)] border border-[var(--theme-card-border)]">
                {pipelineNodes.map((node, idx) => {
                  const Icon = node.icon;
                  const isActive = activePipelineStep === idx;
                  return (
                    <button
                      key={node.id}
                      onClick={() => {
                        soundEngine.playKeyClick();
                        setActivePipelineStep(idx);
                        setIsAutoCycling(false);
                      }}
                      className={`p-2 rounded-lg flex flex-col items-center gap-1 transition-all cursor-pointer ${
                        isActive
                          ? "bg-[var(--theme-primary)] text-white font-bold shadow-xs"
                          : "text-[var(--theme-text-muted)] hover:text-[var(--theme-text)] hover:bg-white"
                      }`}
                      title={node.label}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span className="text-[9px] font-mono-code font-bold">0{idx + 1}</span>
                    </button>
                  );
                })}
              </div>

              {/* Node Code Preview & Live Output */}
              <div className="rounded-2xl p-3.5 bg-[var(--theme-canvas)] border border-[var(--theme-card-border)] space-y-2">
                <div className="flex items-center justify-between text-xs font-mono-code">
                  <span className="font-bold text-[var(--theme-primary)]">{currentNode.label}</span>
                  <span className="text-[10px] text-[var(--theme-text-muted)]">{currentNode.tech}</span>
                </div>

                <pre className="p-2.5 rounded-xl bg-white border border-[var(--theme-card-border)] text-[11px] font-mono-code text-[var(--theme-text)] overflow-x-auto leading-relaxed">
                  <code>{currentNode.code}</code>
                </pre>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
