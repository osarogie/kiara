import React from 'react'
import { Platform, TouchableHighlight } from 'react-native'
// import styles from '../styles'
import Feed from 'renderers/Feed'
import Avatar from 'components/Avatar'
import Entypo from 'components/vector-icons/Entypo'
import MaterialIcons from 'components/vector-icons/MaterialIcons'

import { Text, Heading } from '@shoutem/ui/components/Text'
import { Button } from '@shoutem/ui/components/Button'
// import { connectDecorator } from '../lib'
import getNavigation from 'helpers/getNavigation'
import { View } from '@shoutem/ui/components/View'
import { Screen } from '@shoutem/ui/components/Screen'
import { connect } from 'react-redux'
import { AlternateMenu } from 'components/AlternateMenu'
import { withNavigation } from 'react-navigation'
import fetch from 'isomorphic-unfetch'

import Col from 'antd/lib/col'
import Row from 'antd/lib/row'
import { DATA_URL } from 'constants'

const mapStateToProps = state => ({
  user: state.user.user,
  loggedIn: state.user.loggedIn
})
// const { width } = Dimensions.get('window')

// @withNavigation
// @connect(mapStateToProps)
class TopBar extends React.Component {
  openWrite = _ => this._onActionSelected(0)
  openProfile = _ => this._onActionSelected(1)

  render = _ => (
    <View
      style={{
        flexDirection: 'row',
        flex: 1,
        height: 53,
        backgroundColor: '#fff8',
        position: 'absolute',
        alignItems: 'center',
        width: '100%',
        top: 0,
        left: 0
      }}
    >
      {/* <Appbar
        // leftElement={this.renderAvatar()}
        // onLeftElementPress={this.props.navigation.goBack}
        centerElement="TheCommunity"
        rightElement={
          <View styleName="horizontal" style={{ alignItems: 'center' }}>
            <Button styleName="" onPress={this.openWrite}>
              <Text style={{ marginRight: 10, fontSize: 15 }}>Write</Text>
            </Button>
            {this.renderAvatar()}
          </View>
        }
        style={{ container: { width } }}
        // onRightElementPress={() =>
        //   this.props.navigation.navigate('DrawerToggle')
        // }
      /> */}
      <View style={{ width: 80 }}>{this.renderAvatar()}</View>
      <Heading
        style={{
          textAlign: 'center',
          flex: 1,
          fontFamily: 'BlackHanSans-Regular'
        }}
      >
        TheCommunity
      </Heading>
      <View style={{ width: 80 }}>
        <TouchableHighlight
          style={{ alignSelf: 'flex-end', marginRight: 10 }}
          onPress={this.openWrite}
        >
          <Text style={{ marginRight: 10, fontSize: 15 }}>Write</Text>
        </TouchableHighlight>
      </View>
    </View>
  )

  getPicture() {
    const { user } = this.props

    if (
      user.profile_picture_name &&
      typeof user.profile_picture_name === 'string'
    ) {
      return user.profile_picture_name
    }
    if (user.profile_pic && typeof user.profile_pic === 'string') {
      return user.profile_pic.split('/').pop()
    }
    return null
  }

  renderAvatar() {
    const { user, loggedIn } = this.props

    if (loggedIn) {
      return (
        <Avatar
          width={36}
          radius={15}
          source={{ profile_picture_name: this.getPicture() }}
          title={user.name}
          containerStyle={{ marginHorizontal: 17 }}
          onPress={this.openProfile}
          activeOpacity={0.7}
        />
      )
    }

    return (
      <TouchableHighlight
        onPress={this.openProfile}
        underlayColor="#ddd"
        style={{
          height: 56,
          width: 56,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <MaterialIcons name="face" size={35} color="#000" />
      </TouchableHighlight>
    )
  }

  toolbarActions() {
    return [
      {
        title: 'Write',
        show: 'always',
        iconName: 'ios-add-circle'
      },
      // { title: 'Notifications', show: 'always', iconName: 'ios-notifications' },
      { title: 'View Profile', show: 'always', iconName: 'ios-person' }
    ]
  }

  _onActionSelected(position) {
    const {
      user,
      navigation: { navigate },
      loggedIn
    } = this.props
    if (loggedIn) {
      switch (position) {
        case 0:
          if (Platform.OS === 'web') {
            window.location.href = '//thecommunity.ng/new-discussion'
          } else navigate('Write')
          break
        // case 1:
        //   navigate('Notifications')
        //   break
        case 1:
          navigate('Profile', { id: user.id, user })
          break
        default:
          return
      }
    } else navigate('Login')
  }
}

TopBar = connect(mapStateToProps)(TopBar)
export default class FeedScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Reading List',
    tabBarIcon: ({ tintColor, focused }) => (
      <Entypo
        // name={Platform.select({ ios: "ios-home", android: "md-home" })}
        name="home"
        // style={styles.tabIcon}
        size={focused ? 25 : 23}
        color={tintColor}
      />
    )
  }

  render() {
    const { navigation } = this.props
    return (
      <Screen styleName="paper" style={{ flex: 1, backgroundColor: '#f9f9f9' }}>
        <AlternateMenu list={this.props.list} />
        <div className="row">
          <Row>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 16 }}
              lg={{ span: 16 }}
            >
              <Feed {...getNavigation(navigation)} />
            </Col>
            <Col
              xs={{ span: 0 }}
              sm={{ span: 0 }}
              md={{ span: 8 }}
              lg={{ span: 8 }}
            >
              <div className="side">Hi</div>
            </Col>
          </Row>
        </div>
        <style jsx>
          {`
            .row {
              width: 100%;
              max-width: 1100px;
              margin-left: auto;
              margin-right: auto;
              margin-top: 50px;
            }
            .side {
              backround-color: #fff;
            }
          `}
        </style>
        {/* <TopBar navigation={this.props.navigation} /> */}
      </Screen>
    )
  }
}

FeedScreen = withNavigation(FeedScreen)

FeedScreen.getInitialProps = async function() {
  return fetch(`${DATA_URL}v1/groups`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' }
  }).then(r => r.json())
}
