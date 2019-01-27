import { loginLink } from './../helpers/links'
import React, { Component } from 'react'
import { View } from 'react-native-web'
import { Toolbar } from 'components/Toolbar1'
import Icon from 'components/vector-icons/Feather'
import { BLUE, WHITE, BLACK } from 'ui'
import { BrowserLink } from 'components/BrowserLink'
import Popover from 'antd/lib/popover'
import Button from 'antd/lib/button'
import { withRouter } from 'next/router'
import { logout } from 'redux/actions'
import Avatar from 'components/Avatar'

export class NewPostAppBar extends Component {
  static propTypes = {}
  static defaultProps = {
    className: ''
  }

  logout = () => {
    this.props.dispatch(logout())
    window.location.href = '/'
  }
  render() {
    const { router, loggedIn, className, ...props } = this.props
    const clear = true
    return (
      <div className={`toolbar ${className}`}>
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
                <>
                  <button
                    className="button"
                    style={{ marginRight: 20 }}
                    onClick={() => window.publish()}
                  >
                    Publish
                  </button>
                  <UserAvatarMenu user={this.props.user} />
                </>
              ) : null}
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

NewPostAppBar = withRouter(NewPostAppBar)

export default NewPostAppBar
const styles = {
  usermenu_link: {}
}
