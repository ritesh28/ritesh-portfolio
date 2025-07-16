import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si';

export function ProjectsSection() {
  return (
    <>
      <h3 className='text-[clamp(2rem,1.4966rem+2.3973vw,3.75rem)] my-4 font-semibold flex items-center before:border-b-2 before:grow before:mr-5'>
        Projects
      </h3>
      <ul className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3'>
        {new Array(5).fill(2).map((_, index) => (
          <li key={index}>
            <Card className='flex flex-col gap-4'>
              {/* when clicked on the card - should open a modal with detailed description */}
              <CardHeader>
                <AspectRatio ratio={16 / 9} className='bg-muted rounded-lg'>
                  <Image
                    src='https://placehold.co/1280x720/orange/white/png'
                    alt='project-image'
                    fill
                    className='h-full w-full rounded-lg object-cover'
                  />
                </AspectRatio>
              </CardHeader>
              <CardContent>
                <CardTitle>Project Title</CardTitle>
                <CardDescription>
                  <p>
                    Project Description. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime deleniti omnis.
                    <button className='inline'>... More</button>
                  </p>
                </CardDescription>
              </CardContent>
              <CardFooter className='flex flex-col items-start gap-3'>
                <div className='flex gap-2'>
                  <Button>
                    <a href='#'>
                      <div className='flex items-center gap-2'>
                        <SiGithub /> Github
                      </div>
                    </a>
                  </Button>
                  <Button>
                    <a href='#'>
                      <div className='flex items-center gap-2'>
                        <FaExternalLinkAlt /> Demo
                      </div>
                    </a>
                  </Button>
                </div>
                <div className='flex flex-wrap gap-2'>
                  <Badge variant='secondary'>Tool 1</Badge>
                  <Badge variant='secondary'>Tool 2</Badge>
                  <Badge variant='secondary'>Tool 3</Badge>
                </div>
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
    </>
  );
}
