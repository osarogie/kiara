import { BrowserLink } from 'components/BrowserLink'
import { Constants } from 'constants'
import { View, Image, Text, StyleSheet } from 'react-native'
import Button from 'components/Button'
import FollowButton from 'fragments/FollowButton'
import styles from 'styles'
import Avatar from 'components/Avatar'
import { imageUrl } from 'utils'

import { connect } from 'react-redux'
import { pluralize } from 'helpers/pluralize'

import Col from 'antd/lib/col'
import Row from 'antd/lib/row'
import { editProfileLink } from 'helpers/links'
import { CustomHead } from 'components/_partials/CustomHead'

const mapStateToProps = state => ({
  current_user: state.user.user,
  loggedIn: state.user.loggedIn
})

export function UserInfoView({ user, current_user }) {
  const friendLabelStyle = { marginRight: 10 }
  const friendValueStyle = { fontSize: 18 }

  function isSameUser() {
    return user.is_viewer
  }

  function renderFollowButton() {
    return (
      isSameUser() || (
        <FollowButton user={user} buttonStyle={{ marginVertical: 20 }} />
      )
    )
  }

  function renderFriends() {
    return (
      <View style={[styles.fillRow, { marginTop: 20 }]}>
        <Text style={friendLabelStyle}>
          {user.follower_count} {pluralize(['Follower'], user.follower_count)}
        </Text>
        <Text style={friendLabelStyle}>{user.following_count} Following</Text>
      </View>
    )
  }

  const renderEditButton = _ =>
    !isSameUser() || (
      <BrowserLink href={editProfileLink(user)}>
        <Button
          title="Edit Profile"
          textStyle={{ color: '#05f' }}
          buttonStyle={{
            marginTop: 10,
            backgroundColor: 'transparent',
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#05f'
          }}
        />
      </BrowserLink>
    )

  return (
    <>
      <CustomHead
        title={`${user.name} (@${user.username}) - TheCommunity`}
        description={user.bio}
        image={{
          url: user.profile_picture,
          height: 250,
          width: 250
        }}
      />
      <div className="slim">
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff0'
          }}
        >
          <View
            style={{
              padding: 20,
              flex: 1,
              flexDirection: 'row'
            }}
          >
            <View style={{ marginRight: 10, flex: 1 }}>
              <Text className="s__content__main" style={styles.title}>
                {user.name}
              </Text>
              <Text className="s__content__main" style={{ flex: 1 }}>
                {user.bio}
              </Text>
              {renderFriends()}
              <View style={{ flexDirection: 'row' }}>
                {renderFollowButton()}
                {renderEditButton()}
              </View>
            </View>
            <Avatar
              width={100}
              rounded
              source={user}
              title={user.name}
              activeOpacity={0.7}
              disableLink
            />
          </View>
        </View>
      </div>
    </>
  )
}
