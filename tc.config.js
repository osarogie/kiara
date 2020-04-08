const apiHost =
  process.env.NODE_ENV === 'production'
    ? 'https://api.thecommunity.ng'
    : 'http://api.dev.local:5000'

export const apiBaseUrl = `${apiHost}/`

export const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://thecommunity.ng'
    : 'http://dev.local:3000'
