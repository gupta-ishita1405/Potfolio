import React, { useState } from "react";
import { Copy, Check, Sparkles, Palette, Eye } from "lucide-react";
import confetti from "canvas-confetti";

export interface ColorSwatch {
  name: string;
  hex: string;
  rgb: string;
  cmyk: string;
  desc: string;
  textColor: string;
  borderColor: string;
}

export const SOFT_PALETTE: ColorSwatch[] = [
  {
    name: "Vanilla Cream",
    hex: "#FFF7E6",
    rgb: "255, 247, 230",
    cmyk: "0%, 3%, 10%, 0%",
    desc: "Warm gentle base canvas & paper backdrop",
    textColor: "#2D3A47",
    borderColor: "#EADCC3",
  },
  {
    name: "Blush Petal",
    hex: "#F7C8D3",
    rgb: "247, 200, 211",
    cmyk: "0%, 19%, 14%, 3%",
    desc: "Sweet floral pink for highlights & stickers",
    textColor: "#2D3A47",
    borderColor: "#E5ACB8",
  },
  {
    name: "Rosewood",
    hex: "#B46A72",
    rgb: "180, 106, 114",
    cmyk: "0%, 41%, 37%, 29%",
    desc: "Warm editorial accent for buttons & titles",
    textColor: "#FFFFFF",
    borderColor: "#964E56",
  },
  {
    name: "Sage Leaf",
    hex: "#A8B58A",
    rgb: "168, 181, 138",
    cmyk: "7%, 0%, 24%, 29%",
    desc: "Calming matcha green for status & tech tags",
    textColor: "#2D3A47",
    borderColor: "#8E9C70",
  },
  {
    name: "Misty Sky",
    hex: "#A9B7C6",
    rgb: "169, 183, 198",
    cmyk: "15%, 8%, 0%, 22%",
    desc: "Airy soft slate for borders & secondary badges",
    textColor: "#2D3A47",
    borderColor: "#8F9FA8",
  },
  {
    name: "Midnight Lagoon",
    hex: "#2D3A47",
    rgb: "45, 58, 71",
    cmyk: "37%, 18%, 0%, 72%",
    desc: "Deep rich contrast for crisp typography & code",
    textColor: "#FFF7E6",
    borderColor: "#1E2730",
  },
];

interface PaletteSwatchBarProps {
  onSelectColor?: (color: ColorSwatch) => void;
}

export const PaletteSwatchBar: React.FC<PaletteSwatchBarProps> = ({ onSelectColor }) => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<ColorSwatch>(SOFT_PALETTE[1]);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCopy = (color: ColorSwatch, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard?.writeText(color.hex);
    setCopiedHex(color.hex);
    if (onSelectColor) onSelectColor(color);

    // Mini confetti burst
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    confetti({
      particleCount: 20,
      spread: 45,
      origin: {
        x: (rect.left + rect.width / 2) / window.innerWidth,
        y: (rect.top + rect.height / 2) / window.innerHeight,
      },
      colors: ["#F7C8D3", "#B46A72", "#A8B58A", "#FFF7E6"],
    });

    setTimeout(() => {
      setCopiedHex(null);
    }, 2000);
  };

  return (
    <div className="relative my-8 rounded-3xl p-5 sm:p-7 bg-white/80 backdrop-blur-md border border-[#F7C8D3]/50 shadow-xl">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#F7C8D3] flex items-center justify-center text-[#B46A72] shadow-sm">
            <Palette className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-base text-[#2D3A47]">
                Aesthetic Soft Color Palette
              </span>
              <span className="px-2 py-0.5 rounded-full text-[11px] font-mono-code font-bold bg-[#A8B58A]/25 text-[#2D3A47] border border-[#A8B58A]/40">
                HEX ✦ RGB ✦ CMYK
              </span>
            </div>
            <p className="text-xs text-[#2D3A47]/70 font-sans">
              Inspired by soft peony petals, vanilla cream, and calming sage tones. Click any swatch to copy HEX!
            </p>
          </div>
        </div>

        <button
          id="toggle-palette-details-btn"
          onClick={() => setIsExpanded(!isExpanded)}
          className="self-start sm:self-auto px-3 py-1.5 rounded-xl bg-[#FFF7E6] hover:bg-[#F7C8D3]/40 border border-[#B46A72]/20 text-xs font-mono-code font-semibold text-[#B46A72] transition-colors flex items-center gap-1.5"
        >
          <Sparkles className="w-3.5 h-3.5" />
          {isExpanded ? "Collapse Details" : "View Color Specs"}
        </button>
      </div>

      {/* 6 Color Swatches Row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {SOFT_PALETTE.map((c) => {
          const isCopied = copiedHex === c.hex;
          const isCurrent = selectedColor.hex === c.hex;

          return (
            <div
              key={c.name}
              id={`swatch-${c.name.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={(e) => {
                setSelectedColor(c);
                handleCopy(c, e);
              }}
              style={{ backgroundColor: c.hex }}
              className={`group relative cursor-pointer rounded-2xl p-3.5 border transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-lg flex flex-col justify-between min-h-[110px] ${
                isCurrent ? "ring-2 ring-[#B46A72] ring-offset-2 ring-offset-[#FFF7E6]" : ""
              }`}
            >
              {/* Name & copy icon */}
              <div className="flex items-start justify-between">
                <span
                  style={{ color: c.textColor }}
                  className="font-display font-bold text-xs leading-tight tracking-tight"
                >
                  {c.name}
                </span>
                <span
                  style={{ color: c.textColor }}
                  className="opacity-70 group-hover:opacity-100 transition-opacity p-1 rounded-md bg-black/10 backdrop-blur-xs"
                >
                  {isCopied ? <Check className="w-3 h-3 text-emerald-600 font-bold" /> : <Copy className="w-3 h-3" />}
                </span>
              </div>

              {/* Hex and RGB values */}
              <div className="mt-4 pt-2 border-t border-black/10">
                <div
                  style={{ color: c.textColor }}
                  className="font-mono-code font-bold text-xs tracking-wider"
                >
                  {isCopied ? "COPIED! ✨" : c.hex}
                </div>
                <div
                  style={{ color: c.textColor }}
                  className="font-mono-code text-[10px] opacity-75 truncate"
                >
                  {c.rgb}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Expanded Details Panel */}
      {isExpanded && (
        <div className="mt-5 p-4 rounded-2xl bg-[#FFF7E6]/90 border border-[#B46A72]/20 animate-fadeIn">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-xl shadow-md border border-black/10 flex-shrink-0"
                style={{ backgroundColor: selectedColor.hex }}
              />
              <div>
                <h4 className="font-display font-bold text-sm text-[#2D3A47]">
                  {selectedColor.name} — {selectedColor.desc}
                </h4>
                <p className="font-mono-code text-xs text-[#B46A72]">
                  HEX: <span className="font-bold">{selectedColor.hex}</span> ✦ RGB: {selectedColor.rgb} ✦ CMYK: {selectedColor.cmyk}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-handwriting text-lg text-[#B46A72]">
                aesthetic tones for modern web craft 🌸
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
