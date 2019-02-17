import React, { Component } from 'react'
import { FullPostFragmentContainer } from 'renderers/FullPost'
import { AppBar } from 'components/AppBar'
import withData from 'lib/withData'
import { graphql } from 'react-relay'

const query = graphql`
  query postQuery($id: ID!) {
    ...Viewer_viewer

    discussion(id: $id) {
      ...FullPost_discussion
    }
  }
`

export default function Post({ variables, discussion }) {
  return (
    <>
      <AppBar />
      <FullPostFragmentContainer id={variables.id} discussion={discussion} />
    </>
  )
}

Post = withData(Post, { query, expect: 'discussion' })
