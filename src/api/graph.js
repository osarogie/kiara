import { DATA_URL } from 'constants'
import graphql from 'graphql.js'

const url = DATA_URL

export const graph = graphql(url, {
  method: 'POST',
  headers: {},
  fragments: {
    auth: 'on User { token }',
    error: 'on Error { messages }'
  }
})
