import { commitMutation, graphql } from 'react-relay'
// import { ConnectionHandler } from 'relay-runtime'
import createEnvironment from 'relay-environment'

const mutation = graphql`
  mutation CreateDiscussionMutation($input: CreateDiscussionInput!) {
    createDiscussion(input: $input) {
      success
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

function commit(
  {
    name,
    body,
    photo,
    groupId,
    isHtml = false,
    discussionOptionsAttributes,
    pollCloseDate,
    pollCloseTime,
    hidePoll
  },
  config
) {
  return commitMutation(createEnvironment(), {
    mutation,
    variables: {
      input: {
        name,
        // clientMutationId: tempID++
        body,
        photo,
        isHtml,
        discussionOptionsAttributes,
        groupId,
        pollCloseDate,
        pollCloseTime,
        hidePoll
      }
    },
    ...config
    // updater: store => {
    //   const payload = store.getRootField('createDiscussion')
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

export const CreateDiscussionMutation = { commit }

export default { commit }

export const createDiscussion = (environment, { input, ...config }) =>
  new Promise(resolve => {
    commitMutation(environment, {
      mutation,
      variables: { input },
      ...config,
      onCompleted: () => {
        resolve([true])
      },
      onError: err => {
        resolve([, err])
      }
    })
  })
