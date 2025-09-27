import { StaticImageData } from 'next/image';
import { IconType } from 'react-icons';
import { RiNextjsFill } from 'react-icons/ri';
import { SiAstro, SiDocker, SiNestjs, SiPython, SiVorondesign } from 'react-icons/si';
import Infosys from '../public/infosys.png';
import Pwc from '../public/pwc.png';

interface SkillProps {
  name: string;
  icon: IconType;
  featured: boolean;
}

const SKILLS = {
  nextjs: { name: 'Next.js', icon: RiNextjsFill, featured: true } as SkillProps,
  nestjs: { name: 'NestJS', icon: SiNestjs, featured: true } as SkillProps,
  astrojs: { name: 'Astro.js', icon: SiAstro, featured: true } as SkillProps,
  python: { name: 'Python', icon: SiPython, featured: false } as SkillProps,
  docker: { name: 'Docker', icon: SiDocker, featured: true } as SkillProps,
  designPatterns: { name: 'Design Patterns', icon: SiVorondesign, featured: false } as SkillProps,
} as const;

// group the skills in some way (like fe, be, db, ai, python-package, devops, other - design)
export const FRONTEND_SKILL_GROUP = [SKILLS.nextjs, SKILLS.astrojs];
export const BACKEND_SKILL_GROUP = [SKILLS.nestjs, SKILLS.python];
export const DEVOPS_SKILL_GROUP = [SKILLS.docker];
export const MISC_SKILL_GROUP = [SKILLS.designPatterns];

interface Experience {
  company_name: string;
  company_logo: StaticImageData;
  duration: string;
  designation: string;
  workDescription: string;
}

export const EXPERIENCES: Experience[] = [
  {
    company_name: 'Infosys',
    company_logo: Infosys,
    duration: '2015 - 2022', // todo
    designation: 'Technology Analyst',
    //todo
    workDescription:
      'I help build and scale Google Photos. Increased throughput of our primary services by 70%. Migrated backend service from Java to Go. Also helped make it look prettier.',
  },
  {
    company_name: 'Pwc',
    company_logo: Pwc,
    duration: '2022 - Present',
    designation: 'Senior Analyst',
    workDescription:
      'I help build and scale Google Photos. Increased throughput of our primary services by 70%. Migrated backend service from Java to Go. Also helped make it look prettier.',
  },
];

export interface Project {
  /**
   * uuid v4 - https://www.uuidgenerator.net/
   */
  id: string;
  title: string;
  small_description: string;
  /**
   * Make sure min 5 and max 8 projects are marked 'featured'
   */
  featured: boolean;
  github_repo_name: string;
  github_image_path: string;
  demo_link: string | null;
  /**
   * top ... least hot-skill
   * e.g. nextjs, front-end, ts
   */
  tools: string[];
}
export const PROJECTS: Record<string, Project> = {
  '12987f59-1dc2-4df8-9119-a04ebca76061': {
    id: '12987f59-1dc2-4df8-9119-a04ebca76061',
    title: 'Motion Framer Animation',
    small_description:
      'This website showcases the capabilities of the Framer Motion library in React. It features interactive examples and animations that demonstrate key concepts like transitions, gestures, and layout animations.',
    featured: true,
    github_repo_name: 'animation-next',
    github_image_path: 'public/page_home.png',
    demo_link: 'https://animation-next-lemon.vercel.app',
    tools: ['Motion', 'Front-End', 'TS'],
  },
  '57d94d05-b100-413f-af2b-3214d12980ec': {
    id: '57d94d05-b100-413f-af2b-3214d12980ec',
    title: 'Design Patterns',
    small_description:
      'This project showcases all 23 Gang of Four (GoF) software design patterns implemented in JavaScript. It serves as a comprehensive reference for understanding and applying design principles in real-world development.',
    featured: true,
    github_repo_name: 'design-pattern-js',
    github_image_path: 'Design%20Patterns.png',
    demo_link: null,
    tools: ['Design Pattern', 'Dev Enabler', 'Programming', 'JS'],
  },
  'a3b2c1d4-e5f6-7890-ab12-cd34ef567890': {
    id: 'a3b2c1d4-e5f6-7890-ab12-cd34ef567890',
    title: 'TanStack Table Demo',
    small_description:
      'This website demonstrates TanStack Table features like multi-sorting, column reordering, row pinning, filtering (basic and advanced), column visibility, row selection, and pagination — showcasing its power for building interactive data grids.',
    featured: true,
    github_repo_name: 'table-next',
    github_image_path: 'public/page_home.png',
    demo_link: 'https://table-next-mauve.vercel.app/',
    tools: ['TanStack', 'Front-End', 'TS'],
  },
  'b4c5d6e7-f890-1234-5678-9abcdef01234': {
    id: 'b4c5d6e7-f890-1234-5678-9abcdef01234',
    title: 'Blog Astro',
    small_description:
      'A developer blog built with Astro.js, featuring usage guides, troubleshooting tips, and feature insights on libraries and frameworks. Topics span JavaScript, Python, and data science, offering practical help for developers at every level.',
    featured: true,
    github_repo_name: 'blog-astro',
    github_image_path: 'public/page_home.png',
    demo_link: 'https://blog-astro-dun.vercel.app/',
    tools: ['Astro', 'Front-End', 'MarkDown'],
  },
  'c5d6e7f8-9012-3456-789a-bcdef0123456': {
    id: 'c5d6e7f8-9012-3456-789a-bcdef0123456',
    title: 'Collection of Cheats',
    small_description:
      "A comprehensive collection of easy-to-navigate cheat-sheets covering a wide range of topics — from programming languages like JavaScript and Python, to Data Science tools, and developer-enablers. Whether you're coding, debugging, or deploying, this site provides quick, practical references to boost your productivity and streamline your development workflow.",
    featured: false,
    github_repo_name: 'cheats-starlight',
    github_image_path: 'public/page_home.png',
    demo_link: 'https://cheats-starlight.vercel.app/',
    tools: ['Astro', 'Front-End', 'Starlight'],
  },
};
