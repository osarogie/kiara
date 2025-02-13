import { View, Image, Text } from 'react-native'
import Button from 'components/Button'
import JoinButton from 'fragments/JoinButton'
import { imageUrl, toISODate } from 'utils'
import { withViewer } from 'lib/withViewer'
import { CustomHead } from 'components/_partials/CustomHead'
import { useState } from 'react'
import { EditGroupLink } from '../../links/EditGroupLink'
import { NewGroupDiscussionLink } from '../../links/NewGroupDiscussionLink'

export function BlogInfoView({ group, hasViewer }) {
  const [coverHeight, setCoverHeight] = useState(0)

  function onLayout({
    nativeEvent: {
      layout: { width }
    }
  }) {
    setCoverHeight(width * 0.3)
  }

  function renderFeaturePhoto() {
    const { headerImage } = group

    if (headerImage) {
      return (
        <Image
          onLayout={onLayout}
          className="s__image"
          source={{ uri: imageUrl(headerImage.name, '1000x400') }}
          style={{ width: '100%', marginBottom: 10, height: coverHeight }}
        />
      )
    }

    return null
  }

  function renderOptions() {
    if (hasViewer && group.viewerIsOwner) {
      return (
        <EditGroupLink for={group}>
          <Button
            title="Edit"
            textStyle={{ color: '#05f' }}
            buttonStyle={{
              borderRadius: 20,
              backgroundColor: '#0000',
              borderWidth: 2,
              borderColor: '#05f'
            }}
          />
        </EditGroupLink>
      )
    }

    return <JoinButton group={group} />
  }

  function renderWriteButton() {
    const backgroundColor = '#0000'
    const color = '#05f'

    if (group.viewerIsAMember) {
      return (
        <NewGroupDiscussionLink for={group}>
          <Button
            title="Write Here"
            textStyle={{ color }}
            buttonStyle={{
              marginLeft: 10,
              backgroundColor,
              borderRadius: 20,
              borderWidth: 2,
              borderColor: color
            }}
          />
        </NewGroupDiscussionLink>
      )
    }

    return null
  }

  let title = group.name
  if (group.body || group.tagline)
    title = `${title} — ${group.body || group.tagline}`

  return (
    <>
      <CustomHead
        description={group.body || group.tagline}
        title={title}
        url={group.publicUrl}
        site_name={group.name}
        image={group.headerImage}
        icon={group.headerImage}
        dateModified={toISODate(group.updatedAt)}
        dateCreated={toISODate(group.createdAt)}
      />
      {renderFeaturePhoto()}
      <div className="inner" style={{ paddingLeft: 20 }}>
        <View>
          <Text
            style={{
              marginRight: 10,
              marginTop: 10,
              fontWeight: 'bold',
              fontSize: 23
            }}
          >
            {group.name}
          </Text>
          <Text
            style={{
              marginBottom: 20,
              marginTop: 10,
              fontSize: 17
            }}
          >
            {group.tagline || group.body}
          </Text>
          <View style={{ marginRight: 20, marginBottom: 30 }}>
            <View style={{ flexDirection: 'row' }}>
              {renderOptions()}
              {renderWriteButton()}
            </View>
          </View>
        </View>
      </div>
    </>
  )
}

BlogInfoView = withViewer(BlogInfoView)
