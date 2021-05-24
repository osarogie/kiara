import PostList from 'fragments/PostList'

import { createPaginationContainer, graphql } from 'react-relay'

export const FeedPaginationContainer = createPaginationContainer(
  PostList,
  {
    discussionList: graphql`
      fragment Feed_discussionList on Feed {
        topStories(first: $count, after: $cursor)
        @connection(key: "Feed_topStories") {
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
  },
  {
    direction: 'forward',
    getConnectionFromProps({ discussionList }) {
      return discussionList?.topStories
    },
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount
      }
    },
    getVariables(props, { count, cursor, size }, fragmentVariables) {
      return {
        count,
        cursor
      }
    },
    variables: { cursor: null },
    query: graphql`
      query FeedPaginationQuery($count: Int!, $cursor: String) {
        feed {
          ...Feed_discussionList
        }
      }
    `
  }
)
