import { Theme } from '@/components/theme';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import LogoImageSmall from '../../public/logo_blue_small.png';

export function HorizontalBar() {
  return (
    <div className='flex justify-between items-center h-full shadow-xs'>
      <div className='hidden md:flex gap-4 text-2xl'>
        <a href={process.env.NEXT_PUBLIC_GITHUB_REPO_LINK} target='_blank'>
          <SiGithub />
        </a>
        <a href={process.env.NEXT_PUBLIC_LINKEDIN_LINK} target='_blank'>
          <SiLinkedin />
        </a>
      </div>
      <div className='md:hidden select-none h-full'>
        <Link href='#'>
          <Image src={LogoImageSmall} alt='logo' className='h-full w-auto' />
        </Link>
      </div>
      <div className='flex items-center gap-4'>
        <Button variant='default' size='lg'>
          <a href={process.env.NEXT_PUBLIC_RESUME} target='_blank'>
            My Resume
          </a>
        </Button>
        <div className='hidden md:block'>
          <Theme />
        </div>
      </div>
    </div>
  );
}
