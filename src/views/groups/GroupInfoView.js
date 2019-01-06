import { Constants } from 'constants'
import { userLink, editGroupLink } from 'helpers/links'
import { BrowserLink } from 'components/BrowserLink'
import { groupWriteLink } from 'helpers/links'
import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import Button from 'components/Button'
import JoinButton from 'fragments/JoinButton'
import Avatar from 'components/Avatar'
import { imageUrl } from 'utils'

export class GroupInfoView extends React.Component {
  renderFeaturePhoto() {
    // console.log(this.props)
    const { header_image } = this.props.data

    if (header_image) {
      // const height = (header_image.height / header_image.width) * width
      const height = 200
      return (
        <div className="feature-photo-wrap">
          <Image
            source={{
              uri: imageUrl(header_image.name, `1000x1000`)
            }}
            style={{
              height: 200,
              width: '100%'
            }}
          />
          <style jsx>
            {`
              .feature-photo-wrap {
                height: 200px;
                background-color: #eee;
                border-radius: 5px;
                margin-bottom: 10px;
              }
            `}
          </style>
        </div>
      )
    }
    return null
  }

  renderUserInfo() {
    const { user } = this.props.data

    return (
      <BrowserLink href={userLink(user)}>
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
          <Text className="s__content__main">{user.name}</Text>
        </Text>
      </BrowserLink>
    )
  }

  renderOptions() {
    const group = this.props.data
    const { current_user } = this.props

    if (Constants.user && Constants.user._id === group.user._id) {
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

    return <JoinButton group={group} openLogin={this.props.openLogin} />
  }

  renderWriteButton() {
    const group = this.props.data
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

  render() {
    const { data: group, night_mode } = this.props

    return (
      <View>
        {this.renderFeaturePhoto()}
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
            {this.renderUserInfo()}
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
              {this.renderOptions()}
              {this.renderWriteButton()}
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
      </View>
    )
  }
}
