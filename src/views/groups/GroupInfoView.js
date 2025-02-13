import { NewGroupDiscussionLink } from './../../links/NewGroupDiscussionLink'
import { EditGroupLink } from './../../links/EditGroupLink'
import { View, Image, Text } from 'react-native'
import Button from 'components/Button'
import JoinButton from 'fragments/JoinButton'
import Avatar from 'components/Avatar'
import { imageUrl } from 'utils'
import { withViewer } from 'lib/withViewer'
import { CustomHead } from 'components/_partials/CustomHead'
import { UserLink } from '../../links/UserLink'

export function GroupInfoView({ group, hasViewer }) {
  function renderFeaturePhoto() {
    const { headerImage } = group

    if (headerImage) {
      return (
        <div className="s__image">
          <Image
            source={{ uri: imageUrl(headerImage.name, '1000x200') }}
            style={{ height: 200, width: '100%', marginBottom: 10 }}
          />
        </div>
      )
    }

    return null
  }

  function renderUserInfo() {
    return (
      <UserLink for={group.user}>
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
      </UserLink>
    )
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
              fontSize: 17
            }}
          >
            {group.tagline || group.body}
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
