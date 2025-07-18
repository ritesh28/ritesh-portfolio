/** @type {import('next').NextConfig} */
const nextConfig = {
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

module.exports = nextConfig;
