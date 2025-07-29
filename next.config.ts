import { withPayload } from '@payloadcms/next/withPayload';
import withPlaiceholder from '@plaiceholder/next';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: process.env.HOSTNAME || '',
      },
    ],
  },
  experimental: {
    reactCompiler: false,
  },
  // Configure headers for better caching control
  async headers() {
    return [
      {
        source: '/api/revalidate',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },
      {
        source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
    ];
  },
};

export default withPayload(withPlaiceholder(nextConfig));
