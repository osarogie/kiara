import { connect } from 'react-redux'
import { devLog } from 'lib/devLog'
import { Constants, DATA_URL } from './../constants'
import {
  loginLink,
  logoutLinkn,
  newStoryLink,
  userLink
} from './../helpers/links'
import React, { Component } from 'react'
import { View } from 'react-native-web'
import { Toolbar } from 'components/Toolbar1'
import Icon from 'components/vector-icons/Feather'
import { WHITE, BLACK } from 'ui'
import { BrowserLink } from 'components/BrowserLink'
import Popover from 'antd/lib/popover'
import Button from 'antd/lib/button'
import { withRouter } from 'next/router'
import { logout, setUser } from 'redux/actions'
import Avatar from 'components/Avatar'
import 'login.scss'
import { UserAvatarMenu } from './UserAvatarMenu'
import { ThemeSwitcher } from './ThemeSwitcher'

export class AppBar extends Component {
  static propTypes = {}

  state = { user: {}, loggedIn: false }

  logout = () => {
    this.props.dispatch(logout())
    window.location.href = '/'
  }
  async componentDidMount() {
    if (!Constants.loggedIn) {
      const { data, errors } = await fetch(`${DATA_URL}_/api`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
          query:
            '{viewer{name,username,profile_picture(size:50),profile_picture_name,_id,id}}'
        })
      }).then(response => devLog(response.json()))

      if (!errors && data.viewer && data.viewer.name) {
        Constants.loggedIn = true
        Constants.user = data.viewer
      }

      this.props.dispatch(setUser(Constants.user))
    } else this.props.dispatch(logout())

    this.setState({ loggedIn: Constants.loggedIn, user: Constants.user })
  }
  render() {
    const { router, title, className = '', ...props } = this.props
    const { loggedIn } = this.state
    const clear = true

    return (
      <div className={`${className} toolbar`}>
        <Toolbar
          className="inner"
          title={
            title || (
              <img className="logo" src="/static/images/logo3.png" alt="" />
            )
          }
          style={
            {
              // position: 'absolute',
              // top: Platform.select({ default: 23, web: 0 }),
              // right: 0,
              // left: 0
            }
          }
          titleStyle={{ textAlign: 'center', fontSize: 25 }}
          // leftComponent={
          //   <TouchableOpacity onPress={this.openDrawer}>
          //     <Icon
          //       name="menu"
          //       size={25}
          //       color={'#000'}
          //       style={{ marginRight: 15 }}
          //     />
          //   </TouchableOpacity>
          // }
          rightComponent={
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center'
              }}
            >
              {loggedIn ? (
                <>
                  <BrowserLink
                    href={
                      loggedIn ? newStoryLink() : loginLink('/new-discussion')
                    }
                    className="auth-link"
                    style={{
                      marginRight: 20
                    }}
                  >
                    Write
                  </BrowserLink>

                  {/* <Popover
                    placement="bottomRight"
                    content={
                      <>
                        <div>Nothing to show</div>
                      </>
                    }
                    trigger="click"
                  >
                    <Icon
                      name="bell"
                      size={24}
                      color={`${clear ? BLACK : WHITE}aa`}
                      style={{ cursor: 'pointer', marginRight: 20 }}
                    />
                  </Popover> */}
                  {/* <Button
                    shape="circle"
                    style={{ marginRight: 20 }}
                    icon="search"
                  /> */}
                </>
              ) : null}
              <BrowserLink href="/search">
                <Icon
                  name="search"
                  size={24}
                  style={{ cursor: 'pointer', marginRight: 20 }}
                />
              </BrowserLink>
              {this.state.loggedIn ? (
                <>
                  {router.route !== '/new-discussion' ? (
                    <>
                      {/* <BrowserLink
                       href="/new-discussion"
                        className="auth-link"
                        style={{ color: '#000', marginRight: 20 }}
                      >
                        Write
                      </BrowserLink>
                      <Button
                        shape="circle"
                        style={{ marginRight: 20 }}
                        icon="search"
                      /> */}
                    </>
                  ) : (
                    // <TouchableOpacity onPress={() => window.publish()}>
                    //   <Text>Publish</Text>
                    // </TouchableOpacity>

                    <Button
                      type="primary"
                      style={{ marginRight: 20 }}
                      onClick={() => window.publish()}
                    >
                      Publish
                    </Button>
                  )}
                  <UserAvatarMenu user={this.state.user} />
                </>
              ) : (
                <>
                  <a
                    href={loginLink()}
                    className="auth-link"
                    // style={{ color: '#000' }}
                  >
                    <button className="button">Login</button>
                  </a>
                  <ThemeSwitcher style={{ marginTop: 0 }} />
                </>
              )}
              {/* <Popover
              placement="bottomRight"
              title={this.state.user.name}
              content={
                <>
                  <Subtitle styleName="h-center">Cart is empty</Subtitle>
                </>
              }
              trigger="click"
            >
              <Icon
                name="shopping-cart"
                size={24}
                color="#000"
                style={{ cursor: 'pointer', marginLeft: 15 }}
              />
            </Popover> */}
            </View>
          }
          {...props}
        />
        <style jsx>
          {`
            .logo {
              height: 40px;
            }
          `}
        </style>
      </div>
    )
  }
}
AppBar = withRouter(connect()(AppBar))

export default AppBar
