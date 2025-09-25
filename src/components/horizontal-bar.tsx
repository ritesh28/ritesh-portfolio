import { AnimateButtonVariant } from '@/components/animate-button-variant';
import { Theme } from '@/components/theme';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import LogoImageSmall from '../../public/logo_blue_small.png';

interface HorizontalBarProps {
  showLogoWhenMD?: boolean;
}
export function HorizontalBar({ showLogoWhenMD = false }: HorizontalBarProps) {
  return (
    <div className='flex justify-between items-center h-full'>
      <div className='flex items-center gap-16 h-full'>
        <div className={cn(!showLogoWhenMD && 'md:hidden', 'select-none h-full')}>
          <Link href='/'>
            <Image src={LogoImageSmall} alt='logo' className='h-full w-auto' />
          </Link>
        </div>
        <div className='hidden md:flex gap-4 text-2xl'>
          <a href={process.env.NEXT_PUBLIC_GITHUB_LINK} target='_blank'>
            <SiGithub />
          </a>
          <a href={process.env.NEXT_PUBLIC_LINKEDIN_LINK} target='_blank'>
            <SiLinkedin />
          </a>
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <a href={process.env.NEXT_PUBLIC_RESUME} target='_blank'>
          <AnimateButtonVariant>
            <Button variant='default' size='lg' className='cursor-pointer'>
              My Resume
            </Button>
          </AnimateButtonVariant>
        </a>
        <div className='hidden md:block'>
          <Theme />
        </div>
      </div>
    </div>
  );
}
