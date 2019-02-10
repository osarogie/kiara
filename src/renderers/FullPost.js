import { FullPostView } from '../views/post/FullPostView'
import { graphql, createFragmentContainer } from 'react-relay'

export const createFullPostFragmentContainer = (Component = FullPostView) =>
  createFragmentContainer(
    Component,
    graphql`
      fragment FullPost_discussion on Discussion {
        id
        _id
        name
        body
        created_at
        updated_at
        ...DiscussionLike_discussion
        excerpt(size: 10)
        comment_count
        feature_photo {
          url
          height
          width
        }
        public_url
        group {
          _id
          id
          name
          permalink
        }
        user {
          id
          _id
          username
          name
          profile_picture(size: 250)
          profile_picture_name
          bio
        }
        parsed_body
        has_poll
        ...Poll_discussion
      }
    `
  )

export const FullPostFragmentContainer = createFullPostFragmentContainer()
