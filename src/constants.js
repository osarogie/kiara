import { baseUrl, apiBaseUrl } from '../tc.config'
const dev = process.env.NODE_ENV === 'development'

export const Constants = { DEV: dev }
export const DATA_URL = `${apiBaseUrl}/`
