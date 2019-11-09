import { graphql } from 'react-relay'

export const discoverBlogsQuery = graphql`
  query discoverBlogsQuery($count: Int!, $cursor: String) {
    ...Viewer_viewer
    feed {
      groups(first: $count, after: $cursor, byLatest: true) {
        edges {
          node {
            id
            name
            body
            tagline
            permalink
            headerImage {
              name
            }
            publicUrl
          }
        }
      }
    }
  }
`
