const dev = process.env.NODE_ENV === 'development'
const LOCALHOST =
  typeof window === 'object' ? window.location.hostname : 'localhost'

export const Constants = {
  user: null
}

export const DATA_URL = dev ? `//${LOCALHOST}:5000/` : '//web.thecommunity.ng/'
