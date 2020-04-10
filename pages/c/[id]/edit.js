import { StartCultureFragmentContainer } from '../../../src/renderers/StartCulturee'
import React from 'react'
import withData from 'lib/withData'
import { PermissionDenied } from 'views/user/PermissionDenied'
import { editCultureQuery } from '../../../src/relay/query/editCultureQueryery'

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
