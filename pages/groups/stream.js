import React, { Component } from 'react'
import CultureScreen from 'screens/CultureScreen'
import fetch from 'isomorphic-unfetch'
import { AlternateMenu } from 'components/AlternateMenu'
import { DATA_URL } from 'constants'
import Appbar from 'components/AppBar'

export default class Stream extends Component {
  static async getInitialProps({ query }) {
    const groups = await fetch(
      `${DATA_URL}v2?query={feed{groups{edges{node{name,permalink,id}}}}}`,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }
    ).then(r => r.json())

    return { id: query.id, groups: groups.data.feed.groups }
  }

  render() {
    return (
      <>
        <Appbar />
        <AlternateMenu list={this.props.groups.edges} />

        <CultureScreen id={this.props.id} />
      </>
    )
  }
}
