import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'res.cloudinary.com',
      port: '',
      pathname: '/**'
    },
    {
      protocol: 'https',
      hostname: 'cdn.sanity.io',
      port: '',
      pathname: '/**'
    },
    {
      protocol: 'https',
      hostname: 'images.pexels.com',
      port: '',
      pathname: '/**'
    },
  ]
  },
};

export default nextConfig;
