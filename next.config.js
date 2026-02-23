const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repoName = "garnly";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ...(isGitHubPages
    ? {
        output: "export",
        trailingSlash: true,
        basePath: `/${repoName}`,
        assetPrefix: `/${repoName}/`,
        images: {
          unoptimized: true,
        },
      }
    : {}),
};

export default nextConfig;
