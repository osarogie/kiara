import { View } from 'react-native-web'

import CommentList from 'fragments/CommentList'
import CommentBox from 'components/CommentBox'

import { graphql, useLazyLoadQuery, usePaginationFragment } from 'react-relay'

export default function Comment({ id, parent_id }) {
  const { discussion } = useLazyLoadQuery(
    graphql`
      query CommentsQuery($count: Int!, $cursor: String, $id: ID!) {
        discussion(id: $id) {
          # ...FullPost_discussion
          # ...PostThumb_discussion
          ...Comments_discussion @arguments(count: $count, cursor: $cursor)
        }
      }
    `,
    { cursor: null, count: 5, id }
  )
  const { data, isLoadingNext, hasNext, loadNext } = usePaginationFragment(
    graphql`
      fragment Comments_discussion on Discussion
      @argumentDefinitions(
        count: { type: "Int", defaultValue: 5 }
        cursor: { type: "String" }
      )
      @refetchable(queryName: "CommentsRefetchQuery") {
        comments(first: $count, after: $cursor)
          @connection(key: "Comment_discussion_comments", filters: []) {
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
    `,
    discussion
  )

  return (
    <View style={{ flex: 1 }}>
      <CommentBox parent_id={parent_id} id={id} />
      <div className="bdt s__line" />
      <CommentList
        comments={data.comments}
        id={id}
        hasNext={hasNext}
        isLoadingNext={isLoadingNext}
        loadNext={loadNext}
      />
    </View>
  )
}
