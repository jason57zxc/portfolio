/** @type {import('next').NextConfig} */

const withNextIntl = require('next-intl/plugin')('./i18n.ts');

const withPWA = require("next-pwa")({
    dest: "public", // Destination directory for the PWA files
    disable: process.env.NODE_ENV === "development", // Disable PWA in development mode
    register: true, // Register the PWA service worker
    skipWaiting: true, // Skip waiting for service worker activation
});


const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'instagram.ftpe2-1.fna.fbcdn.net',
            },
        ],
    },
    experimental: {
        serverActions: true,
    }
}

module.exports = withPWA(withNextIntl(nextConfig))
