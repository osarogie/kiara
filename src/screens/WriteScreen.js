// @flow

import React from 'react'
import { View } from 'react-native'
import styles from 'styles'
import Editor from 'components/Editor'
import getNavigation from 'helpers/getNavigation'
import { withNavigation } from 'react-navigation'
import NoSSR from 'react-no-ssr'
import LoaderBox from 'components/LoaderBox'
import { NewPostAppBar } from 'components/NewPostAppBar'

export default class WriteScreen extends React.Component {
  render() {
    // const { culture } = this.props.navigation.state.params
    const { params } = this.props.navigation.state
    let culture = null
    let id = null
    let editing_mode = false

    if (params) {
      culture = params.culture
      id = params.id
      editing_mode = params.editing_mode
    }

    return (
      <View style={styles.container}>
        <NewPostAppBar clear />

        {/* {this.renderToolbar()} */}
        {/* <NoSSR onSSR={<LoaderBox />}> */}
        <Editor
          culture={culture}
          // ref={e => (this.editor = e)}
          editing_mode={editing_mode}
          id={id}
          {...getNavigation(this.props.navigation)}
        />
        {/* </NoSSR> */}
      </View>
    )
  }
}
WriteScreen = withNavigation(WriteScreen)
