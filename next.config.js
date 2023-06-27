/* eslint-disable */
// const fs = require('fs')
const path = require('path')
const images = require('next-images')
const transpileModules = require('@weco/next-plugin-transpile-modules')
const fs = require('fs')
const offline = require('next-offline')
const withPlugins = require('next-compose-plugins')
const { withSentryConfig } = require('@sentry/nextjs')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')

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

    // config.module.rules.push(
    //   {
    //     test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    //     loader:
    //       'url-loader?limit=10000&mimetype=application/font-woff&outputPath=static/'
    //   },
    //   {
    //     test: /\.(jpg|jpeg|png)$/i,
    //     loader: 'file-loader?outputPath=static/'
    //   },
    //   {
    //     test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
    //     use: [
    //       {
    //         loader: 'file-loader',
    //         options: {
    //           esModule: false,
    //           outputPath: 'static/',
    //           // optional, just to prettify file names
    //           name: '[name].[ext]'
    //         }
    //       }
    //     ]
    //   }
    // )

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
  experimental: {
    transpilePackages: [
      '@shoutem',
      'react-native-paper',
      'react-native-safe-area-view',
      'react-native-vector-icons'
    ]
  }
}

module.exports = nextConfig
// {
// images,
// bundleAnalyzer,

// [
//   offline,
//   {
//     transformManifest: (manifest) => ['/'].concat(manifest),
//     workboxOpts: {
//       swDest: process.env.NEXT_EXPORT
//         ? 'service-worker.js'
//         : 'static/service-worker.js',
//       exclude: [/__generated__/],
//       runtimeCaching: [
//         {
//           urlPattern: /^https?.*/,
//           handler: 'NetworkFirst',
//           options: {
//             cacheName: 'offlineCache',
//             expiration: {
//               maxEntries: 200
//             }
//           }
//         }
//       ]
//     }
//   }
// ],
// [
//   withSentryConfig,
//   {
//     include: '.next',
//     ignore: ['node_modules'],
//     urlPrefix: '~/_next'
//   }
// ]
