import { useViewer } from './../lib/withViewer'
import { View, Text, StyleSheet, Image } from 'react-native'
import { BrowserLink } from 'components/BrowserLink'
import 'login.scss'
import AppBar from './AppBar'

export function BlogToolbar({ blog }) {
  const { requireViewer } = useViewer()

  return (
    <>
      <AppBar />
      <div className="elevated toolbar s__dark__bg">
        <div className="s__dark__bg" style={{ display: 'none' }}>
          <View style={styles.tcbar}>
            <View
              accessibilityRole="link"
              className="tc-gr"
              href="/"
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

            <Text accessibilityRole="link" href="/" style={styles.tclink}>
              TheCommunity
            </Text>
          </View>
        </div>
        <View style={styles.toolbar}>
          <Text style={{ flex: 1, textAlign: 'center' }} numberOfLines={1}>
            <BrowserLink
              href={`/c/${blog.permalink}`}
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
