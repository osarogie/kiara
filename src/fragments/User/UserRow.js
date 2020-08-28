import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'
import Avatar from 'components/Avatar'
import FollowButton from '../FollowButton'
import { withViewer } from 'lib/withViewer'
import { View, Text } from 'react-native'
import { UserLink } from '../../links/UserLink'

function UserRow({ hasViewer, user, viewer }) {
  function renderFollowButton() {
    if (hasViewer && user._id == viewer._id) return null

    return <FollowButton user={user} />
  }

  return (
    <View style={{ padding: 10, flexDirection: 'row' }}>
      <Avatar
        medium
        rounded
        source={user}
        title={user.name}
        activeOpacity={0.7}
      />
      <UserLink for={user}>
        <View styleName="vertical">
          <Text>{user.name}</Text>
          <Text numberOfLines={1}>@{user.username}</Text>
        </View>
      </UserLink>
      {renderFollowButton()}
    </View>
  )
}

UserRow = withViewer(UserRow)

export default createFragmentContainer(UserRow, {
  user: graphql`
    fragment UserRow_user on User {
      id
      _id
      name
      username
      bio
      profilePictureName
      ...FollowButton_user
    }
  `
})
