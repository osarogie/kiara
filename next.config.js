/* eslint-disable */
const path = require('path')

const images = require('next-images')
const transpileModules = require('@weco/next-plugin-transpile-modules')
const sass = require('@zeit/next-sass')
const offline = require('next-offline')
const withPlugins = require('next-compose-plugins')
const withSourceMaps = require('@zeit/next-source-maps')()
const SentryWebpackPlugin = require('@sentry/webpack-plugin')
const {
  NEXT_PUBLIC_SENTRY_DSN: SENTRY_DSN,
  SENTRY_ORG,
  SENTRY_PROJECT,
  SENTRY_AUTH_TOKEN,
  NODE_ENV
} = process.env

process.env.SENTRY_DSN = SENTRY_DSN

const bundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

if (typeof require !== 'undefined') {
  require.extensions['.css'] = () => {}
}

const nextConfig = {
  poweredByHeader: false,
  webpack(config) {
    const originalEntry = config.entry
    config.entry = async () => {
      const entries = await originalEntry()

      if (
        entries['main.js'] &&
        !entries['main.js'].includes('./client/polyfills.js')
      ) {
        entries['main.js'].unshift('./client/polyfills.js')
      }

      return entries
    }

    config.resolve.alias = Object.assign({}, config.resolve.alias, {
      'react-native$': 'react-native-web'
    })

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
        test: /\.(svg|ttf|eot)$/i,
        loader: 'file-loader?outputPath=static/'
      }
    )

    if (!options.isServer) {
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
          release: options.buildId
        })
      )
    }

    return config
  }
}

module.exports = withPlugins(
  [
    images,
    sass,
    bundleAnalyzer,
    withSourceMaps,

    [
      transpileModules,
      {
        transpileModules: ['@shoutem', 'react-native-web']
      }
    ],

    [
      offline,
      {
        workboxOpts: {
          exclude: [/__generated__/],
          runtimeCaching: [
            {
              urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
              handler: 'CacheFirst',
              options: {
                cacheName: 'images',
                expiration: {
                  maxEntries: 10
                }
              }
            },
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
