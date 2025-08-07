/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Replace with the actual hostname of your image source
        port: "",
        pathname: "/**", // Allows any path on this hostname
      },
      
    ],
  },
};

export default nextConfig;
