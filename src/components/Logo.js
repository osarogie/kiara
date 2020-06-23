import { Image } from 'react-native'

export function Logo({ size = 80, style }) {
  return (
    // <Image
    //   resizeMode="contain"
    //   style={[{ width: size, height: size }, style]}
    //   source={require('../assets/images/logo80.png')}
    // />
    <img
      style={{ width: size, height: size, ...style }}
      src="/images/logo2.png"
      alt="TheCommunity"
      title="TheCommunity"
    />
  )
}
