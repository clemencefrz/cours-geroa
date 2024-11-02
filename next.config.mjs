/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['media.istockphoto.com'],
    },
    async rewrites() {
      return [{ source: '/api/:path*', destination: '/src/infrastructure/api/:path*' }]
    },
  };
  

export default nextConfig;
