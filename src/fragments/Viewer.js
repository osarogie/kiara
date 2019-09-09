import {
  createFragmentContainer,
  createRefetchContainer,
  graphql
} from 'react-relay'

export const createViewerFragmentContainer = Component =>
  createRefetchContainer(
    Component,
    {
      viewer: graphql`
        fragment Viewer_viewer on Query {
          viewer {
            name
            username
            profilePicture(size: 50)
            profilePictureName
            _id
            id
          }
        }
      `
    },
    graphql`
      query ViewerQuery {
        ...Viewer_viewer
      }
    `
  )
