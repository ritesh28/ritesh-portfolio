import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PROJECTS } from '@/models';
import Image from 'next/image';
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
      <Button className='mb-3 px-8 py-6'>
        <Link href='/projects' className='flex items-center gap-2'>
          <AiFillProject />
          More Projects
        </Link>
      </Button>
      <ul className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3'>
        {Object.values(PROJECTS).map((project) => (
          <li key={project.id}>
            <Card className='flex flex-col gap-4'>
              <CardHeader>
                <Link href={`/projects/${project.id}`}>
                  <AspectRatio ratio={4064 / 2334} className='bg-muted rounded-lg overflow-hidden'>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_GITHUB_RAW_REPO_LINK}/${project.github_repo_name}/refs/heads/main/public/${project.github_main_image}`}
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
                  <Button>
                    <a href={`${process.env.NEXT_PUBLIC_GITHUB_REPO_LINK}/${project.github_repo_name}`} target='_blank'>
                      <div className='flex items-center gap-2'>
                        <SiGithub /> Github
                      </div>
                    </a>
                  </Button>
                  {project.demo_link && (
                    <Button>
                      <a href={project.demo_link} target='_blank'>
                        <div className='flex items-center gap-2'>
                          <FaExternalLinkAlt /> Demo
                        </div>
                      </a>
                    </Button>
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
