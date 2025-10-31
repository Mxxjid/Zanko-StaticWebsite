/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false, // بهتره false باشه

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