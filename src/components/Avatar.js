import PropTypes from 'prop-types'
import React from 'react'
import {
  View,
  Text as NativeText,
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  PixelRatio
} from 'react-native'
// import ViewPropTypes from "../config/ViewPropTypes"

import Icon from './Icon'
import Text from './Text'

import { imageUrl } from '../utils'
import { BrowserLink } from 'components/BrowserLink'
import { UserLink } from '../links/UserLink'

const DEFAULT_COLORS = ['#000', '#333', '#555', '#888', '#05f', '#ddd']

export const Avatar = props => {
  const {
    component,
    onPress,
    onLongPress,
    containerStyle,
    icon,
    iconStyle,
    source,
    small,
    medium,
    large,
    radius,
    xlarge,
    avatarStyle,
    rounded,
    title,
    titleStyle,
    overlayContainerStyle,
    activeOpacity,
    showEditButton,
    disableLink,
    editButton,
    onEditPress,
    ...attributes
  } = props

  let { width, height } = props

  if (small) {
    width = 34
    height = 34
  } else if (medium) {
    width = 50
    height = 50
  } else if (large) {
    width = 75
    height = 75
  } else if (xlarge) {
    width = 150
    height = 150
  } else if (!width && !height) {
    width = 34
    height = 34
  } else if (!width) {
    width = height
  } else if (!height) {
    height = width
  }

  let titleSize = width / 5
  let iconSize = width / 2

  let Component = onPress || onLongPress ? TouchableOpacity : View
  if (component) {
    Component = component
  }

  const renderUtils = () => {
    if (showEditButton) {
      const editButtonProps = { ...editButton }

      const defaultEditButtonSize = (width + height) / 2 / 3
      const editButtonSize = editButton.size || defaultEditButtonSize
      const editButtonSizeStyle = {
        width: editButtonSize,
        height: editButtonSize,
        borderRadius: editButtonSize / 2
      }
      const editButtonIconSize = editButtonSize * 0.6

      return (
        <TouchableHighlight
          style={[
            styles.editButton,
            editButtonSizeStyle,
            editButtonProps.style
          ]}
          underlayColor={editButtonProps.underlayColor}
          onPress={onEditPress}
        >
          <View>
            <Icon
              size={editButtonIconSize}
              name={editButtonProps.iconName}
              type={editButtonProps.iconType}
              color={editButtonProps.iconColor}
            />
          </View>
        </TouchableHighlight>
      )
    }
  }

  const getPicture = () => {
    if (
      source.profilePictureName &&
      typeof source.profilePictureName === 'string'
    ) {
      return source.profilePictureName
    }
    if (source.profilePicture && typeof source.profilePicture === 'string') {
      return source.profilePicture.split('/').pop()
    }
    return null
  }

  const renderContent = () => {
    if (source && (source.profilePictureName || source.profilePicture)) {
      const size = PixelRatio.getPixelSizeForLayoutSize(width)

      let uri

      if (
        source.profilePicture &&
        !source.profilePicture.includes('thecommunity')
      ) {
        uri = source.profilePicture.replace('http://', '//')
        if (uri.includes('facebook')) uri = `${uri}?type=large`
      } else uri = imageUrl(getPicture(), `${size}x${size}`)

      return (
        <Image
          style={[
            { width: width, height: height },
            rounded && { borderRadius: width / 2 },
            radius && { borderRadius: radius },
            avatarStyle && avatarStyle
          ]}
          accessibilityLabel={source?.name}
          source={{ uri }}
        />
      )
    } else if (title) {
      return (
        // <Text
        //   style={[
        //     styles.title,
        //     { fontSize: titleSize },
        //     titleStyle && titleStyle
        //   ]}
        // >
        //   <div className="avatar__title">{title}</div>
        // </Text>
        null
      )
    } else if (icon) {
      return (
        <Icon
          style={iconStyle && iconStyle}
          color={icon.color || 'white'}
          name={icon.name || 'user'}
          size={icon.size || iconSize}
          type={icon.type && icon.type}
        />
      )
    }
  }

  const LinkComponent = disableLink ? View : BrowserLink

  function renderAvatar() {
    return (
      <div className="avatar">
        <Component
          onPress={onPress}
          onLongPress={onLongPress}
          activeOpacity={activeOpacity}
          style={[
            styles.container,
            { width, height },
            rounded && { borderRadius: width / 2 },
            // !disableLink && { cursor: 'pointer' },
            containerStyle && containerStyle
          ]}
          {...attributes}
        >
          <View
            style={[
              styles.overlayContainer,
              rounded && { borderRadius: width / 2 },
              radius && { borderRadius: radius },
              overlayContainerStyle && overlayContainerStyle
            ]}
          >
            <div className="tc-gr" style={{ height, width }}>
              {renderContent()}
            </div>
          </View>
          {renderUtils()}
        </Component>
      </div>
    )
  }

  if (disableLink || !source?.username) return renderAvatar()

  return <UserLink for={source}>{renderAvatar()}</UserLink>
}

const defaultProps = {
  showEditButton: false,
  onEditPress: null,
  editButton: {
    size: null,
    iconName: 'md-camera',
    iconType: 'ionicon',
    iconColor: '#fff',
    underlayColor: DEFAULT_COLORS[0],
    style: null
  }
}

Avatar.propTypes = {
  component: PropTypes.oneOf([
    View,
    TouchableOpacity,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableWithoutFeedback
  ]),
  width: PropTypes.number,
  height: PropTypes.number,
  radius: PropTypes.number,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  containerStyle: PropTypes.any,
  source: PropTypes.any,
  avatarStyle: PropTypes.any,
  rounded: PropTypes.bool,
  title: PropTypes.string,
  // titleStyle: NativeText.propTypes.style,
  overlayContainerStyle: PropTypes.any,
  activeOpacity: PropTypes.number,
  icon: PropTypes.object,
  // iconStyle: NativeText.propTypes.style,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  xlarge: PropTypes.bool,
  showEditButton: PropTypes.bool,
  onEditPress: PropTypes.func,
  editButton: PropTypes.shape({
    size: PropTypes.number,
    iconName: PropTypes.string,
    iconType: PropTypes.string,
    iconColor: PropTypes.string,
    underlayColor: PropTypes.string
    // style: ViewPropTypes.style
  })
}

Avatar.defaultProps = defaultProps

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingRight: 10,
    cursor: 'pointer',
    paddingBottom: 10,
    backgroundColor: 'transparent',
    overflow: 'hidden'
  },
  overlayContainer: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  title: {
    backgroundColor: 'rgba(0,0,0,0)',
    textAlign: 'center'
  },
  editButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: DEFAULT_COLORS[4],
    ...Platform.select({
      ios: {
        shadowColor: DEFAULT_COLORS[0],
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 2,
        shadowOpacity: 0.5
      },
      android: {
        elevation: 1
      }
    })
  }
})

export default Avatar
