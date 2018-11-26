import React, { Component } from 'react'
import DiscussionScreen from 'screens/DiscussionScreen'
import { AppBar } from 'components/AppBar'

export default class Stream extends Component {
  static getInitialProps({ query }) {
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
        <AppBar clear />

        <DiscussionScreen id={this.props.id} />
      </>
    )
  }
}
