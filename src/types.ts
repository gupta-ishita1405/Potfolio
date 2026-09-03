export type SkillCategory =
  | "All"
  | "Languages"
  | "Frontend"
  | "Backend"
  | "Database"
  | "AI / ML"
  | "Computer Science"
  | "Tools";

export interface SkillItem {
  id: string;
  name: string;
  category: SkillCategory;
  level: "Proficient" | "Advanced" | "Core";
  whatIUseItFor: string;
  whereItAppears: string;
  projectIds: string[];
  tag?: string;
  badgeColor?: string;
}

export interface ProjectArchitectureNode {
  name: string;
  role: string;
  tech: string;
  details: string;
}

export interface ProjectCaseStudy {
  id: string;
  tag: string;
  title: string;
  shortTagline: string;
  category: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  architectureNodes: ProjectArchitectureNode[];
  architectureSummary: string;
  aiIntegration: {
    role: string;
    whyAI: string;
    modelOrApi: string;
    flow: string[];
  };
  techStack: {
    frontend: string[];
    backend: string[];
    database: string[];
    ai: string[];
    tools: string[];
  };
  challenges: string[];
  learnings: string[];
  futureRoadmap: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  metrics?: { label: string; value: string }[];
  accentColor: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  responsibilities: string[];
  technologies: string[];
  highlights: string[];
}

export interface HowIThinkStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  keyDeliverables: string[];
  codeSnippet?: string;
}

export interface AIUseCase {
  id: string;
  title: string;
  description: string;
  productImpact: string;
  badge: string;
  exampleInMyWork: string;
}

export interface RepositoryItem {
  name: string;
  description: string;
  technologies: string[];
  stars: number;
  forks: number;
  githubUrl: string;
  updatedAt: string;
  isFlagship?: boolean;
}

export interface AlgorithmVisualization {
  id: string;
  name: string;
  category: string;
  timeComplexity: string;
  spaceComplexity: string;
  description: string;
  cppCode: string;
  initialArray: number[];
  targetValue?: number;
}

export type SoftThemeId = 
  | "blush" 
  | "matcha" 
  | "lavender" 
  | "peach" 
  | "seafoam" 
  | "cashmere";

export type UIDesignMode = 
  | "bento" 
  | "editorial" 
  | "scrapbook" 
  | "frosted";

export type AmbientEffectType = 
  | "petals" 
  | "bubbles" 
  | "sparkles" 
  | "matcha" 
  | "stars" 
  | "none";

export interface SoftColorPalette {
  id: SoftThemeId;
  name: string;
  subtitle: string;
  emoji: string;
  colors: {
    canvas: string;
    canvasAlt: string;
    cardBg: string;
    cardBorder: string;
    primary: string;
    primaryLight: string;
    primaryDark: string;
    secondary: string;
    accent: string;
    highlight: string;
    text: string;
    textMuted: string;
    softPillBg: string;
    softPillText: string;
    glow: string;
  };
  swatches: string[];
}

