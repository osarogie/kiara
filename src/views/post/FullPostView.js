import { PostLink } from './../../links/PostLink'
import { UserLink } from '../../links/UserLink'
import { readingTime } from './../../lib/readingTime'
import { useViewer } from './../../lib/withViewer'
import { PollView } from 'views/post/Poll.view'
import { useState, useEffect, useMemo } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import ExclamationCircleIcon from '@heroicons/react/24/outline/ExclamationCircleIcon'
import DiscussionLike from 'fragments/DiscussionLike'
import Avatar from 'components/Avatar'
import { getCommentCount, toISODate } from 'utils'
import Comments from 'renderers/Comments'
import { CustomHead } from 'components/_partials/CustomHead'
import { pluralise } from 'helpers/pluralize'
import { updateReads } from 'mutations/UpdateReadsMutation'
import AppBar from 'components/AppBar'
import BlogToolbar from 'components/BlogToolbar'
import { getUserImage, useTimeAgo } from '../../utils'
import { EditPostLink } from '../../links/EditPostLink'
import { useContext } from 'react'
import { ReactRelayContext } from 'react-relay'
import { deleteDiscussion } from '../../services/posts/deleteDiscussion'
import { useCallback } from 'react'
import { Popconfirm, Popover, Modal } from 'antd'
import Feather from 'react-native-vector-icons/Feather'
import Router from 'next/router'
import { TouchableRipple } from 'react-native-paper'

