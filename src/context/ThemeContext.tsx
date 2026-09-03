import React, { createContext, useContext, useState, useEffect } from "react";
import { SoftThemeId, UIDesignMode, AmbientEffectType, SoftColorPalette } from "../types";

export const SOFT_PALETTES: Record<SoftThemeId, SoftColorPalette> = {
  blush: {
    id: "blush",
    name: "Blush Rose & Cream",
    subtitle: "Delicate petals, warm vanilla & rosewood accents",
    emoji: "🌸",
    colors: {
      canvas: "#FFFDF9",
      canvasAlt: "#FFF4F6",
      cardBg: "#FFFFFF",
      cardBorder: "#F7C8D3",
      primary: "#B46A72",
      primaryLight: "#FDE8ED",
      primaryDark: "#8E4F57",
      secondary: "#A8B58A",
      accent: "#A9B7C6",
      highlight: "#FFF7E6",
      text: "#2D3A47",
      textMuted: "#607080",
      softPillBg: "#F7C8D3",
      softPillText: "#2D3A47",
      glow: "rgba(247, 200, 211, 0.45)",
    },
    swatches: ["#FFFDF9", "#F7C8D3", "#B46A72", "#A8B58A", "#A9B7C6", "#FFF7E6"],
  },
  matcha: {
    id: "matcha",
    name: "Matcha Latte & Oat",
    subtitle: "Pistachio tea, creamy oat milk & forest sage",
    emoji: "🍵",
    colors: {
      canvas: "#FBFDF8",
      canvasAlt: "#F2F7EC",
      cardBg: "#FFFFFF",
      cardBorder: "#C8D9B6",
      primary: "#5A784B",
      primaryLight: "#E8F2DD",
      primaryDark: "#3E5732",
      secondary: "#D4A373",
      accent: "#B8C9D9",
      highlight: "#FAF3E0",
      text: "#243323",
      textMuted: "#596E56",
      softPillBg: "#D6E5C5",
      softPillText: "#243323",
      glow: "rgba(200, 217, 182, 0.45)",
    },
    swatches: ["#FBFDF8", "#C8D9B6", "#5A784B", "#FAF3E0", "#D4A373", "#B8C9D9"],
  },
  lavender: {
    id: "lavender",
    name: "Lavender Cloud & Lilac",
    subtitle: "Dreamy pastel violet, whipped buttercream & misty sky",
    emoji: "💜",
    colors: {
      canvas: "#FAF8FF",
      canvasAlt: "#F2ECFE",
      cardBg: "#FFFFFF",
      cardBorder: "#DDD1F8",
      primary: "#7C5BA6",
      primaryLight: "#EFE8FD",
      primaryDark: "#583C7E",
      secondary: "#98C1D9",
      accent: "#E0B1CB",
      highlight: "#FFFDF7",
      text: "#2B243B",
      textMuted: "#63587A",
      softPillBg: "#E3D5FF",
      softPillText: "#2B243B",
      glow: "rgba(221, 209, 248, 0.5)",
    },
    swatches: ["#FAF8FF", "#DDD1F8", "#7C5BA6", "#E3D5FF", "#98C1D9", "#E0B1CB"],
  },
  peach: {
    id: "peach",
    name: "Peach Fizz & Apricot",
    subtitle: "Sun-kissed apricot, warm buttercream & coral blush",
    emoji: "🍑",
    colors: {
      canvas: "#FFFDF8",
      canvasAlt: "#FFF4EB",
      cardBg: "#FFFFFF",
      cardBorder: "#FED1B8",
      primary: "#D96B43",
      primaryLight: "#FFE6D8",
      primaryDark: "#A84C28",
      secondary: "#A3B899",
      accent: "#ADC5CF",
      highlight: "#FFF8E7",
      text: "#38251E",
      textMuted: "#73574D",
      softPillBg: "#FED1B8",
      softPillText: "#38251E",
      glow: "rgba(254, 209, 184, 0.5)",
    },
    swatches: ["#FFFDF8", "#FED1B8", "#D96B43", "#A3B899", "#ADC5CF", "#FFF8E7"],
  },
  seafoam: {
    id: "seafoam",
    name: "Seafoam Breeze & Frost",
    subtitle: "Soft powdered aqua, sea salt & frosted cloud",
    emoji: "🩵",
    colors: {
      canvas: "#F7FCFC",
      canvasAlt: "#EBF7F7",
      cardBg: "#FFFFFF",
      cardBorder: "#BDE6E6",
      primary: "#3D8287",
      primaryLight: "#E0F5F5",
      primaryDark: "#275C61",
      secondary: "#E8A598",
      accent: "#B8C9E0",
      highlight: "#F9FBF5",
      text: "#1D3234",
      textMuted: "#506A6C",
      softPillBg: "#C4EEEE",
      softPillText: "#1D3234",
      glow: "rgba(189, 230, 230, 0.5)",
    },
    swatches: ["#F7FCFC", "#BDE6E6", "#3D8287", "#E8A598", "#B8C9E0", "#E0F5F5"],
  },
  cashmere: {
    id: "cashmere",
    name: "Cashmere Chai & Vanilla",
    subtitle: "Warm chai spice, cozy cashmere linen & honey glaze",
    emoji: "🥐",
    colors: {
      canvas: "#FAF7F2",
      canvasAlt: "#F2EBE1",
      cardBg: "#FFFFFF",
      cardBorder: "#E3D5C5",
      primary: "#8C5E3C",
      primaryLight: "#F5ECE1",
      primaryDark: "#634026",
      secondary: "#9EA685",
      accent: "#CCA58A",
      highlight: "#FFFBF2",
      text: "#33261C",
      textMuted: "#6B5849",
      softPillBg: "#E8D9C8",
      softPillText: "#33261C",
      glow: "rgba(227, 213, 197, 0.5)",
    },
    swatches: ["#FAF7F2", "#E3D5C5", "#8C5E3C", "#9EA685", "#CCA58A", "#FAF3E6"],
  },
};

