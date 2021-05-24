import { PermissionDenied } from '../../../src/views/user/PermissionDenied'
import withData from 'lib/withData'
import { PostForm } from 'views/post/PostForm'
import { editDiscussionQuery } from '../../../src/relay/query/editDiscussionQuery'

export default function EditDiscussion({ discussion }) {
  if (!discussion.viewerOwns) return <PermissionDenied />

  return <PostForm {...discussion} />
}

EditDiscussion = withData(EditDiscussion, {
  query: editDiscussionQuery,
  expect: ['viewer', 'discussion']
})
