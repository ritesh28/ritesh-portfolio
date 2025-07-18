import { HorizontalBar } from '@/components/horizontal-bar';
import { ImageWithFallback } from '@/components/image-with-fallback';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PROJECTS } from '@/models';
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si';

export default function ProjectsPage() {
  return (
    <>
      <div className='h-16 fixed w-full pl-6 pr-6 md:pr-16 z-10 bg-sidebar/40 backdrop-blur-xs shadow-xs'>
        {/* copied from index.tsx */}
        <HorizontalBar showLogoWhenMD />
      </div>
      <div className='pt-18'>
        {/* padding top should be more than the height of the fixed horizontal bar */}
        <div className='relative container mx-auto'>
          <div>
            {Object.values(PROJECTS).map((project) => (
              <div key={project.id} className='max-w-sm'>
                <Card className='flex flex-col gap-4'>
                  <CardHeader>
                    <Link href={`/projects/${project.id}`}>
                      <AspectRatio ratio={4064 / 2334} className='bg-muted rounded-lg overflow-hidden'>
                        <ImageWithFallback
                          src={`${process.env.NEXT_PUBLIC_GITHUB_RAW_REPO_LINK}/${project.github_repo_name}/refs/heads/main/public/${project.github_main_image}`}
                          fallbackSrc='https://placehold.co/580x333/lightblue/white/png?text=Project+Image'
                          width={580}
                          height={333}
                          alt='project-image'
                          className='dark:brightness-50'
                        />
                      </AspectRatio>
                    </Link>
                  </CardHeader>
                  <CardContent>
                    <Link href={`/projects/${project.id}`}>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>
                        <p>{project.small_description}</p>
                      </CardDescription>
                    </Link>
                  </CardContent>
                  <CardFooter className='flex flex-col items-start gap-3'>
                    <div className='flex gap-2'>
                      <a href={`${process.env.NEXT_PUBLIC_GITHUB_REPO_LINK}/${project.github_repo_name}`} target='_blank'>
                        <Button className='flex items-center gap-2 cursor-pointer'>
                          <SiGithub /> Github
                        </Button>
                      </a>
                      {project.demo_link && (
                        <a href={project.demo_link} target='_blank'>
                          <Button className='flex items-center gap-2 cursor-pointer'>
                            <FaExternalLinkAlt /> Demo
                          </Button>
                        </a>
                      )}
                    </div>
                    <div className='flex flex-wrap gap-2'>
                      {project.tools.map((tool, index) => (
                        <Badge key={index} variant='secondary'>
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
