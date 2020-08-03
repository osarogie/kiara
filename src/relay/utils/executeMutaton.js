import { commitMutation } from 'react-relay'

export const executeMutation = (mutation, environment, { input, ...config }) =>
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
