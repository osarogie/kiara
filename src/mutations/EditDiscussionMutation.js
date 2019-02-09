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

function commit({ id, name, body, photo, group_id }, config) {
  return commitMutation(createEnvironment(), {
    mutation,
    variables: {
      input: {
        id,
        name,
        // clientMutationId: tempID++
        body,
        photo,
        is_html: false,
        group_id
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

export default { commit }
