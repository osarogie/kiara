import { readingTime } from './../../lib/readingTime'
import { useViewer } from './../../lib/withViewer'
import { PollView } from 'views/post/PollView'
import { Constants } from 'constants'
import { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Share,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native'
import Head from 'next/head'

import styles from 'styles'
import excerptStyles from 'styles/excerptStyles'
import DiscussionLike from 'fragments/DiscussionLike'
import Avatar from 'components/Avatar'
import { getTimeAgo, getCommentCount, toISODate, isBlog } from 'utils'
import { BrowserLink } from 'components/BrowserLink'
import { userLink, editStoryLink } from 'helpers/links'
import { devLog } from 'lib/devLog'
import Comments from 'renderers/Comments'
import 'postview.scss'
import { CustomHead } from 'components/_partials/CustomHead'
import { withViewer } from 'lib/withViewer'
import { pluralise } from 'helpers/pluralize'
import { updateReads } from 'mutations/UpdateReadsMutation'
import AppBar from 'components/AppBar'
import BlogToolbar from 'components/BlogToolbar'

const containerStyles = [styles.container, { paddingBottom: 20 }]

export function FullPostView({ discussion }) {
  const [width, setWidth] = useState(0)
  const { hasViewer, viewer } = useViewer()

  const createdAtIsoDate = toISODate(discussion.created_at)

  function onLayout({ nativeEvent: { layout } }) {
    setWidth(layout.width)
  }

  useEffect(() => {
    if (process.browser) {
      updateReads({ id: discussion._id })
    }
  }, [discussion._id])

  function renderFeaturePhoto() {
    const { feature_photo } = discussion
    if (feature_photo) {
      const height = (feature_photo.height / feature_photo.width) * width

      return (
        <img
          className="feature-photo s__image mb20"
          src={`https://${feature_photo.url}`}
          style={{
            width
          }}
        />
      )
    }

    return null
  }

  function renderUserInfo() {
    return (
      <div className="slim">
        <View
          onLayout={onLayout}
          style={{
            flexDirection: 'row',
            flex: 1,
            marginTop: 20,
            marginLeft: 20,
            marginRight: 20
          }}
        >
          <Avatar
            width={40}
            rounded
            source={discussion.user}
            title={discussion.user.name}
            activeOpacity={0.7}
          />
          <View style={{ marginLeft: 20, flex: 1 }}>
            <BrowserLink href={userLink(discussion.user)}>
              <Text style={{ fontWeight: 'bold' }}>{discussion.user.name}</Text>
            </BrowserLink>
            <Text numberOfLines={1} style={{ fontSize: 13, marginTop: 5 }}>
              {discussion.user.bio}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 5,
                fontSize: 12,
                fontStyle: 'italic'
              }}
            >
              <time
                role="presentation"
                title={createdAtIsoDate}
                datetime={createdAtIsoDate}
              >
                {getTimeAgo(discussion.created_at)}
              </time>
              <span className="dot">{readingTime(discussion.body).text}</span>
            </View>
          </View>
        </View>
      </div>
    )
  }

  function renderEdit() {
    if (hasViewer && viewer._id === discussion.user._id) {
      return (
        <BrowserLink href={editStoryLink(discussion)}>
          <Text style={{ marginLeft: 20 }}>Edit</Text>
        </BrowserLink>
      )
    }

    return null
  }

  function share() {
    const message = `Read "${discussion.name}" on TheCommunity - ${
      discussion.public_url
    } by ${discussion.user.name}`

    Share.share(
      { title: discussion.name, message },
      { dialogTitle: 'Share Story' }
    )
  }

  function renderControls() {
    const { comment_count, reads } = discussion
    const comment_count_ = getCommentCount(comment_count)

    return (
      <View
        style={[
          styles.row,
          {
            alignItems: 'center',
            paddingRight: 20,
            paddingLeft: 20
          }
        ]}
        key={`post.c.viewholder.${discussion.id}`}
      >
        <DiscussionLike discussion={discussion} />
        <View style={{ flex: 1 }} />
        {renderEdit()}
        <Text style={{ marginLeft: 20 }}>
          {`${reads} ${pluralise('View', reads)}`}
        </Text>
        <TouchableOpacity>
          <Text style={{ marginLeft: 20 }}>
            {`${comment_count_} Contribution${comment_count === 1 ? '' : 's'}`}
          </Text>
        </TouchableOpacity>
        {/* <Icon
            name="md-more"
            style={excerptStyles.control}
            size={25}
            color="#777"
          /> */}
      </View>
    )
  }

  function renderCommentBox() {
    // const discussion = data.discussion
    return (
      <TouchableHighlight
        className="s__main__bg bd"
        style={{
          marginVertical: 20,
          marginHorizontal: 'auto',
          padding: 20,
          borderRadius: 8,
          maxWidth: 500
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <Avatar
            width={40}
            rounded
            disableLink
            source={viewer}
            activeOpacity={0.7}
          />
          <View
            style={{
              marginLeft: 20
            }}
          >
            <Text
              style={{
                fontWeight: 'bold',
                fontStyle: 'italic'
              }}
            >
              Leave a comment
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  return (
    <>
      <CustomHead
        type="Article"
        title={discussion.name}
        author={discussion.user}
        description={discussion.excerpt}
        url={discussion.public_url}
        image={discussion.feature_photo}
        dateModified={toISODate(discussion.updated_at)}
        dateCreated={createdAtIsoDate}
        datePublished={toISODate(discussion.created_at)}
      />
      {discussion.group && isBlog(discussion.group.public_url) ? (
        <BlogToolbar blog={discussion.group} />
      ) : (
        <AppBar className="elevated" />
      )}
      <article role="article" className="fullpost">
        {/* {renderGroupInfo()} */}
        {renderUserInfo()}
        <div className="slim" style={{ paddingTop: 20, paddingBottom: 20 }}>
          <div className="title">{discussion.name}</div>
        </div>
        {renderFeaturePhoto()}
        <div
          className="slim body"
          dangerouslySetInnerHTML={{ __html: discussion.parsed_body }}
        />
        {discussion.has_poll && (
          <div className="slim">
            <div
              className="poll s__main__bg"
              style={{ marginLeft: 20, marginRight: 20 }}
            >
              <PollView discussion={discussion} />
            </div>
          </div>
        )}

        <div className="slim">{renderControls()}</div>
        <div className="comments bdt s__dark__bg" id="comments">
          <div id="commentBlock">
            <Comments id={discussion._id} parent_id={discussion.id} />
          </div>
        </div>
      </article>
    </>
  )
}
