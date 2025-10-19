/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ['localhost', 'educonnect-portal.onrender.com'],
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.onrender.com',
      },
    ],
  },

  // Ensure static files are properly copied
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
}

module.exports = nextConfig