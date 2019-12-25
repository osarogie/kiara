import { graphql } from 'react-relay'

export const resetFormMutation = graphql`
  mutation resetFormMutation($input: RequestPasswordResetTokenInput!) {
    requestPasswordResetToken(input: $input) {
      message
    }
  }
`
