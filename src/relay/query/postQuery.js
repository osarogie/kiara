import { graphql } from 'react-relay'

export const postQuery = graphql`
  query postQuery($discussionId: ID!) {
    ...Viewer_viewer

    discussion(id: $discussionId) {
      ...FullPost_discussion
    }
  }
`
