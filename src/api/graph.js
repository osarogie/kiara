import graphql from 'graphql.js'

const url =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000/v2'
    : 'http://data.thecommunity.ng/v2'

export const graph = graphql(url, {
  method: 'POST',
  headers: {},
  fragments: {
    auth: 'on User { token }',
    error: 'on Error { messages }'
  }
})
