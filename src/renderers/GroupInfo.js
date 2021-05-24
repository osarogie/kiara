import { GroupInfoView } from './../views/groups/GroupInfoView'
import React from 'react'
import { View } from 'react-native'
import QueryRendererProxy from 'renderers/QueryRendererProxy'
import { graphql } from 'react-relay'
import { createGroupFragmentContainer } from 'renderers/Group'

// GroupInfoFragmentContainer
const GroupInfoFragmentContainer = createGroupFragmentContainer(GroupInfoView)

export default ({ id, api_key, ...props }) => {
  const itemProps = props
  return (
    <QueryRendererProxy
      query={graphql`
        query GroupInfoQuery($count: Int!, $cursor: String, $id: ID!) {
          group(id: $id) {
            ...Group_group
            ...Group_discussionList
            # ...Group_userList
          }
        }
      `}
      variables={{ cursor: null, count: 5, id }}
      render={({ props }) => (
        <View style={{ margin: 15 }}>
          <GroupInfoFragmentContainer group={props.group} {...itemProps} />
          {/* <GroupInfoUsersPaginationContainer
            id={id}
            userList={props.group}
            renderHeader={renderUsersHeader}
            itemProps={{ showGroupInfo: false, ...itemProps }}
          /> */}
        </View>
      )}
    />
  )
}
