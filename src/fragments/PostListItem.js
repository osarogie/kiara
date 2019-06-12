import { BrowserLink } from '../components/BrowserLink'
import { pluralise } from '../helpers/pluralize'
import { Constants } from '../constants'
import React from 'react'
import { Text, View, Image, FlatList } from 'react-native'
import styles from 'styles'
import excerptStyles from 'styles/excerptStyles'
import { createFragmentContainer, graphql } from 'react-relay'
import Avatar from 'components/Avatar'
import DiscussionLike from 'fragments/DiscussionLike'
import { getTimeAgo, imageUrl, getCommentCount } from 'utils'
import CommentListItem from 'fragments/CommentListItem'
import Col from 'antd/lib/col'
import {
  commentsLink,
  groupLink,
  storyLink,
  userLink,
  editStoryLink
} from 'helpers/links'
import { PollView } from 'views/post/PollView'
import { withViewer } from 'lib/withViewer'

class PostListItem extends React.PureComponent {
  clickableProps = {
    underlayColor: 'whitesmoke'
  }

  featurePhotoStyles = {
    ...excerptStyles.featurePhoto,
    backgroundColor: '#eee',
    marginTop: 50
  }

  openWrite = _ =>
    this.props.openWrite({ id: this.props.discussion._id, editing_mode: true })

  renderFeaturePhoto() {
    const image = this.props.discussion.feature_photo

    if (image) {
      const height = 100
      const width = 100

      const f_width = Math.min(1000, 150)
      const uri = imageUrl(image.name, '100x100')

      return (
        <div className="s__image feature-photo">
          <Image source={{ uri }} style={{ borderRadius: 5, height, width }} />
        </div>
      )
    } else {
      return null
    }
  }

  renderCultureName() {
    const { discussion, showGroupInfo } = this.props

    if (discussion.group && showGroupInfo !== false) {
      return (
        <BrowserLink href={groupLink(discussion.group)}>
          <Text
            style={[excerptStyles.groupInfo, excerptStyles.meta]}
            numberOfLines={1}
          >
            <Text> in </Text>
            <Text className="s__content__main">{discussion.group.name}</Text>
          </Text>
        </BrowserLink>
      )
    } else return null
  }

  renderMeta() {
    const { discussion } = this.props
    const { user } = discussion

    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Avatar
          width={40}
          // radius={5}
          rounded
          source={user}
          title={user.name}
          activeOpacity={0.7}
        />
        <View style={{ marginLeft: 15 }}>
          <BrowserLink href={userLink(user)} key={`post.m.t.${discussion.id}`}>
            <Text style={styles.fill} numberOfLines={1}>
              {discussion.user.name}
            </Text>
          </BrowserLink>
          <Text
            className="s__content__main80"
            style={{ flexDirection: 'row', alignItems: 'center' }}
            key={`post.m.v.${discussion.id}`}
          >
            <Text style={excerptStyles.meta}>
              {getTimeAgo(discussion.created_at)}
            </Text>
            {this.renderCultureName()}
          </Text>
        </View>
      </View>
    )
  }

  renderEdit() {
    const { discussion, viewer, hasViewer } = this.props
    if (hasViewer && viewer._id == discussion.user._id) {
      return (
        <BrowserLink href={editStoryLink(discussion)}>
          <Text style={{ marginLeft: 20 }}>Edit</Text>
        </BrowserLink>
      )
    }

    return null
  }

  renderControls() {
    const { discussion, viewer, hasViewer } = this.props
    const { comment_count, reads } = discussion
    const comment_count_ = getCommentCount(comment_count)
    const viewerOwns = hasViewer && viewer._id == discussion.user._id

    return [
      // <Separator
      //   styles={{ marginTop: 13 }}
      //   key={`post.c.separator.${discussion.id}`}
      // />,
      <View
        style={[styles.row, { alignItems: 'center' }]}
        key={`post.c.viewholder.${discussion.id}`}
      >
        <DiscussionLike discussion={discussion} size={20} />
        <View style={styles.fillRow} />
        {this.renderEdit()}
        {viewerOwns && (
          <Text style={{ marginLeft: 20 }}>
            {`${reads} ${pluralise('View', reads)}`}
          </Text>
        )}
        <BrowserLink href={commentsLink(discussion)}>
          <Text style={{ marginLeft: 20 }}>
            {`${comment_count_} ${pluralise('Contribution', comment_count)}`}
          </Text>
        </BrowserLink>
        {/* <Icon
            name="md-more"
            style={excerptStyles.control}
            size={25}
            color="#777"
          /> */}
      </View>
    ]
  }

  renderComments() {
    const { discussion } = this.props
    const { comments } = discussion

    if (!comments.edges.length) return null

    return (
      <FlatList
        className="s__dark__bg"
        style={{
          paddingBottom: 15
        }}
        data={comments.edges}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        keyExtractor={item => item.node.id}
        renderItem={({ item }) => <CommentListItem strip comment={item.node} />}
      />
    )
  }

  render() {
    const { discussion } = this.props
    const { name, parsed_excerpt } = discussion
    return (
      <Col span={24}>
        <div className="postitem s__main__bg bd elevated s__content__main">
          <View style={[excerptStyles.container, { marginBottom: 20 }]}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                {this.renderMeta()}
                <BrowserLink
                  style={{ marginTop: 10 }}
                  href={storyLink(discussion)}
                >
                  <Text style={excerptStyles.title}>{name}</Text>
                  <div
                    style={{ marginTop: 10 }}
                    dangerouslySetInnerHTML={{ __html: parsed_excerpt }}
                  />
                </BrowserLink>
              </View>
              <BrowserLink href={storyLink(discussion)}>
                {this.renderFeaturePhoto()}
              </BrowserLink>
            </View>
            {discussion.has_poll && <PollView discussion={discussion} />}
            {this.renderControls()}
          </View>
          {this.renderComments()}
        </div>
      </Col>
    )
  }
}

export default createFragmentContainer(withViewer(PostListItem), {
  discussion: graphql`
    fragment PostListItem_discussion on Discussion {
      id
      _id
      name
      reads
      public_url
      parsed_excerpt(size: 30)
      word_count
      comment_count
      permalink
      comments(last: 3) @connection(key: "PostListItem_comments", filters: []) {
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          node {
            id
            excerpt
            ...CommentListItem_comment
          }
        }
      }
      created_at
      user {
        id
        _id
        name
        username
        profile_picture
        profile_picture_name
      }
      group {
        id
        _id
        name
        permalink
      }
      feature_photo {
        id
        _id
        height
        width
        name
      }
      has_poll
      ...DiscussionLike_discussion
      ...Poll_discussion
    }
  `
})
