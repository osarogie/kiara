import React from 'react'

import { Title, Caption } from '@shoutem/ui/components/Text'
import { ImageBackground } from '@shoutem/ui/components/ImageBackground'
import { useTimeAgo } from '../../utils'

export default function FeaturedPost({ discussion }) {
  const { name, user, createdAt } = discussion

  const timeAgo = useTimeAgo(createdAt)

  return (
    <ImageBackground
      styleName="featured"
      source={{
        uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-4.png'
      }}
    >
      <Tile>
        <Title styleName="md-gutter-bottom">{name}</Title>
        <Caption>
          {user.name} {timeAgo}
        </Caption>
      </Tile>
    </ImageBackground>
  )
}
