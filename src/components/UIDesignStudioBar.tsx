import React, { useState } from "react";
import { 
  Palette, 
  Sparkles, 
  Layout, 
  Volume2, 
  VolumeX, 
  Layers, 
  Check, 
  Sliders, 
  ChevronDown, 
  ChevronUp, 
  RotateCcw,
  Heart,
  Eye,
  Feather,
  Wand2
} from "lucide-react";
import { useTheme, SOFT_PALETTES, UI_DESIGN_MODES } from "../context/ThemeContext";
import { SoftThemeId, UIDesignMode, AmbientEffectType } from "../types";
import { soundEngine } from "../utils/audio";
import { triggerPastelConfetti } from "../utils/animations";

export const UIDesignStudioBar: React.FC = () => {
  const { theme, palette, uiMode, ambientEffect, setTheme, setUIMode, setAmbientEffect } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const ambientEffects: { id: AmbientEffectType; name: string; icon: string }[] = [
    { id: "petals", name: "Sakura Petals", icon: "🌸" },
    { id: "bubbles", name: "Dreamy Bubbles", icon: "🫧" },
    { id: "sparkles", name: "Fairy Sparkles", icon: "✨" },
    { id: "matcha", name: "Matcha Leaves", icon: "🍃" },
    { id: "stars", name: "Pastel Stars", icon: "⭐" },
    { id: "none", name: "Clean Minimal", icon: "⚪" },
  ];

  const handleCopyHex = (hex: string, name: string) => {
    navigator.clipboard.writeText(hex);
    soundEngine.playChime();
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const handleThemeChange = (newTheme: SoftThemeId) => {
    soundEngine.playPop();
    setTheme(newTheme);
    triggerPastelConfetti();
  };

  const handleUIModeChange = (newMode: UIDesignMode) => {
    soundEngine.playChime();
    setUIMode(newMode);
  };

  const handleAmbientChange = (effect: AmbientEffectType) => {
    soundEngine.playKeyClick();
    setAmbientEffect(effect);
  };

  return (
    <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-2">
      {/* Floating Pill Bar */}
      <div className="rounded-2xl p-2 sm:p-2.5 bg-white/80 backdrop-blur-md border border-[var(--theme-card-border)] shadow-md transition-all duration-300">
        <div className="flex flex-wrap items-center justify-between gap-3">
          
          {/* Left: Current Style & Soft Theme Tag */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[var(--theme-primary-light)] text-[var(--theme-primary-dark)] text-xs font-mono-code font-bold">
              <span className="text-sm">{palette.emoji}</span>
              <span className="hidden sm:inline">PALETTE:</span>
              <span className="uppercase">{palette.name}</span>
            </div>

            <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[var(--theme-card-border)] text-xs font-mono-code text-[var(--theme-text)]">
              <Layout className="w-3.5 h-3.5 text-[var(--theme-primary)]" />
              <span>STYLE:</span>
              <span className="font-bold">{UI_DESIGN_MODES.find(m => m.id === uiMode)?.name}</span>
            </div>
          </div>

          {/* Center: Quick Palette Swatches Bar */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-0.5">
            {Object.values(SOFT_PALETTES).map((p) => {
              const isSelected = theme === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => handleThemeChange(p.id)}
                  title={`${p.name} — ${p.subtitle}`}
                  className={`group relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-mono-code transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[var(--theme-primary)] text-white font-bold shadow-sm scale-105"
                      : "bg-white/60 hover:bg-white text-[var(--theme-text)] border border-[var(--theme-card-border)] hover:scale-102"
                  }`}
                >
                  <span className="text-xs">{p.emoji}</span>
                  <span className="hidden lg:inline">{p.name.split(" ")[0]}</span>
                  <div className="flex items-center -space-x-1 ml-0.5">
                    {p.swatches.slice(1, 4).map((c, i) => (
                      <span
                        key={i}
                        style={{ backgroundColor: c }}
                        className="w-2.5 h-2.5 rounded-full border border-black/10 shadow-2xs"
                      />
                    ))}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Expand Studio Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                soundEngine.playPop();
                setIsOpen(!isOpen);
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[var(--theme-primary)] hover:bg-[var(--theme-primary-dark)] text-white text-xs font-mono-code font-bold transition-all shadow-xs cursor-pointer"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Aesthetic Studio</span>
              {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>

        </div>

        {/* Expanded UI Design Studio Controls */}
        {isOpen && (
          <div className="mt-3 pt-3 border-t border-[var(--theme-card-border)] grid grid-cols-1 md:grid-cols-12 gap-4 animate-fadeIn">
            
            {/* Column 1: UI Design Modes / Layout Archetypes */}
            <div className="md:col-span-6 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono-code font-bold text-[var(--theme-primary)] flex items-center gap-1.5">
                  <Layout className="w-3.5 h-3.5" />
                  <span>UI DESIGN LAYOUT ARCHETYPE</span>
                </span>
                <span className="text-[10px] font-mono-code text-[var(--theme-text-muted)]">
                  Select visual layout mood
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {UI_DESIGN_MODES.map((mode) => {
                  const isActive = uiMode === mode.id;
                  return (
                    <button
                      key={mode.id}
                      onClick={() => handleUIModeChange(mode.id)}
                      className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer ${
                        isActive
                          ? "bg-[var(--theme-primary-light)] border-[var(--theme-primary)] shadow-xs"
                          : "bg-white/80 border-[var(--theme-card-border)] hover:border-[var(--theme-primary)]/50"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-base">{mode.emoji}</span>
                        <div>
                          <p className="text-xs font-display font-bold text-[var(--theme-text)]">
                            {mode.name}
                          </p>
                          <p className="text-[10px] font-mono-code text-[var(--theme-text-muted)] line-clamp-1">
                            {mode.tagline}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Column 2: Ambient Atmosphere Particles */}
            <div className="md:col-span-6 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono-code font-bold text-[var(--theme-primary)] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>AMBIENT ATMOSPHERE & PARTICLES</span>
                </span>
                <span className="text-[10px] font-mono-code text-[var(--theme-text-muted)]">
                  Canvas physics layer
                </span>
              </div>

              <div className="grid grid-cols-3 gap-1.5">
                {ambientEffects.map((eff) => {
                  const isCur = ambientEffect === eff.id;
                  return (
                    <button
                      key={eff.id}
                      onClick={() => handleAmbientChange(eff.id)}
                      className={`p-2 rounded-xl text-xs font-mono-code text-center border transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                        isCur
                          ? "bg-[var(--theme-primary-light)] border-[var(--theme-primary)] text-[var(--theme-primary-dark)] font-bold shadow-2xs"
                          : "bg-white/80 border-[var(--theme-card-border)] hover:bg-white text-[var(--theme-text)]"
                      }`}
                    >
                      <span>{eff.icon}</span>
                      <span className="truncate">{eff.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Swatch hex quick copies */}
              <div className="pt-2 flex items-center gap-2 overflow-x-auto text-[11px] font-mono-code">
                <span className="text-[var(--theme-text-muted)] text-[10px]">Active Tones:</span>
                {palette.swatches.map((hex, i) => (
                  <button
                    key={i}
                    onClick={() => handleCopyHex(hex, `Color ${i}`)}
                    className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-white border border-[var(--theme-card-border)] hover:border-[var(--theme-primary)] transition-all cursor-pointer"
                  >
                    <span style={{ backgroundColor: hex }} className="w-2.5 h-2.5 rounded-full border border-black/10" />
                    <span>{copiedHex === hex ? "Copied!" : hex}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};
