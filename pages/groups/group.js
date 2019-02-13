import { withRouter } from 'next/router'
import { Provider } from 'react-redux'
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
import withReduxStore from 'lib/with-redux-store'

const query = graphql`
  query groupQuery($count: Int!, $cursor: String, $id: ID!) {
    ...Viewer_viewer
    group(id: $id) {
      ...Group_group
      ...Group_discussionList
      # ...Group_userList
    }
  }
`
const variables = { count: 5 }

export default function Group({ navigation, variables, group, viewer }) {
  return (
    <PageContainer viewer={viewer}>
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
    </PageContainer>
  )
}

const GroupFragmentContainer = createGroupFragmentContainer(GroupInfoView)
Group = withData(Group, { query, variables, expect: 'group' })
