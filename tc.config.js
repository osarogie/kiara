const apiHost =
  process.env.NODE_ENV === 'production'
    ? process.env.API_HOST
    : 'https://api.thecommunity.ng'

export const apiBaseUrl = `${apiHost}/`

export const baseUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.SITE_HOST
    : 'https://thecommunity.ng'
