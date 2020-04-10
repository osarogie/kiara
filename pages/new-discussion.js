import { PostForm } from 'views/post/PostForm'
import { withData } from 'lib/withData'
import { newDiscussionQuery } from '../src/relay/query/newDiscussionQuery'

export default function NewDiscussion() {
  return <PostForm />
}

NewDiscussion = withData(NewDiscussion, {
  query: newDiscussionQuery,
  expect: 'viewer'
})
