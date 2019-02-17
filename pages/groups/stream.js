import { GroupInfoView } from './../../src/views/groups/GroupInfoView'
import {
  GroupPostsPaginationContainer,
  createGroupFragmentContainer
} from './../../src/renderers/Group'
import React, { Component } from 'react'
import { AlternateMenu } from 'components/AlternateMenu'
import Appbar from 'components/AppBar'
import { groups } from 'data/groups'
import withData from 'lib/withData'

import Col from 'antd/lib/col'
import Row from 'antd/lib/row'
import Anchor from 'antd/lib/anchor'
import { graphql } from 'react-relay'

const query = graphql`
  query streamQuery($count: Int!, $cursor: String, $id: ID!) {
    group(id: $id) {
      ...Group_group
      ...Group_discussionList
      # ...Group_userList
    }
    ...Viewer_viewer
  }
`
const variables = { cursor: null, count: 5 }
const GroupFragmentContainer = createGroupFragmentContainer(GroupInfoView)

export default function Stream({ variables, group }) {
  return (
    <>
      <Appbar />
      <AlternateMenu list={groups.data.feed.groups.edges} />

      <div className="inner">
        <GroupFragmentContainer group={group} />
        <Row>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 16 }}
            lg={{ span: 12 }}
          >
            <GroupPostsPaginationContainer
              id={variables.id}
              discussionList={group}
            />
          </Col>

          <Col
            xs={{ span: 0 }}
            sm={{ span: 0 }}
            md={{ span: 0 }}
            lg={{ span: 4 }}
          />
          <Col
            xs={{ span: 0 }}
            sm={{ span: 0 }}
            md={{ span: 8 }}
            lg={{ span: 8 }}
          >
            <Anchor offsetTop={50} style={{ backgroundColor: 'transparent' }} />
          </Col>
        </Row>
      </div>
    </>
  )
}

Stream = withData(Stream, { query, variables })
