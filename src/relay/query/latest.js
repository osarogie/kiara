import { graphql } from 'react-relay'

export const latestQuery = graphql`
  query latestQuery($count: Int!, $cursor: String) {
    ...Viewer_viewer

    feed {
      ...latest_discussionList
    }
  }
`

export const latestDiscussionList = graphql`
  fragment latest_discussionList on Feed {
    discussions(first: $count, after: $cursor, byLatest: true)
      @connection(key: "latest_discussions") {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          id
          ...PostListItem_discussion
        }
      }
    }
  }
`

export const latestFeedPaginationQuery = graphql`
  query latestFeedPaginationQuery($count: Int!, $cursor: String) {
    feed {
      ...latest_discussionList
    }
  }
`
