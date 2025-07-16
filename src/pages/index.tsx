import { ContactSection } from '@/components/contact-section';
import { ExperienceSection } from '@/components/experience';
import { HeroSection } from '@/components/hero-section';
import { HorizontalBar } from '@/components/horizontal-bar';
import { ProjectsSection } from '@/components/projects-section';
import { SkillsSection } from '@/components/skills-section';
import { VerticalBar } from '@/components/vertical-bar';

export default function Page() {
  return (
    <div>
      <header className='w-12 fixed z-10'>
        <VerticalBar />
      </header>
      <div className='pl-12'>
        {/* padding left should be more than the width of the fixed vertical bar */}
        <main>
          <div className='h-16 bg-sidebar/10 backdrop-blur-xs fixed w-full z-10'>
            <HorizontalBar />
          </div>
          <div className='pt-16'>
            {/* padding top should be more than the height of the fixed horizontal bar */}
            <div className='container mx-auto'>
              {/* center flow layout content - container */}
              <section className='bg-amber-300 mb-4 p-8'>
                <HeroSection />
              </section>
              <section id='skills' className='bg-violet-400 mb-4 p-8'>
                <SkillsSection />
              </section>
              <section id='projects' className='bg-green-400 mb-4 p-8'>
                <ProjectsSection />
              </section>
              <section id='experience' className='bg-fuchsia-500 mb-4 p-8'>
                <ExperienceSection />
              </section>
              <section id='contact' className='bg-indigo-300 mb-4 p-8'>
                <ContactSection />
              </section>
            </div>
          </div>
        </main>
        <footer>
          <div className='container mx-auto'>
            {/* center flow layout content - container */}
            <div className='grid place-content-center my-5'>
              <p>footer with love</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
