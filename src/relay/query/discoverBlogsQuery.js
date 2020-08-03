import { graphql } from 'react-relay'

export const discoverBlogsQuery = graphql`
  query discoverBlogsQuery($count: Int!, $cursor: String) {
    ...Viewer_viewer
    feed {
      ...GroupsPagination_groupList
    }
  }
`
