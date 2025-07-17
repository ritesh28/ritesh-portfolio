/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [new URL('https://raw.githubusercontent.com/ritesh28/**')],
  },
};

module.exports = nextConfig;
