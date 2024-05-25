/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '', // Empty string for default ports (80 for http, 443 for https)
        pathname: '/**', // Match all paths
      },
    ],
  },
}

export default nextConfig
