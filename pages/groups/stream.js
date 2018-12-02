import { withRouter } from 'next/router'
import React, { Component } from 'react'
import CultureScreen from 'screens/CultureScreen'
import fetch from 'isomorphic-unfetch'
import { AlternateMenu } from 'components/AlternateMenu'
import { DATA_URL } from 'constants'
import Appbar from 'components/AppBar'
import { groups } from 'data/groups'

export default class Stream extends Component {
  // static getInitialProps({ query }) {
  //   // const groups = await fetch(
  //   //   `${DATA_URL}v2?query={feed{groups{edges{node{name,permalink,id}}}}}`,
  //   //   {
  //   //     headers: {
  //   //       Accept: 'application/json',
  //   //       'Content-Type': 'application/json'
  //   //     }
  //   //   }
  //   // ).then(r => r.json())

  //   return { id: query.id, groups: groups.data.feed.groups }
  // }

  render() {
    return (
      <>
        <Appbar />
        <AlternateMenu list={groups.data.feed.groups.edges} />

        <CultureScreen id={this.props.router.query.id} />
      </>
    )
  }
}

Stream = withRouter(Stream)
