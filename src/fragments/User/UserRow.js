import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'
import Avatar from 'components/Avatar'
import FollowButton from './FollowButton'
import { connect } from 'react-redux'
import { Row } from '@shoutem/ui/components/Row'
import { Text, Subtitle } from '@shoutem/ui/components/Text'
import { View } from '@shoutem/ui/components/View'
import { TouchableOpacity } from '@shoutem/ui/components/TouchableOpacity'
import BrowserLink from 'components/BrowserLink'
import { userLink } from 'helpers/links'

const mapStateToProps = state => ({
  night_mode: state.night_mode,
  loggedIn: state.user.loggedIn,
  current_user: state.user.user
})

class UserRow extends React.Component {
  renderFollowButton = _ =>
    this.props.loggedIn &&
    this.props.user._id == this.props.current_user._id ? null : (
      <FollowButton user={this.props.user} openLogin={this.props.openLogin} />
    )

  render() {
    const { user } = this.props

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
        {this.renderFollowButton()}
      </Row>
    )
  }
}

export default createFragmentContainer(
  connect(mapStateToProps)(withNavigation(UserRow)),
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
