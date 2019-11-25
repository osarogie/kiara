import { PostLink } from './../../links/PostLink'
import { UserLink } from '../../links/UserLink'
import { readingTime } from './../../lib/readingTime'
import { useViewer } from './../../lib/withViewer'
import { PollView } from 'views/post/PollView'
import { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import styles from 'styles'
import DiscussionLike from 'fragments/DiscussionLike'
import Avatar from 'components/Avatar'
import { getTimeAgo, getCommentCount, toISODate, isBlog } from 'utils'
import { BrowserLink } from 'components/BrowserLink'
import { editStoryLink } from 'helpers/links'
import Comments from 'renderers/Comments'
import 'postview.scss'
import { CustomHead } from 'components/_partials/CustomHead'
import { pluralise } from 'helpers/pluralize'
import { updateReads } from 'mutations/UpdateReadsMutation'
import AppBar from 'components/AppBar'
import BlogToolbar from 'components/BlogToolbar'

export function FullPostView({ discussion }) {
  const [width, setWidth] = useState(0)
  const { hasViewer, viewer } = useViewer()

  const createdAtIsoDate = toISODate(discussion.createdAt)

  function onLayout({ nativeEvent: { layout } }) {
    setWidth(layout.width)
  }

  useEffect(() => {
    if (process.browser) {
      updateReads({ id: discussion._id })
    }
  }, [discussion._id])

  function renderFeaturePhoto() {
    const { featurePhoto } = discussion
    if (featurePhoto) {
      return (
        <img
          className="feature-photo s__image mb20"
          src={`https://${featurePhoto.url}`}
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
                {getTimeAgo(discussion.createdAt)}
              </time>
              <span className="dot">{readingTime(discussion.body).text}</span>
            </Text>
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

  function renderControls() {
    const { commentCount, reads } = discussion
    const commentCount_ = getCommentCount(commentCount)

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
            {`${commentCount_} Contribution${commentCount === 1 ? '' : 's'}`}
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

  return (
    <>
      <CustomHead
        type="Article"
        title={discussion.name}
        author={discussion.user}
        description={discussion.excerpt}
        url={discussion.publicUrl}
        image={discussion.featurePhoto}
        dateModified={toISODate(discussion.updatedAt)}
        dateCreated={createdAtIsoDate}
        datePublished={toISODate(discussion.createdAt)}
      />
      {discussion.group && isBlog(discussion.group.publicUrl) ? (
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
            <h4>
              Other discussions from{' '}
              <b>
                <UserLink for={discussion.user}>
                  {discussion.user.name}
                </UserLink>
              </b>
            </h4>
            {discussion.otherUsersPosts.edges.map(({ node: d }) => {
              const createdAtIsoDate = toISODate(d.createdAt)

              return (
                <View
                  style={otherStyles.postThumb}
                  className="d-embed discussion left brdrd s__main__bg bd elevated s__content__main"
                >
                  <PostLink for={d} style={{ padding: 10 }}>
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
                      {getTimeAgo(d.createdAt)}
                    </time>
                  </PostLink>
                </View>
              )
            })}
          </View>

          <div id="commentBlock">
            <Comments id={discussion._id} parent_id={discussion.id} />
          </div>
        </div>
      </article>
    </>
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
    width: '100%',
    padding: 4
  },
  postThumb: {
    width: '49%',
    marginRight: '1%',
    marginBottom: 20,
    borderRadius: 10,
    float: 'left'
  }
})
