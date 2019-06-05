const dev = process.env.NODE_ENV === 'development'
const isServer = typeof window === 'undefined'
const LOCALHOST = !isServer ? window.location.hostname : 'localhost'

export const Constants = {
  get user() {
    if (isServer) return null

    return window.__USER__DATA__ || null
  },
  set user(value) {
    if (!isServer) window.__USER__DATA__ = value
  },
  DEV: dev
}

export const WEBSITE_URL = 'https://thecommunity.ng/'

let DATA_URL =
  process.env.BACKEND_URL ||
  (dev ? `http://${LOCALHOST}:5000/` : '//web.thecommunity.ng/')

if (process.browser && location.hostname.split('.')[0] === 'staging')
  DATA_URL = '//staging-api.thecommunity.ng/'

export { DATA_URL }
