import { graphql } from 'react-relay'

export const newGroupDiscussionQuery = graphql`
  query newGroupDiscussionQuery($id: ID!) {
    ...Viewer_viewer
    group(id: $id) {
      ...Group_group @relay(mask: false)
    }
  }
`
