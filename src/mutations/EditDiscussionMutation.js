import { commitMutation, graphql } from 'react-relay'
import createEnvironment from 'relay-environment'
// import { ConnectionHandler } from 'relay-runtime'

const mutation = graphql`
  mutation EditDiscussionMutation($input: EditDiscussionInput!) {
    editDiscussion(input: $input) {
      discussion {
        ...PostListItem_discussion
        user {
          ...UserListItem_user
        }
      }
    }
  }
`

// function sharedUpdater(store, user, newEdge) {
//   const userProxy = store.get(user.id)
//   const conn = ConnectionHandler.getConnection(userProxy, 'TodoList_todos')
//   ConnectionHandler.insertEdgeAfter(conn, newEdge)
// }

let tempID = 0

function commit({ id, name, body, photo, groupId }, config) {
  return commitMutation(createEnvironment(), {
    mutation,
    variables: {
      input: {
        id,
        name,
        // clientMutationId: tempID++
        body,
        photo,
        isHtml: false,
        groupId
      }
    },
    ...config
    // updater: store => {
    //   const payload = store.getRootField('editDiscussion')
    //   const newEdge = payload.getLinkedRecord('todoEdge')
    //   sharedUpdater(store, user, newEdge)
    // },
    // optimisticUpdater: store => {
    //   const id = 'client:newTodo:' + tempID++
    //   const node = store.create(id, 'Todo')
    //   node.setValue(text, 'text')
    //   node.setValue(id, 'id')
    //   const newEdge = store.create('client:newEdge:' + tempID++, 'TodoEdge')
    //   newEdge.setLinkedRecord(node, 'node')
    //   sharedUpdater(store, user, newEdge)
    //   const userProxy = store.get(user.id)
    //   userProxy.setValue(userProxy.getValue('totalCount') + 1, 'totalCount')
    // }
  })
}
export const EditDiscussionMutation = { commit }

export default { commit }
