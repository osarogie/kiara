import { commitMutation, graphql } from 'react-relay'
import createEnvironment from 'relay-environment'

const mutation = graphql`
  mutation UpdateReadsMutation($input: UpdateReadsInput!) {
    updateReads(input: $input) {
      discussion {
        id
      }
    }
  }
`

export function updateReads({ id }) {
  return commitMutation(createEnvironment(), {
    mutation,
    variables: {
      input: {
        id
      }
    }
  })
}
