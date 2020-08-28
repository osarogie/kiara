/* eslint-disable */
// const fs = require('fs')
const path = require('path')
const images = require('next-images')
const transpileModules = require('@weco/next-plugin-transpile-modules')
const sass = require('@zeit/next-sass')
const offline = require('next-offline')
const withPlugins = require('next-compose-plugins')
const less = require('@zeit/next-less')
const sourceMaps = require('@zeit/next-source-maps')()
const SentryWebpackPlugin = require('@sentry/webpack-plugin')
const {
  NEXT_PUBLIC_SENTRY_DSN: SENTRY_DSN,
  SENTRY_ORG,
  SENTRY_PROJECT,
  SENTRY_AUTH_TOKEN,
  NODE_ENV
} = process.env

process.env.SENTRY_DSN = SENTRY_DSN
const packageJson = require('./package')
const date = new Date()

const bundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

if (typeof require !== 'undefined') {
  require.extensions['.css'] = () => {}
  require.extensions['.less'] = file => {}
}

const nextConfig = {
  poweredByHeader: 'Crystal',
  target: 'serverless',
  env: {
    BUILD_TIME: date.toString(),
    BUILD_TIMESTAMP: +date,
    APP_NAME: packageJson.name,
    APP_VERSION: packageJson.version
  },
  webpack(config, { isServer, buildId }) {
    const APP_VERSION_RELEASE = `${packageJson.version}_${buildId}`

    // Dynamically add some "env" variables that will be replaced during the build
    // config.plugins[1].definitions['process.env.APP_RELEASE'] = JSON.stringify(
    //   buildId
    // )
    // config.plugins[1].definitions[
    //   'process.env.APP_VERSION_RELEASE'
    // ] = JSON.stringify(APP_VERSION_RELEASE)

    if (isServer) {
      // Trick to only log once
      console.debug(`[webpack] Building release "${APP_VERSION_RELEASE}"`)
    }

    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
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

    config.module.rules.push(
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader:
          'url-loader?limit=10000&mimetype=application/font-woff&outputPath=static/'
      },
      {
        test: /\.(jpg|jpeg|png)$/i,
        loader: 'file-loader?outputPath=static/'
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              outputPath: 'static/',
              // optional, just to prettify file names
              name: '[name].[ext]'
            }
          }
        ]
      }
    )

    if (isServer) {
      const antStyles = /antd\/.*?\/style.*?/
      const origExternals = [...config.externals]
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback()
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback)
          } else {
            callback()
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals)
      ]

      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader'
      })
    } else {
      config.resolve.alias['@sentry/node'] = '@sentry/browser'
    }

    if (
      SENTRY_DSN &&
      SENTRY_ORG &&
      SENTRY_PROJECT &&
      SENTRY_AUTH_TOKEN &&
      NODE_ENV === 'production'
    ) {
      config.plugins.push(
        new SentryWebpackPlugin({
          include: '.next',
          ignore: ['node_modules'],
          urlPrefix: '~/_next',
          release: buildId
        })
      )
    }

    return config
  },
  async rewrites() {
    return [
      {
        source: '/service-worker.js',
        destination: '/_next/static/service-worker.js'
      }
    ]
  }
}

module.exports = withPlugins(
  [
    sourceMaps,
    images,
    sass,
    bundleAnalyzer,

    [
      less,
      {
        lessLoaderOptions: {
          javascriptEnabled: true
        }
      }
    ],

    [
      transpileModules,
      {
        transpileModules: [
          '@shoutem',
          'react-native-paper',
          'react-native-safe-area-view',
          'react-native-vector-icons'
        ]
      }
    ],

    [
      offline,
      {
        transformManifest: manifest => ['/'].concat(manifest),
        workboxOpts: {
          swDest: process.env.NEXT_EXPORT
            ? 'service-worker.js'
            : 'static/service-worker.js',
          exclude: [/__generated__/],
          runtimeCaching: [
            {
              urlPattern: /^https?.*/,
              handler: 'NetworkFirst',
              options: {
                cacheName: 'offlineCache',
                expiration: {
                  maxEntries: 200
                }
              }
            }
          ]
        }
      }
    ]
  ],
  nextConfig
)
