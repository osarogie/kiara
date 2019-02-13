import { PollView } from 'views/post/PollView'
import { Constants } from 'constants'
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Platform,
  Image,
  Dimensions,
  Share,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native'
import Head from 'next/head'

import styles from 'styles'
import excerptStyles from 'styles/excerptStyles'
import DiscussionLike from 'fragments/DiscussionLike'
import Avatar from 'components/Avatar'
import { getTimeAgo, getCommentCount, toISODate } from 'utils'
import { connect } from 'react-redux'
import { BrowserLink } from 'components/BrowserLink'
import { userLink, groupLink, editStoryLink } from 'helpers/links'
import { devLog } from 'lib/devLog'
import Comments from 'renderers/Comments'
import 'postview.scss'
import { CustomHead } from 'components/_partials/CustomHead'
import { withViewer } from 'lib/withViewer'
import { pluralise } from 'helpers/pluralize'

const mapStateToProps = state => ({
  // loggedIn: state.user.loggedIn,
  current_user: state.user
})

// const { width } = Dimensions.get('window')

export class FullPostView extends React.Component {
  state = { width: 0 }

  containerStyles = [styles.container, { paddingBottom: 20 }]

  onLayout = ({
    nativeEvent: {
      layout: { width, height }
    }
  }) => {
    this.setState({ width, height })
  }

  renderFeaturePhoto() {
    const { width } = this.state
    const { feature_photo } = this.props.discussion
    if (feature_photo) {
      const height = (feature_photo.height / feature_photo.width) * width

      return (
        <Image
          className="s__image mb20"
          source={{ uri: `https://${feature_photo.url}` }}
          style={{
            width,
            height,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: 20
          }}
        />
      )
    } else return null
  }

  renderGroupInfo() {
    const { discussion } = this.props
    if (discussion.group) {
      return (
        <div className="slim">
          <Text
            style={[
              excerptStyles.groupInfo,
              {
                paddingLeft: 20,
                paddingRight: 20,
                paddingBottom: 8,
                paddingTop: 8,
                // backgroundColor: '#eee',
                fontStyle: 'italic'
              }
            ]}
          >
            <Text className="s__content__main80">Posted in </Text>
            <BrowserLink href={groupLink(discussion.group)}>
              <Text className="s__content__main">{discussion.group.name}</Text>
            </BrowserLink>
          </Text>
          <style jsx>
            {`
              .slim {
                margin-top: 20px;
              }
            `}
          </style>
        </div>
      )
    } else return null
  }

  renderUserInfo() {
    const { discussion } = this.props
    return (
      <div className="slim">
        <View
          onLayout={this.onLayout}
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
            <Text numberOfLines={1} style={{ flex: 1, fontSize: 13 }}>
              {discussion.user.bio}
            </Text>
            <div style={{ fontSize: 12, fontStyle: 'italic' }}>
              {getTimeAgo(discussion.created_at)}
            </div>
          </View>
        </View>
      </div>
    )
  }

  renderEdit() {
    const { discussion, hasViewer, viewer } = this.props

    if (hasViewer && viewer._id === discussion.user._id) {
      return (
        <BrowserLink href={editStoryLink(discussion)}>
          <Text style={{ marginLeft: 20 }}>Edit</Text>
        </BrowserLink>
      )
    }

    return null
  }

  share() {
    const { discussion } = this.props
    const message = `Read "${discussion.name}" on TheCommunity - ${
      discussion.public_url
    } by ${discussion.user.name}`

    Share.share(
      { title: discussion.name, message },
      { dialogTitle: 'Share Story' }
    )
  }

  renderControls() {
    const { discussion } = this.props
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
        <View style={styles.fillRow} />
        {this.renderEdit()}
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

  renderCommentBox() {
    // const discussion = this.props.data.discussion
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
            source={Constants.user || {}}
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

  render() {
    const { discussion } = this.props

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
          datePublished={toISODate(discussion.created_at)}
        />
        <View className="fullpost">
          <View style={this.containerStyles}>
            {this.renderGroupInfo()}
            {this.renderUserInfo()}
            <div className="slim" style={{ paddingTop: 20, paddingBottom: 20 }}>
              <div className="title">{discussion.name}</div>
            </div>
            {this.renderFeaturePhoto()}
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

            <div className="slim">{this.renderControls()}</div>
          </View>
          <div className="comments bdt s__dark__bg" id="comments">
            <div id="commentBlock">
              <Comments id={discussion._id} parent_id={discussion.id} />
            </div>
          </div>
        </View>
      </>
    )
  }
}

FullPostView = connect(mapStateToProps)(withViewer(FullPostView))
