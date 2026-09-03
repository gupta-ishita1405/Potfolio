import React from "react";
import { Sparkles, Heart, ArrowUp, Palette } from "lucide-react";
import { PORTFOLIO_CONFIG } from "../config/portfolioData";
import { SOFT_PALETTES, useTheme } from "../context/ThemeContext";

export const Footer: React.FC = () => {
  const { theme, setTheme, palette } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 bg-[var(--theme-canvas)] border-t border-[var(--theme-card-border)] text-[var(--theme-text)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Palette Banner Ticker */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-[var(--theme-card-border)]">
          <div className="flex items-center gap-3">
            <span className="font-display font-black text-lg text-[var(--theme-text)]">
              {PORTFOLIO_CONFIG.personal.name}
            </span>
            <span className="text-xs font-handwriting text-lg text-[var(--theme-primary)]">
              designed with care & soft aesthetic 🌸
            </span>
          </div>

          {/* Palette preview dots */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono-code text-[var(--theme-text-muted)] mr-1">
              Active Theme:
            </span>
            <div className="flex items-center gap-1.5">
              {Object.entries(SOFT_PALETTES).map(([id, p]) => (
                <button
                  key={id}
                  onClick={() => setTheme(id as any)}
                  title={`${p.name} (Click to switch)`}
                  style={{ backgroundColor: p.colors.primaryLight }}
                  className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                    theme === id
                      ? "ring-2 ring-[var(--theme-primary)] scale-110 border-transparent shadow-xs"
                      : "border-black/10 opacity-70 hover:opacity-100"
                  }`}
                >
                  <span
                    style={{ backgroundColor: p.colors.primary }}
                    className="w-2.5 h-2.5 rounded-full"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-[var(--theme-text-muted)]">
          <p>
            © {new Date().getFullYear()} Ishita Gupta. Built with Gen-Z soft palette, GSAP & React.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-[var(--theme-primary-light)]/50 border border-[var(--theme-card-border)] text-[var(--theme-text)] font-semibold transition-colors cursor-pointer shadow-2xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[var(--theme-primary)]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
