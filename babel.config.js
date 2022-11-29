module.exports = {
  presets: [
    [
      'next/babel',
      {
        'styled-jsx': { optimizeForSpeed: false }
      }
    ]
  ],
  plugins: [
    ['relay', { artifactDirectory: './artifacts/relay' }],
    ['react-native-web', { commonjs: true }],
    'react-native-paper/babel',
    [
      'import',
      {
        libraryName: 'antd'
      }
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          'react-native': 'react-native-web'
        }
      }
    ]
  ]
}
