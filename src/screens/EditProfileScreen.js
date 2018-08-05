// @flow

import React from 'react'
import { View } from 'react-native'
import EditUser from 'renderers/EditUser'
import getNavigation from 'helpers/getNavigation'
import { AppBar } from 'components/AppBar'

export default class EditProfileScreen extends React.Component {
  render() {
    const { navigation } = this.props

    return (
      <View style={{ flex: 1 }}>
        <AppBar />
        <EditUser {...getNavigation(navigation)} />
      </View>
    )
  }
}
