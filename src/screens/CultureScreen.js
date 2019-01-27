import { GroupInfoView } from './../views/groups/GroupInfoView'
import {
  createGroupFragmentContainer,
  GroupPostsPaginationContainer
} from './../renderers/Group'
import { QueryRendererProxy } from 'renderers/QueryRendererProxy'

import Col from 'antd/lib/col'
import Row from 'antd/lib/row'
import Anchor from 'antd/lib/anchor'

const query = graphql`
  query CultureScreenQuery($count: Int!, $cursor: String, $id: ID!) {
    group(id: $id) {
      ...Group_group
      ...Group_discussionList
      # ...Group_userList
    }
  }
`

export default function CultureScreen({ navigation, id }) {
  return (
    <div className="inner">
      <QueryRendererProxy
        query={query}
        variables={{ cursor: null, count: 5, id }}
        render={({ props }) => (
          <>
            <GroupFragmentContainer group={props.group} />
            <Row>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 16 }}
                lg={{ span: 12 }}
              >
                <GroupPostsPaginationContainer
                  id={id}
                  discussionList={props.group}
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
                <Anchor
                  offsetTop={50}
                  style={{ backgroundColor: 'transparent' }}
                />
              </Col>
            </Row>
          </>
        )}
      />
    </div>
  )
}

const GroupFragmentContainer = createGroupFragmentContainer(GroupInfoView)
