import { createFragmentContainer, graphql } from 'react-relay'

export const createPollFragmentContainer = Component =>
  createFragmentContainer(Component, {
    discussion: graphql`
      fragment Poll_discussion on Discussion {
        votingHasEnded
        viewerHasVoted
        hideVotes
        hasPoll
        viewerOwns
        voteCount
        pollClosesAt
        poll(first: 20) @connection(key: "PostListItem_poll", filters: []) {
          edges {
            node {
              id
              _id
              title
              voteCount
              viewerSelected
            }
          }
        }
      }
    `
  })
