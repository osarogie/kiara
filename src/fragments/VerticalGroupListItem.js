import React, { useState, useCallback, useMemo } from 'react'
import {
  View,
  Image,
  // ViewPropTypes,
  TouchableOpacity,
  PixelRatio
} from 'react-native'
import { imageUrl } from '../utils'
import { createGroupListItemFragment } from './GroupListItem'
import { Text, useTheme } from 'react-native-paper'
import { GroupLink } from '../links/GroupLink'

function VerticalGroupListItem({ group }) {
  const [layoutWidth, setLayoutWidth] = useState(100)
  const width = layoutWidth - 20
  const height = width * 0.65
  const { colors } = useTheme()

  const widthPixels = useMemo(
    () => Math.min(1000, PixelRatio.getPixelSizeForLayoutSize(width)),
    [width]
  )

  const heightPixels = useMemo(
    () => Math.min(1000, PixelRatio.getPixelSizeForLayoutSize(height)),
    [height]
  )

  function renderFeaturePhoto() {
    if (group.headerImage) {
      return (
        <Image
          source={{
            uri: imageUrl(
              group.headerImage.name,
              `${widthPixels}x${heightPixels}`
            )
          }}
          style={{
            width: width - 4,
            flex: 1,
            borderRadius: 5,
            height: height - 4
          }}
        />
      )
    }

    return null
  }

  const setLayout = useCallback(({ nativeEvent: { layout: { width } } }) => {
    setLayoutWidth(width)
  }, [])

  return (
    <View
      onLayout={setLayout}
      style={{
        flex: 1,
        paddingBottom: 5,
        paddingHorizontal: 10
      }}
    >
      <GroupLink
        for={group}
        style={{
          marginTop: 27,
          width: width - 20
        }}
      >
        <View style={{ flex: 1 }}>
          <View
            style={[
              {
                borderRadius: 5,
                height,
                width,
                marginBottom: 10,
                padding: 2,
                backgroundColor: colors.separator
              }
            ]}
          >
            {renderFeaturePhoto()}
          </View>
          <Text
            numberOfLines={1}
            style={{
              fontWeight: 'bold',
              fontSize: 16
            }}
          >
            {group.name}
          </Text>
          <Text
            numberOfLines={1}
            style={{
              fontSize: 14,
              opacity: 0.7,
              flex: 1
            }}
          >
            {group.body}
          </Text>
        </View>
      </GroupLink>
    </View>
  )
}

export default createGroupListItemFragment(VerticalGroupListItem)
