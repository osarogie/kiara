import { withNavigation } from 'react-navigation'
import React from 'react'
import Feed from 'renderers/Feed'

import getNavigation from 'helpers/getNavigation'
import { AlternateMenu } from 'components/AlternateMenu'

import Col from 'antd/lib/col'
import Row from 'antd/lib/row'
import Anchor from 'antd/lib/anchor'

import { AppBar } from 'components/AppBar'
import { groups } from 'data/groups'
import { NUBLUE } from 'ui'
import { Sidebar } from 'views/feed/sidebar/Sidebar'

import 'homepage.scss'

export default class FeedScreen extends React.Component {
  render() {
    const { navigation } = this.props
    return (
      <div>
        <AppBar />
        <AlternateMenu list={groups.data.feed.groups.edges} />

        <div className="row">
          <Row>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 16 }}
              lg={{ span: 16 }}
            >
              <div className="jumbotron">
                <div className="container">
                  <h3 className="line line-1">What's your story?</h3>
                  <h2 className="line line-2">Tell it on TheCommunity</h2>
                  <h1 className="line line-3">
                    Discover Africa's most powerful written voices.
                  </h1>
                  <a className="button" href="/new-discussion" role="button">
                    Share your story
                  </a>
                  <a className="button" href="/new-culture" role="button">
                    Start a culture
                  </a>
                  <a className="button" href="/new-poll" role="button">
                    Create voting forms
                  </a>
                </div>
              </div>
              <Row>
                <Col
                  xs={{ span: 24 }}
                  sm={{ span: 24 }}
                  md={{ span: 24 }}
                  lg={{ span: 18 }}
                >
                  <Feed {...getNavigation(navigation)} />
                </Col>
              </Row>
            </Col>
            <Col
              xs={{ span: 0 }}
              sm={{ span: 0 }}
              md={{ span: 8 }}
              lg={{ span: 8 }}
            >
              <Sidebar />
            </Col>
          </Row>
        </div>
        <style jsx>
          {`
            .row {
              width: 100%;
              max-width: 1100px;
              margin-left: auto;
              margin-right: auto;
            }
            .button {
              display: inline-block;
              margin-bottom: 6px;
            }
          `}
        </style>
        {/* <TopBar navigation={this.props.navigation} /> */}
      </div>
    )
  }
}
FeedScreen = withNavigation(FeedScreen)
