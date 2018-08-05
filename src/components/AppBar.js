import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Text } from 'react-native'
import { View } from '@shoutem/ui/components/View'
import { Subtitle } from '@shoutem/ui/components/Text'
import { TouchableOpacity } from '@shoutem/ui/components/TouchableOpacity'
import { Toolbar } from 'components/Toolbar1'
import Icon from 'components/vector-icons/Feather'
import { YELLOW, BLUE, WHITE, NUBLUE, BLACK } from 'ui'
import { connect } from 'react-redux'
import { BrowserLink } from 'components/BrowserLink'
import Popover from 'antd/lib/popover'
import AIcon from 'antd/lib/icon'
import Button from 'antd/lib/button'
import { withRouter } from 'next/router'
import { logout } from 'redux/actions'
import Avatar from 'components/Avatar'
const mapStateToProps = state => ({
  user: state.user.user,
  loggedIn: state.user.loggedIn
})

// @withNavigation
export class AppBar extends Component {
  static propTypes = {}

  logout = $ => {
    this.props.dispatch(logout())
    window.location.href = '/'
  }
  render() {
    const { router, loggedIn, clear } = this.props
    return (
      <div className="toolbar">
        <Toolbar
          className="inner"
          title={
            <a style={{ marginLeft: 0, color: clear ? BLACK : WHITE }} href="/">
              {/* <img className="logo" src="/static/images/logo3.png" alt="" /> */}
              <Text>TheCommunity</Text>
            </a>
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
              styleName="horizontal"
              style={{ justifyContent: 'flex-end', alignItems: 'center' }}
            >
              {router.route !== '/new-discussion' ? (
                <>
                  <BrowserLink
                    route={
                      loggedIn
                        ? '/new-discussion'
                        : '/login?next=/new-discussion'
                    }
                    className="auth-link"
                    style={{
                      color: `${clear ? BLACK : WHITE}aa`,
                      marginRight: 20
                    }}
                  >
                    Write
                  </BrowserLink>

                  <Popover
                    placement="bottomRight"
                    content={
                      <React.Fragment>
                        <div>Nothing to show</div>
                      </React.Fragment>
                    }
                    trigger="click"
                  >
                    <Icon
                      name="bell"
                      size={24}
                      color={`${clear ? BLACK : WHITE}aa`}
                      style={{ cursor: 'pointer', marginRight: 20 }}
                    />
                  </Popover>
                  {/* <Button
                    shape="circle"
                    style={{ marginRight: 20 }}
                    icon="search"
                  /> */}
                  <Icon
                    name="search"
                    size={24}
                    color={`${clear ? BLACK : WHITE}aa`}
                    style={{ cursor: 'pointer', marginRight: 20 }}
                  />
                </>
              ) : null}
              {this.props.loggedIn ? (
                <React.Fragment>
                  {router.route !== '/new-discussion' ? (
                    <>
                      {/* <BrowserLink
                        route="/new-discussion"
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
                  <Popover
                    placement="bottomRight"
                    content={
                      <React.Fragment>
                        <BrowserLink
                          className="usermenu_link"
                          route={`/${this.props.user.username}`}
                          style={styles.usermenu_link}
                        >
                          View profile
                        </BrowserLink>

                        <BrowserLink
                          className="usermenu_link"
                          route={`/new-discussion`}
                          style={styles.usermenu_link}
                        >
                          Start a Discussion
                        </BrowserLink>
                        <BrowserLink
                          className="usermenu_link"
                          route={`/new-culture`}
                          style={styles.usermenu_link}
                        >
                          Start a new culture
                        </BrowserLink>
                        <BrowserLink
                          className="usermenu_link"
                          route={`/new-poll`}
                          style={styles.usermenu_link}
                        >
                          Create voting poll
                        </BrowserLink>
                        <BrowserLink
                          className="usermenu_link"
                          route={`/${this.props.user.username}/cultures`}
                          style={styles.usermenu_link}
                        >
                          Cultures
                        </BrowserLink>
                        <BrowserLink
                          className="usermenu_link"
                          route={`/${this.props.user.username}/blogs`}
                          style={styles.usermenu_link}
                        >
                          Blogs
                        </BrowserLink>
                        <BrowserLink
                          className="usermenu_link"
                          route={`/settings`}
                          style={styles.usermenu_link}
                        >
                          Settings
                        </BrowserLink>

                        <span
                          className="username_link"
                          onClick={this.logout}
                          style={styles.usermenu_link}
                        >
                          Logout
                        </span>
                      </React.Fragment>
                    }
                    trigger="click"
                  >
                    {/* <Icon
                      name="face"
                      size={24}
                      color="#000"
                      style={{ cursor: 'pointer' }}
                    /> */}
                    <Avatar
                      rounded
                      disableLink
                      size={30}
                      source={this.props.user}
                      // style={{ marginLeft: 20 }}
                    />
                  </Popover>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <BrowserLink
                    route="/login"
                    className="auth-link"
                    style={{ color: '#000' }}
                  >
                    <Button
                      type="primary"
                      style={{
                        borderRadius: 20,
                        background: BLUE,
                        borderColor: 'transparent'
                      }}
                    >
                      Login
                    </Button>
                  </BrowserLink>
                </React.Fragment>
              )}
              {/* <Popover
              placement="bottomRight"
              title={this.props.user.name}
              content={
                <React.Fragment>
                  <Subtitle styleName="h-center">Cart is empty</Subtitle>
                </React.Fragment>
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
          {...this.props}
        />
        <style jsx>
          {`
            .toolbar {
              background-color: ${clear ? 'transparent' : NUBLUE};
            }
            .toolbar .inner {
              max-width: 1000px;
              margin: auto;
            }
            .logo {
              height: 40px;
            }
          `}
        </style>
        <style jsx global>
          {`
            .usermenu_link {
              display: block;
              margin-top: 10px;
              width: 200px;
              margin-bottom: 15px;
              color: #444;
              cursor: pointer;
            }
            .usermenu_link:hover {
              color: #000;
            }
            #nprogress .bar {
              background: ${clear ? BLACK : WHITE};
            }

            #nprogress .peg {
              box-shadow: 0 0 10px ${clear ? BLACK : WHITE},
                0 0 5px ${clear ? BLACK : WHITE};
            }
          `}
        </style>
      </div>
    )
  }
}

AppBar = withRouter(connect(mapStateToProps)(AppBar))

export default AppBar
const styles = {
  usermenu_link: {}
}
