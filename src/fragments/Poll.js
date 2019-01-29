import { createFragmentContainer, graphql } from 'react-relay'

export const createPollFragmentContainer = Component =>
  createFragmentContainer(
    Component,
    graphql`
      fragment Poll_discussion on Discussion {
        voting_has_ended
        hide_votes
        has_poll
        viewer_owns
        poll(first: 20) @connection(key: "PostListItem_poll", filters: []) {
          edges {
            node {
              id
              _id
              title
              vote_count
              viewer_selected
            }
          }
        }
      }
    `
  )
