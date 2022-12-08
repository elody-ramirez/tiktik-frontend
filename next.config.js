/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['static1.cbrimages.com'],
	},
}

module.exports = nextConfig
