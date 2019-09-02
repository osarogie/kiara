import { BrowserLink } from 'components/BrowserLink'
import { Constants } from 'constants'
import { View, Image, Text, StyleSheet } from 'react-native'
import Button from 'components/Button'
import FollowButton from 'fragments/FollowButton'
import Avatar from 'components/Avatar'
import { imageUrl } from 'utils'

import { pluralise } from 'helpers/pluralize'

import Col from 'antd/lib/col'
import Row from 'antd/lib/row'
import { editProfileLink } from 'helpers/links'
import { CustomHead } from 'components/_partials/CustomHead'
import { Popup } from 'components/Popup'
import QueryRendererProxy from 'renderers/QueryRendererProxy'
import { followersQuery } from 'relay/query/followersQuery'
import { FollowerPagination } from 'relay/pagination/FollowerPagination'
import { followingsQuery } from 'relay/query/followingsQuery'
import { FollowingPagination } from 'relay/pagination/FollowingPagination'

export function UserInfoView({ user }) {
  const friendLabelStyle = { marginRight: 10 }
  const friendValueStyle = { fontSize: 18 }

  function isSameUser() {
    return user.is_viewer
  }

  function renderFollowButton() {
    return isSameUser() || <FollowButton user={user} />
  }

  function renderFriends() {
    return (
      <View style={[styles.fillRow, { marginTop: 20 }]}>
        <Popup
          trigger={
            <Text style={friendLabelStyle}>
              {user.follower_count} {pluralise('Follower', user.follower_count)}
            </Text>
          }
        >
          <Text style={styles.popupTitle}>Followers</Text>
          <QueryRendererProxy
            query={followersQuery}
            variables={{ cursor: null, count: 10, id: user._id }}
            render={({ error, props, retry, environment }) => (
              <View style={{ flex: 1 }}>
                <FollowerPagination user={props.user} />
              </View>
            )}
          ></QueryRendererProxy>
        </Popup>
        <Popup
          trigger={
            <Text style={friendLabelStyle}>
              {user.following_count} Following
            </Text>
          }
        >
          <Text style={styles.popupTitle}>Following</Text>
          <QueryRendererProxy
            query={followingsQuery}
            variables={{ cursor: null, count: 10, id: user._id }}
            render={({ error, props, retry, environment }) => (
              <View style={{ flex: 1 }}>
                <FollowingPagination user={props.user} />
              </View>
            )}
          ></QueryRendererProxy>
        </Popup>
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
            backgroundColor: 'transparent',
            borderRadius: 20,
            borderWidth: 2,
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
            padding: 20,
            flexDirection: 'row'
          }}
        >
          <View style={{ marginRight: 10, flex: 1 }}>
            <Text className="s__content__main" style={styles.title}>
              {user.name}
            </Text>
            <Text className="s__content__main" style={{ marginTop: 10 }}>
              {user.bio}
            </Text>
            {renderFriends()}
            <View
              style={{ flexDirection: 'row', marginTop: 50, marginBottom: 20 }}
            >
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
      </div>
    </>
  )
}

const styles = StyleSheet.create({
  popupTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 25,
    marginTop: 5
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000'
  },
  fillRow: { flexDirection: 'row' }
})
