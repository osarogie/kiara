export const Constants = {
  user: null
}
export const DATA_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000/'
    : 'https://web.thecommunity.ng/'
