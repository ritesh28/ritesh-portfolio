import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className='relative py-[calc(100vh/4)] p-8 pr-40'>
      <div>
        <h1 className='text-8xl font-extrabold leading-32'>Hey, I'm Ritesh Raj.</h1>
        <h2 className='text-4xl font-bold leading-16'>I'm a Full Stack Developer</h2>
        <p className='text-lg leading-8'>
          Something about me. REMEMBER we have a 'about section'. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nihil, obcaecati
          maxime voluptas debitis voluptates!
        </p>
        <Button variant='secondary' className='my-4'>
          Contact Me
        </Button>
      </div>
      <div className='absolute h-full aspect-square top-0 right-0 bg-amber-300/20'>some art</div>
    </section>
  );
}
