import React from 'react'
import {
  Text,
  View,
  Image,
  // ViewPropTypes,
  Dimensions,
  TouchableOpacity,
  PixelRatio
} from 'react-native'
import styles from 'styles'
import excerptStyles from 'styles/excerptStyles'
import { createFragmentContainer, graphql } from 'react-relay'
import Separator from 'components/Separator'
import { getTimeAgo, imageUrl } from 'utils'
import Avatar from 'components/Avatar'
import { withNavigation } from 'react-navigation'
import { navHelper } from 'helpers/getNavigation'
import { BrowserLink } from 'components/BrowserLink'
import { userLink } from 'helpers/links'

class CommentListItem extends React.PureComponent {
  clickableProps = {
    underlayColor: 'whitesmoke'
  }

  cultureNameProps = {
    style: { color: '#05f' }
  }

  featurePhotoStyles = {
    ...excerptStyles.featurePhoto,
    backgroundColor: '#eee',
    marginTop: 10
  }

  renderFeaturePhoto() {
    const image = this.props.comment.feature_photo

    if (image) {
      if (this.props.feature_photo) {
        const { height, width } = this.props.feature_photo
      } else {
        var { width } = Dimensions.get('window')
        var height = width / 3
        width -= 34
      }
      const f_width = PixelRatio.getPixelSizeForLayoutSize(width)
      const f_height = PixelRatio.getPixelSizeForLayoutSize(height)

      const uri = imageUrl(image.name, `${f_width}x${f_height}`)

      return (
        <View style={[{ height, width }, this.featurePhotoStyles]}>
          <Image source={{ uri }} style={{ borderRadius: 5, height, width }} />
        </View>
      )
    } else {
      return null
    }
  }

  renderProfilePicture() {
    const { comment, openProfile } = this.props
    const size = PixelRatio.getPixelSizeForLayoutSize(40)

    const uri = imageUrl(comment.user.profile_picture_name, `${size}x${size}`)

    return (
      <TouchableOpacity
        {...this.clickableProps}
        onPress={_ => openProfile(comment.user)}
      >
        <View
          style={[excerptStyles.profilePicture, { backgroundColor: '#eee' }]}
        >
          <Image source={{ uri }} style={excerptStyles.profilePicture} />
        </View>
      </TouchableOpacity>
    )
  }

  renderMeta() {
    const { comment, openProfile } = this.props

    return (
      <Text className="s__content__main80 f11">
        <BrowserLink className="s__content__main" href={userLink(comment.user)}>
          {comment.user.name}
        </BrowserLink>
        <Text style={styles.row}>
          <Text> - {getTimeAgo(comment.created_at)}</Text>
        </Text>
      </Text>
    )
  }

  renderNormal() {
    const { comment } = this.props
    // console.log(this.props);
    // console.log(comment.created_at)
    return (
      <View
        className="s__main__bg bd comment-list-item"
        style={{
          marginTop: 20,
          marginHorizontal: 'auto',
          maxWidth: 500,
          borderRadius: 8,
          paddingHorizontal: 10
        }}
      >
        <View style={excerptStyles.container}>
          <View style={{ flexDirection: 'row' }}>
            <Avatar
              size={30}
              rounded
              source={comment.user}
              title={comment.user.name}
              activeOpacity={0.7}
            />
            <View style={{ marginLeft: 15, flex: 1 }}>
              {this.renderMeta()}
              <Text style={{ marginTop: 10 }}>{comment.body}</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }

  renderStrip() {
    const { comment, openProfile } = this.props
    // console.log(this.props);
    // console.log(comment.created_at)
    return (
      <View
        style={{
          // backgroundColor: '#f2f2f200',
          // borderRadius: 0
          // borderTop: '1px solid #efefef'
          paddingHorizontal: 15
        }}
        className="bdt"
      >
        <View style={{ marginVertical: 10 }}>
          <View style={{ flexDirection: 'row' }}>
            <Avatar
              size={30}
              rounded
              source={comment.user}
              title={comment.user.name}
              activeOpacity={0.7}
            />
            <View style={{ marginLeft: 10, flex: 1 }}>
              {/* <View
                {...this.clickableProps}
                onPress={_ => openProfile(comment.user)}
              >
                <Text style={[styles.fill, { color: '#000' }]}>
                  {comment.user.name}
                </Text>
              </View> */}
              {/* <Markdown styles={excerptStyles.body}> */}
              <Text style={{ fontSize: 12 }} numberOfLines={2}>
                <BrowserLink href={userLink(comment.user)}>
                  <Text style={{ fontWeight: 'bold' }}>
                    {comment.user.name}{' '}
                  </Text>
                </BrowserLink>
                {comment.excerpt}
                {/* {comment.word_count > 30 ? '***...(Read More)***' : ''} */}
              </Text>
              <View style={styles.row}>
                <span style={{ fontSize: 11 }}>
                  {getTimeAgo(comment.created_at)}
                </span>
              </View>
              {/* </Markdown> */}
            </View>
          </View>
        </View>
      </View>
    )
  }

  render() {
    return this.props.strip ? this.renderStrip() : this.renderNormal()
  }
}

CommentListItem = withNavigation(CommentListItem)
CommentListItem.defaultProps = {}

CommentListItem.propTypes = {
  // ...ViewPropTypes
}
export default createFragmentContainer(
  CommentListItem,
  graphql`
    fragment CommentListItem_comment on Comment {
      id
      _id
      body
      created_at
      discussion_id
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
        profile_picture_name
      }
    }
  `
)
