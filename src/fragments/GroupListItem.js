import React, { useState, useCallback, useMemo } from 'react'
import { View, Image, PixelRatio } from 'react-native'
import { imageUrl } from '../utils'
import { Text, useTheme } from 'react-native-paper'
import { GroupLink } from '../links/GroupLink'
import { createFragmentContainer } from 'react-relay'

function GroupListItem({ group }) {
  const width = 200
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

  return (
    <View
      style={{
        paddingHorizontal: 10,
        flex: 1,
        paddingBottom: 5
      }}
    >
      <GroupLink
        for={group}
        style={{
          marginTop: 27
        }}
      >
        <>
          <View
            style={[
              {
                borderRadius: 5,
                height,
                width,
                padding: 2,
                backgroundColor: colors.separator,
                marginBottom: 10
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
              opacity: 0.7
            }}
          >
            {group.body}
          </Text>
        </>
      </GroupLink>
    </View>
  )
}

export const createGroupListItemFragment = Component =>
  createFragmentContainer(Component, {
    group: graphql`
      fragment GroupListItem_group on Group {
        id
        _id
        name
        permalink
        publicUrl
        # body
        headerImage {
          name
        }
      }
    `
  })

export default createGroupListItemFragment(GroupListItem)
