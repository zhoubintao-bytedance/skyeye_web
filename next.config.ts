import type { NextConfig } from "next";

const envBasePath = process.env.NEXT_PUBLIC_BASE_PATH;
const basePath =
  typeof envBasePath === "string"
    ? envBasePath
    : process.env.NODE_ENV === "production"
      ? "/skyeye_web"
      : "";

const nextConfig: NextConfig = {
  /**
   * Enable static exports for GitHub Pages
   */
  output: "export",

  /**
   * Set base path for GitHub Pages
   */
  basePath: basePath || undefined,

  /**
   * Set asset prefix for GitHub Pages
   */
  assetPrefix: basePath ? `${basePath}/` : undefined,

  /**
   * Disable image optimization for static export
   */
  images: {
    unoptimized: true,
  },

  /**
   * Expose basePath as env variable for <img> tags
   */
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
