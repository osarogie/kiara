import { TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { commitMutation, createFragmentContainer, graphql } from 'react-relay'
import createEnvironment from '../relay-environment'
import { withViewer } from 'lib/withViewer'

function likeMutation({ _id, id, viewerDoesLike, likeCount }) {
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
        viewerDoesLike: !viewerDoesLike,
        likeCount: likeCount + 1
      }
    }
  }

  commitMutation(environment, { variables, optimisticResponse, mutation })
}

function unlikeMutation({ _id, id, viewerDoesLike, likeCount }) {
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
        viewerDoesLike: !viewerDoesLike,
        likeCount: likeCount - 1
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
  hasViewer,
  requireViewer,
  ...props
}) {
  function toggleLike() {
    if (!requireViewer('Login to like this post')) return

    const { viewerDoesLike } = discussion
    viewerDoesLike ? unlikeMutation(discussion) : likeMutation(discussion)
  }
  const { viewerDoesLike, likeCount } = discussion

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
        name={viewerDoesLike ? 'md-heart' : 'md-heart-empty'}
        className="like-icon"
        size={size}
      />
      {hideCount ? null : (
        <Text style={{ marginLeft: stacked ? 0 : 7, fontSize: 15 }}>
          {likeCount}
        </Text>
      )}
    </TouchableOpacity>
  )
}

export default createFragmentContainer(withViewer(DiscussionLike), {
  discussion: graphql`
    fragment DiscussionLike_discussion on Discussion {
      id
      _id
      viewerDoesLike
      likeCount
    }
  `
})
