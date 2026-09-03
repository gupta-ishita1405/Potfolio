import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2, Award, Sparkles } from "lucide-react";
import { PORTFOLIO_CONFIG } from "../config/portfolioData";
import { useTheme } from "../context/ThemeContext";

export const ExperienceSection: React.FC = () => {
  const { palette } = useTheme();
  const experiences = PORTFOLIO_CONFIG.experience;

  return (
    <section id="experience" className="relative py-20 lg:py-28 bg-[var(--theme-canvas)] border-t border-[var(--theme-card-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--theme-primary-light)] border border-[var(--theme-card-border)] text-[var(--theme-primary-dark)] text-xs font-mono-code font-bold">
              <span>07 // WORK & MILESTONES</span>
              <span>✦</span>
              <span>ENGINEERING JOURNEY</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-[var(--theme-text)] tracking-tight leading-tight">
              Professional Experience & Milestones
            </h2>
            <p className="text-[var(--theme-text)]/75 text-sm sm:text-base max-w-2xl font-sans">
              Practical production development, engineering APIs, state machines, and real-world system implementations.
            </p>
          </div>
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl bg-white border border-[var(--theme-card-border)] hover:border-[var(--theme-primary)] p-6 sm:p-8 lg:p-10 shadow-md hover:shadow-xl transition-all"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono-code font-bold bg-[var(--theme-primary-light)] text-[var(--theme-primary-dark)] border border-[var(--theme-card-border)]">
                      {exp.type}
                    </span>
                    <span className="text-xs font-mono-code text-[var(--theme-primary)] font-semibold">
                      ROLE // 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-2xl sm:text-3xl text-[var(--theme-text)]">
                    {exp.role}
                  </h3>
                  <p className="font-display font-bold text-base text-[var(--theme-primary)] mt-1">
                    {exp.company}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-2 text-xs font-mono-code text-[var(--theme-text)]/70">
                  <div className="flex items-center gap-1.5 p-2 rounded-xl bg-[var(--theme-canvas-alt)] border border-[var(--theme-card-border)]">
                    <Calendar className="w-3.5 h-3.5 text-[var(--theme-primary)]" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 p-2 rounded-xl bg-[var(--theme-canvas-alt)] border border-[var(--theme-card-border)]">
                    <MapPin className="w-3.5 h-3.5 text-[var(--theme-secondary)]" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-3 mb-6">
                <h4 className="text-xs font-mono-code font-bold text-[var(--theme-text)] uppercase tracking-wider">
                  Key Engineering Contributions:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div
                      key={rIdx}
                      className="flex items-start gap-2.5 p-3 rounded-2xl bg-[var(--theme-canvas-alt)] border border-[var(--theme-card-border)] text-xs sm:text-sm text-[var(--theme-text)]/85 font-sans leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[var(--theme-secondary)] mt-0.5 flex-shrink-0" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="pt-4 border-t border-[var(--theme-card-border)] flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono-code font-bold text-[var(--theme-text)] mr-1">
                  Stack Used:
                </span>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-xl bg-[var(--theme-canvas-alt)] text-xs font-mono-code font-semibold text-[var(--theme-text)] border border-[var(--theme-card-border)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
