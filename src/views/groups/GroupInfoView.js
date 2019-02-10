import { Constants } from 'constants'
import { userLink, editGroupLink, groupWriteLink } from 'helpers/links'
import { BrowserLink } from 'components/BrowserLink'
import { View, Image, Text } from 'react-native'
import Button from 'components/Button'
import JoinButton from 'fragments/JoinButton'
import Avatar from 'components/Avatar'
import { imageUrl } from 'utils'
import { withViewer } from 'lib/withViewer'
import { CustomHead } from 'components/_partials/CustomHead'

export function GroupInfoView({ group, hasViewer }) {
  function renderFeaturePhoto() {
    const { header_image } = group

    if (header_image) {
      return (
        <Image
          className="s__image"
          source={{ uri: imageUrl(header_image.name, `1000x1000`) }}
          style={{ height: 200, width: '100%', marginBottom: 10 }}
        />
      )
    }

    return null
  }

  function renderUserInfo() {
    return (
      <BrowserLink href={userLink(group.user)}>
        <Text
          className="s__content__main80"
          style={{
            flexDirection: 'row',
            marginBottom: 10,
            flex: 1,
            fontStyle: 'italic'
          }}
          numberOfLines={1}
        >
          <Text> by </Text>
          <Text className="s__content__main">{group.user.name}</Text>
        </Text>
      </BrowserLink>
    )
  }

  function renderOptions() {
    if (hasViewer && group.viewer_is_owner) {
      return (
        <BrowserLink href={editGroupLink(group)}>
          <Button
            title="Edit"
            textStyle={{ color: '#05f' }}
            buttonStyle={{
              borderRadius: 5,
              backgroundColor: '#0000',
              borderWidth: 1,
              borderColor: '#05f'
            }}
          />
        </BrowserLink>
      )
    }

    return <JoinButton group={group} />
  }

  function renderWriteButton() {
    const backgroundColor = '#0000'
    const color = '#05f'

    if (group.viewer_is_a_member) {
      return (
        <BrowserLink href={groupWriteLink(group)}>
          <Button
            title="Write Here"
            textStyle={{ color }}
            buttonStyle={{
              marginLeft: 10,
              backgroundColor,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: color
            }}
          />
        </BrowserLink>
      )
    }

    return null
  }

  return (
    <>
      <CustomHead
        description={group.body || group.tagline}
        title={`${group.name} - TheCommunity`}
      />
      {renderFeaturePhoto()}
      <View
        style={{
          padding: 30,
          flexDirection: 'row'
        }}
      >
        <View style={{ marginRight: 20, flex: 1 }}>
          <Text
            style={{
              marginRight: 10,
              marginTop: 10,
              fontWeight: 'bold',
              flex: 1,
              fontSize: 18
            }}
          >
            {group.name}
          </Text>
          {renderUserInfo()}
          <Text
            style={{
              marginBottom: 20,
              marginTop: 10,
              flex: 1,
              fontSize: 17
            }}
          >
            {group.body}
          </Text>
          <View style={{ flexDirection: 'row' }}>
            {renderOptions()}
            {renderWriteButton()}
          </View>
        </View>
        <Avatar
          medium
          rounded
          source={group.user}
          title={group.user.name}
          activeOpacity={0.7}
        />
      </View>
    </>
  )
}

GroupInfoView = withViewer(GroupInfoView)
