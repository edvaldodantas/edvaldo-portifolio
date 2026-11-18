export type ProjectStatus = 'In Production' | 'In Development' | 'Discontinued';

export type ProjectTier = 'featured' | 'secondary';

export interface ProjectScreenshot {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectTeamMember {
  name: string;
  role: string;
}

export interface Project {
  id: string;
  name: string;
  category: string;
  status: ProjectStatus;
  tier: ProjectTier;
  role: string;
  description: string;
  highlights?: string[];
  technologies: string[];
  liveUrl: string | null;
  liveLabel?: string;
  githubUrl: string | null;
  team?: ProjectTeamMember[];
  achievement?: string;
  duration?: string;
  media: {
    screenshots: ProjectScreenshot[];
    videoUrl: string | null;
    iframeUrl: string | null;
    iframeAspectRatio?: '16/9' | '4/3' | '9/16';
    placeholderNote: string;
  };
}

export interface TechCategory {
  id: string;
  title: string;
  subtitle: string;
  iconName:
    | 'server'
    | 'layout'
    | 'database'
    | 'smartphone'
    | 'layers'
    | 'wrench';
  items: string[];
}

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  employmentType: string;
  period: string;
  isCurrent?: boolean;
  responsibilities: string[];
}

export interface EducationEntry {
  id: string;
  institution: string;
  acronym?: string;
  degree: string;
  period: string;
  status: 'Completed' | 'In Progress';
}

export interface ResumeConfig {
  pdfUrl: string | null;
  fileName: string;
  lastUpdatedLabel: string;
  placeholderMessage: string;
}

export interface SocialLinkItem {
  id: string;
  platform: string;
  handle: string;
  url: string | null;
  placeholderLabel?: string;
}

export interface ContactConfig {
  phone: {
    display: string;
    dialValue: string;
  };
  whatsapp: {
    display: string;
    number: string;
  };
  socials: SocialLinkItem[];
}
