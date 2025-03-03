/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/the-quiet-makers',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: true,
  },
  assetPrefix: '/the-quiet-makers',
};

module.exports = nextConfig; 