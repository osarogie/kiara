const CLIENT_URL =
  process.env.NEXT_PUBLIC_CLIENT_URL || 'https://thecommunity.ng'
export const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || 'https://api.thecommunity.ng'

export const GRAPHQL_ENDPOINT = `${BACKEND_URL}/api/v2/graphql`
export const baseUrl = CLIENT_URL
export const secureBaseUrl = BACKEND_URL
export const backendUrl = BACKEND_URL
