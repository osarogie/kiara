import { userLink } from './../helpers/links'
import React from 'react'
import { View, Image, Text, PixelRatio, TouchableOpacity } from 'react-native'
import Button from 'components/Button'
import PostList from 'fragments/PostList'
import JoinButton from 'fragments/JoinButton'
import UserList from 'fragments/UserList'
import styles from 'styles'
import colors from 'colors'
import Avatar from 'components/Avatar'
import QueryRendererProxy from 'renderers/QueryRendererProxy'
import { imageUrl } from 'utils'
import {
  createFragmentContainer,
  createPaginationContainer,
  graphql
} from 'react-relay'
import { connect } from 'react-redux'
import { devLog } from 'lib/devLog'
import { BrowserLink } from 'components/BrowserLink'
import { groupWriteLink } from 'helpers/links'

const mapStateToProps = state => ({
  night_mode: state.night_mode,
  current_user: state.user.user
})

class Group extends React.Component {
  state = { width: 0, height: 0 }
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
      <BrowserLink href={userLink(user)}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
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
        </View>
      </BrowserLink>
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
            backgroundColor: '#0000',
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
      <View onLayout={this.onLayout}>
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
            title={group.user.name}
            activeOpacity={0.7}
          />
        </View>
      </View>
    )
  }
}

export const createGroupFragmentContainer = (component = Group) =>
  createFragmentContainer(
    connect(mapStateToProps)(component),
    graphql`
      fragment Group on Group {
        id
        _id
        name
        permalink
        body
        viewer_is_a_member
        ...JoinButton_group
        header_image {
          name
          height
          width
        }
        user {
          id
          _id
          name
          username
          profile_picture_name
        }
      }
    `
  )

export const GroupFragmentContainer = createGroupFragmentContainer()

export default ({ id, api_key, ...props }) => {
  const itemProps = props
  return (
    <QueryRendererProxy
      query={graphql`
        query GroupQuery($count: Int!, $cursor: String, $id: ID!) {
          group(id: $id) {
            ...Group
            ...Group_discussionList
            # ...Group_userList
          }
        }
      `}
      variables={{ cursor: null, count: 5, id }}
      render={({ props }) => (
        <GroupPostsPaginationContainer
          id={id}
          discussionList={props.group}
          itemProps={itemProps}
          // renderHeader={() => (
          //   <View style={styles.container}>
          //     <GroupFragmentContainer data={props.group} {...itemProps} />
          //     {/* <Separator /> */}
          //     {/* <GroupUsersPaginationContainer
          //       id={id}
          //       userList={props.group}
          //       renderHeader={renderUsersHeader}
          //       itemProps={{ showGroupInfo: false, ...itemProps }}
          //     /> */}
          //   </View>
          // )}
        />
      )}
    />
  )
}
// PAGINATION CONTAINERS

export const createGroupPostsPaginationContainer = (Component = PostList) =>
  createPaginationContainer(
    Component,
    {
      discussionList: graphql`
        fragment Group_discussionList on Group {
          discussions(first: $count, after: $cursor)
            @connection(key: "Group_discussions") {
            pageInfo {
              hasNextPage
              endCursor
            }
            edges {
              node {
                id
                ...PostListItem_discussion
              }
            }
          }
        }
      `
    },
    {
      direction: 'forward',
      getConnectionFromProps(props) {
        return props.discussionList && props.discussionList.discussions
      },
      getFragmentVariables(prevVars, totalCount) {
        return { ...prevVars, count: totalCount }
      },
      getVariables(props, { count, cursor }) {
        return { count, cursor, id: props.id }
      },
      variables: { cursor: null },
      query: graphql`
        query GroupPostsPaginationQuery(
          $count: Int!
          $cursor: String
          $id: ID!
        ) {
          group(id: $id) {
            ...Group_discussionList
          }
        }
      `
    }
  )

export const GroupPostsPaginationContainer = createGroupPostsPaginationContainer()