export const UI_DESIGN_MODES: { id: UIDesignMode; name: string; tagline: string; emoji: string }[] = [
  {
    id: "bento",
    name: "Bento Studio",
    tagline: "Modern rounded bento cards, sleek micro-badges & clean visual density",
    emoji: "🎀",
  },
  {
    id: "editorial",
    name: "Editorial Journal",
    tagline: "Serif typography elegance, bookish margins, delicate rules & soft paper aesthetic",
    emoji: "📖",
  },
  {
    id: "scrapbook",
    name: "Gen-Z Scrapbook",
    tagline: "Cute washi tape, polaroids, draggable aesthetic stickers & doodle notes",
    emoji: "✨",
  },
  {
    id: "frosted",
    name: "Frosted Glass Float",
    tagline: "Glassmorphic backdrop-blur cards, pastel luminous glow & floating pills",
    emoji: "🫧",
  },
];

interface ThemeContextValue {
  theme: SoftThemeId;
  palette: SoftColorPalette;
  uiMode: UIDesignMode;
  ambientEffect: AmbientEffectType;
  setTheme: (theme: SoftThemeId) => void;
  setUIMode: (mode: UIDesignMode) => void;
  setAmbientEffect: (effect: AmbientEffectType) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<SoftThemeId>(() => {
    const saved = localStorage.getItem("ishita_soft_theme");
    return (saved as SoftThemeId) || "blush";
  });

  const [uiMode, setUIModeState] = useState<UIDesignMode>(() => {
    const saved = localStorage.getItem("ishita_ui_mode");
    return (saved as UIDesignMode) || "bento";
  });

  const [ambientEffect, setAmbientEffectState] = useState<AmbientEffectType>(() => {
    const saved = localStorage.getItem("ishita_ambient_effect");
    return (saved as AmbientEffectType) || "petals";
  });

  const palette = SOFT_PALETTES[theme] || SOFT_PALETTES.blush;

  // Apply CSS custom variables to document root
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--theme-canvas", palette.colors.canvas);
    root.style.setProperty("--theme-canvas-alt", palette.colors.canvasAlt);
    root.style.setProperty("--theme-card-bg", palette.colors.cardBg);
    root.style.setProperty("--theme-card-border", palette.colors.cardBorder);
    root.style.setProperty("--theme-primary", palette.colors.primary);
    root.style.setProperty("--theme-primary-light", palette.colors.primaryLight);
    root.style.setProperty("--theme-primary-dark", palette.colors.primaryDark);
    root.style.setProperty("--theme-secondary", palette.colors.secondary);
    root.style.setProperty("--theme-accent", palette.colors.accent);
    root.style.setProperty("--theme-highlight", palette.colors.highlight);
    root.style.setProperty("--theme-text", palette.colors.text);
    root.style.setProperty("--theme-text-muted", palette.colors.textMuted);
    root.style.setProperty("--theme-pill-bg", palette.colors.softPillBg);
    root.style.setProperty("--theme-pill-text", palette.colors.softPillText);
    root.style.setProperty("--theme-glow", palette.colors.glow);

    // Also update body background
    document.body.style.backgroundColor = palette.colors.canvas;
    document.body.style.color = palette.colors.text;
  }, [palette]);

  const setTheme = (newTheme: SoftThemeId) => {
    setThemeState(newTheme);
    localStorage.setItem("ishita_soft_theme", newTheme);
  };

  const setUIMode = (newMode: UIDesignMode) => {
    setUIModeState(newMode);
    localStorage.setItem("ishita_ui_mode", newMode);
  };

  const setAmbientEffect = (newEffect: AmbientEffectType) => {
    setAmbientEffectState(newEffect);
    localStorage.setItem("ishita_ambient_effect", newEffect);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        palette,
        uiMode,
        ambientEffect,
        setTheme,
        setUIMode,
        setAmbientEffect,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
