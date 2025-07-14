import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <>
      <div className='absolute h-full aspect-square top-0 right-0 bg-amber-300'>
        <div className='grid place-content-center h-full underline'>SOME JS ANIMATION</div>
      </div>
      <div className='relative'>
        <h1 className='text-8xl font-extrabold leading-32'>
          Hey, I&apos;m <span>Ritesh Raj</span>
        </h1>
        <h2 className='text-4xl font-bold leading-16'>I&apos;m a Full Stack + GenAI Engineer</h2>
        <p className='text-lg leading-8'>
          Blending deep expertise in Generative AI with full stack development, I craft intelligent, end-to-end web solutions. My toolkit includes
          Python for AI engineering and Next.js/NestJS for building fast, scalable applications. I focus on integrating advanced AI models into
          real-world products that are both smart and user-friendly.
        </p>
        <Button variant='secondary' className='my-4'>
          <Link href='#contact'>Contact Me</Link>
        </Button>
      </div>
    </>
  );
}
