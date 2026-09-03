import React, { useState, useRef } from "react";
import { Sparkles, Camera, MapPin, Coffee, Code2, Heart, Music, CheckCircle2, Upload } from "lucide-react";

interface AestheticAvatarProps {
  onInteract?: () => void;
}

export const AestheticAvatar: React.FC<AestheticAvatarProps> = ({ onInteract }) => {
  const [customImage, setCustomImage] = useState<string | null>(null);
  const [avatarPreset, setAvatarPreset] = useState<number>(0);
  const [isHovered, setIsHovered] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // SVG Stylized Portrait Illustrations representing Ishita Gupta
  const presetAvatars = [
    // Chic Creative Developer with Headphones & Warm Soft Lighting
    `https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80`,
    // Tech & Editorial Portrait
    `https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80`,
    // Creative Studio Vibe
    `https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80`
  ];

  const currentImage = customImage || presetAvatars[avatarPreset];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setCustomImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div 
      className="relative mx-auto w-full max-w-sm sm:max-w-md select-none group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onInteract}
    >
      {/* Background Soft Pastel Ambient Aura */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#C4B5FD]/30 via-[#FECDD3]/25 to-[#A7F3D0]/25 rounded-[2.5rem] blur-2xl opacity-60 group-hover:opacity-100 transition-all duration-700 animate-pulse-glow" />

      {/* Main Photo Frame Card */}
      <div className="relative rounded-[2rem] p-3.5 sm:p-4 bg-[#121622]/90 backdrop-blur-xl border border-white/15 shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
        
        {/* Top Washi Tape Sticker */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full washi-tape-lavender text-[11px] font-mono-code font-bold text-[#DDD6FE] shadow-sm z-20 flex items-center gap-1.5 whitespace-nowrap">
          <Sparkles className="w-3 h-3 text-[#DDD6FE]" />
          <span>PORTRAIT // ISHITA GUPTA</span>
        </div>

        {/* The Image Viewport */}
        <div className="relative aspect-[4/4.5] rounded-[1.5rem] overflow-hidden bg-gradient-to-b from-[#1C2333] to-[#0E131F] border border-white/10 group-hover:border-[#C4B5FD]/50 transition-colors">
          
          <img
            src={currentImage}
            alt="Ishita Gupta - AI-Integrated Full-Stack Developer"
            className="w-full h-full object-cover object-center filter saturate-[1.05] contrast-[1.02] group-hover:scale-105 transition-transform duration-700"
          />

          {/* Soft Pastel Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-transparent to-black/10 opacity-70 pointer-events-none" />

          {/* Bottom Card Identity Info */}
          <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#0F1420]/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#86EFAC] animate-ping" />
                <span className="w-2 h-2 rounded-full bg-[#86EFAC]" />
                <p className="text-xs font-display font-bold text-white tracking-tight">Ishita Gupta</p>
              </div>
              <p className="text-[10px] font-mono-code text-[#C4B5FD] mt-0.5">AI Full-Stack Engineer</p>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                id="avatar-change-preset-btn"
                title="Switch portrait vibe"
                onClick={(e) => {
                  e.stopPropagation();
                  setCustomImage(null);
                  setAvatarPreset((prev) => (prev + 1) % presetAvatars.length);
                }}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors text-[10px] font-mono-code flex items-center gap-1"
              >
                <span>Vibe</span>
                <Sparkles className="w-3 h-3 text-[#FEF08A]" />
              </button>

              <button
                type="button"
                id="avatar-upload-custom-btn"
                title="Upload your photo"
                onClick={(e) => {
                  e.stopPropagation();
                  fileInputRef.current?.click();
                }}
                className="p-1.5 rounded-lg bg-[#C4B5FD]/20 hover:bg-[#C4B5FD]/30 text-[#DDD6FE] transition-colors"
              >
                <Camera className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Hidden File Input for uploading custom user photo */}
        <input 
          type="file" 
          ref={fileInputRef} 
          onChange={handleFileUpload} 
          accept="image/*" 
          className="hidden" 
        />

        {/* Floating Gen-Z Stickers */}
        {/* Top-Right Sticker: AI + CS */}
        <div className="absolute -top-4 -right-4 p-2.5 rounded-2xl bg-[#1C182A] border border-[#C4B5FD]/40 text-[#DDD6FE] shadow-xl transform rotate-6 group-hover:rotate-12 transition-transform duration-300 z-20 flex items-center gap-1.5 text-xs font-mono-code font-bold">
          <Code2 className="w-3.5 h-3.5 text-[#C4B5FD]" />
          <span>AI + C++</span>
        </div>

        {/* Bottom-Left Sticker: Matcha */}
        <div className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-xl bg-[#14231E] border border-[#86EFAC]/40 text-[#86EFAC] shadow-xl transform -rotate-6 group-hover:-rotate-3 transition-transform duration-300 z-20 flex items-center gap-1.5 text-[11px] font-mono-code font-bold">
          <Coffee className="w-3.5 h-3.5 text-[#86EFAC]" />
          <span>fueled by matcha 🍵</span>
        </div>

        {/* Right Middle Sticker: Available */}
        <div className="absolute top-1/2 -right-6 -translate-y-1/2 px-2.5 py-1 rounded-xl bg-[#241A1E] border border-[#FECDD3]/40 text-[#FECDD3] shadow-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-300 z-20 flex items-center gap-1 text-[10px] font-mono-code font-bold">
          <Heart className="w-3 h-3 text-[#FECDD3] fill-[#FECDD3]" />
          <span>Open to build</span>
        </div>
      </div>
    </div>
  );
};
