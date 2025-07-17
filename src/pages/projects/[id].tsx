import { PROJECTS } from '@/models';
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { MDXClient } from 'next-mdx-remote-client';
import { serialize, type SerializeResult } from 'next-mdx-remote-client/serialize';

export const getServerSideProps = (async ({ params }: GetServerSidePropsContext) => {
  const { id: projectId } = params;

  if (projectId instanceof Array || !(projectId in PROJECTS)) {
    return {
      notFound: true,
    };
  }

  const project = PROJECTS[projectId];
  const readmeMD = `${process.env.NEXT_PUBLIC_GITHUB_RAW_REPO_LINK}/${project.github_repo_name}/refs/heads/main/README.md`;
  const res = await fetch(readmeMD);
  const mdxText = await res.text();
  const mdxSource = await serialize({ source: mdxText });
  return {
    props: {
      mdxSource,
    },
  };
}) satisfies GetServerSideProps<{ mdxSource: SerializeResult }>;

export default function ProjectsPage({ mdxSource }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if ('error' in mdxSource) {
    // either render error UI or throw `mdxSource.error`
  }
  return (
    <div className='prose dark:prose-invert'>
      <MDXClient {...mdxSource} />
    </div>
  );
}
