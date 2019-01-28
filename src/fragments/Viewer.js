import { includes } from 'core-js/library/fn/string/virtual/includes'
import { createFragmentContainer } from 'react-relay'

export const createViewerFragmentContainer = Component =>
  createFragmentContainer(
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
    `
  )
