import { FeedPaginationContainer } from './../renderers/Feed'
import Head from 'next/head'
import { Constants } from 'constants'
import { newStoryLink, newGroup, newPoll } from './../helpers/links'
import { BrowserLink } from 'components/BrowserLink'
import { withNavigation } from 'react-navigation'
import React from 'react'
import Feed from 'renderers/Feed'

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

const streams = groups.data.feed.groups.edges

const query = graphql`
  query FeedScreenQuery($count: Int!, $cursor: String) {
    ...Viewer_viewer @relay(mask: false)

    feed {
      ...Feed_discussionList
    }
  }
`

const variables = {
  cursor: null,
  count: 10
}

export default function FeedScreen({ feed, viewer }) {
  return (
    <div>
      <Head>
        <title key="title">
          TheCommunity: Africa's most powerful written voices
        </title>
      </Head>
      <AppBar viewer={viewer} />
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
                <a className="button" href={newStoryLink()} role="button">
                  Share your story
                </a>
                <a className="button" href={newGroup()} role="button">
                  Start a culture
                </a>
                <a className="button" href={newPoll()} role="button">
                  Create voting forms
                </a>
              </div>
            </div>

            <FeedPaginationContainer discussionList={feed} />
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

FeedScreen = withData(FeedScreen, { query, variables })
