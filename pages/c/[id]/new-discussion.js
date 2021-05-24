import withData from 'lib/withData'
import { PostForm } from 'views/post/PostForm'
import { newGroupDiscussionQuery } from '../../../src/relay/query/newGroupDiscussionQuery'

export default function NewGroupDiscussion({ group }) {
  return <PostForm group={group} />
}

NewGroupDiscussion = withData(NewGroupDiscussion, {
  query: newGroupDiscussionQuery,
  expect: ['viewer', 'group']
})
