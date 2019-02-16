import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'
import Avatar from 'components/Avatar'
import FollowButton from '../FollowButton'
import { Row } from '@shoutem/ui/components/Row'
import { Text, Subtitle } from '@shoutem/ui/components/Text'
import { View } from '@shoutem/ui/components/View'
import { TouchableOpacity } from '@shoutem/ui/components/TouchableOpacity'
import BrowserLink from 'components/BrowserLink'
import { userLink } from 'helpers/links'
import { withViewer } from 'lib/withViewer'

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
      <BrowserLink href={userLink(user)}>
        <View styleName="vertical">
          <Subtitle>{user.name}</Subtitle>
          <Text numberOfLines={1}>@{user.username}</Text>
        </View>
      </BrowserLink>
      {renderFollowButton()}
    </Row>
  )
}

UserRow = withViewer(UserRow)

export default createFragmentContainer(
  UserRow,
  graphql`
    fragment UserRow_user on User {
      id
      _id
      name
      username
      bio
      profile_picture_name
      ...FollowButton_user
    }
  `
)
