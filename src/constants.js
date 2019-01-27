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

export const DATA_URL = dev
  ? `http://${LOCALHOST}:5000/`
  : '//web.thecommunity.ng/'
