import { View, Text } from 'react-native'
import Col from 'antd/lib/col'
import Row from 'antd/lib/row'
import {
  UserGroupsPaginationContainer,
  UserPostsPaginationContainer,
  UserFragmentContainer
} from './../../src/renderers/User'
import { User } from 'renderers/User'
import React, { Component } from 'react'
import { AppBar } from 'components/AppBar'
import Affix from 'antd/lib/affix'
import withData from 'lib/withData'
import styles from 'styles'
import { graphql } from 'react-relay'

const query = graphql`
  query userQuery($count: Int!, $cursor: String, $id: ID!) {
    ...Viewer_viewer

    user(id: $id) {
      ...User_user
      ...User_discussionList
      ...User_groupList
    }
  }
`

const variables = { cursor: null, count: 5 }

export default function UserPage(props) {
  const { id } = props.variables
  return (
    <>
      <div>
        <Affix>
          <AppBar className="elevated" />
        </Affix>
      </div>
      <div className="user-header">
        <UserFragmentContainer user={props.user} />
        <View className="bdb" style={[styles.container]}>
          <div className="slim">
            <UserGroupsPaginationContainer
              renderHeader={renderCultureHeader}
              id={id}
              groupList={props.user}
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
            md={{ span: 20 }}
            lg={{ span: 20 }}
          >
            <UserPostsPaginationContainer
              discussionList={props.user}
              id={id}
              renderHeader={_ => null}
            />
          </Col>

          <Col
            xs={{ span: 0 }}
            sm={{ span: 0 }}
            md={{ span: 4 }}
            lg={{ span: 4 }}
          >
            <div className="side" />
          </Col>
        </Row>
      </div>
    </>
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

UserPage = withData(UserPage, { query, variables, expect: 'user' })
