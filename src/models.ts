import { StaticImageData } from 'next/image';
import { IconType } from 'react-icons';
import { RiNextjsFill } from 'react-icons/ri';
import { SiDocker, SiNestjs, SiPython, SiVorondesign } from 'react-icons/si';
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
  python: { name: 'Python', icon: SiPython, featured: false } as SkillProps,
  docker: { name: 'Docker', icon: SiDocker, featured: true } as SkillProps,
  designPatterns: { name: 'Design Patterns', icon: SiVorondesign, featured: false } as SkillProps,
} as const;

// group the skills in some way (like fe, be, db, ai, python-package, devops, other - design)
export const FRONTEND_SKILL_GROUP = [SKILLS.nextjs];
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
    designation: 'Technical Lead',
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
  github_main_image: string;
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
    github_main_image: 'page_home.png',
    demo_link: 'https://animation-next-lemon.vercel.app',
    tools: ['Motion', 'Front-End', 'TS'],
  },
};
