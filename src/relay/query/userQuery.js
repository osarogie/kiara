import { graphql } from 'react-relay'

export const userQuery = graphql`
  query userQuery($count: Int!, $cursor: String, $userId: ID!) {
    ...Viewer_viewer

    user(id: $userId) {
      ...User_user
      ...User_discussionList
      ...User_groupList
    }
  }
`
