import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'
import Avatar from 'components/Avatar'
import FollowButton from '../FollowButton'
import { Row } from '@shoutem/ui/components/Row'
import { withViewer } from 'lib/withViewer'
import { View, Text } from 'react-native-web'
import { UserLink } from '../../links/UserLink'

function UserRow({ hasViewer, user, viewer }) {
  function renderFollowButton() {
    if (hasViewer && user._id == viewer._id) return null

    return <FollowButton user={user} />
  }

  return (
    <Row styleName="small">
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
    </Row>
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
