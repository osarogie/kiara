import { graphql } from 'react-relay'

export const followingsQuery = graphql`
  query followingsQuery($count: Int!, $cursor: String, $id: ID!) {
    user(id: $id) {
      ...FollowingPagination_user
    }
  }
`
