import { AnimateButtonVariant } from '@/components/animate-button-variant';
import { AnimateSvgPath } from '@/components/animate-svg-path';
import { ProjectCard } from '@/components/project-card';
import { Button } from '@/components/ui/button';
import { PROJECTS } from '@/models';
import { motion } from 'framer-motion';
import { Kanban } from 'lucide-react';
import Link from 'next/link';

export function ProjectsSection() {
  return (
    <>
      <h3 className='text-[clamp(2rem,1.4966rem+2.3973vw,3.75rem)] my-4 font-semibold flex items-center before:border-b-2 before:grow before:mr-5'>
        <span className='relative inline-block'>
          Projects
          <AnimateSvgPath className='left-0 w-full -bottom-8 lg:-bottom-12' />
        </span>
      </h3>
      <div className='flex'></div>
      <ul className='flex flex-wrap items-stretch gap-7'>
        {Object.values(PROJECTS)
          .filter((project) => project.featured)
          .map((project) => (
            <motion.li
              key={project.id}
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className='basis-[22rem]'
            >
              <ProjectCard project={project} layoutPrefix='projects-section' />
            </motion.li>
          ))}
        <motion.li className='basis-[22rem] self-center'>
          <Link href='/projects' scroll={false} className='w-fit block'>
            <AnimateButtonVariant>
              <Button className='origin-right cursor-pointer bg-accent px-8 py-7 text-accent-foreground hover:bg-accent/90 w-full lg:w-auto'>
                <div className='flex items-center gap-2 text-lg'>
                  <Kanban className='size-5' />
                  More Projects
                </div>
              </Button>
            </AnimateButtonVariant>
          </Link>
        </motion.li>
      </ul>
    </>
  );
}
