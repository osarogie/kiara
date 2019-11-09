import { graphql } from 'react-relay'

export const newPollQuery = graphql`
  query newPollQuery {
    ...Viewer_viewer
  }
`
