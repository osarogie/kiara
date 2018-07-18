import React, { Component } from 'react'
import ProfileScreen from 'screens/ProfileScreen'
import { AppBar } from 'components/AppBar'

export default class Stream extends Component {
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

        <ProfileScreen id={this.props.id} />
      </>
    )
  }
}
