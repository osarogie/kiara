import { BrowserLink } from './../../src/components/BrowserLink'
import { CustomHead } from 'components/_partials/CustomHead'
import {
  FeedPaginationContainer,
  createFeedPaginationContainer
} from 'renderers/Feed'
import { Constants } from 'constants'
import { newStoryLink, newGroup, newPoll } from 'helpers/links'
import { SecureLink } from 'components/SecureLink'
import { withNavigation } from 'react-navigation'
import React from 'react'
import Feed from 'renderers/Feed'
import { graphql, createPaginationContainer } from 'react-relay'

import { AlternateMenu } from 'components/AlternateMenu'

import Col from 'antd/lib/col'
import Row from 'antd/lib/row'
import Anchor from 'antd/lib/anchor'

import { AppBar } from 'components/AppBar'
import { groups } from 'data/groups'
import { NUBLUE } from 'ui'
import { Sidebar } from 'views/feed/sidebar/Sidebar'

import 'homepage.scss'
import withData from 'lib/withData'
import PostList from 'fragments/PostList'

const streams = groups.data.feed.groups.edges

const query = graphql`
  query latestQuery($count: Int!, $cursor: String) {
    ...Viewer_viewer

    feed {
      ...latest_discussionList
    }
  }
`

const variables = {
  cursor: null,
  count: 10
}

export default function FeedLatest({ feed, viewer }) {
  return (
    <div>
      <CustomHead title="TheCommunity: Africa's most powerful written voices" />
      <AppBar className="opaque" />
      <AlternateMenu list={streams} />

      <div className="row">
        <Row>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 16 }}
            md={{ span: 14 }}
            lg={{ span: 14 }}
          >
            <div className="jumbotron">
              <div className="container">
                <h3 className="line line-1">What's your story?</h3>
                <h2 className="line line-2">Tell it on TheCommunity</h2>
                <h1 className="line line-3">
                  Discover Africa's most powerful written voices.
                </h1>
                <SecureLink
                  message="Login to share your story"
                  className="button"
                  href={newStoryLink()}
                  role="button"
                >
                  Share your story
                </SecureLink>
                <SecureLink
                  className="button"
                  href={newGroup()}
                  message="Login to start your own blog"
                  role="button"
                >
                  Start a blog
                </SecureLink>
                <SecureLink
                  message="Login to create a voting poll"
                  className="button"
                  href={newPoll()}
                  role="button"
                >
                  Create voting forms
                </SecureLink>
              </div>
            </div>
            <div className="feed_filter">
              <BrowserLink href="/">Top Stories</BrowserLink>
              <BrowserLink href="/feed/latest">Latest</BrowserLink>
            </div>
            <PaginationContainer discussionList={feed} />
          </Col>
          <Col
            xs={{ span: 0 }}
            sm={{ span: 8 }}
            md={{ span: 10 }}
            lg={{ span: 10 }}
          >
            <Sidebar />
          </Col>
        </Row>
      </div>

      {/* <TopBar navigation={this.props.navigation} /> */}
    </div>
  )
}

FeedLatest = withData(FeedLatest, { query, variables })

const PaginationContainer = createPaginationContainer(
  PostList,
  {
    discussionList: graphql`
      fragment latest_discussionList on Feed {
        discussions(first: $count, after: $cursor, by_latest: true)
          @connection(key: "latest_discussions") {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            node {
              id
              ...PostListItem_discussion
            }
          }
        }
      }
    `
  },
  {
    direction: 'forward',
    getConnectionFromProps(props) {
      return props.discussionList && props.discussionList.top_stories
    },
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount
      }
    },
    getVariables(props, { count, cursor, size }, fragmentVariables) {
      return {
        count,
        cursor
      }
    },
    variables: { cursor: null },
    query: graphql`
      query latestFeedPaginationQuery($count: Int!, $cursor: String) {
        feed {
          ...latest_discussionList
        }
      }
    `
  }
)
