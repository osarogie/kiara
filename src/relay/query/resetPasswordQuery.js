import { graphql } from 'react-relay'

export const resetPasswordQuery = graphql`
  query resetPasswordQuery($token: String!) {
    ...Viewer_viewer
    checkPasswordResetToken(token: $token) {
      id
    }
  }
`
