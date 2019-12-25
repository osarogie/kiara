import React from 'react'
import {
  Text,
  StyleSheet,
  View,
  Image,
  // ViewPropTypes,
  TouchableOpacity,
  Dimensions
} from 'react-native'
import styles from '../styles'
import { commitMutation, createFragmentContainer, graphql } from 'react-relay'
import { imageUrl } from '../utils'
import { BrowserLink } from 'components/BrowserLink'

const vertical_width = Dimensions.get('window').width - 34

class GroupListItem extends React.Component {
  renderFeaturePhoto() {
    const {
      group: { headerImage },
      vertical
    } = this.props
    // const { headerImage } = this.props.group
    const width = vertical ? vertical_width : this.props.f_width || 200
    const height = this.props.f_height || 100
    const f_width = Math.min(1000, vertical ? 1000 : width)
    const f_height = Math.min(1000, height)

    if (headerImage) {
      return (
        <Image
          source={{
            uri: imageUrl(headerImage.name, `${f_width}x${f_height}`)
          }}
          style={{
            flex: 1,
            // borderRadius: 5,
            height,
            width
          }}
        />
      )
    }
    return null
  }

  render() {
    const { group, f_width, f_height, vertical } = this.props
    const width = vertical ? 'auto' : f_width || 200
    const height = f_height || 100

    return (
      <BrowserLink
        style={{
          marginTop: 17,
          marginLeft: 8,
          marginRight: 8,
          overflow: 'hidden',
          borderRadius: 10
        }}
        href={group.publicUrl}
      >
        <View
          style={{
            flex: 1,
            width,
            height,
            elevation: 2,
            backgroundColor: '#05f'
          }}
        >
          <View
            style={[
              styles.featurePhotoWarp,
              {
                height,
                width,
                flex: 1,
                backgroundColor: '#05f',
                position: 'absolute',
                top: 0,
                left: 0,
                marginTop: 0,
                marginBottom: 0
              }
            ]}
          >
            {this.renderFeaturePhoto()}
          </View>
          <View
            style={{
              backgroundColor: '#0005',
              height,
              width,
              // borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text
              numberOfLines={2}
              style={{
                width,
                marginLeft: 10,
                marginRight: 10,
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 18
              }}
            >
              {group.name}
            </Text>
          </View>
          {/* <Text
            numberOfLines={2}
            style={{
              width,
              marginBottom: 20,
              marginLeft: 17,
              marginTop: 10,
              color: '#000',
              fontSize: 14
            }}
          >
            {group.body}
          </Text> */}
        </View>
      </BrowserLink>
    )
  }
}

GroupListItem.defaultProps = {}

GroupListItem.propTypes = {
  // ...ViewPropTypes
}

export default createFragmentContainer(GroupListItem, {
  group: graphql`
    fragment GroupListItem_group on Group {
      id
      _id
      name
      permalink
      publicUrl
      # body
      headerImage {
        name
      }
    }
  `
})
