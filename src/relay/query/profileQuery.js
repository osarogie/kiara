import { graphql } from 'react-relay'

export const profileQuery = graphql`
  query profileQuery {
    ...Viewer_viewer
    viewer {
      ...EditUser_viewer
    }
  }
`
