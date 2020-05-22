export const editCultureQuery = graphql`
  query editCultureQuery($id: ID!) {
    ...Viewer_viewer
    group(id: $id) {
      viewerIsOwner
      user {
        _id
      }
      ...StartCulture_group
    }
  }
`
