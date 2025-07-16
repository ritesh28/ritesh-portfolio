import { Theme } from '@/components/theme';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import LogoImageSmall from '../../public/logo_blue_small.png';

export function HorizontalBar() {
  return (
    <div className='flex justify-between items-center h-full shadow-xs'>
      <div className='hidden md:flex gap-4 text-2xl'>
        <a href='#'>
          <SiGithub />
        </a>
        <a href='#'>
          <SiLinkedin />
        </a>
      </div>
      <div className='md:hidden select-none h-full'>
        <a href='#'>
          <Image src={LogoImageSmall} alt='logo' className='h-full w-auto' />
        </a>
      </div>
      <div className='flex items-center gap-4'>
        <Button variant='default' size='lg'>
          <a href='#'>My Resume</a>
        </Button>
        <div className='hidden md:block'>
          <Theme />
        </div>
      </div>
    </div>
  );
}
