import { createPaginationContainer, graphql } from 'react-relay'
import {
  VerticalUserList,
  createVerticalUserList
} from '../../fragments/VerticalUserList'

export const createFollowerPagination = (
  component = createVerticalUserList('user', 'followers')
) =>
  createPaginationContainer(
    component,
    {
      user: graphql`
        fragment FollowerPagination_user on User {
          followers(first: $count, after: $cursor)
            @connection(key: "FollowerPagination_followers") {
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
        return props.user && props.user.followers
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
        query FollowerPaginationQuery($count: Int!, $cursor: String, $id: ID!) {
          user(id: $id) {
            ...FollowerPagination_user
          }
        }
      `
    }
  )

export const FollowerPagination = createFollowerPagination()
