import React, { useState } from "react";
import { 
  Lightbulb, 
  Layers, 
  Database, 
  Terminal, 
  Sparkles, 
  ShieldCheck, 
  Palette, 
  Zap, 
  CheckCircle2, 
  Rocket, 
  ArrowRight 
} from "lucide-react";
import { PORTFOLIO_CONFIG } from "../config/portfolioData";
import { soundEngine } from "../utils/audio";
import { useTheme } from "../context/ThemeContext";

export const HowIThinkSection: React.FC = () => {
  const { palette } = useTheme();
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const steps = PORTFOLIO_CONFIG.howIThink;
  const activeStep = steps[activeStepIndex];

  return (
    <section id="thinking" className="relative py-20 lg:py-28 bg-[var(--theme-canvas-alt)] border-t border-[var(--theme-card-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--theme-primary-light)] border border-[var(--theme-card-border)] text-xs font-mono-code font-bold text-[var(--theme-primary-dark)]">
              <Zap className="w-3.5 h-3.5 text-[var(--theme-primary)]" />
              <span>04 // SYSTEM ARCHITECTURE PROCESS</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-[var(--theme-text)] tracking-tight leading-tight">
              From Raw Problem to Engineered System
            </h2>
            <p className="text-[var(--theme-text)]/75 text-sm sm:text-base max-w-2xl font-sans">
              Great software isn't built by jumping straight into coding. Here is my structured 10-stage engineering process.
            </p>
          </div>

          <div className="text-xs font-mono-code text-[var(--theme-text)] p-2.5 rounded-xl bg-white border border-[var(--theme-card-border)] shadow-2xs">
            STAGE <span className="text-[var(--theme-primary)] font-bold">{activeStepIndex + 1} OF {steps.length}</span>
          </div>
        </div>

        {/* Steps Horizontal Scroller */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {steps.map((step, idx) => {
            const isSelected = activeStepIndex === idx;
            return (
              <button
                key={step.stepNumber}
                id={`process-step-btn-${idx}`}
                onClick={() => {
                  soundEngine.playKeyClick();
                  setActiveStepIndex(idx);
                }}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono-code whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[var(--theme-primary)] text-white font-bold shadow-xs scale-102"
                    : "bg-white text-[var(--theme-text)] hover:bg-[var(--theme-primary-light)]/50 border border-[var(--theme-card-border)]"
                }`}
              >
                <span>{step.stepNumber}.</span>
                <span>{step.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Step Deep-Dive Card */}
        {activeStep && (
          <div className="rounded-3xl bg-white border border-[var(--theme-card-border)] p-6 sm:p-8 lg:p-10 shadow-lg space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[var(--theme-card-border)]">
              <div className="space-y-1">
                <span className="text-xs font-mono-code px-2.5 py-0.5 rounded bg-[var(--theme-primary-light)] text-[var(--theme-primary-dark)] border border-[var(--theme-card-border)] font-bold">
                  STAGE {activeStep.stepNumber} // METHODOLOGY
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-[var(--theme-text)]">
                  {activeStep.title} — {activeStep.subtitle}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  disabled={activeStepIndex === 0}
                  onClick={() => {
                    soundEngine.playPop();
                    setActiveStepIndex((i) => Math.max(0, i - 1));
                  }}
                  className="px-3.5 py-2 rounded-xl bg-[var(--theme-canvas-alt)] hover:bg-[var(--theme-primary-light)] disabled:opacity-30 text-xs font-mono-code text-[var(--theme-text)] transition-colors border border-[var(--theme-card-border)] cursor-pointer"
                >
                  ← Prev
                </button>
                <button
                  disabled={activeStepIndex === steps.length - 1}
                  onClick={() => {
                    soundEngine.playPop();
                    setActiveStepIndex((i) => Math.min(steps.length - 1, i + 1));
                  }}
                  className="px-3.5 py-2 rounded-xl bg-[var(--theme-primary)] hover:bg-[var(--theme-primary-dark)] disabled:opacity-30 text-xs font-mono-code font-bold text-white transition-colors cursor-pointer shadow-xs"
                >
                  Next →
                </button>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[var(--theme-text)]/85 font-sans leading-relaxed">
              {activeStep.description}
            </p>

            {/* Key Deliverables */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono-code text-[var(--theme-text)] uppercase font-bold tracking-wider">
                // Deliverables & Artifacts Generated in this Stage
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {activeStep.keyDeliverables.map((del, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-[var(--theme-canvas-alt)] border border-[var(--theme-card-border)] text-xs text-[var(--theme-text)] font-mono-code"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[var(--theme-secondary)] shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
