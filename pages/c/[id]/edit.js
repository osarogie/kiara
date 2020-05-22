import { StartCultureFragmentContainer } from '../../../src/renderers/StartCulture'
import React from 'react'
import withData from 'lib/withData'
import { PermissionDenied } from 'views/user/PermissionDenied'
import { editCultureQuery } from '../../../src/relay/query/editCultureQuery'

export default function EditGroup({ variables, group }) {
  if (!group.viewerIsOwner) return <PermissionDenied />
  return (
    <StartCultureFragmentContainer
      group={group}
      id={variables.id}
      editing_mode={true}
    />
  )
}

EditGroup = withData(EditGroup, {
  query: editCultureQuery,
  expect: ['viewer', 'group']
})
