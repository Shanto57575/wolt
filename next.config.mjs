/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'imageproxy.wolt.com',
            },
        ],
    },

};

export default nextConfig;
