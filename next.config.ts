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
};

export default withPayload(withPlaiceholder(nextConfig));
