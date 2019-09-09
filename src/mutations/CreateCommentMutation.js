import createEnvironment from './../relay-environment'
import { Constants } from './../constants'
import { commitMutation, graphql } from 'react-relay'
import { ConnectionHandler } from 'relay-runtime'

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

function sharedUpdater(store, discussionId, newEdge) {
  const discussionProxy = store.get(discussionId)
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

function commit(
  { body, discussionId, parent_id },
  { viewer, ...config } = {}
) {
  const environment = createEnvironment({})

  return commitMutation(environment, {
    mutation,
    variables: {
      input: {
        body,
        discussionId
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
      node.setValue((new Date().getTime() / 1000) | 0, 'createdAt')

      const tempUser = store.create('user' + id, 'User')
      tempUser.setValue(viewer.name, 'name')
      tempUser.setValue(viewer.username, 'username')
      tempUser.setValue(viewer.profilePictureName, 'profilePictureName')

      node.setLinkedRecord(tempUser, 'user')
      node.setLinkedRecord(discussionProxy, 'discussion')
      // node.setValue(viewer, 'user')
      // node.setValue({ _id: discussionId, id: parent_id }, 'discussion')

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
        parentID: 'discussionId',
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
