import { FullPostFragmentContainer } from 'renderers/FullPost'
import withData from 'lib/withData'
import { graphql } from 'react-relay'

const query = graphql`
  query postQuery($discussionId: ID!) {
    ...Viewer_viewer

    discussion(id: $discussionId) {
      ...FullPost_discussion
    }
  }
`

export default function Post({ variables, discussion }) {
  return (
    <FullPostFragmentContainer
      id={variables.discussionId}
      discussion={discussion}
    />
  )
}

Post = withData(Post, { query, expect: 'discussion' })
