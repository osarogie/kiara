import Icon from '../components/vector-icons/Feather'
import ActivityButton from '../components/ActivityButton'
import { commitMutation, createFragmentContainer, graphql } from 'react-relay'
import { withViewer } from 'lib/withViewer'
import { loginLink } from 'helpers/links'
import { useState } from 'react'

function followMutation({ _id }, environment, config) {
  const variables = {
    input: {
      id: _id
    }
  }

  commitMutation(environment, {
    variables,
    mutation: graphql`
      mutation FollowButtonFollowUserMutation($input: FollowUserInput!) {
        followUser(input: $input) {
          user {
            ...FollowButton_user
          }
        }
      }
    `,
    ...config
  })
}

function unfollowMutation({ _id }, environment, config) {
  const variables = {
    input: {
      id: _id
    }
  }

  commitMutation(environment, {
    variables,
    mutation: graphql`
      mutation FollowButtonUnfollowUserMutation($input: UnfollowUserInput!) {
        unfollowUser(input: $input) {
          user {
            ...FollowButton_user
          }
        }
      }
    `,
    ...config
  })
}

function FollowButton({
  user,
  textStyle,
  buttonStyle,
  hasViewer,
  relay,
  icon,
  requireViewer,
  ...props
}) {
  const [isLoading, setLoading] = useState(false)

  const toggleFollow = () => {
    if (!requireViewer(`Login to follow ${user.name}`)) return

    setLoading(true)

    if (user.viewer_follows) {
      unfollowMutation(user, relay.environment, {
        onCompleted: _ => setLoading(false),
        onError: _ => setLoading(false)
      })
    } else {
      followMutation(user, relay.environment, {
        onCompleted: _ => setLoading(false),
        onError: _ => setLoading(false)
      })
    }
  }
  function renderIcon() {
    const { viewer_follows } = user
    return (
      <Icon
        name={viewer_follows ? 'user-check' : 'user-plus'}
        size={18}
        color={viewer_follows ? '#fff' : '#05f'}
      />
    )
  }
  const { viewer_follows, follows_viewer } = user
  const color = viewer_follows ? '#fff' : '#05f'
  const backgroundColor = viewer_follows ? '#05f' : 'transparent'
  const title = viewer_follows
    ? 'Following'
    : follows_viewer
    ? 'Follow Back'
    : 'Follow'

  return (
    <ActivityButton
      onPress={toggleFollow}
      indicatorColor={color}
      title={title}
      {...props}
      textStyle={{ color, ...textStyle }}
      buttonStyle={{
        backgroundColor,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: color,
        ...buttonStyle
      }}
      isLoading={isLoading}
      icon={icon ? renderIcon() : null}
    />
  )
}

export default createFragmentContainer(withViewer(FollowButton), {
  user: graphql`
    fragment FollowButton_user on User {
      _id
      name
      viewer_follows
      follows_viewer
    }
  `
})
