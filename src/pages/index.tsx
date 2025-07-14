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
          <div className='h-16 bg-sidebar/10 backdrop-blur-xs fixed w-full z-10'>
            <HorizontalBar />
          </div>
          <div className='pt-16'>
            {/* padding top should be more than the height of the fixed horizontal bar */}
            <div className='mx-28'>
              {/* center flow layout content */}
              <section className='relative py-[calc(100vh/4)] p-8 pr-40'>
                <HeroSection />
              </section>
              <section id='skills' className='bg-violet-400 my-4 p-8'>
                <SkillsSection />
              </section>
              <section id='projects' className='bg-green-400  my-4 p-8'>
                <ProjectsSection />
              </section>
              <section id='experience' className='bg-fuchsia-500  my-4 p-8'>
                <ExperienceSection />
              </section>
              <section id='contact' className='bg-indigo-300  my-4 p-8'>
                <ContactSection />
              </section>
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
