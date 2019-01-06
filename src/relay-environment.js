import { DATA_URL } from 'constants'
import { devLog } from 'lib/devLog'

const { Environment, Network, RecordSource, Store } = require('relay-runtime')
import RelayQueryResponseCache from 'relay-runtime/lib/RelayQueryResponseCache'

const oneMinute = 60 * 1000
const cache = new RelayQueryResponseCache({ size: 250, ttl: oneMinute })

const source = new RecordSource()
const store = new Store(source)

export default function createEnvironment({ headers }) {
  const fetchQuery = (operation, variables, cacheConfig, uploadables) => {
    const queryID = operation.text
    const isMutation = operation.operationKind === 'mutation'
    const isQuery = operation.operationKind === 'query'
    const forceFetch = cacheConfig && cacheConfig.force

    // Try to get data from cache on queries
    const fromCache = cache.get(queryID, variables)
    if (isQuery && fromCache !== null && !forceFetch) {
      return fromCache
    }

    return fetch(`${DATA_URL}_/api`, {
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
      })
    })
      .then(response => devLog(response.json()))
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

  const network = Network.create(fetchQuery)

  const environment = new Environment({ network, store })

  return environment
}

export const environment = createEnvironment({})
