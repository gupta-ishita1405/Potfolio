import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Sparkles, Disc3, Music2 } from "lucide-react";

interface VibeTrack {
  id: string;
  title: string;
  vibe: string;
  emoji: string;
  color: string;
  notes: number[]; // chord frequencies
}

const TRACKS: VibeTrack[] = [
  {
    id: "matcha-study",
    title: "Matcha Latte Study Session",
    vibe: "Soft & Focused",
    emoji: "🍵",
    color: "#A8B58A",
    notes: [261.63, 329.63, 392.00, 493.88], // Cmaj7
  },
  {
    id: "peony-dreams",
    title: "Blush Peony Ambient Lofi",
    vibe: "Dreamy & Gentle",
    emoji: "🌸",
    color: "#F7C8D3",
    notes: [220.00, 277.18, 329.63, 415.30], // Amaj7
  },
  {
    id: "vanilla-chill",
    title: "Vanilla Cream Coding Hours",
    vibe: "Warm & Cozy",
    emoji: "☕",
    color: "#FFF7E6",
    notes: [174.61, 220.00, 261.63, 329.63], // Fmaj7
  },
  {
    id: "midnight-flow",
    title: "Midnight Lagoon Deep Focus",
    vibe: "Nocturnal & Calm",
    emoji: "🌙",
    color: "#2D3A47",
    notes: [196.00, 246.94, 293.66, 369.99], // Gmaj7
  },
];

export const LofiVibePlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<number | null>(null);
  const track = TRACKS[currentTrackIndex];

  // Synthesize soft ambient lofi notes
  const playLofiNote = (freq: number) => {
    if (!audioCtxRef.current || isMuted) return;
    const ctx = audioCtxRef.current;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Soft sine + gentle triangle tone
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      // Gentle envelope
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 0.6);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 3.2);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 3.3);
    } catch {
      // Audio context might need user interaction first
    }
  };

  const startPlaying = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }
    if (audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }

    setIsPlaying(true);

    let noteIdx = 0;
    // Play initial note
    playLofiNote(track.notes[0]);

    intervalRef.current = window.setInterval(() => {
      noteIdx = (noteIdx + 1) % track.notes.length;
      playLofiNote(track.notes[noteIdx]);
    }, 1800);
  };

  const stopPlaying = () => {
    setIsPlaying(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopPlaying();
    } else {
      startPlaying();
    }
  };

  useEffect(() => {
    if (isPlaying) {
      stopPlaying();
      startPlaying();
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentTrackIndex]);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <div className="relative rounded-2xl bg-white/90 backdrop-blur-md border border-[#F7C8D3] p-3 shadow-xl transition-all hover:shadow-2xl">
        <div className="flex items-center gap-3">
          {/* Vinyl rotating icon */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#FFF7E6] border border-[#B46A72]/30 text-[#B46A72] hover:scale-105 transition-transform"
            title="Toggle Lofi Music Player"
          >
            <Disc3
              className={`w-5 h-5 ${isPlaying ? "animate-spin text-[#B46A72]" : "text-[#2D3A47]"}`}
              style={{ animationDuration: "4s" }}
            />
            {isPlaying && (
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#A8B58A] animate-ping" />
            )}
          </button>

          {/* Track details (compact) */}
          <div className="hidden sm:block text-left">
            <div className="flex items-center gap-1.5">
              <span className="text-xs">{track.emoji}</span>
              <span className="font-display font-bold text-xs text-[#2D3A47] truncate max-w-[130px]">
                {track.title}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[10px] font-mono-code text-[#B46A72]">
                {isPlaying ? "♪ vibing in 432Hz" : "ambient lofi"}
              </span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-1.5">
            <button
              id="lofi-play-btn"
              onClick={togglePlay}
              className="w-8 h-8 rounded-xl bg-[#F7C8D3] hover:bg-[#B46A72] text-[#2D3A47] hover:text-white flex items-center justify-center transition-colors shadow-xs"
              title={isPlaying ? "Pause Ambient Beat" : "Play Ambient Beat"}
            >
              {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
            </button>

            <button
              onClick={() => setIsMuted(!isMuted)}
              className="w-8 h-8 rounded-xl bg-[#FFF7E6] hover:bg-gray-100 text-[#2D3A47] flex items-center justify-center transition-colors"
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Expanded Track Selection Drawer */}
        {!isCollapsed && (
          <div className="mt-3 pt-3 border-t border-[#F7C8D3]/50 space-y-2 animate-fadeIn">
            <div className="flex items-center justify-between text-[11px] font-mono-code text-[#2D3A47]/70">
              <span>Select Vibe Frequency</span>
              <span className="text-[#B46A72] font-bold">WebAudio Synth</span>
            </div>

            <div className="space-y-1">
              {TRACKS.map((t, idx) => {
                const isSelected = idx === currentTrackIndex;
                return (
                  <button
                    key={t.id}
                    onClick={() => setCurrentTrackIndex(idx)}
                    className={`w-full flex items-center justify-between p-2 rounded-xl text-left text-xs transition-all ${
                      isSelected
                        ? "bg-[#F7C8D3]/50 font-bold text-[#2D3A47] border border-[#B46A72]/40"
                        : "hover:bg-[#FFF7E6] text-gray-700"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span>{t.emoji}</span>
                      <span className="truncate max-w-[150px]">{t.title}</span>
                    </div>
                    <span className="text-[10px] font-mono-code text-[#B46A72] opacity-80">
                      {t.vibe}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
