import { createFragmentContainer, graphql } from 'react-relay'

export const createPollFragmentContainer = Component =>
  createFragmentContainer(
    Component,
    graphql`
      fragment Poll_poll on DiscussionOption {
        _id
        title
        vote_count
        viewer_selected
      }
    `
  )
