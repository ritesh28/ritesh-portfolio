import { HeadComponent } from '@/components/head';
import { HorizontalBar } from '@/components/horizontal-bar';
import { ProjectCardVertical } from '@/components/project-card-vertical';

import { PROJECTS } from '@/models';

const headContent = {
  title: 'Ritesh Raj | Projects',
  description:
    "Hey, I'm Ritesh Raj Full Stack + GenAI Engineer. My GitHub projects span UI/UX design, full-stack development with Next.js and NestJS, and cutting-edge work in generative AI. I build intuitive interfaces, scalable web apps, and AI-driven tools that reflect a passion for both design and technology. Each project showcases creativity, technical depth, and a drive to explore what's next in modern development.",
  img: '/ritesh_dp.png',
  keywords: [
    'ritesh raj',
    'portfolio',
    'full stack developer',
    'generative AI engineer',
    'next.js',
    'nestJS',
    'web application',
    'github',
    'linkedin',
    'python',
  ],
};

export default function ProjectsPage() {
  return (
    <>
      <HeadComponent {...headContent} />
      <div className='h-16 fixed w-full pl-6 pr-6 md:pr-16 z-10 bg-sidebar/40 backdrop-blur-xs shadow-xs'>
        {/* copied from index.tsx */}
        <HorizontalBar showLogoWhenMD />
      </div>
      <div className='pt-18'>
        {/* padding top should be more than the height of the fixed horizontal bar */}
        <div className='relative container mx-auto'>
          <div className='flex flex-wrap gap-10 items-stretch'>
            {Object.values(PROJECTS).map((project) => (
              <div key={project.id} className='max-w-sm'>
                <ProjectCardVertical project={project} showFeaturedBadge />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
