/* eslint-disable */
// const fs = require('fs')
const path = require('path')
const images = require('next-images')
const transpileModules = require('@weco/next-plugin-transpile-modules')
const sass = require('@zeit/next-sass')
const offline = require('next-offline')
const withPlugins = require('next-compose-plugins')
const less = require('@zeit/next-less')

const bundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

if (typeof require !== 'undefined') {
  require.extensions['.css'] = () => {}
  require.extensions['.less'] = file => {}
}

const nextConfig = {
  poweredByHeader: false,
  webpack(config, { isServer }) {
    config.node = {
      fs: 'empty'
    }

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
      'react-native$': 'react-native-web',
      'react-native-vector-icons': './src/components/vector-icons'
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
        test: /\.(jpg|jpeg|png|eot|ttf|svg)$/i,
        loader: 'file-loader?outputPath=static/'
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
    }

    return config
  }
}

module.exports = withPlugins(
  [
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
          'react-native-web',
          'react-native-paper',
          'react-native-safe-area-view',
          'react-native-vector-icons'
        ]
      }
    ],

    [
      offline,
      {
        target: 'serverless',
        transformManifest: manifest => ['/'].concat(manifest),
        workboxOpts: {
          exclude: [/__generated__/],
          runtimeCaching: [
            {
              urlPattern: /\.(?:jpg|jpeg|png|eot|ttf|svg)$/,
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
                cacheName: 'https-calls',
                networkTimeoutSeconds: 15,
                expiration: {
                  maxEntries: 150,
                  maxAgeSeconds: 30 * 24 * 60 * 60 // 1 month
                },
                cacheableResponse: {
                  statuses: [0, 200]
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
