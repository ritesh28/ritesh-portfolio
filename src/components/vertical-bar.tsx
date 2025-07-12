import { Sidebar, SidebarContent, SidebarProvider } from '@/components/ui/sidebar';
import Image from 'next/image';
import Link from 'next/link';
import LogoImageSmall from '../../public/logo_blue_small.png';

export function VerticalBar() {
  return (
    <SidebarProvider>
      <Sidebar collapsible='none' className='w-full h-screen'>
        <SidebarContent className='overflow-hidden'>
          <div className='aspect-square p-1 mb-5 select-none'>
            <Image src={LogoImageSmall} alt='logo' />
          </div>
          <div>
            <nav>
              <ul className='flex flex-col items-center gap-10 [&>li]:[writing-mode:vertical-rl]'>
                <li>
                  <Link href='#skills'>Skills</Link>
                </li>
                <li>
                  <Link href='#projects'>Projects</Link>
                </li>
                <li>
                  <Link href='#experience'>Exp.</Link>
                </li>
                <li>
                  <Link href='#contact'>Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
}
