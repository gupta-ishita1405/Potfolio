import React, { useState } from "react";
import { 
  Cpu, 
  Code2, 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  Clock, 
  HardDrive, 
  Layers, 
  ArrowRight, 
  Sparkles 
} from "lucide-react";
import { PORTFOLIO_CONFIG } from "../config/portfolioData";
import { soundEngine } from "../utils/audio";
import { useTheme } from "../context/ThemeContext";

export const DSASection: React.FC = () => {
  const { palette } = useTheme();
  const algorithms = PORTFOLIO_CONFIG.dsaVisualizations;
  const [selectedAlgoId, setSelectedAlgoId] = useState(algorithms[0]?.id || "binary-search");
  
  const currentAlgo = algorithms.find((a) => a.id === selectedAlgoId) || algorithms[0];

  // Binary Search State
  const initialSorted = [3, 8, 14, 21, 29, 35, 42, 57, 68, 79, 88, 95];
  const [targetVal, setTargetVal] = useState(42);
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(initialSorted.length - 1);
  const [mid, setMid] = useState<number | null>(Math.floor((0 + initialSorted.length - 1) / 2));
  const [foundIndex, setFoundIndex] = useState<number | null>(null);
  const [bsStep, setBsStep] = useState(0);
  const [bsMessage, setBsMessage] = useState("Click 'Step Search' to locate target 42 in O(log n) time.");

  const handleBsStep = () => {
    soundEngine.playKeyClick();
    if (low > high) {
      setBsMessage("Target not found in array.");
      return;
    }
    const currentMid = Math.floor((low + high) / 2);
    setMid(currentMid);
    setBsStep((s) => s + 1);

    if (initialSorted[currentMid] === targetVal) {
      soundEngine.playChime();
      setFoundIndex(currentMid);
      setBsMessage(`Target ${targetVal} found at index ${currentMid}! Comparison matched in ${bsStep + 1} steps.`);
    } else if (initialSorted[currentMid] < targetVal) {
      setLow(currentMid + 1);
      setBsMessage(`${initialSorted[currentMid]} < ${targetVal} → Search right half (Low = ${currentMid + 1})`);
    } else {
      setHigh(currentMid - 1);
      setBsMessage(`${initialSorted[currentMid]} > ${targetVal} → Search left half (High = ${currentMid - 1})`);
    }
  };

  const handleResetBs = () => {
    soundEngine.playPop();
    setLow(0);
    setHigh(initialSorted.length - 1);
    setMid(Math.floor((0 + initialSorted.length - 1) / 2));
    setFoundIndex(null);
    setBsStep(0);
    setBsMessage("Reset completed. Click 'Step Search' to trace binary search pointers.");
  };

  return (
    <section id="dsa" className="relative py-20 lg:py-28 bg-[var(--theme-canvas-alt)] border-t border-[var(--theme-card-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--theme-primary-light)] border border-[var(--theme-card-border)] text-xs font-mono-code font-bold text-[var(--theme-primary-dark)]">
              <Cpu className="w-3.5 h-3.5 text-[var(--theme-primary)]" />
              <span>06 // ALGORITHMIC RIGOR & C++</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-[var(--theme-text)] tracking-tight leading-tight">
              Interactive DSA Engine in C++
            </h2>
            <p className="text-[var(--theme-text)]/75 text-sm sm:text-base max-w-2xl font-sans">
              "Frameworks build products. Fundamentals build engineers." I practice algorithms in C++ to optimize asymptotic time and memory limits.
            </p>
          </div>

          <div className="text-xs font-mono-code text-[var(--theme-text)] p-2.5 rounded-xl bg-white border border-[var(--theme-card-border)] shadow-2xs">
            TIME COMPLEXITY: <span className="text-[var(--theme-primary)] font-bold">{currentAlgo.timeComplexity}</span>
          </div>
        </div>

        {/* Algo Visualizer Workspace */}
        <div className="rounded-3xl bg-white border border-[var(--theme-card-border)] p-6 sm:p-8 lg:p-10 shadow-lg space-y-8">
          
          {/* Algo Selector Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[var(--theme-card-border)]">
            <div className="flex flex-wrap gap-2">
              {algorithms.map((algo) => (
                <button
                  key={algo.id}
                  onClick={() => {
                    soundEngine.playKeyClick();
                    setSelectedAlgoId(algo.id);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-mono-code font-bold transition-all cursor-pointer ${
                    selectedAlgoId === algo.id
                      ? "bg-[var(--theme-primary)] text-white shadow-xs"
                      : "bg-[var(--theme-canvas-alt)] text-[var(--theme-text)] hover:bg-[var(--theme-primary-light)] border border-[var(--theme-card-border)]"
                  }`}
                >
                  {algo.name}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3 text-xs font-mono-code">
              <span className="flex items-center gap-1.5 text-[var(--theme-primary)] font-bold">
                <Clock className="w-3.5 h-3.5" /> Time: {currentAlgo.timeComplexity}
              </span>
              <span className="flex items-center gap-1.5 text-[var(--theme-text-muted)]">
                <HardDrive className="w-3.5 h-3.5" /> Space: {currentAlgo.spaceComplexity}
              </span>
            </div>
          </div>

          {/* Interactive Binary Search Simulation Canvas */}
          {selectedAlgoId === "binary-search" ? (
            <div className="space-y-6">
              
              {/* Array Bar Visualization */}
              <div className="p-6 rounded-2xl bg-[var(--theme-canvas-alt)] border border-[var(--theme-card-border)] space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono-code text-[var(--theme-text)]">
                    TARGET: <strong className="text-[var(--theme-primary)] text-sm font-bold">{targetVal}</strong> | STEP: <strong className="text-[var(--theme-text)]">{bsStep}</strong>
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleBsStep}
                      disabled={foundIndex !== null}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[var(--theme-primary)] text-white font-mono-code font-bold text-xs hover:opacity-90 disabled:opacity-40 transition-all shadow-xs cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Step Search</span>
                    </button>
                    <button
                      onClick={handleResetBs}
                      className="p-2 rounded-xl bg-white hover:bg-[var(--theme-primary-light)] text-[var(--theme-text)] transition-colors border border-[var(--theme-card-border)] cursor-pointer"
                      title="Reset array pointers"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Element Blocks */}
                <div className="grid grid-cols-6 sm:grid-cols-12 gap-2 pt-2">
                  {initialSorted.map((num, idx) => {
                    const isMid = mid === idx;
                    const isLow = low === idx;
                    const isHigh = high === idx;
                    const isFound = foundIndex === idx;
                    const isOutside = idx < low || idx > high;

                    let bgClass = "bg-white border-[var(--theme-card-border)] text-[var(--theme-text)]";
                    if (isFound) {
                      bgClass = "bg-[var(--theme-primary)] border-[var(--theme-primary)] text-white font-black scale-105 shadow-md";
                    } else if (isMid) {
                      bgClass = "bg-[var(--theme-primary-light)] border-[var(--theme-primary)] text-[var(--theme-primary-dark)] font-bold";
                    } else if (isOutside) {
                      bgClass = "bg-white/40 border-[var(--theme-card-border)]/50 text-gray-400 opacity-50";
                    }

                    return (
                      <div key={idx} className="flex flex-col items-center gap-1">
                        <div
                          className={`w-full aspect-square rounded-xl border flex items-center justify-center font-mono-code text-sm transition-all duration-300 ${bgClass}`}
                        >
                          {num}
                        </div>
                        <span className="text-[9px] font-mono-code text-[var(--theme-text-muted)]">[{idx}]</span>
                        <div className="flex items-center gap-0.5 text-[8px] font-mono-code font-bold">
                          {isLow && <span className="text-[var(--theme-primary)]">L</span>}
                          {isMid && <span className="text-[var(--theme-primary-dark)]">M</span>}
                          {isHigh && <span className="text-[var(--theme-secondary)]">H</span>}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Status Output Box */}
                <div className="p-3 rounded-xl bg-white border border-[var(--theme-card-border)] text-xs font-mono-code text-[var(--theme-text)] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--theme-primary)]" />
                  <span>{bsMessage}</span>
                </div>
              </div>

            </div>
          ) : (
            <div className="p-6 rounded-2xl bg-[var(--theme-canvas-alt)] border border-[var(--theme-card-border)] space-y-3">
              <h4 className="font-display font-bold text-[var(--theme-text)] text-base">
                {currentAlgo.name} Overview
              </h4>
              <p className="text-xs font-sans text-[var(--theme-text)]/85 leading-relaxed">
                {currentAlgo.description}
              </p>
            </div>
          )}

          {/* C++ Code Snippet Box */}
          <div className="p-4 sm:p-6 rounded-2xl bg-[var(--theme-canvas-alt)] border border-[var(--theme-card-border)] space-y-3 font-mono-code">
            <div className="flex items-center justify-between pb-2 border-b border-[var(--theme-card-border)] text-xs text-[var(--theme-text-muted)]">
              <span className="text-[var(--theme-primary)] font-bold">C++ STL Implementation</span>
              <span>Compiled in GCC 14+</span>
            </div>
            <pre className="text-xs text-[var(--theme-primary-dark)] overflow-x-auto whitespace-pre-wrap leading-relaxed">
              <code>{currentAlgo.cppCode}</code>
            </pre>
          </div>

        </div>

      </div>
    </section>
  );
};
