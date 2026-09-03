import React, { useState, useRef, useEffect } from "react";
import { 
  X, 
  Send, 
  Bot, 
  Sparkles, 
  RotateCcw, 
  User, 
  Terminal,
  Activity,
  Heart
} from "lucide-react";
import { PORTFOLIO_CONFIG } from "../config/portfolioData";

interface AITwinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AITwinModal: React.FC<AITwinModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Array<{ sender: "user" | "ai"; text: string; time: string }>>([
    {
      sender: "ai",
      text: "Hey there! 🌸 I am Ishita's interactive AI Twin. Ask me anything about her full-stack systems, C++ DSA problem solving, Gemini AI integrations, or internship journey!",
      time: "Just now",
    },
  ]);
  const [inputVal, setInputVal] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    "What are Ishita's top flagship projects?",
    "Tell me about her work at Sheriyans internship.",
    "Why does she emphasize DSA in C++?",
    "How does she integrate Gemini AI into web apps?"
  ];

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isLoading]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const handleSend = async (queryText?: string) => {
    const text = queryText || inputVal;
    if (!text.trim() || isLoading) return;

    const userMsg = {
      sender: "user" as const,
      text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!queryText) setInputVal("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          history: messages,
          mode: "twin",
        }),
      });

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: data.reply || "Thanks for asking! Ishita is passionate about crafting intelligent full-stack systems with rigorous backend architecture and intuitive user experiences.",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "Ishita specializes in full-stack web applications with React, Node.js, Express, MongoDB, C++ DSA, and Gemini AI integration. Feel free to explore her case studies or reach out at guptaishita441@gmail.com!",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl rounded-3xl bg-[#FFF7E6] border border-[#F7C8D3] shadow-2xl overflow-hidden flex flex-col max-h-[88vh]">
        
        {/* Header */}
        <div className="p-4 sm:p-5 bg-white border-b border-[#F7C8D3] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-2xl bg-[#F7C8D3] flex items-center justify-center text-[#B46A72] shadow-xs">
              <Bot className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#A8B58A]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-display font-bold text-base text-[#2D3A47]">
                  Ishita's AI Twin
                </h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono-code font-bold bg-[#A8B58A]/30 text-[#2D3A47]">
                  GEMINI POWERED
                </span>
              </div>
              <p className="text-[11px] font-mono-code text-[#B46A72]">
                Autonomous persona tuned to Ishita's engineering background
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#FFF7E6] hover:bg-[#F7C8D3] text-[#2D3A47] flex items-center justify-center font-bold text-sm transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Prompts Bar */}
        <div className="px-4 py-2 bg-[#FFFDF9] border-b border-[#F7C8D3]/50 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
          <span className="text-[10px] font-mono-code text-[#2D3A47]/60 whitespace-nowrap">
            Suggested:
          </span>
          {quickPrompts.map((qp, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(qp)}
              className="px-2.5 py-1 rounded-xl bg-white hover:bg-[#F7C8D3]/40 border border-[#F7C8D3] text-[11px] font-mono-code text-[#2D3A47] whitespace-nowrap transition-colors"
            >
              {qp}
            </button>
          ))}
        </div>

        {/* Message Stream */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 bg-[#FFFDF9]">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex gap-3 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              {msg.sender === "ai" && (
                <div className="w-8 h-8 rounded-xl bg-[#F7C8D3] text-[#B46A72] flex items-center justify-center flex-shrink-0 text-xs font-bold mt-1">
                  IG
                </div>
              )}

              <div
                className={`max-w-[82%] p-3.5 sm:p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                  msg.sender === "user"
                    ? "bg-[#2D3A47] text-[#FFF7E6] rounded-tr-xs"
                    : "bg-white text-[#2D3A47] border border-[#F7C8D3] rounded-tl-xs shadow-xs"
                }`}
              >
                <p className="font-sans whitespace-pre-wrap">{msg.text}</p>
                <span className="block mt-1 text-[10px] font-mono-code opacity-60">
                  {msg.time}
                </span>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-3 justify-start">
              <div className="w-8 h-8 rounded-xl bg-[#F7C8D3] text-[#B46A72] flex items-center justify-center flex-shrink-0 text-xs font-bold">
                IG
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-[#F7C8D3] text-xs font-mono-code text-[#2D3A47] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B46A72] animate-ping" />
                <span>Thinking & reasoning...</span>
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-3 sm:p-4 bg-white border-t border-[#F7C8D3]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Ask anything about Ishita's engineering skills..."
              className="flex-1 px-4 py-3 rounded-2xl bg-[#FFF7E6] border border-[#F7C8D3] text-xs font-sans text-[#2D3A47] focus:outline-none focus:ring-2 focus:ring-[#B46A72]"
            />
            <button
              type="submit"
              disabled={isLoading || !inputVal.trim()}
              className="px-4 py-3 rounded-2xl bg-[#B46A72] hover:bg-[#964E56] disabled:opacity-50 text-white font-mono-code font-bold text-xs flex items-center gap-1.5 transition-all shadow-xs"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send</span>
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};
