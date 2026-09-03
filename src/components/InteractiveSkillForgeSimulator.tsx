import React, { useState } from "react";
import { BrainCircuit, Sparkles, ArrowRight, CheckCircle2, RotateCcw, Target } from "lucide-react";

export const InteractiveSkillForgeSimulator: React.FC = () => {
  const [role, setRole] = useState("AI Full-Stack Developer");
  const [scores, setScores] = useState<Record<string, number>>({
    DSA: 75,
    React: 85,
    NodeJS: 80,
    GenAI: 60,
    Databases: 70,
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [roadmap, setRoadmap] = useState<Array<{ week: string; topic: string; task: string }> | null>(null);

  const roles = [
    "AI Full-Stack Developer",
    "Backend Systems Engineer",
    "Frontend Creative Developer",
    "GenAI Product Engineer",
  ];

  const handleGenerateRoadmap = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setRoadmap([
        {
          week: "Week 1-2",
          topic: "GenAI & LLM Integration Architecture",
          task: "Implement server-side SDK streaming, Zod schema validation, and multi-turn session cache.",
        },
        {
          week: "Week 3-4",
          topic: "Advanced Database Performance & Indexing",
          task: "Optimize compound indexes on MongoDB collections and benchmark query latencies under 50ms.",
        },
        {
          week: "Week 5-6",
          topic: "Production Deployment & Security Hardening",
          task: "Configure secure JWT httpOnly cookie flows, rate limiting, and automated CI/CD checks.",
        },
      ]);
      setIsGenerating(false);
    }, 1000);
  };

  return (
    <div className="rounded-3xl bg-[#FFF7E6] border border-[#F7C8D3] p-4 sm:p-6 shadow-inner space-y-5">
      <div className="flex items-center justify-between pb-3 border-b border-[#F7C8D3]">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#A8B58A] flex items-center justify-center text-[#2D3A47]">
            <BrainCircuit className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-display font-bold text-sm text-[#2D3A47]">
              SkillForge AI: Skill Gap & Roadmap Simulator
            </h4>
            <p className="text-[10px] font-mono-code text-[#B46A72]">
              Adjust skills and generate a tailored engineering roadmap
            </p>
          </div>
        </div>
      </div>

      {/* Target Role Selector */}
      <div className="space-y-1.5">
        <label className="text-xs font-mono-code font-bold text-[#2D3A47]">
          Target Engineering Role:
        </label>
        <div className="flex flex-wrap gap-2">
          {roles.map((r) => (
            <button
              key={r}
              onClick={() => {
                setRole(r);
                setRoadmap(null);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono-code font-bold transition-all ${
                role === r
                  ? "bg-[#2D3A47] text-[#FFF7E6]"
                  : "bg-white text-[#2D3A47] border border-[#F7C8D3]"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* Sliders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {Object.entries(scores).map(([skill, val]) => (
          <div key={skill} className="p-3 rounded-2xl bg-white border border-[#F7C8D3] space-y-1">
            <div className="flex justify-between text-xs font-mono-code font-bold text-[#2D3A47]">
              <span>{skill}</span>
              <span className="text-[#B46A72]">{val}%</span>
            </div>
            <input
              type="range"
              min="20"
              max="100"
              value={val}
              onChange={(e) =>
                setScores({ ...scores, [skill]: parseInt(e.target.value) })
              }
              className="w-full accent-[#B46A72]"
            />
          </div>
        ))}
      </div>

      {/* Action Button */}
      <button
        onClick={handleGenerateRoadmap}
        disabled={isGenerating}
        className="w-full py-3 rounded-2xl bg-[#B46A72] hover:bg-[#964E56] text-white font-mono-code font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-xs"
      >
        <Sparkles className="w-4 h-4" />
        <span>{isGenerating ? "Synthesizing AI Curriculum..." : "Compute Gap & Generate Roadmap"}</span>
      </button>

      {/* Roadmap Output */}
      {roadmap && (
        <div className="space-y-2 pt-2 animate-fadeIn">
          <h5 className="text-xs font-mono-code font-bold text-[#2D3A47]">
            Generated Milestone Roadmap:
          </h5>
          <div className="space-y-2">
            {roadmap.map((item, idx) => (
              <div
                key={idx}
                className="p-3 rounded-2xl bg-white border border-[#A8B58A] space-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono-code font-bold bg-[#A8B58A]/30 text-[#2D3A47]">
                    {item.week}
                  </span>
                  <span className="text-xs font-display font-bold text-[#2D3A47]">
                    {item.topic}
                  </span>
                </div>
                <p className="text-xs text-[#2D3A47]/80 font-sans">{item.task}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
