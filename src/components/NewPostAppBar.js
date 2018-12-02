import { loginLink } from './../helpers/links'
import React, { Component } from 'react'
import { View } from 'react-native-web'
import { Toolbar } from 'components/Toolbar1'
import Icon from 'components/vector-icons/Feather'
import { BLUE, WHITE, BLACK } from 'ui'
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
export class NewPostAppBar extends Component {
  static propTypes = {}

  logout = () => {
    this.props.dispatch(logout())
    window.location.href = '/'
  }
  render() {
    const { router, loggedIn } = this.props
    const clear = true
    return (
      <div className="toolbar">
        <Toolbar
          className="inner"
          title={<img className="logo" src="/static/images/logo3.png" alt="" />}
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
              {this.props.loggedIn ? (
                <React.Fragment>
                  <Button
                    type="primary"
                    style={{ marginRight: 20 }}
                    onClick={() => window.publish()}
                  >
                    Publish
                  </Button>
                  <Popover
                    placement="bottomRight"
                    content={
                      <React.Fragment>
                        <BrowserLink
                          className="usermenu_link"
                          href={`/${this.props.user.username}`}
                          style={styles.usermenu_link}
                        >
                          View profile
                        </BrowserLink>

                        <BrowserLink
                          className="usermenu_link"
                          href={`/new-discussion`}
                          style={styles.usermenu_link}
                        >
                          Start a Discussion
                        </BrowserLink>
                        <BrowserLink
                          className="usermenu_link"
                          href={`/new-culture`}
                          style={styles.usermenu_link}
                        >
                          Start a new culture
                        </BrowserLink>
                        <BrowserLink
                          className="usermenu_link"
                          href={`/new-poll`}
                          style={styles.usermenu_link}
                        >
                          Create voting poll
                        </BrowserLink>
                        <BrowserLink
                          className="usermenu_link"
                          href={`/${this.props.user.username}/cultures`}
                          style={styles.usermenu_link}
                        >
                          Cultures
                        </BrowserLink>
                        <BrowserLink
                          className="usermenu_link"
                          href={`/${this.props.user.username}/blogs`}
                          style={styles.usermenu_link}
                        >
                          Blogs
                        </BrowserLink>
                        <BrowserLink
                          className="usermenu_link"
                          href={`/settings`}
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
                  <a
                    href={loginLink()}
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
                  </a>
                </React.Fragment>
              )}
            </View>
          }
          {...this.props}
        />
        <style jsx>
          {`
            .toolbar {
              background-color: ${WHITE};
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
      </div>
    )
  }
}

NewPostAppBar = withRouter(connect(mapStateToProps)(NewPostAppBar))

export default NewPostAppBar
const styles = {
  usermenu_link: {}
}
