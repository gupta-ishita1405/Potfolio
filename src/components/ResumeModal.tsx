import React, { useEffect } from "react";
import { X, Download, FileText, ExternalLink, Mail, Github, Linkedin, CheckCircle2, GraduationCap, Briefcase, Award } from "lucide-react";
import { PORTFOLIO_CONFIG } from "../config/portfolioData";
import confetti from "canvas-confetti";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const handleDownload = () => {
    confetti({
      particleCount: 30,
      spread: 50,
      colors: ["#F7C8D3", "#B46A72", "#A8B58A"],
    });
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl rounded-3xl bg-[#FFF7E6] border border-[#F7C8D3] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header Bar */}
        <div className="p-4 sm:p-5 bg-white border-b border-[#F7C8D3] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#F7C8D3] flex items-center justify-center text-[#B46A72]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-[#2D3A47]">
                Ishita Gupta — Full-Stack & AI Resume
              </h3>
              <p className="text-[11px] font-mono-code text-[#B46A72]">
                Verified Technical Dossier ✦ Updated 2026
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="px-3 py-1.5 rounded-xl bg-[#2D3A47] hover:bg-[#1E2730] text-[#FFF7E6] text-xs font-mono-code font-bold flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <Download className="w-3.5 h-3.5 text-[#F7C8D3]" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-[#FFF7E6] hover:bg-[#F7C8D3] text-[#2D3A47] flex items-center justify-center font-bold text-sm"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="flex-1 p-6 sm:p-8 overflow-y-auto space-y-6 bg-white">
          
          {/* Header Summary */}
          <div className="border-b border-gray-200 pb-6">
            <h1 className="font-display font-black text-2xl sm:text-3xl text-[#2D3A47]">
              {PORTFOLIO_CONFIG.personal.name}
            </h1>
            <p className="font-display font-bold text-sm text-[#B46A72] mt-0.5">
              {PORTFOLIO_CONFIG.personal.headlineTitle}
            </p>
            <p className="text-xs text-[#2D3A47]/80 mt-2 max-w-2xl font-sans leading-relaxed">
              {PORTFOLIO_CONFIG.personal.supportingIdentity}
            </p>

            <div className="flex flex-wrap gap-4 mt-3 text-xs font-mono-code text-[#2D3A47]/80">
              <span>📧 {PORTFOLIO_CONFIG.personal.email}</span>
              <span>📍 {PORTFOLIO_CONFIG.personal.location}</span>
              <span>🔗 github.com/ishitagupta</span>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono-code font-bold text-[#B46A72] uppercase tracking-wider flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h2>
            <div className="p-4 rounded-2xl bg-[#FFF7E6] border border-[#F7C8D3]/50 space-y-1">
              <div className="flex justify-between items-start">
                <span className="font-display font-bold text-sm text-[#2D3A47]">
                  Bachelor of Technology (B.Tech) in Computer Science & Engineering
                </span>
                <span className="text-xs font-mono-code text-[#B46A72]">Current</span>
              </div>
              <p className="text-xs text-[#2D3A47]/70 font-sans">
                Core Courses: Data Structures & Algorithms, Object-Oriented Programming (C++), DBMS, Operating Systems, Computer Networks.
              </p>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono-code font-bold text-[#B46A72] uppercase tracking-wider flex items-center gap-1.5">
              <Briefcase className="w-4 h-4" />
              <span>Work Experience</span>
            </h2>
            {PORTFOLIO_CONFIG.experience.map((exp, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#F7C8D3]/60 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-display font-bold text-sm text-[#2D3A47]">{exp.role}</h3>
                    <p className="text-xs font-semibold text-[#B46A72]">{exp.company} ✦ {exp.location}</p>
                  </div>
                  <span className="text-xs font-mono-code text-[#2D3A47]/70">{exp.period}</span>
                </div>
                <ul className="space-y-1 text-xs text-[#2D3A47]/85">
                  {exp.responsibilities.map((r, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-1.5">
                      <span className="text-[#A8B58A]">✦</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Key Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono-code font-bold text-[#B46A72] uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              <span>Flagship Engineering Projects</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {PORTFOLIO_CONFIG.projects.map((proj) => (
                <div key={proj.id} className="p-3.5 rounded-2xl bg-[#FFF7E6] border border-[#F7C8D3]/50 space-y-1">
                  <h4 className="font-display font-bold text-xs text-[#2D3A47]">{proj.title}</h4>
                  <p className="text-[11px] text-[#B46A72] font-mono-code font-semibold">{proj.shortTagline}</p>
                  <p className="text-[11px] text-[#2D3A47]/75 font-sans line-clamp-3">{proj.overview}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Summary */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono-code font-bold text-[#B46A72] uppercase tracking-wider">
              Technical Arsenal
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono-code text-[#2D3A47]">
              <div className="p-3 rounded-xl bg-[#FFFDF9] border border-[#F7C8D3]/50">
                <span className="font-bold text-[#B46A72]">Languages:</span> C, C++, Python, JavaScript (ES6+), TypeScript, SQL
              </div>
              <div className="p-3 rounded-xl bg-[#FFFDF9] border border-[#F7C8D3]/50">
                <span className="font-bold text-[#B46A72]">Frontend:</span> React 19, Next.js, GSAP Motion, Tailwind CSS, DOM APIs
              </div>
              <div className="p-3 rounded-xl bg-[#FFFDF9] border border-[#F7C8D3]/50">
                <span className="font-bold text-[#B46A72]">Backend:</span> Node.js, Express.js, REST APIs, JWT Auth, MVC Architecture
              </div>
              <div className="p-3 rounded-xl bg-[#FFFDF9] border border-[#F7C8D3]/50">
                <span className="font-bold text-[#B46A72]">Databases & AI:</span> MongoDB, PostgreSQL, Gemini 3.7 SDK, Generative AI Pipelines
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
