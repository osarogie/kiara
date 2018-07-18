import React from 'react'
import {
  ActivityIndicator,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
// import PropTypes from 'prop-types'

export default class ActivityButton extends React.Component {
  renderLoading() {
    const { icon } = this.props
    // console.log(this.props)
    if (this.props.isLoading === false && icon) {
      return icon
    } else if (this.props.isLoading === false) {
      return (
        <Text style={[styles.text, this.props.textStyle]}>
          {this.props.title}
        </Text>
      )
    }
    return (
      <View>
        <Text style={[styles.text, this.props.textStyle, { opacity: 0 }]}>
          {this.props.title}
        </Text>
        <ActivityIndicator
          color={this.props.indicatorColor}
          size={this.props.indicatorSize}
          style={[styles.activityIndicator, this.props.activityIndicatorStyle]}
        />
      </View>
    )
  }
  render() {
    const extraStyles =
      this.props.isLoading && this.props.loadingBackground
        ? {
            backgroundColor: this.props.loadingBackground
          }
        : {}

    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        disabled={this.props.isLoading === true}
        accessibilityTraits="button"
        style={[styles.wrapper, this.props.buttonStyle, extraStyles]}
      >
        {this.renderLoading()}
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 10
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b2b2b2',
    borderRadius: 15,
    height: 30,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20
  },
  text: {
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: 15
  },
  activityIndicator: {
    marginTop: Platform.select({
      ios: -14,
      android: -18,
      web: -18
    })
  }
})

ActivityButton.defaultProps = {
  onPress: () => {},
  isLoading: false,
  title: 'Button',
  indicatorColor: '#000',
  indicatorSize: 'small',
  containerStyle: {},
  buttonStyle: {},
  textStyle: {},
  activityIndicatorStyle: {}
}

ActivityButton.propTypes = {
  // ...ViewPropTypes,
  // onPress: PropTypes.func,
  // isLoading: PropTypes.bool,
  // title: PropTypes.string,
  // indicatorColor: PropTypes.string,
  // indicatorSize: PropTypes.string,
  // containerStyle: PropTypes.style,
  // buttonStyle: PropTypes.style,
  // textStyle: PropTypes.style,
  // activityIndicatorStyle: PropTypes.style
}
