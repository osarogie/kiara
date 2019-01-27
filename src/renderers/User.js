import { BrowserLink } from 'components/BrowserLink'
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
import { editProfileLink } from 'helpers/links'
import { UserInfoView } from 'views/user/UserInfoView'

const mapStateToProps = state => ({
  current_user: state.user.user,
  loggedIn: state.user.loggedIn
})

// UserFragmentContainer
const createUserFragmentContainer = (Component = UserInfoView) =>
  createFragmentContainer(
    Component,
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
        is_viewer
        ...FollowButton_user
      }
    `
  )
export const UserFragmentContainer = createUserFragmentContainer()

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
      label="user"
      variables={{ cursor: null, count: 5, id }}
      render={({ error, props, retry }) => (
        <>
          <div className="user-header">
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
          </div>
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

export const createUserPostsPaginationContainer = (Component = PostList) =>
  createPaginationContainer(
    Component,
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
        query UserPostsPaginationQuery(
          $count: Int!
          $cursor: String
          $id: ID!
        ) {
          user(id: $id) {
            ...User_discussionList
          }
        }
      `
    }
  )
export const UserPostsPaginationContainer = createUserPostsPaginationContainer()
export const createUserGroupsPaginationContainer = (Component = GroupList) =>
  createPaginationContainer(
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
        query UserGroupsPaginationQuery(
          $count: Int!
          $cursor: String
          $id: ID!
        ) {
          user(id: $id) {
            ...User_groupList
          }
        }
      `
    }
  )
export const UserGroupsPaginationContainer = createUserGroupsPaginationContainer()
