import { graphql } from 'react-relay'

export const editDiscussionQuery = graphql`
  query editDiscussionQuery($id: ID!) {
    ...Viewer_viewer
    discussion(id: $id) {
      _id
      user {
        username
      }
      group {
        _id
        name
      }
      featurePhoto {
        url
      }
      permalink
      name
      body
      viewerOwns
    }
  }
`
