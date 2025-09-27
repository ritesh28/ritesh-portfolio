import { AnimateRadialGradient } from '@/components/animate-radial-gradient';
import { ContactSection } from '@/components/contact-section';
import { ExperienceSection } from '@/components/experience-section';
import { Footer } from '@/components/footer';
import { HeadComponent } from '@/components/head';
import { HeroSection } from '@/components/hero-section';
import { HorizontalBar } from '@/components/horizontal-bar';
import { ProjectsSection } from '@/components/projects-section';
import { SkillsSection } from '@/components/skills-section';
import { VerticalBar } from '@/components/vertical-bar';
import { useState } from 'react';
import { InView } from 'react-intersection-observer';

export const TABS = ['skills', 'projects', 'experience', 'contact'] as const;

const headContent = {
  title: 'Ritesh Raj | Portfolio',
  description:
    "Hey, I'm Ritesh Raj Full Stack + GenAI Engineer. My toolkit includes Python for AI engineering and Next.js/NestJS for building fast, scalable applications. I focus on integrating advanced AI models into real-world products that are both smart and user-friendly.",
  img: '/ritesh_dp.png',
  keywords: ['ritesh raj', 'portfolio', 'full stack developer', 'generative AI engineer'],
};

export default function Page() {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number] | null>(null);

  return (
    <>
      <HeadComponent {...headContent} />
      <div className='relative'>
        <AnimateRadialGradient />
        <header className='hidden md:block md:w-12 fixed z-10'>
          <VerticalBar activeTab={activeTab} />
        </header>
        <div className='pl-0 md:pl-12'>
          {/* padding left should be more than the width of the fixed vertical bar */}
          <main>
            <div className='h-16 fixed w-full pl-6 pr-6 md:pr-16 z-10 bg-sidebar/40 backdrop-blur-xs shadow-xs'>
              <HorizontalBar />
            </div>
            <div className='pt-16'>
              {/* padding top should be more than the height of the fixed horizontal bar */}
              <div className='container mx-auto'>
                {/* center flow layout content - container */}
                <InView
                  as='section'
                  id={'hero'}
                  threshold={0}
                  rootMargin='-40%'
                  onChange={(inView, _) => inView && setActiveTab(null)}
                  className='mb-4 p-8'
                >
                  <HeroSection />
                </InView>
                <InView
                  as='section'
                  id={TABS['0']}
                  threshold={0}
                  rootMargin='-40%'
                  onChange={(inView, _) => inView && setActiveTab(TABS['0'])}
                  className='mb-4 p-8'
                >
                  <SkillsSection />
                </InView>
                <InView
                  as='section'
                  id={TABS['1']}
                  threshold={0}
                  rootMargin='-40%'
                  onChange={(inView, _) => inView && setActiveTab(TABS['1'])}
                  className='mb-4 p-8'
                >
                  <ProjectsSection />
                </InView>
                <InView
                  as='section'
                  id={TABS['2']}
                  threshold={0}
                  rootMargin='-40%'
                  onChange={(inView, _) => inView && setActiveTab(TABS['2'])}
                  className='mb-4 p-8'
                >
                  <ExperienceSection />
                </InView>
                <InView
                  as='section'
                  id={TABS['3']}
                  threshold={0}
                  rootMargin='-40%'
                  onChange={(inView, _) => inView && setActiveTab(TABS['3'])}
                  className='mb-4 p-8'
                >
                  <ContactSection />
                </InView>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
