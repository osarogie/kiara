import PropTypes from 'prop-types'
import React from 'react'
import { NavigationActions } from 'react-navigation'
import { ScrollView, View } from 'react-native'
import { TouchableOpacity, ImageBackground, Subtitle, Title } from '@shoutem/ui'
import { WHITE, BLACK, YELLOW } from 'ui'
import { sidelinks } from 'components/sidelinks'

// const mapStateToProps = state => ({
//   user: state.user.user,
//   loggedIn: state.user.loggedIn
// })

const SideLink = ({ label, route, navigation, path }) => (
  <TouchableOpacity
    style={styles.sideLink}
    onPress={e => {
      // e.preventDefault()
      // navigation.navigate(route)
    }}
  >
    <Subtitle accessibilityRole="link" href={path} style={styles.sideLinkText}>
      {label}
    </Subtitle>
  </TouchableOpacity>
)

export class SideMenu extends React.Component {
  static propTypes = {
    navigation: PropTypes.object
  }

  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    })
    this.props.navigation.dispatch(navigateAction)
  }
  render() {
    const { navigation } = this.props
    return (
      <ImageBackground
        style={styles.background}
        className="home"
        styleName="flexible"
      >
        <View style={styles.container}>
          <View style={styles.darkWrap} />
          <ScrollView
            style={styles.scroll}
            contentContainerStyle={styles.scrollContent}
          >
            <Title
              styleName="flexible"
              className="toolbar_title"
              style={{
                color: '#000',
                fontSize: 35,
                fontFamily: 'Kaushan Script',
                height: 51,
                marginTop: 50,
                marginBottom: 50
              }}
              accessibilityRole="link"
              href="/"
            >
              <Title
                style={{
                  fontSize: 35,
                  fontFamily: 'Kaushan Script',
                  color: YELLOW
                }}
              >
                TC
              </Title>
            </Title>
            {sidelinks.map(({ label, route, path }) => (
              <SideLink
                key={label}
                label={label}
                route={route}
                path={path}
                navigation={navigation}
              />
            ))}
          </ScrollView>
        </View>
      </ImageBackground>
    )
  }
}

const styles = {
  scrollContent: {
    padding: 20
  },
  scroll: { flex: 1 },
  settings: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    padding: 20,
    borderTopColor: '#0008',
    borderTopWidth: 1
  },
  background: {
    backgroundColor: WHITE,
    position: 'relative',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  darkWrap: {
    position: 'absolute',
    backgroundColor: '#fffffff5',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  container: {
    flex: 1,
    width: '100%'
    // flexDirection: 'row'
  },
  navItemStyle: {
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  button: {
    // borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    height: 50,
    justifyContent: 'center'
  },
  logo: {
    width: 150,
    height: 51,
    marginTop: 50,
    marginBottom: 50
  },
  sectionHeadingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  footerContainer: {
    padding: 20,
    backgroundColor: 'lightgrey'
  },
  sideLink: { height: 40, paddingVertical: 10, alignItems: 'flex-start' },
  sideLinkText: { color: BLACK, fontSize: 15 },
  loginText: {
    marginLeft: 10,
    flex: 1,
    color: '#000',
    marginRight: 10
  }
}
