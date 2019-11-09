/* eslint-disable */
const path = require('path')
// const withCss = require('@zeit/next-css')
const withImages = require('next-images')
const withTM = require('@weco/next-plugin-transpile-modules')
const withSass = require('@zeit/next-sass')
const withOffline = require('next-offline')

if (typeof require !== 'undefined') {
  require.extensions['.css'] = () => {}
}

module.exports = withOffline(
  withImages(
    withSass(
      withTM({
        poweredByHeader: false,
        transpileModules: ['@shoutem', 'react-native-web'],
        workboxOpts: {
          globPatterns: ['static/**/*'],
          globDirectory: '.',
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
        },
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

          return config
        }
      })
    )
  )
)
