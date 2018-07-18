import React, { Component } from 'react'
import CultureScreen from 'screens/CultureScreen'
import fetch from 'isomorphic-unfetch'
import { AlternateMenu } from 'components/AlternateMenu'
import { DATA_URL } from 'constants'

export default class Stream extends Component {
  static async getInitialProps({ query }) {
    const groups = await fetch(`${DATA_URL}v1/groups`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(r => r.json())

    return { id: query.id, groups }
  }

  render() {
    return (
      <>
        <AlternateMenu list={this.props.groups.list} />

        <CultureScreen id={this.props.id} />
      </>
    )
  }
}
