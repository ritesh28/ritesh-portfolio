import { HorizontalBar } from '@/components/horizontal-bar';
import { ProjectCardVertical } from '@/components/project-card-vertical';

import { PROJECTS } from '@/models';

export default function ProjectsPage() {
  return (
    <>
      <div className='h-16 fixed w-full pl-6 pr-6 md:pr-16 z-10 bg-sidebar/40 backdrop-blur-xs shadow-xs'>
        {/* copied from index.tsx */}
        <HorizontalBar showLogoWhenMD />
      </div>
      <div className='pt-18'>
        {/* padding top should be more than the height of the fixed horizontal bar */}
        <div className='relative container mx-auto'>
          <div>
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
