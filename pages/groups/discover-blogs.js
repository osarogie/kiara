import { AppBar } from './../../src/components/AppBar'
import React from 'react'
import 'groups.scss'

import { PageContainer } from 'components/_partials/pageContainer'
import { GraphQuery } from 'components/GraphQuery'
import BrowserLink from 'components/BrowserLink'
import { groupLink } from 'helpers/links'

const query = `
{
  feed{
    groups {
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

export default function() {
  return (
    <PageContainer title="Discover Cultures - TheCommunity">
      <div
        className="container s__main__bg elevated bdr bdl bdb"
        style={{ borderTop: 0, marginBottom: 50 }}
      >
        <h3 className="s-head">
          <span className="underline">Discover Blogs</span>
        </h3>
        <GraphQuery
          query={query}
          render={({ data }) => (
            <div id="groups">
              {data.data.feed.groups.edges.map(({ node }) => (
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
          )}
        />
      </div>
    </PageContainer>
  )
}
