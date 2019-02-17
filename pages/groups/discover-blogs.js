import { Avatar } from 'components/Avatar'
import { StyleSheet, View } from 'react-native-web'
import { graphql } from 'react-relay'
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
    ...Viewer_viewer
    feed {
      groups(first: $count, after: $cursor, by_latest: true) {
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
          {feed.groups.edges.map(({ node }) => {
            const source = {
              name: node.name,
              profile_picture: node.header_image && node.header_image.url,
              username: `/c/${node.permalink}`
            }
            return (
              <View style={styles.row} key={node.id}>
                <Avatar width={100} radius={10} source={source} />
                <div id="control" className="control">
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
              </View>
            )
          })}
        </div>
      </div>
    </PageContainer>
  )
}

DiscoverBlogs = withData(DiscoverBlogs, { query, variables })

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginBottom: 20,
    marginLeft: 20
  }
})
