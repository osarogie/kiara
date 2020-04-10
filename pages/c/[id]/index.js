import { PageContainer } from 'components/_partials/pageContainer'
import React from 'react'
import { GroupInfoView } from 'views/groups/GroupInfoView'
import {
  createGroupFragmentContainer,
  GroupPostsPaginationContainer
} from 'renderers/Group'

import Col from 'antd/lib/col'
import Row from 'antd/lib/row'
import Anchor from 'antd/lib/anchor'
import withData from 'lib/withData'
import { groupQuery } from '../../../src/relay/query/groupQuery'

const variables = { count: 5 }

export default function Group({ variables, group, viewer }) {
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
Group = withData(Group, { query: groupQuery, variables, expect: 'group' })