export function FullPostView({ discussion }) {
  const { publicUrl, name, user } = discussion
  const [width, setWidth] = useState(0)
  const { hasViewer, viewer } = useViewer()
  const timeAgo = useTimeAgo(discussion.createdAt)
  const environment = useContext(ReactRelayContext).environment
  const createdAtIsoDate = toISODate(discussion.createdAt)
  const [menuVisible, setMenuVisible] = useState(false)
  const userImage = useMemo(() => getUserImage(discussion.user), [
    discussion.user
  ])

  function onLayout({ nativeEvent: { layout } }) {
    setWidth(layout.width)
  }

  useEffect(() => {
    if (process.browser) {
      updateReads({ id: discussion._id })
    }
  }, [discussion._id])

  const deleteThis = useCallback(() => {
    setMenuVisible(false)
    Modal.confirm({
      title: 'Do you Want to delete this story?',
      icon: <ExclamationCircleOutlined height={30} width={30}/>,
      content: 'This action cannot be undone',
      onOk() {
        deleteDiscussion({ environment, discussion }).then(([status]) => {
          if (status) Router.replace('/')
        })
      },
      onCancel() {}
    })
  }, [environment, discussion])

  const share = useCallback(async () => {
    const shareData = {
      title: name,
      text: `Read "${name}" on TheCommunity - ${publicUrl} by ${user.name}`,
      url: publicUrl
    }

    try {
      await navigator.share(shareData)
    } catch (err) {
      console.error(err)
    }
  }, [publicUrl, name, user])

  function renderFeaturePhoto() {
    const { featurePhoto } = discussion
    if (featurePhoto) {
      return (
        <img
          className="slim feature-photo s__image mb20 table"
          src={`https://${featurePhoto.url}`}
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
            <UserLink for={discussion.user}>
              <Text style={{ fontWeight: 'bold' }}>{discussion.user.name}</Text>
            </UserLink>
            <Text numberOfLines={1} style={{ fontSize: 13, marginTop: 5 }}>
              {discussion.user.bio}
            </Text>
            <Text
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
                dateTime={createdAtIsoDate}
              >
                {timeAgo}
              </time>
              <span className="dot">
                {readingTime(discussion.body || '').text}
              </span>
            </Text>
          </View>
        </View>
      </div>
    )
  }

  function renderEdit() {
    if (hasViewer && viewer._id === discussion.user._id) {
      let content = (
        <View>
          <EditPostLink for={discussion}>
            <Text style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
              Edit
            </Text>
          </EditPostLink>

          <TouchableOpacity onPress={deleteThis}>
            <Text
              style={{
                paddingHorizontal: 10,
                paddingVertical: 10,
                cursor: 'pointer'
              }}
            >
              Delete
            </Text>
          </TouchableOpacity>
        </View>
      )

      return (
        <Popover
          content={content}
          trigger="click"
          visible={menuVisible}
          onVisibleChange={setMenuVisible}
        >
          <View style={{ padding: 10, cursor: 'pointer' }}>
            <Feather name="more-vertical" size={20} />
          </View>
        </Popover>
      )
    }

    return null
  }

  function renderControls() {
    const { commentCount, reads } = discussion
    const commentCount_ = getCommentCount(commentCount)

    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingRight: 20,
          paddingLeft: 20
        }}
        key={`post.c.viewholder.${discussion.id}`}
      >
        <DiscussionLike discussion={discussion} />
        <TouchableOpacity onClick={share}>
          <Feather size={20} name="share-2" style={{ marginStart: 16 }} />
        </TouchableOpacity>
        <View style={{ flex: 1 }} />
        <Text style={{ marginLeft: 20 }}>
          {`${reads} ${pluralise('View', reads)}`}
        </Text>
        <Text style={{ marginLeft: 20 }}>
          {`${commentCount_} Contribution${commentCount === 1 ? '' : 's'}`}
        </Text>
        {renderEdit()}
      </View>
    )
  }

  return (
    <>
      <CustomHead
        type="Article"
        title={discussion.name}
        author={discussion.user}
        description={discussion.excerpt}
        url={discussion.publicUrl}
        image={discussion.featurePhoto || userImage}
        dateModified={toISODate(discussion.updatedAt)}
        dateCreated={createdAtIsoDate}
        datePublished={toISODate(discussion.createdAt)}
      />
      {discussion.group ? (
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
          dangerouslySetInnerHTML={{ __html: discussion.parsedBody }}
        />
        {discussion.hasPoll && (
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
          <View style={otherStyles.otherUsersPosts}>
            <h4 style={{ marginLeft: 20, marginRight: 20 }}>
              Other discussions from{' '}
              <b>
                <UserLink for={discussion.user}>
                  {discussion.user.name}
                </UserLink>
              </b>
            </h4>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              {discussion.otherUsersPosts.edges.map(({ node: d }) => {
                return <RelatedPost key={d.id} post={d} />
              })}
            </View>
          </View>

          <div id="commentBlock">
            <Comments id={discussion._id} parent_id={discussion.id} />
          </div>
        </div>
      </article>
    </>
  )
}

function RelatedPost({ post: d }) {
  const timeAgo = useTimeAgo(d.createdAt)
  const createdAtIsoDate = useMemo(() => toISODate(d.createdAt), [d.createdAt])

  return (
    <View key={d._id} style={otherStyles.postThumb}>
      <PostLink
        className="d-embed discussion left brdrd s__main__bg bd elevated s__content__main"
        for={d}
        style={otherPostItemLinkStyle}
      >
        <div className="d-body">
          <div>
            <b>{d.name}</b>
          </div>
        </div>
        <time
          className="meta"
          role="presentation"
          title={createdAtIsoDate}
          dateTime={createdAtIsoDate}
        >
          {timeAgo}
        </time>
      </PostLink>
    </View>
  )
}

const otherStyles = StyleSheet.create({
  otherUsersPosts: {
    marginBottom: 20,
    alignSelf: 'center',
    maxWidth: 700,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
    display: 'table',
    width: '100%'
  },
  postThumb: {
    marginHorizontal: 20,
    marginVertical: 10,
    minWidth: 300,
    flex: 1
  }
})

const otherPostItemLinkStyle = {
  padding: 16,
  display: 'block',
  height: '100%',
  boxSizing: 'border-box',
  borderRadius: 10
}
