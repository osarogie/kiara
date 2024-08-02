import { TouchableOpacity } from 'react-native'
import {
  commitMutation,
  createFragmentContainer,
  graphql,
  useRelayEnvironment
} from 'react-relay'
import { withViewer } from 'lib/withViewer'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid'
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline'

function likeMutation({ _id, id, viewerDoesLike, likeCount }, environment) {
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

function unlikeMutation({ _id, id, viewerDoesLike, likeCount }, environment) {
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
  requireViewer
}) {
  const environment = useRelayEnvironment()
  const toggleLike = () => {
    if (!requireViewer('Login to like this post')) return

    const { viewerDoesLike } = discussion
    const toggle = viewerDoesLike ? unlikeMutation : likeMutation

    toggle(discussion, environment)
  }
  const { viewerDoesLike, likeCount } = discussion
  const Icon = viewerDoesLike ? HeartIconSolid : HeartIconOutline

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
        name={viewerDoesLike ? 'md-heart' : 'md-heart-outline'}
        className="like-icon"
        height={size}
        width={size}
      />
      {hideCount ? null : (
        <span style={{ marginLeft: stacked ? 0 : 7, fontSize: 15 }}>
          {likeCount}
        </span>
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
