/** @type {import('next').NextConfig} */

const withNextIntl = require('next-intl/plugin')('./i18n.ts');

const nextConfig = withNextIntl({
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
})

module.exports = nextConfig
