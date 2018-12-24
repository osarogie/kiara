import React, { Component } from 'react'
import ProfileScreen from 'screens/ProfileScreen'
import { AppBar } from 'components/AppBar'
import Affix from 'antd/lib/affix'

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
        <div className="elevated">
          <Affix>
            <AppBar />
          </Affix>
        </div>
        <ProfileScreen id={this.props.id} />
      </>
    )
  }
}
