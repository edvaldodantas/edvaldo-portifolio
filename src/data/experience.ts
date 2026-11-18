import type {
  EducationEntry,
  ExperienceEntry,
  ResumeConfig,
} from '@/src/lib/types';

export const EXPERIENCE_ENTRIES: ExperienceEntry[] = [
  {
    id: 'glowapp-contract',
    company: 'GlowApp',
    role: 'Frontend Developer',
    employmentType: 'Contract',
    period: 'February 22, 2026 — Present',
    isCurrent: true,
    responsibilities: [
      'Development of frontend interfaces using Vue.js and Tailwind CSS.',
      'Continued development and improvement of the GlowApp platform.',
      'Maintaining the same core frontend responsibilities assumed during the initial development of the product.',
    ],
  },
  {
    id: 'glowapp-internship',
    company: 'GlowApp',
    role: 'Frontend Developer Intern',
    employmentType: 'Remote Internship',
    period: 'November 4, 2025 — January 10, 2026',
    isCurrent: false,
    responsibilities: [
      'Developed application interfaces using Vue.js and Tailwind CSS.',
      'Participated in the project from its foundation.',
      'Contributed to the initial architecture of the application.',
      'Participated in the development and launch of the platform.',
      'Worked with Firebase services.',
    ],
  },
];

export const EDUCATION_ENTRIES: EducationEntry[] = [
  {
    id: 'ucan',
    institution: 'Universidade Católica de Angola',
    acronym: 'UCAN',
    degree: "Bachelor's Degree in Computer Engineering",
    period: 'October 2026 — Present',
    status: 'In Progress',
  },
  {
    id: 'ipil',
    institution: 'Instituto Politécnico Industrial de Luanda',
    acronym: 'IPIL',
    degree: 'Technical High School Diploma in Information Systems Management',
    period: 'September 2022 — July 2026',
    status: 'Completed',
  },
];

/**
 * Resume / CV Configuration
 * Once your CV PDF is placed in `public/documents/`, update `pdfUrl` below
 * (for example: '/documents/Edvaldo_Joao_CV.pdf').
 */
export const RESUME_CONFIG: ResumeConfig = {
  pdfUrl: null,
  fileName: 'Edvaldo-Joao-CV.pdf',
  lastUpdatedLabel: 'Awaiting PDF upload',
  placeholderMessage:
    'The CV PDF will be embedded here once uploaded to public/documents/. Open-in-tab and direct download actions will activate automatically.',
};
