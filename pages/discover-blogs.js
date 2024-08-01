import { View } from 'react-native'
import React from 'react'

import { PageContainer } from 'components/_partials/pageContainer'
import withData from 'lib/withData'
import { discoverBlogsQuery } from '../src/relay/query/discoverBlogsQuery'
import { createGroupsPagination } from '../src/relay/pagination/GroupsPagination'
import VerticalGroupListItem from '../src/fragments/VerticalGroupListItem'

const variables = { count: 50, cursor: null }

const GroupsPaginationContainer = createGroupsPagination()

export default function DiscoverBlogs({ feed }) {
  return (
    <PageContainer title="Blogs on TheCommunity">
      <div
        className="container s__main__bg elevated bdr bdl bdb"
        style={{ borderTop: 0, marginBottom: 50, width: '100%' }}
      >
        <h3 className="s-head">
          <h2 className="underline">Blogs</h2>
        </h3>
        <div id="groups">
          <View style={{ flex: 1 }}>
            <GroupsPaginationContainer
              propName="groupList"
              fieldName="groups"
              groupList={feed}
              numColumns={3}
              renderItem={({ item }) => (
                <VerticalGroupListItem group={item.node} />
              )}
            />
          </View>
          {/* {feed.groups.edges.map(({ node }) => {
            const source = {
              name: node.name,
              profilePicture:
                node.headerImage &&
                node.headerImage.name &&
                imageUrl(node.headerImage.name, '100x100')
            }
            return (
              <div id="control" key={node.id} className="control">
                <GroupLink className="u" for={node}>
                  <div className="l-group bdb">
                    <View style={styles.row}>
                      <Avatar
                        disableLink
                        width={50}
                        rounded
                        radius={20}
                        source={source}
                      />
                      <div className="ginfo">
                        <h3 style={{ margin: 0, fontSize: 20 }} fontSize="20px">
                          {node.name}
                        </h3>
                        <div className="s__content__main80">
                          <span>{node.tagline || node.body}</span>
                        </div>
                      </div>
                    </View>
                  </div>
                </GroupLink>
              </div>
            )
          })} */}
        </div>
      </div>
    </PageContainer>
  )
}

DiscoverBlogs = withData(DiscoverBlogs, {
  query: discoverBlogsQuery,
  variables
})
