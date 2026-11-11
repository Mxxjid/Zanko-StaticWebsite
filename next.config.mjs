/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false,

    formats: ["image/webp", "image/avif"],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/**", // همه مسیرها
      },
    ],

    // loader سفارشی برای Sanity
    loader: "custom",
    loaderFile: "./src/utils/sanityImageLoader.js", // مسیر فایل لودر
  },

  reactStrictMode: true,
};

export default nextConfig;