import { FullPostView } from '../views/post/FullPostView'
import { graphql, createFragmentContainer } from 'react-relay'

export const createFullPostFragmentContainer = (Component = FullPostView) =>
  createFragmentContainer(Component, {
    discussion: graphql`
      fragment FullPost_discussion on Discussion {
        id
        _id
        name
        body
        createdAt
        updatedAt
        reads
        ...DiscussionLike_discussion
        excerpt(size: 30)
        commentCount
        featurePhoto {
          url
          height
          width
        }
        publicUrl
        group {
          _id
          id
          name
          permalink
          publicUrl
        }
        user {
          id
          _id
          username
          name
          profilePicture(size: 250)
          profilePictureName
          bio
          publicUrl
        }
        parsedBody
        hasPoll
        ...Poll_discussion
      }
    `
  })

export const FullPostFragmentContainer = createFullPostFragmentContainer()
