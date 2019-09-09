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
    const image = this.props.comment.featurePhoto

    if (image) {
      if (this.props.featurePhoto) {
        const { height, width } = this.props.featurePhoto
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

  renderMeta() {
    const { comment } = this.props

    return (
      <Text className="s__content__main80 f11">
        <BrowserLink className="s__content__main" href={userLink(comment.user)}>
          {comment.user.name}
        </BrowserLink>
        <Text style={styles.row}>
          <Text> - {getTimeAgo(comment.createdAt)}</Text>
        </Text>
      </Text>
    )
  }

  renderNormal() {
    const { comment } = this.props
    // console.log(this.props);
    // console.log(comment.createdAt)
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
    const { comment } = this.props

    return (
      <div
        style={{
          paddingLeft: 15,
          paddingRight: 15
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
              {/* <Markdown styles={excerptStyles.body}> */}
              <Text style={{ fontSize: 12 }} numberOfLines={2}>
                <BrowserLink href={userLink(comment.user)}>
                  <Text style={{ fontWeight: 'bold' }}>
                    {comment.user.name}{' '}
                  </Text>
                </BrowserLink>
                {comment.excerpt}
                {/* {comment.wordCount > 30 ? '***...(Read More)***' : ''} */}
              </Text>
              <View style={styles.row}>
                <span style={{ fontSize: 11 }}>
                  {getTimeAgo(comment.createdAt)}
                </span>
              </View>
              {/* </Markdown> */}
            </View>
          </View>
        </View>
      </div>
    )
  }

  render() {
    return this.props.strip ? this.renderStrip() : this.renderNormal()
  }
}

CommentListItem.defaultProps = {}

CommentListItem.propTypes = {
  // ...ViewPropTypes
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
