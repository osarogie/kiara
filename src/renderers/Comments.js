import { View } from 'react-native-web'

import CommentList from 'fragments/CommentList'
import CommentBox from 'components/CommentBox'
import QueryRendererProxy from 'renderers/QueryRendererProxy'

import { createPaginationContainer, graphql } from 'react-relay'

export default function Comment({ id, parent_id }) {
  return (
    <QueryRendererProxy
      query={graphql`
        query CommentsQuery($count: Int!, $cursor: String, $id: ID!) {
          discussion(id: $id) {
            # ...FullPost_discussion
            # ...PostThumb_discussion
            ...Comments_commentList
          }
        }
      `}
      variables={{ cursor: null, count: 5, id }}
      render={({ props }) => (
        <View style={{ flex: 1 }}>
          <CommentBox parent_id={parent_id} id={id} />
          <div className="bdt s__line" />
          <CommentPaginationContainer commentList={props.discussion} id={id} />
        </View>
      )}
    />
  )
}
// PAGINATION CONTAINERS

const CommentPaginationContainer = createPaginationContainer(
  CommentList,
  {
    commentList: graphql`
      fragment Comments_commentList on Discussion {
        comments(first: $count, after: $cursor)
        @connection(key: "Comment_comments", filters: []) {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            node {
              id
              ...CommentListItem_comment
            }
          }
        }
      }
    `
  },
  {
    direction: 'forward',
    getConnectionFromProps(props) {
      return props.commentList && props.commentList.comments
    },
    getFragmentVariables(prevVars, totalCount) {
      return { ...prevVars, count: totalCount }
    },
    getVariables(props, { count, cursor }) {
      return { count, cursor, id: props.id }
    },
    variables: { cursor: null },
    query: graphql`
      query CommentsPaginationQuery($count: Int!, $cursor: String, $id: ID!) {
        discussion(id: $id) {
          ...Comments_commentList
        }
      }
    `
  }
)
