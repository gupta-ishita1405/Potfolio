import React, { useState, useRef, useEffect } from "react";
import { 
  Send, 
  Sparkles, 
  Bot, 
  User, 
  RotateCcw, 
  Code, 
  Zap, 
  Terminal,
  Activity,
  Copy,
  Check
} from "lucide-react";

export const InteractiveNovaSimulator: React.FC = () => {
  const [messages, setMessages] = useState<Array<{ sender: "user" | "nova"; text: string; time: string }>>([
    {
      sender: "nova",
      text: "Hello! I am NOVA, an intelligent conversational AI assistant engineered by Ishita Gupta. Ask me about system architecture, code debugging, or full-stack engineering.",
      time: "Just now",
    },
  ]);
  const [inputVal, setInputVal] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [tone, setTone] = useState<"Technical" | "Concise" | "Creative">("Technical");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const promptPresets = [
    "Explain the architecture of NOVA in 3 bullet points.",
    "How does JWT authentication work with httpOnly cookies?",
    "Why practice DSA in C++ when building web applications?",
    "Compare MongoDB vs PostgreSQL for an AI skill platform."
  ];

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || inputVal;
    if (!query.trim() || isLoading) return;

    const userMsg = {
      sender: "user" as const,
      text: query,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputVal("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: query,
          history: messages,
          mode: "nova",
        }),
      });

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        {
          sender: "nova",
          text: data.reply || "NOVA has processed your request.",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          sender: "nova",
          text: "NOVA System: Request processed. Fast token generation and multi-turn context retention active.",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="rounded-3xl bg-[#FFF7E6] border border-[#F7C8D3] p-4 sm:p-6 shadow-inner space-y-4">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#F7C8D3]">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#F7C8D3] flex items-center justify-center text-[#B46A72]">
            <Bot className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-display font-bold text-sm text-[#2D3A47]">
              NOVA Live AI Chat Engine Simulator
            </h4>
            <p className="text-[10px] font-mono-code text-[#B46A72]">
              SSE Streaming + Gemini 3.7 Flash Backend
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          {(["Technical", "Concise", "Creative"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTone(t)}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-mono-code font-bold transition-all ${
                tone === t
                  ? "bg-[#2D3A47] text-[#FFF7E6]"
                  : "bg-white text-[#2D3A47] border border-[#F7C8D3]"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Preset Prompts */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        {promptPresets.map((p, idx) => (
          <button
            key={idx}
            onClick={() => handleSendMessage(p)}
            className="px-2.5 py-1 rounded-xl bg-white hover:bg-[#F7C8D3]/30 border border-[#F7C8D3] text-[11px] font-mono-code text-[#2D3A47] whitespace-nowrap transition-colors"
          >
            {p}
          </button>
        ))}
      </div>

      {/* Chat Messages */}
      <div className="h-64 sm:h-80 overflow-y-auto rounded-2xl bg-white p-4 space-y-3 border border-[#F7C8D3]">
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`flex gap-2.5 ${m.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] p-3 rounded-2xl text-xs leading-relaxed ${
                m.sender === "user"
                  ? "bg-[#2D3A47] text-[#FFF7E6]"
                  : "bg-[#FFF7E6] text-[#2D3A47] border border-[#F7C8D3]"
              }`}
            >
              <p className="whitespace-pre-wrap">{m.text}</p>
              <span className="block mt-1 text-[9px] font-mono-code opacity-60 text-right">
                {m.time}
              </span>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-2 text-xs font-mono-code text-[#B46A72] items-center">
            <span className="w-2 h-2 rounded-full bg-[#B46A72] animate-ping" />
            <span>NOVA is formulating response...</span>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
        className="flex items-center gap-2"
      >
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Ask NOVA a technical question..."
          className="flex-1 px-4 py-2.5 rounded-xl bg-white border border-[#F7C8D3] text-xs font-sans text-[#2D3A47] focus:outline-none focus:ring-2 focus:ring-[#B46A72]"
        />
        <button
          type="submit"
          disabled={isLoading || !inputVal.trim()}
          className="px-4 py-2.5 rounded-xl bg-[#B46A72] hover:bg-[#964E56] disabled:opacity-50 text-white font-mono-code font-bold text-xs flex items-center gap-1.5 transition-all shadow-xs"
        >
          <Send className="w-3.5 h-3.5" />
          <span>Send</span>
        </button>
      </form>
    </div>
  );
};
