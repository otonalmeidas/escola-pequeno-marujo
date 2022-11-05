/** @type {import('next').NextConfig} */

const { clear } = require('console')

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  }
}

module.exports = nextConfig