import React, { useState, useEffect } from "react";
import { 
  Sparkles, 
  Menu, 
  X, 
  ArrowUpRight, 
  Bot, 
  FileText,
  Code2,
  Terminal,
  Palette
} from "lucide-react";
import { soundEngine } from "../utils/audio";
import { useTheme } from "../context/ThemeContext";

interface NavbarProps {
  activeSection: string;
  onOpenAITwin: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onOpenAITwin,
  onOpenResume,
}) => {
  const { palette, uiMode } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "thinking", label: "Thinking" },
    { id: "ai", label: "AI & GenAI" },
    { id: "dsa", label: "DSA (C++)" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (id: string) => {
    soundEngine.playPop();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "py-2.5 bg-white/85 backdrop-blur-xl border-b border-[var(--theme-card-border)] shadow-sm"
            : "py-4 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo & Soft Badge */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("hero");
            }}
            className="group flex items-center gap-3 text-left focus:outline-none select-none"
            id="nav-brand-link"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-2xl bg-[var(--theme-primary-light)] border border-[var(--theme-card-border)] group-hover:border-[var(--theme-primary)] transition-all shadow-xs">
              <span className="font-display font-black text-sm tracking-wider text-[var(--theme-primary)] group-hover:scale-105 transition-transform">
                IG
              </span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[var(--theme-secondary)] animate-ping opacity-75" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[var(--theme-secondary)]" />
            </div>

            <div className="hidden sm:block">
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-sm tracking-tight text-[var(--theme-text)] group-hover:text-[var(--theme-primary)] transition-colors">
                  Ishita Gupta
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[var(--theme-pill-bg)] text-[10px] font-mono-code font-bold text-[var(--theme-pill-text)] border border-[var(--theme-card-border)]">
                  {palette.emoji} {palette.name.split(" ")[0]}
                </span>
              </div>
              <p className="text-[11px] font-mono-code text-[var(--theme-text-muted)]">
                AI + Full-Stack Engineer
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 p-1 rounded-2xl bg-white/80 border border-[var(--theme-card-border)] backdrop-blur-md shadow-2xs">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono-code transition-all cursor-pointer ${
                    isActive
                      ? "bg-[var(--theme-primary)] text-white font-bold shadow-xs"
                      : "text-[var(--theme-text-muted)] hover:text-[var(--theme-text)] hover:bg-[var(--theme-primary-light)]/60"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-2">
            
            {/* AI Twin Trigger */}
            <button
              id="nav-ai-twin-btn"
              onClick={() => {
                soundEngine.playPop();
                onOpenAITwin();
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[var(--theme-primary)] hover:bg-[var(--theme-primary-dark)] text-white text-xs font-mono-code font-bold transition-all shadow-xs cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-yellow-200 animate-pulse" />
              <span className="hidden sm:inline">Chat AI Twin</span>
            </button>

            {/* Resume Button */}
            <button
              id="nav-resume-btn"
              onClick={() => {
                soundEngine.playPop();
                onOpenResume();
              }}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-[var(--theme-primary-light)] border border-[var(--theme-card-border)] text-[var(--theme-text)] text-xs font-mono-code font-semibold transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-[var(--theme-primary)]" />
              <span>Resume</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              id="nav-mobile-toggle-btn"
              onClick={() => {
                soundEngine.playPop();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="lg:hidden p-2 rounded-xl bg-white border border-[var(--theme-card-border)] text-[var(--theme-text)] hover:bg-[var(--theme-primary-light)] cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 mx-4 p-4 rounded-3xl bg-white border border-[var(--theme-card-border)] backdrop-blur-2xl shadow-xl space-y-2 animate-fadeIn">
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`p-2.5 rounded-xl text-xs font-mono-code text-left transition-all ${
                    activeSection === link.id
                      ? "bg-[var(--theme-primary)] text-white font-bold"
                      : "bg-[var(--theme-canvas-alt)] text-[var(--theme-text)] hover:bg-[var(--theme-primary-light)]"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-2 flex gap-2 border-t border-[var(--theme-card-border)]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex-1 py-2.5 rounded-xl bg-[var(--theme-canvas-alt)] border border-[var(--theme-card-border)] text-[var(--theme-text)] font-mono-code text-xs font-bold text-center"
              >
                View Resume
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAITwin();
                }}
                className="flex-1 py-2.5 rounded-xl bg-[var(--theme-primary)] text-white font-mono-code text-xs font-bold text-center"
              >
                Chat AI Twin
              </button>
            </div>
          </div>
        )}

      </header>
    </>
  );
};
