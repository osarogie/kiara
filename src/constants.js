const dev = process.env.NODE_ENV === 'development'

export const Constants = {
  user: null
}

export const DATA_URL = dev ? '//localhost:5000/' : '//web.thecommunity.ng/'
