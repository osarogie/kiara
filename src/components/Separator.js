import React from 'react'
import { View } from 'react-native'
import styles from '../styles'

class Separator extends React.PureComponent {
  render() {
    const { night_mode } = this.props
    return (
      <View
        style={[
          styles.separator,
          { backgroundColor: '#888' },
          this.props.styles
        ]}
      />
    )
  }
}

Separator.defaultProps = {
  styles: {}
}

export default Separator
