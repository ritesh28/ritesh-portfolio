import { AnimateButtonVariant } from '@/components/animate-button-variant';
import { ImageWithFallback } from '@/components/image-with-fallback';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
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
    <motion.div
      layout
      layoutId={`${layoutPrefix}-project-${project.id}-card`}
      data-slot='card'
      className={cn(
        'bg-card text-card-foreground relative flex h-full rounded-xl border p-0 shadow-sm',
        isHorizontal ? 'flex-row gap-6' : 'flex-col gap-5 pb-6',
      )}
    >
      {showFeaturedBadge && project.featured && (
        <motion.div layout='position' className='absolute top-3 right-3 z-10'>
          <Tooltip>
            <TooltipTrigger asChild>
              <Badge className='h-7 w-7 rounded-full bg-featured p-0'>
                <Star />
              </Badge>
            </TooltipTrigger>
            <TooltipContent>
              <p>Featured</p>
            </TooltipContent>
          </Tooltip>
        </motion.div>
      )}
      <CardHeader
        className={cn(
          'block shrink-0 overflow-hidden rounded-lg bg-muted p-0',
          isHorizontal
            ? 'w-[min(100%,21rem)] basis-[21rem] self-center rounded-r-none border-r-2'
            : 'w-full rounded-b-none border-b-2',
        )}
      >
        <motion.div layout='position' className='aspect-[610/350] w-full'>
          <Link href={`/projects/${project.id}`} scroll={false} className='block h-full w-full'>
            <motion.div
              className='h-full w-full'
              initial={false}
              whileHover={{ scale: 1.04 }}
              transition={{ type: 'tween', duration: 0.25 }}
            >
              <ImageWithFallback
                src={`${process.env.NEXT_PUBLIC_GITHUB_RAW_LINK}/${project.github_repo_name}/refs/heads/main/${project.github_image_path}`}
                fallbackSrc='https://placehold.co/610x350/lightblue/white/png?text=Project+Image'
                width={610}
                height={350}
                alt={`${project.title} preview`}
                className='dark:brightness-80 h-full w-full object-contain'
              />
            </motion.div>
          </Link>
        </motion.div>
      </CardHeader>
      <motion.div layout='position' className={cn('flex min-w-0 flex-col gap-5', isHorizontal ? 'basis-[60%] justify-center py-5' : '')}>
        <CardContent className={cn('space-y-3', isHorizontal ? 'px-6 pt-1 pb-0' : 'px-6 pt-1')}>
          <Link href={`/projects/${project.id}`} scroll={false} className='group block space-y-3'>
            <CardTitle className='text-lg leading-snug'>
              <h3>{project.title}</h3>
            </CardTitle>
            <CardDescription className='leading-relaxed'>
              <span>{project.small_description}</span>{' '}
              <span className='inline-flex items-center gap-1 text-accent-text underline transition-all duration-300 ease-out group-hover:gap-2'>
                Read More <MoveRight className='size-4' />
              </span>
            </CardDescription>
          </Link>
        </CardContent>
        <CardFooter className={cn('flex flex-col items-start gap-4 px-6', isHorizontal ? 'pt-0 pb-1' : 'pt-0')}>
          <div className='flex flex-wrap gap-2.5'>
            <a href={`${process.env.NEXT_PUBLIC_GITHUB_LINK}/${project.github_repo_name}`} target='_blank'>
              <AnimateButtonVariant>
                <Button className='flex cursor-pointer items-center gap-2'>
                  <SiGithub /> Github
                </Button>
              </AnimateButtonVariant>
            </a>
            {project.demo_link && (
              <a href={project.demo_link} target='_blank'>
                <AnimateButtonVariant>
                  <Button variant='outline' className='flex cursor-pointer items-center gap-2'>
                    <ExternalLink /> Demo
                  </Button>
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
      </motion.div>
    </motion.div>
  );
}
