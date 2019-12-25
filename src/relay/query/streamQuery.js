import { graphql } from 'react-relay'

export const streamQuery = graphql`
  query streamQuery($count: Int!, $cursor: String, $id: ID!) {
    group(id: $id) {
      ...Group_group
      ...Group_discussionList
      # ...Group_userList
    }
    ...Viewer_viewer
  }
`
