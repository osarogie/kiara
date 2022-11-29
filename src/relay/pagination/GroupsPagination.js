import { createPaginationContainer, graphql } from 'react-relay'
import { VerticalPaginationList } from './VerticalPaginationList'

export const createGroupsPagination = (component = VerticalPaginationList) =>
  createPaginationContainer(
    component,
    {
      groupList: graphql`
        fragment GroupsPagination_groupList on Feed {
          groups(first: $count, after: $cursor)
          @connection(key: "GroupsPagination_groups") {
            pageInfo {
              hasNextPage
              endCursor
            }
            edges {
              node {
                id
                ...GroupListItem_group
              }
            }
          }
        }
      `
    },
    {
      direction: 'forward',
      getConnectionFromProps(props) {
        return props?.groupList?.groups
      },
      getFragmentVariables(prevVars, totalCount) {
        return {
          ...prevVars,
          count: totalCount
        }
      },
      getVariables(props, { count, cursor }, fragmentVariables) {
        return {
          count,
          cursor
        }
      },
      variables: { cursor: null, q: '' },
      query: graphql`
        query GroupsPaginationQuery($count: Int!, $cursor: String) {
          feed {
            ...GroupsPagination_groupList
          }
        }
      `
    }
  )
