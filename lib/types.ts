// TypeScript interfaces for portfolio data

export interface ProjectLink {
  demo?: string;
  github?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  links: ProjectLink;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Highlight {
  label: string;
  value: string;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
