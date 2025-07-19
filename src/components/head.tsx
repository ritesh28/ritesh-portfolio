import Head from 'next/head';

interface HeadComponentProps {
  title: string;
  description: string;
  img: string;
  keywords: string[];
}

export function HeadComponent({ title, description, img, keywords }: HeadComponentProps) {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' key='viewport' />
      <title>{title}</title>
      <meta name='description' content={description} key='description' />
      {keywords.length && <meta name='keywords' content={keywords.join(', ')} key='keywords' />}

      {/* Page OG */}
      <meta property='og:title' content={title} key='og:title' />
      <meta property='og:description' content={description} key='og:description' />
      <meta property='og:image' content={img} key='og:image' />

      {/* Page Twitter */}
      <meta name='twitter:title' content={title} key='twitter:title' />
      <meta name='twitter:description' content={description} key='twitter:description' />
      <meta name='twitter:image' content={img} key='twitter:image' />
    </Head>
  );
}
