import withData from 'lib/withData'
import { PostForm } from 'views/post/PostForm'
import { newGroupDiscussionQuery } from '../../src/relay/query/newGroupDiscussionQuery'

import 'discussions.scss'

export default function NewDiscussionGroup({ group }) {
  return <PostForm group={group} />
}

NewDiscussionGroup = withData(NewDiscussionGroup, {
  query: newGroupDiscussionQuery,
  expect: ['viewer', 'group']
})
