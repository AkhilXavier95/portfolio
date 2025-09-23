import type { NextConfig } from "next";

// Configure for static export suitable for GitHub Pages.
// If deploying to a project page (not username.github.io), set NEXT_PUBLIC_BASE_PATH to
// your repo name prefixed with a slash, e.g. "/my-portfolio".
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || undefined
};

export default nextConfig;
