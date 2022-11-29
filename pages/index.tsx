import {
  latestQuery,
  latestDiscussionList,
  latestFeedPaginationQuery
} from '../src/relay/query/latest'
import { CustomHead } from 'components/_partials/CustomHead'
import { newStoryLink, newGroup, newPoll } from 'helpers/links'
import { SecureLink } from 'components/SecureLink'
import React from 'react'
import { createPaginationContainer } from 'react-relay'

import { AlternateMenu } from 'components/AlternateMenu'

import Col from 'antd/lib/col'
import Row from 'antd/lib/row'

import { AppBar } from 'components/AppBar'
import { groups } from 'data/groups'
import { Sidebar } from 'views/feed/sidebar/Sidebar'

import withData from 'lib/withData'
import PostList from 'fragments/PostList'

const streams = groups.data.feed.groups.edges

const variables = {
  cursor: null,
  count: 10
}

export default withData(
  function FeedLatest({ feed }) {
    return (
      <div>
        <CustomHead title="TheCommunity: Africa's most powerful written voices" />
        <AppBar className="opaque" />
        <AlternateMenu list={streams} />

        <div className="inner table">
          <Row>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 16 }}
              md={{ span: 14 }}
              lg={{ span: 14 }}
            >
              <div className="jumbotron">
                <div className="container">
                  <h3 className="line line-1 text-2xl font-bold">
                    What's your story?
                  </h3>
                  <h2 className="line line-2 text-xl">
                    Tell it on TheCommunity
                  </h2>
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
      </div>
    )
  },
  { query: latestQuery, variables }
)

const PaginationContainer = createPaginationContainer(
  PostList,
  {
    discussionList: latestDiscussionList
  },
  {
    direction: 'forward',
    getConnectionFromProps(props) {
      return props?.discussionList?.discussions
    },
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount
      }
    },
    getVariables(_props, { count, cursor }) {
      return {
        count,
        cursor
      }
    },
    query: latestFeedPaginationQuery
  }
)
