import React from 'react'
import { View } from 'react-native'
import ActivityButton from 'components/ActivityButton'
import colors from 'colors'
import styles from 'styles'
import Icon from 'components/vector-icons/Ionicons'
import NProgress from 'nprogress'
import message from 'antd/lib/message'
import { NUBLUE } from 'ui'

class LoaderBox extends React.Component {
  renderIcon() {
    if (!this.props.isLoading) {
      return (
        <Icon
          name="md-refresh"
          style={[styles.icon, { marginRight: 0 }]}
          size={50}
          color={NUBLUE}
        />
      )
    }
    return null
  }
  componentWillMount() {
    if (process.browser) {
      if (this.props.error) {
        NProgress.done()
        message.error('Network Error')
      } else NProgress.start()
    }
  }
  componentDidUpdate() {
    if (process.browser) {
      if (this.props.error) {
        NProgress.done()
        message.error('Network Error')
      } else NProgress.start()
    }
  }
  componentWillUnmount() {
    if (process.browser) {
      NProgress.done()
    }
  }

  render() {
    return (
      <View
        style={[
          {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
          }
        ]}
      >
        <ActivityButton
          onPress={this.props.onPress}
          isLoading={this.props.isLoading}
          title={this.props.error}
          containerStyle={this.props.containerStyle}
          buttonStyle={[{ height: 100 }, this.props.buttonStyle]}
          textStyle={this.props.textStyle}
          indicatorSize={this.props.indicatorSize}
          indicatorColor={this.props.indicatorColor}
          icon={this.renderIcon()}
          activityIndicatorStyle={this.props.activityIndicatorStyle}
        />
      </View>
    )
  }
}

LoaderBox.defaultProps = {
  onPress: () => {},
  isLoading: false,
  title: 'Tap to load',
  indicatorColor: NUBLUE,
  indicatorSize: 'large',
  containerStyle: {},
  buttonStyle: { backgroundColor: 'transparent' },
  textStyle: { color: '#000', fontSize: 20 },
  activityIndicatorStyle: {}
}

export default LoaderBox
