import { graphql } from 'react-relay'

export const editDiscussionQuery = graphql`
  query editDiscussionQuery($id: ID!) {
    ...Viewer_viewer
    discussion(id: $id) {
      _id
      user {
        username
      }
      content {
        blocks {
          depth
          key
          text
          type
        }
        entityMap {
          mutability
          type
        }
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
