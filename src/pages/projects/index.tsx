import { HeadComponent } from '@/components/head';
import { HorizontalBar } from '@/components/horizontal-bar';
import { ProjectCardVertical } from '@/components/project-card-vertical';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { cn } from '@/lib/utils';

import { PROJECTS } from '@/models';
import { motion } from 'framer-motion';
import { StretchHorizontal, StretchVertical } from 'lucide-react';
import { useState } from 'react';

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
  const [layoutMode, setLayoutMode] = useState<'horizontal' | 'vertical'>('vertical');
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
          <div className='flex items-center gap-10'>
            <h3 className='text-[clamp(2rem,1.4966rem+2.3973vw,3.75rem)] my-4 font-semibold flex items-center'>
              <motion.span layout layoutId='project-heading'>
                All Projects
              </motion.span>
            </h3>
            <ToggleGroup
              type='single'
              variant='outline'
              size='sm'
              value={layoutMode}
              onValueChange={(value) => {
                if (value === 'horizontal' || value === 'vertical') setLayoutMode(value);
              }}
            >
              <ToggleGroupItem value='vertical' aria-label='Toggle bold'>
                <StretchVertical className='h-4 w-4' />
              </ToggleGroupItem>
              <ToggleGroupItem value='horizontal' aria-label='Toggle italic'>
                <StretchHorizontal className='h-4 w-4' />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div className={cn('flex flex-wrap gap-10 items-stretch', layoutMode === 'horizontal' && 'flex-col')}>
            {Object.values(PROJECTS).map((project) => (
              <motion.div
                key={project.id}
                className='max-w-sm'
                initial={{ y: 100 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {/* todo: horizontal card */}
                {/* todo: stretch card */}
                <ProjectCardVertical project={project} showFeaturedBadge />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
