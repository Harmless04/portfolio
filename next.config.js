/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns  : [
            {
                protocol : 'https',
                hostname:'litt.citizendigitalfoundation.org',
            },
        ],
},
};
module.exports = nextConfig
 