/* eslint-disable */
const path = require('path')
// const withCss = require('@zeit/next-css')
const withImages = require('next-images')
const withTM = require('@weco/next-plugin-transpile-modules')
const withSass = require('@zeit/next-sass')

if (typeof require !== 'undefined') {
  require.extensions['.css'] = () => {}
}

module.exports = withImages(
  withSass(
    withTM({
      transpileModules: ['@shoutem'],

      webpack(config) {
        config.resolve.alias = Object.assign({}, config.resolve.alias, {
          'react-native': 'react-native-web'
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
