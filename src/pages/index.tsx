import { ContactSection } from '@/components/contact';
import { ExperienceSection } from '@/components/experience';
import { HeroSection } from '@/components/hero-section';
import { HorizontalBar } from '@/components/horizontal-bar';
import { ProjectsSection } from '@/components/projects-section';
import { SkillsSection } from '@/components/skills-section';
import { VerticalBar } from '@/components/vertical-bar';

export default function Page() {
  return (
    <div>
      <header className='w-12 fixed'>
        <VerticalBar />
      </header>
      <div className='pl-12'>
        <main>
          {/* padding left should be more than the width of the fixed vertical bar */}
          <div className='h-16 bg-sidebar fixed w-full'>
            <HorizontalBar />
          </div>
          <div className='pt-16'>
            {/* padding top should be more than the height of the fixed horizontal bar */}
            <div className='mx-28'>
              {/* center flow layout content */}
              <HeroSection />
              <SkillsSection />
              <ProjectsSection />
              <ExperienceSection />
              <ContactSection />
            </div>
          </div>
        </main>
        <footer>
          <div className='mx-28'>
            {/* center flow layout content */}
            <div className='grid place-content-center my-5'>
              <p>footer with love</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
