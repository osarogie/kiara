import React from 'react'
import { createGroupFragmentContainer } from 'renderers/Group'

import { View, Image, Text, PixelRatio, TouchableOpacity } from 'react-native'
import Button from 'components/Button'
import JoinButton from 'fragments/JoinButton'
import styles from 'styles'
import colors from 'colors'
import Avatar from 'components/Avatar'
import { imageUrl } from 'utils'
import { devLog } from 'lib/devLog'
import { BrowserLink } from 'components/BrowserLink'
import { groupWriteLink } from 'helpers/links'

export class FullWidthGroupInfo extends React.Component {
  state = { width: 0, height: 0 }
  openProfile = _ => this.props.openProfile(this.props.data.user)
  openWrite = _ => this.props.openWrite({ culture: this.props.data })
  openEditCulture = _ =>
    this.props.openStartCulture({
      id: this.props.data._id,
      editing_mode: true
    })
  onLayout = ({
    nativeEvent: {
      layout: { width, height }
    }
  }) => {
    this.setState({ width, height })
    devLog({ width, height })
  }
  renderFeaturePhoto() {
    // console.log(this.props)
    const { header_image } = this.props.data

    if (header_image) {
      const { width } = this.state
      const height = (header_image.height / header_image.width) * width
      var f_width = PixelRatio.getPixelSizeForLayoutSize(width)
      var f_height = PixelRatio.getPixelSizeForLayoutSize(height)
      if (f_width > 1000 || f_height > 1000) {
        f_width = 1000
        f_height = 1000
      }
      // console.log(imageUrl(header_image.name, `${f_width}x${f_height}`))
      return (
        <View style={[styles.featurePhotoWarp, { height, width, flex: 1 }]}>
          <Image
            source={{
              uri: imageUrl(header_image.name, `${f_width}x${f_height}`)
            }}
            style={{
              height,
              width
            }}
          />
        </View>
      )
    }
    return null
  }

  renderUserInfo() {
    const { user } = this.props.data

    return (
      <TouchableOpacity
        style={{ flex: 1, flexDirection: 'row' }}
        onPress={this.openProfile}
      >
        <Text
          style={{
            flexDirection: 'row',
            marginBottom: 10,
            flex: 1,
            fontStyle: 'italic'
          }}
          numberOfLines={1}
        >
          <Text> by </Text>
          <Text style={{ color: '#000' }}>{user.name}</Text>
        </Text>
      </TouchableOpacity>
    )
  }

  renderOptions() {
    const group = this.props.data
    const { current_user } = this.props

    if (current_user._id === group.user._id) {
      return (
        <Button
          onPress={this.openEditCulture}
          title="Edit"
          textStyle={{ color: '#05f' }}
          buttonStyle={{
            backgroundColor: '#fff',
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#05f'
          }}
        />
      )
    }

    return <JoinButton group={group} openLogin={this.props.openLogin} />
  }

  renderWriteButton() {
    const group = this.props.data
    const backgroundColor = '#fff'
    const color = '#05f'

    if (group.viewer_is_a_member) {
      return (
        <BrowserLink href={groupWriteLink(group)}>
          <Button
            onPress={this.openWrite}
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
      <View onLayout={this.onLayout} style={{ backgroundColor: '#fff' }}>
        {this.renderFeaturePhoto()}
        <View
          style={{
            padding: 30,
            flexDirection: 'row',
            backgroundColor: colors.get('white', night_mode)
          }}
        >
          <View style={{ marginRight: 20, flex: 1 }}>
            <Text
              style={{
                marginRight: 10,
                marginTop: 10,
                color: '#000',
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
                color: '#000',
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
            onPress={this.openProfile}
            title={group.user.name}
            activeOpacity={0.7}
          />
        </View>
      </View>
    )
  }
}

FullWidthGroupInfo = createGroupFragmentContainer(FullWidthGroupInfo)
