import React from 'react'
import {
  // ViewPropTypes,
  ToastAndroid,
  Text,
  StyleSheet,
  View,
  Platform
} from 'react-native'
import ActivityButton from 'components/ActivityButton'
import { connect } from 'react-redux'
import colors from 'colors'
import styles from 'styles'
import Icon from 'components/vector-icons/Ionicons'
import NProgress from 'nprogress'
import message from 'antd/lib/message'
import { NUBLUE } from 'ui'

const mapStateToProps = state => ({
  night_mode: state.night_mode
})

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
    if (this.props.error) {
      NProgress.done()
      message.error('Network Error')
    } else NProgress.start()
  }
  componentDidUpdate() {
    if (this.props.error) {
      NProgress.done()
      message.error('Network Error')
    } else NProgress.start()
  }
  componentWillUnmount() {
    NProgress.done()
  }

  render() {
    //    return null

    return (
      <View
        style={[
          {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
          }
          // { backgroundColor: colors.get("container", this.props.night_mode) }
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

LoaderBox.propTypes = {
  // ...ViewPropTypes,
  // onPress: React.PropTypes.func,
  // isLoading: React.PropTypes.bool,
  // title: React.PropTypes.string,
  // indicatorColor: React.PropTypes.string,
  // indicatorSize: React.PropTypes.string,
  // containerStyle: View.propTypes.style,
  // buttonStyle: View.propTypes.style,
  // textStyle: Text.propTypes.style,
  // activityIndicatorStyle: View.propTypes.style
}

// const styles = StyleSheet.create({
//   // container: {
//   //   flex: 1,
//   //   alignItems: 'center',
//   //   justifyContent: 'center'
//   // }
// })

export default connect(mapStateToProps)(LoaderBox)
