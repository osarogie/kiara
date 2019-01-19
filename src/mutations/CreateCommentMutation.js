import createEnvironment from './../relay-environment'
import { Constants } from './../constants'
import { commitMutation, graphql } from 'react-relay'
import { ConnectionHandler } from 'relay-runtime'

const environment = createEnvironment({})

const mutation = graphql`
  mutation CreateCommentMutation($input: CreateCommentInput!) {
    createComment(input: $input) {
      success
      comment {
        ...CommentListItem_comment
        user {
          ...UserListItem_user
        }
      }
    }
  }
`

function sharedUpdater(store, discussion_id, newEdge) {
  const discussionProxy = store.get(discussion_id)
  // const CC = ConnectionHandler
  // const St = store
  // const ne = newEdge

  // debugger
  const conn = ConnectionHandler.getConnection(
    discussionProxy,
    'Comment_comments'
  )
  if (conn) {
    ConnectionHandler.insertEdgeBefore(conn, newEdge)
  }
}

let tempID = 0

function commit({ body, discussion_id, parent_id }, config = {}) {
  return commitMutation(environment, {
    mutation,
    variables: {
      input: {
        body,
        discussion_id
      }
    },
    ...config,
    updater: store => {
      const payload = store.getRootField('createComment')
      const newEdge = store.create('client:newEdge:' + tempID++, 'CommentEdge')
      newEdge.setLinkedRecord(payload.getLinkedRecord('comment'), 'node')
      sharedUpdater(store, parent_id, newEdge)
    },
    optimisticUpdater: store => {
      const discussionProxy = store.get(parent_id)
      const id = 'client:newComment:' + tempID++
      const node = store.create(id, 'Comment')

      node.setValue(body, 'body')
      node.setValue(id, 'id')
      node.setValue(id, '_id')
      node.setValue((new Date().getTime() / 1000) | 0, 'created_at')

      const tempUser = store.create('user' + id, 'User')
      tempUser.setValue(Constants.user.name, 'name')
      tempUser.setValue(Constants.user.username, 'username')
      tempUser.setValue(
        Constants.user.profile_picture_name,
        'profile_picture_name'
      )

      node.setLinkedRecord(tempUser, 'user')
      node.setLinkedRecord(discussionProxy, 'discussion')
      // node.setValue(Constants.user, 'user')
      // node.setValue({ _id: discussion_id, id: parent_id }, 'discussion')

      const newEdge = store.create('client:newEdge:' + tempID++, 'CommentEdge')
      newEdge.setLinkedRecord(node, 'node')
      sharedUpdater(store, parent_id, newEdge)
      discussionProxy.setValue(
        discussionProxy.getValue('totalCount') + 1,
        'totalCount'
      )
    },
    configs: [
      {
        type: 'RANGE_ADD',
        parentID: 'discussion_id',
        connectionInfo: [
          {
            key: '',
            rangeBehavior: 'prepend'
          }
        ],
        edgeName: 'comment'
      }
    ]
  })
}

export default { commit }
