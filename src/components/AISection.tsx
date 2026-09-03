import React, { useState } from "react";
import { 
  Sparkles, 
  Bot, 
  BrainCircuit, 
  MessageSquare, 
  Terminal, 
  Search, 
  Database, 
  FileText, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Play 
} from "lucide-react";
import { PORTFOLIO_CONFIG } from "../config/portfolioData";
import { soundEngine } from "../utils/audio";
import { useTheme } from "../context/ThemeContext";

export const AISection: React.FC = () => {
  const { palette } = useTheme();
  const [selectedWorkflow, setSelectedWorkflow] = useState<"skillGap" | "chatStream" | "docSummary">("skillGap");

  const capabilities = PORTFOLIO_CONFIG.aiCapabilities;

  const workflows = {
    skillGap: {
      title: "AI Skill Gap & Roadmap Generation",
      input: `{ targetRole: "AI Full-Stack", skills: { react: 80, node: 70, genai: 50 } }`,
      prompt: `System: Evaluate target benchmarks and compute step-by-step milestone curriculum in JSON format with time estimations.`,
      model: "Gemini 3.7 Flash via Server-Side SDK",
      validation: "Zod Schema: array of 4 milestone objects validated",
      output: `[ { week: "Week 1", title: "LLM API Integration", hours: "12 hrs" }, ... ]`,
    },
    chatStream: {
      title: "Multi-turn Conversational AI with Persona Tuning",
      input: `"Explain JWT vs session cookies in Express."`,
      prompt: `System Instruction: You are NOVA, an AI architecture assistant. Answer with technical rigor and concise code examples.`,
      model: "Gemini 3.7 Flash via Server-Side SDK (Streaming)",
      validation: "Server-Sent Events (SSE) token buffering with latency tracking",
      output: `"JWT tokens provide stateless auth via crypto signatures..." [Stream Completed]`,
    },
    docSummary: {
      title: "Intelligent Document Synthesis & Action Items",
      input: `"14-page Technical Architecture Document PDF"`,
      prompt: `Extract key architectural constraints, database schemas, and external API dependencies.`,
      model: "Gemini 3.7 Flash with Large Context Window",
      validation: "JSON schema verification & markdown bullet formatting",
      output: `"Key Constraints: Single Port 3000, SSE latency < 200ms, AES-256 at rest."`,
    },
  };

  const currentWf = workflows[selectedWorkflow];

  return (
    <section id="ai" className="relative py-20 lg:py-28 bg-[var(--theme-canvas)] border-t border-[var(--theme-card-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--theme-primary-light)] border border-[var(--theme-card-border)] text-[var(--theme-primary-dark)] text-xs font-mono-code font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[var(--theme-primary)]" />
              <span>05 // AI & GENERATIVE ENGINEERING</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-[var(--theme-text)] tracking-tight leading-tight">
              AI as an Architecture Layer, Not a Gimmick
            </h2>
            <p className="text-[var(--theme-text)]/75 text-sm sm:text-base max-w-2xl font-sans">
              I treat Large Language Models as a foundational layer of the application stack, designing deterministic guardrails, structured JSON parsers, and streaming protocols.
            </p>
          </div>

          <div className="text-xs font-mono-code text-[var(--theme-text)] p-2.5 rounded-xl bg-white border border-[var(--theme-card-border)] shadow-2xs">
            SHOWCASING <span className="text-[var(--theme-primary)] font-bold">8 AI CAPABILITIES</span>
          </div>
        </div>

        {/* 8 AI Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {capabilities.map((cap, idx) => (
            <div
              key={cap.id}
              className="p-5 rounded-2xl bg-white border border-[var(--theme-card-border)] hover:border-[var(--theme-primary)] transition-all space-y-3 group shadow-sm hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-[var(--theme-canvas-alt)] text-[var(--theme-text)] font-bold">
                  0{idx + 1}
                </span>
                <span className="text-[9px] font-mono-code px-2 py-0.5 rounded bg-[var(--theme-primary-light)] text-[var(--theme-primary-dark)] border border-[var(--theme-card-border)]">
                  {cap.badge}
                </span>
              </div>

              <h3 className="font-display font-bold text-base text-[var(--theme-text)] group-hover:text-[var(--theme-primary)] transition-colors">
                {cap.title}
              </h3>
              <p className="text-xs text-[var(--theme-text)]/80 font-sans leading-relaxed">
                {cap.description}
              </p>
              <div className="pt-2 border-t border-[var(--theme-card-border)] text-[11px] font-mono-code text-[var(--theme-primary)] font-semibold">
                💡 {cap.exampleInMyWork}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Workflow Simulator */}
        <div className="rounded-3xl bg-white border border-[var(--theme-card-border)] p-6 sm:p-8 lg:p-10 shadow-lg space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[var(--theme-card-border)]">
            <div>
              <h3 className="font-display font-bold text-xl text-[var(--theme-text)] flex items-center gap-2">
                <BrainCircuit className="w-5 h-5 text-[var(--theme-primary)]" />
                <span>Live AI Pipeline Architecture Inspector</span>
              </h3>
              <p className="text-xs text-[var(--theme-text-muted)] font-sans mt-0.5">
                Inspect how data flows through system prompts, SDK inference, and schema validation layers.
              </p>
            </div>

            {/* Workflow Switcher */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[var(--theme-canvas-alt)] border border-[var(--theme-card-border)]">
              <button
                onClick={() => {
                  soundEngine.playKeyClick();
                  setSelectedWorkflow("skillGap");
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono-code font-bold transition-all cursor-pointer ${
                  selectedWorkflow === "skillGap"
                    ? "bg-[var(--theme-primary)] text-white shadow-xs"
                    : "text-[var(--theme-text-muted)] hover:text-[var(--theme-text)]"
                }`}
              >
                Skill Gap
              </button>
              <button
                onClick={() => {
                  soundEngine.playKeyClick();
                  setSelectedWorkflow("chatStream");
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono-code font-bold transition-all cursor-pointer ${
                  selectedWorkflow === "chatStream"
                    ? "bg-[var(--theme-primary)] text-white shadow-xs"
                    : "text-[var(--theme-text-muted)] hover:text-[var(--theme-text)]"
                }`}
              >
                Chat Stream
              </button>
              <button
                onClick={() => {
                  soundEngine.playKeyClick();
                  setSelectedWorkflow("docSummary");
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono-code font-bold transition-all cursor-pointer ${
                  selectedWorkflow === "docSummary"
                    ? "bg-[var(--theme-primary)] text-white shadow-xs"
                    : "text-[var(--theme-text-muted)] hover:text-[var(--theme-text)]"
                }`}
              >
                Doc Summary
              </button>
            </div>
          </div>

          {/* Workflow Steps 4-stage Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            
            {/* Stage 1 */}
            <div className="p-4 rounded-2xl bg-[var(--theme-canvas-alt)] border border-[var(--theme-card-border)] space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono-code font-bold text-[var(--theme-primary)]">
                <span>01 // INPUT PAYLOAD</span>
                <span className="text-[9px] px-1.5 py-0.2 rounded bg-white border border-[var(--theme-card-border)]">JSON</span>
              </div>
              <pre className="text-[11px] font-mono-code text-[var(--theme-text)] overflow-x-auto whitespace-pre-wrap p-2.5 rounded-xl bg-white border border-[var(--theme-card-border)]">
                <code>{currentWf.input}</code>
              </pre>
            </div>

            {/* Stage 2 */}
            <div className="p-4 rounded-2xl bg-[var(--theme-canvas-alt)] border border-[var(--theme-card-border)] space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono-code font-bold text-[var(--theme-primary)]">
                <span>02 // SYSTEM PROMPT</span>
                <span className="text-[9px] px-1.5 py-0.2 rounded bg-white border border-[var(--theme-card-border)]">Guardrail</span>
              </div>
              <p className="text-[11px] font-mono-code text-[var(--theme-text)] p-2.5 rounded-xl bg-white border border-[var(--theme-card-border)] leading-relaxed">
                {currentWf.prompt}
              </p>
            </div>

            {/* Stage 3 */}
            <div className="p-4 rounded-2xl bg-[var(--theme-canvas-alt)] border border-[var(--theme-card-border)] space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono-code font-bold text-[var(--theme-primary)]">
                <span>03 // SDK INFERENCE</span>
                <span className="text-[9px] px-1.5 py-0.2 rounded bg-white border border-[var(--theme-card-border)]">Model</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-[var(--theme-card-border)] space-y-2 text-[11px] font-mono-code">
                <p className="text-[var(--theme-primary)] font-bold">{currentWf.model}</p>
                <p className="text-[var(--theme-text-muted)] text-[10px]">{currentWf.validation}</p>
              </div>
            </div>

            {/* Stage 4 */}
            <div className="p-4 rounded-2xl bg-[var(--theme-canvas-alt)] border border-[var(--theme-card-border)] space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono-code font-bold text-[var(--theme-secondary)]">
                <span>04 // RESPONSE STATE</span>
                <span className="text-[9px] px-1.5 py-0.2 rounded bg-white border border-[var(--theme-card-border)]">Verified</span>
              </div>
              <pre className="text-[11px] font-mono-code text-[var(--theme-primary-dark)] overflow-x-auto whitespace-pre-wrap p-2.5 rounded-xl bg-white border border-[var(--theme-card-border)]">
                <code>{currentWf.output}</code>
              </pre>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
