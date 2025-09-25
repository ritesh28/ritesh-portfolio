import { Theme } from '@/components/theme';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import { SiGithub, SiLinkedin } from 'react-icons/si';

export function Footer() {
  return (
    <footer>
      <div className='container mx-auto mt-8 relative'>
        <hr />
        {/* center flow layout content - container */}
        <div className='grid grid-cols-2 sm:grid-cols-4 place-content-center py-5'>
          <a href={process.env.NEXT_PUBLIC_RESUME} target='_blank'>
            <Button variant='link' className='flex gap-2 cursor-pointer'>
              <FileText /> Resume
            </Button>
          </a>
          <a href={process.env.NEXT_PUBLIC_LINKEDIN_LINK} target='_blank'>
            <Button variant='link' className='flex gap-2 cursor-pointer'>
              <SiLinkedin /> LinkedIn
            </Button>
          </a>
          <a href={process.env.NEXT_PUBLIC_GITHUB_LINK} target='_blank'>
            <Button variant='link' className='flex gap-2 cursor-pointer'>
              <SiGithub /> Github
            </Button>
          </a>
          <div className='m-auto'>
            <Theme />
          </div>
        </div>
      </div>
    </footer>
  );
}
