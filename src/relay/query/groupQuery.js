import { graphql } from 'react-relay'

export const groupQuery = graphql`
  query groupQuery($count: Int!, $cursor: String, $permalink: ID!) {
    ...Viewer_viewer
    group(id: $permalink) {
      ...Group_group
      ...Group_discussionList
      # ...Group_userList
    }
  }
`
