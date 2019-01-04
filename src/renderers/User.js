import { Constants } from './../constants'
import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import Head from 'next/head'
import Button from 'components/Button'
import PostList from 'fragments/PostList'
import GroupList from 'fragments/GroupList'
import FollowButton from 'fragments/FollowButton'
import styles from 'styles'
import Avatar from 'components/Avatar'
import QueryRendererProxy from 'renderers/QueryRendererProxy'
import { imageUrl } from 'utils'
import { withNavigation } from 'react-navigation'

import {
  createFragmentContainer,
  createPaginationContainer,
  graphql
} from 'react-relay'
import { connect } from 'react-redux'
import { navHelper } from 'helpers/getNavigation'
import { pluralize } from 'helpers/pluralize'

import Col from 'antd/lib/col'
import Row from 'antd/lib/row'

const mapStateToProps = state => ({
  night_mode: state.night_mode,
  current_user: state.user.user,
  loggedIn: state.user.loggedIn
})

// @withNavigation
class User extends React.Component {
  friendLabelStyle = { marginRight: 10 }
  friendValueStyle = { fontSize: 18 }

  get isSameUser() {
    if (!this.props.user) return false
    return this.props.current_user && this.props.user._id === Constants.user._id
  }

  // constructor(props) {
  //   super(props)
  //   // this.state = {
  //   //   isSameUser:
  //   //     props.loggedIn && props.user._id === props.current_user.id
  //   //       ? true
  //   //       : false
  //   // }
  // }

  openPicture = () => {
    navHelper(this).openProfilePicture(this.props.user)
  }

  renderFollowButton = _ =>
    this.isSameUser || (
      <FollowButton
        user={this.props.user}
        openLogin={this.props.openLogin}
        buttonStyle={{ marginVertical: 20 }}
      />
    )

  renderFriends() {
    const { user } = this.props

    return (
      <View style={[styles.fillRow, { marginTop: 20 }]}>
        {/* <View style={{ flex: 1 }}>
          <Text style={this.friendLabelStyle}>Posts</Text>
          <Text style={this.friendValueStyle}>{user.discussion_count}</Text>
        </View> */}
        {/* <View style={{ flex: 1 }}> */}
        <Text style={this.friendLabelStyle}>
          {user.follower_count} {pluralize(['Follower'], user.follower_count)}
        </Text>
        {/* <Text style={this.friendValueStyle}>{user.follower_count}</Text> */}
        {/* </View> */}
        {/* <View style={{ flex: 1 }}> */}
        <Text style={this.friendLabelStyle}>
          {user.following_count} Following
        </Text>
        {/* <Text style={this.friendValueStyle}>{user.following_count}</Text> */}
        {/* </View> */}
      </View>
    )
  }
  renderEditButton = _ =>
    !this.isSameUser || (
      <Button
        onPress={this.props.openEditProfile}
        title="Edit Profile"
        textStyle={{ color: '#05f' }}
        buttonStyle={{
          marginTop: 10,
          backgroundColor: 'transparent',
          borderRadius: 5,
          borderWidth: 1,
          borderColor: '#05f'
        }}
      />
    )

  render() {
    const { user } = this.props
    return (
      <>
        <Head>
          <title>
            {user.name} (@{user.username}) - TheCommunity
          </title>
        </Head>
        <div className="slim">
          <View
            style={{
              flex: 1,
              backgroundColor: '#fff0'
            }}
          >
            <View
              style={{
                padding: 20,
                flex: 1,
                flexDirection: 'row'
              }}
            >
              <View style={{ marginRight: 10, flex: 1 }}>
                <Text className="s__content__main" style={styles.title}>
                  {user.name}
                </Text>
                <Text className="s__content__main" style={{ flex: 1 }}>
                  {user.bio}
                </Text>
                {this.renderFriends()}
                <View style={{ flexDirection: 'row' }}>
                  {this.renderFollowButton()}
                  {/* {this.renderEditButton()} */}
                </View>
              </View>
              <Avatar
                width={100}
                rounded
                source={user}
                title={user.name}
                activeOpacity={0.7}
                disableLink
                onPress={this.openPicture}
                // showEditButton={this.isSameUser}
                // onEditPress={this.getPicture}
              />
            </View>
          </View>
        </div>
      </>
    )
  }
}
User = withNavigation(User)

