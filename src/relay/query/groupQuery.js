import { graphql } from 'react-relay'

export const groupQuery = graphql`
  query groupQuery($count: Int!, $cursor: String, $id: ID!) {
    ...Viewer_viewer
    group(id: $id) {
      ...Group_group
      ...Group_discussionList
      # ...Group_userList
    }
  }
`
