import { WEBSITE_URL } from './../constants'
import { loginLink } from './../helpers/links'
import { View } from 'react-native-web'
import { Toolbar } from 'components/Toolbar1'
import Icon from 'components/vector-icons/Feather'
import { BrowserLink } from 'components/BrowserLink'
import 'login.scss'
import { UserAvatarMenu } from '../views/user/UserAvatarMenu'
import { ThemeSwitcher } from './ThemeSwitcher'
import { withViewer } from 'lib/withViewer'

export function AppBar({
  viewer,
  hasViewer: loggedIn,
  className = '',
  refetchViewer,
  requireViewer,
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
            <BrowserLink href={WEBSITE_URL}>
              {props.title || (
                <img className="logo" src="/images/logo3.png" alt="TC" />
              )}
            </BrowserLink>
            <BrowserLink
              href={`${WEBSITE_URL}/discover-blogs`}
              className="auth-link left-link appbar-a"
            >
              Blogs
            </BrowserLink>
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
                <ThemeSwitcher style={{ marginTop: 0 }} />
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

AppBar = withViewer(AppBar)

export default AppBar
