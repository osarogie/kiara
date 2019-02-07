import { graphql } from 'graphql.js'
import { AppBar } from './../../src/components/AppBar'
import React from 'react'
import 'groups.scss'

import { PageContainer } from 'components/_partials/pageContainer'
import { GraphQuery } from 'components/GraphQuery'
import BrowserLink from 'components/BrowserLink'
import { groupLink } from 'helpers/links'
import withData from 'lib/withData'

const query = graphql`
  query discoverBlogsQuery($count: Int!, $cursor: String) {
    feed {
      groups(first: $count, after: $cursor) {
        edges {
          node {
            id
            name
            body
            tagline
            permalink
          }
        }
      }
    }
  }
`

const variables = { count: 50, cursor: null }

export default function DiscoverBlogs({ feed }) {
  return (
    <PageContainer title="Discover Cultures - TheCommunity">
      <div
        className="container s__main__bg elevated bdr bdl bdb"
        style={{ borderTop: 0, marginBottom: 50 }}
      >
        <h3 className="s-head">
          <span className="underline">Discover Blogs</span>
        </h3>
        <div id="groups">
          {feed.groups.edges.map(({ node }) => (
            <div id="control" className="control" key={node.id}>
              <BrowserLink className="u" href={groupLink(node)}>
                <div className="l-group bdb">
                  <h3 style={{ margin: 0, fontSize: 20 }} fontSize="20px">
                    {node.name}
                  </h3>
                  <div className="s__content__main80">
                    <span>{node.tagline || node.body}</span>
                  </div>
                </div>
              </BrowserLink>
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  )
}

DiscoverBlogs = withData(DiscoverBlogs, { query, variables })
