/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [new URL('https://placehold.co/**')], //todo: remove later
  },
};

module.exports = nextConfig;
