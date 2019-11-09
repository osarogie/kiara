import {
  Environment,
  Network,
  QueryResponseCache,
  RecordSource,
  Store
} from 'relay-runtime'
import fetch from 'isomorphic-unfetch'
import { apiBaseUrl } from '../tc.config'

let relayEnvironment = null

const ttl = 3 * 60 * 1000
const cache = new QueryResponseCache({ size: 1024, ttl })

export default function createEnvironment({
  headers = {},
  records,
  ...config
} = {}) {
  if (process.browser && relayEnvironment && !records) {
    return relayEnvironment
  }

  const fetchQuery = (operation, variables, cacheConfig, uploadables) => {
    const queryID = operation.text
    const isMutation = operation.operationKind === 'mutation'
    const isQuery = operation.operationKind === 'query'
    const forceFetch = cacheConfig && cacheConfig.force

    // Try to get data from cache on queries
    if (process.browser) {
      const fromCache = cache.get(queryID, variables)
      if (isQuery && fromCache !== null && !forceFetch) {
        return fromCache
      }
    }

    return fetch(`${apiBaseUrl}_/api`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...headers
      },
      credentials: 'include',
      body: JSON.stringify({
        query: operation.text,
        variables
      }),
      ...config
    })
      .then(response => response.json())
      .then(json => {
        if (isQuery && json) {
          cache.set(queryID, variables, json)
        }
        // Clear cache on mutations
        if (isMutation) {
          cache.clear()
        }

        return json
      })
  }

  const source = new RecordSource(records || {})
  const store = new Store(source)
  const network = Network.create(fetchQuery)

  // Make sure to create a new Relay environment for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return new Environment({
      network,
      store
    })
  }

  // if (!relayEnvironment) {
  relayEnvironment = new Environment({ network, store })
  // }

  return relayEnvironment
}

// export const environment = createEnvironment()
