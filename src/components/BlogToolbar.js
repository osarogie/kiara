import { devLog } from 'lib/devLog'
import { Constants, DATA_URL } from './../constants'
import { loginLink, newStoryLink, userLink } from './../helpers/links'
import { View, Text } from 'react-native-web'
import { Toolbar } from 'components/Toolbar1'
import Icon from 'components/vector-icons/Feather'
import { BrowserLink } from 'components/BrowserLink'
import Popover from 'antd/lib/popover'
import Avatar from 'components/Avatar'
import 'login.scss'
import { UserAvatarMenu } from '../views/user/UserAvatarMenu'
import { ThemeSwitcher } from './ThemeSwitcher'
import { ViewerContext } from 'lib/withData'
import { withViewer } from 'lib/withViewer'
import { useState } from 'react'

export function BlogToolbar({
  viewer,
  hasViewer: loggedIn,
  className = '',
  refetchViewer,
  requireViewer,
  title,
  ...props
}) {
  function onLoginClick(e) {
    e.preventDefault()
    requireViewer()
  }

  return (
    <div className={`${className} toolbar`}>
      <Toolbar
        className="inner"
        titleStyle={{ textAlign: 'center', fontSize: 25 }}
        leftComponent={
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center'
            }}
          >
            <BrowserLink href="//thecommunity.ng">
              {props.title || (
                <img className="logo" src="/static/images/logo3.png" alt="TC" />
              )}
            </BrowserLink>
            <Text
              style={{
                flex: 1
              }}
              numberOfLines={1}
            >
              <BrowserLink
                href="/"
                className="auth-link left-link appbar-a"
                style={{
                  fontWeight: 'bold'
                }}
              >
                {title}
              </BrowserLink>
            </Text>
          </View>
        }
        rightComponent={
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center'
            }}
          >
            {/* {loggedIn ? (
              <>
                <BrowserLink
                  href={
                    loggedIn ? newStoryLink() : loginLink('/new-discussion')
                  }
                  className="auth-link appbar-a"
                >
                  Write
                </BrowserLink>

                <Popover
                  placement="bottomRight"
                  content={
                    <>
                      <div>Nothing to show</div>
                    </>
                  }
                  trigger="click"
                >
                  <Icon name="bell" size={24} className="appbar-a" />
                </Popover>
              </>
            ) : null} */}
            <BrowserLink href="/search">
              <Icon name="search" size={24} className="appbar-a" />
            </BrowserLink>
            {loggedIn ? (
              <UserAvatarMenu user={viewer} />
            ) : (
              <>
                <ThemeSwitcher style={{ marginTop: 0, marginRight: 20 }} />
                <a
                  onClick={onLoginClick}
                  href={loginLink()}
                  className="auth-link"
                >
                  <button className="button">Login</button>
                </a>
              </>
            )}
          </View>
        }
        {...props}
      />
    </div>
  )
}

BlogToolbar = withViewer(BlogToolbar)

export default BlogToolbar
