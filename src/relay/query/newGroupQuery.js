import { graphql } from 'react-relay'

export const newGroupQuery = graphql`
  query newGroupQuery {
    ...Viewer_viewer
  }
`
