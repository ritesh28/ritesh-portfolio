import { ImageWithFallback } from '@/components/image-with-fallback';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Project } from '@/models';
import { Star } from 'lucide-react';
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si';

interface ProjectCardVerticalProps {
  project: Project;
  showFeaturedBadge?: boolean;
}
export function ProjectCardVertical({ project, showFeaturedBadge = false }: ProjectCardVerticalProps) {
  return (
    <Card className='flex flex-col gap-4 relative'>
      {showFeaturedBadge && (
        <Badge className='absolute top-2 right-2 h-5 w-5 rounded-full p-0 bg-featured'>
          <Star />
        </Badge>
      )}
      <CardHeader>
        <Link href={`/projects/${project.id}`}>
          <AspectRatio ratio={4064 / 2334} className='bg-muted rounded-lg overflow-hidden'>
            <ImageWithFallback
              src={`${process.env.NEXT_PUBLIC_GITHUB_RAW_REPO_LINK}/${project.github_repo_name}/refs/heads/main/${project.github_image_path}`}
              fallbackSrc='https://placehold.co/580x333/lightblue/white/png?text=Project+Image'
              width={580}
              height={333}
              alt='project-image'
              className='dark:brightness-80'
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
  );
}
