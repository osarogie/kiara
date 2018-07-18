import React from 'react'
import { Platform } from 'react-native'

import { Screen } from '@shoutem/ui/components/Screen'
import { ImageBackground } from '@shoutem/ui/components/ImageBackground'
import { View } from '@shoutem/ui/components/View'

import { YELLOW } from 'ui'
import Authenticator from 'components/Authenticator'

export default class LoginScreen extends React.PureComponent {
  render() {
    return (
      <Screen style={{ backgroundColor: YELLOW }}>
        {/* <AppBar
          showNavIcon
          light
          leftComponent={null}
          rightComponent={
            <View
              styleName="horizontal"
              style={{ justifyContent: 'flex-end', alignItems: 'center' }}
            >
              <BrowserLink style={{ color: '#fff' }} to="/signup">
                Sign Up
              </BrowserLink>
            </View>
          }
        /> */}

        <ImageBackground
          className="home"
          styleName="flexible"
          source={{
            uri:
              'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a53f6ccb2fccd80ae7f6c6af8f289319&auto=format&fit=crop&w=1050&q=80'
          }}
          style={{
            position: 'relative',
            // justifyContent: 'flex-start',
            alignItems: 'flex-start',
            // backgroundColor: YELLOW,
            width: '100%',
            padding: 20,
            borderBottomWidth: 3,
            borderBottomColor: '#000',
            ...Platform.select({ web: { borderBottomStyle: 'solid' } })
          }}
        >
          <View
            style={{
              backgroundColor: '#0008',
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0
            }}
          />
          <Authenticator
          // navigation={this.props.navigation}
          // goBack={this.props.navigation.goBack}
          />
        </ImageBackground>
      </Screen>
    )
  }
}
