import { createFragmentContainer, createRefetchContainer } from 'react-relay'

export const createViewerFragmentContainer = Component =>
  createRefetchContainer(
    Component,
    graphql`
      fragment Viewer_viewer on Query {
        viewer {
          name
          username
          profile_picture(size: 50)
          profile_picture_name
          _id
          id
        }
      }
    `,
    graphql`
      query ViewerQuery {
        ...Viewer_viewer
      }
    `
  )
