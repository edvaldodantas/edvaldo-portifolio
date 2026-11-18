import type { Project } from '@/src/lib/types';

/**
 * Centralized project data.
 * To add screenshots, video demos, iframe embeds, or repository URLs later:
 * 1. Place image/video files under `public/projects/<project-id>/`
 * 2. Add `{ src: '/projects/...', alt: '...', caption: '...' }` to `media.screenshots`
 * 3. Set `media.videoUrl`, `media.iframeUrl`, `githubUrl`, or `liveUrl` as needed.
 */
export const PROJECTS: Project[] = [
  {
    id: 'glowapp',
    name: 'GlowApp',
    category: 'Beauty Services Platform',
    status: 'In Production',
    tier: 'featured',
    role: 'Frontend Developer',
    description:
      'A mobile-first beauty services platform connecting clients with beauty professionals. Users can discover services, explore professional portfolios, compare pricing, and manage appointments—empowering beauty professionals with visibility and booking tools.',
    highlights: [
      'Participated from the project foundation, contributing to initial frontend architecture, development, and production launch.',
      'Real commercial product actively operating in the market.',
    ],
    technologies: ['Vue.js', 'Tailwind CSS'],
    liveUrl: 'https://www.yourglowapp.com',
    liveLabel: 'Visit Live Website',
    githubUrl: null,
    media: {
      screenshots: [],
      videoUrl: null,
      iframeUrl: null,
      iframeAspectRatio: '16/9',
      placeholderNote:
        'Reserved for GlowApp interface screenshots, mobile booking flow gallery, or live embed.',
    },
  },
  {
    id: 'eventus',
    name: 'Eventus',
    category: 'Local Events Platform',
    status: 'In Development',
    tier: 'featured',
    role: 'Backend Developer (.NET)',
    description:
      'A mobile-first platform centralizing the discovery and management of local events in Angola. Connects attendees, organizers, and venues with event discovery, attendance confirmation, publication interactions, and personalized notifications.',
    highlights: [
      'Architected the .NET backend system, relational PostgreSQL data layer, Redis caching, and Firebase integration.',
      'Initially built as a collaborative 5-month final academic project with the vision of becoming a professional platform.',
    ],
    technologies: [
      'C#',
      'ASP.NET Core',
      'React Native',
      'Next.js',
      'PostgreSQL',
      'Firebase',
      'Redis',
    ],
    liveUrl: null,
    githubUrl: null,
    duration: '~5 months collaborative development',
    achievement: 'Final academic project graded 18/20',
    team: [
      { name: 'Edvaldo Dantas C. João', role: 'Backend' },
      { name: 'Victor Makuka Eduardo Nsingi', role: 'Frontend' },
    ],
    media: {
      screenshots: [],
      videoUrl: null,
      iframeUrl: null,
      iframeAspectRatio: '16/9',
      placeholderNote:
        'Reserved for Eventus architecture diagrams, mobile app screenshots, or interactive walkthrough demo.',
    },
  },
  {
    id: 'authlibrary',
    name: 'AuthLibrary',
    category: 'ASP.NET Core Authentication Library',
    status: 'Discontinued',
    tier: 'secondary',
    role: 'Library Developer',
    description:
      'A C# class library built to streamline authentication and authorization setup in ASP.NET Core Web APIs through reusable services and clean dependency injection extension methods.',
    highlights: [
      'Discontinued project — archived and no longer actively maintained.',
    ],
    technologies: ['C#', 'ASP.NET Core', 'JWT', 'Dependency Injection'],
    liveUrl: null,
    githubUrl: null,
    media: {
      screenshots: [],
      videoUrl: null,
      iframeUrl: null,
      iframeAspectRatio: '16/9',
      placeholderNote:
        'Reserved for library API usage documentation captures or archived package demos.',
    },
  },
  {
    id: 'premio-nacional-imobiliario-2025',
    name: 'Prémio Nacional Imobiliário 2025',
    category: 'Online Voting Platform',
    status: 'Discontinued',
    tier: 'secondary',
    role: 'Backend Developer',
    description:
      'An online voting platform built for the National Real Estate Awards of Angola, supporting online ballot submission, candidate and category administration, and real-time voting results.',
    highlights: [
      'Discontinued project — created for the 2025 awards cycle and no longer actively maintained.',
    ],
    technologies: ['C#', 'ASP.NET Core', 'Vue.js', 'JavaScript'],
    liveUrl: null,
    githubUrl: null,
    media: {
      screenshots: [],
      videoUrl: null,
      iframeUrl: null,
      iframeAspectRatio: '16/9',
      placeholderNote:
        'Reserved for voting portal screenshots, results dashboard captures, or archived demo.',
    },
  },
];
