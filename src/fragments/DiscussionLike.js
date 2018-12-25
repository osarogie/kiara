import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import Icon from 'components/vector-icons/Ionicons'
import excerptStyles from 'styles/excerptStyles'
import { commitMutation, createFragmentContainer, graphql } from 'react-relay'
import { navHelper } from 'helpers/getNavigation'
import { BLACK } from 'ui'
import { Component } from 'components/Component'

function likeMutation({ _id, id, viewer_does_like, like_count }, environment) {
  const variables = {
    input: {
      id: _id
    }
  }

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

  commitMutation(environment, {
    variables,
    optimisticResponse,
    mutation: graphql`
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
  })
}

function unlikeMutation(
  { _id, id, viewer_does_like, like_count },
  environment
) {
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

  commitMutation(environment, {
    variables,
    optimisticResponse,
    mutation: graphql`
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
  })
}
class DiscussionLike extends Component {
  toggleLike = () => {
    if (!this.confirmSession()) return

    const { discussion } = this.props
    const { environment } = this.props.relay
    const { viewer_does_like } = discussion
    viewer_does_like
      ? unlikeMutation(discussion, environment)
      : likeMutation(discussion, environment)
  }
  render() {
    const { style, size, hideCount, discussion, stacked } = this.props
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
        onPress={this.toggleLike}
      >
        <Icon
          name={viewer_does_like ? 'md-heart' : 'md-heart-outline'}
          style={excerptStyles.controlIcon}
          size={size || 23}
        />
        {hideCount ? null : (
          <Text style={{ marginLeft: stacked ? 0 : 7, fontSize: 15 }}>
            {like_count}
          </Text>
        )}
      </TouchableOpacity>
    )
  }
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
