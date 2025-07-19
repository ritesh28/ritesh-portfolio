import { AnimateSvgPath } from '@/components/animate-svg-path';
import { ProjectCardVertical } from '@/components/project-card-vertical';
import { Button } from '@/components/ui/button';
import { PROJECTS } from '@/models';
import { motion } from 'framer-motion';
import { Kanban } from 'lucide-react';
import Link from 'next/link';

export function ProjectsSection() {
  return (
    <>
      <h3 className='text-[clamp(2rem,1.4966rem+2.3973vw,3.75rem)] my-4 font-semibold flex items-center before:border-b-2 before:grow before:mr-5'>
        <span className='relative'>
          <motion.span layout layoutId='project-heading'>
            Projects
          </motion.span>
          <AnimateSvgPath className='-bottom-12' />
        </span>
      </h3>
      <Link href='/projects'>
        <Button className='mb-3 px-8 py-7 cursor-pointer'>
          <div className='flex items-center gap-2 text-lg'>
            <Kanban className='size-5' />
            More Projects
          </div>
        </Button>
      </Link>
      <ul className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3'>
        {Object.values(PROJECTS)
          .filter((project) => project.featured)
          .map((project) => (
            <motion.li key={project.id} initial={{ y: 100 }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <ProjectCardVertical project={project} />
            </motion.li>
          ))}
      </ul>
    </>
  );
}
