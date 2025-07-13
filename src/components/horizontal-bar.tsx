import { Button } from '@/components/ui/button';
import { SiGithub, SiLinkedin } from 'react-icons/si';
export function HorizontalBar() {
  return (
    <div className='flex justify-between items-center h-full pl-6 pr-16 shadow-xs'>
      <div className='flex gap-2 text-2xl'>
        <a href='#'>
          <SiGithub />
        </a>
        <a href='#'>
          <SiLinkedin />
        </a>
      </div>
      <div>
        <Button variant='default' size='lg'>
          My Resume
        </Button>
      </div>
    </div>
  );
}
