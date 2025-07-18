// import createMDX from '@next/mdx';
import { NextConfig } from 'next';
// import remarkGfm from 'remark-gfm';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      new URL('https://raw.githubusercontent.com/ritesh28/**'),
      {
        protocol: 'https',
        hostname: 'placehold.co',
        search: '?text=Project+Image',
      },
    ],
  },
};

export default nextConfig;

// const withMDX = createMDX({
//   // Add markdown plugins here, as desired
//   // This only work for the file with extension 'md' and 'mdx'
//   // No use to me since I'm fetching .md from remote location
//   options: {
//     remarkPlugins: [remarkGfm],
//     rehypePlugins: [],
//   },
// });

// // Combine MDX and Next.js config
// export default withMDX(nextConfig);
