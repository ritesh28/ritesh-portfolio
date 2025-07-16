import { ContactSection } from '@/components/contact-section';
import { ExperienceSection } from '@/components/experience';
import { HeroSection } from '@/components/hero-section';
import { HorizontalBar } from '@/components/horizontal-bar';
import { ProjectsSection } from '@/components/projects-section';
import { SkillsSection } from '@/components/skills-section';
import { Theme } from '@/components/theme';
import { Button } from '@/components/ui/button';
import { VerticalBar } from '@/components/vertical-bar';
import { FaFilePdf } from 'react-icons/fa';
import { SiGithub, SiLinkedin } from 'react-icons/si';

export default function Page() {
  return (
    <div>
      <header className='hidden md:block md:w-12 fixed z-10'>
        <VerticalBar />
      </header>
      <div className='pl-0 md:pl-12'>
        {/* padding left should be more than the width of the fixed vertical bar */}
        <main>
          <div className='h-16 fixed w-full pl-6 pr-6 md:pr-16 z-10 bg-sidebar/40 backdrop-blur-xs'>
            <HorizontalBar />
          </div>
          <div className='pt-16'>
            {/* padding top should be more than the height of the fixed horizontal bar */}
            <div className='container mx-auto'>
              {/* center flow layout content - container */}
              <section className='mb-4 p-8'>
                <HeroSection />
              </section>
              <section id='skills' className='mb-4 p-8'>
                <SkillsSection />
              </section>
              <section id='projects' className='mb-4 p-8'>
                <ProjectsSection />
              </section>
              <section id='experience' className='mb-4 p-8'>
                <ExperienceSection />
              </section>
              <section id='contact' className='mb-4 p-8'>
                <ContactSection />
              </section>
            </div>
          </div>
        </main>
        <footer>
          <div className='container mx-auto'>
            <hr />
            {/* center flow layout content - container */}
            <div className='grid grid-cols-2 sm:grid-cols-4 place-content-center my-5'>
              <Button variant='link'>
                <a href='#' className='flex gap-1'>
                  <FaFilePdf /> Resume
                </a>
              </Button>
              <Button variant='link'>
                <a href='#' className='flex gap-1'>
                  <SiLinkedin /> LinkedIn
                </a>
              </Button>
              <Button variant='link'>
                <a href='#' className='flex gap-1'>
                  <SiGithub /> Github
                </a>
              </Button>
              <div className='m-auto'>
                <Theme />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
