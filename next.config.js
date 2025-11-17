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

    // Production mode optimizations + Obfuscation
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        minimize: true,
        usedExports: true, // Tree shaking
        sideEffects: false,
      };

      // 🔒 MAXIMUM OBFUSCATION - Make ALL code unreadable
      config.plugins.push(
        new WebpackObfuscator(
          {
            // AGGRESSIVE String obfuscation
            rotateStringArray: true,
            stringArray: true,
            stringArrayCallsTransform: true,
            stringArrayCallsTransformThreshold: 1,
            stringArrayEncoding: ['rc4'], // Strong encryption
            stringArrayIndexesType: ['hexadecimal-number'],
            stringArrayIndexShift: true,
            stringArrayRotate: true,
            stringArrayShuffle: true,
            stringArrayWrappersCount: 5,
            stringArrayWrappersChainedCalls: true,
            stringArrayWrappersParametersMaxCount: 5,
            stringArrayWrappersType: 'function',
            stringArrayThreshold: 1,
            
            // AGGRESSIVE Control flow obfuscation
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            
            // Dead code injection to confuse
            deadCodeInjection: true,
            deadCodeInjectionThreshold: 0.5,
            
            // AGGRESSIVE Variable/function name obfuscation
            identifierNamesGenerator: 'mangled-shuffled', // Most aggressive
            identifiersPrefix: '',
            renameGlobals: false,
            renameProperties: false, // Don't rename properties (can break React)
            
            // Additional security layers
            selfDefending: true, // Protect against formatting
            compact: true, // Remove whitespace
            debugProtection: false, // Don't add debug protection (can cause issues)
            debugProtectionInterval: 0,
            
            // Disable console output
            disableConsoleOutput: false, // Keep console.error working
            
            // Number obfuscation
            numbersToExpressions: true,
            
            // Simplify for better compatibility
            simplify: true,
            
            // Split strings
            splitStrings: true,
            splitStringsChunkLength: 5,
            
            // Transform object keys
            transformObjectKeys: true,
            
            // Unicode escape sequence for extra obfuscation
            unicodeEscapeSequence: false, // Can increase file size significantly
            
            // Target environment
            target: 'browser',
            
            // Source map (disabled)
            sourceMap: false,
          },
          [
            // Only exclude critical Next.js runtime files
            'polyfills-*.js',
            'webpack-*.js',
          ]
        )
      );
    }

    return config;
  },
}

module.exports = nextConfig