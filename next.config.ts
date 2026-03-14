import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Enable static exports for GitHub Pages
   */
  output: "export",
  
  /**
   * Set base path for GitHub Pages
   * This is the repository name: /skyeye_web
   */
  basePath: "/skyeye_web",
  
  /**
   * Set asset prefix for GitHub Pages
   */
  assetPrefix: "/skyeye_web/",
  
  /**
   * Disable image optimization for static export
   */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
