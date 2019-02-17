import { GroupInfoView } from './../views/groups/GroupInfoView'
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
import { devLog } from 'lib/devLog'
import { BrowserLink } from 'components/BrowserLink'
import { groupWriteLink } from 'helpers/links'

export const createGroupFragmentContainer = (component = GroupInfoView) =>
  createFragmentContainer(
    component,
    graphql`
      fragment Group_group on Group {
        id
        _id
        name
        permalink
        body
        tagline
        viewer_is_a_member
        viewer_is_owner
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
            ...Group_group
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
          discussions(first: $count, after: $cursor, by_latest: true)
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
