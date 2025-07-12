import { Button } from '@/components/ui/button';
import { Github, Linkedin } from 'lucide-react';
export function HorizontalBar() {
  return (
    <div className='flex justify-between items-center h-full ml-4 mr-16'>
      <div className='flex gap-3'>
        <Linkedin />
        <Github />
      </div>
      <div>
        <Button variant='default' size='lg'>
          My Resume
        </Button>
      </div>
    </div>
  );
}
