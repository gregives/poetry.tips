import addMDX from "@next/mdx";

/** @type {import("next").NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/photo-*",
      },
    ],
  },
};

export default addMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})(nextConfig);
