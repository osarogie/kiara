import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { Share, Button } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import { BLACK } from 'ui'

const { string } = PropTypes

/**
 * The ShareButton is a virtual component that wraps a button with a share icon.
 * It puts the sharing logic in one place. It's used in the navigation bar in the toolkit,
 * but it can be reused anywhere.
 *
 * It should have the style of its underlying button. That's why it's not connected to style
 * or animation.
 */
export default class ShareButton extends Component {
  static propTypes = {
    // Animation name for share icon
    animationName: string,
    // Message to share
    message: string,
    // Title
    title: string,
    // Url to share
    url: string
  }

  constructor(props) {
    super(props)

    this.onShare = this.onShare.bind(this)
  }

  onShare() {
    const { title, message, url } = this.props

    Share.share({
      title,
      // URL property isn't supported on Android, so we are
      // including it as the message for now
      message,
      url
    })
  }

  render() {
    const { style } = this.props

    return (
      <Button styleName="clear tight" onPress={this.onShare} style={style}>
        <Icon size={20} name="md-share-alt" color={`${BLACK}`} />
      </Button>
    )
  }
}
