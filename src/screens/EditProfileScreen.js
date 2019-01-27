import React from 'react'
import { View } from 'react-native'
import EditUser from 'renderers/EditUser'
import getNavigation from 'helpers/getNavigation'
import { AppBar } from 'components/AppBar'
import { withNavigation } from 'react-navigation'

export default function EditProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <EditUser {...getNavigation(navigation)} />
    </View>
  )
}

EditProfileScreen = withNavigation(EditProfileScreen)
