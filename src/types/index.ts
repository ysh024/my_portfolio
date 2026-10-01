export type ProjectCategory = "All" | "Websites" | "Web Apps" | "Integrations";

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: "Websites" | "Web Apps" | "Integrations";
  shortDescription: string;
  description: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  integrations: string[];
  challenges?: string[];
  learnings?: string[];
  thumbnail: string;
  heroImage: string;
  liveUrl?: string;
  githubUrl?: string;
  year: string;
  featured: boolean;
  metrics?: { label: string; value: string }[];
  status: "Completed" | "In Development" | "Maintained";
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  iconName: string;
  inclusions: string[];
  deliverables: string[];
  popular?: boolean;
  timeline: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  category: "Frontend" | "Integrations" | "DevOps / Tools" | "AI-Assisted Development";
  level: "Advanced" | "Proficient";
  description?: string;
  highlight?: boolean;
}


export interface SiteConfig {
  name: string;
  title: string;
  role: string;
  tagline: string;
  location: string;
  timezone: string;
  availability: string;
  responseTime: string;
  email: string;
  whatsappNumber: string;
  whatsappLink: string;
  github: string;
  linkedin: string;
  twitter: string;
  bio: string;
  aboutStory: string[];
  philosophy: { title: string; desc: string }[];
  aiWorkflowSteps: { step: string; title: string; description: string }[];
  stats: { label: string; value: string }[];
}

export interface NavItem {
  label: string;
  href: string;
}
