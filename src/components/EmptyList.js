import { Text, View, StyleSheet } from 'react-native'

export default function EmptyList({ message }) {
  return (
    <View style={styles.emptyList}>
      <Text>{message}</Text>
    </View>
  )
}

EmptyList.defaultProps = {
  message: 'Empty'
}

const styles = StyleSheet.create({
  emptyList: {
    flex: 1,
    alignItems: 'center',
    height: 100,
    justifyContent: 'center'
  }
})
