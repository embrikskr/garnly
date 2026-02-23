const isGitHubPages = process.env.GITHUB_PAGES === "true";
const customDomain = process.env.GITHUB_PAGES_CUSTOM_DOMAIN;
const repoName = "garnly";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ...(isGitHubPages
    ? {
        output: "export",
        trailingSlash: true,
        images: {
          unoptimized: true,
        },
        ...(!customDomain
          ? {
              basePath: `/${repoName}`,
              assetPrefix: `/${repoName}/`,
            }
          : {}),
      }
    : {}),
};

export default nextConfig;
