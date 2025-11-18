/** @type {import('next').NextConfig} */
const WebpackObfuscator = require('webpack-obfuscator');

const nextConfig = {
  reactStrictMode: true,

  // Production optimizations - hide source code
  productionBrowserSourceMaps: false, // Disable source maps in production
  
  // Minimize and obfuscate code
  swcMinify: true, // Use SWC for faster minification
  
  // Compiler options for optimization
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'], // Keep only errors and warnings
    } : false,
    // DISABLE React DevTools in production
    reactRemoveProperties: process.env.NODE_ENV === 'production' ? { properties: ['^data-test'] } : false,
  },
  
  // CRITICAL: Disable React DevTools in production
  env: {
    NEXT_PUBLIC_DISABLE_DEVTOOLS: process.env.NODE_ENV === 'production' ? 'true' : 'false',
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },

  images: {
    domains: ['localhost', 'educonnect-portal.onrender.com', 'mbaninja.in', 'www.mbaninja.in'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.onrender.com',
      },
      {
        protocol: 'https',
        hostname: 'mbaninja.in',
      },
      {
        protocol: 'https',
        hostname: 'www.mbaninja.in',
      },
    ],
  },

  // Enhanced webpack configuration
  webpack: (config, { isServer, dev }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }

    // Production mode optimizations WITHOUT aggressive obfuscation
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        minimize: true,
        usedExports: true, // Tree shaking
        sideEffects: false,
      };

      // 🔒 LIGHT OBFUSCATION - Protect code without breaking it
      // TEMPORARY: Disabled aggressive obfuscation due to syntax errors
      // The previous settings were too aggressive and caused:
      // - "Identifier 'g' has already been declared" errors
      // - "'arguments' is not allowed in class field" errors
      // - Function call errors
      
      /* DISABLED TEMPORARILY
      config.plugins.push(
        new WebpackObfuscator(
          {
            compact: true,
            controlFlowFlattening: false,
            deadCodeInjection: false,
            debugProtection: false,
            disableConsoleOutput: false,
            identifierNamesGenerator: 'hexadecimal',
            rotateStringArray: true,
            selfDefending: false,
            stringArray: true,
            stringArrayEncoding: [],
            stringArrayThreshold: 0.75,
            target: 'browser',
            sourceMap: false,
          },
          []
        )
      );
      */
    }

    return config;
  },
}

module.exports = nextConfig