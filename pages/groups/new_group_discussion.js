import withData from 'lib/withData'
import { PostForm } from 'views/post/PostForm'

import 'discussions.scss'

const query = graphql`
  query newGroupDiscussionQuery($id: ID!) {
    ...Viewer_viewer
    group(id: $id) {
      ...Group_group @relay(mask: false)
    }
  }
`

export default function NewDiscussionGroup({ group }) {
  return <PostForm group={group} />
}

NewDiscussionGroup = withData(NewDiscussionGroup, {
  query,
  expect: ['viewer', 'group']
})
