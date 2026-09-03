import React, { useState } from "react";
import { Sparkles, Plus, RotateCcw, X, Trash2 } from "lucide-react";
import confetti from "canvas-confetti";

interface Sticker {
  id: string;
  emoji: string;
  label: string;
  bg: string;
  textColor: string;
  borderColor: string;
  x: number;
  y: number;
  rotation: number;
}

const INITIAL_STICKERS: Sticker[] = [
  {
    id: "st-1",
    emoji: "🌸",
    label: "soft aesthetic",
    bg: "#F7C8D3",
    textColor: "#2D3A47",
    borderColor: "#E5ACB8",
    x: 24,
    y: 160,
    rotation: -4,
  },
  {
    id: "st-2",
    emoji: "🍵",
    label: "matcha powered",
    bg: "#A8B58A",
    textColor: "#2D3A47",
    borderColor: "#8E9C70",
    x: 280,
    y: 220,
    rotation: 6,
  },
  {
    id: "st-3",
    emoji: "✨",
    label: "ai integrated",
    bg: "#FFF7E6",
    textColor: "#B46A72",
    borderColor: "#B46A72",
    x: 80,
    y: 420,
    rotation: -2,
  },
  {
    id: "st-4",
    emoji: "💻",
    label: "full-stack baddie",
    bg: "#2D3A47",
    textColor: "#FFF7E6",
    borderColor: "#A9B7C6",
    x: 200,
    y: 500,
    rotation: 5,
  },
];

const PRESET_STICKER_OPTIONS = [
  { emoji: "🎀", label: "vibe checked", bg: "#F7C8D3", textColor: "#2D3A47", borderColor: "#E5ACB8" },
  { emoji: "🎧", label: "lofi coding", bg: "#A9B7C6", textColor: "#2D3A47", borderColor: "#8F9FA8" },
  { emoji: "🚀", label: "shipping fast", bg: "#B46A72", textColor: "#FFFFFF", borderColor: "#964E56" },
  { emoji: "💫", label: "clean code", bg: "#FFF7E6", textColor: "#2D3A47", borderColor: "#A8B58A" },
  { emoji: "🌿", label: "sage energy", bg: "#A8B58A", textColor: "#2D3A47", borderColor: "#8E9C70" },
  { emoji: "☕", label: "caffeine & c++", bg: "#2D3A47", textColor: "#F7C8D3", borderColor: "#F7C8D3" },
];

