import { AnimateButtonVariant } from '@/components/animate-button-variant';
import { AnimateSvgPath } from '@/components/animate-svg-path';
import { Button } from '@/components/ui/button';
import { FileText, SendHorizonal } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import MyDP from '../../public/ritesh_dp.png';

export function HeroSection() {
  return (
    <div className='relative flex flex-col items-center gap-10 lg:my-0 lg:flex-row pointer-events-none'>
      <div className='flex flex-col gap-7 lg:w-2/3'>
        <div className='text-4xl font-semibold text-foreground md:text-5xl lg:text-8xl'>
          <h2 className='mb-3'>
            Hey, I&apos;m{' '}
            <span className='relative inline-block'>
              Ritesh Raj
              <AnimateSvgPath className='left-0 w-full top-0 lg:-top-2' />
            </span>
          </h2>
          <h3 className='text-muted-foreground text-[60%]'>Full Stack + GenAI Engineer</h3>
        </div>
        <p className='text-base text-muted-foreground md:text-lg lg:text-xl'>
          Blending deep expertise in Generative AI with full stack development, I craft intelligent, end-to-end web solutions. My toolkit includes
          Python for AI engineering and Next.js/NestJS for building fast, scalable applications. I focus on integrating advanced AI models into
          real-world products that are both smart and user-friendly.
        </p>
        <div className='flex flex-wrap items-start gap-3 lg:gap-5'>
          <Link href='#contact'>
            <AnimateButtonVariant>
              <Button size='lg' className='flex items-center gap-2 cursor-pointer pointer-events-auto'>
                <SendHorizonal /> <span className='whitespace-nowrap'>Contact Me</span>
              </Button>
            </AnimateButtonVariant>
          </Link>
          <a href={process.env.NEXT_PUBLIC_RESUME} target='_blank'>
            <AnimateButtonVariant>
              <Button size='lg' variant='secondary' className='underline flex items-center gap-2 cursor-pointer pointer-events-auto'>
                <FileText /> <span className='whitespace-nowrap'>Resume</span>
              </Button>
            </AnimateButtonVariant>
          </a>
        </div>
        <div className='md:hidden flex flex-wrap gap-3 text-2xl -mt-2 pointer-events-auto'>
          <a href={process.env.NEXT_PUBLIC_GITHUB_LINK} target='_blank'>
            <SiGithub />
          </a>
          <a href={process.env.NEXT_PUBLIC_LINKEDIN_LINK} target='_blank'>
            <SiLinkedin />
          </a>
        </div>
      </div>
      <div className='translate-y-5'>
        <Image src={MyDP} alt='my-pic' priority className='size-full object-cover object-[50%_0%]' />
      </div>
    </div>
  );
}