// UserFragmentContainer
const UserFragmentContainer = createFragmentContainer(
  connect(mapStateToProps)(User),
  graphql`
    fragment User_user on User {
      id
      _id
      name
      bio
      username
      profile_picture_name
      discussion_count
      follower_count
      following_count
      ...FollowButton_user
    }
  `
)

export default ({ id, api_key, ...props }) => {
  const itemProps = props
  return (
    <QueryRendererProxy
      query={graphql`
        query UserQuery($count: Int!, $cursor: String, $id: ID!) {
          user(id: $id) {
            ...User_user
            ...User_discussionList
            ...User_groupList
          }
        }
      `}
      variables={{ cursor: null, count: 5, id }}
      render={({ error, props, retry }) => (
        <>
          <View style={[styles.container, { backgroundColor: '#3561b508' }]}>
            <UserFragmentContainer user={props.user} {...itemProps} />
            <View className="bdb" style={[styles.container]}>
              <div className="slim">
                <UserGroupsPaginationContainer
                  renderHeader={renderCultureHeader}
                  id={id}
                  groupList={props.user}
                  itemProps={itemProps}
                />
              </div>
              {renderPostsHeader()}
            </View>
          </View>
          <div className="slim">
            <Row>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 16 }}
                lg={{ span: 16 }}
              >
                <UserPostsPaginationContainer
                  discussionList={props.user}
                  itemProps={itemProps}
                  id={id}
                  renderHeader={_ => null}
                />
              </Col>

              <Col
                xs={{ span: 0 }}
                sm={{ span: 0 }}
                md={{ span: 8 }}
                lg={{ span: 8 }}
              >
                <div className="side" />
              </Col>
            </Row>
          </div>
        </>
      )}
    />
  )
}
const renderCultureHeader = _ => (
  <Text
    style={{
      fontSize: 15,
      fontWeight: 'bold',
      paddingTop: 17,
      paddingLeft: 20
    }}
  >
    Cultures
  </Text>
)

const renderPostsHeader = _ => (
  <Text
    style={{
      fontSize: 17,
      marginTop: 50,
      fontWeight: 'bold',
      paddingLeft: 40,
      paddingBottom: 8
    }}
  >
    <div className="slim">Posts</div>
  </Text>
)
// PAGINATION CONTAINERS

const UserPostsPaginationContainer = createPaginationContainer(
  PostList,
  {
    discussionList: graphql`
      fragment User_discussionList on User {
        discussions(first: $count, after: $cursor, by_latest: true)
          @connection(key: "User_discussions") {
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
    getVariables(props, { count, cursor }, fragmentVariables) {
      return { count, cursor, id: props.id }
    },
    variables: { cursor: null },
    query: graphql`
      query UserPostsPaginationQuery($count: Int!, $cursor: String, $id: ID!) {
        user(id: $id) {
          ...User_discussionList
        }
      }
    `
  }
)

const UserGroupsPaginationContainer = createPaginationContainer(
  GroupList,
  {
    groupList: graphql`
      fragment User_groupList on User {
        groups_in(first: $count, after: $cursor)
          @connection(key: "User_groups_in") {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            node {
              id
              ...GroupListItem_group
            }
          }
        }
      }
    `
  },
  {
    direction: 'forward',
    getConnectionFromProps(props) {
      return props.groupList && props.groupList.groups_in
    },
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount
      }
    },
    getVariables(props, { count, cursor }, fragmentVariables) {
      return { count, cursor, id: props.id }
    },
    variables: { cursor: null },
    query: graphql`
      query UserGroupsPaginationQuery($count: Int!, $cursor: String, $id: ID!) {
        user(id: $id) {
          ...User_groupList
        }
      }
    `
  }
)
