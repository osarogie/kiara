import { UserLink } from './../links/UserLink'
import React from 'react'
import { Text, View } from 'react-native'
import { createFragmentContainer, graphql } from 'react-relay'
import Separator from 'components/Separator'
import Avatar from 'components/Avatar'
import { useTimeAgo } from '../utils'
import { PostLink } from '../links/PostLink'
import { GroupLink } from '../links/GroupLink'

const cultureNameProps = {
  style: { color: '#05f' }
}

function PostThumb({ discussion, showGroupInfo }) {
  const { user } = discussion
  const timeAgo = useTimeAgo(discussion.createdAt)

  function renderCultureName() {
    if (discussion.group && showGroupInfo !== false) {
      return (
        <GroupLink
          for={discussion.group}
          style={{ flex: 1, flexDirection: 'row' }}
        >
          <Text
            style={{ flexDirection: 'row', marginBottom: 10, flex: 1 }}
            numberOfLines={1}
          >
            <Text> in </Text>
            <Text {...cultureNameProps}>{discussion.group.name}</Text>
            <Text> culture</Text>
          </Text>
        </GroupLink>
      )
    } else return null
  }

  function renderMeta() {
    return (
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            flex: 1,
            marginTop: 10,
            marginTop: 0
          }}
        >
          {discussion.name}
        </Text>
        <UserLink for={discussion.user}>
          <Text style={{ flex: 1 }} numberOfLines={1}>
            <Text style={{ fontStyle: 'italic' }}>{'by '}</Text>
            <Text style={{ color: '#000', flex: 1 }} numberOfLines={1}>
              {discussion.user.name}
            </Text>
          </Text>
        </UserLink>
        <View style={{ flexDirection: 'row' }}>
          <Text>{timeAgo}</Text>
          {renderCultureName()}
        </View>
      </View>
    )
  }

  return (
    <View>
      <PostLink
        accessibilityRole="link"
        style={{
          backgroundColor: '#fff'
          // margin: 20,
          // elevation: 2,
          // borderRadius: 5
          // borderWidth: 1,
          // borderColor: '#ddd'
        }}
        for={discussion}
      >
        <View style={{ margin: 15 }}>
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
      </PostLink>
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
