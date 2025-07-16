import { Sidebar, SidebarContent, SidebarProvider } from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { TABS } from '@/pages/index';
import Image from 'next/image';
import Link from 'next/link';
import LogoImageSmall from '../../public/logo_blue_small.png';

interface VerticalBarProps {
  activeTab: (typeof TABS)[number] | null;
}
export function VerticalBar({ activeTab }: VerticalBarProps) {
  return (
    <SidebarProvider>
      <Sidebar collapsible='none' className='w-full h-screen'>
        <SidebarContent className='overflow-hidden'>
          <Link href='#'>
            <div className='aspect-square p-1 mb-5 select-none'>
              <Image src={LogoImageSmall} alt='logo' priority />
            </div>
          </Link>
          <div>
            <nav>
              <ul className='flex flex-col items-center gap-10 [&>li]:[writing-mode:vertical-rl] [&>li]:p-2'>
                <li className={cn(activeTab === 'skills' && 'border-r-4 border-ring')}>
                  <Link href={`#${TABS[0]}`}>Skills</Link>
                </li>
                <li className={cn(activeTab === 'projects' && 'border-r-4 border-ring')}>
                  <Link href={`#${TABS[1]}`}>Projects</Link>
                </li>
                <li className={cn(activeTab === 'experience' && 'border-r-4 border-ring')}>
                  <Link href={`#${TABS[2]}`}>Exp.</Link>
                </li>
                <li className={cn(activeTab === 'contact' && 'border-r-4 border-ring')}>
                  <Link href={`#${TABS[3]}`}>Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
}
