import React from 'react'
import { View } from 'react-native'
import styles from 'styles'
import Editor from 'components/Editor'
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
      <>
        <NewPostAppBar clear />

        <Editor culture={culture} editing_mode={editing_mode} id={id} />
      </>
    )
  }
}
