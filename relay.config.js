module.exports = {
  src: './',
  schema: './schema.graphql',
  exclude: [
    '**/node_modules/**',
    '**/__mocks__/**',
    '**/__generated__/**',
    './artifacts/relay/**',
    './tc.config.js'
  ],
  language: 'typescript',
  artifactDirectory: './artifacts/relay'
}
