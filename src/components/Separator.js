import React from 'react'
import { View } from 'react-native'

export default function Separator({ styles }) {
  return <View style={[{ backgroundColor: '#888', height: 1 }, styles]} />
}
