import { StartCultureFragmentContainer } from './../../src/renderers/StartCulture'
import StartCulture from 'renderers/StartCulture'
import { withRouter } from 'next/router'
import { PageContainer } from './../../src/components/_partials/pageContainer'
import React, { Component } from 'react'
import { AppBar } from 'components/AppBar'
import withData from 'lib/withData'

const query = graphql`
  query editCultureQuery($id: ID!) {
    ...Viewer_viewer @relay(mask: false)
    group(id: $id) {
      ...StartCulture_group
    }
  }
`

export default function EditGroup({ variables, group }) {
  return (
    <StartCultureFragmentContainer
      group={group}
      id={variables.id}
      editing_mode={true}
    />
  )
}

EditGroup = withData(EditGroup, { query, expect: 'group' })
