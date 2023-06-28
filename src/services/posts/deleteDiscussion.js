import { graphql, commitMutation } from 'react-relay'

const deleteDiscussionMutation = graphql`
  mutation deleteDiscussionServiceMutation($input: DeleteDiscussionInput!) {
    deleteDiscussion(input: $input) {
      deletedDiscussionId
      discussion {
        _id
        id
      }
    }
  }
`

export function deleteDiscussion({ environment, discussion }) {
  return new Promise((resolve) => {
    commitMutation(environment, {
      mutation: deleteDiscussionMutation,
      variables: { input: { id: discussion._id } },
      configs: [
        // {
        //   type: 'NODE_DELETE',
        //   deletedIDFieldName: 'deletedDiscussionId'
        // },
        {
          type: 'RANGE_DELETE',
          parentID: 'RmVlZC17OmlkPT4ic3RhdGljX29iamVjdCJ9',
          connectionKeys: [
            {
              key: 'latest_discussions'
            }
            // {
            //   key: 'Feed_topStories'
            // }
          ],
          pathToConnection: ['feed', 'discussions'],
          deletedIDFieldName: 'deletedDiscussionId'
        }
      ],
      optimisticResponse: {
        deleteDiscussion: {
          deletedDiscussionId: discussion.id,
          discussion: {
            _id: discussion._id,
            id: discussion.id
          }
        }
      },
      onCompleted: () => {
        resolve([true])
      },
      onError: (err) => {
        resolve([false, err])
      }
    })
  })
}
