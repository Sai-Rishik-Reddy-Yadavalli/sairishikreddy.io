// @ts-check

const isProduction = process.env.NODE_ENV === "production";
const outputDir = process.env.BRANCH === 'dev' ? 'dev' : '.next';

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Correctly handle the subpath for GitHub Pages
    basePath: "/sairishikreddy.io",
    assetPrefix: "/sairishikreddy.io/",

    compiler: {
        reactRemoveProperties: isProduction,
        removeConsole: isProduction,
        styledComponents: {
            displayName: !isProduction,
            minify: isProduction,
            pure: true,
        },
    },
    devIndicators: {
        position: "top-right",
    },
    experimental: {},
    output: "export",
    trailingSlash: true,
    productionBrowserSourceMaps: isProduction,
    images: {
        unoptimized: true,
    },
    pageExtensions: ["ts", "tsx", "js", "jsx", "mdx"],
};

module.exports = nextConfig;
