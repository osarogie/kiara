import { loginLink } from './../helpers/links'
import { View } from 'react-native-web'
import { Toolbar } from 'components/Toolbar1'
import { BrowserLink } from 'components/BrowserLink'
import { UserAvatarMenu } from '../views/user/UserAvatarMenu'
import { ThemeSwitcher } from './ThemeSwitcher'
import { useViewer } from '../lib/withViewer'
import { Logo } from './Logo'

export function AppBar({ className = '', ...props }) {
  const {
    viewer,
    hasViewer: loggedIn,
    refetchViewer,
    requireViewer
  } = useViewer()

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
            <BrowserLink href="/">
              {props.title || <Logo size={40} />}
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
            <BrowserLink href="/search" className="appbar-a">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </BrowserLink>
            {loggedIn ? (
              <UserAvatarMenu user={viewer} />
            ) : (
              <>
                <ThemeSwitcher style={{ marginTop: 0 }} />
                <a href={loginLink()} className="auth-link">
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

export default AppBar
