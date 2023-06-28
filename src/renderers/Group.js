import { GroupInfoView } from './../views/groups/GroupInfoView'
import React from 'react'
import PostList from 'fragments/PostList'
import QueryRendererProxy from 'renderers/QueryRendererProxy'
import {
  createFragmentContainer,
  createPaginationContainer,
  graphql
} from 'react-relay'

export const createGroupFragmentContainer = (component = GroupInfoView) =>
  createFragmentContainer(component, {
    group: graphql`
      fragment Group_group on Group {
        id
        _id
        name
        permalink
        body
        tagline
        viewerIsAMember
        viewerIsOwner
        ...JoinButton_group
        headerImage {
          name
          height
          width
          url
        }
        user {
          id
          _id
          name
          username
          profilePictureName
        }
        createdAt
        updatedAt
      }
    `
  })

export const GroupFragmentContainer = createGroupFragmentContainer()

export default ({ id, api_key, ...props }) => {
  const itemProps = props
  return (
    <QueryRendererProxy
      query={graphql`
        query GroupRendererQuery($count: Int!, $cursor: String, $id: ID!) {
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
          discussions(first: $count, after: $cursor, byLatest: true)
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

export const GroupPostsPaginationContainer =
  createGroupPostsPaginationContainer()
