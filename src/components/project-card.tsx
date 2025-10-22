import { AnimateButtonVariant } from '@/components/animate-button-variant';
import { ImageWithFallback } from '@/components/image-with-fallback';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
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
      <Card className={cn('flex gap-4 relative h-full p-0', isHorizontal ? 'flex-row' : 'flex-col pb-4')}>
        {showFeaturedBadge && project.featured && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Badge className='absolute top-2 right-2 w-7 h-7 rounded-full p-0 bg-featured z-10'>
                <Star />
              </Badge>
            </TooltipTrigger>
            <TooltipContent>
              <p>Featured</p>
            </TooltipContent>
          </Tooltip>
        )}
        <CardHeader
          className={cn(
            'shrink-0 rounded-lg overflow-hidden block p-0 h-full',
            isHorizontal ? 'self-center basis-[21rem] rounded-r-none border-r-2' : 'basis-[12rem] rounded-b-none border-b-2',
          )}
        >
          <motion.div layout='position' className='h-full'>
            <Link href={`/projects/${project.id}`} scroll={false} className='block h-full'>
              <motion.div className='h-full' initial={{ scale: 1.15 }} whileHover={{ scale: 1.25 }} transition={{ type: 'tween' }}>
                <ImageWithFallback
                  src={`${process.env.NEXT_PUBLIC_GITHUB_RAW_LINK}/${project.github_repo_name}/refs/heads/main/${project.github_image_path}`}
                  fallbackSrc='https://placehold.co/580x333/lightblue/white/png?text=Project+Image'
                  width={610}
                  height={350}
                  alt='project-image'
                  className='dark:brightness-80 w-full h-full object-cover'
                />
              </motion.div>
            </Link>
          </motion.div>
        </CardHeader>
        <CardContent className={cn(isHorizontal && 'basis-[60%] py-2')}>
          <Link href={`/projects/${project.id}`} scroll={false} className='group'>
            <CardTitle>
              <motion.h3 layout='position'>{project.title}</motion.h3>
            </CardTitle>
            <CardDescription>
              <motion.span layout='position'>{project.small_description}</motion.span>{' '}
              <span className='inline-flex items-center gap-1 underline text-foreground group-hover:gap-2 ease-out duration-300 transition-all'>
                Read More <MoveRight className='size-4' />
              </span>
            </CardDescription>
          </Link>
        </CardContent>
        <CardFooter className={cn('flex flex-col items-start gap-3', isHorizontal && 'py-2')}>
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
