import React, { useState } from "react";
import { Mail, Github, Linkedin, Send, Sparkles, Check, Heart, ArrowUpRight } from "lucide-react";
import confetti from "canvas-confetti";
import { PORTFOLIO_CONFIG } from "../config/portfolioData";
import { useTheme } from "../context/ThemeContext";
import { soundEngine } from "../utils/audio";

export const ContactSection: React.FC = () => {
  const { palette } = useTheme();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    soundEngine.playChime();
    setIsSubmitted(true);
    confetti({
      particleCount: 50,
      spread: 70,
      colors: [palette.colors.primary, palette.colors.secondary, palette.colors.primaryLight],
    });

    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-[var(--theme-canvas-alt)] border-t border-[var(--theme-card-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--theme-primary-light)] border border-[var(--theme-card-border)] text-[var(--theme-primary-dark)] text-xs font-mono-code font-bold">
            <span>08 // CONNECT & COLLABORATE</span>
            <span>✦</span>
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[var(--theme-text)] tracking-tight leading-tight">
            Let’s Build Something Remarkable
          </h2>
          <p className="text-[var(--theme-text)]/75 text-sm sm:text-base font-sans">
            Currently open to full-time roles, internships, and high-impact AI/full-stack engineering opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left: Contact Info & Quick Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-white border border-[var(--theme-card-border)] p-6 sm:p-8 shadow-md space-y-5">
              <h3 className="font-display font-bold text-xl text-[var(--theme-text)]">
                Contact Coordinates
              </h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${PORTFOLIO_CONFIG.personal.email}`}
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-[var(--theme-canvas-alt)] hover:bg-[var(--theme-primary-light)]/50 border border-[var(--theme-card-border)] text-[var(--theme-text)] transition-all group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-[var(--theme-primary-light)] flex items-center justify-center text-[var(--theme-primary)]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-mono-code text-[var(--theme-primary)] font-bold uppercase">Direct Email</p>
                    <p className="font-display font-bold text-xs sm:text-sm truncate">{PORTFOLIO_CONFIG.personal.email}</p>
                  </div>
                </a>

                <a
                  href={PORTFOLIO_CONFIG.personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-[var(--theme-canvas-alt)] hover:bg-[var(--theme-primary-light)]/50 border border-[var(--theme-card-border)] text-[var(--theme-text)] transition-all group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-[var(--theme-primary)] flex items-center justify-center text-white">
                    <Github className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-mono-code text-[var(--theme-primary)] font-bold uppercase">GitHub</p>
                    <p className="font-display font-bold text-xs sm:text-sm truncate">github.com/ishitagupta</p>
                  </div>
                </a>

                <a
                  href={PORTFOLIO_CONFIG.personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-[var(--theme-canvas-alt)] hover:bg-[var(--theme-primary-light)]/50 border border-[var(--theme-card-border)] text-[var(--theme-text)] transition-all group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-[var(--theme-secondary)] flex items-center justify-center text-[var(--theme-text)]">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-mono-code text-[var(--theme-primary)] font-bold uppercase">LinkedIn</p>
                    <p className="font-display font-bold text-xs sm:text-sm truncate">linkedin.com/in/ishitagupta</p>
                  </div>
                </a>
              </div>

              {/* Location badge */}
              <div className="pt-2 text-xs font-mono-code text-[var(--theme-text-muted)] flex items-center gap-1.5">
                <span>📍</span>
                <span>{PORTFOLIO_CONFIG.personal.location}</span>
                <span>✦</span>
                <span className="text-[var(--theme-primary)] font-bold">Fast response</span>
              </div>
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-[var(--theme-card-border)] p-6 sm:p-8 shadow-md">
              <h3 className="font-display font-bold text-xl text-[var(--theme-text)] mb-5">
                Send a Direct Message
              </h3>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-[var(--theme-primary-light)] border border-[var(--theme-primary)] text-center space-y-3 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-[var(--theme-primary)] text-white flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-[var(--theme-text)]">
                    Message Sent Successfully! 🌸
                  </h4>
                  <p className="text-xs text-[var(--theme-text)]/80 font-sans">
                    Thank you for reaching out! Ishita will get back to you promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono-code font-bold text-[var(--theme-text)] mb-1.5">
                      Your Name:
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex River"
                      className="w-full px-4 py-3 rounded-2xl bg-[var(--theme-canvas-alt)] border border-[var(--theme-card-border)] text-xs font-sans text-[var(--theme-text)] focus:outline-none focus:ring-2 focus:ring-[var(--theme-primary)]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono-code font-bold text-[var(--theme-text)] mb-1.5">
                      Your Email:
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-4 py-3 rounded-2xl bg-[var(--theme-canvas-alt)] border border-[var(--theme-card-border)] text-xs font-sans text-[var(--theme-text)] focus:outline-none focus:ring-2 focus:ring-[var(--theme-primary)]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono-code font-bold text-[var(--theme-text)] mb-1.5">
                      Project or Message:
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your product, opportunity, or say hi!"
                      className="w-full px-4 py-3 rounded-2xl bg-[var(--theme-canvas-alt)] border border-[var(--theme-card-border)] text-xs font-sans text-[var(--theme-text)] focus:outline-none focus:ring-2 focus:ring-[var(--theme-primary)]"
                    />
                  </div>

                  <button
                    type="submit"
                    id="contact-submit-btn"
                    className="w-full py-3.5 rounded-2xl bg-[var(--theme-primary)] hover:bg-[var(--theme-primary-dark)] text-white font-mono-code font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs hover:scale-101"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
