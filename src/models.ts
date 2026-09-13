import { StaticImageData } from 'next/image';
import { IconType } from 'react-icons';
import { BiLogoPostgresql } from 'react-icons/bi';
import { FaRobot } from 'react-icons/fa';
import { IoLanguage } from 'react-icons/io5';
import { PiTreeViewFill } from 'react-icons/pi';
import { RiNextjsFill } from 'react-icons/ri';
import { SiAstro, SiDocker, SiKubernetes, SiNestjs, SiPython, SiStreamlit, SiVercel, SiVorondesign } from 'react-icons/si';
import Infosys from '../public/infosys.png';
import Pwc from '../public/pwc.png';

interface SkillProps {
  name: string;
  icon: IconType;
  featured: boolean;
}

export const SKILLS = {
  ai: [
    { name: 'NLP', icon: IoLanguage, featured: true },
    { name: 'Vercel AI SDK', icon: SiVercel, featured: true },
    { name: 'RAG', icon: FaRobot, featured: true },
    { name: 'Harness', icon: FaRobot, featured: true },
    { name: 'Agentic Pipeline', icon: FaRobot, featured: false },
    { name: 'Prompt Engineering', icon: FaRobot, featured: false },
  ],
  fullStack: [
    { name: 'React.js', icon: RiNextjsFill, featured: false },
    { name: 'Next.js', icon: RiNextjsFill, featured: true },
    { name: 'NestJS', icon: SiNestjs, featured: true },
    { name: 'Astro.js', icon: SiAstro, featured: false },
    { name: 'Streamlit', icon: SiStreamlit, featured: true },
    { name: 'Python', icon: SiPython, featured: false },
  ],
  dataAndInfrastructure: [
    { name: 'Docker', icon: SiDocker, featured: true },
    { name: 'Kubernetes', icon: SiKubernetes, featured: true },
    { name: 'PostgreSQL', icon: BiLogoPostgresql, featured: false },
  ],
  engineering: [
    { name: 'Design Patterns', icon: SiVorondesign, featured: false },
    { name: 'Data Structures & Algorithms', icon: PiTreeViewFill, featured: false },
  ],
} as Record<string, SkillProps[]>;

interface Experience {
  company_name: string;
  company_logo: StaticImageData;
  duration: string;
  designation: string;
  workDescription: string;
}

export const EXPERIENCES: Experience[] = [
  {
    company_name: 'Pwc',
    company_logo: Pwc,
    duration: '2022 - Present',
    designation: 'Senior Associate',
    workDescription:
      'Designed and built Pathfinder, a production multi-agent AI compliance platform that reduced review effort by 60% for 100+ users. Implemented scalable orchestration, vectorless RAG architectures, LLM evaluation frameworks, and robust AI observability.',
  },
  {
    company_name: 'Infosys',
    company_logo: Infosys,
    duration: '2015 - 2022',
    designation: 'Technology Analyst',
    workDescription:
      'Developed IDA, an AI document extraction pipeline using Azure Form Recognizer and Python microservices, cutting data-entry effort by 70%. Built an Open Banking consent system for 100K+ users and TEMS, accelerating release cycles by 20–25%.',
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
  '1970d3c9-8972-4549-b9fa-35c5941a7847': {
    id: '1970d3c9-8972-4549-b9fa-35c5941a7847',
    title: 'VFS Marketplace Agent',
    small_description:
      'A demo app that gives an AI agent a lazy-loading virtual file system (VFS) as its working surface with scoped access and rail guards for a small marketplace domain (sellers, customers, support).',
    featured: true,
    github_repo_name: 'vfs-marketplace-agent',
    github_image_path: 'public/banner.png',
    demo_link: "https://vfs-marketplace-agent.vercel.app/",
    tools: ['Agentic', 'VFS', 'Rail Guard', 'Vercel AI SDK'],
  },
  '2dbea365-a98c-4be2-bec6-f4631fb84135': {
    id: '2dbea365-a98c-4be2-bec6-f4631fb84135',
    title: 'Skill Tree (Vectorless) RAG',
    small_description:
      'Terminal chatbot where skills (markdown and scripts trees) are first-class tools. Skills live under skills/; skill-sync generates src/generated/skills.ts for tool calling.',
    featured: true,
    github_repo_name: 'skill-tree-rag',
    github_image_path: 'public/page_home.png',
    demo_link: null,
    tools: ['Agentic', 'RAG', 'Skills', 'Vercel AI SDK'],
  },
  'b7e2a941-8c3d-4f2a-9e1b-6d5c8f7a9e04': {
    id: 'b7e2a941-8c3d-4f2a-9e1b-6d5c8f7a9e04',
    title: 'Hands-on LLM and NLP notebooks',
    small_description:
      'Practical walkthroughs of classical LLM and NLP applications. Topics include RAG, Agentic Engineering, multi-agent orchestration, rail guards, Evals, and more.',
    featured: true,
    github_repo_name: 'llm-nlp-py',
    github_image_path: 'banner.png',
    demo_link: null,
    tools: ['LLM', 'NLP', 'Data Science', 'Python'],
  },
  '8e9fdc27-3854-4e8d-9393-d181b0dae73b': {
    id: '8e9fdc27-3854-4e8d-9393-d181b0dae73b',
    title: 'ML & DL Projects and Tutorials',
    small_description:
      'Practical walkthroughs of classical ML workflows: load data, train a model, evaluate, and experiment. Topics include text classification, face detection, generative modeling, and digit recognition.',
    featured: true,
    github_repo_name: 'ml-dl-py',
    github_image_path: 'banner.png',
    demo_link: null,
    tools: ['ML', 'DL', 'Data Science', 'Python'],
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
    featured: false,
    github_repo_name: 'table-next',
    github_image_path: 'public/page_home.png',
    demo_link: 'https://table-next-mauve.vercel.app/',
    tools: ['TanStack', 'Front-End', 'TS'],
  },
  '12987f59-1dc2-4df8-9119-a04ebca76061': {
    id: '12987f59-1dc2-4df8-9119-a04ebca76061',
    title: 'Motion Framer Animation',
    small_description:
      'This website showcases the capabilities of the Framer Motion library in React. It features interactive examples and animations that demonstrate key concepts like transitions, gestures, and layout animations.',
    featured: false,
    github_repo_name: 'animation-next',
    github_image_path: 'public/page_home.png',
    demo_link: 'https://animation-next-lemon.vercel.app',
    tools: ['Motion', 'Front-End', 'TS'],
  },
  'b4c5d6e7-f890-1234-5678-9abcdef01234': {
    id: 'b4c5d6e7-f890-1234-5678-9abcdef01234',
    title: 'Blog Astro',
    small_description:
      'A developer blog built with Astro.js, featuring usage guides, troubleshooting tips, and feature insights on libraries and frameworks. Topics span JavaScript, Python, and data science, offering practical help for developers at every level.',
    featured: false,
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
