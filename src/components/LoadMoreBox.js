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
import message from 'antd/lib/message'

const mapStateToProps = state => ({
  night_mode: state.night_mode
})

class LoadMoreBox extends React.Component {
  renderIcon() {
    if (!this.props.isLoading) {
      return (
        <Icon
          name="md-refresh"
          style={[styles.icon, { marginRight: 0 }]}
          size={50}
          color={'#000'}
        />
      )
    }
    return null
  }

  componentWillReceiveProps(props) {
    if (props.error) {
      message.error('Network Error')
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

LoadMoreBox.defaultProps = {
  onPress: () => {},
  isLoading: false,
  title: 'Tap to load',
  indicatorColor: '#000',
  indicatorSize: 'large',
  containerStyle: {},
  buttonStyle: { backgroundColor: 'transparent' },
  textStyle: { color: '#000', fontSize: 20 },
  activityIndicatorStyle: {}
}

LoadMoreBox.propTypes = {
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

export default connect(mapStateToProps)(LoadMoreBox)
