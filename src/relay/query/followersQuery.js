import { graphql } from 'react-relay'

export const followersQuery = graphql`
  query followersQuery($count: Int!, $cursor: String, $id: ID!) {
    user(id: $id) {
      ...FollowerPagination_user
    }
  }
`
