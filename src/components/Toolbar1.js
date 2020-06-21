import React from 'react'
import { View, Platform, StatusBar, TouchableOpacity } from 'react-native-web'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { BrowserLink } from 'components/BrowserLink'
import { StyleSheet } from 'react-native'

export class Toolbar extends React.Component {
  renderLeftComponent() {
    const { leftComponent } = this.props
    if (leftComponent)
      return (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'flex-start'
          }}
        >
          {leftComponent}
        </View>
      )
    return null
  }

  renderRightComponent() {
    const { rightComponent } = this.props
    if (rightComponent)
      return (
        <View style={{ justifyContent: 'center', alignItems: 'flex-end' }}>
          {rightComponent}
        </View>
      )
    return null
  }

  render() {
    const {
      showNavIcon,
      title,
      clear,
      light,
      style,
      titleStyle,
      className
    } = this.props
    return (
      <div className={className}>
        <View
          style={[
            styles.container,
            {
              // paddingBottom: 15,
              // backgroundColor: clear ? 'transparent' : '#fff',
              // boxShadow: '0px 3px 12px -5px #fff',
              ...style
            }
          ]}
        >
          {this.renderLeftComponent()}
          <BrowserLink href="/">
            <div
              className="toolbar_title"
              style={{
                // color: '#000',
                // fontSize: 35,
                // fontFamily: 'Kaushan Script',
                // textShadow: '0 0 2px #fff',
                ...titleStyle
              }}
            >
              {title}
            </div>
          </BrowserLink>
          <View style={{ flex: 1 }} />
          {this.renderRightComponent()}
        </View>
      </div>
    )
  }
}
export default Toolbar

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 16,
    height: 60,
    alignItems: 'center',
    marginTop: Platform.select({
      web: 0,
      default_: StatusBar.currentHeight
    }),
    marginLeft: 'auto',
    marginRight: 'auto'
  }
})
