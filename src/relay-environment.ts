import {
  Environment,
  Network,
  RecordSource,
  Store,
  QueryResponseCache
} from 'relay-runtime'
import { GRAPHQL_ENDPOINT } from '../tc.config'
import { notification } from 'antd'

let relayEnvironment = null

const ttl = 3 * 60 * 1000
const cache = new QueryResponseCache({ size: 1024, ttl })
const dev = process.env.NODE_ENV === 'development'
export const devLog = (input) => {
  if (process.env.NODE_ENV === 'development') console.log(input)
}

type CreateEnvironmentArgs = {
  headers?: Partial<Headers>
  records?: any
}

export default function createEnvironment({
  headers = {},
  records,
  ...config
}: CreateEnvironmentArgs = {}) {
  if (process.browser && relayEnvironment && !records) {
    return relayEnvironment
  }

  const fetchQuery = (operation: any, variables: any, cacheConfig: any) => {
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

    devLog('-----------------------')
    devLog(`[Query]: ${JSON.stringify(operation.id)}`)
    devLog('---')
    devLog(`[Variables]: ${JSON.stringify(variables)}`)
    devLog('-----------------------')

    return fetch(GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...(headers as Headers)
      },
      credentials: 'include',
      body: JSON.stringify({
        query: operation.text,
        variables
      }),
      ...config
    })
      .then((response) => response.json())
      .then((json) => {
        if (isQuery && json) {
          cache.set(queryID, variables, json)
        }
        // Clear cache on mutations
        if (isMutation) {
          cache.clear()
        }

        if (json?.errors?.length) {
          for (const error of json?.errors) {
            console.error(error)
          }
        }

        return json
      })
      .catch((error) => {
        if (dev) console.error(error)
        if (process.browser) {
          notification.error({
            key: 'NETWORK_ERROR',
            message: 'Oops',
            description: "It looks liks you're offline"
          })
        }
      })
  }

  const source = new RecordSource(records || {})
  const store = new Store(source, {
    // This property tells Relay to not immediately clear its cache when the user
    // navigates around the app. Relay will hold onto the specified number of
    // query results, allowing the user to return to recently visited pages
    // and reusing cached data if its available/fresh.
    gcReleaseBufferSize: 10
  })
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
