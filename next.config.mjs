/** @type {import('next').NextConfig} */

// GitHub Pages serves this as the organization site from the domain root:
//   https://tlcs-uoa.github.io/
// The repo is named `tlcs-uoa.github.io`, so there is no sub-path prefix and
// basePath is empty. next/image, next/link, and _next/* assets need no prefix;
// plain <a href> links to files in /public (see lib/content.ts) read basePath
// back via NEXT_PUBLIC_BASE_PATH, which is harmless when empty.
//
// Serving from a sub-path instead (a project site at /<repo>/)? Set basePath to
// "/<repo>".
const basePath = "";

const nextConfig = {
  // Emit a fully static site to ./out: plain HTML/CSS/JS, no Node runtime.
  output: "export",

  // Static export cannot use the on-demand Image Optimization server.
  images: { unoptimized: true },

  // Emit each route as a directory with index.html, for clean sub-path URLs.
  trailingSlash: true,

  basePath,

  // Expose the base path to client code that builds its own asset URLs.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
