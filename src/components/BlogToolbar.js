import { useViewer } from './../lib/withViewer'
import { devLog } from 'lib/devLog'
import { Constants, DATA_URL } from './../constants'
import { loginLink, newStoryLink, userLink } from './../helpers/links'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'components/vector-icons/Feather'
import { BrowserLink } from 'components/BrowserLink'
import 'login.scss'
import { UserAvatarMenu } from '../views/user/UserAvatarMenu'
import { ThemeSwitcher } from './ThemeSwitcher'
import { ViewerContext } from 'lib/withData'
import { useState } from 'react'

export function BlogToolbar({ blog }) {
  const { viewer, hasViewer, refetchViewer, requireViewer } = useViewer()

  function onLoginClick(e) {
    e.preventDefault()
    requireViewer()
  }

  return (
    <div className="elevated toolbar">
      <View style={styles.tcbar}>
        <Text
          accessibilityRole="link"
          href="//thecommunity.ng"
          style={styles.tclink}
        >
          TheCommunity
        </Text>
      </View>
      <View style={styles.toolbar}>
        <Text style={{ flex: 1 }} numberOfLines={1}>
          <BrowserLink
            href={blog.public_url}
            className="auth-link appbar-a"
            style={{
              fontWeight: 'bold',
              fontSize: 19
            }}
          >
            {blog.name}
          </BrowserLink>
        </Text>
        <View style={styles.rightComponent}>
          <BrowserLink href="/search">
            <Icon name="search" size={24} className="appbar-a" />
          </BrowserLink>
          {hasViewer ? (
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
      </View>
    </div>
  )
}

export default BlogToolbar

const styles = StyleSheet.create({
  tcbar: {
    backgroundColor: '#000',
    paddingVertical: 5,
    paddingHorizontal: 16
  },
  tclink: {
    color: '#fff',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: '#fff',
    display: 'table',
    width: 'fit-content'
  },
  rightComponent: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  toolbar: {
    flexDirection: 'row',
    flex: 1,
    paddingHorizontal: 16,
    height: 60,
    alignItems: 'center',
    marginHorizontal: 'auto',
    maxWidth: 1100
  }
})
