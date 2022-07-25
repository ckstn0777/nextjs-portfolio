/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== 'production'
const name = 'nextjs-portfolio'

const nextConfig = {
  assetPrefix: !debug ? `/${name}` : '',
  basePath: !debug ? `/${name}` : '',
  images: {
    loader: 'akamai',
    path: '',
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
