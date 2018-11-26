import React from 'react'
import { Platform, TouchableHighlight } from 'react-native'
// import styles from '../styles'
import Feed from 'renderers/Feed'
import Avatar from 'components/Avatar'
import Entypo from 'components/vector-icons/Entypo'
import MaterialIcons from 'components/vector-icons/MaterialIcons'

import { Text, Heading } from '@shoutem/ui/components/Text'
// import { connectDecorator } from '../lib'
import getNavigation from 'helpers/getNavigation'
import { View } from '@shoutem/ui/components/View'
import { connect } from 'react-redux'
import { AlternateMenu } from 'components/AlternateMenu'
import { withNavigation } from 'react-navigation'

import Col from 'antd/lib/col'
import Row from 'antd/lib/row'
import Anchor from 'antd/lib/anchor'
import { AppBar } from 'components/AppBar'
import { groups } from 'data/groups'
// import { FeaturedPost } from 'components/FeaturedPost'
import { NUBLUE } from 'ui'

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
      <div>
        <AppBar />

        <AlternateMenu list={groups.data.feed.groups.edges} />
        <div className="row">
          <Row>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 16 }}
              lg={{ span: 16 }}
            >
              {/* <FeaturedPost item={featured.data.discussion} /> */}
              <Row>
                <Col
                  xs={{ span: 24 }}
                  sm={{ span: 24 }}
                  md={{ span: 24 }}
                  lg={{ span: 18 }}
                >
                  <Feed {...getNavigation(navigation)} />
                </Col>
                <Col
                  xs={{ span: 0 }}
                  sm={{ span: 0 }}
                  md={{ span: 0 }}
                  lg={{ span: 6 }}
                />
              </Row>
            </Col>
            <Col
              xs={{ span: 0 }}
              sm={{ span: 0 }}
              md={{ span: 8 }}
              lg={{ span: 8 }}
            >
              <Anchor style={{ backgroundColor: 'transparent', marginTop: 50 }}>
                <div className="side">
                  <div className="flex">
                    <div
                      className="sidebar r-side extra-padding"
                      style={{ margin: '0 0 15px 15px' }}
                    >
                      <div className="s-top">
                        <div>
                          <a href="/new-story" className="s-button full">
                            Share Your Story
                          </a>
                        </div>
                        <div>
                          <a href="/new-poll" className="s-button full">
                            New voting poll
                          </a>
                        </div>
                        <div>
                          <a href="/new-group" className="s-button full">
                            Start your own culture
                          </a>
                        </div>
                      </div>

                      {/* <div className="d-embed">
                      <div className="inner">
                        <div className="table">Confirm your email address</div>
                        <br />
                        <a href="/a/confirmation" className="button table">
                          Click to confirm
                        </a>
                      </div>
                    </div> */}

                      <br />
                      <br />
                      <div style={{ color: '#8c8c8c' }}>
                        <a
                          style={{
                            fontSize: 20,

                            fontFamily: 'Kaushan Script'
                          }}
                          href="/"
                        >
                          <span style={{ color: '#505050' }}>The</span>
                          <span style={{ color: '#262627' }}>Community</span>
                        </a>
                        <div>
                          A{' '}
                          <a href="//nosakhare.us" style={{ color: '#000' }}>
                            Nosakhare
                          </a>{' '}
                          Company.
                        </div>
                        <br />
                        <small>Made with &hearts; in Lagos</small>
                        <br />
                        <small>
                          &copy; 2018 TheCommuntiy. All rights reserved.
                        </small>
                        <a
                          className="block"
                          href="https://play.google.com/store/apps/details?id=ng.thecommunity.kovu&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
                          target="blank"
                        >
                          <img
                            alt="Get it on Google Play"
                            className="playstore_badge"
                            src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Anchor>
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
            }
            .side {
              margin-top: 20px;
            }
            .sidebar {
              margin-top: 50px;
            }
            .playstore_badge {
              height: 60px;
            }
            .block {
              display: block;
              margin-left: -6px;
              margin-top: 10px;
            }
            .s-button {
              display: block;
              max-width: 250px;
              margin: 2px 0;
              padding: 10px;
              background: ${NUBLUE};
              color: #fff;
              // border-radius: 0;
              // box-shadow: 0 0 6px -2px rgba(0,0,0,0.2);
              // border: 1px solid #e2e2e2;
              // border: 1px solid #8e8e8e;
              box-sizing: border-box;
              // border-radius: 4px;
            }

            .s-button:hover {
              background: #2d519e;
            }
          `}
        </style>
        {/* <TopBar navigation={this.props.navigation} /> */}
      </div>
    )
  }
}

FeedScreen = withNavigation(FeedScreen)

// FeedScreen.getInitialProps = async function() {
//   // return fetch(
//   //   `${DATA_URL}v2?query={feed{groups{edges{node{name,permalink,id}}}}}`,
//   //   {
//   //     headers: {
//   //       Accept: 'application/json',
//   //       'Content-Type': 'application/json'
//   //     }
//   //   }
//   // ).then(r => r.json())
//   const featured = await fetch(
//     `${DATA_URL}v2?query={discussion(id:277){id,_id,name,public_url,excerpt(size:30),permalink,created_at,user{id,_id,name,username,profile_picture_name}feature_photo{id,_id,height,width,name,url}}}`,
//     {
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json'
//       }
//     }
//   ).then(r => r.json())

//   return { groups, featured }
// }
