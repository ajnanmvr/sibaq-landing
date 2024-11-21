/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dyxfbp3tf/image/upload/**",
        port: '',
        search: '',

      },
    ],
  },
};

export default nextConfig;
