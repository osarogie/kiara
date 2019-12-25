import { UserLink } from './../links/UserLink'
import { BrowserLink } from '../components/BrowserLink'
import { pluralise } from '../helpers/pluralize'
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
import { commentsLink, editStoryLink } from 'helpers/links'
import { PollView } from 'views/post/PollView'
import { withViewer } from 'lib/withViewer'
import { PostLink } from '../links/PostLink'

class PostListItem extends React.PureComponent {
  clickableProps = {
    underlayColor: 'whitesmoke'
  }

  featurePhotoStyles = {
    ...excerptStyles.featurePhoto,
    backgroundColor: '#eee',
    marginTop: 50
  }

  renderFeaturePhoto() {
    const image = this.props.discussion.featurePhoto

    if (image) {
      const height = 100
      const width = 100

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
        <BrowserLink href={discussion.group.publicUrl}>
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
          <UserLink for={user} key={`post.m.t.${discussion.id}`}>
            <Text style={styles.fill} numberOfLines={1}>
              {discussion.user.name}
            </Text>
          </UserLink>
          <Text
            className="s__content__main80"
            style={{ flexDirection: 'row', alignItems: 'center' }}
            key={`post.m.v.${discussion.id}`}
          >
            <Text style={excerptStyles.meta}>
              {getTimeAgo(discussion.createdAt)}
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
    const { commentCount, reads } = discussion
    const commentCount_ = getCommentCount(commentCount)
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
        <DiscussionLike hideCount discussion={discussion} size={20} />
        <View style={{ flex: 1 }} />
        {this.renderEdit()}
        {viewerOwns && (
          <Text style={{ marginLeft: 20 }}>
            {`${reads} ${pluralise('View', reads)}`}
          </Text>
        )}
        <BrowserLink href={commentsLink(discussion)}>
          <Text style={{ marginLeft: 20 }}>
            {`${commentCount_} ${pluralise('Contribution', commentCount)}`}
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
    const { name, parsedExcerpt } = discussion
    return (
      <Col span={24}>
        <div className="postitem s__main__bg bd elevated s__content__main">
          <View style={[excerptStyles.container, { marginBottom: 20 }]}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                {this.renderMeta()}
                <PostLink style={{ marginTop: 10 }} for={discussion}>
                  <Text style={excerptStyles.title}>{name}</Text>
                  <div
                    style={{ marginTop: 10 }}
                    dangerouslySetInnerHTML={{ __html: parsedExcerpt }}
                  />
                </PostLink>
              </View>
              <PostLink for={discussion}>{this.renderFeaturePhoto()}</PostLink>
            </View>
            {discussion.hasPoll && <PollView discussion={discussion} />}
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
      publicUrl
      parsedExcerpt(size: 30)
      wordCount
      commentCount
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
      createdAt
      user {
        id
        _id
        name
        username
        profilePicture
        profilePictureName
      }
      group {
        id
        _id
        name
        permalink
        publicUrl
      }
      featurePhoto {
        id
        _id
        height
        width
        name
      }
      hasPoll
      ...DiscussionLike_discussion
      ...Poll_discussion
    }
  `
})
