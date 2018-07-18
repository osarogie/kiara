import React, { Component } from 'react'
import CultureScreen from 'screens/CultureScreen'
import { AppBar } from 'components/AppBar'

export default class Group extends Component {
  static async getInitialProps({ query }) {
    // const groups = await fetch(
    //   `${DATA_URL}v2?query={feed{groups{edges{node{name,permalink,id}}}}}`,
    //   {
    //     headers: {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json'
    //     }
    //   }
    // ).then(r => r.json())

    return { id: query.id }
  }

  render() {
    return (
      <>
        <AppBar />

        <CultureScreen id={this.props.id} />
      </>
    )
  }
}
