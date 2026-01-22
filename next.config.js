// @ts-check

const isProduction = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: isProduction ? "/sairishikreddy.io" : "",
    assetPrefix: isProduction ? "/sairishikreddy.io/" : "",

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
    output: "export",
    trailingSlash: true,
    productionBrowserSourceMaps: isProduction,
    images: {
        unoptimized: true,
    },
    pageExtensions: ["ts", "tsx", "js", "jsx", "mdx"],
};

module.exports = nextConfig;
