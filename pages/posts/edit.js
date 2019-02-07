import React, { Component } from 'react'
import { FullPostFragmentContainer } from 'renderers/FullPost'
import { AppBar } from 'components/AppBar'
import withData from 'lib/withData'

const query = graphql`
  query editPostQuery($id: ID!) {
    ...Viewer_viewer @relay(mask: false)

    discussion(id: $id) {
      ...FullPost_discussion
    }
  }
`

export default function EditPost({ variables, discussion }) {
  return (
    <>
      <AppBar />
      <FullPostFragmentContainer id={variables.id} discussion={discussion} />
    </>
  )
}

Post = withData(Post, { query, expect: 'discussion' })
