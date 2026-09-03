import React, { useState, useRef, useEffect } from "react";
import { 
  Terminal as TerminalIcon, 
  Sparkles, 
  CornerDownLeft, 
  RotateCcw, 
  Layers, 
  Code2, 
  HelpCircle,
  Copy,
  Check
} from "lucide-react";
import { PORTFOLIO_CONFIG } from "../config/portfolioData";
import confetti from "canvas-confetti";

export const InteractiveTerminal: React.FC = () => {
  const [history, setHistory] = useState<Array<{ command: string; output: React.ReactNode }>>([
    {
      command: "welcome",
      output: (
        <div className="space-y-1 text-xs">
          <p className="text-[#B46A72] font-bold">✨ Welcome to Ishita's Interactive CLI v2.5 (Soft Gen-Z Edition)</p>
          <p className="text-[#2D3A47]/75">Type <span className="text-[#A8B58A] font-bold">help</span> to list available commands or try <span className="text-[#B46A72] font-bold">skills</span>, <span className="text-[#A9B7C6] font-bold">projects</span>, <span className="text-[#A8B58A] font-bold">hire</span>, <span className="text-[#B46A72] font-bold">palette</span>.</p>
        </div>
      ),
    },
  ]);
  const [inputVal, setInputVal] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    let outputNode: React.ReactNode = null;

    switch (trimmed) {
      case "help":
        outputNode = (
          <div className="space-y-1 text-xs text-[#2D3A47]">
            <p className="text-[#B46A72] font-bold">AVAILABLE COMMANDS:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1 font-mono-code">
              <div><span className="text-[#A8B58A] font-bold">skills</span> - View tech stack</div>
              <div><span className="text-[#B46A72] font-bold">projects</span> - Flagship systems</div>
              <div><span className="text-[#A9B7C6] font-bold">about</span> - Developer bio</div>
              <div><span className="text-[#A8B58A] font-bold">dsa</span> - Algorithmic focus</div>
              <div><span className="text-[#B46A72] font-bold">hire</span> - Contact info & status</div>
              <div><span className="text-[#2D3A47] font-bold">palette</span> - Soft color values</div>
              <div><span className="text-[#B46A72] font-bold">confetti</span> - Celebrate!</div>
              <div><span className="text-gray-500 font-bold">clear</span> - Reset screen</div>
            </div>
          </div>
        );
        break;

      case "skills":
        outputNode = (
          <div className="space-y-1 text-xs text-[#2D3A47]">
            <p className="text-[#B46A72] font-bold">ACTIVE SKILL MATRIX:</p>
            <p>• Languages: C, C++, Python, JavaScript (ES6+), TypeScript</p>
            <p>• Frontend: React, Next.js, GSAP, Tailwind CSS, DOM Manipulation</p>
            <p>• Backend: Node.js, Express, REST APIs, JWT Auth, MVC</p>
            <p>• Database: MongoDB, PostgreSQL, SQL</p>
            <p>• AI/ML: Python, Gemini 3.7 Flash, Generative AI SDK, Prompt Engineering</p>
          </div>
        );
        break;

      case "projects":
        outputNode = (
          <div className="space-y-1 text-xs text-[#2D3A47]">
            <p className="text-[#B46A72] font-bold">FLAGSHIP ARCHITECTURES:</p>
            <p>1. <span className="font-bold">NOVA</span> - Conversational AI Engine with SSE streaming</p>
            <p>2. <span className="font-bold">SKILLFORGE AI</span> - Skill gap diagnostic & learning roadmap generator</p>
            <p>3. <span className="font-bold">DRIVE</span> - Secure encrypted cloud storage with JWT access control</p>
          </div>
        );
        break;

      case "about":
        outputNode = (
          <div className="text-xs text-[#2D3A47] leading-relaxed">
            Ishita Gupta is an AI-Integrated Full-Stack Developer and CSE student.
            "I don't just build websites. I build systems that think, interact and solve problems."
          </div>
        );
        break;

      case "dsa":
        outputNode = (
          <div className="text-xs text-[#2D3A47] leading-relaxed">
            "Frameworks build products. Fundamentals build engineers."
            Practicing C++ Data Structures & Algorithms with asymptotic optimization.
          </div>
        );
        break;

      case "hire":
      case "contact":
        outputNode = (
          <div className="space-y-1 text-xs text-[#2D3A47]">
            <p className="text-[#A8B58A] font-bold">STATUS: AVAILABLE FOR FULL-TIME ROLES & INTERNSHIPS</p>
            <p>Email: guptaishita441@gmail.com</p>
            <p>Location: Bhopal, India (Open to Remote & Relocation)</p>
          </div>
        );
        break;

      case "palette":
        outputNode = (
          <div className="space-y-1 text-xs text-[#2D3A47]">
            <p className="font-bold text-[#B46A72]">OFFICIAL SOFT COLOR PALETTE:</p>
            <p>• Vanilla Cream: #FFF7E6</p>
            <p>• Blush Petal: #F7C8D3</p>
            <p>• Rosewood: #B46A72</p>
            <p>• Sage Leaf: #A8B58A</p>
            <p>• Misty Sky: #A9B7C6</p>
            <p>• Midnight Lagoon: #2D3A47</p>
          </div>
        );
        break;

      case "confetti":
        confetti({
          particleCount: 60,
          spread: 80,
          colors: ["#F7C8D3", "#B46A72", "#A8B58A", "#FFF7E6"],
        });
        outputNode = <p className="text-xs text-[#B46A72] font-bold">🎉 Confetti dispatched!</p>;
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      default:
        outputNode = (
          <p className="text-xs text-red-600">
            Command not found: "{cmdStr}". Type <span className="underline font-bold">help</span> for command list.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: cmdStr, output: outputNode }]);
    setInputVal("");
  };

  return (
    <div className="rounded-3xl bg-[#FFF7E6] border border-[#F7C8D3] p-4 sm:p-6 shadow-xl space-y-4">
      {/* Top Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-[#F7C8D3]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#B46A72]" />
          <div className="w-3 h-3 rounded-full bg-[#A8B58A]" />
          <div className="w-3 h-3 rounded-full bg-[#A9B7C6]" />
          <span className="ml-2 font-mono-code text-xs font-bold text-[#2D3A47]">
            ishita@terminal: ~ /portfolio-cli
          </span>
        </div>

        <button
          onClick={() => setHistory([])}
          className="text-xs font-mono-code text-[#2D3A47]/60 hover:text-[#B46A72] flex items-center gap-1 transition-colors"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Clear</span>
        </button>
      </div>

      {/* Terminal Screen Body */}
      <div
        onClick={() => inputRef.current?.focus()}
        className="h-64 sm:h-72 overflow-y-auto rounded-2xl bg-white p-4 space-y-3 font-mono-code text-xs border border-[#F7C8D3] cursor-text"
      >
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-2 text-[#2D3A47]/60">
              <span className="text-[#B46A72] font-bold">❯</span>
              <span className="text-[#2D3A47] font-semibold">{item.command}</span>
            </div>
            <div className="pl-4">{item.output}</div>
          </div>
        ))}

        {/* Active Input Line */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCommand(inputVal);
          }}
          className="flex items-center gap-2 pt-1"
        >
          <span className="text-[#B46A72] font-bold">❯</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help', 'skills', 'projects', 'palette'..."
            className="flex-1 bg-transparent text-xs font-mono-code text-[#2D3A47] focus:outline-none placeholder:text-[#2D3A47]/40"
          />
        </form>

        <div ref={bottomRef} />
      </div>
    </div>
  );
};
