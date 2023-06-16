import addMDX from "@next/mdx";
import rehypeSlug from "rehype-slug";

/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/photo-*",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

export default addMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [rehypeSlug],
  },
})(nextConfig);
