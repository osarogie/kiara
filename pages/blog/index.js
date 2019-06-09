import { withRouter } from 'next/router'
import { PageContainer } from 'components/_partials/pageContainer'
import React, { Component } from 'react'
import { AppBar } from 'components/AppBar'
import { GroupInfoView } from 'views/groups/GroupInfoView'
import {
  createGroupFragmentContainer,
  GroupPostsPaginationContainer
} from 'renderers/Group'

import Col from 'antd/lib/col'
import Row from 'antd/lib/row'
import Anchor from 'antd/lib/anchor'
import withData from 'lib/withData'
import { graphql } from 'react-relay'

const query = graphql`
  query blogQuery($count: Int!, $cursor: String, $domain: String) {
    ...Viewer_viewer
    blog(domain: $domain) {
      id
      ...Group_group
      ...Group_discussionList
      # ...Group_userList
    }
  }
`
const variables = { count: 5 }

export default function Blog({ navigation, variables, blog, viewer }) {
  return (
    <PageContainer viewer={viewer}>
      <div className="inner">
        <GroupFragmentContainer group={blog} />
        <Row>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 16 }}
            lg={{ span: 12 }}
          >
            <GroupPostsPaginationContainer id={blog.id} discussionList={blog} />
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
    </PageContainer>
  )
}

const GroupFragmentContainer = createGroupFragmentContainer(GroupInfoView)
Group = withData(Group, { query, variables, expect: 'blog' })
