import { PostCommentsLink } from './../links/PostCommentsLink'
import { EditPostLink } from './../links/EditPostLink'
import { UserLink } from './../links/UserLink'
import { pluralise } from '../helpers/pluralize'
import React from 'react'
import { Text, View, Image, FlatList } from 'react-native'
import styles from 'styles'
import excerptStyles from 'styles/excerptStyles'
import { createFragmentContainer, graphql } from 'react-relay'
import Avatar from 'components/Avatar'
import DiscussionLike from 'fragments/DiscussionLike'
import { imageUrl, getCommentCount } from 'utils'
import CommentListItem from 'fragments/CommentListItem'
import Col from 'antd/lib/col'
import { PollView } from 'views/post/PollView'
import { withViewer } from 'lib/withViewer'
import { PostLink } from '../links/PostLink'
import { useTimeAgo } from '../utils'
import { useViewer } from '../lib/withViewer'
import { GroupLink } from '../links/GroupLink'

function PostListItem({ discussion, showGroupInfo }) {
  const {
    user,
    comments,
    name,
    parsedExcerpt,
    reads,
    commentCount
  } = discussion
  const timeAgo = useTimeAgo(discussion.createdAt)
  const { viewer, hasViewer } = useViewer()

  function renderFeaturePhoto() {
    const image = discussion.featurePhoto

    if (image) {
      const height = 100
      const width = 100

      const uri = imageUrl(image.name, '100x100')

      return (
        <div className="s__image feature-photo">
          <Image source={{ uri }} style={{ borderRadius: 5, height, width }} />
        </div>
      )
    }

    return null
  }

  function renderCultureName() {
    if (discussion.group && showGroupInfo !== false) {
      return (
        <GroupLink for={discussion.group}>
          <Text
            style={[excerptStyles.groupInfo, excerptStyles.meta]}
            numberOfLines={1}
          >
            <Text> in </Text>
            <Text className="s__content__main">{discussion.group.name}</Text>
          </Text>
        </GroupLink>
      )
    }

    return null
  }

  function renderMeta() {
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
            <Text style={excerptStyles.meta}>{timeAgo}</Text>
            {renderCultureName()}
          </Text>
        </View>
      </View>
    )
  }

  function renderEdit() {
    if (hasViewer && viewer._id == discussion.user._id) {
      return (
        <EditPostLink for={discussion}>
          <Text style={{ marginLeft: 20 }}>Edit</Text>
        </EditPostLink>
      )
    }

    return null
  }

  function renderControls() {
    const commentCount_ = getCommentCount(commentCount)
    const viewerOwns = hasViewer && viewer._id == discussion.user._id

    return (
      <View
        style={[styles.row, { alignItems: 'center' }]}
        key={`post.c.viewholder.${discussion.id}`}
      >
        <DiscussionLike hideCount discussion={discussion} size={20} />
        <View style={{ flex: 1 }} />
        {renderEdit()}
        {viewerOwns && (
          <Text style={{ marginLeft: 20 }}>
            {`${reads} ${pluralise('View', reads)}`}
          </Text>
        )}
        <PostCommentsLink for={discussion}>
          <Text style={{ marginLeft: 20 }}>
            {`${commentCount_} ${pluralise('Contribution', commentCount)}`}
          </Text>
        </PostCommentsLink>
        {/* <Icon
            name="md-more"
            style={excerptStyles.control}
            size={25}
            color="#777"
          /> */}
      </View>
    )
  }

  function renderComments() {
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

  return (
    <Col span={24}>
      <div className="postitem s__main__bg bd elevated s__content__main">
        <View style={[excerptStyles.container, { marginBottom: 20 }]}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              {renderMeta()}
              <PostLink style={{ marginTop: 10 }} for={discussion}>
                <Text style={excerptStyles.title}>{name}</Text>
                <div
                  style={{ marginTop: 10 }}
                  dangerouslySetInnerHTML={{ __html: parsedExcerpt }}
                />
              </PostLink>
            </View>
            <PostLink for={discussion}>{renderFeaturePhoto()}</PostLink>
          </View>
          {discussion.hasPoll && <PollView discussion={discussion} />}
          {renderControls()}
        </View>
        {renderComments()}
      </div>
    </Col>
  )
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
