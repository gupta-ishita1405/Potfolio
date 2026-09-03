import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Music, Play, Pause, SkipForward, Sparkles } from "lucide-react";
import { soundEngine } from "../utils/audio";

export const MusicPlayerWidget: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<any>(null);

  const tracks = [
    { title: "matcha & code", bpm: "84 BPM", mood: "lo-fi chill" },
    { title: "midnight llm stream", bpm: "92 BPM", mood: "cyber wave" },
    { title: "bhopal rain & keys", bpm: "76 BPM", mood: "ambient focus" }
  ];

  const currentTrack = tracks[currentTrackIndex];

  // Synthesize dreamy lo-fi chords in background when played
  const startLoFiSynth = () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      if (!audioContextRef.current) {
        audioContextRef.current = new AudioCtx();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === "suspended") ctx.resume();

      const chords = [
        [261.63, 329.63, 392.00, 493.88], // Cmaj7
        [220.00, 261.63, 329.63, 392.00], // Am7
        [174.61, 220.00, 261.63, 329.63], // Fmaj7
        [196.00, 246.94, 293.66, 349.23], // G7
      ];

      let chordIdx = 0;

      const playChord = () => {
        if (!isPlaying && intervalRef.current) return;
        const currentChord = chords[chordIdx % chords.length];
        chordIdx++;

        currentChord.forEach((freq) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          const filter = ctx.createBiquadFilter();

          filter.type = "lowpass";
          filter.frequency.setValueAtTime(800, ctx.currentTime);

          osc.type = "sine";
          osc.frequency.setValueAtTime(freq, ctx.currentTime);

          gain.gain.setValueAtTime(0.015, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.8);

          osc.connect(filter);
          filter.connect(gain);
          gain.connect(ctx.destination);

          osc.start();
          osc.stop(ctx.currentTime + 2.9);
        });
      };

      playChord();
      intervalRef.current = setInterval(playChord, 3000);
    } catch {
      // Audio autoplay guard
    }
  };

  const stopLoFiSynth = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    if (isPlaying) {
      startLoFiSynth();
    } else {
      stopLoFiSynth();
    }
    return () => stopLoFiSynth();
  }, [isPlaying, currentTrackIndex]);

  const togglePlay = () => {
    soundEngine.playPop();
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    soundEngine.playPop();
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
  };

  const toggleSoundFx = () => {
    soundEngine.isMuted = !soundEngine.isMuted;
    setIsMuted(soundEngine.isMuted);
    if (!soundEngine.isMuted) {
      soundEngine.playPop();
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2 select-none">
      {/* Mini Lo-Fi Player Capsule */}
      <div className="flex items-center gap-3 px-3.5 py-2 rounded-2xl bg-[#111726]/90 backdrop-blur-xl border border-white/15 shadow-2xl transition-all hover:border-[#C4B5FD]/40 group">
        
        {/* Equalizer Wave Icon */}
        <div className="flex items-center gap-0.5 h-4">
          <span className={`w-1 bg-[#86EFAC] rounded-full transition-all ${isPlaying ? "h-4 animate-pulse" : "h-1.5"}`} />
          <span className={`w-1 bg-[#C4B5FD] rounded-full transition-all ${isPlaying ? "h-3 animate-bounce" : "h-2"}`} />
          <span className={`w-1 bg-[#FECDD3] rounded-full transition-all ${isPlaying ? "h-4 animate-pulse" : "h-1.5"}`} />
        </div>

        {/* Track Info */}
        <div className="hidden sm:block text-left">
          <p className="text-xs font-mono-code font-bold text-white flex items-center gap-1">
            <span>{currentTrack.title}</span>
            <span className="text-[9px] px-1.5 py-0.2 rounded bg-white/10 text-[#C4B5FD]">
              {currentTrack.bpm}
            </span>
          </p>
          <p className="text-[10px] font-mono-code text-gray-400">
            ambient lo-fi generator
          </p>
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          id="music-play-toggle-btn"
          className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
          title={isPlaying ? "Pause ambient audio" : "Play ambient lo-fi synth"}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5 text-[#86EFAC]" /> : <Play className="w-3.5 h-3.5 text-[#C4B5FD]" />}
        </button>

        {/* Skip Track Button */}
        <button
          onClick={nextTrack}
          id="music-next-track-btn"
          className="p-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          title="Switch track vibe"
        >
          <SkipForward className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Audio FX Mute Toggle */}
      <button
        onClick={toggleSoundFx}
        id="sound-fx-toggle-btn"
        className={`p-2.5 rounded-2xl backdrop-blur-xl border transition-all ${
          isMuted
            ? "bg-[#111726]/80 text-gray-500 border-white/10"
            : "bg-[#C4B5FD]/20 text-[#DDD6FE] border-[#C4B5FD]/40 shadow-lg"
        }`}
        title={isMuted ? "Unmute UI sounds" : "Mute UI sounds"}
      >
        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
      </button>
    </div>
  );
};
