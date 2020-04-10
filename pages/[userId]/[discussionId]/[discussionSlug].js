import { FullPostFragmentContainer } from 'renderers/FullPost'
import withData from 'lib/withData'
import { postQuery } from '../../../src/relay/query/postQuery'

export default function Post({ variables, discussion }) {
  return (
    <FullPostFragmentContainer
      id={variables.discussionId}
      discussion={discussion}
    />
  )
}

Post = withData(Post, { query: postQuery, expect: 'discussion' })
