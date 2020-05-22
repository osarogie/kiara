import { graphql } from 'react-relay'

export const newDiscussionQuery = graphql`
  query newDiscussionQuery {
    ...Viewer_viewer
  }
`
