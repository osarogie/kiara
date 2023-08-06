const path = require('path')
const { withSentryConfig } = require('@sentry/nextjs')

const packageJson = require('./package')
const date = new Date()

const bundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  env: {
    BUILD_TIME: date.toString(),
    BUILD_TIMESTAMP: +date,
    APP_NAME: packageJson.name,
    APP_VERSION: packageJson.version
  },
  webpack(config, { isServer, buildId }) {
    const APP_VERSION_RELEASE = `${packageJson.version}_${buildId}`

    if (isServer) {
      // Trick to only log once
      console.debug(`[webpack] Building release "${APP_VERSION_RELEASE}"`)
    }

    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      'react-native$': 'react-native-web'
    }

    config.resolve.extensions = [
      '.web.js',
      '.web.ts',
      '.web.tsx',
      ...config.resolve.extensions
    ]

    config.resolve.modules = [
      path.resolve(__dirname, './src'),
      path.resolve(__dirname, './scss'),
      'node_modules'
    ]

    return config
  },
  async rewrites() {
    return [
      {
        source: '/service-worker.js',
        destination: '/_next/static/service-worker.js'
      }
    ]
  },
  transpilePackages: [
    'react-native-paper',
    'react-native-safe-area-view',
    'react-native-vector-icons'
  ],
  compiler: {
    relay: { artifactDirectory: './artifacts/relay' }
  }
}

module.exports = nextConfig
// [
//   withSentryConfig,
//   {
//     include: '.next',
//     ignore: ['node_modules'],
//     urlPrefix: '~/_next'
//   }
// ]
