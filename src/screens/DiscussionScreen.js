// @flow

import React from 'react'
import { View } from 'react-native'
import Post from 'renderers/Post'
// import { withNavigation } from 'react-navigation'
import styles from 'styles'
import getNavigation from 'helpers/getNavigation'
import { withNavigation } from 'react-navigation'

export default class DiscussionScreen extends React.Component {
  render() {
    const { id, navigation } = this.props

    return (
      <View style={styles.container}>
        <Post id={id} {...getNavigation(navigation)} />
      </View>
    )
  }
}

DiscussionScreen = withNavigation(DiscussionScreen)
