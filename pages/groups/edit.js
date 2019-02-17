import { StartCultureFragmentContainer } from './../../src/renderers/StartCulture'
import StartCulture from 'renderers/StartCulture'
import { withRouter } from 'next/router'
import { PageContainer } from './../../src/components/_partials/pageContainer'
import React, { Component } from 'react'
import { AppBar } from 'components/AppBar'
import withData from 'lib/withData'
import { PermissionDenied } from 'views/user/PermissionDenied'
import { graphql } from 'react-relay'

const query = graphql`
  query editCultureQuery($id: ID!) {
    ...Viewer_viewer
    group(id: $id) {
      viewer_is_owner
      user {
        _id
      }
      ...StartCulture_group
    }
  }
`

export default function EditGroup({ variables, group }) {
  if (!group.viewer_is_owner) return <PermissionDenied />
  return (
    <StartCultureFragmentContainer
      group={group}
      id={variables.id}
      editing_mode={true}
    />
  )
}

EditGroup = withData(EditGroup, { query, expect: ['viewer', 'group'] })
