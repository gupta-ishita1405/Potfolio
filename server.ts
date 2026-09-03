import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize GoogleGenAI lazily with telemetry User-Agent header
  let aiClient: GoogleGenAI | null = null;
  function getAIClient(): GoogleGenAI | null {
    if (!aiClient && process.env.GEMINI_API_KEY) {
      aiClient = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });
    }
    return aiClient;
  }

  // Health endpoint
  app.get("/api/health", (_req, res) => {
    res.json({
      status: "online",
      portfolio: "Ishita Gupta | AI-Integrated Full-Stack Developer",
      timestamp: new Date().toISOString(),
      aiActive: !!process.env.GEMINI_API_KEY
    });
  });

  // AI Assistant Chat Route for Ishita's Portfolio
  app.post("/api/chat", async (req, res) => {
    const { message, history = [], mode = "twin" } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "A valid message string is required." });
    }

    try {
      const ai = getAIClient();

      if (ai) {
        let systemInstruction = `You are the interactive AI Twin of Ishita Gupta, an AI-Integrated Full-Stack Developer and Computer Science & Engineering student.
Her core philosophy: "I don't just build websites. I build systems that think, interact and solve problems."
Her core skills:
- Languages: C, C++, Python, JavaScript
- Frontend: React, Next.js, GSAP, DOM APIs, Tailwind CSS, HTML5, CSS3
- Backend: Node.js, Express.js, RESTful APIs, JWT Authentication, Modular Controller Architecture
- Database: MongoDB, PostgreSQL, SQL
- AI/ML: Python, Generative AI, LLM APIs, Machine Learning, AI Chatbots, Prompt Engineering
- Computer Science Fundamentals: DSA (Data Structures & Algorithms in C++), OOP, DBMS, OS, Computer Networks
- Experience: Full Stack Developer Intern at Sheriyans Private Limited, Bhopal (Nov 2025 – Feb 2026), working on RESTful APIs, JWT auth, session/logout, Delete APIs, modular controller architecture.
- Flagship Projects:
  1. NOVA (AI Conversational Assistant with streaming, history, state management)
  2. SKILLFORGE AI (AI-powered skill gap analyzer & personalized learning roadmap engine)
  3. DRIVE (Production-style secure file storage platform with JWT, role-based access, folder system)
Her style: Gen-Z creative engineer, sharp, concise, technically rigorous yet engaging and witty. Talk in a friendly, intelligent, crisp tone. Keep answers under 3-4 sentences unless the user requests in-depth technical architecture.`;

        if (mode === "nova") {
          systemInstruction = `You are NOVA, an intelligent conversational AI assistant built by Ishita Gupta. You demonstrate fast, thoughtful, and context-aware responses with high technical precision. Keep responses concise, clear, and helpful.`;
        }

        const formattedContents: Array<{ role: string; parts: Array<{ text: string }> }> = [];

        // Add history
        for (const item of history.slice(-6)) {
          if (item.sender === "user" || item.role === "user") {
            formattedContents.push({
              role: "user",
              parts: [{ text: item.text || item.content || "" }]
            });
          } else {
            formattedContents.push({
              role: "model",
              parts: [{ text: item.text || item.content || "" }]
            });
          }
        }

        // Add current message
        formattedContents.push({
          role: "user",
          parts: [{ text: message }]
        });

        const response = await ai.models.generateContent({
          model: "gemini-3.7-flash",
          contents: formattedContents,
          config: {
            systemInstruction,
            temperature: 0.7,
          }
        });

        return res.json({
          reply: response.text || "Hello! I'm here to chat about Ishita's projects, tech stack, and engineering background.",
          source: "gemini-3.7-flash"
        });
      }
    } catch (err: any) {
      console.warn("Gemini call error, falling back to intelligent response engine:", err?.message);
    }

    // Fallback intelligent responder
    const query = message.toLowerCase();
    let fallbackReply = "Ishita focuses on building systems that bridge modern full-stack web applications with generative AI models and robust backend architecture.";

    if (query.includes("skill") || query.includes("stack") || query.includes("technolog")) {
      fallbackReply = "Ishita's tech ecosystem spans C++, Python, JavaScript/TypeScript, React, Next.js, Node.js, Express, MongoDB, PostgreSQL, REST APIs, JWT Auth, and Generative AI SDKs.";
    } else if (query.includes("nova") || query.includes("chat")) {
      fallbackReply = "NOVA is Ishita's AI Conversational Assistant project featuring streaming responses, persistent conversation state, modular backend APIs, and multi-turn context memory.";
    } else if (query.includes("skillforge") || query.includes("gap") || query.includes("learn")) {
      fallbackReply = "SkillForge AI analyzes user skill benchmarks against target tech roles, calculates the exact skill gap, and synthesizes a step-by-step personalized learning roadmap.";
    } else if (query.includes("drive") || query.includes("storage") || query.includes("file") || query.includes("security")) {
      fallbackReply = "Drive is a production-grade secure cloud file storage platform with JWT authentication, protected routes, modular controller architecture, and role-based access control.";
    } else if (query.includes("experience") || query.includes("intern") || query.includes("sheriyans")) {
      fallbackReply = "Ishita interned as a Full Stack Developer at Sheriyans Private Limited (Nov 2025 – Feb 2026), building RESTful APIs, JWT auth flows, and modular controller architectures.";
    } else if (query.includes("dsa") || query.includes("c++") || query.includes("algorithm")) {
      fallbackReply = "Ishita believes 'Frameworks build products. Fundamentals build engineers.' She practices DSA in C++, focusing on asymptotic complexity, trees, graphs, dynamic programming, and OOP.";
    } else if (query.includes("hire") || query.includes("contact") || query.includes("email") || query.includes("available")) {
      fallbackReply = "Ishita is currently available for software engineering & AI developer roles! You can reach her directly at guptaishita441@gmail.com or through the contact section below.";
    } else if (query.includes("hi") || query.includes("hello") || query.includes("hey")) {
      fallbackReply = "Hey! I'm Ishita's AI Twin. Ask me about her flagship projects (Nova, SkillForge, Drive), tech stack, intern experience, or algorithmic problem solving!";
    }

    return res.json({
      reply: fallbackReply,
      source: "intelligent-engine"
    });
  });

  // Vite middleware in dev, static files in production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Portfolio server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
