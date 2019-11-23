const dev = process.env.NODE_ENV === 'development'
const isServer = typeof window === 'undefined'
const localhost = !isServer ? window.location.hostname : 'localhost'

let apiBaseUrl =
  process.env.BACKEND_URL ||
  (dev ? `http://${localhost}:5000/` : 'https://api.thecommunity.ng/')

if (process.browser) {
  const subdomain = location.hostname.split('.')[0]
  if (subdomain === 'staging' || subdomain === 'testblog') {
    apiBaseUrl = 'https://staging-api.thecommunity.ng/'
  }
}

let baseUrl = dev ? `http://${localhost}:3000` : 'https://thecommunity.ng'

export { baseUrl, apiBaseUrl }
