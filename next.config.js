/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        domains: ['placehold.co', 'lh3.googleusercontent.com', 'res.cloudinary.com']
    }
}

module.exports = nextConfig
