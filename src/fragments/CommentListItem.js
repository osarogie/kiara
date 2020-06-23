import { UserLink } from './../links/UserLink'
import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { createFragmentContainer, graphql } from 'react-relay'
import Avatar from 'components/Avatar'
import { BrowserLink } from 'components/BrowserLink'
import { userLink } from 'helpers/links'
import { useTimeAgo } from '../utils'

function CommentListItem({ comment, strip = false }) {
  const timeAgo = useTimeAgo(comment.createdAt)

  function renderMeta() {
    return (
      <div className="s__content__main80 f11">
        <Text>
          <UserLink className="s__content__main" for={comment.user}>
            {comment.user.name}
          </UserLink>
          <Text style={styles.row}>
            <Text> - {timeAgo}</Text>
          </Text>
        </Text>
      </div>
    )
  }

  function renderNormal() {
    return (
      <div
        className="s__main__bg bd comment-list-item"
        style={{
          marginTop: 20,
          borderRadius: 8
        }}
      >
        <View style={styles.normalContainer}>
          <View style={styles.excerptContainer}>
            <View style={{ flexDirection: 'row' }}>
              <Avatar
                size={30}
                rounded
                source={comment.user}
                title={comment.user.name}
                activeOpacity={0.7}
              />
              <View style={styles.normalContent}>
                {renderMeta()}
                <Text style={styles.mt10}>{comment.body}</Text>
              </View>
            </View>
          </View>
        </View>
      </div>
    )
  }

  function renderStrip() {
    return (
      <div
        style={{
          paddingLeft: 15,
          paddingRight: 15
        }}
        className="bdt"
      >
        <View style={styles.mv20}>
          <View style={styles.row}>
            <Avatar
              size={30}
              rounded
              source={comment.user}
              title={comment.user.name}
              activeOpacity={0.7}
            />
            <View style={styles.stripContent}>
              <Text style={styles.font12} numberOfLines={2}>
                <UserLink for={comment.user}>
                  <Text style={styles.bold}>{comment.user.name} </Text>
                </UserLink>
                {comment.excerpt}
                {/* {comment.wordCount > 30 ? '***...(Read More)***' : ''} */}
              </Text>
              <View style={styles.row}>
                <span style={{ fontSize: 11 }}>{timeAgo}</span>
              </View>
              {/* </Markdown> */}
            </View>
          </View>
        </View>
      </div>
    )
  }

  return strip ? renderStrip() : renderNormal()
}

export default createFragmentContainer(CommentListItem, {
  comment: graphql`
    fragment CommentListItem_comment on Comment {
      id
      _id
      body
      createdAt
      discussionId
      excerpt
      discussion {
        id
        _id
      }
      user {
        id
        _id
        name
        username
        profilePicture
        profilePictureName
      }
    }
  `
})

const styles = StyleSheet.create({
  normalContainer: {
    marginHorizontal: 'auto',
    maxWidth: 500,
    paddingHorizontal: 10
  },
  excerptContainer: { margin: 15 },
  row: { flexDirection: 'row' },
  normalContent: { marginLeft: 15, flex: 1 },
  font12: { fontSize: 12 },
  stripContent: { marginLeft: 10, flex: 1 },
  mv20: { marginVertical: 10 },
  mt10: { marginTop: 10 },
  bold: { fontWeight: 'bold' }
})
