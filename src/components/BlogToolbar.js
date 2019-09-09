import { useViewer } from './../lib/withViewer'
import { devLog } from 'lib/devLog'
import { Constants, DATA_URL } from './../constants'
import { loginLink, newStoryLink, userLink } from './../helpers/links'
import { View, Text, StyleSheet, Image } from 'react-native'
import Icon from 'components/vector-icons/Feather'
import { BrowserLink } from 'components/BrowserLink'
import 'login.scss'
import { UserAvatarMenu } from '../views/user/UserAvatarMenu'
import { ThemeSwitcher } from './ThemeSwitcher'
import { ViewerContext } from 'lib/withData'
import { useState } from 'react'
import AppBar from './AppBar'

export function BlogToolbar({ blog }) {
  const { viewer, hasViewer, refetchViewer, requireViewer } = useViewer()

  function onLoginClick(e) {
    e.preventDefault()
    requireViewer()
  }

  return (
    <>
      <AppBar />
      <div className="elevated toolbar s__dark__bg">
        <div className="s__dark__bg" style={{ display: 'none' }}>
          <View style={styles.tcbar}>
            <View
              accessibilityRole="link"
              className="tc-gr"
              href="//thecommunity.ng"
              style={{
                // backgroundColor: '#827',
                padding: 5,
                borderRadius: 15,
                marginEnd: 10
              }}
            >
              <Image
                source="//img.thecommunity.ng/40x40/d39e11ab-f400-4add-b644-1e8b45d1a307"
                style={{
                  height: 20,
                  width: 20
                }}
              />
            </View>

            <Text
              accessibilityRole="link"
              href="//thecommunity.ng"
              style={styles.tclink}
            >
              TheCommunity
            </Text>
          </View>
        </div>
        <View style={styles.toolbar}>
          <Text style={{ flex: 1, textAlign: 'center' }} numberOfLines={1}>
            <BrowserLink
              href={blog.publicUrl}
              className="auth-link appbar-a"
              style={{
                fontWeight: 'bold',
                fontSize: 19
              }}
            >
              {blog.name}
            </BrowserLink>
          </Text>
        </View>
      </div>
    </>
  )
}

export default BlogToolbar

const styles = StyleSheet.create({
  tcbar: {
    paddingVertical: 5,
    paddingHorizontal: 16,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  tclink: {
    fontWeight: 'bold',
    fontSize: 18,
    // borderBottomWidth: 1,
    // borderBottomStyle: 'solid',
    // borderBottomColor: '#fff',
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
