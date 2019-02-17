import { PermissionDenied } from './../../src/views/user/PermissionDenied'
import message from 'antd/lib/message'
import { discussionLink } from './../../src/helpers/links'
import { MutationService } from './../../src/services/MutationService'
import { graphql } from 'react-relay'
import { ThemeSwitcher } from './../../src/components/ThemeSwitcher'
import { Toolbar } from 'components/Toolbar1'
import TextArea from 'antd/lib/input/TextArea'
import { NewPostAppBar } from './../../src/components/NewPostAppBar'
import 'discussions.scss'
import Affix from 'antd/lib/affix'
import withData from 'lib/withData'
import { useEffect, useState } from 'react'
import { Router } from '../../routes'
import EditDiscussionMutation from 'mutations/EditDiscussionMutation'
import { PostForm } from 'views/post/PostForm'

const query = graphql`
  query editDiscussionQuery($id: ID!) {
    ...Viewer_viewer
    discussion(id: $id) {
      _id
      user {
        username
      }
      group {
        _id
        name
      }
      feature_photo {
        url
      }
      permalink
      name
      body
      viewer_owns
    }
  }
`

export default function EditDiscussion({ discussion }) {
  if (!discussion.viewer_owns) return <PermissionDenied />

  return <PostForm {...discussion} />
}

EditDiscussion = withData(EditDiscussion, {
  query,
  expect: ['viewer', 'discussion']
})
