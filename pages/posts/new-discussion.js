import { PostForm } from 'views/post/PostForm'
import { withData } from 'lib/withData'

const query = graphql`
  query newDiscussionQuery {
    ...Viewer_viewer
  }
`

export default function NewDiscussion() {
  return <PostForm />
}

NewDiscussion = withData(NewDiscussion, { query, expect: 'viewer' })