export const GenZDraggableStickers: React.FC = () => {
  const [stickers, setStickers] = useState<Sticker[]>(INITIAL_STICKERS);
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [offset, setOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [showStickerMenu, setShowStickerMenu] = useState(false);

  const handleMouseDown = (id: string, e: React.MouseEvent) => {
    const sticker = stickers.find((s) => s.id === id);
    if (!sticker) return;
    setDraggingId(id);
    setOffset({
      x: e.clientX - sticker.x,
      y: e.clientY - sticker.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!draggingId) return;
    setStickers((prev) =>
      prev.map((s) => {
        if (s.id === draggingId) {
          return {
            ...s,
            x: Math.max(10, Math.min(window.innerWidth - 180, e.clientX - offset.x)),
            y: Math.max(70, Math.min(window.innerHeight - 80, e.clientY - offset.y)),
          };
        }
        return s;
      })
    );
  };

  const handleMouseUp = () => {
    setDraggingId(null);
  };

  const addSticker = (preset: typeof PRESET_STICKER_OPTIONS[0]) => {
    const newSticker: Sticker = {
      id: `st-${Date.now()}`,
      emoji: preset.emoji,
      label: preset.label,
      bg: preset.bg,
      textColor: preset.textColor,
      borderColor: preset.borderColor,
      x: Math.min(window.innerWidth - 200, Math.max(50, window.innerWidth / 2 - 80 + (Math.random() - 0.5) * 200)),
      y: Math.min(window.innerHeight - 200, Math.max(150, window.innerHeight / 2 - 50 + (Math.random() - 0.5) * 200)),
      rotation: (Math.random() - 0.5) * 16,
    };

    setStickers((prev) => [...prev, newSticker]);
    setShowStickerMenu(false);

    confetti({
      particleCount: 15,
      spread: 30,
      colors: ["#F7C8D3", "#B46A72", "#A8B58A"],
    });
  };

  const removeSticker = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setStickers((prev) => prev.filter((s) => s.id !== id));
  };

  const resetStickers = () => {
    setStickers(INITIAL_STICKERS);
  };

  const deleteAllStickers = () => {
    setStickers([]);
  };

  return (
    <>
      {/* Draggable stickers floating overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-30 overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {stickers.map((s) => (
          <div
            key={s.id}
            id={`draggable-${s.id}`}
            onMouseDown={(e) => handleMouseDown(s.id, e)}
            style={{
              transform: `translate3d(${s.x}px, ${s.y}px, 0px) rotate(${s.rotation}deg)`,
              backgroundColor: s.bg,
              color: s.textColor,
              borderColor: s.borderColor,
            }}
            className={`pointer-events-auto absolute cursor-grab active:cursor-grabbing select-none px-3.5 py-1.5 rounded-full border shadow-md hover:shadow-xl transition-shadow flex items-center gap-1.5 text-xs font-mono-code font-bold group backdrop-blur-xs ${
              draggingId === s.id ? "scale-110 shadow-2xl z-50 ring-2 ring-[#B46A72]" : ""
            }`}
          >
            <span className="text-base leading-none">{s.emoji}</span>
            <span>{s.label}</span>
            <button
              onClick={(e) => removeSticker(s.id, e)}
              className="opacity-0 group-hover:opacity-100 transition-opacity ml-1 p-0.5 rounded-full hover:bg-black/10 text-current"
              title="Remove sticker"
            >
              <X className="w-2.5 h-2.5" />
            </button>
          </div>
        ))}
      </div>

      {/* Floating Sticker Widget Toolbar (Bottom Left) */}
      <div className="fixed bottom-6 left-6 z-40 flex items-center gap-2">
        <div className="relative">
          <button
            id="open-sticker-menu-btn"
            onClick={() => setShowStickerMenu(!showStickerMenu)}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-2xl bg-white/90 backdrop-blur-md border border-[#F7C8D3] text-[#2D3A47] text-xs font-mono-code font-bold shadow-lg hover:bg-[#FFF7E6] transition-all hover:scale-105"
            title="Drop Gen-Z Stickers"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#B46A72]" />
            <span>Sticker Box</span>
            <span className="w-5 h-5 rounded-full bg-[#F7C8D3] text-[#2D3A47] text-[10px] flex items-center justify-center font-bold">
              {stickers.length}
            </span>
          </button>

          {/* Sticker picker popover */}
          {showStickerMenu && (
            <div className="absolute bottom-12 left-0 w-64 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#F7C8D3] shadow-2xl space-y-2 animate-fadeIn z-50">
              <div className="flex items-center justify-between pb-2 border-b border-[#F7C8D3]/40">
                <span className="font-display font-bold text-xs text-[#2D3A47]">
                  Tap to Drop Sticker 🌸
                </span>
                <button
                  onClick={() => setShowStickerMenu(false)}
                  className="text-gray-400 hover:text-black p-1"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-1.5">
                {PRESET_STICKER_OPTIONS.map((opt) => (
                  <button
                    key={opt.label}
                    onClick={() => addSticker(opt)}
                    style={{ backgroundColor: opt.bg, color: opt.textColor }}
                    className="flex items-center gap-1.5 p-2 rounded-xl text-left text-[11px] font-mono-code font-bold hover:scale-102 transition-transform border border-black/5 shadow-xs"
                  >
                    <span>{opt.emoji}</span>
                    <span className="truncate">{opt.label}</span>
                  </button>
                ))}
              </div>

              <div className="pt-2 flex justify-between items-center text-[10px] text-gray-500 font-mono-code border-t border-gray-100">
                <span>Drag them around!</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={resetStickers}
                    className="text-[#B46A72] hover:underline flex items-center gap-1"
                    title="Reset to initial stickers"
                  >
                    <RotateCcw className="w-2.5 h-2.5" /> Reset
                  </button>
                  <button
                    onClick={deleteAllStickers}
                    className="text-[#B46A72] hover:underline flex items-center gap-1"
                    title="Delete all stickers"
                  >
                    <Trash2 className="w-2.5 h-2.5" /> Delete
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
