import {
  ActivityIndicator,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

export default function ActivityButton({
  isLoading,
  icon,
  textStyle,
  title,
  indicatorColor,
  indicatorSize,
  loadingBackground,
  onPress,
  buttonStyle,
  activityIndicatorStyle,
  buttonClassName,
  textClassName
}) {
  function renderLoading() {
    if (isLoading === false && icon) return icon

    if (isLoading === false) {
      return (
        <Text className={textClassName} style={[styles.text, textStyle]}>
          {title}
        </Text>
      )
    }

    return (
      <View>
        <Text style={[styles.text, textStyle, { opacity: 0 }]}>{title}</Text>
        <ActivityIndicator
          className="s__content__main"
          color={indicatorColor}
          size={indicatorSize}
          style={[styles.activityIndicator, activityIndicatorStyle]}
        />
      </View>
    )
  }

  const hasExtraStyles = isLoading && loadingBackground
  const extraStyles = hasExtraStyles
    ? { backgroundColor: loadingBackground }
    : {}

  return (
    <TouchableOpacity
      onPress={onPress}
      className={buttonClassName}
      disabled={isLoading === true}
      accessibilityTraits="button"
      style={[styles.wrapper, buttonStyle, extraStyles]}
    >
      {renderLoading()}
    </TouchableOpacity>
  )
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
    borderRadius: 20,
    height: 40,
    paddingHorizontal: 20
  },
  text: {
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold'
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
  indicatorSize: 'small'
}
