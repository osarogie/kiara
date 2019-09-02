import { createPaginationContainer, graphql } from 'react-relay'
import {
  VerticalUserList,
  createVerticalUserList
} from '../../fragments/VerticalUserList'

export const createFollowingPagination = (
  component = createVerticalUserList('user', 'followings')
) =>
  createPaginationContainer(
    component,
    {
      user: graphql`
        fragment FollowingPagination_user on User {
          followings(first: $count, after: $cursor)
            @connection(key: "FollowingPagination_followings") {
            pageInfo {
              hasNextPage
              endCursor
            }
            edges {
              node {
                id
                ...UserListItem_user
              }
            }
          }
        }
      `
    },
    {
      direction: 'forward',
      getConnectionFromProps(props) {
        return props.user && props.user.followings
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
          cursor,
          id: props.id
        }
      },
      variables: { cursor: null },
      query: graphql`
        query FollowingPaginationQuery(
          $count: Int!
          $cursor: String
          $id: ID!
        ) {
          user(id: $id) {
            ...FollowingPagination_user
          }
        }
      `
    }
  )

export const FollowingPagination = createFollowingPagination()
