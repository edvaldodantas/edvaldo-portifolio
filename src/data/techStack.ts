import type { TechCategory } from '@/src/lib/types';

export const TECH_STACK_CATEGORIES: TechCategory[] = [
  {
    id: 'backend',
    title: 'Backend Development',
    subtitle: 'APIs, domain logic, security, and dependency management',
    iconName: 'server',
    items: [
      'C#',
      'ASP.NET Core',
      'Entity Framework Core',
      'JWT',
      'REST APIs',
      'Dependency Injection',
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    subtitle: 'Component architecture, type safety, and responsive interfaces',
    iconName: 'layout',
    items: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'Next.js',
      'React',
      'Vue.js',
      'Tailwind CSS',
    ],
  },
  {
    id: 'databases',
    title: 'Databases & Backend Services',
    subtitle: 'Relational persistence and managed cloud services',
    iconName: 'database',
    items: ['PostgreSQL', 'Firebase'],
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    subtitle: 'Cross-platform mobile application interfaces',
    iconName: 'smartphone',
    items: ['React Native'],
  },
  {
    id: 'architecture',
    title: 'Architecture & Software Engineering',
    subtitle: 'Maintainable code structure and design principles',
    iconName: 'layers',
    items: [
      'MVC',
      'Feature-Based Architecture',
      'Separation of Concerns',
      'SOLID Principles',
    ],
  },
  {
    id: 'tools',
    title: 'Tools & DevOps',
    subtitle: 'Version control, containerization, and engineering environments',
    iconName: 'wrench',
    items: [
      'Git',
      'GitHub',
      'Git Flow',
      'Docker',
      'Visual Studio Code',
      'Visual Studio',
    ],
  },
];
