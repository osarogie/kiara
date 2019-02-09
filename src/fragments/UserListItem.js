import { userLink } from 'helpers/links'
import { BrowserLink } from 'components/BrowserLink'
import React from 'react'
import { Text, View } from 'react-native'
import { createFragmentContainer, graphql } from 'react-relay'
import { imageUrl } from 'utils'
import Avatar from 'components/Avatar'
import FollowButton from 'fragments/FollowButton'
import { withViewer } from 'lib/withViewer'

class UserListItem extends React.Component {
  clickableProps = {
    underlayColor: 'whitesmoke'
  }

  renderFollowButton = _ =>
    this.props.hasViewer &&
    this.props.user._id == this.props.viewer._id ? null : (
      <FollowButton
        user={this.props.user}
        icon={this.props.vertical ? true : false}
      />
    )

  render() {
    const { user, vertical } = this.props

    if (vertical)
      return (
        <View style={{ paddingHorizontal: 17, paddingVertical: 14, flex: 1 }}>
          <View style={{ flexDirection: 'row', flex: 1 }}>
            <Avatar
              medium
              rounded
              source={user}
              title={user.name}
              activeOpacity={0.7}
            />
            <View style={{ flex: 1, marginLeft: 17 }}>
              <BrowserLink href={userLink(user)}>
                <Text
                  numberOfLines={2}
                  style={{
                    flex: 1,
                    marginRight: 5,
                    fontSize: 16,
                    fontWeight: 'bold'
                    // textAlign: 'center'
                  }}
                  className="s__content__main"
                >
                  {user.name}
                </Text>
              </BrowserLink>
              <Text
                numberOfLines={2}
                className="s__content__main"
                style={{
                  marginTop: 10,
                  marginBottom: 10,
                  // marginLeft: 10,
                  flex: 1,
                  marginRight: 5,
                  fontSize: 14
                  // textAlign: 'center'
                }}
              >
                {user.bio}
              </Text>
            </View>
            {this.renderFollowButton()}
          </View>
        </View>
      )

    return (
      <View style={{ width: 200, padding: 17, flex: 1 }}>
        <View style={{ flexDirection: 'row', flex: 1 }}>
          <BrowserLink href={userLink(user)}>
            <Text
              numberOfLines={2}
              style={{
                marginTop: 10,
                // marginLeft: 10,
                flex: 1,
                marginRight: 5,
                color: '#000',
                fontSize: 16,
                fontWeight: 'bold'
                // textAlign: 'center'
              }}
            >
              {user.name}
            </Text>
          </BrowserLink>
          <Avatar
            medium
            rounded
            source={user}
            title={user.name}
            activeOpacity={0.7}
          />
        </View>

        <View style={{ flex: 1, height: '100%' }}>
          <Text
            numberOfLines={2}
            style={{
              marginTop: 10,
              marginBottom: 10,
              // marginLeft: 10,
              flex: 1,
              marginRight: 5,
              fontSize: 14
              // textAlign: 'center'
            }}
          >
            {user.bio}
          </Text>
        </View>
        {this.renderFollowButton()}
      </View>
    )
  }
}

export default createFragmentContainer(
  withViewer(UserListItem),
  graphql`
    fragment UserListItem_user on User {
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
