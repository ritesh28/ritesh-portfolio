import { Button } from '@/components/ui/button';
import { motion, Variants } from 'framer-motion';
import { FileText, SendHorizonal } from 'lucide-react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import MyDP from '../../public/ritesh_dp.png';

const contentVariants = (delay: number) =>
  ({
    initial: { opacity: 0, y: 100 },
    final: { opacity: 1, y: 0, transition: { delay } },
  }) satisfies Variants;

const buttonVariants = (delay: number) =>
  ({
    initial: { scale: 0 },
    final: { scale: 1, transition: { delay, type: 'spring', stiffness: 400, damping: 17 } },
    whileHover: { scale: 1.1, transition: { type: 'spring', stiffness: 400, damping: 17 } },
    whileTap: { scale: 0.9, transition: { type: 'spring', stiffness: 400, damping: 17 } },
  }) satisfies Variants;

export function HeroSection() {
  return (
    <div className='relative'>
      <div className='absolute -inset-0 overflow-clip'>
        <TilesLayout />
      </div>
      <div className='relative flex flex-col items-center gap-10 lg:my-0 lg:flex-row pointer-events-none'>
        <div className='flex flex-col gap-7 lg:w-2/3'>
          <div className='text-4xl font-semibold text-foreground md:text-5xl lg:text-8xl'>
            <motion.h2 variants={contentVariants(0)} initial='initial' animate='final'>
              Hey, I&apos;m Ritesh Raj
            </motion.h2>
            <motion.h3 variants={contentVariants(0.25)} initial='initial' animate='final' className='text-muted-foreground text-[60%]'>
              Full Stack + GenAI Engineer
            </motion.h3>
          </div>
          <motion.p
            variants={contentVariants(0.5)}
            initial='initial'
            animate='final'
            className='text-base text-muted-foreground md:text-lg lg:text-xl'
          >
            Blending deep expertise in Generative AI with full stack development, I craft intelligent, end-to-end web solutions. My toolkit includes
            Python for AI engineering and Next.js/NestJS for building fast, scalable applications. I focus on integrating advanced AI models into
            real-world products that are both smart and user-friendly.
          </motion.p>
          <div className='flex flex-wrap items-start gap-3 lg:gap-5'>
            <Link href='#contact'>
              <motion.div variants={buttonVariants(0)} initial='initial' animate='final' whileHover='whileHover' whileTap='whileTap'>
                <Button size='lg' className='flex items-center gap-2 cursor-pointer pointer-events-auto'>
                  <SendHorizonal /> <span className='whitespace-nowrap'>Contact Me</span>
                </Button>
              </motion.div>
            </Link>
            <a href={process.env.NEXT_PUBLIC_RESUME} target='_blank'>
              <motion.div variants={buttonVariants(0.25)} initial='initial' animate='final' whileHover='whileHover' whileTap='whileTap'>
                <Button size='lg' variant='secondary' className='underline flex items-center gap-2 cursor-pointer pointer-events-auto'>
                  <FileText /> <span className='whitespace-nowrap'>Resume</span>
                </Button>
              </motion.div>
            </a>
          </div>
          <div className='md:hidden flex flex-wrap gap-3 text-2xl -mt-2'>
            <a href={process.env.NEXT_PUBLIC_GITHUB_REPO_LINK} target='_blank'>
              <motion.div
                variants={buttonVariants(0.5)}
                initial='initial'
                animate='final'
                whileHover='whileHover'
                whileTap='whileTap'
                className='cursor-pointer pointer-events-auto'
              >
                <SiGithub />
              </motion.div>
            </a>
            <a href={process.env.NEXT_PUBLIC_LINKEDIN_LINK} target='_blank'>
              <motion.div
                variants={buttonVariants(0.5)}
                initial='initial'
                animate='final'
                whileHover='whileHover'
                whileTap='whileTap'
                className='cursor-pointer pointer-events-auto'
              >
                <SiLinkedin />
              </motion.div>
            </a>
          </div>
        </div>

        <motion.div variants={buttonVariants(0)} initial='initial' animate='final'>
          <Image src={MyDP} alt='my-pic' priority className='size-full object-cover object-[50%_0%]' />
        </motion.div>
      </div>
    </div>
  );
}

function TilesLayout() {
  const { theme } = useTheme();
  return (
    <div
      key={theme}
      className='grid grid-cols-[repeat(6,minmax(0,1fr))] md:grid-cols-[repeat(8,minmax(0,1fr))] xl:grid-cols-[repeat(20,minmax(0,1fr))] gap-2'
    >
      {new Array(20 * 15).fill(2).map((_, index) => (
        <motion.div
          key={index}
          className='aspect-square bg-background'
          whileHover={{ backgroundColor: 'var(--featured)' }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        />
      ))}
    </div>
  );
}
