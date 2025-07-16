import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import MyDP from '../../public/ritesh_dp.png';

export function HeroSection() {
  return (
    <div className='flex flex-col items-center gap-10 lg:my-0 lg:flex-row'>
      <div className='flex flex-col gap-7 lg:w-2/3'>
        <h2 className='text-4xl font-semibold text-foreground md:text-5xl lg:text-8xl'>
          <span>
            Hey, I&apos;m <span>Ritesh Raj</span>
          </span>
          <span className='text-muted-foreground text-[60%] block'> Full Stack + GenAI Engineer</span>
        </h2>
        <p className='text-base text-muted-foreground md:text-lg lg:text-xl'>
          Blending deep expertise in Generative AI with full stack development, I craft intelligent, end-to-end web solutions. My toolkit includes
          Python for AI engineering and Next.js/NestJS for building fast, scalable applications. I focus on integrating advanced AI models into
          real-world products that are both smart and user-friendly.
        </p>
        <div className='flex flex-wrap items-start gap-5 lg:gap-7'>
          <Button asChild>
            <a href='#contact'>
              <div className='flex items-center gap-2'>
                <ArrowUpRight className='size-4' />
              </div>
              <span className='pr-6 pl-4 text-sm whitespace-nowrap lg:pr-8 lg:pl-6 lg:text-base'>Contact Me</span>
            </a>
          </Button>
          <Button asChild variant='link' className='underline'>
            <a href='#'>Resume</a>
          </Button>
        </div>
      </div>
      <div className='relative z-10'>
        <Image src={MyDP} alt='my-pic' className='size-full object-cover object-[50%_0%]' />
      </div>
    </div>
  );
}
