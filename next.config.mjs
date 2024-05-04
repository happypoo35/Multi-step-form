/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ["./src"],
    prependData: '@import "@/styles/config";',
  },
};

export default nextConfig;
