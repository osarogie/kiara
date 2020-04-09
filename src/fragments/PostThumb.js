import { discussionLink, userLink, groupLink } from './../helpers/links'
import React from 'react'
import { Text, View, TouchableHighlight, TouchableOpacity } from 'react-native'
import styles from 'styles'
import excerptStyles from 'styles/excerptStyles'
import { createFragmentContainer, graphql } from 'react-relay'
import Separator from 'components/Separator'
import Avatar from 'components/Avatar'
import { useTimeAgo } from '../utils'

const clickableProps = {
  underlayColor: 'whitesmoke'
}

const cultureNameProps = {
  style: { color: '#05f' }
}

function PostThumb({ discussion, showGroupInfo }) {
  const { user } = discussion
  const timeAgo = useTimeAgo(discussion.createdAt)

  function renderCultureName() {
    if (discussion.group && showGroupInfo !== false) {
      return (
        <TouchableOpacity
          {...clickableProps}
          href={groupLink(discussion.group)}
          style={{ flex: 1, flexDirection: 'row' }}
        >
          <Text style={excerptStyles.groupInfo} numberOfLines={1}>
            <Text> in </Text>
            <Text {...cultureNameProps}>{discussion.group.name}</Text>
            <Text> culture</Text>
          </Text>
        </TouchableOpacity>
      )
    } else return null
  }

  function renderMeta() {
    return (
      <View>
        <Text style={[excerptStyles.title, { marginTop: 0 }]}>
          {discussion.name}
        </Text>
        <TouchableOpacity
          accessibilityRole="link"
          href={userLink(discussion.user)}
          {...clickableProps}
        >
          <Text style={[styles.fill]} numberOfLines={1}>
            <Text style={{ fontStyle: 'italic' }}>{'by '}</Text>
            <Text style={[styles.fill, { color: '#000' }]} numberOfLines={1}>
              {discussion.user.name}
            </Text>
          </Text>
        </TouchableOpacity>
        <View style={styles.row}>
          <Text>{timeAgo}</Text>
          {renderCultureName()}
        </View>
      </View>
    )
  }

  return (
    <View>
      <TouchableHighlight
        accessibilityRole="link"
        {...clickableProps}
        style={{
          backgroundColor: '#fff'
          // margin: 20,
          // elevation: 2,
          // borderRadius: 5
          // borderWidth: 1,
          // borderColor: '#ddd'
        }}
        href={discussionLink(discussion)}
      >
        <View style={excerptStyles.container}>
          <View style={{ flexDirection: 'row', marginBottom: 8 }}>
            <Avatar
              width={40}
              radius={5}
              source={user}
              title={user.name}
              activeOpacity={0.7}
            />
            <View style={{ marginLeft: 15, marginRight: 15, flex: 1 }}>
              {renderMeta()}
            </View>
          </View>
        </View>
      </TouchableHighlight>
      <Separator />
    </View>
  )
}

export default createFragmentContainer(PostThumb, {
  discussion: graphql`
    fragment PostThumb_discussion on Discussion {
      id
      _id
      name
      excerpt(size: 10)
      wordCount
      createdAt
      user {
        id
        _id
        name
        username
        profilePictureName
      }
      group {
        id
        _id
        name
        permalink
      }
    }
  `
})
