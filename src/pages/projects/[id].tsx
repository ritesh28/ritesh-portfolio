import { HeadComponent } from '@/components/head';
import { HorizontalBar } from '@/components/horizontal-bar';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import aLinks from '@/lib/remark-anchor-links';
import { PROJECTS, Project } from '@/models';
import imgLinks from '@pondorasti/remark-img-links';
import { Ellipsis, ExternalLink, House } from 'lucide-react';
import { GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { MDXClient } from 'next-mdx-remote-client';
import { serialize, type SerializeResult } from 'next-mdx-remote-client/serialize';
import Link from 'next/link';
import { SiGithub } from 'react-icons/si';
import remarkGfm from 'remark-gfm';

const headContent = (project: Project) => ({
  title: `${project.title} | Ritesh Raj`,
  description: `${project.small_description} Build by Ritesh Raj.`,
  img: `${process.env.NEXT_PUBLIC_GITHUB_RAW_REPO_LINK}/${project.github_repo_name}/refs/heads/main/${project.github_image_path}`,
  keywords: ['ritesh raj', 'portfolio', 'full stack developer', 'generative AI engineer', project.title, ...project.tools, 'github'],
});

export function getStaticPaths() {
  const paths = Object.keys(PROJECTS).map((projectId) => ({
    params: { id: projectId },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export const getStaticProps = (async ({ params }: GetStaticPropsContext) => {
  const { id: projectId } = params;

  // this if block is not needed since `fallback` is set to false in `getStaticPaths`
  if (projectId instanceof Array || !(projectId in PROJECTS)) {
    return {
      notFound: true,
    };
  }

  const project = PROJECTS[projectId];
  const readmeMDUrl = `https://api.github.com/repos/ritesh28/${project.github_repo_name}/contents/README.md`;
  const res = await fetch(readmeMDUrl, {
    headers: {
      Accept: 'application/vnd.github.raw+json',
      Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });

  const imageAbsolutePath = `${process.env.NEXT_PUBLIC_GITHUB_RAW_REPO_LINK}/${project.github_repo_name}/refs/heads/main/`;
  const linkAbsolutePath = `${process.env.NEXT_PUBLIC_GITHUB_REPO_LINK}/${project.github_repo_name}/tree/main/`;
  const mdxText = await res.text();
  const mdxSource = await serialize({
    source: mdxText,
    options: {
      mdxOptions: { remarkPlugins: [remarkGfm, [imgLinks, { absolutePath: imageAbsolutePath }], [aLinks, { absolutePath: linkAbsolutePath }]] },
    },
  });
  return {
    props: {
      mdxSource,
      project,
    },
  };
}) satisfies GetStaticProps<{ mdxSource: SerializeResult; project: Project }>;

export default function ProjectsPage({ mdxSource, project }: InferGetStaticPropsType<typeof getStaticProps>) {
  if ('error' in mdxSource) {
    // either render error UI or throw `mdxSource.error`
  }
  return (
    <>
      <HeadComponent {...headContent(project)} />
      <div className='h-16 fixed w-full pl-6 pr-6 md:pr-16 z-10 bg-sidebar/40 backdrop-blur-xs shadow-xs'>
        {/* copied from index.tsx */}
        <HorizontalBar showLogoWhenMD />
      </div>
      <div className='pt-18'>
        {/* padding top should be more than the height of the fixed horizontal bar */}
        <div className='relative container mx-auto'>
          <div className='prose dark:prose-invert max-w-full'>
            <MDXClient compiledSource='' {...mdxSource} />
            {/* todo: look into 'compiledSource' */}
          </div>
          <div className='fixed bottom-[2rem] right-[2rem]'>
            <Popover>
              <PopoverTrigger asChild>
                <Button className='h-[4rem] w-[4rem] rounded-full'>
                  <Ellipsis className='size-8' />
                </Button>
              </PopoverTrigger>
              <PopoverContent className='w-fit'>
                <div className='flex flex-col items-center justify-center gap-4'>
                  <Link href='/'>
                    <Button className='flex items-center gap-2 cursor-pointer'>
                      <House />
                      Home
                    </Button>
                  </Link>
                  <a href={`${process.env.NEXT_PUBLIC_GITHUB_REPO_LINK}/${project.github_repo_name}`} target='_blank'>
                    <Button className='flex items-center gap-2 cursor-pointer'>
                      <SiGithub /> Github
                    </Button>
                  </a>
                  {project.demo_link && (
                    <a href={project.demo_link} target='_blank'>
                      <Button className='flex items-center gap-2 cursor-pointer'>
                        <ExternalLink /> Demo
                      </Button>
                    </a>
                  )}
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </>
  );
}
