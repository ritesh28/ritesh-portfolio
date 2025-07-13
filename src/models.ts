import { IconType } from 'react-icons';
import { RiNextjsFill } from 'react-icons/ri';
import { SiDocker, SiNestjs, SiPython, SiVorondesign } from 'react-icons/si';

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
