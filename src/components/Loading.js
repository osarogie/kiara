import React from 'react'
import { ActivityIndicator } from 'react-native-web'

export default () => (
  <div>
    <ActivityIndicator size={50} color="#000" />
    <style jsx>{`
      div {
        background: #fff;
        align-items: center;
        display: flex;
        height: 50vh;
        justify-content: center;
      }
    `}</style>
  </div>
)
