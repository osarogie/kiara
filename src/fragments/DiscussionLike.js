import { TouchableOpacity, Text } from 'react-native'
import Icon from 'components/vector-icons/Ionicons'
import { commitMutation, createFragmentContainer, graphql } from 'react-relay'
import { confirmSession } from 'helpers/confirmSession'
import createEnvironment from '../relay-environment'

function likeMutation({ _id, id, viewer_does_like, like_count }) {
  const environment = createEnvironment({})

  const variables = {
    input: {
      id: _id
    }
  }

  const mutation = graphql`
    mutation DiscussionLikeLikeDiscussionMutation(
      $input: LikeDiscussionInput!
    ) {
      likeDiscussion(input: $input) {
        discussion {
          ...DiscussionLike_discussion
        }
      }
    }
  `

  const optimisticResponse = {
    likeDiscussion: {
      discussion: {
        _id,
        id,
        viewer_does_like: !viewer_does_like,
        like_count: like_count + 1
      }
    }
  }

  commitMutation(environment, { variables, optimisticResponse, mutation })
}

function unlikeMutation({ _id, id, viewer_does_like, like_count }) {
  const environment = createEnvironment({})

  const mutation = graphql`
    mutation DiscussionLikeUnlikeDiscussionMutation(
      $input: UnlikeDiscussionInput!
    ) {
      unlikeDiscussion(input: $input) {
        discussion {
          ...DiscussionLike_discussion
        }
      }
    }
  `

  const variables = {
    input: {
      id: _id
    }
  }

  const optimisticResponse = {
    unlikeDiscussion: {
      discussion: {
        _id,
        id,
        viewer_does_like: !viewer_does_like,
        like_count: like_count - 1
      }
    }
  }

  commitMutation(environment, { variables, optimisticResponse, mutation })
}

function DiscussionLike({
  style,
  size = 23,
  hideCount,
  discussion,
  stacked,
  ...props
}) {
  function toggleLike() {
    // if (!confirmSession()) return

    const { viewer_does_like } = discussion
    viewer_does_like ? unlikeMutation(discussion) : likeMutation(discussion)
  }
  const { viewer_does_like, like_count } = discussion

  return (
    <TouchableOpacity
      style={[
        {
          flexDirection: stacked ? 'column' : 'row',
          alignItems: 'center',
          paddingTop: 10,
          paddingBottom: 10
        },
        style
      ]}
      onPress={toggleLike}
    >
      <Icon
        name={viewer_does_like ? 'md-heart' : 'md-heart-outline'}
        className="like-icon"
        size={size}
      />
      {hideCount ? null : (
        <Text style={{ marginLeft: stacked ? 0 : 7, fontSize: 15 }}>
          {like_count}
        </Text>
      )}
    </TouchableOpacity>
  )
}

export default createFragmentContainer(
  DiscussionLike,
  graphql`
    fragment DiscussionLike_discussion on Discussion {
      id
      _id
      viewer_does_like
      like_count
    }
  `
)
