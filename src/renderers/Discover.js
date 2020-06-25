import { withMediaQuery } from './../lib/withMediaQuery'
import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import { VerticalGroupList } from 'fragments/VerticalGroupList'
import { VerticalUserList } from 'fragments/VerticalUserList'
import PostList from 'fragments/PostList'
import QueryRendererProxy from 'renderers/QueryRendererProxy'
import { createPaginationContainer, graphql } from 'react-relay'
import Icon from 'react-native-vector-icons/Feather'
import { WHITE } from 'ui'
import Tabs from 'antd/lib/tabs'
import { VerticalPaginationList } from '../relay/pagination/VerticalPaginationList'
import VerticalGroupListItem from '../fragments/VerticalGroupListItem'

const TabPane = Tabs.TabPane

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width
}

const DiscoverGroupsPaginationContainer = createPaginationContainer(
  VerticalPaginationList,
  {
    groupList: graphql`
      fragment Discover_groupList on Feed {
        groups(first: $count, after: $cursor, q: $q)
          @connection(key: "Discover_groups") {
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
      return props.groupList && props.groupList.groups
    },
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount
      }
    },
    getVariables(props, { count, cursor }, fragmentVariables) {
      // console.log(props)
      return {
        count,
        cursor,
        q: props.q
      }
    },
    variables: { cursor: null, q: '' },
    query: graphql`
      query DiscoverGroupsPaginationQuery(
        $count: Int!
        $cursor: String
        $q: String
      ) {
        feed {
          ...Discover_groupList
        }
      }
    `
  }
)

const DiscoverUsersPaginationContainer = createPaginationContainer(
  VerticalUserList,
  {
    userList: graphql`
      fragment Discover_userList on Feed {
        users(first: $count, after: $cursor, q: $q)
          @connection(key: "Discover_users") {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            node {
              id
              ...UserListItem_user
            }
          }
        }
      }
    `
  },
  {
    direction: 'forward',
    getConnectionFromProps(props) {
      return props.userList && props.userList.users
    },
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount
      }
    },
    getVariables(props, { count, cursor, size }, fragmentVariables) {
      return {
        count,
        cursor,
        q: props.q
      }
    },
    variables: { cursor: null, size: '30x39' },
    query: graphql`
      query DiscoverUsersPaginationQuery(
        $count: Int!
        $cursor: String
        $q: String
      ) {
        feed {
          ...Discover_userList
        }
      }
    `
  }
)

const DiscoverPostsPaginationContainer = createPaginationContainer(
  PostList,
  {
    discussionList: graphql`
      fragment Discover_discussionList on Feed {
        discussions(first: $count, after: $cursor, q: $q)
          @connection(key: "Discover_discussions") {
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
      return {
        ...prevVars,
        count: totalCount
      }
    },
    getVariables(props, { count, cursor }, fragmentVariables) {
      return {
        count,
        cursor,
        q: props.q
      }
    },
    variables: { cursor: null },
    query: graphql`
      query DiscoverPostsPaginationQuery(
        $count: Int!
        $cursor: String
        $q: String
      ) {
        feed {
          ...Discover_discussionList
        }
      }
    `
  }
)

class Cultures extends React.Component {
  shouldComponentUpdate = (p, s) => p.q !== this.props.q

  render() {
    const { q, ...props } = this.props
    return (
      <QueryRendererProxy
        query={graphql`
          query DiscoverCQuery($count: Int!, $cursor: String, $q: String) {
            feed {
              ...Discover_groupList
            }
          }
        `}
        variables={{ cursor: null, count: 10, q }}
        render={data => (
          <View style={{ flex: 1, backgroundColor: '#0000' }}>
            <DiscoverGroupsPaginationContainer
              propName="groupList"
              fieldName="groups"
              groupList={data.props.feed}
              q={q}
              numColumns={2}
              renderItem={({ item }) => (
                <VerticalGroupListItem group={item.node} />
              )}
            />
          </View>
        )}
      />
    )
  }
}

class Users extends React.Component {
  shouldComponentUpdate = (p, s) => p.q !== this.props.q

  render() {
    const { q, ...props } = this.props
    return (
      <QueryRendererProxy
        query={graphql`
          query DiscoverUQuery($count: Int!, $cursor: String, $q: String) {
            feed {
              ...Discover_userList
            }
          }
        `}
        variables={{ cursor: null, count: 10, q }}
        render={data => (
          <View style={{ flex: 1, backgroundColor: '#0000' }}>
            <DiscoverUsersPaginationContainer
              // renderHeader={_ => renderUserHeader(q)}
              userList={data.props.feed}
              q={q}
              itemProps={{ ...props }}
            />
          </View>
        )}
      />
    )
  }
}

class Stories extends React.Component {
  render() {
    const { q, ...props } = this.props

    if (!q)
      return (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            backgroundColor: '#0000'
          }}
        >
          <Icon
            name="search"
            size={100}
            color="#ddd"
            style={{ marginBottom: 10 }}
          />
          <Text style={{ color: '#ddd' }}>
            Use the search bar to find stories
          </Text>
        </View>
      )

    return (
      <QueryRendererProxy
        query={graphql`
          query DiscoverSQuery($count: Int!, $cursor: String, $q: String) {
            feed {
              ...Discover_discussionList
            }
          }
        `}
        variables={{ cursor: null, count: 10, q }}
        render={data => (
          <DiscoverPostsPaginationContainer
            discussionList={data.props.feed}
            q={q}
            highlight
            itemProps={{ ...props }}
          />
        )}
      />
    )
  }
}

///////

export default class Pager extends React.Component {
  render() {
    const { q, mediaMatch, ...props } = this.props

    return (
      <Tabs
        className="slim"
        style={{ marginTop: mediaMatch ? 50 : 0 }}
        tabPosition={mediaMatch ? 'left' : 'top'}
        animated={false}
        defaultActiveKey="1"
      >
        <TabPane tab="Discussions" key="1">
          <Stories q={q} {...props} />
        </TabPane>
        <TabPane tab="Groups" key="2">
          <Cultures q={q} {...props} />
        </TabPane>
        <TabPane tab="Users" key="3">
          <Users q={q} {...props} />
        </TabPane>
      </Tabs>
    )
  }
}

Pager = withMediaQuery(Pager)

const labelStyle = {
  flexDirection: 'row',
  alignItems: 'flex-end',
  padding: 20,
  paddingBottom: 8,
  fontSize: 15,
  // color: '#000',
  fontWeight: 'bold'
}

const styles = {
  white: { paddingVertical: 5 },
  tabbar: {
    // backgroundColor: '#fff'
  },
  tab: {
    // width: 'auto',
    height: 50
  },
  indicator: {
    backgroundColor: '#50f',
    height: 2
  },
  label: {
    // color: '#000',
    fontWeight: '400'
  }
}

const renderMatch = q => {
  if (q) {
    return (
      <Text style={{ fontSize: 13, color: '#777', fontStyle: 'italic' }}>
        {` that match `}
        <Text style={{ color: '#000' }}>{q}</Text>
      </Text>
    )
  }

  return null
}
