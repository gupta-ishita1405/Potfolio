import React, { useState, useEffect, useRef } from "react";
import { 
  Camera, 
  Upload, 
  Sparkles, 
  Heart, 
  RotateCw, 
  Palette, 
  Check, 
  Image as ImageIcon,
  Smile,
  Maximize2
} from "lucide-react";
import confetti from "canvas-confetti";
import { useTheme } from "../context/ThemeContext";

export const PRESET_AVATARS = [
  {
    id: "soft-editorial",
    name: "Soft Peony Portrait",
    url: "https://i.pinimg.com/736x/99/b0/54/99b0549a234ee03e1a191b93101c9377.jpg",
    vibe: "Aesthetic Editorial",
    quote: "coffee, code & soft palettes 🌸",
  },
  {
    id: "matcha-vibes",
    name: "Matcha Tech Girl",
    url: "https://i.pinimg.com/736x/17/e9/01/17e9011187b96c2859e9180c234b0cfa.jpg",
    vibe: "Matcha & Systems",
    quote: "building intelligent products 🍵",
  },
  {
    id: "creative-coder",
    name: "Creative Developer",
    url: "https://i.pinimg.com/736x/17/e9/01/17e9011187b96c2859e9180c234b0cfa.jpg",
    vibe: "Full-Stack Engineer",
    quote: "turning ideas into reality ✨",
  },
  {
    id: "minimal-aesthetic",
    name: "Warm Minimalist",
    url: "https://i.pinimg.com/736x/42/80/0c/42800cafe37d5187517951af06440867.jpg",
    vibe: "Vanilla & Rosewood",
    quote: "curating clean software 🎀",
  },
];

interface AestheticPhotoPlaceProps {
  currentPhotoUrl?: string;
  onPhotoChange?: (url: string) => void;
  className?: string;
}

