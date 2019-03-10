import React from 'react'
import { View, Platform, StatusBar, TouchableOpacity } from 'react-native-web'
import Icon from 'components/vector-icons/MaterialIcons'
import { BrowserLink } from 'components/BrowserLink'

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

  onNavPress = () => {
    // const { navigation, onNavPress } = this.props
    // if (onNavPress) {
    //   onNavPress()
    // } else navigation.goBack()
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
      <View
        className={className}
        style={{
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
          // paddingBottom: 15,
          // backgroundColor: clear ? 'transparent' : '#fff',
          // boxShadow: '0px 3px 12px -5px #fff',
          ...style
        }}
      >
        {showNavIcon ? (
          <TouchableOpacity onPress={this.onNavPress}>
            <Icon
              name="chevron-left"
              size={25}
              color={light ? '#000' : '#000'}
              style={{ marginRight: 15 }}
            />
          </TouchableOpacity>
        ) : null}
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
    )
  }
}
export default Toolbar
