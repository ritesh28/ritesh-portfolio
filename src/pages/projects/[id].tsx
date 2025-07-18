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
  const readmeMDUrl = `https://api.github.com/repos/ritesh28/${project.github_repo_name}/contents/README.md`;
  const res = await fetch(readmeMDUrl, {
    headers: {
      Accept: 'application/vnd.github.raw+json',
      Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });
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
      {/* todo: look into 'compiledSource' */}
      <MDXClient compiledSource='' {...mdxSource} />
    </div>
  );
}
