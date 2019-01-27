import { GroupInfoView } from './../views/groups/GroupInfoView'
import { Constants } from './../constants'
import { userLink, editGroupLink } from './../helpers/links'
import { BrowserLink } from './../components/BrowserLink'
import { groupWriteLink } from 'helpers/links'
import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import Separator from 'components/Separator'
import Button from 'components/Button'
import JoinButton from 'fragments/JoinButton'
import styles from 'styles'
import colors from 'colors'
import Avatar from 'components/Avatar'
import QueryRendererProxy from 'renderers/QueryRendererProxy'
import { imageUrl } from 'utils'
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
        <View style={styles.container}>
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
