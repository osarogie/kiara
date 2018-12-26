import { DATA_URL } from 'constants'
import { devLog } from 'lib/devLog'

const { Environment, Network, RecordSource, Store } = require('relay-runtime')

const source = new RecordSource()
const store = new Store(source)

export default function createEnvironment({ headers }) {
  const fetchQuery = (operation, variables, cacheConfig, uploadables) => {
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
    }).then(response => devLog(response.json()))
  }

  const network = Network.create(fetchQuery)

  const environment = new Environment({ network, store })

  return environment
}

export const environment = createEnvironment({})
