import { ImageWithFallback } from '@/components/image-with-fallback';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PROJECTS } from '@/models';
import Link from 'next/link';
import { AiFillProject } from 'react-icons/ai';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si';

export function ProjectsSection() {
  return (
    <>
      <h3 className='text-[clamp(2rem,1.4966rem+2.3973vw,3.75rem)] my-4 font-semibold flex items-center before:border-b-2 before:grow before:mr-5'>
        Projects
      </h3>
      <Link href='/projects'>
        <Button className='mb-3 px-8 py-7 cursor-pointer'>
          <div className='flex items-center gap-4'>
            <AiFillProject />
            More Projects
          </div>
        </Button>
      </Link>
      <ul className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3'>
        {Object.values(PROJECTS)
          .filter((project) => project.featured)
          .map((project) => (
            <li key={project.id}>
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
            </li>
          ))}
      </ul>
    </>
  );
}
