import { graphql } from 'react-relay'

export const resetPasswordMutation = graphql`
  mutation resetPasswordMutation($input: ResetPasswordInput!) {
    resetPassword(input: $input) {
      success
    }
  }
`
