import { AnimateButtonVariant } from '@/components/animate-button-variant';
import { ImageWithFallback } from '@/components/image-with-fallback';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Project } from '@/models';
import { motion } from 'framer-motion';
import { ExternalLink, MoveRight, Star } from 'lucide-react';
import Link from 'next/link';
import { SiGithub } from 'react-icons/si';

interface ProjectCardVerticalProps {
  project: Project;
  showFeaturedBadge?: boolean;
  isHorizontal?: boolean;
  layoutPrefix: string;
}
export function ProjectCard({ project, showFeaturedBadge = false, isHorizontal = false, layoutPrefix }: ProjectCardVerticalProps) {
  return (
    <motion.div layout layoutId={`${layoutPrefix}-project-${project.id}-card`} className='h-full'>
      <Card className={cn('flex gap-4 relative h-full', isHorizontal ? 'flex-row' : 'flex-col')}>
        {showFeaturedBadge && project.featured && (
          <Badge className='absolute top-2 right-2 h-5 w-5 rounded-full p-0 bg-featured'>
            <Star />
          </Badge>
        )}
        <CardHeader
          className={cn(
            'self-center bg-muted rounded-lg overflow-hidden flex items-center justify-center',
            isHorizontal ? 'basis-[20rem] py-2' : 'basis-[12rem] w-full',
          )}
        >
          <motion.div layout='position'>
            <Link href={`/projects/${project.id}`} scroll={false} className='group'>
              <ImageWithFallback
                src={`${process.env.NEXT_PUBLIC_GITHUB_RAW_LINK}/${project.github_repo_name}/refs/heads/main/${project.github_image_path}`}
                fallbackSrc='https://placehold.co/580x333/lightblue/white/png?text=Project+Image'
                width={580}
                height={333}
                alt='project-image'
                className='dark:brightness-80 w-full h-auto object-cover dark:group-hover:opacity-90 group-hover:opacity-85'
              />
            </Link>
          </motion.div>
        </CardHeader>
        <CardContent className={cn(isHorizontal && 'basis-[60%]')}>
          <Link href={`/projects/${project.id}`} scroll={false} className='group'>
            <CardTitle>
              <motion.h3 layout='position'>{project.title}</motion.h3>
            </CardTitle>
            <CardDescription>
              <motion.span layout='position'>{project.small_description}</motion.span>{' '}
              <span className='inline-flex items-center gap-1 group-hover:gap-2 underline text-foreground'>
                Read More <MoveRight className='size-4' />
              </span>
            </CardDescription>
          </Link>
        </CardContent>
        <CardFooter className='flex flex-col items-start gap-3'>
          <div className='flex gap-2'>
            <a href={`${process.env.NEXT_PUBLIC_GITHUB_LINK}/${project.github_repo_name}`} target='_blank'>
              <AnimateButtonVariant>
                <motion.div layout>
                  <Button className='flex items-center gap-2 cursor-pointer'>
                    <SiGithub /> Github
                  </Button>
                </motion.div>
              </AnimateButtonVariant>
            </a>
            {project.demo_link && (
              <a href={project.demo_link} target='_blank'>
                <AnimateButtonVariant>
                  <motion.div layout>
                    <Button className='flex items-center gap-2 cursor-pointer'>
                      <ExternalLink /> Demo
                    </Button>
                  </motion.div>
                </AnimateButtonVariant>
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
    </motion.div>
  );
}
