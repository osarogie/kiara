const dev = process.env.NODE_ENV === 'development'
const isServer = typeof window === 'undefined'
const LOCALHOST = !isServer ? window.location.hostname : 'localhost'

export const Constants = { DEV: dev }
export const WEBSITE_URL = process.env.SITE_HOST
export const DATA_URL = `${process.env.API_HOST}/`
