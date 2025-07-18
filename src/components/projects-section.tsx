import { ProjectCardVertical } from '@/components/project-card-vertical';
import { Button } from '@/components/ui/button';
import { PROJECTS } from '@/models';
import Link from 'next/link';
import { AiFillProject } from 'react-icons/ai';

export function ProjectsSection() {
  return (
    <>
      <h3 className='text-[clamp(2rem,1.4966rem+2.3973vw,3.75rem)] my-4 font-semibold flex items-center before:border-b-2 before:grow before:mr-5'>
        Projects
      </h3>
      <Link href='/projects'>
        <Button className='mb-3 px-8 py-7 cursor-pointer'>
          <div className='flex items-center gap-4'>
            <AiFillProject />
            More Projects
          </div>
        </Button>
      </Link>
      <ul className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3'>
        {Object.values(PROJECTS)
          .filter((project) => project.featured)
          .map((project) => (
            <li key={project.id}>
              <ProjectCardVertical project={project} />
            </li>
          ))}
      </ul>
    </>
  );
}
