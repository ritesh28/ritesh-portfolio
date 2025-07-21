import { Footer } from '@/components/footer';
import { HeadComponent } from '@/components/head';
import { HorizontalBar } from '@/components/horizontal-bar';
import { ProjectCard } from '@/components/project-card';
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
      <div className='flex flex-col min-h-screen'>
        <div className='grow'>
          <div className='h-16 fixed w-full pl-6 pr-6 md:pr-16 z-10 bg-sidebar/40 backdrop-blur-xs shadow-xs'>
            {/* copied from index.tsx */}
            <HorizontalBar showLogoWhenMD />
          </div>
          <main className='pt-18'>
            {/* padding top should be more than the height of the fixed horizontal bar */}
            <div className='relative container mx-auto'>
              <div className='flex items-center gap-10'>
                <h3 className='text-[clamp(2rem,1.4966rem+2.3973vw,3.75rem)] my-4 font-semibold flex items-center'>All Projects</h3>
                <div className='hidden lg:block'>
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
              </div>
              <div className={cn('flex flex-wrap gap-5', layoutMode === 'horizontal' && 'flex-col')}>
                {Object.values(PROJECTS).map((project) => (
                  <motion.div
                    key={project.id}
                    className={layoutMode === 'horizontal' ? 'basis-[12rem]' : 'basis-[24rem]'}
                    initial={{ y: 100 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <ProjectCard project={project} showFeaturedBadge isHorizontal={layoutMode === 'horizontal'} layoutPrefix='projects-page' />
                  </motion.div>
                ))}
              </div>
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}