export const AestheticPhotoPlace: React.FC<AestheticPhotoPlaceProps> = ({
  currentPhotoUrl,
  onPhotoChange,
  className = "",
}) => {
  const { palette } = useTheme();
  const [photoUrl, setPhotoUrl] = useState<string>(() => {
    return localStorage.getItem("ishita_portfolio_photo") || currentPhotoUrl || PRESET_AVATARS[0].url;
  });
  const [caption, setCaption] = useState<string>(() => {
    return localStorage.getItem("ishita_portfolio_caption") || "ishita.dev ✦ cse & ai engineer 🌸";
  });
  const [frameColor, setFrameColor] = useState<string>("#FFFFFF");
  const [isHovered, setIsHovered] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Sync state
  useEffect(() => {
    if (currentPhotoUrl && currentPhotoUrl !== photoUrl) {
      setPhotoUrl(currentPhotoUrl);
    }
  }, [currentPhotoUrl]);

  const updatePhoto = (newUrl: string) => {
    setPhotoUrl(newUrl);
    localStorage.setItem("ishita_portfolio_photo", newUrl);
    if (onPhotoChange) onPhotoChange(newUrl);

    confetti({
      particleCount: 25,
      spread: 40,
      colors: palette.swatches,
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          updatePhoto(event.target.result as string);
          setShowPicker(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={`relative group select-none ${className}`}>
      {/* Polaroid Frame */}
      <div
        id="ishita-photo-polaroid"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          backgroundColor: frameColor,
          borderColor: palette.colors.cardBorder,
          transform: isHovered ? "rotate(-1deg) scale(1.02)" : "rotate(1.5deg)",
          transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
        className="relative rounded-2xl p-4 pb-6 shadow-xl border cursor-pointer overflow-visible"
      >
        {/* Washi Tape Header Accent */}
        <div
          className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-28 h-6 rounded-xs shadow-xs z-20 backdrop-blur-xs flex items-center justify-center border-x-2 border-dashed"
          style={{ 
            backgroundColor: palette.colors.softPillBg, 
            borderColor: palette.colors.primary,
            transform: "rotate(-2deg)" 
          }}
        >
          <span className="text-[10px] font-mono-code font-bold text-[var(--theme-text)] tracking-wider opacity-90">
            ★ ISHITA GUPTA ★
          </span>
        </div>

        {/* Photo Container with Soft Grain & Holographic Sheen */}
        <div className="relative aspect-[4/4.5] sm:aspect-[4/4.6] rounded-xl overflow-hidden bg-[var(--theme-canvas-alt)] border border-black/5 shadow-inner">
          <img
            src={photoUrl}
            alt="Ishita Gupta Portfolio Portrait"
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            onError={() => {
              setPhotoUrl(PRESET_AVATARS[0].url);
            }}
          />

          {/* Soft Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />

          {/* Floating Aesthetic Mood Tag */}
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/85 backdrop-blur-md border border-[var(--theme-card-border)] text-[10px] font-mono-code font-bold text-[var(--theme-primary)] shadow-xs flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[var(--theme-primary)]" />
            <span>PORTRAIT</span>
          </div>

          {/* Bottom quick overlay info */}
          <div className="absolute bottom-2.5 left-2.5 right-2.5 px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-md border border-white/60 shadow-xs flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[var(--theme-secondary)] animate-ping" />
              <span className="w-2 h-2 rounded-full bg-[var(--theme-secondary)]" />
              <span className="text-[11px] font-mono-code font-bold text-[var(--theme-text)]">
                Bhopal, India // Available
              </span>
            </div>
            <span className="text-[10px] font-handwriting text-base text-[var(--theme-primary)] font-bold">
              v2026
            </span>
          </div>
        </div>

        {/* Polaroid Bottom Notes & Custom Caption */}
        <div className="mt-3 text-center px-1">
          <p className="font-handwriting text-xl sm:text-2xl text-[var(--theme-primary)] font-bold tracking-wide">
            {caption}
          </p>
          <p className="text-[10px] font-mono-code text-[var(--theme-text-muted)] mt-0.5">
            Full-Stack Developer & AI Systems Builder
          </p>
        </div>

        {/* Floating Customizer Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowPicker(!showPicker);
          }}
          className="absolute -bottom-3 right-3 px-2.5 py-1 rounded-full bg-[var(--theme-primary)] hover:bg-[var(--theme-primary-dark)] text-white text-[10px] font-mono-code font-bold shadow-md transition-all flex items-center gap-1 cursor-pointer z-20"
        >
          <Camera className="w-3 h-3" />
          <span>Change Photo</span>
        </button>
      </div>

      {/* Popover Photo Selector */}
      {showPicker && (
        <div className="absolute top-full mt-4 left-0 right-0 z-30 p-4 rounded-2xl bg-white border border-[var(--theme-card-border)] shadow-2xl animate-fadeIn">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono-code font-bold text-[var(--theme-primary)] flex items-center gap-1.5">
              <Camera className="w-3.5 h-3.5" />
              <span>CUSTOMIZE PHOTO PORTRAIT</span>
            </span>
            <button
              onClick={() => setShowPicker(false)}
              className="text-xs text-[var(--theme-text-muted)] hover:text-[var(--theme-text)] cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Presets Grid */}
          <div className="grid grid-cols-2 gap-2 mb-3">
            {PRESET_AVATARS.map((preset) => (
              <button
                key={preset.id}
                onClick={() => {
                  updatePhoto(preset.url);
                  setShowPicker(false);
                }}
                className={`p-2 rounded-xl border text-left flex items-center gap-2 transition-all cursor-pointer ${
                  photoUrl === preset.url
                    ? "bg-[var(--theme-primary-light)] border-[var(--theme-primary)] font-bold"
                    : "bg-white border-[var(--theme-card-border)] hover:bg-[var(--theme-canvas-alt)]"
                }`}
              >
                <img
                  src={preset.url}
                  alt={preset.name}
                  className="w-8 h-8 rounded-lg object-cover"
                />
                <div className="overflow-hidden">
                  <p className="text-[11px] font-display font-bold text-[var(--theme-text)] truncate">
                    {preset.name}
                  </p>
                  <p className="text-[9px] font-mono-code text-[var(--theme-text-muted)] truncate">
                    {preset.vibe}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Upload Custom Photo */}
          <div className="pt-2 border-t border-[var(--theme-card-border)] flex items-center justify-between gap-2">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept="image/*"
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex-1 py-1.5 px-3 rounded-xl bg-[var(--theme-canvas-alt)] hover:bg-[var(--theme-primary-light)] border border-[var(--theme-card-border)] text-xs font-mono-code text-[var(--theme-text)] font-semibold flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Upload className="w-3.5 h-3.5 text-[var(--theme-primary)]" />
              <span>Upload Custom Photo</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
