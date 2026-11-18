export interface NavItem {
  label: string;
  href: string;
}

export const SITE_NAVIGATION: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#tech-stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const DEVELOPER_PROFILE = {
  name: 'Edvaldo João',
  title: 'Full Stack Developer',
  specialization: 'Specialized in Backend Development',
  headline: 'Building reliable software. Turning ideas into reality.',
  heroIntro:
    'I am a software developer with a background in Information Systems Management. Since 2022, I have focused on turning ideas into real software products through robust, reusable, and well-structured Full Stack and Backend engineering.',
  specifications: [
    {
      label: 'Primary Focus',
      value: 'Backend Architecture & REST APIs',
    },
    {
      label: 'Core Stack',
      value: 'C# · ASP.NET Core · TypeScript · Vue.js',
    },
    {
      label: 'Production Work',
      value: 'GlowApp (Frontend Developer)',
    },
    {
      label: 'Academic Path',
      value: 'IPIL Graduate · UCAN Computer Engineering',
    },
  ],
};

export const ABOUT_CONTENT = {
  paragraphs: [
    'I am a software developer with a background in Information Systems Management, graduated from IPIL. My interest in programming began in 2022 when I discovered the endless possibilities of transforming ideas into real-world applications.',
    'Currently, I focus on Full Stack Development, specializing in Backend Development, with the goal of building robust, reusable, and well-structured software solutions while continuously growing as a software engineer.',
  ],
  pillars: [
    {
      index: '01',
      title: 'Programming Origin (2022)',
      detail:
        'Started learning programming in 2022, driven by turning practical ideas into functional software products.',
    },
    {
      index: '02',
      title: 'Academic Foundation',
      detail:
        'Completed Information Systems Management at IPIL and currently pursuing Computer Engineering at UCAN.',
    },
    {
      index: '03',
      title: 'Engineering Motivation',
      detail:
        'Committed to clean separation of concerns, SOLID design, and reusable architecture built to last.',
    },
    {
      index: '04',
      title: 'Current Focus',
      detail:
        'Full Stack product delivery with deep specialization in C#, ASP.NET Core, relational databases, and API security.',
    },
  ],
};
