const dev = process.env.NODE_ENV === 'development'
const isServer = typeof window === 'undefined'
const LOCALHOST = !isServer ? window.location.hostname : 'localhost'

export const Constants = {
  DEV: dev
}

export const WEBSITE_URL = dev
  ? `http://${LOCALHOST}:3000`
  : 'https://thecommunity.ng'

let DATA_URL =
  process.env.BACKEND_URL ||
  (Constants.DEV ? `http://${LOCALHOST}:5000/` : 'https://web.thecommunity.ng/')

if (process.browser && location.hostname.split('.')[0] === 'staging')
  DATA_URL = 'https://staging-api.thecommunity.ng/'

export { DATA_URL }
