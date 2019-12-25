import { graphql } from 'react-relay'

export const blogQuery = graphql`
  query blogQuery($count: Int!, $cursor: String, $domain: String) {
    ...Viewer_viewer
    blog(domain: $domain) {
      id
      name
      publicUrl
      ...Group_group
      ...Group_discussionList
      # ...Group_userList
    }
  }
`
