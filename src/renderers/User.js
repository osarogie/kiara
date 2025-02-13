import React from 'react'
import { View, Text } from 'react-native'
import PostList from 'fragments/PostList'
import GroupList from 'fragments/GroupList'
import QueryRendererProxy from 'renderers/QueryRendererProxy'

import {
  createFragmentContainer,
  createPaginationContainer,
  graphql
} from 'react-relay'

import Col from 'antd/lib/col'
import Row from 'antd/lib/row'
import { UserInfoView } from 'views/user/UserInfoView'
import { userQuery } from '../relay/query/userQuery'

// UserFragmentContainer
const createUserFragmentContainer = (Component = UserInfoView) =>
  createFragmentContainer(Component, {
    user: graphql`
      fragment User_user on User {
        id
        _id
        name
        bio
        username
        profilePicture(size: 250)
        profilePictureName
        discussionCount
        followerCount
        followingCount
        isViewer
        ...FollowButton_user
      }
    `
  })
export const UserFragmentContainer = createUserFragmentContainer()

export default function User({ id, api_key, ...props }) {
  const itemProps = props
  return (
    <QueryRendererProxy
      query={userQuery}
      label="user"
      variables={{ cursor: null, count: 5, id }}
      render={({ error, props, retry }) => (
        <>
          <div className="user-header">
            <UserFragmentContainer user={props.user} {...itemProps} />
            <View className="bdb">
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
                  renderHeader={(_) => null}
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
const renderCultureHeader = (_) => (
  <Text
    style={{
      fontSize: 15,
      fontWeight: 'bold',
      paddingTop: 17,
      paddingLeft: 20
    }}
  >
    Blogs
  </Text>
)

const renderPostsHeader = (_) => (
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
          discussions(first: $count, after: $cursor, byLatest: true)
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
          groupsIn(first: $count, after: $cursor)
          @connection(key: "User_groupsIn") {
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
        return props.groupList && props.groupList.groupsIn
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
