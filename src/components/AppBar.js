import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Text } from 'react-native'
import { View } from '@shoutem/ui/components/View'
import { Subtitle } from '@shoutem/ui/components/Text'
import { TouchableOpacity } from '@shoutem/ui/components/TouchableOpacity'
import { Toolbar } from 'components/Toolbar1'
import Icon from 'components/vector-icons/MaterialIcons'
import { YELLOW } from 'ui'
import { connect } from 'react-redux'
import { BrowserLink } from 'components/BrowserLink'
import Popover from 'antd/lib/popover'
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
    const { router } = this.props
    return (
      <div className="toolbar">
        <Toolbar
          className="inner"
          title={
            <a className="navbar-brand" style={{ marginLeft: 0 }} href="/">
              <img className="logo" src="/static/images/logo3.png" alt="" />
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
          leftComponent={
            // <TouchableOpacity onPress={this.openDrawer}>
            //   <Icon
            //     name="menu"
            //     size={25}
            //     color={'#000'}
            //     style={{ marginRight: 15 }}
            //   />
            // </TouchableOpacity>
            null
          }
          rightComponent={
            <View
              styleName="horizontal"
              style={{ justifyContent: 'flex-end', alignItems: 'center' }}
            >
              {this.props.loggedIn ? (
                <React.Fragment>
                  {router.route !== '/new-discussion' ? (
                    <>
                      <BrowserLink
                        to="/new-discussion"
                        className="auth-link"
                        style={{ color: '#000', marginRight: 20 }}
                      >
                        Share your story
                      </BrowserLink>
                      <Button
                        shape="circle"
                        style={{ marginRight: 20 }}
                        icon="search"
                      />
                    </>
                  ) : (
                    // <TouchableOpacity onPress={() => window.publish()}>
                    //   <Text>Publish</Text>
                    // </TouchableOpacity>

                    <Button
                      type="primary"
                      style={{ marginRight: 20 }}
                      onPress={() => window.publish()}
                    >
                      Publish
                    </Button>
                  )}
                  <Popover
                    placement="bottomRight"
                    title={this.props.user.name}
                    content={
                      <React.Fragment>
                        <BrowserLink
                          to={`/${this.props.user.username}`}
                          style={{ display: 'block', marginBottom: 10 }}
                        >
                          View profile
                        </BrowserLink>
                        <BrowserLink
                          onPress={this.logout}
                          style={{ display: 'block', marginBottom: 10 }}
                        >
                          Logout
                        </BrowserLink>
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
                      size={30}
                      source={this.props.user}
                      // style={{ marginLeft: 20 }}
                    />
                  </Popover>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <BrowserLink
                    to="/login"
                    className="auth-link"
                    style={{ color: '#000' }}
                  >
                    Get Started
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
              background-color: #fff;
            }
            .toolbar .inner {
              max-width: 1000px;
              margin: auto;
            }
            .logo {
              height: 46px;
            }
          `}
        </style>
      </div>
    )
  }
}

AppBar = withRouter(connect(mapStateToProps)(AppBar))

export default AppBar
