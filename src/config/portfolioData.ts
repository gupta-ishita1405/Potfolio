import {
  SkillItem,
  ProjectCaseStudy,
  ExperienceItem,
  HowIThinkStep,
  AIUseCase,
  RepositoryItem,
  AlgorithmVisualization
} from "../types";

export const PORTFOLIO_CONFIG = {
  personal: {
    name: "Ishita Gupta",
    headlineTitle: "AI-Integrated Full-Stack Developer",
    supportingIdentity: "Building intelligent digital experiences with AI, full-stack engineering and creative technology.",
    heroPositioning: "I don't just build websites. I build systems that think, interact and solve problems.",
    heroHeadline: "Building intelligent products at the intersection of AI & the web.",
    heroSupportingCopy: "Computer Science & Engineering student building full-stack applications, AI-powered experiences and creative digital products.",
    rotatingKeywords: [
      "AI & LLM SYSTEMS",
      "FULL-STACK ENGINEERING",
      "GENAI PIPELINES",
      "CREATIVE TECHNOLOGY",
      "ALGORITHMIC THINKING"
    ],
    statusText: "// currently turning caffeine into code",
    systemStatus: "SYSTEM STATUS: BUILDING INTELLIGENT EXPERIENCES...",
    availableForOpportunities: true,
    location: "Bhopal / Remote, India",
    email: "guptaishita441@gmail.com",
    github: "https://github.com/gupta-ishita1405",
    linkedin: "www.linkedin.com/in/ishita-gupta-a9ab4a284",
    resumeUrl: "#resume-modal",
  },
  
  about: {
    heading: "A developer who likes building things that shouldn't exist yet.",
    subheading: "Where engineering discipline meets generative intelligence and creative digital design.",
    paragraphs: [
      "I am a Computer Science & Engineering student passionate about crafting digital products that merge robust software architecture with generative intelligence. Rather than treating AI as an external black box or a gimmick, I engineer it as a foundational layer of the application stack.",
      "My development journey moves seamlessly across the spectrum: from solving complex algorithmic challenges in C++ to structuring modular RESTful APIs with JWT authentication in Node.js, designing relational & document schemas, and building fluid, reactive user interfaces with React and motion design.",
      "I believe great software is built with curiosity, technical rigor, and an uncompromising eye for user experience. When I'm not architecting full-stack applications or fine-tuning LLM prompt workflows, I'm experimenting with creative motion, reading system design whitepapers, and exploring new frontiers in Generative AI."
    ],
    corePillars: [
      {
        title: "Full-Stack Development",
        tag: "ARCHITECTURE",
        desc: "Building scalable, modular REST APIs, secure JWT auth flows, controller patterns, and responsive frontends.",
        icon: "Layers"
      },
      {
        title: "Artificial Intelligence & GenAI",
        tag: "INTELLIGENCE",
        desc: "Integrating LLM APIs, streaming chat pipelines, context embeddings, and automated recommendation engines.",
        icon: "Sparkles"
      },
      {
        title: "Data Structures & Algorithms",
        tag: "FUNDAMENTALS",
        desc: "Algorithmic problem solving in C++, asymptotic complexity optimization, and clean object-oriented design.",
        icon: "Cpu"
      },
      {
        title: "Creative Technology",
        tag: "INTERACTION",
        desc: "Designing editorial typography layouts, tactile micro-interactions, and performant timeline animations.",
        icon: "Zap"
      }
    ]
  },

  skills: [
    // Languages
    {
      id: "c",
      name: "C",
      category: "Languages",
      level: "Core",
      whatIUseItFor: "Understanding low-level memory allocation, pointers, and foundational computer architecture concepts.",
      whereItAppears: "CS core academic coursework and low-level system programming labs.",
      projectIds: ["cs-fundamentals"],
      badgeColor: "#3B82F6"
    },
    {
      id: "cpp",
      name: "C++",
      category: "Languages",
      level: "Advanced",
      whatIUseItFor: "Practicing competitive programming, Object-Oriented Programming (OOP), and optimizing time-critical algorithms with STL.",
      whereItAppears: "Algorithmic problem solving, LeetCode data structure implementations, and DSA visualizers.",
      projectIds: ["dsa-engine"],
      badgeColor: "#60A5FA"
    },
    {
      id: "python",
      name: "Python",
      category: "Languages",
      level: "Advanced",
      whatIUseItFor: "Prototyping machine learning models, scripting AI data extraction pipelines, and interacting with GenAI SDKs.",
      whereItAppears: "SkillForge AI data processing engine and machine learning classification scripts.",
      projectIds: ["skillforge-ai"],
      badgeColor: "#FBBF24"
    },
    {
      id: "javascript",
      name: "JavaScript (ES6+)",
      category: "Languages",
      level: "Proficient",
      whatIUseItFor: "Writing asynchronous client and server logic, event handlers, closures, DOM manipulation, and promises.",
      whereItAppears: "Nova AI chatbot, Drive full-stack platform, and Sheriyans internship backend controllers.",
      projectIds: ["nova-ai", "drive-storage", "sheriyans-apis"],
      badgeColor: "#F59E0B"
    },

    // Frontend
    {
      id: "react",
      name: "React",
      category: "Frontend",
      level: "Advanced",
      whatIUseItFor: "Building component-based interactive interfaces with custom hooks, state machines, and memoized renders.",
      whereItAppears: "Nova conversational UI, SkillForge user dashboard, and Drive secure file explorer.",
      projectIds: ["nova-ai", "skillforge-ai", "drive-storage"],
      badgeColor: "#06B6D4"
    },
    {
      id: "nextjs",
      name: "Next.js",
      category: "Frontend",
      level: "Proficient",
      whatIUseItFor: "Developing server-rendered full-stack web applications with optimized routing, SEO metadata, and API routes.",
      whereItAppears: "Nova production deployment architecture and portfolio case studies.",
      projectIds: ["nova-ai"],
      badgeColor: "#FFFFFF"
    },
    {
      id: "gsap",
      name: "GSAP / Motion",
      category: "Frontend",
      level: "Proficient",
      whatIUseItFor: "Creating scroll-driven and timeline-based motion, stagger entrances, magnetic interactions, and smooth reveals.",
      whereItAppears: "Interactive system pipeline diagrams, portfolio hero transitions, and algorithm step visualizers.",
      projectIds: ["portfolio", "nova-ai"],
      badgeColor: "#10B981"
    },
    {
      id: "dom-apis",
      name: "DOM APIs",
      category: "Frontend",
      level: "Advanced",
      whatIUseItFor: "Direct manipulation of browser nodes, IntersectionObserver for scroll spy, ResizeObserver, and canvas rendering.",
      whereItAppears: "Interactive algorithm visualizer, custom cursor tracker, and dynamic code sandbox.",
      projectIds: ["portfolio", "dsa-engine"],
      badgeColor: "#EC4899"
    },
    {
      id: "html5-css3",
      name: "HTML5 & Tailwind CSS",
      category: "Frontend",
      level: "Advanced",
      whatIUseItFor: "Structuring accessible semantic markup, fluid responsive typography, cyber-editorial tokens, and modern layouts.",
      whereItAppears: "Across all projects, interactive case studies, and responsive dashboards.",
      projectIds: ["nova-ai", "skillforge-ai", "drive-storage"],
      badgeColor: "#38BDF8"
    },

    // Backend
    {
      id: "nodejs",
      name: "Node.js",
      category: "Backend",
      level: "Advanced",
      whatIUseItFor: "Building high-throughput backend services, non-blocking asynchronous event loops, and file streaming servers.",
      whereItAppears: "Drive storage backend, Nova AI proxy server, and Sheriyans internship micro-services.",
      projectIds: ["drive-storage", "nova-ai", "sheriyans-apis"],
      badgeColor: "#22C55E"
    },
    {
      id: "expressjs",
      name: "Express.js",
      category: "Backend",
      level: "Advanced",
      whatIUseItFor: "Architecting modular MVC routers, error-handling middlewares, rate limiters, and RESTful CRUD endpoints.",
      whereItAppears: "Sheriyans internship controller architecture and Drive secure file storage APIs.",
      projectIds: ["drive-storage", "sheriyans-apis"],
      badgeColor: "#9CA3AF"
    },
    {
      id: "rest-apis",
      name: "REST APIs",
      category: "Backend",
      level: "Advanced",
      whatIUseItFor: "Designing predictable HTTP endpoints, standard status codes (200, 201, 400, 401, 403, 404, 500), and JSON payloads.",
      whereItAppears: "All full-stack applications and third-party AI integration proxies.",
      projectIds: ["drive-storage", "skillforge-ai", "nova-ai"],
      badgeColor: "#8B5CF6"
    },
    {
      id: "jwt-auth",
      name: "JWT Authentication",
      category: "Backend",
      level: "Advanced",
      whatIUseItFor: "Implementing stateless authentication, bearer tokens, cookie/header storage, token refresh, and protected route guards.",
      whereItAppears: "Drive secure user authentication and Sheriyans session/logout handling flows.",
      projectIds: ["drive-storage", "sheriyans-apis"],
      badgeColor: "#EF4444"
    },

    // Database
    {
      id: "mongodb",
      name: "MongoDB & Mongoose",
      category: "Database",
      level: "Advanced",
      whatIUseItFor: "Designing flexible document schemas, nested folder hierarchies, indexing user collections, and aggregation pipelines.",
      whereItAppears: "Drive file storage metadata and SkillForge user skill progress records.",
      projectIds: ["drive-storage", "skillforge-ai"],
      badgeColor: "#10B981"
    },
    {
      id: "postgresql",
      name: "PostgreSQL & SQL",
      category: "Database",
      level: "Proficient",
      whatIUseItFor: "Writing relational schemas, foreign key constraints, normalized tables, and transactional queries with ACID compliance.",
      whereItAppears: "SkillForge benchmark evaluations and relational user account models.",
      projectIds: ["skillforge-ai"],
      badgeColor: "#3B82F6"
    },

    // AI / ML
    {
      id: "genai-llm",
      name: "Generative AI & LLM APIs",
      category: "AI / ML",
      level: "Advanced",
      whatIUseItFor: "Adding intelligent capabilities to full-stack products via Gemini SDK, OpenAI APIs, and multi-turn prompt pipelines.",
      whereItAppears: "Nova conversational assistant, SkillForge automated skill-gap analysis, and portfolio AI Twin.",
      projectIds: ["nova-ai", "skillforge-ai"],
      badgeColor: "#A855F7"
    },
    {
      id: "ai-chatbots",
      name: "AI Chatbots & Context Memory",
      category: "AI / ML",
      level: "Advanced",
      whatIUseItFor: "Designing conversational agents with streaming SSE responses, memory buffers, and token usage optimization.",
      whereItAppears: "Nova conversational assistant flagship and SkillForge interactive AI tutor.",
      projectIds: ["nova-ai", "skillforge-ai"],
      badgeColor: "#EC4899"
    },
    {
      id: "machine-learning",
      name: "Machine Learning Concepts",
      category: "AI / ML",
      level: "Core",
      whatIUseItFor: "Understanding supervised/unsupervised learning fundamentals, feature vectorization, similarity metrics, and clustering.",
      whereItAppears: "SkillForge skill benchmark vectors and academic ML projects.",
      projectIds: ["skillforge-ai"],
      badgeColor: "#6366F1"
    },
    {
      id: "prompt-engineering",
      name: "Prompt Engineering & Few-Shot",
      category: "AI / ML",
      level: "Advanced",
      whatIUseItFor: "Crafting structured JSON system prompts, guardrails, role prompting, and chain-of-thought guidance for consistent AI responses.",
      whereItAppears: "Nova reasoning loops, SkillForge skill gap synthesis, and live AI assistant.",
      projectIds: ["nova-ai", "skillforge-ai"],
      badgeColor: "#F43F5E"
    },

    // Computer Science
    {
      id: "dsa",
      name: "Data Structures & Algorithms",
      category: "Computer Science",
      level: "Advanced",
      whatIUseItFor: "Solving algorithmic problems using Arrays, Linked Lists, Stacks, Queues, Trees, Graphs, Sorting, and Dynamic Programming in C++.",
      whereItAppears: "Algorithmic problem solving repository and custom interactive DSA visualizer.",
      projectIds: ["dsa-engine"],
      badgeColor: "#14B8A6"
    },
    {
      id: "oop",
      name: "Object-Oriented Programming (OOP)",
      category: "Computer Science",
      level: "Advanced",
      whatIUseItFor: "Applying encapsulation, inheritance, polymorphism, and abstraction to write clean, reusable, modular code in C++ and JavaScript.",
      whereItAppears: "Backend controller designs and C++ data structures.",
      projectIds: ["dsa-engine", "sheriyans-apis"],
      badgeColor: "#8B5CF6"
    },
    {
      id: "dbms",
      name: "DBMS & Indexing",
      category: "Computer Science",
      level: "Proficient",
      whatIUseItFor: "Designing entity-relationship models, normalization (1NF, 2NF, 3NF, BCNF), indexing, and transaction management.",
      whereItAppears: "Drive database architecture and relational queries.",
      projectIds: ["drive-storage"],
      badgeColor: "#0EA5E9"
    },
    {
      id: "os-cn",
      name: "OS & Computer Networks",
      category: "Computer Science",
      level: "Proficient",
      whatIUseItFor: "Understanding concurrency, process scheduling, memory management, TCP/IP, HTTP/HTTPS handshake, and DNS resolution.",
      whereItAppears: "Client-server architecture designs and network request optimization.",
      projectIds: ["drive-storage", "nova-ai"],
      badgeColor: "#64748B"
    },

    // Tools
    {
      id: "git-github",
      name: "Git & GitHub",
      category: "Tools",
      level: "Advanced",
      whatIUseItFor: "Version control, branching strategies, collaborative workflows, commit hygiene, and code reviews.",
      whereItAppears: "All projects and team development repositories.",
      projectIds: ["nova-ai", "skillforge-ai", "drive-storage"],
      badgeColor: "#F97316"
    },
    {
      id: "postman",
      name: "Postman",
      category: "Tools",
      level: "Advanced",
      whatIUseItFor: "API testing, validating request/response schemas, testing JWT auth headers, and automating test collections.",
      whereItAppears: "Sheriyans internship backend validation and Drive API endpoints.",
      projectIds: ["sheriyans-apis", "drive-storage"],
      badgeColor: "#FF6C37"
    },
    {
      id: "vscode-npm",
      name: "VS Code & npm",
      category: "Tools",
      level: "Advanced",
      whatIUseItFor: "Modern development environment, dependency management, semantic debugging, and scripts automation.",
      whereItAppears: "Daily engineering workflow across all projects.",
      projectIds: ["portfolio", "nova-ai", "skillforge-ai", "drive-storage"],
      badgeColor: "#3B82F6"
    }
  ] as SkillItem[],

  projects: [
    {
      id: "nova-ai",
      tag: "FLAGSHIP PROJECT 01 — AI CONVERSATIONAL ASSISTANT",
      title: "NOVA — AI Conversational Assistant",
      shortTagline: "An intelligent conversational assistant integrated into a full-stack application with streaming responses, multi-turn memory, and context-aware reasoning.",
      category: "AI / Full-Stack",
      overview: "NOVA is a production-style conversational AI assistant built to demonstrate how modern Generative AI models can be seamlessly embedded inside a responsive full-stack web application. Rather than simply calling an API endpoint with raw text, NOVA features multi-turn conversation memory, real-time response streaming, structured error handling, tone configuration, and persistent chat sessions.",
      problem: "Standard web chatbots frequently suffer from disjointed conversational context, lack of persistent session storage, sluggish non-streaming user experiences, and brittle client-side API configurations where secrets are exposed.",
      solution: "Engineered a secure full-stack architecture with a Node.js/Express proxy that shields API credentials, streams tokens back to a custom React hook using Server-Sent Events/chunks, maintains conversation state in a MongoDB document store, and enforces structured system instructions for reliable responses.",
      features: [
        "Real-time token streaming with fluid typing animation and low latency",
        "Multi-turn conversational context retention across session queries",
        "Persistent chat history and session switcher with local & cloud sync",
        "Tone and personality switcher (Technical, Concise, Creative, Analytical)",
        "Prompt template presets for code debugging, architecture review, and summarization",
        "Graceful token truncation, rate-limit retry logic, and error boundary recovery",
        "Interactive system metrics display: token count, latency estimation, and API health"
      ],
      architectureNodes: [
        {
          name: "USER CLIENT",
          role: "Frontend UI",
          tech: "React 19 / Next.js + Motion",
          details: "Captures user input, handles streaming chunks via custom readable stream hook, renders rich markdown and syntax-highlighted code blocks."
        },
        {
          name: "BACKEND API",
          role: "Gateway & Proxy",
          tech: "Node.js + Express.js",
          details: "Validates input schemas, enforces rate-limiting middleware, injects system prompt guardrails, and signs secure headers."
        },
        {
          name: "AI MODEL LAYER",
          role: "Inference Engine",
          tech: "Google GenAI SDK (Gemini 3.7 Flash)",
          details: "Processes multimodal/text context with temperature tuning and streaming response generation."
        },
        {
          name: "STATE PERSISTENCE",
          role: "Database",
          tech: "MongoDB / PostgreSQL",
          details: "Stores user conversation threads, message timestamps, token consumption metrics, and user feedback ratings."
        },
        {
          name: "RESPONSE STREAM",
          role: "Stream Dispatcher",
          tech: "ReadableStream / SSE",
          details: "Streams parsed markdown chunks back to the client interface for instant perceptual rendering."
        }
      ],
      architectureSummary: "USER → REACT / NEXT.JS → BACKEND API → AI MODEL → PROCESSING → DATABASE → STREAMED RESPONSE",
      aiIntegration: {
        role: "Core Reasoning & Conversational Engine",
        whyAI: "To provide contextual, non-scripted assistance, intelligent code explanations, and natural language understanding that adapts to user tone and technical depth.",
        modelOrApi: "Google GenAI SDK (gemini-3.7-flash) with structured system instructions and streaming",
        flow: [
          "1. User submits conversational prompt in chat interface",
          "2. Frontend formats history payload (last 6 turns) and invokes POST /api/chat",
          "3. Backend validates input, appends system instruction guardrails, and initiates Gemini stream",
          "4. Tokens stream chunk-by-chunk to the frontend in real time",
          "5. Complete turn is recorded in persistent database storage for session continuity"
        ]
      },
      techStack: {
        frontend: ["React 19", "Next.js", "Tailwind CSS", "Motion", "Lucide Icons"],
        backend: ["Node.js", "Express.js", "REST APIs", "CORS Middleware"],
        database: ["MongoDB", "Mongoose", "PostgreSQL"],
        ai: ["@google/genai SDK", "Gemini 3.7 Flash", "Prompt Engineering"],
        tools: ["Git", "Postman", "VS Code", "npm"]
      },
      challenges: [
        "Handling network interruptions mid-stream without corrupting the chat UI state or losing prior context.",
        "Balancing prompt token consumption while maintaining enough conversation history for coherent multi-turn reasoning.",
        "Ensuring smooth 60fps markdown rendering while high-speed token streams update the React component tree."
      ],
      learnings: [
        "Deepened mastery of asynchronous JavaScript ReadableStream APIs and Server-Sent Events architecture.",
        "Learned how to construct bulletproof system prompt guardrails that prevent hallucination and maintain consistent tone.",
        "Refined server-side secret management patterns to ensure zero client-side API key leakage."
      ],
      futureRoadmap: [
        "Implement RAG (Retrieval-Augmented Generation) with vector embeddings for querying user-uploaded PDF documents.",
        "Add voice input / speech-to-text integration using Gemini Live API.",
        "Support multi-agent mode with specialized agents for coding, research, and design."
      ],
      githubUrl: "https://github.com/ishitagupta/nova-ai-assistant",
      liveDemoUrl: "#live-demo-nova",
      metrics: [
        { label: "Latency", value: "<450ms" },
        { label: "Streaming", value: "Real-time" },
        { label: "Context Memory", value: "Multi-turn" }
      ],
      accentColor: "#A855F7"
    },
    {
      id: "skillforge-ai",
      tag: "FLAGSHIP PROJECT 02 — AI SKILL PLATFORM",
      title: "SKILLFORGE AI — Skill-Gap & Learning Engine",
      shortTagline: "An AI-powered skill-gap analyzer and personalized learning roadmap engine that bridges user aspirations with target tech industry roles.",
      category: "AI / Education Platform",
      overview: "SkillForge AI is an intelligent career and skill assessment platform designed to eliminate ambiguity in developer learning journeys. Users provide their current technical skill profile and select a desired career target (e.g., AI Full-Stack Engineer, Backend Architect, ML Specialist). The system runs a vector analysis to benchmark their skillset against current industry requirements, computes the exact competency gap, and uses Generative AI to synthesize a personalized, milestone-driven learning roadmap.",
      problem: "Self-directed developers often get stuck in 'tutorial hell' because existing curricula are static, one-size-fits-all, and disconnected from real-world role requirements.",
      solution: "Built an end-to-end full-stack platform that takes dynamic user assessments, runs an AI-powered gap analysis algorithm, generates tailored weekly milestone roadmaps, tracks progress via an interactive radar dashboard, and provides an embedded AI tutor for on-demand concept clarification.",
      features: [
        "Interactive skill diagnostic assessment across 10+ core engineering domains",
        "AI-driven skill gap computation comparing current vs. target role requirements",
        "Personalized week-by-week learning roadmap with curated projects and documentation links",
        "Interactive radar chart visualizing proficiency across Frontend, Backend, Database, AI, and CS",
        "Embedded AI Concept Tutor ready to explain roadmap milestones in digestible steps",
        "Progress tracking dashboard with completed milestone check-offs and streak counters",
        "JWT-authenticated user accounts with persistent roadmaps and history tracking"
      ],
      architectureNodes: [
        {
          name: "USER PROFILE",
          role: "Assessment Input",
          tech: "React 19 + Interactive Radar",
          details: "Captures user's self-assessed skills, proficiency scores, time commitment, and target engineering role."
        },
        {
          name: "SKILL BENCHMARK ENGINE",
          role: "Vector Analysis",
          tech: "Node.js / Python Services",
          details: "Maps user profile against real-world role benchmark datasets to calculate quantitative delta."
        },
        {
          name: "AI SYNTHESIS PIPELINE",
          role: "Generative Engine",
          tech: "Google GenAI / LLM APIs",
          details: "Transforms raw skill gap metrics into structured, sequenced weekly roadmap milestones and resource recommendations."
        },
        {
          name: "DATABASE & TRACKER",
          role: "Data Persistence",
          tech: "MongoDB / PostgreSQL",
          details: "Stores user roadmaps, completed milestones, score updates, and persistent learning journal entries."
        },
        {
          name: "PERSONALIZED ROADMAP UI",
          role: "Interactive Dashboard",
          tech: "React + Tailwind + Motion",
          details: "Renders an interactive milestone tree with progress bars, task checklists, and AI tutor modals."
        }
      ],
      architectureSummary: "USER PROFILE → SKILL DATA → AI ANALYSIS → SKILL GAP → RECOMMENDATIONS → PERSONALIZED ROADMAP",
      aiIntegration: {
        role: "Skill Gap Computation & Dynamic Roadmap Synthesis",
        whyAI: "Static rule-based engines cannot account for nuances in developer backgrounds or generate custom-sequenced project milestones tailored to specific timelines.",
        modelOrApi: "Google GenAI SDK with structured JSON output schemas for reliable roadmap generation",
        flow: [
          "1. User completes skill diagnostic matrix (e.g. React: 80%, Node: 60%, Docker: 10%)",
          "2. System matches against target role profile (e.g. Senior Full-Stack Engineer)",
          "3. Backend triggers Gemini API with structured JSON response schema requesting ordered milestone curriculum",
          "4. AI returns curated curriculum with estimated hours, project checkpoints, and resource links",
          "5. Dashboard updates radar chart and renders dynamic milestone roadmap"
        ]
      },
      techStack: {
        frontend: ["React 19", "Tailwind CSS", "Motion", "Recharts / SVG Visuals", "Lucide Icons"],
        backend: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
        database: ["MongoDB", "PostgreSQL", "Mongoose"],
        ai: ["@google/genai SDK", "Structured JSON Schema", "Prompt Engineering"],
        tools: ["Git", "GitHub", "Postman", "npm"]
      },
      challenges: [
        "Ensuring the AI generates strictly valid, schema-compliant JSON roadmaps without markdown wrap irregularities.",
        "Designing an intuitive visual representation for multi-dimensional skill data (radar charts and nested milestones).",
        "Optimizing MongoDB document schemas to support dynamic milestone completion states without slow query updates."
      ],
      learnings: [
        "Mastered structured JSON schema constraints in Generative AI SDKs for deterministic data outputs.",
        "Gained deep appreciation for data visualization techniques in communicating progress and skill gaps.",
        "Refined state synchronization patterns between client-side optimistic UI updates and backend database writes."
      ],
      futureRoadmap: [
        "Integrate automated GitHub repository scanning to evaluate developer skills directly from their code commits.",
        "Add peer benchmarking and study group matching algorithms.",
        "Support automated milestone quiz generation with instant AI code evaluation."
      ],
      githubUrl: "https://github.com/ishitagupta/skillforge-ai-platform",
      liveDemoUrl: "#live-demo-skillforge",
      metrics: [
        { label: "Accuracy", value: "98% Schema" },
        { label: "Roadmap Gen", value: "<2.1s" },
        { label: "Domains", value: "10+ Tech Paths" }
      ],
      accentColor: "#06B6D4"
    },
    {
      id: "drive-storage",
      tag: "FLAGSHIP PROJECT 03 — SECURE FULL-STACK APPLICATION",
      title: "DRIVE — Secure Cloud File Storage Platform",
      shortTagline: "A production-style secure cloud file storage and management platform with JWT authentication, protected routes, and role-based access control.",
      category: "Full-Stack / Security",
      overview: "DRIVE is a robust, production-style cloud storage system engineered to showcase industrial full-stack web engineering patterns. Built with Node.js, Express, MongoDB, and React, it incorporates secure JWT authentication in httpOnly cookies, password hashing with bcrypt, modular controller architectures, protected middleware route guards, nested folder trees, and multi-file drag-and-drop uploads.",
      problem: "Many entry-level full-stack applications take shortcuts with security: storing tokens in localStorage (vulnerable to XSS), omitting input sanitization, using monolithic route files, and lacking proper role-based authorization for sensitive resources.",
      solution: "Engineered a clean MVC architecture with dedicated controllers, robust middleware pipelines (auth verification, input validation, rate limiting), transactional file metadata in MongoDB, protected REST endpoints, and an interactive file management dashboard with real-time storage quota gauges.",
      features: [
        "Secure authentication pipeline: JWT token generation, verification, and revocation on logout",
        "Protected client & server routes preventing unauthorized access to file resources",
        "Nested folder directory navigation with breadcrumbs and item count aggregation",
        "Drag-and-drop file upload with progress bar, MIME type validation, and size limit checks",
        "File management operations: rename, move, download, delete, and tag labeling",
        "Storage quota analyzer visualizing used vs. remaining storage capacity",
        "Admin panel view for inspecting active sessions, total platform usage, and user roles"
      ],
      architectureNodes: [
        {
          name: "REACT CLIENT",
          role: "User Interface",
          tech: "React 19 + Tailwind CSS",
          details: "Renders folder hierarchy, handles multi-file drag-and-drop, displays storage telemetry, and attaches auth bearer tokens."
        },
        {
          name: "AUTH MIDDLEWARE",
          role: "Security Guard",
          tech: "JWT / bcrypt / express-validator",
          details: "Intercepts requests, validates JWT payload, checks user permissions, and blocks expired or tampered session tokens."
        },
        {
          name: "MODULAR CONTROLLERS",
          role: "Business Logic",
          tech: "Express.js REST APIs",
          details: "Decoupled controllers for Auth, FileOps, FolderOps, and Admin telemetry following strict single-responsibility principles."
        },
        {
          name: "METADATA DATABASE",
          role: "Record Storage",
          tech: "MongoDB / Mongoose",
          details: "Maintains indexed schemas for Users, Files (with size, hash, MIME, folder parent ID), and Audit Logs."
        },
        {
          name: "FILE STORAGE LAYER",
          role: "Object Store / Buffer",
          tech: "Multer / Cloud Storage Streams",
          details: "Handles file chunking, stream uploads, hash integrity verification, and safe download pipelines."
        }
      ],
      architectureSummary: "CLIENT → AUTHENTICATION → REST API → MODULAR SERVER → DATABASE → SECURE FILE STORAGE",
      aiIntegration: {
        role: "Intelligent File Tagging & Content Summary (Experimental)",
        whyAI: "To automatically categorize uploaded documents (PDFs, text notes, code files) and generate instant summaries for quick searching.",
        modelOrApi: "Gemini 3.7 Flash text extraction and categorization endpoint",
        flow: [
          "1. User uploads a text/code document to their Drive repository",
          "2. Background worker extracts text sample from the file buffer",
          "3. Backend queries Gemini API to generate smart tags (e.g. #Backend, #Finance, #React)",
          "4. Tags are stored in file metadata, enabling intelligent semantic search in the dashboard"
        ]
      },
      techStack: {
        frontend: ["React 19", "Tailwind CSS", "Motion", "Lucide Icons"],
        backend: ["Node.js", "Express.js", "JWT (jsonwebtoken)", "bcryptjs", "Multer"],
        database: ["MongoDB", "Mongoose ODM"],
        ai: ["Gemini 3.7 Flash (Smart Tagging)"],
        tools: ["Git", "Postman", "VS Code", "npm"]
      },
      challenges: [
        "Implementing clean recursive folder deletion in MongoDB without leaving orphaned child files.",
        "Safely streaming large file downloads with correct Content-Disposition headers and range requests.",
        "Structuring modular Express controllers to maintain clean separation between authentication, authorization, and data layers."
      ],
      learnings: [
        "Gained deep expertise in JWT authentication lifecycles, session security, and defense-in-depth API design.",
        "Learned how to construct scalable MongoDB schemas with indexing and populate methods for hierarchical data.",
        "Refined skills in error handling middlewares that return consistent, informative JSON payloads without leaking stack traces."
      ],
      futureRoadmap: [
        "Add end-to-end client-side encryption (E2EE) with Web Crypto API.",
        "Implement temporary shareable download links with expiration timestamps and password protection.",
        "Support real-time collaborative folder sharing with WebSocket change notifications."
      ],
      githubUrl: "https://github.com/ishitagupta/secure-drive-storage",
      liveDemoUrl: "#live-demo-drive",
      metrics: [
        { label: "Auth", value: "JWT + bcrypt" },
        { label: "Security", value: "RBAC Guarded" },
        { label: "Architecture", value: "Modular MVC" }
      ],
      accentColor: "#10B981"
    }
  ] as ProjectCaseStudy[],

  howIThink: [
    {
      stepNumber: "01",
      title: "FIND THE PROBLEM",
      subtitle: "Root Cause & Friction Identification",
      description: "Great software starts with clarity. I identify the exact human or engineering friction before writing a single line of code—analyzing what fails in current workflows.",
      keyDeliverables: ["Problem statement document", "Core friction metrics", "User pain-point mapping"]
    },
    {
      stepNumber: "02",
      title: "UNDERSTAND THE USER",
      subtitle: "Mental Models & Context Constraints",
      description: "I map the user's mental model: their technical literacy, speed requirements, context switching, and expected feedback loops to ensure intuitive product interaction.",
      keyDeliverables: ["User journey map", "Contextual constraints", "Success criteria definition"]
    },
    {
      stepNumber: "03",
      title: "DESIGN THE SYSTEM",
      subtitle: "Architecture, Data Flow & Contracts",
      description: "I draft the high-level system architecture: API schemas, database entity relations, authentication guards, and state management boundaries before building.",
      keyDeliverables: ["API route contracts", "Database ER schema", "System architecture diagram"]
    },
    {
      stepNumber: "04",
      title: "BUILD THE FRONTEND",
      subtitle: "Responsive UI, Accessibility & Motion",
      description: "I develop the frontend with modern component trees, fluid typography, responsive layouts, tactile micro-interactions, and accessible semantic markup.",
      keyDeliverables: ["React component hierarchy", "Tailwind styling tokens", "Motion transition states"]
    },
    {
      stepNumber: "05",
      title: "BUILD THE BACKEND",
      subtitle: "Modular Controllers & Robust Middleware",
      description: "I construct the server logic: decoupled controller functions, JWT auth middleware, request validation, error boundaries, and rate limiting.",
      keyDeliverables: ["Express RESTful endpoints", "JWT auth middlewares", "Input validation layers"]
    },
    {
      stepNumber: "06",
      title: "CONNECT THE DATABASE",
      subtitle: "Schema Indexing, Relations & Integrity",
      description: "I configure the database persistence layer (MongoDB/PostgreSQL), implement optimized indexing, define relational constraints, and verify query performance.",
      keyDeliverables: ["Mongoose/SQL models", "Index definitions", "CRUD query benchmarks"]
    },
    {
      stepNumber: "07",
      title: "INTEGRATE AI",
      subtitle: "Intelligence Layer & Guardrails",
      description: "I inject AI capabilities where they create actual value: designing structured system prompts, streaming token handlers, fallback resilience, and vector contexts.",
      keyDeliverables: ["Prompt guardrails", "Streaming API pipelines", "Fallback response engine"]
    },
    {
      stepNumber: "08",
      title: "TEST",
      subtitle: "Edge Cases, Security & Performance",
      description: "I test endpoints with Postman, verify token expiry, simulate network failures, inspect UI responsiveness across device breakpoints, and audit accessibility.",
      keyDeliverables: ["Postman API collection", "Error boundary verification", "Lighthouse audit"]
    },
    {
      stepNumber: "09",
      title: "DEPLOY",
      subtitle: "Environment Config & Production Build",
      description: "I bundle the production assets, configure environment secrets securely on the server, ensure static caching, and deploy with zero downtime.",
      keyDeliverables: ["Production build optimization", "Secret environment variables", "Live health checks"]
    },
    {
      stepNumber: "10",
      title: "ITERATE",
      subtitle: "Telemetry, Feedback & Continuous Polish",
      description: "I analyze user interactions, gather feedback, optimize bottlenecks, and continuously refine the product experience based on real-world usage.",
      keyDeliverables: ["User telemetry logs", "Performance optimization", "Version 2.0 feature backlog"]
    }
  ] as HowIThinkStep[],

  aiCapabilities: [
    {
      id: "conversational",
      title: "Conversational Interfaces",
      description: "Transforming complex multi-step user workflows into natural, fluid language dialogues with multi-turn context retention.",
      productImpact: "Reduces user onboarding friction and enables intuitive self-service support.",
      badge: "NATURAL DIALOGUE",
      exampleInMyWork: "Nova Conversational Assistant with real-time SSE streaming & persona tuning."
    },
    {
      id: "personalization",
      title: "Hyper-Personalization",
      description: "Dynamically tailoring application interfaces, pacing, and curricula according to unique user behavior and proficiency.",
      productImpact: "Increases user retention and eliminates one-size-fits-all learning fatigue.",
      badge: "DYNAMIC ADAPTATION",
      exampleInMyWork: "SkillForge AI tailored learning milestones generated from diagnostic scores."
    },
    {
      id: "recommendations",
      title: "Intelligent Recommendations",
      description: "Predicting the highest-value next actions, resources, and tools based on multi-dimensional user telemetry.",
      productImpact: "Guides users directly toward their goals without cognitive overload.",
      badge: "PREDICTIVE CURATION",
      exampleInMyWork: "SkillForge resource curation matching specific skill gap deficiencies."
    },
    {
      id: "summarization",
      title: "Contextual Summarization",
      description: "Distilling dense documents, codebases, and meeting transcripts into actionable, high-signal executive briefs.",
      productImpact: "Saves hours of manual scanning and accelerates team decision making.",
      badge: "HIGH-SIGNAL EXTRACTION",
      exampleInMyWork: "Drive smart document tagging and instant content extraction."
    },
    {
      id: "intelligent-search",
      title: "Semantic & Vector Search",
      description: "Finding relevant files, documentation, and entities based on conceptual meaning rather than exact keyword matches.",
      productImpact: "Enables discovery across messy, unstructured enterprise data repositories.",
      badge: "SEMANTIC DISCOVERY",
      exampleInMyWork: "Nova knowledge retrieval and prompt preset discovery matrix."
    },
    {
      id: "content-generation",
      title: "Structured Content Generation",
      description: "Generating deterministic, schema-compliant JSON payloads for automated workflows, roadmaps, and code templates.",
      productImpact: "Powers automated data pipelines without manual authoring bottlenecks.",
      badge: "SCHEMA-BOUND AI",
      exampleInMyWork: "SkillForge structured JSON schema enforcement with zero formatting drift."
    },
    {
      id: "skill-analysis",
      title: "Algorithmic Skill Analysis",
      description: "Evaluating developer code and self-assessments against real-world engineering benchmarks to calculate skill deltas.",
      productImpact: "Provides objective career clarity and targeted upskilling pathways.",
      badge: "VECTOR BENCHMARKING",
      exampleInMyWork: "SkillForge AI multi-axis competency gap calculation engine."
    },
    {
      id: "automation",
      title: "Autonomous Workflows",
      description: "Orchestrating multi-step background tasks, automated validation, and status reporting with minimal human intervention.",
      productImpact: "Automates repetitive engineering chores while keeping human engineers in the loop.",
      badge: "SYSTEM ORCHESTRATION",
      exampleInMyWork: "Portfolio AI assistant background routing and intelligent error recovery."
    }
  ] as AIUseCase[],

  dsaVisualizations: [
    {
      id: "binary-search",
      name: "Binary Search",
      category: "Searching / Divide & Conquer",
      timeComplexity: "O(log N)",
      spaceComplexity: "O(1)",
      description: "Efficiently locates a target value within a sorted array by repeatedly dividing the search interval in half. Compares the target with the middle element to eliminate half of the remaining elements in each step.",
      initialArray: [2, 5, 8, 12, 16, 23, 38, 56, 72, 91],
      targetValue: 23,
      cppCode: `// Binary Search in C++
int binarySearch(const vector<int>& arr, int target) {
    int low = 0, high = arr.size() - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == target) return mid; // Found target!
        if (arr[mid] < target) low = mid + 1; // Search right
        else high = mid - 1; // Search left
    }
    return -1; // Target not present
}`
    },
    {
      id: "merge-sort",
      name: "Merge Sort",
      category: "Sorting / Divide & Conquer",
      timeComplexity: "O(N log N)",
      spaceComplexity: "O(N)",
      description: "A stable divide-and-conquer sorting algorithm. Recursively divides the unsorted list into N sublists until each contains 1 element, then repeatedly merges sublists to produce new sorted sublists.",
      initialArray: [38, 27, 43, 3, 9, 82, 10, 19],
      cppCode: `// Merge Sort Helper in C++
void merge(vector<int>& arr, int l, int m, int r) {
    vector<int> left(arr.begin() + l, arr.begin() + m + 1);
    vector<int> right(arr.begin() + m + 1, arr.begin() + r + 1);
    int i = 0, j = 0, k = l;
    while (i < left.size() && j < right.size()) {
        if (left[i] <= right[j]) arr[k++] = left[i++];
        else arr[k++] = right[j++];
    }
    while (i < left.size()) arr[k++] = left[i++];
    while (j < right.size()) arr[k++] = right[j++];
}`
    },
    {
      id: "bfs-graph",
      name: "Breadth-First Search (BFS)",
      category: "Graph Traversal",
      timeComplexity: "O(V + E)",
      spaceComplexity: "O(V)",
      description: "Explores a graph or tree level by level using a queue data structure. Finds the shortest path in unweighted graphs and guarantees all vertices at distance k are visited before distance k+1.",
      initialArray: [1, 2, 3, 4, 5, 6, 7, 8],
      targetValue: 6,
      cppCode: `// Breadth-First Search (BFS) in C++
void bfsTraversal(int startNode, const vector<vector<int>>& adj) {
    vector<bool> visited(adj.size(), false);
    queue<int> q;
    visited[startNode] = true;
    q.push(startNode);
    while (!q.empty()) {
        int u = q.front(); q.pop();
        // Process vertex u...
        for (int v : adj[u]) {
            if (!visited[v]) {
                visited[v] = true;
                q.push(v);
            }
        }
    }
}`
    }
  ] as AlgorithmVisualization[],

  experience: [
    {
      role: "Full Stack Developer Intern",
      company: "Sheriyans Private Limited",
      location: "Bhopal, India",
      period: "Nov 2025 – Feb 2026",
      type: "Internship",
      responsibilities: [
        "Designed and implemented production RESTful API endpoints with Express.js and Node.js for high-throughput web applications.",
        "Built secure JWT authentication pipelines, including bearer token verification, secure session tracking, and logout token invalidation.",
        "Engineered robust Delete APIs with cascade integrity checks, soft-delete flags, and transactional safety in database layers.",
        "Refactored monolithic route handlers into a modular controller architecture, dramatically increasing code maintainability and testability.",
        "Conducted end-to-end debugging sessions with Postman, systematically identifying and resolving data inconsistencies across client-server payloads.",
        "Collaborated with senior engineers on database schema normalization and performance tuning for MongoDB collections."
      ],
      technologies: ["Node.js", "Express.js", "JavaScript", "MongoDB", "JWT Auth", "REST APIs", "Postman", "Git"],
      highlights: [
        "Modular Controller Architecture transition",
        "Zero-leak JWT authentication lifecycle",
        "High-reliability CRUD & Delete APIs"
      ]
    }
  ] as ExperienceItem[],

  featuredRepositories: [
    {
      name: "nova-ai-assistant",
      description: "Intelligent full-stack conversational AI assistant with streaming token responses, multi-turn memory buffers, and persona presets.",
      technologies: ["React", "Next.js", "Node.js", "Gemini SDK", "MongoDB"],
      stars: 48,
      forks: 14,
      githubUrl: "https://github.com/ishitagupta/nova-ai-assistant",
      updatedAt: "Active",
      isFlagship: true
    },
    {
      name: "skillforge-ai-platform",
      description: "AI-powered skill gap analyzer and personalized learning roadmap synthesizer with interactive radar telemetry.",
      technologies: ["React", "Express", "Node.js", "Generative AI", "PostgreSQL"],
      stars: 62,
      forks: 19,
      githubUrl: "https://github.com/ishitagupta/skillforge-ai-platform",
      updatedAt: "Active",
      isFlagship: true
    },
    {
      name: "secure-drive-storage",
      description: "Production-grade cloud file storage platform with JWT authentication, role-based access control, and nested folder trees.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Multer"],
      stars: 55,
      forks: 16,
      githubUrl: "https://github.com/ishitagupta/secure-drive-storage",
      updatedAt: "Active",
      isFlagship: true
    },
    {
      name: "cpp-dsa-mastery",
      description: "Comprehensive repository of Data Structures & Algorithms implementations in modern C++, including trees, graphs, and dynamic programming.",
      technologies: ["C++", "DSA", "Algorithms", "STL", "Problem Solving"],
      stars: 84,
      forks: 28,
      githubUrl: "https://github.com/ishitagupta/cpp-dsa-mastery",
      updatedAt: "Active",
      isFlagship: false
    }
  ] as RepositoryItem[]
};
