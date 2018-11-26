import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import Separator from 'components/Separator'
import Button from 'components/Button'
import JoinButton from 'fragments/JoinButton'
import styles from 'styles'
import colors from 'colors'
import Avatar from 'components/Avatar'
import QueryRendererProxy from 'renderers/QueryRendererProxy'
import { imageUrl } from 'utils'
import { graphql } from 'react-relay'
import { createGroupFragmentContainer } from 'renderers/Group'

class GroupInfo extends React.Component {
  openProfile = _ => this.props.openProfile(this.props.data.user)
  openWrite = _ => this.props.openWrite({ culture: this.props.data })
  openEditCulture = _ =>
    this.props.openStartCulture({
      id: this.props.data._id,
      editing_mode: true
    })

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
      )
    }

    return null
  }

  render() {
    const { data: group, night_mode } = this.props

    return (
      <View style={{ backgroundColor: '#fff' }}>
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

// GroupInfoFragmentContainer
const GroupInfoFragmentContainer = createGroupFragmentContainer(GroupInfo)

export default ({ id, api_key, ...props }) => {
  const itemProps = props
  return (
    <QueryRendererProxy
      query={graphql`
        query GroupInfoQuery($count: Int!, $cursor: String, $id: ID!) {
          group(id: $id) {
            ...Group
            ...Group_discussionList
            ...Group_userList
          }
        }
      `}
      variables={{ cursor: null, count: 5, id }}
      render={({ props }) => (
        <View style={styles.container}>
          <GroupInfoFragmentContainer data={props.group} {...itemProps} />
          {/* <GroupInfoUsersPaginationContainer
            id={id}
            userList={props.group}
            renderHeader={renderUsersHeader}
            itemProps={{ showGroupInfo: false, ...itemProps }}
          /> */}
        </View>
      )}
    />
  )
}
